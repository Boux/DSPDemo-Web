<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('delayTime')" v-model="delayTimeMs" :mini="minTimeMs" :maxi="100" :log="true" @update:modelValue="onTimeChange" />
      <div class="control-label delay-samples">{{ t('delaySamples') }}: {{ delaySamples }}</div>
      <ControlSlider :label="t('feedback')" v-model="feedback" :mini="0" :maxi="99" @update:modelValue="onFeedChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod03FixedDelay',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      delayTimeMs: 0.023,
      feedback: 0,
      delayNode: null,
      feedbackGain: null,
      dryGain: null,
      wetGain: null,
      mixGain: null
    }
  },
  computed: {
    minTimeMs() { return 1000 / this.engine.sampleRate },
    delaySamples() { return (this.delayTimeMs * 0.001 * this.engine.sampleRate).toFixed(2) }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        delayTime: { fr: 'Temps de délai (ms)', en: 'Delay Time (ms)' },
        delaySamples: { fr: 'Délai en échantillons', en: 'Delay in samples' },
        feedback: { fr: 'Réinjection en %', en: 'Feedback %' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // Delay node
      this.delayNode = ctx.createDelay(1.0)
      this.delayNode.delayTime.value = this.delayTimeMs * 0.001

      // Feedback loop
      this.feedbackGain = ctx.createGain()
      this.feedbackGain.gain.value = 0

      // Mix: (dry + wet) * 0.5
      this.mixGain = ctx.createGain()
      this.mixGain.gain.value = 0.5

      // source -> delay -> feedbackGain -> delay (loop)
      source.connect(this.delayNode)
      this.delayNode.connect(this.feedbackGain)
      this.feedbackGain.connect(this.delayNode)

      // source + delay -> mix -> master
      source.connect(this.mixGain)
      this.delayNode.connect(this.mixGain)
      this.mixGain.connect(this.engine.masterGain)
    },
    teardown() {
      const nodes = [this.delayNode, this.feedbackGain, this.mixGain]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    onTimeChange(val) {
      if (!this.audioReady) return
      this.delayNode.delayTime.setTargetAtTime(val * 0.001, this.engine.context.currentTime, 0.05)
    },
    onFeedChange(val) {
      if (!this.audioReady) return
      this.feedbackGain.gain.setTargetAtTime(val * 0.01, this.engine.context.currentTime, 0.05)
    }
  }
}
</script>

<style lang="sass">
.delay-samples
  padding: 2px 0
  font-style: italic
</style>
