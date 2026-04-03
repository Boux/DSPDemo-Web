<template>
  <div class="module-controls">
    <div class="section-head">{{ t('sources') }}</div>
    <div class="section-body">
      <div class="vocoder-source">
        <label class="vocoder-source__label">{{ t('envelope') }}</label>
        <label class="toggle-btn vocoder-source__btn">
          {{ envName || t('choose') }}
          <input type="file" accept="audio/*" @change="loadEnvelope" hidden />
        </label>
      </div>
      <div class="vocoder-source">
        <label class="vocoder-source__label">{{ t('excitation') }}</label>
        <label class="toggle-btn vocoder-source__btn">
          {{ excName || t('choose') }}
          <input type="file" accept="audio/*" @change="loadExcitation" hidden />
        </label>
      </div>
      <button class="toggle-btn" :class="{ active: isPlaying }" @click="togglePlay" :disabled="!envBuffer || !excBuffer">
        {{ isPlaying ? t('stop') : t('play') }}
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
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod06Vocoder',
  components: { LabelKnob, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      freq: 100, expansion: 1.2, qFactor: 20, slope: 0.5, stages: 24,
      volumeDb: 0, isPlaying: false,
      envBuffer: null, excBuffer: null, envName: '', excName: '',
      envSource: null, excSource: null,
      analysisBands: [], synthBands: [], followers: [], modulators: [],
      outputGain: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        sources: { fr: 'Sources Sonores', en: 'Audio Sources' },
        envelope: { fr: 'Enveloppe', en: 'Envelope' },
        excitation: { fr: 'Excitation', en: 'Excitation' },
        choose: { fr: 'Choisir...', en: 'Choose...' },
        play: { fr: 'Jouer les sons', en: 'Play sounds' },
        stop: { fr: 'Arrêter', en: 'Stop' },
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      // Disconnect source panel — vocoder uses its own file sources
      const source = this.engine.sourcePanel.output
      try { source.disconnect(this.engine.masterGain) } catch (e) { /* */ }

      this.outputGain = this.ctx.createGain()
      this.outputGain.gain.value = Math.pow(10, this.volumeDb * 0.05) * 0.25
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      this.stopPlay()
      this.cleanupBands()
      if (this.outputGain) try { this.outputGain.disconnect() } catch (e) { /* */ }
      this.releaseSource()
    },
    async loadEnvelope(e) {
      const file = e.target.files[0]
      if (!file || !this.ctx) return
      this.envName = file.name
      const buf = await file.arrayBuffer()
      this.envBuffer = await this.ctx.decodeAudioData(buf)
    },
    async loadExcitation(e) {
      const file = e.target.files[0]
      if (!file || !this.ctx) return
      this.excName = file.name
      const buf = await file.arrayBuffer()
      this.excBuffer = await this.ctx.decodeAudioData(buf)
    },
    togglePlay() {
      if (this.isPlaying) { this.stopPlay() } else { this.startPlay() }
    },
    startPlay() {
      if (!this.envBuffer || !this.excBuffer) return

      this.envSource = this.ctx.createBufferSource()
      this.envSource.buffer = this.envBuffer
      this.envSource.loop = true
      this.excSource = this.ctx.createBufferSource()
      this.excSource.buffer = this.excBuffer
      this.excSource.loop = true

      this.buildBands()

      this.envSource.start()
      this.excSource.start()
      this.isPlaying = true
    },
    stopPlay() {
      if (this._followerFrame) cancelAnimationFrame(this._followerFrame)
      if (this.envSource) try { this.envSource.stop() } catch (e) { /* */ }
      if (this.excSource) try { this.excSource.stop() } catch (e) { /* */ }
      this.envSource = null
      this.excSource = null
      this.cleanupBands()
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
    buildBands() {
      this.cleanupBands()
      if (!this.envSource || !this.excSource) return

      const numBands = Math.round(this.stages)

      for (let i = 0; i < numBands; i++) {
        const bandFreq = this.freq * Math.pow(this.expansion, i)
        if (bandFreq > this.ctx.sampleRate / 2) break

        // Analysis: envelope → bandpass → analyser (for envelope following)
        const aBp = this.ctx.createBiquadFilter()
        aBp.type = 'bandpass'
        aBp.frequency.value = bandFreq
        aBp.Q.value = this.qFactor

        // Synthesis: excitation → bandpass → gain (modulated by envelope)
        const sBp = this.ctx.createBiquadFilter()
        sBp.type = 'bandpass'
        sBp.frequency.value = bandFreq
        sBp.Q.value = this.qFactor

        const modGain = this.ctx.createGain()
        modGain.gain.value = 0

        this.envSource.connect(aBp)
        this.excSource.connect(sBp)
        sBp.connect(modGain)
        modGain.connect(this.outputGain)

        // Analyser for envelope following
        const analyser = this.ctx.createAnalyser()
        analyser.fftSize = 256
        analyser.smoothingTimeConstant = 1 - this.slope
        aBp.connect(analyser)

        this.analysisBands.push(aBp)
        this.synthBands.push(sBp)
        this.modulators.push(modGain)
        this.followers.push(analyser)
      }

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
          this.modulators[i].gain.setTargetAtTime(rms * 20, this.ctx.currentTime, 0.01)
        }
        this._followerFrame = requestAnimationFrame(update)
      }
      update()
    },
    updateVocoder() {
      for (let i = 0; i < this.analysisBands.length; i++) {
        const f = this.freq * Math.pow(this.expansion, i)
        this.analysisBands[i].frequency.value = f
        this.analysisBands[i].Q.value = this.qFactor
        this.synthBands[i].frequency.value = f
        this.synthBands[i].Q.value = this.qFactor
        if (this.followers[i]) this.followers[i].smoothingTimeConstant = 1 - this.slope
      }
    },
    rebuildVocoder() {
      if (!this.isPlaying) return
      this.buildBands()
    },
    updateGain() {
      if (this.outputGain) {
        this.outputGain.gain.setTargetAtTime(Math.pow(10, this.volumeDb * 0.05) * 0.25, this.ctx.currentTime, 0.05)
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
  margin: var(--sp-2) 0

.vocoder-source
  display: flex
  align-items: center
  gap: var(--sp-2)
  margin-bottom: var(--sp-1)

  &__label
    font-size: var(--font-size-sm)
    color: var(--color-text-muted)
    min-width: 70px

  &__btn
    flex: 1
    text-align: center
    cursor: pointer
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    font-size: var(--font-size-xs)
</style>
