<template>
  <div class="module-controls">
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-group">
        <label class="control-label">{{ t('waveform') }}</label>
        <select v-model.number="waveType" @change="updateWaveform">
          <option :value="0">{{ t('sawtooth') }}</option>
          <option :value="1">{{ t('square') }}</option>
          <option :value="2">{{ t('triangle') }}</option>
        </select>
      </div>
      <ControlSlider :label="t('frequency')" v-model="frequency" :mini="40" :maxi="4000" :log="true" @update:modelValue="onFreqChange" />
      <ControlSlider :label="t('harmonics')" v-model="harmonics" :mini="1" :maxi="50" :integer="true" @update:modelValue="updateWaveform" />
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'Mod08AddSynthFix',
  components: { ControlSlider },
  data() {
    return {
      waveType: 0, frequency: 172, harmonics: 10,
      osc: null, outputGain: null
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
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        waveform: { fr: "Forme d'onde", en: 'Waveform' },
        sawtooth: { fr: 'Dent de scie', en: 'Sawtooth' },
        square: { fr: 'Onde carrée', en: 'Square Wave' },
        triangle: { fr: 'Onde triangulaire', en: 'Triangle Wave' },
        frequency: { fr: 'Fréquence fondamentale', en: 'Fundamental Frequency' },
        harmonics: { fr: "Nombre d'harmoniques", en: 'Number of Harmonics' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      if (!ctx) return
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect(this.engine.masterGain) } catch (e) { /* */ }
      }
      this.osc = ctx.createOscillator()
      this.osc.frequency.value = this.frequency
      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 0.707
      this.osc.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)
      this.updateWaveform()
      this.osc.start()
    },
    teardown() {
      if (this.osc) try { this.osc.stop() } catch (e) { /* */ }
      ;[this.osc, this.outputGain].forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    buildPeriodicWave() {
      const n = Math.round(this.harmonics)
      const real = new Float32Array(n + 1)
      const imag = new Float32Array(n + 1)
      for (let h = 1; h <= n; h++) {
        if (this.waveType === 0) {
          // Sawtooth: all harmonics, A(n) = 1/n
          imag[h] = 1.0 / h
        } else if (this.waveType === 1) {
          // Square: odd harmonics only, A(n) = 1/n
          imag[h] = (h % 2 === 1) ? 1.0 / h : 0
        } else {
          // Triangle: odd harmonics, A(n) = 1/n^2, alternating phase
          if (h % 2 === 1) {
            const sign = ((h - 1) / 2) % 2 === 0 ? 1 : -1
            imag[h] = sign / (h * h)
          }
        }
      }
      return this.engine.context.createPeriodicWave(real, imag, { disableNormalization: false })
    },
    updateWaveform() {
      if (!this.osc) return
      const wave = this.buildPeriodicWave()
      this.osc.setPeriodicWave(wave)
    },
    onFreqChange(val) {
      if (this.osc) this.osc.frequency.setTargetAtTime(val, this.engine.context.currentTime, 0.05)
    }
  }
}
</script>
