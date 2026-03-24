<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('transpo')" v-model="transpo" :mini="-24" :maxi="12" @update:modelValue="onTranspoChange" />
      <ControlSlider :label="t('feedback')" v-model="feedback" :mini="0" :maxi="99" @update:modelValue="onFeedChange" />
      <ControlSlider :label="t('balance')" v-model="balance" :mini="0" :maxi="1" @update:modelValue="onBalanceChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod03Transpose',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      transpo: -7,
      feedback: 0,
      balance: 0.5,
      workletNode: null,
      dryGain: null,
      wetGain: null,
      outputGain: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        transpo: { fr: 'Transposition en demi-tons', en: 'Transposition (semitones)' },
        feedback: { fr: 'Réinjection en %', en: 'Feedback %' },
        balance: { fr: 'Balance original/transposé', en: 'Balance dry/wet' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.engine.context
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      await ctx.audioWorklet.addModule(
        new URL('../../audio/worklets/harmonizer.js', import.meta.url)
      )
      this.workletNode = new AudioWorkletNode(ctx, 'harmonizer')
      this.workletNode.port.postMessage({
        transpo: this.transpo,
        feedback: this.feedback * 0.01
      })

      // Dry/wet crossfade
      this.dryGain = ctx.createGain()
      this.dryGain.gain.value = 1 - this.balance
      this.wetGain = ctx.createGain()
      this.wetGain.gain.value = this.balance
      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 1

      source.connect(this.workletNode)
      source.connect(this.dryGain)
      this.workletNode.connect(this.wetGain)
      this.dryGain.connect(this.outputGain)
      this.wetGain.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      const nodes = [this.workletNode, this.dryGain, this.wetGain, this.outputGain]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    onTranspoChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ transpo: val })
    },
    onFeedChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ feedback: val * 0.01 })
    },
    onBalanceChange(val) {
      if (!this.audioReady) return
      const t = this.engine.context.currentTime
      this.dryGain.gain.setTargetAtTime(1 - val, t, 0.02)
      this.wetGain.gain.setTargetAtTime(val, t, 0.02)
    }
  }
}
</script>
