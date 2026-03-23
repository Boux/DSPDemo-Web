<template>
  <div>
    <div class="section-head">{{ $t('controls.audioOutput') }}</div>
    <div class="section-body">
      <label class="control-label">{{ $t('controls.volume') }}</label>
      <div class="output-controls__row">
        <input
          type="range"
          :min="-60"
          :max="18"
          :step="0.5"
          :value="volumeDb"
          @input="onVolumeChange"
        />
        <span class="output-controls__value">{{ volumeDb.toFixed(1) }} dB</span>
      </div>
      <VuMeter :channels="2" />
    </div>
  </div>
</template>

<script>
import { useAudioEngineStore } from '../../stores/audioEngine'
import VuMeter from '../controls/VuMeter.vue'

export default {
  name: 'OutputControls',
  components: { VuMeter },
  computed: {
    volumeDb() {
      return useAudioEngineStore().volumeDb
    }
  },
  methods: {
    onVolumeChange(e) {
      useAudioEngineStore().setVolume(parseFloat(e.target.value))
    }
  }
}
</script>

<style lang="sass">
.output-controls
  &__row
    display: flex
    align-items: center
    gap: 6px

  &__value
    font-size: var(--font-size-sm)
    color: #555
    min-width: 55px
    text-align: right
    font-family: monospace
</style>
