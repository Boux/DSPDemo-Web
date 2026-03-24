<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <label class="control-label">{{ t('amplitudes') }}</label>
      <div class="cheby-knobs">
        <LabelKnob v-for="(_, i) in amps" :key="i" :label="'T' + (i+1)" :modelValue="amps[i]" :mini="-1" :maxi="1" @update:modelValue="v => setAmp(i, v)" />
      </div>
      <ControlSlider :label="t('inputGain')" v-model="inputGain" :mini="0.01" :maxi="1" @update:modelValue="onGainChange" />
      <label class="control-label">
        <input type="checkbox" v-model="normalize" @change="updateCurve" />
        {{ t('normalize') }}
      </label>
      <TransferFunction :curve="curve" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import LabelKnob from '../controls/LabelKnob.vue'
import TransferFunction from '../visualization/TransferFunction.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

// Chebyshev polynomial T_n(x)
function chebyshev(n, x) {
  if (n === 0) return 1
  if (n === 1) return x
  let t0 = 1, t1 = x
  for (let i = 2; i <= n; i++) {
    const t2 = 2 * x * t1 - t0
    t0 = t1
    t1 = t2
  }
  return t1
}

function buildCurve(amps, size) {
  const curve = new Float32Array(size)
  for (let i = 0; i < size; i++) {
    const x = (i / (size - 1)) * 2 - 1
    let val = 0
    for (let n = 0; n < amps.length; n++) {
      val += amps[n] * chebyshev(n + 1, x)
    }
    curve[i] = val
  }
  // Auto-normalize
  let maxAbs = 0
  for (let i = 0; i < size; i++) {
    const abs = Math.abs(curve[i])
    if (abs > maxAbs) maxAbs = abs
  }
  if (maxAbs > 0) {
    for (let i = 0; i < size; i++) {
      curve[i] /= maxAbs
    }
  }
  return curve
}

export default {
  name: 'Mod10Chebyshev',
  components: { SourcePanel, ControlSlider, LabelKnob, TransferFunction },
  mixins: [moduleAudioMixin],
  data() {
    return {
      amps: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      inputGain: 1,
      normalize: false,
      curve: null,
      waveshaper: null,
      inputGainNode: null,
      outputGain: null
    }
  },
  mounted() {
    this.updateCurve()
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        amplitudes: { fr: 'Amplitudes des polynômes', en: 'Polynomial Amplitudes' },
        inputGain: { fr: "Volume d'entrée", en: 'Input Gain' },
        normalize: { fr: 'Activer la normalisation', en: 'Enable Normalization' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      this.inputGainNode = ctx.createGain()
      this.inputGainNode.gain.value = this.inputGain

      this.waveshaper = ctx.createWaveShaper()
      this.waveshaper.oversample = '4x'

      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 0.707

      source.connect(this.inputGainNode)
      this.inputGainNode.connect(this.waveshaper)
      this.waveshaper.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      const nodes = [this.inputGainNode, this.waveshaper, this.outputGain]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    setAmp(index, value) {
      this.amps[index] = value
      this.updateCurve()
    },
    updateCurve() {
      this.curve = buildCurve(this.amps, 1024)
      if (this.waveshaper) {
        this.waveshaper.curve = this.curve
      }
    },
    onGainChange(val) {
      if (this.inputGainNode) {
        this.inputGainNode.gain.setTargetAtTime(val, this.engine.context.currentTime, 0.05)
      }
    }
  }
}
</script>

<style lang="sass">
.cheby-knobs
  display: flex
  flex-wrap: wrap
  gap: 2px
  justify-content: center
  margin: var(--sp-2) 0
</style>
