<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('lfoFreq')" v-model="lfoFreq" :mini="0.01" :maxi="20" :log="true" @update:modelValue="onLfoFreqChange" />
      <ControlSlider :label="t('meanDelay')" v-model="meanDelay" :mini="2" :maxi="100" :log="true" @update:modelValue="onMeanDelayChange" />
      <ControlSlider :label="t('depth')" v-model="depth" :mini="0" :maxi="99.5" @update:modelValue="onDepthChange" />
      <ControlSlider :label="t('feedback')" v-model="feedback" :mini="0" :maxi="99" @update:modelValue="onFeedChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod03VariableDelay',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      lfoFreq: 0.1,
      meanDelay: 5,
      depth: 99.5,
      feedback: 0,
      lfo: null,
      lfoGain: null,
      delayNode: null,
      feedbackGain: null,
      mixGain: null,
      constantSource: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        lfoFreq: { fr: 'Fréquence du LFO', en: 'LFO Frequency' },
        meanDelay: { fr: 'Temps de délai moyen (ms)', en: 'Mean Delay Time (ms)' },
        depth: { fr: 'Profondeur de la modulation (%)', en: 'Modulation Depth (%)' },
        feedback: { fr: 'Réinjection en %', en: 'Feedback %' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // LFO modulates delay time around meanDelay
      // delay = meanDelay + lfo * meanDelay * depth
      this.delayNode = ctx.createDelay(0.5)
      const meanSec = this.meanDelay * 0.001
      this.delayNode.delayTime.value = meanSec

      // LFO
      this.lfo = ctx.createOscillator()
      this.lfo.type = 'sine'
      this.lfo.frequency.value = this.lfoFreq

      // LFO gain = meanDelay * depth
      this.lfoGain = ctx.createGain()
      this.lfoGain.gain.value = meanSec * this.depth * 0.01

      this.lfo.connect(this.lfoGain)
      this.lfoGain.connect(this.delayNode.delayTime)
      this.lfo.start()

      // Feedback
      this.feedbackGain = ctx.createGain()
      this.feedbackGain.gain.value = 0
      this.delayNode.connect(this.feedbackGain)
      this.feedbackGain.connect(this.delayNode)

      // Mix
      this.mixGain = ctx.createGain()
      this.mixGain.gain.value = 0.5
      source.connect(this.delayNode)
      source.connect(this.mixGain)
      this.delayNode.connect(this.mixGain)
      this.mixGain.connect(this.engine.masterGain)
    },
    teardown() {
      if (this.lfo) try { this.lfo.stop() } catch (e) { /* */ }
      const nodes = [this.lfo, this.lfoGain, this.delayNode, this.feedbackGain, this.mixGain]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    onLfoFreqChange(val) {
      if (!this.audioReady) return
      this.lfo.frequency.setTargetAtTime(val, this.engine.context.currentTime, 0.05)
    },
    onMeanDelayChange(val) {
      if (!this.audioReady) return
      const sec = val * 0.001
      this.delayNode.delayTime.setTargetAtTime(sec, this.engine.context.currentTime, 0.05)
      this.lfoGain.gain.setTargetAtTime(sec * this.depth * 0.01, this.engine.context.currentTime, 0.05)
    },
    onDepthChange(val) {
      if (!this.audioReady) return
      const sec = this.meanDelay * 0.001
      this.lfoGain.gain.setTargetAtTime(sec * val * 0.01, this.engine.context.currentTime, 0.05)
    },
    onFeedChange(val) {
      if (!this.audioReady) return
      this.feedbackGain.gain.setTargetAtTime(val * 0.01, this.engine.context.currentTime, 0.05)
    }
  }
}
</script>
