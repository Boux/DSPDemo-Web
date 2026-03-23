<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-group">
        <label class="control-label">{{ t('filterType') }}</label>
        <select v-model.number="filterTypeIdx" @change="onFilterTypeChange">
          <option v-for="(f, i) in filterTypes" :key="i" :value="i">{{ f[$i18n.locale] }}</option>
        </select>
      </div>
      <ControlSlider :label="t('cutoffFreq')" v-model="frequency" :mini="50" :maxi="15000" :log="true" @update:modelValue="onFreqChange" />
      <ControlSlider :label="t('qFactor')" v-model="qFactor" :mini="0.5" :maxi="10" :log="true" @update:modelValue="onQChange" />
      <ControlSlider :label="t('boostCut')" v-model="boost" :mini="-48" :maxi="12" :disabled="!isEqFilter" @update:modelValue="onBoostChange" />
      <div class="control-group">
        <label class="control-label">{{ t('filterOrder') }}</label>
        <select v-model.number="order" @change="onOrderChange" :disabled="isEqFilter">
          <option v-for="o in [2, 4, 6, 8]" :key="o" :value="o">{{ o }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

const FILTER_TYPES = [
  { fr: 'Passe-bas', en: 'Lowpass', biquad: 'lowpass' },
  { fr: 'Passe-haut', en: 'Highpass', biquad: 'highpass' },
  { fr: 'Passe-bande', en: 'Bandpass', biquad: 'bandpass' },
  { fr: 'Réjecteur de bande', en: 'Bandstop', biquad: 'notch' },
  { fr: 'Crête/Creux (peak/notch)', en: 'Peak/Notch', biquad: 'peaking' },
  { fr: 'Dégradé passe-bas', en: 'Low Shelf', biquad: 'lowshelf' },
  { fr: 'Dégradé passe-haut', en: 'High Shelf', biquad: 'highshelf' }
]

export default {
  name: 'Mod02Filters',
  components: { SourcePanel, ControlSlider },
  data() {
    return {
      filterTypeIdx: 0,
      filterTypes: FILTER_TYPES,
      frequency: 1000,
      qFactor: 1,
      boost: -6,
      order: 2,
      filters: [],
      outputGain: null
    }
  },
  computed: {
    engine() { return useAudioEngineStore() },
    isEqFilter() { return this.filterTypeIdx >= 4 }
  },
  mounted() { this.setup() },
  beforeUnmount() { this.teardown() },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        filterType: { fr: 'Type de filtre', en: 'Filter Type' },
        cutoffFreq: { fr: 'Fréquence de coupure/centrale', en: 'Cutoff/Center Frequency' },
        qFactor: { fr: 'Facteur de qualité', en: 'Q Factor' },
        boostCut: { fr: 'Augmentation/réduction (dB)', en: 'Boost/Cut (dB)' },
        filterOrder: { fr: 'Ordre du filtre', en: 'Filter Order' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      if (!ctx || !this.engine.sourcePanel) return

      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 1

      // Disconnect source from master, route through our filter chain
      this.engine.sourcePanel.output.disconnect(this.engine.masterGain)

      this.buildFilterChain()
    },
    teardown() {
      // Restore direct connection
      if (this.engine.sourcePanel && this.engine.masterGain) {
        this.disconnectFilters()
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    buildFilterChain() {
      this.disconnectFilters()
      const ctx = this.engine.context
      const source = this.engine.sourcePanel.output
      const stages = this.isEqFilter ? 1 : this.order / 2

      this.filters = []
      for (let i = 0; i < stages; i++) {
        const f = ctx.createBiquadFilter()
        f.type = FILTER_TYPES[this.filterTypeIdx].biquad
        f.frequency.value = this.frequency
        f.Q.value = this.qFactor
        if (this.isEqFilter) f.gain.value = this.boost
        this.filters.push(f)
      }

      // Chain: source -> filter[0] -> ... -> filter[n] -> masterGain
      source.connect(this.filters[0])
      for (let i = 0; i < this.filters.length - 1; i++) {
        this.filters[i].connect(this.filters[i + 1])
      }
      this.filters[this.filters.length - 1].connect(this.engine.masterGain)
    },
    disconnectFilters() {
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
      }
      this.filters.forEach(f => {
        try { f.disconnect() } catch (e) { /* */ }
      })
      this.filters = []
    },
    onFilterTypeChange() {
      this.buildFilterChain()
    },
    onFreqChange(val) {
      this.filters.forEach(f => f.frequency.setTargetAtTime(val, this.engine.context.currentTime, 0.05))
    },
    onQChange(val) {
      this.filters.forEach(f => f.Q.setTargetAtTime(val, this.engine.context.currentTime, 0.05))
    },
    onBoostChange(val) {
      this.filters.forEach(f => f.gain.setTargetAtTime(val, this.engine.context.currentTime, 0.05))
    },
    onOrderChange() {
      if (!this.isEqFilter) this.buildFilterChain()
    }
  }
}
</script>

<style lang="sass">
.module-controls
  padding: var(--sp-1)
  display: flex
  flex-direction: column
  gap: var(--sp-1)

.control-group
  margin-bottom: var(--sp-1)

  select
    width: 100%
</style>
