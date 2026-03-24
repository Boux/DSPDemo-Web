<template>
  <div class="module-controls">
    <SourcePanel :audio="engine.sourcePanel" />
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <div class="control-group">
        <label class="control-label">{{ t('reverbType') }}</label>
        <select v-model.number="reverbType" @change="onTypeChange">
          <option v-for="(r, i) in reverbTypes" :key="i" :value="i">{{ r[$i18n.locale] }}</option>
        </select>
      </div>
      <ControlSlider :label="t('roomSize')" v-model="roomSize" :mini="0" :maxi="1" :disabled="reverbType === 4" @update:modelValue="onRoomChange" />
      <ControlSlider :label="t('damping')" v-model="damping" :mini="0" :maxi="1" :disabled="reverbType === 4" @update:modelValue="onDampChange" />
      <ControlSlider :label="t('balance')" v-model="balance" :mini="0" :maxi="1" @update:modelValue="onBalanceChange" />
    </div>
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import ControlSlider from '../controls/ControlSlider.vue'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

export default {
  name: 'Mod03Reverb',
  components: { SourcePanel, ControlSlider },
  mixins: [moduleAudioMixin],
  data() {
    return {
      reverbType: 0,
      roomSize: 0.5,
      damping: 0.5,
      balance: 0.25,
      reverbTypes: [
        { fr: 'Schroeder modèle 1', en: 'Schroeder Model 1' },
        { fr: 'Schroeder modèle 2', en: 'Schroeder Model 2' },
        { fr: 'Freeverb', en: 'Freeverb' },
        { fr: 'Réseau de délais récursifs', en: 'Feedback Delay Network' },
        { fr: 'Réverbe par convolution', en: 'Convolution Reverb' }
      ],
      // Audio nodes
      reverbNodes: null,
      dryGain: null,
      wetGain: null,
      reverbOutput: null,
      convolverNode: null,
      irBuffer: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        reverbType: { fr: 'Type de réverbération', en: 'Reverb Type' },
        roomSize: { fr: 'Taille de la pièce', en: 'Room Size' },
        damping: { fr: 'Atténuation hautes fréquences', en: 'High Frequency Damping' },
        balance: { fr: 'Balance original/réverbéré', en: 'Balance dry/reverb' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    async setup() {
      const ctx = this.engine.context
      const source = this.engine.sourcePanel.output
      source.disconnect(this.engine.masterGain)

      // Dry/wet mix
      this.dryGain = ctx.createGain()
      this.dryGain.gain.value = 1 - this.balance
      this.wetGain = ctx.createGain()
      this.wetGain.gain.value = this.balance

      this.reverbOutput = ctx.createGain()
      this.reverbOutput.gain.value = 1

      source.connect(this.dryGain)
      this.dryGain.connect(this.reverbOutput)
      this.wetGain.connect(this.reverbOutput)
      this.reverbOutput.connect(this.engine.masterGain)

      // Load IR for convolution
      this.loadIR()

      // Build initial reverb
      this.buildReverb(source)
    },
    async loadIR() {
      try {
        const response = await fetch(new URL('../../assets/audio/IRMediumHallStereo.wav', import.meta.url))
        const arrayBuffer = await response.arrayBuffer()
        this.irBuffer = await this.engine.context.decodeAudioData(arrayBuffer)
      } catch (e) {
        console.warn('Failed to load IR:', e)
      }
    },
    buildReverb(source) {
      // Disconnect previous reverb nodes
      this.cleanupReverbNodes()
      const ctx = this.engine.context

      if (this.reverbType === 0) {
        this.buildSchroeder1(ctx, source)
      } else if (this.reverbType === 1) {
        this.buildSchroeder2(ctx, source)
      } else if (this.reverbType === 2 || this.reverbType === 3) {
        this.buildFreeverb(ctx, source)
      } else if (this.reverbType === 4) {
        this.buildConvolution(ctx, source)
      }
    },
    buildSchroeder1(ctx, source) {
      // 4 parallel comb filters + 2 series allpass
      const sizeFactor = 0.7 + this.roomSize * 0.6
      const dampFreq = 10000 - this.damping * 9500

      const combDelays = [0.0297, 0.0371, 0.0411, 0.0137]
      const combFeedbacks = [0.65, 0.51, 0.5, 0.73]

      const combMixer = ctx.createGain()
      combMixer.gain.value = 0.25

      // Source also goes to mixer (direct)
      source.connect(combMixer)

      this.reverbNodes = []

      for (let i = 0; i < 4; i++) {
        const delay = ctx.createDelay(1)
        delay.delayTime.value = combDelays[i] * sizeFactor
        const fb = ctx.createGain()
        fb.gain.value = combFeedbacks[i] * sizeFactor
        source.connect(delay)
        delay.connect(fb)
        fb.connect(delay) // feedback loop
        delay.connect(combMixer)
        this.reverbNodes.push(delay, fb)
      }

      // 2 series allpass
      const ap1 = ctx.createBiquadFilter()
      ap1.type = 'allpass'
      ap1.frequency.value = 200 * sizeFactor
      const ap2 = ctx.createBiquadFilter()
      ap2.type = 'allpass'
      ap2.frequency.value = 85 * sizeFactor

      // Tone filter (damping)
      const tone = ctx.createBiquadFilter()
      tone.type = 'lowpass'
      tone.frequency.value = dampFreq

      combMixer.connect(ap1)
      ap1.connect(ap2)
      ap2.connect(tone)
      tone.connect(this.wetGain)

      this.reverbNodes.push(combMixer, ap1, ap2, tone)
    },
    buildSchroeder2(ctx, source) {
      // 4 series allpass + tone filters per output
      const sizeFactor = 0.5 + this.roomSize * 1.0
      const dampFactor = 1.75 - this.damping * 1.5

      const apDelays = [0.0204, 0.0665, 0.035, 0.023]
      const apFeedbacks = [0.35, 0.41, 0.5, 0.65]

      this.reverbNodes = []
      const mixer = ctx.createGain()
      mixer.gain.value = 0.4

      let prev = source
      for (let i = 0; i < 4; i++) {
        const delay = ctx.createDelay(0.2)
        delay.delayTime.value = apDelays[i] * sizeFactor
        const fb = ctx.createGain()
        fb.gain.value = apFeedbacks[i] * sizeFactor
        const ff = ctx.createGain()
        ff.gain.value = -apFeedbacks[i] * sizeFactor

        // Allpass: input -> delay -> output, with feedback and feedforward
        prev.connect(delay)
        delay.connect(fb)
        fb.connect(delay)
        prev.connect(ff)

        const apOut = ctx.createGain()
        delay.connect(apOut)
        ff.connect(apOut)

        // Tone per stage
        const tone = ctx.createBiquadFilter()
        tone.type = 'lowpass'
        tone.frequency.value = dampFactor * [5000, 3000, 1500, 500][i]

        apOut.connect(tone)
        tone.connect(mixer)

        prev = apOut
        this.reverbNodes.push(delay, fb, ff, apOut, tone)
      }

      mixer.connect(this.wetGain)
      this.reverbNodes.push(mixer)
    },
    buildFreeverb(ctx, source) {
      // Simplified Freeverb: 8 parallel combs + 4 series allpass
      const sizeFactor = 0.7 + this.roomSize * 0.6
      const dampFreq = 10000 - this.damping * 9500

      const combTimes = [0.0297, 0.0311, 0.0371, 0.0393, 0.0411, 0.0437, 0.0461, 0.0487]
      const baseFb = 0.84

      const combMixer = ctx.createGain()
      combMixer.gain.value = 0.125

      this.reverbNodes = []

      for (let i = 0; i < 8; i++) {
        const delay = ctx.createDelay(0.1)
        delay.delayTime.value = combTimes[i] * sizeFactor
        const fb = ctx.createGain()
        fb.gain.value = baseFb * sizeFactor
        const lp = ctx.createBiquadFilter()
        lp.type = 'lowpass'
        lp.frequency.value = dampFreq

        source.connect(delay)
        delay.connect(lp)
        lp.connect(fb)
        fb.connect(delay)
        delay.connect(combMixer)
        this.reverbNodes.push(delay, fb, lp)
      }

      // 4 allpass
      const apTimes = [0.0051, 0.0068, 0.0101, 0.0135]
      let prev = combMixer
      for (let i = 0; i < 4; i++) {
        const ap = ctx.createBiquadFilter()
        ap.type = 'allpass'
        ap.frequency.value = 1 / (apTimes[i] * 2 * Math.PI)
        prev.connect(ap)
        prev = ap
        this.reverbNodes.push(ap)
      }

      prev.connect(this.wetGain)
      this.reverbNodes.push(combMixer)
    },
    buildConvolution(ctx, source) {
      this.reverbNodes = []
      this.convolverNode = ctx.createConvolver()
      if (this.irBuffer) {
        this.convolverNode.buffer = this.irBuffer
      }
      source.connect(this.convolverNode)
      this.convolverNode.connect(this.wetGain)
      this.reverbNodes.push(this.convolverNode)
    },
    cleanupReverbNodes() {
      if (this.reverbNodes) {
        this.reverbNodes.forEach(n => { try { n.disconnect() } catch (e) { /* */ } })
      }
      this.reverbNodes = []
    },
    teardown() {
      this.cleanupReverbNodes()
      const nodes = [this.dryGain, this.wetGain, this.reverbOutput]
      nodes.forEach(n => { if (n) try { n.disconnect() } catch (e) { /* */ } })
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect() } catch (e) { /* */ }
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    onTypeChange() {
      if (!this.audioReady) return
      const source = this.engine.sourcePanel.output
      // Need to reconnect source to new reverb chain
      try { source.disconnect() } catch (e) { /* */ }
      source.connect(this.dryGain)
      this.buildReverb(source)
    },
    onRoomChange() {
      if (!this.audioReady) return
      if (this.reverbType === 4) return
      this.onTypeChange() // Rebuild
    },
    onDampChange() {
      if (!this.audioReady) return
      if (this.reverbType === 4) return
      this.onTypeChange() // Rebuild
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
