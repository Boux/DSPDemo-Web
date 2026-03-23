<template>
  <div>
    <div class="section-head">{{ $t('controls.audioOutput') }}</div>
    <div class="section-body">
      <label class="control-label">{{ $t('controls.volume') }}</label>
      <input
        type="range"
        :min="-60"
        :max="18"
        :step="0.5"
        :value="volumeDb"
        @input="onVolumeChange"
      />
      <div class="volume-value">{{ volumeDb.toFixed(1) }} dB</div>
      <div class="vu-placeholder">
        <div class="vu-bar" :style="{ width: vuLevel + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'OutputControls',
  data() {
    return {
      vuLevel: 0,
      animFrameId: null
    }
  },
  computed: {
    volumeDb() {
      return useAudioEngineStore().volumeDb
    }
  },
  mounted() {
    this.startVuMeter()
  },
  beforeUnmount() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId)
    }
  },
  methods: {
    onVolumeChange(e) {
      useAudioEngineStore().setVolume(parseFloat(e.target.value))
    },
    startVuMeter() {
      const engine = useAudioEngineStore()
      const update = () => {
        if (engine.analyserVu && engine.isRunning) {
          const data = new Float32Array(engine.analyserVu.fftSize)
          engine.analyserVu.getFloatTimeDomainData(data)
          let peak = 0
          for (let i = 0; i < data.length; i++) {
            const abs = Math.abs(data[i])
            if (abs > peak) peak = abs
          }
          this.vuLevel = Math.min(100, peak * 100)
        } else {
          this.vuLevel = 0
        }
        this.animFrameId = requestAnimationFrame(update)
      }
      update()
    }
  }
}
</script>

<style lang="sass">
.volume-value
  font-size: var(--font-size-sm)
  color: #555
  text-align: right

.vu-placeholder
  height: 8px
  background: #333
  border-radius: 4px
  margin-top: 4px
  overflow: hidden

.vu-bar
  height: 100%
  background: var(--vu-green)
  transition: width 0.05s linear
  border-radius: 4px
</style>
