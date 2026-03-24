<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-group">
        <label class="control-label">{{ t('distoType') }}</label>
        <select v-model.number="distoType" @change="onTypeChange">
          <option v-for="(d, i) in distoTypes" :key="i" :value="i">{{ d[$i18n.locale] }}</option>
        </select>
      </div>
      <ControlSlider label="Drive" v-model="drive" :mini="0" :maxi="1" @update:modelValue="onDriveChange" />
      <label class="control-label">
        <input type="checkbox" v-model="filterEnabled" @change="onFilterToggle" />
        {{ t('enableFilter') }}
      </label>
      <ControlSlider :label="t('cutoff')" v-model="cutoff" :mini="100" :maxi="20000" :log="true" @update:modelValue="onCutoffChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod10Distortion',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      distoType: 0,
      drive: 0.5,
      filterEnabled: false,
      cutoff: 5000,
      distoTypes: [
        { fr: 'Clipping', en: 'Clipping' },
        { fr: "Redresseur d'onde", en: 'Wave Rectifier' },
        { fr: 'Arctangente', en: 'Arctangent' },
        { fr: 'Waveshaper', en: 'Waveshaper' }
      ],
      workletNode: null,
      lowpassFilter: null,
      bypassGain: null,
      filterGain: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        distoType: { fr: 'Choix de la distorsion', en: 'Distortion Type' },
        enableFilter: { fr: 'Activer le filtre passe-bas', en: 'Enable Lowpass Filter' },
        cutoff: { fr: 'Fréquence de coupure du filtre', en: 'Filter Cutoff Frequency' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.engine.context
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      await ctx.audioWorklet.addModule(
        new URL('../../audio/worklets/distortion.js', import.meta.url)
      )
      this.workletNode = new AudioWorkletNode(ctx, 'distortion')
      this.workletNode.port.postMessage({ type: this.distoType, drive: this.drive })

      // Optional lowpass filter
      this.lowpassFilter = ctx.createBiquadFilter()
      this.lowpassFilter.type = 'lowpass'
      this.lowpassFilter.frequency.value = this.cutoff
      this.lowpassFilter.Q.value = 0.707

      // Bypass/filter routing
      this.bypassGain = ctx.createGain()
      this.bypassGain.gain.value = 1
      this.filterGain = ctx.createGain()
      this.filterGain.gain.value = 0

      source.connect(this.workletNode)
      this.workletNode.connect(this.bypassGain)
      this.workletNode.connect(this.lowpassFilter)
      this.lowpassFilter.connect(this.filterGain)
      this.bypassGain.connect(this.engine.masterGain)
      this.filterGain.connect(this.engine.masterGain)
    },
    teardown() {
      const nodes = [this.workletNode, this.lowpassFilter, this.bypassGain, this.filterGain]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    onTypeChange() {
      if (this.workletNode) this.workletNode.port.postMessage({ type: this.distoType })
    },
    onDriveChange(val) {
      if (this.workletNode) this.workletNode.port.postMessage({ drive: val })
    },
    onFilterToggle() {
      if (!this.audioReady) return
      const t = this.engine.context.currentTime
      if (this.filterEnabled) {
        this.bypassGain.gain.setTargetAtTime(0, t, 0.02)
        this.filterGain.gain.setTargetAtTime(1, t, 0.02)
      } else {
        this.bypassGain.gain.setTargetAtTime(1, t, 0.02)
        this.filterGain.gain.setTargetAtTime(0, t, 0.02)
      }
    },
    onCutoffChange(val) {
      if (!this.audioReady) return
      this.lowpassFilter.frequency.setTargetAtTime(val, this.engine.context.currentTime, 0.05)
    }
  }
}
</script>
