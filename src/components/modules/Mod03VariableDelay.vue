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
import { FaustMonoDspGenerator } from '@grame/faustwasm'
import vardelayWasmUrl from '../../audio/faust/compiled/vardelay.wasm?url'
import vardelayMetaUrl from '../../audio/faust/compiled/vardelay-meta.json?url'

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
      faustNode: null,
      outputGain: null
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
    async setup() {
      const ctx = this.ctx
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // Load pre-compiled Faust variable delay
      const dspMeta = await (await fetch(vardelayMetaUrl)).json()
      const dspModule = await WebAssembly.compileStreaming(await fetch(vardelayWasmUrl))

      const generator = new FaustMonoDspGenerator()
      this.faustNode = await generator.createNode(ctx, 'vardelay', {
        module: dspModule,
        json: JSON.stringify(dspMeta)
      })

      if (!this.faustNode) {
        console.warn('Failed to create Faust vardelay node')
        return
      }

      // Set initial parameters
      this.faustNode.setParamValue('/vardelay/lfoFreq', this.lfoFreq)
      this.faustNode.setParamValue('/vardelay/meanDelay', this.meanDelay)
      this.faustNode.setParamValue('/vardelay/depth', this.depth * 0.01)
      this.faustNode.setParamValue('/vardelay/feedback', this.feedback * 0.01)

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
    onLfoFreqChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/vardelay/lfoFreq', val)
    },
    onMeanDelayChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/vardelay/meanDelay', val)
    },
    onDepthChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/vardelay/depth', val * 0.01)
    },
    onFeedChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/vardelay/feedback', val * 0.01)
    }
  }
}
</script>
