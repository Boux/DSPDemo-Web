<template>
  <div class="scope-canvas">
    <canvas ref="canvas" class="scope-canvas__el"></canvas>
  </div>
</template>

<script>
import { scopeCanvasMixin } from '../../mixins/scopeCanvas'

export default {
  name: 'Oscilloscope',
  mixins: [scopeCanvasMixin],
  data() {
    return {
      refSnippet: null
    }
  },
  methods: {
    findTriggerByCorrelation(data, samplesToShow) {
      const ref = this.refSnippet
      if (!ref || ref.length === 0) return 0

      const refLen = ref.length
      const searchEnd = Math.min(data.length - samplesToShow, Math.floor(data.length / 2))
      if (searchEnd <= 0) return 0

      let bestOffset = 0
      let bestCorr = -Infinity

      for (let offset = 0; offset < searchEnd; offset++) {
        let sum = 0
        for (let j = 0; j < refLen; j++) {
          sum += ref[j] * data[offset + j]
        }
        if (sum > bestCorr) {
          bestCorr = sum
          bestOffset = offset
        }
      }

      return bestOffset
    },

    draw(c, w, h) {
      // Horizontal grid
      c.strokeStyle = '#1a1a24'
      c.lineWidth = 0.5
      for (let i = 1; i < 4; i++) {
        const y = (i / 4) * h
        c.beginPath()
        c.moveTo(0, y)
        c.lineTo(w, y)
        c.stroke()
      }
      c.strokeStyle = '#252530'
      c.beginPath()
      c.moveTo(0, h / 2)
      c.lineTo(w, h / 2)
      c.stroke()

      const sd = this.getScopeData()
      if (!sd) return
      const { engine, ui, data, bufLen, samplesToShow, displayGain } = sd

      // Correlation-based sync trigger
      let triggerOffset = 0
      if (ui.scope.forceSync) {
        const sourceFreq = engine.sourcePanel ? engine.sourcePanel.currentFrequency : 0
        let refLength
        if (sourceFreq > 0) {
          refLength = Math.round(engine.sampleRate / sourceFreq)
        } else {
          refLength = Math.min(256, Math.floor(samplesToShow / 4))
        }
        refLength = Math.max(16, Math.min(refLength, Math.floor(bufLen / 4)))

        if (this.refSnippet && this.refSnippet.length === refLength) {
          triggerOffset = this.findTriggerByCorrelation(data, samplesToShow)
        }
        this.refSnippet = data.slice(triggerOffset, triggerOffset + refLength)
      } else {
        this.refSnippet = null
      }

      // Draw waveform
      c.strokeStyle = '#4ade80'
      c.lineWidth = 1.5
      c.beginPath()

      const end = Math.min(samplesToShow, bufLen - triggerOffset)
      for (let i = 0; i < end; i++) {
        const x = (i / samplesToShow) * w
        const sample = data[triggerOffset + i] * displayGain
        const y = (1 - sample) * h / 2
        if (i === 0) {
          c.moveTo(x, y)
        } else {
          c.lineTo(x, y)
        }
      }
      c.stroke()
    }
  }
}
</script>

<style lang="sass">
.scope-canvas
  position: relative
  width: 100%
  height: 100%
  min-height: 80px

  &__el
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    border-radius: 2px
</style>
