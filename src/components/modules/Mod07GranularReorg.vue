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
      <ControlSlider :label="t('jumpRange')" v-model="jumpAmount" :mini="0" :maxi="1" @update:modelValue="onParamChange" />
      <ControlSlider :label="t('jumpSpeed')" v-model="jumpSpeed" :mini="1" :maxi="20" @update:modelValue="onParamChange" />
      <ControlSlider :label="t('randomRange')" v-model="randomAmount" :mini="0" :maxi="1" @update:modelValue="onParamChange" />
      <ControlSlider :label="t('randomSpeed')" v-model="randomSpeed" :mini="1" :maxi="20" @update:modelValue="onParamChange" />
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod07GranularReorg',
  components: { ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      jumpAmount: 0, jumpSpeed: 8, randomAmount: 0, randomSpeed: 8,
      isPlaying: false, hasFile: false, fileName: '',
      workletNode: null, outputGain: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        source: { fr: 'Source Sonore', en: 'Audio Source' },
        loadFile: { fr: 'Fichier sonore', en: 'Sound File' },
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        startPlayback: { fr: 'Démarrer la lecture', en: 'Start Playback' },
        jumpRange: { fr: 'Ambitus des sauts', en: 'Jump Range' },
        jumpSpeed: { fr: 'Vitesse des sauts (Hz)', en: 'Jump Speed (Hz)' },
        randomRange: { fr: 'Ambitus variations aléatoires', en: 'Random Variation Range' },
        randomSpeed: { fr: 'Vitesse des variations (Hz)', en: 'Variation Speed (Hz)' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.engine.context

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
      if (this.workletNode) this.workletNode.port.postMessage({ play: false })
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
      const data = audioBuf.getChannelData(0)
      this.workletNode.port.postMessage({ buffer: Array.from(data) })
      this.hasFile = true
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying
      this.workletNode.port.postMessage({
        play: this.isPlaying,
        posSpeed: 1,
        jumpAmount: this.jumpAmount,
        jumpSpeed: this.jumpSpeed,
        randomAmount: this.randomAmount,
        randomSpeed: this.randomSpeed
      })
    },
    onParamChange() {
      if (this.workletNode) {
        this.workletNode.port.postMessage({
          jumpAmount: this.jumpAmount,
          jumpSpeed: this.jumpSpeed,
          randomAmount: this.randomAmount,
          randomSpeed: this.randomSpeed
        })
      }
    }
  }
}
</script>
