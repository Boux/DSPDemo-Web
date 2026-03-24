<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-group">
        <label class="control-label">{{ t('algorithm') }}</label>
        <select v-model.number="panType" @change="onPanTypeChange">
          <option v-for="(a, i) in algorithms" :key="i" :value="i">{{ a[$i18n.locale] }}</option>
        </select>
      </div>
      <ControlSlider :label="t('pan')" v-model="pan" :mini="0" :maxi="1" @update:modelValue="onPanChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod04Panning',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      panType: 0,
      pan: 0.5,
      algorithms: [
        { fr: 'Linéaire', en: 'Linear' },
        { fr: 'Sinus/cosinus', en: 'Sine/Cosine' },
        { fr: 'Racine carrée', en: 'Square Root' }
      ],
      splitter: null,
      merger: null,
      gainL: null,
      gainR: null
    }
  },
  computed: {},
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        algorithm: { fr: 'Algorithme de panoramisation', en: 'Panning Algorithm' },
        pan: { fr: 'Pan gauche - droite', en: 'Pan Left - Right' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // Create stereo panning: mono -> split -> L/R gains -> merge -> master
      this.gainL = ctx.createGain()
      this.gainR = ctx.createGain()
      this.merger = ctx.createChannelMerger(2)

      this.gainL.connect(this.merger, 0, 0)
      this.gainR.connect(this.merger, 0, 1)
      this.merger.connect(this.engine.masterGain)

      source.connect(this.gainL)
      source.connect(this.gainR)

      this.applyPan()
    },
    teardown() {
      const nodes = [this.gainL, this.gainR, this.merger]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    applyPan() {
      if (!this.gainL || !this.gainR) return
      const p = this.pan
      const t = this.engine.context.currentTime
      let l, r

      if (this.panType === 0) {
        // Linear
        l = 1 - p
        r = p
      } else if (this.panType === 1) {
        // Sine/Cosine (equal power)
        l = Math.cos(p * Math.PI / 2)
        r = Math.sin(p * Math.PI / 2)
      } else {
        // Square root
        l = Math.sqrt(1 - p)
        r = Math.sqrt(p)
      }

      this.gainL.gain.setTargetAtTime(l, t, 0.02)
      this.gainR.gain.setTargetAtTime(r, t, 0.02)
    },
    onPanTypeChange() { if (!this.audioReady) return; this.applyPan() },
    onPanChange() { if (!this.audioReady) return; this.applyPan() }
  }
}
</script>
