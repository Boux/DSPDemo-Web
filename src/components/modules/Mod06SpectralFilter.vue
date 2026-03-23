<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-row">
        <div class="control-group">
          <label class="control-label">{{ t('fftSize') }}</label>
          <select v-model.number="fftSizeIdx" @change="onFftChange">
            <option v-for="(s, i) in fftSizes" :key="i" :value="i">{{ s }}</option>
          </select>
        </div>
        <div class="control-group">
          <label class="control-label">{{ t('overlaps') }}</label>
          <select v-model.number="overlapIdx" @change="onFftChange">
            <option v-for="(o, i) in overlaps" :key="i" :value="i">{{ o }}</option>
          </select>
        </div>
      </div>
      <label class="control-label">{{ t('drawFilter') }}</label>
      <DrawableMultiSlider v-model="filterValues" :height="120" @update:modelValue="onFilterChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import DrawableMultiSlider from '../controls/DrawableMultiSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

const FFT_SIZES = [64, 128, 256, 512, 1024, 2048, 4096, 8192]
const OVERLAPS = [2, 4, 8, 16, 32]

export default {
  name: 'Mod06SpectralFilter',
  components: { SourcePanel, DrawableMultiSlider },
  data() {
    return {
      fftSizeIdx: 4,
      overlapIdx: 1,
      fftSizes: FFT_SIZES,
      overlaps: OVERLAPS,
      filterValues: new Array(256).fill(0),
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
        fftSize: { fr: 'Taille FFT', en: 'FFT Size' },
        overlaps: { fr: 'Chevauchements', en: 'Overlaps' },
        drawFilter: { fr: 'Dessiner le filtre (256 points)', en: 'Draw filter (256 points)' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.engine.context
      if (!ctx || !this.engine.sourcePanel) return

      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      await ctx.audioWorklet.addModule(
        new URL('../../audio/worklets/phase-vocoder.js', import.meta.url)
      )
      this.workletNode = new AudioWorkletNode(ctx, 'phase-vocoder', {
        processorOptions: { fftSize: FFT_SIZES[this.fftSizeIdx] }
      })
      this.workletNode.port.postMessage({ mode: 'filter', filterGains: this.filterValues })

      source.connect(this.workletNode)
      this.workletNode.connect(this.engine.masterGain)
    },
    teardown() {
      if (this.workletNode) try { this.workletNode.disconnect() } catch (e) { /* */ }
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    async onFftChange() {
      // Rebuild worklet with new FFT size
      if (this.workletNode) {
        try { this.workletNode.disconnect() } catch (e) { /* */ }
        if (this.engine.sourcePanel) try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
      }
      const ctx = this.engine.context
      this.workletNode = new AudioWorkletNode(ctx, 'phase-vocoder', {
        processorOptions: { fftSize: FFT_SIZES[this.fftSizeIdx] }
      })
      this.workletNode.port.postMessage({ mode: 'filter', filterGains: this.filterValues })
      this.engine.sourcePanel.output.connect(this.workletNode)
      this.workletNode.connect(this.engine.masterGain)
    },
    onFilterChange(values) {
      if (this.workletNode) {
        this.workletNode.port.postMessage({ filterGains: values })
      }
    }
  }
}
</script>
