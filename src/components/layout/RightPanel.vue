<template>
  <main class="right-panel">
    <div class="viz-section">
      <div class="section-head">{{ $t('visualization.spectrogram') }}</div>
      <div class="section-body viz-body">
        <div class="viz-controls">
          <button
            class="toggle-btn"
            :class="{ active: spectrum.freqLog }"
            @click="spectrum.freqLog = !spectrum.freqLog"
          >{{ $t('visualization.freqLog') }}</button>
          <button
            class="toggle-btn"
            :class="{ active: spectrum.magLog }"
            @click="spectrum.magLog = !spectrum.magLog"
          >{{ $t('visualization.magLog') }}</button>
          <select v-model.number="spectrum.windowType">
            <option v-for="(w, i) in windowChoices" :key="i" :value="i">{{ w }}</option>
          </select>
          <select v-model.number="spectrum.fftSize">
            <option v-for="(s, i) in fftSizeChoices" :key="i" :value="i">{{ s }}</option>
          </select>
        </div>
        <div class="viz-canvas-wrap">
          <canvas ref="spectrumCanvas" class="viz-canvas"></canvas>
        </div>
      </div>
    </div>

    <div class="viz-section">
      <div class="section-head">{{ $t('visualization.oscilloscope') }}</div>
      <div class="section-body viz-body">
        <div class="viz-controls">
          <label class="control-label">{{ $t('visualization.windowSize') }}</label>
          <input
            type="range"
            :min="10"
            :max="1000"
            :value="scope.windowLength"
            @input="scope.windowLength = parseInt($event.target.value)"
          />
          <span class="control-label">{{ scope.windowLength }} ms</span>
        </div>
        <div class="viz-canvas-wrap">
          <canvas ref="scopeCanvas" class="viz-canvas"></canvas>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useUiStateStore, WINDOW_CHOICES, FFT_SIZE_CHOICES } from '../../stores/uiState'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'RightPanel',
  data() {
    return {
      windowChoices: WINDOW_CHOICES,
      fftSizeChoices: FFT_SIZE_CHOICES,
      animFrameId: null
    }
  },
  computed: {
    spectrum() {
      return useUiStateStore().spectrum
    },
    scope() {
      return useUiStateStore().scope
    }
  },
  mounted() {
    this.resizeCanvases()
    window.addEventListener('resize', this.resizeCanvases)
    this.startRenderLoop()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeCanvases)
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId)
    }
  },
  methods: {
    resizeCanvases() {
      for (const ref of ['spectrumCanvas', 'scopeCanvas']) {
        const canvas = this.$refs[ref]
        if (canvas) {
          const rect = canvas.parentElement.getBoundingClientRect()
          canvas.width = rect.width
          canvas.height = rect.height
        }
      }
    },
    startRenderLoop() {
      const render = () => {
        this.drawSpectrum()
        this.drawScope()
        this.animFrameId = requestAnimationFrame(render)
      }
      render()
    },
    drawSpectrum() {
      const canvas = this.$refs.spectrumCanvas
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      const w = canvas.width
      const h = canvas.height

      ctx.fillStyle = 'var(--viz-background)'
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, w, h)

      const engine = useAudioEngineStore()
      if (!engine.analyserSpectrum || !engine.isRunning) return

      const analyser = engine.analyserSpectrum
      const bufLen = analyser.frequencyBinCount
      const data = new Float32Array(bufLen)
      analyser.getFloatFrequencyData(data)

      ctx.strokeStyle = '#00FF00'
      ctx.lineWidth = 1
      ctx.beginPath()

      const minDb = -100
      const maxDb = 0

      for (let i = 0; i < bufLen; i++) {
        const x = (i / bufLen) * w
        const db = Math.max(minDb, Math.min(maxDb, data[i]))
        const y = h - ((db - minDb) / (maxDb - minDb)) * h
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()
    },
    drawScope() {
      const canvas = this.$refs.scopeCanvas
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      const w = canvas.width
      const h = canvas.height

      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, w, h)

      const engine = useAudioEngineStore()
      if (!engine.analyserScope || !engine.isRunning) return

      const analyser = engine.analyserScope
      const bufLen = analyser.fftSize
      const data = new Float32Array(bufLen)
      analyser.getFloatTimeDomainData(data)

      // Center line
      ctx.strokeStyle = '#333'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, h / 2)
      ctx.lineTo(w, h / 2)
      ctx.stroke()

      // Waveform
      ctx.strokeStyle = '#00FF00'
      ctx.lineWidth = 1.5
      ctx.beginPath()

      for (let i = 0; i < bufLen; i++) {
        const x = (i / bufLen) * w
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
.viz-section
  flex: 1
  display: flex
  flex-direction: column
  min-height: 0

.viz-body
  flex: 1
  display: flex
  flex-direction: column
  min-height: 0

.viz-controls
  display: flex
  align-items: center
  gap: 6px
  padding: 4px 0
  flex-shrink: 0

  input[type="range"]
    width: 120px

.viz-canvas-wrap
  flex: 1
  min-height: 80px
  position: relative

.viz-canvas
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  border-radius: 2px
</style>
