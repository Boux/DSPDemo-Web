<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <p class="control-label">{{ t('bands') }}</p>
      <div class="mb-knobs">
        <LabelKnob :label="t('threshold')" v-model="threshold" :mini="-40" :maxi="0" @update:modelValue="updateCompressors" />
        <LabelKnob :label="t('ratio')" v-model="ratio" :mini="1" :maxi="20" @update:modelValue="updateCompressors" />
        <LabelKnob :label="t('attack')" v-model="attack" :mini="0.001" :maxi="0.2" :log="true" @update:modelValue="updateCompressors" />
        <LabelKnob :label="t('release')" v-model="release" :mini="0.005" :maxi="0.5" :log="true" @update:modelValue="updateCompressors" />
        <LabelKnob label="gain" v-model="gain" :mini="-24" :maxi="24" @update:modelValue="updateGain" />
      </div>
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import LabelKnob from '../controls/LabelKnob.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

// Crossover frequencies: 0-150, 150-600, 600-3200, 3200+
const CROSSOVER_FREQS = [150, 600, 3200]

export default {
  name: 'Mod05MBCompress',
  components: { SourcePanel, LabelKnob },
  data() {
    return {
      threshold: -20, ratio: 1, attack: 0.01, release: 0.1, gain: 0,
      // Audio nodes
      lpFilters: [], hpFilters: [], compressors: [], bandGains: [],
      outputGain: null
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
        bands: { fr: 'Bandes: 0-150, 150-600, 600-3200, 3200+ Hz', en: 'Bands: 0-150, 150-600, 600-3200, 3200+ Hz' },
        threshold: { fr: 'seuil', en: 'thresh' },
        ratio: { fr: 'ratio', en: 'ratio' },
        attack: { fr: 'rise', en: 'rise' },
        release: { fr: 'fall', en: 'fall' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      if (!ctx || !this.engine.sourcePanel) return

      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = Math.pow(10, this.gain * 0.05)
      this.outputGain.connect(this.engine.masterGain)

      // Build 4-band crossover using cascaded LP/HP filters
      // Band 0: source -> LP(150)
      // Band 1: source -> HP(150) -> LP(600)
      // Band 2: source -> HP(600) -> LP(3200)
      // Band 3: source -> HP(3200)

      this.lpFilters = []
      this.hpFilters = []
      this.compressors = []

      for (let b = 0; b < 4; b++) {
        const comp = ctx.createDynamicsCompressor()
        comp.threshold.value = this.threshold
        comp.ratio.value = this.ratio
        comp.attack.value = this.attack
        comp.release.value = this.release
        comp.knee.value = 3

        if (b === 0) {
          // Low band: LP at 150
          const lp = ctx.createBiquadFilter()
          lp.type = 'lowpass'
          lp.frequency.value = CROSSOVER_FREQS[0]
          source.connect(lp)
          lp.connect(comp)
          this.lpFilters.push(lp)
        } else if (b === 3) {
          // High band: HP at 3200
          const hp = ctx.createBiquadFilter()
          hp.type = 'highpass'
          hp.frequency.value = CROSSOVER_FREQS[2]
          source.connect(hp)
          hp.connect(comp)
          this.hpFilters.push(hp)
        } else {
          // Mid bands: HP at low freq -> LP at high freq
          const hp = ctx.createBiquadFilter()
          hp.type = 'highpass'
          hp.frequency.value = CROSSOVER_FREQS[b - 1]
          const lp = ctx.createBiquadFilter()
          lp.type = 'lowpass'
          lp.frequency.value = CROSSOVER_FREQS[b]
          source.connect(hp)
          hp.connect(lp)
          lp.connect(comp)
          this.hpFilters.push(hp)
          this.lpFilters.push(lp)
        }

        comp.connect(this.outputGain)
        this.compressors.push(comp)
      }
    },
    teardown() {
      ;[...this.lpFilters, ...this.hpFilters, ...this.compressors, this.outputGain]
        .forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    updateCompressors() {
      const t = this.engine.context.currentTime
      this.compressors.forEach(c => {
        c.threshold.setTargetAtTime(this.threshold, t, 0.05)
        c.ratio.setTargetAtTime(Math.min(this.ratio, 20), t, 0.05)
        c.attack.setTargetAtTime(this.attack, t, 0.05)
        c.release.setTargetAtTime(this.release, t, 0.05)
      })
    },
    updateGain() {
      if (this.outputGain) {
        this.outputGain.gain.setTargetAtTime(
          Math.pow(10, this.gain * 0.05), this.engine.context.currentTime, 0.05
        )
      }
    }
  }
}
</script>

<style lang="sass">
.mb-knobs
  display: flex
  justify-content: center
  gap: 2px
  margin: 6px 0
</style>
