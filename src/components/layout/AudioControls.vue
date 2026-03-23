<template>
  <div>
    <div class="section-head">{{ $t('controls.audioControls') }}</div>
    <div class="section-body">
      <div class="control-row">
        <button
          class="toggle-btn"
          :class="{ active: isRunning }"
          @click="toggleAudio"
        >
          {{ isRunning ? $t('controls.disable') : $t('controls.enable') }}
        </button>
        <button
          class="toggle-btn"
          :class="{ active: isRecording }"
          :disabled="!isRunning"
          @click="toggleRecord"
        >
          {{ isRecording ? $t('controls.stopRecord') : $t('controls.record') }}
        </button>
      </div>
      <div v-if="isRecording" class="recording-indicator">
        {{ $i18n.locale === 'fr' ? 'Enregistrement en cours...' : 'Recording...' }}
      </div>
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
.control-row
  display: flex
  gap: var(--sp-2)

  .toggle-btn
    flex: 1

.recording-indicator
  color: #CC0000
  font-size: var(--font-size-sm)
  font-weight: 600
  text-align: center
  padding: 4px 0
  animation: rec-blink 1s infinite

@keyframes rec-blink
  0%, 100%
    opacity: 1
  50%
    opacity: 0.4
</style>
