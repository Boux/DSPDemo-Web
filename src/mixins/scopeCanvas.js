// Shared mixin for canvas-based scope visualizations.
//
// Provides:
//   - Canvas resize handling
//   - requestAnimationFrame render loop
//   - getScopeData() — fetches analyser data and computes display gain
//
// Components must implement a draw(ctx, w, h) method.

import { useAudioEngineStore } from '../stores/audioEngine'
import { useUiStateStore } from '../stores/uiState'
import { rescale } from '../utils/dspMath'

export const scopeCanvasMixin = {
  data() {
    return {
      animFrameId: null
    }
  },
  mounted() {
    this.resizeCanvas()
    // ResizeObserver catches GL panel resizes, not just window resizes
    this._resizeObserver = new ResizeObserver(() => this.resizeCanvas())
    if (this.$refs.canvas) this._resizeObserver.observe(this.$refs.canvas.parentElement)
    this.startRenderLoop()
  },
  beforeUnmount() {
    if (this._resizeObserver) this._resizeObserver.disconnect()
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
        const canvas = this.$refs.canvas
        if (canvas) {
          const ctx = canvas.getContext('2d')
          const w = canvas.width
          const h = canvas.height
          ctx.fillStyle = '#0a0a0e'
          ctx.fillRect(0, 0, w, h)
          this.draw(ctx, w, h)
        }
        this.animFrameId = requestAnimationFrame(render)
      }
      render()
    },

    // Fetch time-domain data from the analyser and compute display gain.
    // Returns null if the engine isn't running.
    getScopeData() {
      const engine = useAudioEngineStore()
      if (!engine.analyserScope || !engine.isRunning) return null

      const ui = useUiStateStore()
      const analyser = engine.analyserScope

      const samplesNeeded = Math.floor(engine.sampleRate * ui[this.storeKey].windowLength / 1000)
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

      const userGain = rescale(ui[this.storeKey].amplitude, 0.04, 10, true)
      let displayGain = userGain
      if (ui[this.storeKey].autoNormalize) {
        let peak = 0
        for (let i = 0; i < bufLen; i++) {
          const abs = Math.abs(data[i])
          if (abs > peak) peak = abs
        }
        const autoGain = peak > 0.001 ? 0.8 / peak : 1
        displayGain = autoGain * userGain
      }

      return { engine, ui, data, bufLen, samplesToShow, displayGain }
    },

    // Override in component
    draw(/* ctx, w, h */) {}
  }
}
