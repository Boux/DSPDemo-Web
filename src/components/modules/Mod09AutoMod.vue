<template>
  <div class="module-controls">
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('carrierFreq')" v-model="freq" :mini="40" :maxi="2000" :log="true" @update:modelValue="onFreqChange" />
      <ControlSlider :label="t('index')" v-model="index" :mini="0" :maxi="1" @update:modelValue="onIndexChange" />
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod09AutoMod',
  components: { ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      freq: 172,
      index: 0.1,
      osc: null,
      feedbackGain: null,
      outputGain: null,
      delayNode: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        carrierFreq: { fr: 'Fréquence porteuse', en: 'Carrier Frequency' },
        index: { fr: 'Index de modulation', en: 'Modulation Index' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context

      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect(this.engine.masterGain) } catch (e) { /* */ }
      }

      // Self-modulation: osc -> feedbackGain -> delay -> osc.frequency
      // The delay is needed to break the synchronous cycle
      this.osc = ctx.createOscillator()
      this.osc.type = 'sine'
      this.osc.frequency.value = this.freq

      this.feedbackGain = ctx.createGain()
      this.feedbackGain.gain.value = this.index * this.freq * 0.17

      // Tiny delay to break feedback loop
      this.delayNode = ctx.createDelay(0.01)
      this.delayNode.delayTime.value = 1 / ctx.sampleRate

      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 0.707

      // Feedback: osc -> feedbackGain -> delay -> osc.frequency
      this.osc.connect(this.feedbackGain)
      this.feedbackGain.connect(this.delayNode)
      this.delayNode.connect(this.osc.frequency)

      // Output
      this.osc.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)

      this.osc.start()
    },
    teardown() {
      if (this.osc) try { this.osc.stop() } catch (e) { /* */ }
      const nodes = [this.osc, this.feedbackGain, this.delayNode, this.outputGain]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    onFreqChange(val) {
      if (!this.audioReady) return
      this.osc.frequency.setTargetAtTime(val, this.engine.context.currentTime, 0.05)
      this.feedbackGain.gain.setTargetAtTime(this.index * val * 0.17, this.engine.context.currentTime, 0.05)
    },
    onIndexChange(val) {
      if (!this.audioReady) return
      this.feedbackGain.gain.setTargetAtTime(val * this.freq * 0.17, this.engine.context.currentTime, 0.05)
    }
  }
}
</script>
