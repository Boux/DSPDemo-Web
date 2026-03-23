<template>
  <div class="vu-meter">
    <div v-for="(level, i) in levels" :key="i" class="vu-meter__channel">
      <div class="vu-meter__track">
        <div class="vu-meter__fill" :style="meterStyle(level)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAudioEngineStore } from '../../stores/audioEngine'
import { mapState } from 'pinia'

export default {
  name: 'VuMeter',
  props: {
    channels: { type: Number, default: 2 }
  },
  data() {
    return {
      levels: new Array(this.channels).fill(0),
      animFrameId: null,
      splitter: null,
      analysers: []
    }
  },
  computed: {
    ...mapState(useAudioEngineStore, ['isRunning', 'sourceReady'])
  },
  watch: {
    sourceReady(ready) {
      if (ready) {
        this.cleanupAnalysers()
        this.setupAnalysers()
      }
    }
  },
  mounted() {
    this.setupAnalysers()
    this.startMeter()
  },
  beforeUnmount() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId)
    this.cleanupAnalysers()
  },
  methods: {
    setupAnalysers() {
      const engine = useAudioEngineStore()
      if (!engine.context || !engine.masterGain) return

      this.splitter = engine.context.createChannelSplitter(this.channels)
      engine.masterGain.connect(this.splitter)

      this.analysers = []
      for (let i = 0; i < this.channels; i++) {
        const analyser = engine.context.createAnalyser()
        analyser.fftSize = 256
        analyser.smoothingTimeConstant = 0.8
        this.splitter.connect(analyser, i)
        this.analysers.push(analyser)
      }
    },
    cleanupAnalysers() {
      if (this.splitter) {
        try { this.splitter.disconnect() } catch (e) { /* */ }
      }
      this.analysers.forEach(a => {
        try { a.disconnect() } catch (e) { /* */ }
      })
      this.analysers = []
      this.splitter = null
    },
    startMeter() {
      const update = () => {
        if (this.isRunning && this.analysers.length > 0) {
          for (let ch = 0; ch < this.analysers.length; ch++) {
            const data = new Float32Array(this.analysers[ch].fftSize)
            this.analysers[ch].getFloatTimeDomainData(data)
            let peak = 0
            for (let i = 0; i < data.length; i++) {
              const abs = Math.abs(data[i])
              if (abs > peak) peak = abs
            }
            this.levels[ch] = Math.min(1, peak)
          }
        } else {
          this.levels.fill(0)
        }
        this.animFrameId = requestAnimationFrame(update)
      }
      update()
    },
    meterStyle(level) {
      const pct = level * 100
      let color = 'var(--vu-green)'
      if (level > 0.9) color = 'var(--vu-red)'
      else if (level > 0.7) color = 'var(--vu-yellow)'
      return { width: pct + '%', background: color }
    }
  }
}
</script>

<style lang="sass">
.vu-meter
  display: flex
  flex-direction: column
  gap: 2px
  width: 100%
  margin-top: var(--sp-1)

  &__channel
    height: 4px

  &__track
    height: 100%
    background: var(--color-bg)
    border-radius: 2px
    overflow: hidden

  &__fill
    height: 100%
    border-radius: 2px
    transition: width 0.05s linear
</style>
