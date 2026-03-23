<template>
  <div class="module-controls">
    <div class="section-head">{{ t('source') }}</div>
    <div class="section-body">
      <div class="control-row">
        <label class="toggle-btn file-source__load">
          {{ t('loadFile') }}
          <input type="file" accept="audio/*" @change="onLoadFile" hidden />
        </label>
        <button class="toggle-btn" :class="{ active: isPlaying }" @click="togglePlay">
          {{ t('play') }}
        </button>
      </div>
      <div v-if="fileName" class="file-source__name">{{ fileName }}</div>
    </div>
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-row">
        <div class="control-group">
          <label class="control-label">{{ t('fftSize') }}</label>
          <select v-model.number="fftSizeIdx" @change="onFftChange">
            <option v-for="(s, i) in fftSizes" :key="i" :value="i">{{ s }}</option>
          </select>
        </div>
        <div class="control-group">
          <label class="control-label">{{ t('overlaps') }}</label>
          <select v-model.number="overlapIdx" @change="onFftChange">
            <option v-for="(o, i) in overlaps" :key="i" :value="i">{{ o }}</option>
          </select>
        </div>
      </div>
      <label class="control-label">{{ t('delayBands') }}</label>
      <DrawableMultiSlider v-model="delayValues" :height="100" :maxVal="200" color="#4488CC" @update:modelValue="onDelayChange" />
      <label class="control-label">{{ t('feedbackBands') }}</label>
      <DrawableMultiSlider v-model="feedbackValues" :height="100" color="#CC8844" @update:modelValue="onFeedbackChange" />
    </div>
  </div>
</template>

<script>
import DrawableMultiSlider from '../controls/DrawableMultiSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

const FFT_SIZES = [64, 128, 256, 512, 1024, 2048, 4096, 8192]
const OVERLAPS = [2, 4, 8, 16, 32]

export default {
  name: 'Mod06SpectralDelay',
  components: { DrawableMultiSlider },
  data() {
    return {
      fftSizeIdx: 4, overlapIdx: 1,
      fftSizes: FFT_SIZES, overlaps: OVERLAPS,
      delayValues: new Array(256).fill(0),
      feedbackValues: new Array(256).fill(0),
      isPlaying: false, fileName: '',
      fileBuffer: null, fileSource: null,
      workletNode: null
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
        loadFile: { fr: 'Choisir un son', en: 'Choose a sound' },
        play: { fr: 'Jouer', en: 'Play' },
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        fftSize: { fr: 'Taille FFT', en: 'FFT Size' },
        overlaps: { fr: 'Chevauchements', en: 'Overlaps' },
        delayBands: { fr: 'Délai par tranche de fréquence', en: 'Per-band Delay' },
        feedbackBands: { fr: 'Récursion par tranche de fréq.', en: 'Per-band Feedback' }
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
        new URL('../../audio/worklets/phase-vocoder.js', import.meta.url)
      )
      this.workletNode = new AudioWorkletNode(ctx, 'phase-vocoder', {
        processorOptions: { fftSize: FFT_SIZES[this.fftSizeIdx] }
      })
      this.workletNode.port.postMessage({
        mode: 'delay',
        delayTimes: this.delayValues,
        delayFeedback: this.feedbackValues
      })
      this.workletNode.connect(this.engine.masterGain)
    },
    teardown() {
      this.stopPlay()
      if (this.workletNode) try { this.workletNode.disconnect() } catch (e) { /* */ }
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
      if (this.isPlaying) this.stopPlay()
      else this.startPlay()
    },
    startPlay() {
      if (!this.fileBuffer || !this.workletNode) return
      const ctx = this.engine.context
      this.fileSource = ctx.createBufferSource()
      this.fileSource.buffer = this.fileBuffer
      this.fileSource.loop = true
      this.fileSource.connect(this.workletNode)
      this.fileSource.start()
      this.isPlaying = true
    },
    stopPlay() {
      if (this.fileSource) {
        try { this.fileSource.stop() } catch (e) { /* */ }
        try { this.fileSource.disconnect() } catch (e) { /* */ }
        this.fileSource = null
      }
      this.isPlaying = false
    },
    async onFftChange() {
      // Rebuild worklet
      const wasPlaying = this.isPlaying
      this.stopPlay()
      if (this.workletNode) try { this.workletNode.disconnect() } catch (e) { /* */ }
      const ctx = this.engine.context
      this.workletNode = new AudioWorkletNode(ctx, 'phase-vocoder', {
        processorOptions: { fftSize: FFT_SIZES[this.fftSizeIdx] }
      })
      this.workletNode.port.postMessage({
        mode: 'delay',
        delayTimes: this.delayValues,
        delayFeedback: this.feedbackValues
      })
      this.workletNode.connect(this.engine.masterGain)
      if (wasPlaying) this.startPlay()
    },
    onDelayChange(values) {
      if (this.workletNode) this.workletNode.port.postMessage({ delayTimes: values })
    },
    onFeedbackChange(values) {
      if (this.workletNode) this.workletNode.port.postMessage({ delayFeedback: values })
    }
  }
}
</script>
