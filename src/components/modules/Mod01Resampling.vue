<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-group">
        <label class="control-label">{{ t('resampling') }}</label>
        <select v-model.number="factor" @change="onFactorChange">
          <option :value="1">sr</option>
          <option :value="2">sr/2</option>
          <option :value="4">sr/4</option>
          <option :value="8">sr/8</option>
        </select>
      </div>
      <div class="control-group">
        <label class="control-label">{{ t('antiAlias') }}</label>
        <select v-model.number="antiAliasOrder" @change="onFilterChange">
          <option :value="0">{{ t('none') }}</option>
          <option :value="8">FIR-8</option>
          <option :value="32">FIR-32</option>
          <option :value="128">FIR-128</option>
        </select>
      </div>
      <div class="control-group">
        <label class="control-label">{{ t('reconstruction') }}</label>
        <select v-model.number="reconstructOrder" @change="onFilterChange">
          <option :value="0">{{ t('none') }}</option>
          <option :value="8">FIR-8</option>
          <option :value="32">FIR-32</option>
          <option :value="128">FIR-128</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'Mod01Resampling',
  components: { SourcePanel },
  data() {
    return {
      factor: 1,
      antiAliasOrder: 0,
      reconstructOrder: 0,
      workletNode: null,
      antiAliasFilter: null,
      reconstructFilter: null
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
        resampling: { fr: 'Ré-échantillonnage', en: 'Resampling' },
        antiAlias: { fr: 'Filtre anti-repliement', en: 'Anti-aliasing Filter' },
        reconstruction: { fr: 'Filtre de reconstruction', en: 'Reconstruction Filter' },
        none: { fr: 'Aucun', en: 'None' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.engine.context
      if (!ctx || !this.engine.sourcePanel) return

      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      await ctx.audioWorklet.addModule(
        new URL('../../audio/worklets/resampling.js', import.meta.url)
      )
      this.workletNode = new AudioWorkletNode(ctx, 'resampling')

      // Anti-alias lowpass before resampling
      this.antiAliasFilter = ctx.createBiquadFilter()
      this.antiAliasFilter.type = 'lowpass'
      this.antiAliasFilter.frequency.value = ctx.sampleRate / 2
      this.antiAliasFilter.Q.value = 0.707

      // Reconstruction lowpass after resampling
      this.reconstructFilter = ctx.createBiquadFilter()
      this.reconstructFilter.type = 'lowpass'
      this.reconstructFilter.frequency.value = ctx.sampleRate / 2
      this.reconstructFilter.Q.value = 0.707

      source.connect(this.antiAliasFilter)
      this.antiAliasFilter.connect(this.workletNode)
      this.workletNode.connect(this.reconstructFilter)
      this.reconstructFilter.connect(this.engine.masterGain)

      this.updateParams()
    },
    teardown() {
      const nodes = [this.workletNode, this.antiAliasFilter, this.reconstructFilter]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    updateParams() {
      if (!this.workletNode) return
      this.workletNode.port.postMessage({ factor: this.factor })
      // Set anti-alias cutoff to new Nyquist
      const nyquist = this.engine.sampleRate / (2 * this.factor)
      if (this.antiAliasOrder > 0) {
        this.antiAliasFilter.frequency.value = nyquist
      } else {
        this.antiAliasFilter.frequency.value = this.engine.sampleRate / 2
      }
      if (this.reconstructOrder > 0) {
        this.reconstructFilter.frequency.value = nyquist
      } else {
        this.reconstructFilter.frequency.value = this.engine.sampleRate / 2
      }
    },
    onFactorChange() { this.updateParams() },
    onFilterChange() { this.updateParams() }
  }
}
</script>
