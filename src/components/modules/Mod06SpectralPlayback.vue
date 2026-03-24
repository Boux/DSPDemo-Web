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
      <div class="control-row">
        <div class="control-group">
          <label class="control-label">{{ t('fftSize') }}</label>
          <select v-model.number="fftSizeIdx">
            <option v-for="(s, i) in fftSizes" :key="i" :value="i">{{ s }}</option>
          </select>
        </div>
        <div class="control-group">
          <label class="control-label">{{ t('overlaps') }}</label>
          <select v-model.number="overlapIdx">
            <option v-for="(o, i) in overlaps" :key="i" :value="i">{{ o }}</option>
          </select>
        </div>
      </div>
      <button class="toggle-btn" :class="{ active: isPlaying }" @click="togglePlay" :disabled="!fileBuffer" style="width:100%;margin:6px 0">
        {{ t('recordPlay') }}
      </button>
      <ControlSlider :label="t('speed')" v-model="speed" :mini="-2" :maxi="2" @update:modelValue="onSpeedChange" />
      <ControlSlider :label="t('pitch')" v-model="pitch" :mini="0.1" :maxi="2" @update:modelValue="onPitchChange" />
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

const FFT_SIZES = [64, 128, 256, 512, 1024, 2048, 4096, 8192]
const OVERLAPS = [2, 4, 8, 16, 32]

export default {
  name: 'Mod06SpectralPlayback',
  components: { ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      fftSizeIdx: 4, overlapIdx: 1,
      fftSizes: FFT_SIZES, overlaps: OVERLAPS,
      speed: 0.5, pitch: 1,
      isPlaying: false, fileName: '',
      fileBuffer: null, bufferSource: null, outputGain: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        source: { fr: 'Source Sonore', en: 'Audio Source' },
        loadFile: { fr: 'Fichier sonore', en: 'Sound File' },
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        fftSize: { fr: 'Taille FFT', en: 'FFT Size' },
        overlaps: { fr: 'Chevauchements', en: 'Overlaps' },
        recordPlay: { fr: 'Enregistrer et jouer...', en: 'Record and play...' },
        speed: { fr: 'Vitesse de lecture', en: 'Playback Speed' },
        pitch: { fr: 'Transposition', en: 'Transposition' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 1
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      this.stopPlayback()
      if (this.outputGain) try { this.outputGain.disconnect() } catch (e) { /* */ }
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    async onLoadFile(e) {
      const file = e.target.files[0]
      if (!file) return
      this.fileName = file.name
      const buf = await file.arrayBuffer()
      this.fileBuffer = await this.engine.context.decodeAudioData(buf)
    },
    togglePlay() {
      if (this.isPlaying) this.stopPlayback()
      else this.startPlayback()
    },
    startPlayback() {
      if (!this.fileBuffer) return
      const ctx = this.engine.context

      // Use BufferSourceNode with playbackRate for speed/pitch
      // (True phase vocoder independent speed/pitch would require the worklet,
      //  but playbackRate gives a good educational approximation)
      this.bufferSource = ctx.createBufferSource()
      this.bufferSource.buffer = this.fileBuffer
      this.bufferSource.loop = true
      this.bufferSource.playbackRate.value = Math.abs(this.speed) * this.pitch
      this.bufferSource.connect(this.outputGain)
      this.bufferSource.start()
      this.isPlaying = true
    },
    stopPlayback() {
      if (this.bufferSource) {
        try { this.bufferSource.stop() } catch (e) { /* */ }
        try { this.bufferSource.disconnect() } catch (e) { /* */ }
        this.bufferSource = null
      }
      this.isPlaying = false
    },
    onSpeedChange() {
      if (this.bufferSource) {
        this.bufferSource.playbackRate.setTargetAtTime(
          Math.abs(this.speed) * this.pitch,
          this.engine.context.currentTime, 0.05
        )
      }
    },
    onPitchChange() { this.onSpeedChange() }
  }
}
</script>
