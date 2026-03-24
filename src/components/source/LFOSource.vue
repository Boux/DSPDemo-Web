<template>
  <div class="lfo-source">
    <select v-model="waveType" @change="onWaveTypeChange" class="lfo-source__select">
      <option v-for="(w, i) in waveTypes" :key="i" :value="i">{{ w[$i18n.locale] }}</option>
    </select>
    <ControlSlider
      :label="$i18n.locale === 'fr' ? 'Fréquence' : 'Frequency'"
      :modelValue="frequency"
      :mini="20"
      :maxi="4000"
      :log="true"
      @update:modelValue="onFreqChange"
    />
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'

export default {
  name: 'LFOSource',
  components: { ControlSlider },
  props: {
    audio: { type: Object, default: null }
  },
  data() {
    return {
      waveType: 0,
      frequency: 172,
      waveTypes: [
        { fr: 'Sinusoïde', en: 'Sine' },
        { fr: 'Rampe', en: 'Ramp' },
        { fr: 'Dent de scie', en: 'Sawtooth' },
        { fr: 'Carrée', en: 'Square' },
        { fr: 'Triangle', en: 'Triangle' },
        { fr: 'Impulsion unipolaire', en: 'Unipolar Pulse' },
        { fr: 'Impulsion bipolaire', en: 'Bipolar Pulse' }
      ]
    }
  },
  watch: {
    audio(val) {
      if (val) this.syncAudio()
    }
  },
  mounted() {
    if (this.audio) this.syncAudio()
  },
  methods: {
    syncAudio() {
      this.audio.setLFOType(this.waveType)
      this.audio.setLFOFrequency(this.frequency)
    },
    onWaveTypeChange() {
      if (this.audio) this.audio.setLFOType(this.waveType)
    },
    onFreqChange(val) {
      this.frequency = val
      if (this.audio) this.audio.setLFOFrequency(val)
    }
  }
}
</script>

<style lang="sass">
.lfo-source
  display: flex
  flex-direction: column
  gap: var(--sp-2)

  &__select
    width: 100%
</style>
