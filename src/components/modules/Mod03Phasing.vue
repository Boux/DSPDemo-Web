<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('baseFreq')" v-model="baseFreq" :mini="40" :maxi="1000" :log="true" @update:modelValue="onFreqChange" />
      <ControlSlider :label="t('spread')" v-model="spread" :mini="1.1" :maxi="4" :log="true" @update:modelValue="onSpreadChange" />
      <ControlSlider :label="t('feedback')" v-model="feedback" :mini="0" :maxi="99" @update:modelValue="onFeedChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'
import { FaustMonoDspGenerator } from '@grame/faustwasm'

export default {
  name: 'Mod03Phasing',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      baseFreq: 100,
      spread: 1.3,
      feedback: 50,
      faustNode: null,
      outputGain: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        baseFreq: { fr: 'Fréquence de base en Hz', en: 'Base Frequency (Hz)' },
        spread: { fr: 'Espacement des filtres', en: 'Filter Spread' },
        feedback: { fr: 'Réinjection en %', en: 'Feedback %' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.ctx
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // Load pre-compiled Faust phaser
      const dspMeta = await (await fetch('/dsp/phaser/dsp-meta.json')).json()
      const dspModule = await WebAssembly.compileStreaming(await fetch('/dsp/phaser/dsp-module.wasm'))

      const generator = new FaustMonoDspGenerator()
      this.faustNode = await generator.createNode(ctx, 'phaser', {
        module: dspModule,
        json: JSON.stringify(dspMeta)
      })

      if (!this.faustNode) {
        console.warn('Failed to create Faust phaser node')
        return
      }

      // Set initial parameters
      this.faustNode.setParamValue('/phaser/baseFreq', this.baseFreq)
      this.faustNode.setParamValue('/phaser/spread', this.spread)
      this.faustNode.setParamValue('/phaser/feedback', this.feedback * 0.01)

      // Output gain
      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 1

      source.connect(this.faustNode)
      this.faustNode.connect(this.outputGain)
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      if (this.faustNode) {
        try { this.faustNode.disconnect() } catch (e) { /* */ }
        if (this.faustNode.destroy) this.faustNode.destroy()
        this.faustNode = null
      }
      if (this.outputGain) {
        try { this.outputGain.disconnect() } catch (e) { /* */ }
        this.outputGain = null
      }
      this.releaseSource()
    },
    onFreqChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/phaser/baseFreq', val)
    },
    onSpreadChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/phaser/spread', val)
    },
    onFeedChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/phaser/feedback', val * 0.01)
    }
  }
}
</script>
