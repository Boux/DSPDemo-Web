<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-group">
        <label class="control-label">{{ t('reverbType') }}</label>
        <select v-model.number="reverbType" @change="onTypeChange">
          <option v-for="(r, i) in reverbTypes" :key="i" :value="i">{{ r[$i18n.locale] }}</option>
        </select>
      </div>
      <ControlSlider :label="t('roomSize')" v-model="roomSize" :mini="0" :maxi="1" @update:modelValue="onRoomChange" />
      <ControlSlider :label="t('damping')" v-model="damping" :mini="0" :maxi="1" @update:modelValue="onDampChange" />
      <ControlSlider :label="t('balance')" v-model="balance" :mini="0" :maxi="1" @update:modelValue="onBalanceChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'
import { FaustMonoDspGenerator } from '@grame/faustwasm'
import freeverbWasmUrl from '../../audio/faust/compiled/freeverb.wasm?url'
import freeverbMetaUrl from '../../audio/faust/compiled/freeverb-meta.json?url'
import schroeder1WasmUrl from '../../audio/faust/compiled/schroeder1.wasm?url'
import schroeder1MetaUrl from '../../audio/faust/compiled/schroeder1-meta.json?url'
import schroeder2WasmUrl from '../../audio/faust/compiled/schroeder2.wasm?url'
import schroeder2MetaUrl from '../../audio/faust/compiled/schroeder2-meta.json?url'
import fdnWasmUrl from '../../audio/faust/compiled/fdn.wasm?url'
import fdnMetaUrl from '../../audio/faust/compiled/fdn-meta.json?url'

