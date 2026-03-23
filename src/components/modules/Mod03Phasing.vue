<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('baseFreq')" v-model="baseFreq" :mini="40" :maxi="1000" :log="true" @update:modelValue="onFreqChange" />
      <ControlSlider :label="t('spread')" v-model="spread" :mini="1.1" :maxi="4" :log="true" @update:modelValue="onSpreadChange" />
      <ControlSlider :label="t('feedback')" v-model="feedback" :mini="0" :maxi="99" @update:modelValue="onFeedChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

const NUM_ALLPASS = 12

export default {
  name: 'Mod03Phasing',
  components: { SourcePanel, ControlSlider },
  data() {
    return {
      baseFreq: 100,
      spread: 1.3,
      feedback: 50,
      allpassFilters: [],
      feedbackGain: null,
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
        baseFreq: { fr: 'Fréquence de base en Hz', en: 'Base Frequency (Hz)' },
        spread: { fr: 'Espacement des filtres', en: 'Filter Spread' },
        feedback: { fr: 'Réinjection en %', en: 'Feedback %' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      if (!ctx || !this.engine.sourcePanel) return

      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // Build 12 allpass filters in series
      this.allpassFilters = []
      for (let i = 0; i < NUM_ALLPASS; i++) {
        const f = ctx.createBiquadFilter()
        f.type = 'allpass'
        f.frequency.value = this.baseFreq * Math.pow(this.spread, i)
        f.Q.value = 1
        this.allpassFilters.push(f)
      }

      // Chain allpass filters
      for (let i = 0; i < NUM_ALLPASS - 1; i++) {
        this.allpassFilters[i].connect(this.allpassFilters[i + 1])
      }

      // Feedback: output of last allpass -> gain -> input of first allpass
      this.feedbackGain = ctx.createGain()
      this.feedbackGain.gain.value = this.feedback * 0.01
      this.allpassFilters[NUM_ALLPASS - 1].connect(this.feedbackGain)
      this.feedbackGain.connect(this.allpassFilters[0])

      // Output: mix dry + wet
      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 0.3

      source.connect(this.allpassFilters[0])
      this.allpassFilters[NUM_ALLPASS - 1].connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      this.allpassFilters.forEach(f => { try { f.disconnect() } catch (e) { /* */ } })
      const nodes = [this.feedbackGain, this.outputGain]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    onFreqChange(val) {
      const t = this.engine.context.currentTime
      this.allpassFilters.forEach((f, i) => {
        f.frequency.setTargetAtTime(val * Math.pow(this.spread, i), t, 0.05)
      })
    },
    onSpreadChange(val) {
      const t = this.engine.context.currentTime
      this.allpassFilters.forEach((f, i) => {
        f.frequency.setTargetAtTime(this.baseFreq * Math.pow(val, i), t, 0.05)
      })
    },
    onFeedChange(val) {
      this.feedbackGain.gain.setTargetAtTime(val * 0.01, this.engine.context.currentTime, 0.05)
    }
  }
}
</script>
