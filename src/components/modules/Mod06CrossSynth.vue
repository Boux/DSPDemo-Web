<template>
  <div class="module-controls">
    <div class="section-head">{{ t('sources') }}</div>
    <div class="section-body">
      <div class="control-row">
        <label class="toggle-btn file-source__load">
          {{ t('envelope') }}
          <input type="file" accept="audio/*" @change="loadFile(0, $event)" hidden />
        </label>
        <label class="toggle-btn file-source__load">
          {{ t('excitation') }}
          <input type="file" accept="audio/*" @change="loadFile(1, $event)" hidden />
        </label>
      </div>
      <button class="toggle-btn" :class="{ active: isPlaying }" @click="togglePlay">
        {{ t('play') }}
      </button>
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
      <ControlSlider label="Volume (dB)" v-model="volumeDb" :mini="-60" :maxi="18" @update:modelValue="updateGain" />
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

const FFT_SIZES = [64, 128, 256, 512, 1024, 2048, 4096, 8192]
const OVERLAPS = [2, 4, 8, 16, 32]

export default {
  name: 'Mod06CrossSynth',
  components: { ControlSlider },
  data() {
    return {
      fftSizeIdx: 4, overlapIdx: 1,
      fftSizes: FFT_SIZES, overlaps: OVERLAPS,
      volumeDb: 0, isPlaying: false,
      buffers: [null, null],
      sources: [null, null],
      // Cross-synthesis: multiply spectra using convolver as approximation
      // A ConvolverNode approximates spectral multiplication in the freq domain
      convolverNode: null, outputGain: null
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
        sources: { fr: 'Sources Sonores', en: 'Audio Sources' },
        envelope: { fr: 'Enveloppe', en: 'Envelope' },
        excitation: { fr: 'Excitation', en: 'Excitation' },
        play: { fr: 'Jouer les sons', en: 'Play sounds' },
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        fftSize: { fr: 'Taille FFT', en: 'FFT Size' },
        overlaps: { fr: 'Chevauchements', en: 'Overlaps' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      if (!ctx) return
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect(this.engine.masterGain) } catch (e) { /* */ }
      }
      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = Math.pow(10, this.volumeDb * 0.05)
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      this.stopPlay()
      if (this.convolverNode) try { this.convolverNode.disconnect() } catch (e) { /* */ }
      if (this.outputGain) try { this.outputGain.disconnect() } catch (e) { /* */ }
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    async loadFile(idx, e) {
      const file = e.target.files[0]
      if (!file) return
      const buf = await file.arrayBuffer()
      this.buffers[idx] = await this.engine.context.decodeAudioData(buf)
    },
    togglePlay() {
      if (this.isPlaying) this.stopPlay()
      else this.startPlay()
    },
    startPlay() {
      if (!this.buffers[0] || !this.buffers[1]) return
      const ctx = this.engine.context

      // Cross synthesis via convolution: convolve envelope signal with excitation
      // This multiplies their spectra (which is the core of cross-synthesis)
      this.convolverNode = ctx.createConvolver()
      this.convolverNode.normalize = false

      // Use the shorter buffer as the convolver IR
      const shorter = this.buffers[0].duration < this.buffers[1].duration ? 0 : 1
      const longer = 1 - shorter
      this.convolverNode.buffer = this.buffers[shorter]

      this.sources[longer] = ctx.createBufferSource()
      this.sources[longer].buffer = this.buffers[longer]
      this.sources[longer].loop = true

      this.sources[longer].connect(this.convolverNode)
      this.convolverNode.connect(this.outputGain)
      this.sources[longer].start()
      this.isPlaying = true
    },
    stopPlay() {
      this.sources.forEach((s, i) => {
        if (s) { try { s.stop() } catch (e) { /* */ }; try { s.disconnect() } catch (e) { /* */ } }
        this.sources[i] = null
      })
      if (this.convolverNode) { try { this.convolverNode.disconnect() } catch (e) { /* */ }; this.convolverNode = null }
      this.isPlaying = false
    },
    updateGain() {
      if (this.outputGain) {
        this.outputGain.gain.setTargetAtTime(Math.pow(10, this.volumeDb * 0.05), this.engine.context.currentTime, 0.05)
      }
    }
  }
}
</script>