export default {
  name: 'Mod03Reverb',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      reverbType: 0,
      roomSize: 0.5,
      damping: 0.5,
      balance: 0.33,
      reverbTypes: [
        { fr: 'Schroeder modèle 1', en: 'Schroeder Model 1' },
        { fr: 'Schroeder modèle 2', en: 'Schroeder Model 2' },
        { fr: 'Freeverb', en: 'Freeverb' },
        { fr: 'Réseau de délais récursifs', en: 'Feedback Delay Network' },
        { fr: 'Réverbe par convolution', en: 'Convolution Reverb' }
      ],
      faustNode: null,
      convNodes: null,
      dryGain: null,
      reverbOutput: null,
      irBuffer: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        reverbType: { fr: 'Type de réverbération', en: 'Reverb Type' },
        roomSize: { fr: 'Taille de la pièce', en: 'Room Size' },
        damping: { fr: 'Atténuation hautes fréquences', en: 'High Frequency Damping' },
        balance: { fr: 'Balance original/réverbéré', en: 'Balance dry/reverb' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.ctx
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // Dry path
      this.dryGain = ctx.createGain()
      this.dryGain.gain.value = 1

      // Output mixer
      this.reverbOutput = ctx.createGain()
      this.reverbOutput.gain.value = 1

      source.connect(this.dryGain)
      this.dryGain.connect(this.reverbOutput)
      this.reverbOutput.connect(this.engine.masterGain)

      // Load IR for convolution
      this.loadIR()

      // Build initial effect
      await this.buildEffect(source)
    },
    async loadIR() {
      try {
        const response = await fetch(new URL('../../assets/audio/IRMediumHallStereo.wav', import.meta.url))
        const arrayBuffer = await response.arrayBuffer()
        this.irBuffer = await this.ctx.decodeAudioData(arrayBuffer)
      } catch (e) {
        console.warn('Failed to load IR:', e)
      }
    },
    async buildEffect(source) {
      this.cleanupEffect()

      if (this.reverbType === 0) {
        this._paramPrefix = '/schroeder1'
        await this.createFaustReverb(source, schroeder1WasmUrl, schroeder1MetaUrl, 'schroeder1', '/schroeder1')
      } else if (this.reverbType === 1) {
        this._paramPrefix = '/schroeder2'
        await this.createFaustReverb(source, schroeder2WasmUrl, schroeder2MetaUrl, 'schroeder2', '/schroeder2')
      } else if (this.reverbType === 2) {
        this._paramPrefix = 'freeverb'
        await this.buildFreeverb(source)
      } else if (this.reverbType === 3) {
        this._paramPrefix = '/fdn'
        await this.createFaustReverb(source, fdnWasmUrl, fdnMetaUrl, 'fdn', '/fdn')
      } else if (this.reverbType === 4) {
        this._paramPrefix = null
        this.buildConvolution(source)
      }
    },
    async createFaustReverb(source, wasmUrl, metaUrl, name, paramPrefix) {
      const dspMeta = await (await fetch(metaUrl)).json()
      const dspModule = await WebAssembly.compileStreaming(await fetch(wasmUrl))
      const generator = new FaustMonoDspGenerator()
      this.faustNode = await generator.createNode(this.ctx, name, { module: dspModule, json: JSON.stringify(dspMeta) })
      if (!this.faustNode) return
      this.faustNode.setParamValue(paramPrefix + '/roomSize', this.roomSize)
      this.faustNode.setParamValue(paramPrefix + '/damping', this.damping)
      this.faustNode.setParamValue(paramPrefix + '/wet', this.balance)
      source.connect(this.faustNode)
      this.faustNode.connect(this.reverbOutput)
      this.dryGain.gain.value = 0
    },
    async buildFreeverb(source) {
      const ctx = this.ctx

      // Load pre-compiled Faust Freeverb WASM
      const dspMeta = await (await fetch(freeverbMetaUrl)).json()
      const dspModule = await WebAssembly.compileStreaming(await fetch(freeverbWasmUrl))

      const generator = new FaustMonoDspGenerator()
      this.faustNode = await generator.createNode(ctx, 'freeverb', { module: dspModule, json: JSON.stringify(dspMeta) })

      if (!this.faustNode) {
        console.warn('Failed to create Faust Freeverb node')
        return
      }

      // Set initial parameters
      this.setFaustParam('/Freeverb/0x00/RoomSize', this.roomSize)
      this.setFaustParam('/Freeverb/0x00/Damp', this.damping)
      this.setFaustParam('/Freeverb/Wet', this.balance)

      source.connect(this.faustNode)
      this.faustNode.connect(this.reverbOutput)

      // Faust handles dry/wet internally
      this.dryGain.gain.value = 0
    },
    buildConvolution(source) {
      const convolver = this.ctx.createConvolver()
      if (this.irBuffer) {
        convolver.buffer = this.irBuffer
      }
      const wetGain = this.ctx.createGain()
      wetGain.gain.value = this.balance
      this.dryGain.gain.value = 1 - this.balance

      source.connect(convolver)
      convolver.connect(wetGain)
      wetGain.connect(this.reverbOutput)

      this.convNodes = [convolver, wetGain]
    },
    setFaustParam(address, value) {
      if (this.faustNode && this.faustNode.setParamValue) {
        this.faustNode.setParamValue(address, value)
      }
    },
    cleanupEffect() {
      if (this.faustNode) {
        try { this.faustNode.disconnect() } catch (e) { /* */ }
        if (this.faustNode.destroy) this.faustNode.destroy()
        this.faustNode = null
      }
      if (this.convNodes) {
        this.convNodes.forEach(n => { try { n.disconnect() } catch (e) { /* */ } })
        this.convNodes = null
      }
    },
    teardown() {
      this.cleanupEffect()
      if (this.dryGain) try { this.dryGain.disconnect() } catch (e) { /* */ }
      if (this.reverbOutput) try { this.reverbOutput.disconnect() } catch (e) { /* */ }
      this.releaseSource()
    },
    async onTypeChange() {
      if (!this.audioReady) return
      const source = this.engine.sourcePanel.output
      try { source.disconnect() } catch (e) { /* */ }
      source.connect(this.dryGain)
      this.dryGain.connect(this.reverbOutput)
      await this.buildEffect(source)
    },
    onRoomChange(val) {
      if (!this.audioReady || !this.faustNode) return
      if (this._paramPrefix === 'freeverb') {
        this.setFaustParam('/Freeverb/0x00/RoomSize', val)
      } else {
        this.setFaustParam(this._paramPrefix + '/roomSize', val)
      }
    },
    onDampChange(val) {
      if (!this.audioReady || !this.faustNode) return
      if (this._paramPrefix === 'freeverb') {
        this.setFaustParam('/Freeverb/0x00/Damp', val)
      } else {
        this.setFaustParam(this._paramPrefix + '/damping', val)
      }
    },
    onBalanceChange(val) {
      if (!this.audioReady) return
      if (this.faustNode) {
        if (this._paramPrefix === 'freeverb') {
          this.setFaustParam('/Freeverb/Wet', val)
        } else {
          this.setFaustParam(this._paramPrefix + '/wet', val)
        }
      } else if (this.convNodes) {
        const t = this.ctx.currentTime
        this.dryGain.gain.setTargetAtTime(1 - val, t, 0.02)
        this.convNodes[1].gain.setTargetAtTime(val, t, 0.02)
      }
    }
  }
}
</script>
