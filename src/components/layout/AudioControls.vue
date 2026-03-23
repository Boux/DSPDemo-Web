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
          @click="toggleRecord"
        >
          {{ isRecording ? $t('controls.stopRecord') : $t('controls.record') }}
        </button>
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
      engine.isRecording = !engine.isRecording
    }
  }
}
</script>

<style lang="sass">
.control-row
  display: flex
  gap: 6px

  .toggle-btn
    flex: 1
</style>
