<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <p class="peak-rms__line peak-rms__signal">{{ t('signalRed') }}</p>
      <p class="peak-rms__line peak-rms__peak">{{ t('peakGreen') }}: {{ peakValue }}</p>
      <p class="peak-rms__line peak-rms__rms">{{ t('rmsBlue') }}: {{ rmsValue }}</p>
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod05PeakRMS',
  components: { SourcePanel },
  mixins: [moduleAudioMixin],
  data() {
    return {
      peakValue: '0.000',
      rmsValue: '0.000',
      animFrameId: null,
      analyser: null
    }
  },
  computed: {},
  mounted() {
    this.startMeasure()
  },
  beforeUnmount() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId)
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        signalRed: { fr: 'Signal source en rouge', en: 'Source signal in red' },
        peakGreen: { fr: 'Valeur crête en vert', en: 'Peak value in green' },
        rmsBlue: { fr: 'Valeur RMS en bleu', en: 'RMS value in blue' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      // Create analyser to measure peak and RMS
      this.analyser = ctx.createAnalyser()
      this.analyser.fftSize = 2048
      this.engine.sourcePanel.output.connect(this.analyser)
      // Source still flows to masterGain (no disconnect needed — passthrough module)
    },
    teardown() {
      if (this.analyser) {
        try { this.analyser.disconnect() } catch (e) { /* */ }
      }
      // Don't disconnect sourcePanel from masterGain — it stays connected
    },
    startMeasure() {
      const update = () => {
        if (this.analyser && this.engine.isRunning) {
          const data = new Float32Array(this.analyser.fftSize)
          this.analyser.getFloatTimeDomainData(data)

          let peak = 0
          let sumSquares = 0
          for (let i = 0; i < data.length; i++) {
            const v = Math.abs(data[i])
            if (v > peak) peak = v
            sumSquares += data[i] * data[i]
          }
          const rms = Math.sqrt(sumSquares / data.length)

          this.peakValue = peak.toFixed(3)
          this.rmsValue = rms.toFixed(3)
        }
        this.animFrameId = requestAnimationFrame(update)
      }
      update()
    }
  }
}
</script>

<style lang="sass">
.peak-rms
  &__line
    padding: var(--sp-1) 0
    font-size: var(--font-size-base)

  &__signal
    color: var(--viz-line-ch2)

  &__peak
    color: var(--viz-line-ch1)

  &__rms
    color: var(--viz-line-ch3)
</style>
