<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('threshold')" v-model="threshold" :mini="-70" :maxi="0" @update:modelValue="updateParams" />
      <ControlSlider :label="t('attack')" v-model="attack" :mini="0.0001" :maxi="0.25" :log="true" @update:modelValue="updateParams" />
      <ControlSlider :label="t('release')" v-model="release" :mini="0.0001" :maxi="0.25" :log="true" @update:modelValue="updateParams" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod05Gate',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      threshold: -50,
      attack: 0.01,
      release: 0.05,
      analyser: null,
      gateGain: null,
      animFrameId: null,
      gateOpen: false
    }
  },
  computed: {},
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        threshold: { fr: 'Seuil en dB', en: 'Threshold (dB)' },
        attack: { fr: "Temps d'attaque en seconde", en: 'Attack Time (s)' },
        release: { fr: 'Temps de relâche en seconde', en: 'Release Time (s)' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      this.analyser = ctx.createAnalyser()
      this.analyser.fftSize = 512
      this.analyser.smoothingTimeConstant = 0.8

      this.gateGain = ctx.createGain()
      this.gateGain.gain.value = 0

      source.connect(this.analyser)
      source.connect(this.gateGain)
      this.gateGain.connect(this.engine.masterGain)

      this.startGate()
    },
    teardown() {
      if (this.animFrameId) cancelAnimationFrame(this.animFrameId)
      const nodes = [this.analyser, this.gateGain]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    startGate() {
      const data = new Float32Array(512)
      const update = () => {
        if (this.analyser && this.engine.isRunning) {
          this.analyser.getFloatTimeDomainData(data)
          let peak = 0
          for (let i = 0; i < data.length; i++) {
            const abs = Math.abs(data[i])
            if (abs > peak) peak = abs
          }
          const peakDb = peak > 0 ? 20 * Math.log10(peak) : -Infinity
          const t = this.engine.context.currentTime

          if (peakDb >= this.threshold && !this.gateOpen) {
            this.gateOpen = true
            this.gateGain.gain.setTargetAtTime(1, t, this.attack / 3)
          } else if (peakDb < this.threshold && this.gateOpen) {
            this.gateOpen = false
            this.gateGain.gain.setTargetAtTime(0, t, this.release / 3)
          }
        }
        this.animFrameId = requestAnimationFrame(update)
      }
      update()
    },
    updateParams() {
      if (!this.audioReady) return
      // Parameters are read directly in the gate loop
    }
  }
}
</script>
