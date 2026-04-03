<template>
  <div class="audio-controls">
    <div class="audio-controls__row">
      <button
        class="toggle-btn audio-controls__btn"
        :class="{ active: isRunning }"
        @click="toggleAudio"
      >
        {{ isRunning ? $t('controls.disable') : $t('controls.enable') }}
      </button>
      <button
        class="toggle-btn audio-controls__btn"
        :class="{ active: isRecording }"
        :disabled="!isRunning"
        @click="toggleRecord"
      >
        <span v-if="isRecording" class="audio-controls__rec-dot"></span>
        {{ isRecording ? $t('controls.stopRecord') : $t('controls.record') }}
      </button>
    </div>
  </div>
</template>

<script>
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'AudioControls',
  computed: {
    isRunning() {
      return useAudioEngineStore().isRunning
    },
    isRecording() {
      return useAudioEngineStore().isRecording
    }
  },
  methods: {
    async toggleAudio() {
      const engine = useAudioEngineStore()
      if (engine.isRunning) {
        await engine.stop()
      } else {
        await engine.start()
      }
    },
    toggleRecord() {
      const engine = useAudioEngineStore()
      if (engine.isRecording) {
        engine.stopRecording()
      } else {
        engine.startRecording()
      }
    }
  }
}
</script>

<style lang="sass">
.audio-controls
  padding: var(--sp-2) var(--sp-3)

  &__row
    display: flex
    gap: var(--sp-2)

  &__btn
    flex: 1

  &__rec-dot
    display: inline-block
    width: 6px
    height: 6px
    border-radius: 50%
    background: #f44
    margin-right: 4px
    animation: rec-pulse 1s infinite

@keyframes rec-pulse
  0%, 100%
    opacity: 1
  50%
    opacity: 0.3
</style>
