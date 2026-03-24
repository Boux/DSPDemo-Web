<template>
  <div class="scope-canvas">
    <canvas ref="canvas" class="scope-canvas__el"></canvas>
  </div>
</template>

<script>
import { scopeCanvasMixin } from '../../mixins/scopeCanvas'

export default {
  name: 'XYScope',
  mixins: [scopeCanvasMixin],
  methods: {
    draw(c, w, h) {
      // Crosshair grid
      c.strokeStyle = '#1a1a24'
      c.lineWidth = 0.5
      for (let i = 1; i < 4; i++) {
        const y = (i / 4) * h
        c.beginPath()
        c.moveTo(0, y)
        c.lineTo(w, y)
        c.stroke()
        const x = (i / 4) * w
        c.beginPath()
        c.moveTo(x, 0)
        c.lineTo(x, h)
        c.stroke()
      }
      c.strokeStyle = '#252530'
      c.beginPath()
      c.moveTo(0, h / 2)
      c.lineTo(w, h / 2)
      c.stroke()
      c.beginPath()
      c.moveTo(w / 2, 0)
      c.lineTo(w / 2, h)
      c.stroke()

      const sd = this.getScopeData()
      if (!sd) return
      const { engine, data, bufLen, samplesToShow, displayGain } = sd

      // Phase offset: quarter of one period based on source frequency.
      // Falls back to quarter of the display window.
      const sourceFreq = engine.sourcePanel ? engine.sourcePanel.currentFrequency : 0
      let phaseOffset
      if (sourceFreq > 0) {
        phaseOffset = Math.round(engine.sampleRate / sourceFreq / 4)
      } else {
        phaseOffset = Math.round(samplesToShow / 4)
      }
      phaseOffset = Math.max(1, Math.min(phaseOffset, Math.floor(bufLen / 3)))

      const count = Math.min(samplesToShow, bufLen - phaseOffset)
      const dim = Math.min(w, h)
      const cx = w / 2
      const cy = h / 2

      // Draw Lissajous figure
      c.strokeStyle = '#4ade80'
      c.lineWidth = 1.5
      c.globalAlpha = 0.8
      c.beginPath()

      for (let i = 0; i < count; i++) {
        const xSample = data[i] * displayGain
        const ySample = data[i + phaseOffset] * displayGain
        const px = cx + xSample * dim / 2
        const py = cy - ySample * dim / 2
        if (i === 0) {
          c.moveTo(px, py)
        } else {
          c.lineTo(px, py)
        }
      }
      c.stroke()
      c.globalAlpha = 1.0
    }
  }
}
</script>
