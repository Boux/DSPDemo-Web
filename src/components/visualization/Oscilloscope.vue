<template>
  <div class="oscilloscope">
    <canvas ref="canvas" class="oscilloscope__canvas"></canvas>
  </div>
</template>

<script>
import { useAudioEngineStore } from '../../stores/audioEngine'
import { useUiStateStore } from '../../stores/uiState'

export default {
  name: 'Oscilloscope',
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

      // Center line
      ctx.strokeStyle = '#222'
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(0, h / 2)
      ctx.lineTo(w, h / 2)
      ctx.stroke()

      // Grid
      for (let i = 1; i < 4; i++) {
        const y = (i / 4) * h
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      const engine = useAudioEngineStore()
      if (!engine.analyserScope || !engine.isRunning) return

      const ui = useUiStateStore()
      const analyser = engine.analyserScope

      // Adjust fftSize based on window length
      // windowLength ms -> samples needed
      const samplesNeeded = Math.floor(engine.sampleRate * ui.scope.windowLength / 1000)
      // Pick nearest power of 2, clamped to valid range
      let fftSize = 2
      while (fftSize < samplesNeeded && fftSize < 32768) fftSize *= 2
      fftSize = Math.max(256, Math.min(32768, fftSize))
      if (analyser.fftSize !== fftSize) {
        analyser.fftSize = fftSize
      }

      const bufLen = analyser.fftSize
      const data = new Float32Array(bufLen)
      analyser.getFloatTimeDomainData(data)

      // How many samples to display based on window length
      const samplesToShow = Math.min(bufLen, samplesNeeded)

      ctx.strokeStyle = '#00FF00'
      ctx.lineWidth = 1.5
      ctx.beginPath()

      for (let i = 0; i < samplesToShow; i++) {
        const x = (i / samplesToShow) * w
        const y = (1 - data[i]) * h / 2
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
