<template>
  <div class="module-controls">
    <div class="section-head">{{ t('moduleInterface') }}</div>
    <div class="section-body">
      <ControlSlider :label="t('partials')" v-model="partials" :mini="1" :maxi="60" :integer="true" @update:modelValue="onPartialsChange" />
      <div class="synth-row">
        <span class="control-label">Env.</span>
        <LabelKnob label="att" v-model="attack" :mini="1" :maxi="2000" :log="true" @update:modelValue="rebuildOnPlay" />
        <LabelKnob label="dec" v-model="decay" :mini="1" :maxi="2000" :log="true" @update:modelValue="rebuildOnPlay" />
        <LabelKnob label="sus" v-model="sustain" :mini="0" :maxi="1" @update:modelValue="rebuildOnPlay" />
        <LabelKnob label="rel" v-model="release" :mini="1" :maxi="2000" :log="true" @update:modelValue="rebuildOnPlay" />
      </div>
      <div class="synth-row-2">
        <ControlSlider :label="t('ampDamp')" v-model="ampDamp" :mini="0.5" :maxi="1" @update:modelValue="rebuildOnPlay" />
        <ControlSlider :label="t('timeDamp')" v-model="timeDamp" :mini="0.5" :maxi="1" @update:modelValue="rebuildOnPlay" />
      </div>
      <div class="synth-row-2">
        <ControlSlider :label="t('fundamental')" v-model="freq" :mini="40" :maxi="4000" :log="true" @update:modelValue="rebuildOnPlay" />
        <ControlSlider label="Expansion" v-model="spread" :mini="0.001" :maxi="2" :log="true" @update:modelValue="rebuildOnPlay" />
      </div>
      <div class="control-group">
        <label class="control-label">{{ t('waveform') }}</label>
        <select v-model.number="waveIdx" @change="rebuildOnPlay">
          <option v-for="(w, i) in waveforms" :key="i" :value="i">{{ w[$i18n.locale] }}</option>
        </select>
      </div>
      <button class="toggle-btn" :class="{ active: isPlaying }" @click="togglePlay" style="width:100%">
        {{ t('play') }}
      </button>
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'
import LabelKnob from '../controls/LabelKnob.vue'
import { WAVEFORM_LABELS_ALT } from '../../utils/waveformLabels'
import { moduleAudioMixin } from '../../mixins/moduleAudio'

function buildWaveTable(ctx, index) {
  if (index === 0) return null
  let harmonics, type
  if (index <= 4) { type = 'saw'; harmonics = [5, 15, 30, 60][index - 1] }
  else if (index <= 8) { type = 'square'; harmonics = [5, 15, 30, 60][index - 5] }
  else { type = 'triangle'; harmonics = [3, 6, 12, 24][index - 9] }
  const real = new Float32Array(harmonics + 1)
  const imag = new Float32Array(harmonics + 1)
  for (let n = 1; n <= harmonics; n++) {
    if (type === 'saw') imag[n] = 1.0 / n
    else if (type === 'square') imag[n] = (n % 2 === 1) ? 1.0 / n : 0
    else if (n % 2 === 1) imag[n] = (((n - 1) / 2) % 2 === 0 ? 1 : -1) / (n * n)
  }
  return ctx.createPeriodicWave(real, imag, { disableNormalization: false })
}

export default {
  name: 'Mod08AddSynthVar',
  components: { ControlSlider, LabelKnob },
  mixins: [moduleAudioMixin],
  data() {
    return {
      partials: 30, attack: 10, decay: 100, sustain: 0.7, release: 500,
      ampDamp: 0.9, timeDamp: 0.9, freq: 172, spread: 1,
      waveIdx: 0, waveforms: WAVEFORM_LABELS_ALT, isPlaying: false,
      oscillators: [], gains: [], outputGain: null
    }
  },
  methods: {
    t(key) {
      const texts = {
        moduleInterface: { fr: 'Interface du Module', en: 'Module Interface' },
        partials: { fr: 'Nombre de partiels', en: 'Number of Partials' },
        ampDamp: { fr: 'Réduction amp', en: 'Amp Damping' },
        timeDamp: { fr: 'Réduction dur', en: 'Time Damping' },
        fundamental: { fr: 'Fondamentale', en: 'Fundamental' },
        waveform: { fr: "Forme d'onde", en: 'Waveform' },
        play: { fr: 'Jouer', en: 'Play' }
      }
      return (texts[key] || {})[this.$i18n.locale] || key
    },
    setup() {
      const ctx = this.engine.context
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.disconnect(this.engine.masterGain) } catch (e) { /* */ }
      }
      this.outputGain = ctx.createGain()
      this.outputGain.gain.value = 0.25
      this.outputGain.connect(this.engine.masterGain)
    },
    teardown() {
      this.stopSound()
      if (this.outputGain) try { this.outputGain.disconnect() } catch (e) { /* */ }
      if (this.engine.sourcePanel) {
        try { this.engine.sourcePanel.output.connect(this.engine.masterGain) } catch (e) { /* */ }
      }
    },
    togglePlay() {
      if (this.isPlaying) this.stopSound()
      else this.playSound()
    },
    stopSound() {
      this.oscillators.forEach(o => { try { o.stop() } catch (e) { /* */ }; try { o.disconnect() } catch (e) { /* */ } })
      this.gains.forEach(g => { try { g.disconnect() } catch (e) { /* */ } })
      this.oscillators = []
      this.gains = []
      this.isPlaying = false
    },
    playSound() {
      this.stopSound()
      const ctx = this.engine.context
      const now = ctx.currentTime
      const numPartials = Math.round(this.partials)
      const wave = buildWaveTable(ctx, this.waveIdx)

      let amp = 1.0
      let att = this.attack * 0.001
      let dec = this.decay * 0.001
      let sus = this.sustain
      let rel = this.release * 0.001

      const normGain = 0.25 * Math.sqrt(1 / numPartials) / this.ampDamp

      for (let i = 0; i < numPartials; i++) {
        const partialFreq = this.freq * Math.pow(i + 1, this.spread)
        if (partialFreq > ctx.sampleRate / 2) break

        const osc = ctx.createOscillator()
        osc.frequency.value = partialFreq
        if (wave) osc.setPeriodicWave(wave)
        else osc.type = 'sine'

        const gain = ctx.createGain()
        // ADSR envelope per partial
        gain.gain.setValueAtTime(0, now)
        gain.gain.linearRampToValueAtTime(amp * normGain, now + att)
        gain.gain.linearRampToValueAtTime(sus * amp * normGain, now + att + dec)

        osc.connect(gain)
        gain.connect(this.outputGain)
        osc.start(now)

        this.oscillators.push(osc)
        this.gains.push(gain)

        amp *= this.ampDamp
        sus *= this.ampDamp
        att *= this.timeDamp
        dec *= this.timeDamp
        rel *= this.timeDamp
      }
      this.isPlaying = true
    },
    rebuildOnPlay() {
      if (!this.audioReady) return
      if (this.isPlaying) this.playSound()
    },
    onPartialsChange() {
      if (!this.audioReady) return
      if (this.isPlaying) this.playSound()
    }
  }
}
</script>

<style lang="sass">
.synth-row
  display: flex
  align-items: center
  gap: 2px
  margin: var(--sp-1) 0

.synth-row-2
  display: flex
  gap: var(--sp-2)
  margin: var(--sp-1) 0

  > *
    flex: 1
</style>
