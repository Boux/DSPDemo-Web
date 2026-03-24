<template>
  <div class="module-controls">
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('carrierFreq')" v-model="carrierFreq" :mini="40" :maxi="5000" :log="true" @update:modelValue="onCarrierFreqChange" />
      <ControlSlider :label="t('ratio')" v-model="ratio" :mini="0.1" :maxi="10" @update:modelValue="onRatioChange" />
      <ControlSlider :label="t('index')" v-model="modIndex" :mini="0" :maxi="40" @update:modelValue="onIndexChange" />
      <div class="control-group">
        <label class="control-label">{{ t('carrierWave') }}</label>
        <select v-model.number="carrierWaveIdx" @change="onCarrierWaveChange">
          <option v-for="(w, i) in waveforms" :key="i" :value="i">{{ w[$i18n.locale] }}</option>
        </select>
      </div>
      <div class="control-group">
        <label class="control-label">{{ t('modWave') }}</label>
        <select v-model.number="modWaveIdx" @change="onModWaveChange">
          <option v-for="(w, i) in waveforms" :key="i" :value="i">{{ w[$i18n.locale] }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { WAVEFORM_LABELS } from '../../utils/waveformLabels'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

function buildPeriodicWave(ctx, index) {
  if (index === 0) return null
  let harmonics, type
  if (index <= 4) { type = 'saw'; harmonics = [2, 5, 10, 20][index - 1] }
  else if (index <= 8) { type = 'square'; harmonics = [2, 5, 10, 20][index - 5] }
  else { type = 'triangle'; harmonics = [2, 5, 10, 20][index - 9] }

  const real = new Float32Array(harmonics + 1)
  const imag = new Float32Array(harmonics + 1)
  for (let n = 1; n <= harmonics; n++) {
    if (type === 'saw') imag[n] = 1.0 / n
    else if (type === 'square') imag[n] = (n % 2 === 1) ? 1.0 / n : 0
    else if (n % 2 === 1) imag[n] = (((n - 1) / 2) % 2 === 0 ? 1 : -1) / (n * n)
  }
  return ctx.createPeriodicWave(real, imag, { disableNormalization: false })
}

export default {
  name: 'Mod09FreqMod',
  components: { ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      carrierFreq: 344,
      ratio: 1,
      modIndex: 5,
      carrierWaveIdx: 0,
      modWaveIdx: 0,
      waveforms: WAVEFORM_LABELS,
      carrier: null,
      modulator: null,
      modGainNode: null,
      outputGain: null
    }
  },
  computed: {
    modFreq() { return this.carrierFreq / this.ratio },
    modAmp() { return this.modFreq * this.modIndex }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        carrierFreq: { fr: 'Fréquence porteuse', en: 'Carrier Frequency' },
        ratio: { fr: 'Ratio porteuse:modulante', en: 'Carrier:Modulator Ratio' },
        index: { fr: 'Index de modulation', en: 'Modulation Index' },
        carrierWave: { fr: 'Forme d\'onde de la porteuse', en: 'Carrier Waveform' },
        modWave: { fr: 'Forme d\'onde de la modulante', en: 'Modulator Waveform' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context

      // Disconnect source panel
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect(this.engine.masterGain) } catch (e) { /* */ }
      }

      // FM: modulator -> modGain -> carrier.frequency
      // carrier -> outputGain -> master
      this.modulator = ctx.createOscillator()
      this.modulator.type = 'sine'
      this.modulator.frequency.value = this.modFreq

      this.modGainNode = ctx.createGain()
      this.modGainNode.gain.value = this.modAmp

      this.carrier = ctx.createOscillator()
      this.carrier.type = 'sine'
      this.carrier.frequency.value = this.carrierFreq

      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 0.707

      // Connect FM graph
      this.modulator.connect(this.modGainNode)
      this.modGainNode.connect(this.carrier.frequency)
      this.carrier.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)

      this.modulator.start()
      this.carrier.start()
    },
    teardown() {
      if (this.carrier) try { this.carrier.stop() } catch (e) { /* */ }
      if (this.modulator) try { this.modulator.stop() } catch (e) { /* */ }
      const nodes = [this.carrier, this.modulator, this.modGainNode, this.outputGain]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    updateModParams() {
      if (!this.audioReady) return
      const t = this.engine.context.currentTime
      const mf = this.carrierFreq / this.ratio
      const ma = mf * this.modIndex
      this.modulator.frequency.setTargetAtTime(mf, t, 0.05)
      this.modGainNode.gain.setTargetAtTime(ma, t, 0.05)
    },
    onCarrierFreqChange(val) {
      if (!this.audioReady) return
      this.carrier.frequency.setTargetAtTime(val, this.engine.context.currentTime, 0.05)
      this.updateModParams()
    },
    onRatioChange() { this.updateModParams() },
    onIndexChange() { this.updateModParams() },
    onCarrierWaveChange() {
      if (!this.audioReady) return
      const wave = buildPeriodicWave(this.engine.context, this.carrierWaveIdx)
      if (wave) this.carrier.setPeriodicWave(wave)
      else this.carrier.type = 'sine'
    },
    onModWaveChange() {
      if (!this.audioReady) return
      const wave = buildPeriodicWave(this.engine.context, this.modWaveIdx)
      if (wave) this.modulator.setPeriodicWave(wave)
      else this.modulator.type = 'sine'
    }
  }
}
</script>
