<template>
  <div class="module-controls">
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-group">
        <label class="control-label">{{ t('waveform') }}</label>
        <select v-model.number="waveIdx" @change="onWaveChange">
          <option v-for="(w, i) in waveforms" :key="i" :value="i">{{ w }}</option>
        </select>
      </div>
      <ControlSlider :label="t('masterFreq')" v-model="masterFreq" :mini="40" :maxi="2000" :log="true" @update:modelValue="onMasterChange" />
      <ControlSlider :label="t('slaveFreq')" v-model="slaveFreq" :mini="40" :maxi="2000" :log="true" @update:modelValue="onSlaveChange" />
      <ControlSlider :label="t('crossfade')" v-model="xfade" :mini="0" :maxi="2" @update:modelValue="onXfadeChange" />
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

const WAVE_LABELS = [
  'Sinus', 'Scie 5', 'Scie 15', 'Scie 30', 'Scie 60',
  'Carrée 5', 'Carrée 15', 'Carrée 30', 'Carrée 60',
  'Triangle 3', 'Triangle 6', 'Triangle 12', 'Triangle 24'
]

function buildTableData(index) {
  const size = 8192
  const table = new Float32Array(size)
  if (index === 0) {
    for (let i = 0; i < size; i++) table[i] = Math.sin(2 * Math.PI * i / size)
    return table
  }
  let harmonics, type
  if (index <= 4) { type = 'saw'; harmonics = [5, 15, 30, 60][index - 1] }
  else if (index <= 8) { type = 'square'; harmonics = [5, 15, 30, 60][index - 5] }
  else { type = 'triangle'; harmonics = [3, 6, 12, 24][index - 9] }

  for (let i = 0; i < size; i++) {
    let val = 0
    for (let n = 1; n <= harmonics; n++) {
      const angle = 2 * Math.PI * n * i / size
      if (type === 'saw') val += Math.sin(angle) / n
      else if (type === 'square') val += (n % 2 === 1) ? Math.sin(angle) / n : 0
      else if (n % 2 === 1) val += (((n - 1) / 2) % 2 === 0 ? 1 : -1) * Math.sin(angle) / (n * n)
    }
    table[i] = val
  }
  // Normalize
  let max = 0
  for (let i = 0; i < size; i++) { if (Math.abs(table[i]) > max) max = Math.abs(table[i]) }
  if (max > 0) for (let i = 0; i < size; i++) table[i] /= max
  return table
}

export default {
  name: 'Mod08OscSync',
  components: { ControlSlider },
  data() {
    return {
      waveIdx: 0, masterFreq: 172, slaveFreq: 200, xfade: 0,
      waveforms: WAVE_LABELS,
      workletNode: null, outputGain: null
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
        masterFreq: { fr: 'Fréquence maître en Hz', en: 'Master Frequency (Hz)' },
        slaveFreq: { fr: 'Fréquence esclave en Hz', en: 'Slave Frequency (Hz)' },
        crossfade: { fr: 'Fondu enchaîné en ms', en: 'Crossfade (ms)' }
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
        new URL('../../audio/worklets/osc-sync.js', import.meta.url)
      )
      this.workletNode = new AudioWorkletNode(ctx, 'osc-sync')
      this.workletNode.port.postMessage({
        masterFreq: this.masterFreq,
        slaveFreq: this.slaveFreq,
        xfade: this.xfade,
        table: Array.from(buildTableData(this.waveIdx))
      })

      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 0.707
      this.workletNode.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      ;[this.workletNode, this.outputGain].forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    onWaveChange() {
      if (this.workletNode) {
        this.workletNode.port.postMessage({ table: Array.from(buildTableData(this.waveIdx)) })
      }
    },
    onMasterChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ masterFreq: val })
    },
    onSlaveChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ slaveFreq: val })
    },
    onXfadeChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ xfade: val })
    }
  }
}
</script>
