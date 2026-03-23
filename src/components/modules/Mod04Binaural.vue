<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('azimuth')" v-model="azimuth" :mini="-180" :maxi="180" @update:modelValue="updatePan" />
      <ControlSlider :label="t('elevation')" v-model="elevation" :mini="0" :maxi="90" @update:modelValue="updatePan" />
      <p class="control-label" style="font-style:italic;margin-top:6px">
        {{ $i18n.locale === 'fr' ? 'Pour un meilleur résultat, utilisez des écouteurs.' : 'For best results, use headphones.' }}
      </p>
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'Mod04Binaural',
  components: { SourcePanel, ControlSlider },
  data() {
    return {
      azimuth: 0,
      elevation: 0,
      pannerNode: null
    }
  },
  computed: {
    engine() { return useAudioEngineStore() }
  },
  mounted() { this.setup() },
  beforeUnmount() { this.teardown() },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        azimuth: { fr: 'Position en azimuth', en: 'Azimuth Position' },
        elevation: { fr: 'Position en élévation', en: 'Elevation Position' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      if (!ctx || !this.engine.sourcePanel) return

      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // Use Web Audio PannerNode with HRTF panning model for binaural 3D
      this.pannerNode = ctx.createPanner()
      this.pannerNode.panningModel = 'HRTF'
      this.pannerNode.distanceModel = 'inverse'
      this.pannerNode.refDistance = 1
      this.pannerNode.maxDistance = 10
      this.pannerNode.rolloffFactor = 1
      this.pannerNode.coneInnerAngle = 360
      this.pannerNode.coneOuterAngle = 360
      this.pannerNode.coneOuterGain = 0

      source.connect(this.pannerNode)
      this.pannerNode.connect(this.engine.masterGain)

      this.updatePan()
    },
    teardown() {
      if (this.pannerNode) try { this.pannerNode.disconnect() } catch (e) { /* */ }
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    updatePan() {
      if (!this.pannerNode) return
      // Convert azimuth/elevation to 3D coordinates
      // Azimuth: -180..180 degrees (0=front, -90=left, 90=right)
      // Elevation: 0..90 degrees (0=ear level, 90=above)
      const azRad = this.azimuth * Math.PI / 180
      const elRad = this.elevation * Math.PI / 180
      const dist = 1
      const x = dist * Math.cos(elRad) * Math.sin(azRad)
      const y = dist * Math.sin(elRad)
      const z = -dist * Math.cos(elRad) * Math.cos(azRad)

      const t = this.engine.context.currentTime
      this.pannerNode.positionX.setTargetAtTime(x, t, 0.02)
      this.pannerNode.positionY.setTargetAtTime(y, t, 0.02)
      this.pannerNode.positionZ.setTargetAtTime(z, t, 0.02)
    }
  }
}
</script>
