<template>
  <div class="output-controls">
    <div class="output-controls__header">{{ $t('controls.volume') }}</div>
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
  padding: var(--sp-2) var(--sp-3)
  border-top: 1px solid var(--color-border)

  &__header
    font-size: var(--font-size-xs)
    color: var(--color-text-dim)
    font-weight: 600
    letter-spacing: 0.06em
    text-transform: uppercase
    margin-bottom: var(--sp-1)

  &__row
    display: flex
    align-items: center
    gap: var(--sp-2)

    input[type="range"]
      flex: 1

  &__value
    font-size: var(--font-size-xs)
    color: var(--color-text-dim)
    min-width: 48px
    text-align: right
    font-family: var(--font-mono)
</style>
