<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('threshold')" v-model="threshold" :mini="-70" :maxi="0" @update:modelValue="updateCompressor" />
      <ControlSlider :label="t('ratio')" v-model="ratio" :mini="1" :maxi="100" :log="true" @update:modelValue="updateCompressor" />
      <ControlSlider :label="t('attack')" v-model="attack" :mini="0.0001" :maxi="0.25" :log="true" @update:modelValue="updateCompressor" />
      <ControlSlider :label="t('release')" v-model="release" :mini="0.0001" :maxi="0.25" :log="true" @update:modelValue="updateCompressor" />
      <ControlSlider :label="t('gain')" v-model="makeupGain" :mini="0" :maxi="24" @update:modelValue="updateGain" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod05Compress',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      threshold: -50,
      ratio: 4,
      attack: 0.01,
      release: 0.05,
      makeupGain: 0,
      compressor: null,
      gainNode: null
    }
  },
  computed: {},
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        threshold: { fr: 'Seuil en dB', en: 'Threshold (dB)' },
        ratio: { fr: 'Ratio de compression', en: 'Compression Ratio' },
        attack: { fr: "Temps d'attaque en seconde", en: 'Attack Time (s)' },
        release: { fr: 'Temps de relâche en seconde', en: 'Release Time (s)' },
        gain: { fr: 'Gain post-compresseur', en: 'Post-compressor Gain' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      this.compressor = ctx.createDynamicsCompressor()
      this.compressor.threshold.value = this.threshold
      this.compressor.ratio.value = this.ratio
      this.compressor.attack.value = this.attack
      this.compressor.release.value = this.release
      this.compressor.knee.value = 0

      this.gainNode = ctx.createGain()
      this.gainNode.gain.value = Math.pow(10, this.makeupGain * 0.05)

      source.connect(this.compressor)
      this.compressor.connect(this.gainNode)
      this.gainNode.connect(this.engine.masterGain)
    },
    teardown() {
      const nodes = [this.compressor, this.gainNode]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    updateCompressor() {
      if (!this.compressor) return
      const t = this.engine.context.currentTime
      this.compressor.threshold.setTargetAtTime(this.threshold, t, 0.05)
      this.compressor.ratio.setTargetAtTime(Math.min(this.ratio, 20), t, 0.05)
      this.compressor.attack.setTargetAtTime(this.attack, t, 0.05)
      this.compressor.release.setTargetAtTime(this.release, t, 0.05)
    },
    updateGain() {
      if (!this.gainNode) return
      this.gainNode.gain.setTargetAtTime(
        Math.pow(10, this.makeupGain * 0.05),
        this.engine.context.currentTime, 0.05
      )
    }
  }
}
</script>
