<template>
  <div class="module-controls">
    <div class="section-head">{{ t('source') }}</div>
    <div class="section-body">
      <label class="toggle-btn file-source__load" style="display:block;text-align:center">
        {{ t('loadFile') }}
        <input type="file" accept="audio/*" @change="onLoadFile" hidden />
      </label>
      <div v-if="fileName" class="file-source__name">{{ fileName }}</div>
    </div>
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <button class="toggle-btn" :class="{ active: isPlaying }" @click="togglePlay" :disabled="!hasFile" style="width:100%;margin-bottom:6px">
        {{ t('startPlayback') }}
      </button>
      <ControlSlider :label="t('speed')" v-model="speed" :mini="-2" :maxi="2" @update:modelValue="onSpeedChange" />
      <ControlSlider :label="t('pitch')" v-model="pitch" :mini="0.1" :maxi="2" @update:modelValue="onPitchChange" />
      <p class="control-label" style="margin-top:8px;font-style:italic">
        {{ $i18n.locale === 'fr' ? 'Une vitesse de 0 produira un gel du son!' : 'A speed of 0 will freeze the sound!' }}
      </p>
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'Mod07GranularPlayback',
  components: { ControlSlider },
  data() {
    return {
      speed: 0.5, pitch: 1, isPlaying: false, hasFile: false, fileName: '',
      workletNode: null, outputGain: null
    }
  },
  computed: {
    engine() { return useAudioEngineStore() }
  },
  mounted() { this.setup() },
  beforeUnmount() { this.teardown() },
  methods: {
    t(key) {
      const texts = {
        source: { fr: 'Source Sonore', en: 'Audio Source' },
        loadFile: { fr: 'Fichier sonore', en: 'Sound File' },
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        startPlayback: { fr: 'Démarrer la lecture', en: 'Start Playback' },
        speed: { fr: 'Vitesse de lecture', en: 'Playback Speed' },
        pitch: { fr: 'Transposition', en: 'Transposition' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.engine.context
      if (!ctx) return
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect(this.engine.masterGain) } catch (e) { /* */ }
      }

      await ctx.audioWorklet.addModule(
        new URL('../../audio/worklets/granular.js', import.meta.url)
      )
      this.workletNode = new AudioWorkletNode(ctx, 'granular')
      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 1
      this.workletNode.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      if (this.workletNode) { this.workletNode.port.postMessage({ play: false }) }
      ;[this.workletNode, this.outputGain].forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    async onLoadFile(e) {
      const file = e.target.files[0]
      if (!file) return
      this.fileName = file.name
      const ctx = this.engine.context
      const arrayBuf = await file.arrayBuffer()
      const audioBuf = await ctx.decodeAudioData(arrayBuf)
      // Send mono channel data to worklet
      const data = audioBuf.getChannelData(0)
      this.workletNode.port.postMessage({ buffer: Array.from(data) })
      this.hasFile = true
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying
      if (this.workletNode) {
        this.workletNode.port.postMessage({
          play: this.isPlaying,
          posSpeed: this.speed,
          pitch: this.pitch
        })
      }
    },
    onSpeedChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ posSpeed: val })
    },
    onPitchChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ pitch: val })
    }
  }
}
</script>
