<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-group">
        <label class="control-label">{{ t('distoType') }}</label>
        <select v-model.number="distoType" @change="onTypeChange">
          <option v-for="(d, i) in distoTypes" :key="i" :value="i">{{ d[$i18n.locale] }}</option>
        </select>
      </div>
      <ControlSlider label="Drive" v-model="drive" :mini="0" :maxi="1" @update:modelValue="onDriveChange" />
      <label class="control-label">
        <input type="checkbox" v-model="filterEnabled" @change="onFilterToggle" />
        {{ t('enableFilter') }}
      </label>
      <ControlSlider :label="t('cutoff')" v-model="cutoff" :mini="100" :maxi="20000" :log="true" @update:modelValue="onCutoffChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'
import { FaustMonoDspGenerator } from '@grame/faustwasm'
import distortionWasmUrl from '../../audio/faust/compiled/distortion.wasm?url'
import distortionMetaUrl from '../../audio/faust/compiled/distortion-meta.json?url'

export default {
  name: 'Mod10Distortion',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      distoType: 0,
      drive: 0.5,
      filterEnabled: false,
      cutoff: 5000,
      distoTypes: [
        { fr: 'Clipping', en: 'Clipping' },
        { fr: "Redresseur d'onde", en: 'Wave Rectifier' },
        { fr: 'Arctangente', en: 'Arctangent' },
        { fr: 'Waveshaper', en: 'Waveshaper' }
      ],
      faustNode: null,
      outputGain: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        distoType: { fr: 'Choix de la distorsion', en: 'Distortion Type' },
        enableFilter: { fr: 'Activer le filtre passe-bas', en: 'Enable Lowpass Filter' },
        cutoff: { fr: 'Fréquence de coupure du filtre', en: 'Filter Cutoff Frequency' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.ctx
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // Load pre-compiled Faust distortion
      const dspMeta = await (await fetch(distortionMetaUrl)).json()
      const dspModule = await WebAssembly.compileStreaming(await fetch(distortionWasmUrl))

      const generator = new FaustMonoDspGenerator()
      this.faustNode = await generator.createNode(ctx, 'distortion', {
        module: dspModule,
        json: JSON.stringify(dspMeta)
      })

      if (!this.faustNode) {
        console.warn('Failed to create Faust distortion node')
        return
      }

      // Set initial parameters
      this.faustNode.setParamValue('/distortion/type', this.distoType)
      this.faustNode.setParamValue('/distortion/drive', this.drive)
      this.faustNode.setParamValue('/distortion/filterOn', this.filterEnabled ? 1 : 0)
      this.faustNode.setParamValue('/distortion/cutoff', this.cutoff)

      // Output gain
      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 1

      source.connect(this.faustNode)
      this.faustNode.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      if (this.faustNode) {
        try { this.faustNode.disconnect() } catch (e) { /* */ }
        if (this.faustNode.destroy) this.faustNode.destroy()
        this.faustNode = null
      }
      if (this.outputGain) {
        try { this.outputGain.disconnect() } catch (e) { /* */ }
        this.outputGain = null
      }
      this.releaseSource()
    },
    onTypeChange() {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/distortion/type', this.distoType)
    },
    onDriveChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/distortion/drive', val)
    },
    onFilterToggle() {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/distortion/filterOn', this.filterEnabled ? 1 : 0)
    },
    onCutoffChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/distortion/cutoff', val)
    }
  }
}
</script>
