<template>
  <div class="module-controls">
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-group">
        <label class="control-label">{{ t('modType') }}</label>
        <select v-model.number="modType" @change="onModTypeChange">
          <option :value="0">{{ t('ring') }}</option>
          <option :value="1">{{ t('am') }}</option>
        </select>
      </div>
      <ControlSlider :label="t('carrierFreq')" v-model="carrierFreq" :mini="40" :maxi="2000" :log="true" @update:modelValue="onCarrierFreqChange" />
      <ControlSlider :label="t('modFreq')" v-model="modFreq" :mini="1" :maxi="2000" :log="true" @update:modelValue="onModFreqChange" />
      <div class="control-group">
        <label class="control-label">{{ t('carrierWave') }}</label>
        <select v-model.number="carrierWaveIdx" @change="onCarrierWaveChange">
          <option v-for="(w, i) in waveforms" :key="i" :value="i">{{ w.label }}</option>
        </select>
      </div>
      <div class="control-group">
        <label class="control-label">{{ t('modWave') }}</label>
        <select v-model.number="modWaveIdx" @change="onModWaveChange">
          <option v-for="(w, i) in waveforms" :key="i" :value="i">{{ w.label }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

const WAVEFORMS = [
  { label: 'Sinus', type: 'sine' },
  { label: 'Scie 2', type: 'sawtooth' },
  { label: 'Scie 5', type: 'sawtooth' },
  { label: 'Scie 10', type: 'sawtooth' },
  { label: 'Scie 20', type: 'sawtooth' },
  { label: 'Carrée 2', type: 'square' },
  { label: 'Carrée 5', type: 'square' },
  { label: 'Carrée 10', type: 'square' },
  { label: 'Carrée 20', type: 'square' },
  { label: 'Triangle 2', type: 'triangle' },
  { label: 'Triangle 5', type: 'triangle' },
  { label: 'Triangle 10', type: 'triangle' },
  { label: 'Triangle 20', type: 'triangle' }
]

function buildPeriodicWave(ctx, index) {
  // For sine, use the built-in type
  if (index === 0) return null

  // Determine base type and harmonic count
  let harmonics, type
  if (index <= 4) {
    type = 'saw'
    harmonics = [2, 5, 10, 20][index - 1]
  } else if (index <= 8) {
    type = 'square'
    harmonics = [2, 5, 10, 20][index - 5]
  } else {
    type = 'triangle'
    harmonics = [2, 5, 10, 20][index - 9]
  }

  const real = new Float32Array(harmonics + 1)
  const imag = new Float32Array(harmonics + 1)
  real[0] = 0
  imag[0] = 0

  for (let n = 1; n <= harmonics; n++) {
    if (type === 'saw') {
      imag[n] = 1.0 / n
    } else if (type === 'square') {
      imag[n] = (n % 2 === 1) ? 1.0 / n : 0
    } else {
      // triangle
      if (n % 2 === 1) {
        const sign = ((n - 1) / 2) % 2 === 0 ? 1 : -1
        imag[n] = sign / (n * n)
      }
    }
  }

  return ctx.createPeriodicWave(real, imag, { disableNormalization: false })
}

export default {
  name: 'Mod09AmpMod',
  components: { ControlSlider },
  data() {
    return {
      modType: 0,
      carrierFreq: 344,
      modFreq: 172,
      carrierWaveIdx: 0,
      modWaveIdx: 0,
      waveforms: WAVEFORMS,
      carrier: null,
      modulator: null,
      modGain: null,
      outputGain: null,
      dcOffset: null
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
        modType: { fr: 'Type de modulation', en: 'Modulation Type' },
        ring: { fr: 'Modulation en anneaux', en: 'Ring Modulation' },
        am: { fr: "Modulation d'amplitude", en: 'Amplitude Modulation' },
        carrierFreq: { fr: 'Fréquence porteuse', en: 'Carrier Frequency' },
        modFreq: { fr: 'Fréquence modulante', en: 'Modulator Frequency' },
        carrierWave: { fr: 'Forme d\'onde de la porteuse', en: 'Carrier Waveform' },
        modWave: { fr: 'Forme d\'onde de la modulante', en: 'Modulator Waveform' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      if (!ctx) return

      // Disconnect source panel from master (this module generates its own audio)
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect(this.engine.masterGain) } catch (e) { /* */ }
      }

      // Carrier oscillator
      this.carrier = ctx.createOscillator()
      this.carrier.type = 'sine'
      this.carrier.frequency.value = this.carrierFreq

      // Modulator oscillator -> modGain (acts as amplitude control for carrier)
      this.modulator = ctx.createOscillator()
      this.modulator.type = 'sine'
      this.modulator.frequency.value = this.modFreq

      // For ring mod: modulator output [-1, 1]
      // For AM: modulator output [0, 1] (add 0.5 offset, scale 0.5)
      this.modGain = ctx.createGain()
      this.modGain.gain.value = 0 // Will be set by modulator

      // DC offset for AM mode
      this.dcOffset = ctx.createConstantSource()
      this.dcOffset.offset.value = 0 // 0 for ring, 0.5 for AM
      this.dcOffset.start()

      // Output gain
      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 0.707

      // Carrier -> modGain -> outputGain -> master
      this.carrier.connect(this.modGain)
      this.modGain.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)

      // Modulator controls modGain.gain
      this.modulator.connect(this.modGain.gain)
      this.dcOffset.connect(this.modGain.gain)

      this.carrier.start()
      this.modulator.start()

      this.applyModType()
    },
    teardown() {
      if (this.carrier) try { this.carrier.stop() } catch (e) { /* */ }
      if (this.modulator) try { this.modulator.stop() } catch (e) { /* */ }
      if (this.dcOffset) try { this.dcOffset.stop() } catch (e) { /* */ }
      const nodes = [this.carrier, this.modulator, this.modGain, this.outputGain, this.dcOffset]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    applyModType() {
      if (!this.dcOffset) return
      // Ring: mod [-1,1], dc=0 -> gain oscillates -1 to 1
      // AM: mod [-1,1] * 0.5 + 0.5 -> gain oscillates 0 to 1
      if (this.modType === 0) {
        this.dcOffset.offset.value = 0
      } else {
        this.dcOffset.offset.value = 0.5
      }
    },
    onModTypeChange() { this.applyModType() },
    onCarrierFreqChange(val) {
      this.carrier.frequency.setTargetAtTime(val, this.engine.context.currentTime, 0.05)
    },
    onModFreqChange(val) {
      this.modulator.frequency.setTargetAtTime(val, this.engine.context.currentTime, 0.05)
    },
    onCarrierWaveChange() {
      const wave = buildPeriodicWave(this.engine.context, this.carrierWaveIdx)
      if (wave) this.carrier.setPeriodicWave(wave)
      else this.carrier.type = 'sine'
    },
    onModWaveChange() {
      const wave = buildPeriodicWave(this.engine.context, this.modWaveIdx)
      if (wave) this.modulator.setPeriodicWave(wave)
      else this.modulator.type = 'sine'
    }
  }
}
</script>
