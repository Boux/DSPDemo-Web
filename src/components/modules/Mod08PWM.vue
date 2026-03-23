<template>
  <div class="module-controls">
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('frequency')" v-model="freq" :mini="40" :maxi="2000" :log="true" @update:modelValue="onFreqChange" />
      <ControlSlider :label="t('duty')" v-model="duty" :mini="1" :maxi="99" :integer="true" @update:modelValue="onDutyChange" />
      <ControlSlider :label="t('filter')" v-model="damp" :mini="0" :maxi="32" :integer="true" @update:modelValue="onDampChange" />
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'Mod08PWM',
  components: { ControlSlider },
  data() {
    return {
      freq: 172, duty: 50, damp: 0,
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
        frequency: { fr: 'Fréquence fondamentale en Hz', en: 'Fundamental Frequency (Hz)' },
        duty: { fr: "Cycle d'ouverture en %", en: 'Duty Cycle (%)' },
        filter: { fr: 'Filtre anti-alias', en: 'Anti-alias Filter' }
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
        new URL('../../audio/worklets/pwm.js', import.meta.url)
      )
      this.workletNode = new AudioWorkletNode(ctx, 'pwm')
      this.workletNode.port.postMessage({ freq: this.freq, duty: this.duty * 0.01, damp: this.damp })

      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 0.5
      this.workletNode.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      ;[this.workletNode, this.outputGain].forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    onFreqChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ freq: val })
    },
    onDutyChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ duty: val * 0.01 })
    },
    onDampChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ damp: Math.round(val) })
    }
  }
}
</script>
