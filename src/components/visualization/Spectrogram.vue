<template>
  <div class="scope-canvas">
    <canvas ref="canvas" class="scope-canvas__el"></canvas>
  </div>
</template>

<script>
import { useAudioEngineStore } from '../../stores/audioEngine'
import { useUiStateStore, FFT_SIZE_CHOICES } from '../../stores/uiState'

// Colormap: black → dark blue → green → yellow → orange → red → white
// Pre-built as a 256-entry lookup table for performance.
const COLORMAP = new Uint32Array(256)
{
  // Gradient stops: [position 0-1, r, g, b]
  const stops = [
    [0.00,   0,   0,   0],  // black
    [0.15,   0,  20, 80],   // dark blue
    [0.35,   0, 180,  30],  // green
    [0.55, 220, 220,   0],  // yellow
    [0.70, 255, 140,   0],  // orange
    [0.85, 220,  20,  10],  // red
    [1.00, 255, 255, 255]   // white
  ]
  for (let i = 0; i < 256; i++) {
    const t = i / 255
    // Find surrounding stops
    let lo = 0
    for (let s = 1; s < stops.length; s++) {
      if (stops[s][0] >= t) { lo = s - 1; break }
    }
    const hi = lo + 1
    const range = stops[hi][0] - stops[lo][0]
    const s = range > 0 ? (t - stops[lo][0]) / range : 0
    const r = Math.round(stops[lo][1] + s * (stops[hi][1] - stops[lo][1]))
    const g = Math.round(stops[lo][2] + s * (stops[hi][2] - stops[lo][2]))
    const b = Math.round(stops[lo][3] + s * (stops[hi][3] - stops[lo][3]))
    COLORMAP[i] = (255 << 24) | (b << 16) | (g << 8) | r
  }
}

function dbToColor(db, minDb, maxDb) {
  const t = (db - minDb) / (maxDb - minDb)
  const idx = Math.max(0, Math.min(255, Math.round(t * 255)))
  return COLORMAP[idx]
}

export default {
  name: 'Spectrogram',
  data() {
    return {
      animFrameId: null,
      scrollCanvas: null,
      scrollCtx: null
    }
  },
  mounted() {
    this.initScrollBuffer()
    this.resizeCanvas()
    window.addEventListener('resize', this.resizeCanvas)
    this.startRenderLoop()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeCanvas)
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId)
  },
  methods: {
    initScrollBuffer() {
      this.scrollCanvas = document.createElement('canvas')
      this.scrollCtx = this.scrollCanvas.getContext('2d')
    },
    resizeCanvas() {
      const canvas = this.$refs.canvas
      if (!canvas) return
      const rect = canvas.parentElement.getBoundingClientRect()
      const w = Math.floor(rect.width)
      const h = Math.floor(rect.height)
      if (w === canvas.width && h === canvas.height) return

      canvas.width = w
      canvas.height = h

      // Rebuild scroll buffer at new size, filled black
      const oldW = this.scrollCanvas.width
      const oldH = this.scrollCanvas.height
      let saved = null
      if (oldW > 0 && oldH > 0) {
        saved = this.scrollCtx.getImageData(0, 0, oldW, oldH)
      }
      this.scrollCanvas.width = w
      this.scrollCanvas.height = h
      this.scrollCtx.fillStyle = '#0a0a0e'
      this.scrollCtx.fillRect(0, 0, w, h)
      if (saved) {
        // Align old content to the right edge
        this.scrollCtx.putImageData(saved, w - oldW, 0)
      }
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
      if (w === 0 || h === 0) return

      const engine = useAudioEngineStore()
      if (!engine.analyserSpectrum || !engine.isRunning) {
        ctx.drawImage(this.scrollCanvas, 0, 0)
        return
      }

      const ui = useUiStateStore()
      const analyser = engine.analyserSpectrum
      const fftSize = FFT_SIZE_CHOICES[ui.spectrum.fftSize]

      if (analyser.fftSize !== fftSize) {
        analyser.fftSize = fftSize
      }

      const bufLen = analyser.frequencyBinCount
      const data = new Float32Array(bufLen)
      analyser.getFloatFrequencyData(data)

      const sr = engine.sampleRate
      const nyquist = sr / 2
      const freqLog = ui.spectrum.freqLog
      const gainDb = (ui.spectrum.amplitude - 0.5) * 48
      const minDb = -60
      const maxDb = 0

      const speed = Math.max(1, Math.round(ui.spectrum.scrollSpeed || 1))

      // Scroll the off-screen canvas left by speed pixels
      const sc = this.scrollCtx
      sc.drawImage(this.scrollCanvas, -speed, 0)
      // Clear the newly exposed strip on the right
      sc.fillStyle = '#0a0a0e'
      sc.fillRect(w - speed, 0, speed, h)

      // Render one column of spectral data
      const col = sc.createImageData(1, h)
      const pixels = new Uint32Array(col.data.buffer)

      for (let y = 0; y < h; y++) {
        const normY = 1 - y / h
        let freq
        if (freqLog) {
          const minF = Math.max(20, ui.spectrum.zoomMin * 2 * nyquist)
          const maxF = ui.spectrum.zoomMax * 2 * nyquist
          freq = minF * Math.pow(maxF / minF, normY)
        } else {
          const minF = ui.spectrum.zoomMin * 2 * nyquist
          const maxF = ui.spectrum.zoomMax * 2 * nyquist
          freq = minF + normY * (maxF - minF)
        }

        const bin = Math.round(freq / nyquist * bufLen)
        if (bin < 0 || bin >= bufLen) {
          pixels[y] = (255 << 24)
          continue
        }

        const db = Math.max(minDb, Math.min(maxDb, data[bin] + gainDb))
        pixels[y] = dbToColor(db, minDb, maxDb)
      }

      // Stamp the column across the speed-wide strip
      for (let s = 0; s < speed; s++) {
        sc.putImageData(col, w - speed + s, 0)
      }

      ctx.drawImage(this.scrollCanvas, 0, 0)
    }
  }
}
</script>
