<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('lpFreq')" v-model="lpFreq" :mini="0.1" :maxi="100" :log="true" @update:modelValue="onFreqChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'Mod05EnvFollower',
  components: { SourcePanel, ControlSlider },
  data() {
    return {
      lpFreq: 10,
      analyser: null,
      noiseNode: null,
      noiseGain: null,
      mixGain: null,
      animFrameId: null
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
        lpFreq: { fr: 'Fréq. du filtre passe-bas en Hz', en: 'Lowpass Filter Freq (Hz)' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.engine.context
      if (!ctx || !this.engine.sourcePanel) return

      const source = this.engine.sourcePanel.output

      // Create pink noise via the existing worklet
      // Reuse noise worklet already registered from source panel init
      try {
        this.noiseNode = new AudioWorkletNode(ctx, 'noise-generator')
        this.noiseNode.port.postMessage({ type: 1 }) // pink noise
      } catch (e) {
        // Worklet may not be registered yet, try loading
        await ctx.audioWorklet.addModule(
          new URL('../../audio/worklets/noise-generator.js', import.meta.url)
        )
        this.noiseNode = new AudioWorkletNode(ctx, 'noise-generator')
        this.noiseNode.port.postMessage({ type: 1 })
      }

      // Envelope follower: use analyser to get RMS, modulate noise gain
      this.analyser = ctx.createAnalyser()
      this.analyser.fftSize = 2048
      this.analyser.smoothingTimeConstant = 0.9
      source.connect(this.analyser)

      // Noise gain controlled by envelope
      this.noiseGain = ctx.createGain()
      this.noiseGain.gain.value = 0
      this.noiseNode.connect(this.noiseGain)

      // Mix source + modulated noise
      this.mixGain = ctx.createGain()
      this.mixGain.gain.value = 0.5
      source.connect(this.mixGain)
      this.noiseGain.connect(this.mixGain)
      this.mixGain.connect(this.engine.masterGain)

      // Source still goes to master for passthrough; disconnect direct and go through mix
      source.disconnect(this.engine.masterGain)

      this.startFollower()
    },
    teardown() {
      if (this.animFrameId) cancelAnimationFrame(this.animFrameId)
      const nodes = [this.analyser, this.noiseNode, this.noiseGain, this.mixGain]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    startFollower() {
      const data = new Float32Array(this.analyser.fftSize)
      const update = () => {
        if (this.analyser && this.engine.isRunning) {
          this.analyser.getFloatTimeDomainData(data)
          let sumSq = 0
          for (let i = 0; i < data.length; i++) sumSq += data[i] * data[i]
          const rms = Math.sqrt(sumSq / data.length)
          // Smoothed gain update
          this.noiseGain.gain.setTargetAtTime(rms, this.engine.context.currentTime, 1 / (2 * Math.PI * this.lpFreq))
        }
        this.animFrameId = requestAnimationFrame(update)
      }
      update()
    },
    onFreqChange() {
      // Frequency affects smoothing time constant
    }
  }
}
</script>
