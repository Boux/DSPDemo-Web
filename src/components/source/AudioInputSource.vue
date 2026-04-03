<template>
  <div class="input-source">
    <button class="toggle-btn" :class="{ active: isActive }" @click="toggleInput">
      {{ isActive ? ($i18n.locale === 'fr' ? 'Arrêter' : 'Stop') : ($i18n.locale === 'fr' ? 'Activer le micro' : 'Enable Microphone') }}
    </button>
    <div v-if="error" class="input-source__error">{{ error }}</div>
    <ControlSlider
      :label="$i18n.locale === 'fr' ? 'Volume d\'entrée' : 'Input Gain'"
      :modelValue="gain"
      :mini="0"
      :maxi="2"
      @update:modelValue="onGainChange"
    />
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'AudioInputSource',
  components: { ControlSlider },
  props: {
    audio: { type: Object, default: null }
  },
  data() {
    return {
      isActive: false,
      gain: 1,
      error: '',
      stream: null,
      inputNode: null,
      gainNode: null
    }
  },
  watch: {
    audio(val) {
      if (val && this.isActive) this.connectInput()
    }
  },
  beforeUnmount() {
    this.stopInput()
  },
  methods: {
    async toggleInput() {
      if (this.isActive) {
        this.stopInput()
      } else {
        await this.startInput()
      }
    },
    async startInput() {
      const engine = useAudioEngineStore()
      if (!engine.isRunning) await engine.start()

      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        this.error = ''
        this.connectInput()
        this.isActive = true
      } catch (e) {
        this.error = this.$i18n.locale === 'fr'
          ? 'Accès au microphone refusé'
          : 'Microphone access denied'
      }
    },
    connectInput() {
      if (!this.audio || !this.stream) return
      const ctx = useAudioEngineStore().context
      if (!ctx) return

      this.inputNode = ctx.createMediaStreamSource(this.stream)
      this.gainNode = ctx.createGain()
      this.gainNode.gain.value = this.gain

      this.inputNode.connect(this.gainNode)
      this.gainNode.connect(this.audio.inputGain || this.audio.output)
    },
    stopInput() {
      if (this.inputNode) {
        try { this.inputNode.disconnect() } catch (e) { /* */ }
        this.inputNode = null
      }
      if (this.gainNode) {
        try { this.gainNode.disconnect() } catch (e) { /* */ }
        this.gainNode = null
      }
      if (this.stream) {
        this.stream.getTracks().forEach(t => t.stop())
        this.stream = null
      }
      this.isActive = false
    },
    onGainChange(val) {
      this.gain = val
      if (this.gainNode) {
        this.gainNode.gain.setTargetAtTime(val, useAudioEngineStore().context.currentTime, 0.05)
      }
    }
  }
}
</script>

<style lang="sass">
.input-source
  display: flex
  flex-direction: column
  gap: var(--sp-2)

  &__error
    font-size: var(--font-size-xs)
    color: var(--vu-red)
</style>
