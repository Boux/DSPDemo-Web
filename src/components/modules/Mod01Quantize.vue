<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('bits')" v-model="bits" :mini="2" :maxi="16" :integer="true" @update:modelValue="onBitsChange" />
      <div class="control-group">
        <label class="control-label">{{ t('signal') }}</label>
        <select v-model.number="signalMode" @change="onSignalChange">
          <option :value="0">{{ t('degraded') }}</option>
          <option :value="1">{{ t('noiseOnly') }}</option>
        </select>
      </div>
      <div class="control-group">
        <label class="control-label">{{ t('dither') }}</label>
        <select v-model.number="ditherType" @change="onDitherChange">
          <option v-for="(d, i) in ditherTypes" :key="i" :value="i">{{ d[$i18n.locale] }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'Mod01Quantize',
  components: { SourcePanel, ControlSlider },
  data() {
    return {
      bits: 16,
      signalMode: 0,
      ditherType: 0,
      ditherTypes: [
        { fr: 'Aucun', en: 'None' },
        { fr: 'Rectangulaire', en: 'Rectangular' },
        { fr: 'Triangulaire', en: 'Triangular' },
        { fr: 'Gaussien', en: 'Gaussian' },
        { fr: 'Bruit hautes fréquences', en: 'High-frequency noise' },
        { fr: 'Bruit basses fréquences', en: 'Low-frequency noise' }
      ],
      workletNode: null
    }
  },
  computed: {
    engine() { return useAudioEngineStore() }
  },
  mounted() { this.setup() },
  beforeUnmount() { this.teardown() },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        bits: { fr: '# de bits de quantification', en: '# of quantization bits' },
        signal: { fr: 'Choisir le signal', en: 'Choose signal' },
        degraded: { fr: 'Signal dégradé', en: 'Degraded signal' },
        noiseOnly: { fr: 'Bruit de quantification', en: 'Quantization noise' },
        dither: { fr: 'Bruit de dispersion', en: 'Dither noise' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.engine.context
      if (!ctx || !this.engine.sourcePanel) return

      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      await ctx.audioWorklet.addModule(
        new URL('../../audio/worklets/quantize.js', import.meta.url)
      )
      this.workletNode = new AudioWorkletNode(ctx, 'quantize')

      source.connect(this.workletNode)
      this.workletNode.connect(this.engine.masterGain)
      this.updateParams()
    },
    teardown() {
      if (this.workletNode) try { this.workletNode.disconnect() } catch (e) { /* */ }
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    updateParams() {
      if (!this.workletNode) return
      this.workletNode.port.postMessage({
        bits: this.bits,
        ditherType: this.ditherType,
        showNoise: this.signalMode === 1
      })
    },
    onBitsChange() { this.updateParams() },
    onSignalChange() { this.updateParams() },
    onDitherChange() { this.updateParams() }
  }
}
</script>
