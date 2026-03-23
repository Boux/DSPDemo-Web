<template>
  <div class="oscilloscope">
    <canvas ref="canvas" class="oscilloscope__canvas"></canvas>
  </div>
</template>

<script>
import { useAudioEngineStore } from '../../stores/audioEngine'
import { useUiStateStore } from '../../stores/uiState'
import { rescale } from '../../utils/dspMath'

export default {
  name: 'Oscilloscope',
  data() {
    return {
      animFrameId: null,
      // Reference snippet from previous frame for correlation trigger
      refSnippet: null
    }
  },
  mounted() {
    this.resizeCanvas()
    window.addEventListener('resize', this.resizeCanvas)
    this.startRenderLoop()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeCanvas)
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId)
  },
  methods: {
    resizeCanvas() {
      const canvas = this.$refs.canvas
      if (!canvas) return
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = Math.floor(rect.width)
      canvas.height = Math.floor(rect.height)
    },
    startRenderLoop() {
      const render = () => {
        this.draw()
        this.animFrameId = requestAnimationFrame(render)
      }
      render()
    },

    // Correlation-based trigger: slide a reference snippet from the
    // previous frame across the new buffer and find the best match.
    // This locks the display to whatever shape was shown last frame,
    // producing perfectly stable visuals for any waveform.
    findTriggerByCorrelation(data, samplesToShow) {
      const ref = this.refSnippet
      if (!ref || ref.length === 0) return 0

      const refLen = ref.length
      const searchEnd = Math.min(data.length - samplesToShow, Math.floor(data.length / 2))
      if (searchEnd <= 0) return 0

      let bestOffset = 0
      let bestCorr = -Infinity

      // Slide reference across buffer, compute dot product (correlation)
      // Step by 1 for accuracy — refLen is small (one period worth)
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

    draw() {
      const canvas = this.$refs.canvas
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      const w = canvas.width
      const h = canvas.height

      ctx.fillStyle = '#0a0a0e'
      ctx.fillRect(0, 0, w, h)

      // Grid
      ctx.strokeStyle = '#1a1a24'
      ctx.lineWidth = 0.5
      for (let i = 1; i < 4; i++) {
        const y = (i / 4) * h
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }
      ctx.strokeStyle = '#252530'
      ctx.beginPath()
      ctx.moveTo(0, h / 2)
      ctx.lineTo(w, h / 2)
      ctx.stroke()

      const engine = useAudioEngineStore()
      if (!engine.analyserScope || !engine.isRunning) return

      const ui = useUiStateStore()
      const analyser = engine.analyserScope

      const samplesNeeded = Math.floor(engine.sampleRate * ui.scope.windowLength / 1000)
      const samplesWithMargin = samplesNeeded * 2
      let fftSize = 2
      while (fftSize < samplesWithMargin && fftSize < 32768) fftSize *= 2
      fftSize = Math.max(512, Math.min(32768, fftSize))
      if (analyser.fftSize !== fftSize) {
        analyser.fftSize = fftSize
      }

      const bufLen = analyser.fftSize
      const data = new Float32Array(bufLen)
      analyser.getFloatTimeDomainData(data)

      const samplesToShow = Math.min(bufLen - 1, samplesNeeded)

      // Auto-normalization
      let peak = 0
      for (let i = 0; i < bufLen; i++) {
        const abs = Math.abs(data[i])
        if (abs > peak) peak = abs
      }
      const userGain = rescale(ui.scope.amplitude, 0.04, 10, true)
      const autoGain = peak > 0.001 ? 0.8 / peak : 1
      const displayGain = autoGain * userGain

      // Determine reference snippet length from source frequency
      const sourceFreq = engine.sourcePanel ? engine.sourcePanel.currentFrequency : 0
      let refLength
      if (sourceFreq > 0) {
        // Use one period of the source frequency
        refLength = Math.round(engine.sampleRate / sourceFreq)
      } else {
        // No known frequency — use a chunk of the display window
        refLength = Math.min(256, Math.floor(samplesToShow / 4))
      }
      refLength = Math.max(16, Math.min(refLength, Math.floor(bufLen / 4)))

      // Find trigger offset by correlating with previous frame's snippet
      let triggerOffset = 0
      if (this.refSnippet && this.refSnippet.length === refLength) {
        triggerOffset = this.findTriggerByCorrelation(data, samplesToShow)
      }

      // Save a new reference snippet from the current trigger point
      this.refSnippet = data.slice(triggerOffset, triggerOffset + refLength)

      // Draw waveform
      ctx.strokeStyle = '#4ade80'
      ctx.lineWidth = 1.5
      ctx.beginPath()

      const end = Math.min(samplesToShow, bufLen - triggerOffset)
      for (let i = 0; i < end; i++) {
        const x = (i / samplesToShow) * w
        const sample = data[triggerOffset + i] * displayGain
        const y = (1 - sample) * h / 2
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()
    }
  }
}
</script>

<style lang="sass">
.oscilloscope
  position: relative
  width: 100%
  height: 100%
  min-height: 80px

  &__canvas
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    border-radius: 2px
</style>
