<template>
  <div class="module-controls">
    <div class="section-head">{{ t('sources') }}</div>
    <div class="section-body">
      <div class="control-row">
        <label class="toggle-btn file-source__load">
          {{ t('envelope') }}
          <input type="file" accept="audio/*" @change="loadEnvelope" hidden />
        </label>
        <label class="toggle-btn file-source__load">
          {{ t('excitation') }}
          <input type="file" accept="audio/*" @change="loadExcitation" hidden />
        </label>
      </div>
      <button class="toggle-btn" :class="{ active: isPlaying }" @click="togglePlay">
        {{ t('play') }}
      </button>
    </div>
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="vocoder-knobs">
        <LabelKnob label="Freq" v-model="freq" :mini="40" :maxi="250" @update:modelValue="updateVocoder" />
        <LabelKnob label="Exp." v-model="expansion" :mini="0.5" :maxi="2" @update:modelValue="updateVocoder" />
        <LabelKnob label="Q" v-model="qFactor" :mini="1" :maxi="100" @update:modelValue="updateVocoder" />
        <LabelKnob label="Pente" v-model="slope" :mini="0" :maxi="1" @update:modelValue="updateVocoder" />
        <LabelKnob label="Nbrs" v-model="stages" :mini="2" :maxi="64" :integer="true" @update:modelValue="rebuildVocoder" />
      </div>
      <ControlSlider label="Volume (dB)" v-model="volumeDb" :mini="-60" :maxi="18" @update:modelValue="updateGain" />
    </div>
  </div>
</template>

<script>
import LabelKnob from '../controls/LabelKnob.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'Mod06Vocoder',
  components: { LabelKnob, ControlSlider },
  data() {
    return {
      freq: 100, expansion: 1.2, qFactor: 20, slope: 0.5, stages: 24,
      volumeDb: 0, isPlaying: false,
      envBuffer: null, excBuffer: null,
      envSource: null, excSource: null,
      analysisBands: [], synthBands: [], followers: [], modulators: [],
      outputGain: null, mixGain: null
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
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' }
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
      this.outputGain.gain.value = Math.pow(10, this.volumeDb * 0.05) * 0.25
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      this.stopPlay()
      this.cleanupBands()
      if (this.outputGain) try { this.outputGain.disconnect() } catch (e) { /* */ }
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    async loadEnvelope(e) {
      const file = e.target.files[0]
      if (!file) return
      const buf = await file.arrayBuffer()
      this.envBuffer = await this.engine.context.decodeAudioData(buf)
    },
    async loadExcitation(e) {
      const file = e.target.files[0]
      if (!file) return
      const buf = await file.arrayBuffer()
      this.excBuffer = await this.engine.context.decodeAudioData(buf)
    },
    togglePlay() {
      if (this.isPlaying) { this.stopPlay() } else { this.startPlay() }
    },
    startPlay() {
      if (!this.envBuffer || !this.excBuffer) return
      const ctx = this.engine.context
      this.envSource = ctx.createBufferSource()
      this.envSource.buffer = this.envBuffer
      this.envSource.loop = true
      this.excSource = ctx.createBufferSource()
      this.excSource.buffer = this.excBuffer
      this.excSource.loop = true
      this.rebuildVocoder()
      this.envSource.start()
      this.excSource.start()
      this.isPlaying = true
    },
    stopPlay() {
      if (this.envSource) try { this.envSource.stop() } catch (e) { /* */ }
      if (this.excSource) try { this.excSource.stop() } catch (e) { /* */ }
      this.envSource = null
      this.excSource = null
      this.isPlaying = false
    },
    cleanupBands() {
      ;[...this.analysisBands, ...this.synthBands, ...this.followers, ...this.modulators].forEach(n => {
        try { n.disconnect() } catch (e) { /* */ }
      })
      this.analysisBands = []
      this.synthBands = []
      this.followers = []
      this.modulators = []
    },
    rebuildVocoder() {
      this.cleanupBands()
      if (!this.envSource || !this.excSource) return
      const ctx = this.engine.context
      const numBands = Math.round(this.stages)

      for (let i = 0; i < numBands; i++) {
        const bandFreq = this.freq * Math.pow(this.expansion, i)
        if (bandFreq > ctx.sampleRate / 2) break

        // Analysis: envelope -> bandpass -> rectify (abs approximation via squaring+sqrt) -> lowpass (follower)
        const aBp = ctx.createBiquadFilter()
        aBp.type = 'bandpass'
        aBp.frequency.value = bandFreq
        aBp.Q.value = this.qFactor

        // Synthesis: excitation -> bandpass -> gain (modulated by follower)
        const sBp = ctx.createBiquadFilter()
        sBp.type = 'bandpass'
        sBp.frequency.value = bandFreq
        sBp.Q.value = this.qFactor

        const modGain = ctx.createGain()
        modGain.gain.value = 0

        this.envSource.connect(aBp)
        this.excSource.connect(sBp)
        sBp.connect(modGain)
        modGain.connect(this.outputGain)

        // Use analyser for envelope following (approximate with JS)
        const analyser = ctx.createAnalyser()
        analyser.fftSize = 256
        analyser.smoothingTimeConstant = 1 - this.slope
        aBp.connect(analyser)

        this.analysisBands.push(aBp)
        this.synthBands.push(sBp)
        this.modulators.push(modGain)
        this.followers.push(analyser)
      }

      // Start envelope following loop
      this.startFollowerLoop()
    },
    startFollowerLoop() {
      if (this._followerFrame) cancelAnimationFrame(this._followerFrame)
      const update = () => {
        for (let i = 0; i < this.followers.length; i++) {
          const data = new Float32Array(this.followers[i].fftSize)
          this.followers[i].getFloatTimeDomainData(data)
          let rms = 0
          for (let j = 0; j < data.length; j++) rms += data[j] * data[j]
          rms = Math.sqrt(rms / data.length)
          this.modulators[i].gain.setTargetAtTime(rms * 4, this.engine.context.currentTime, 0.01)
        }
        this._followerFrame = requestAnimationFrame(update)
      }
      update()
    },
    updateVocoder() {
      // Update band frequencies and Q in place
      for (let i = 0; i < this.analysisBands.length; i++) {
        const f = this.freq * Math.pow(this.expansion, i)
        this.analysisBands[i].frequency.value = f
        this.analysisBands[i].Q.value = this.qFactor
        this.synthBands[i].frequency.value = f
        this.synthBands[i].Q.value = this.qFactor
        if (this.followers[i]) this.followers[i].smoothingTimeConstant = 1 - this.slope
      }
    },
    updateGain() {
      if (this.outputGain) {
        this.outputGain.gain.setTargetAtTime(Math.pow(10, this.volumeDb * 0.05) * 0.25, this.engine.context.currentTime, 0.05)
      }
    }
  }
}
</script>

<style lang="sass">
.vocoder-knobs
  display: flex
  justify-content: center
  gap: 2px
  margin: 6px 0
</style>
