<template>
  <div class="spectrum-analyzer">
    <canvas ref="canvas" class="spectrum-analyzer__canvas"></canvas>
  </div>
</template>

<script>
import { useAudioEngineStore } from '../../stores/audioEngine'
import { useUiStateStore, FFT_SIZE_CHOICES } from '../../stores/uiState'

export default {
  name: 'SpectrumAnalyzer',
  data() {
    return {
      animFrameId: null
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
    draw() {
      const canvas = this.$refs.canvas
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      const w = canvas.width
      const h = canvas.height

      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, w, h)

      // Grid lines
      ctx.strokeStyle = '#222'
      ctx.lineWidth = 0.5
      for (let i = 1; i < 10; i++) {
        const y = (i / 10) * h
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      const engine = useAudioEngineStore()
      if (!engine.analyserSpectrum || !engine.isRunning) return

      const ui = useUiStateStore()
      const analyser = engine.analyserSpectrum
      const fftSize = FFT_SIZE_CHOICES[ui.spectrum.fftSize]

      // Update analyser FFT size if changed
      if (analyser.fftSize !== fftSize) {
        analyser.fftSize = fftSize
      }

      const bufLen = analyser.frequencyBinCount
      const data = new Float32Array(bufLen)
      analyser.getFloatFrequencyData(data)

      const sr = engine.sampleRate
      const nyquist = sr / 2
      const freqLog = ui.spectrum.freqLog
      const magLog = ui.spectrum.magLog

      const minDb = -100
      const maxDb = -10
      const minLin = 0
      const maxLin = 1

      ctx.strokeStyle = '#00FF00'
      ctx.lineWidth = 1.5
      ctx.beginPath()

      let started = false
      for (let i = 1; i < bufLen; i++) {
        const freq = (i / bufLen) * nyquist

        // Apply zoom
        const normFreq = freq / nyquist
        if (normFreq < ui.spectrum.zoomMin * 2 || normFreq > ui.spectrum.zoomMax * 2) continue

        // X position
        let x
        if (freqLog) {
          const minF = Math.max(20, ui.spectrum.zoomMin * 2 * nyquist)
          const maxF = ui.spectrum.zoomMax * 2 * nyquist
          if (freq < minF) continue
          x = (Math.log10(freq) - Math.log10(minF)) / (Math.log10(maxF) - Math.log10(minF)) * w
        } else {
          const minF = ui.spectrum.zoomMin * 2 * nyquist
          const maxF = ui.spectrum.zoomMax * 2 * nyquist
          x = (freq - minF) / (maxF - minF) * w
        }

        // Y position
        let y
        if (magLog) {
          const db = Math.max(minDb, Math.min(maxDb, data[i]))
          y = h - ((db - minDb) / (maxDb - minDb)) * h
        } else {
          const lin = Math.pow(10, data[i] / 20)
          y = h - Math.min(1, lin) * h
        }

        if (!started) {
          ctx.moveTo(x, y)
          started = true
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
.spectrum-analyzer
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
