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
        { fr: 'Freeverb', en: 'Freeverb' },
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
        await this.buildFreeverb(source)
      } else if (this.reverbType === 1) {
        this.buildConvolution(source)
      }
    },
    async buildFreeverb(source) {
      const ctx = this.ctx

      // Load pre-compiled Faust Freeverb WASM
      const dspMeta = await (await fetch('/dsp/dsp-meta.json')).json()
      const dspModule = await WebAssembly.compileStreaming(await fetch('/dsp/dsp-module.wasm'))

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
      if (!this.audioReady) return
      this.setFaustParam('/Freeverb/0x00/RoomSize', val)
    },
    onDampChange(val) {
      if (!this.audioReady) return
      this.setFaustParam('/Freeverb/0x00/Damp', val)
    },
    onBalanceChange(val) {
      if (!this.audioReady) return
      if (this.faustNode) {
        this.setFaustParam('/Freeverb/Wet', val)
      } else if (this.convNodes) {
        const t = this.ctx.currentTime
        this.dryGain.gain.setTargetAtTime(1 - val, t, 0.02)
        this.convNodes[1].gain.setTargetAtTime(val, t, 0.02)
      }
    }
  }
}
</script>
