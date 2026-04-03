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
import { FaustMonoDspGenerator } from '@grame/faustwasm'
import fixeddelayWasmUrl from '../../audio/faust/compiled/fixeddelay.wasm?url'
import fixeddelayMetaUrl from '../../audio/faust/compiled/fixeddelay-meta.json?url'

export default {
  name: 'Mod03FixedDelay',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      delayTimeMs: 5,
      feedback: 0,
      faustNode: null,
      outputGain: null
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
    async setup() {
      const ctx = this.ctx
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // Load pre-compiled Faust fixed delay
      const dspMeta = await (await fetch(fixeddelayMetaUrl)).json()
      const dspModule = await WebAssembly.compileStreaming(await fetch(fixeddelayWasmUrl))

      const generator = new FaustMonoDspGenerator()
      this.faustNode = await generator.createNode(ctx, 'fixeddelay', {
        module: dspModule,
        json: JSON.stringify(dspMeta)
      })

      if (!this.faustNode) {
        console.warn('Failed to create Faust fixeddelay node')
        return
      }

      // Set initial parameters
      this.faustNode.setParamValue('/fixeddelay/delayMs', this.delayTimeMs)
      this.faustNode.setParamValue('/fixeddelay/feedback', this.feedback * 0.01)

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
    onTimeChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/fixeddelay/delayMs', val)
    },
    onFeedChange(val) {
      if (!this.audioReady || !this.faustNode) return
      this.faustNode.setParamValue('/fixeddelay/feedback', val * 0.01)
    }
  }
}
</script>

<style lang="sass">
.delay-samples
  padding: 2px 0
  font-style: italic
</style>
