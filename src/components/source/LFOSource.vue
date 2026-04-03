<template>
  <div class="lfo-source">
    <div class="lfo-source__waves">
      <button
        v-for="(w, i) in waveTypes"
        :key="i"
        class="lfo-source__wave"
        :class="{ active: waveType === i }"
        :title="w.label[$i18n.locale]"
        @click="selectWave(i)"
        v-html="w.icon"
      ></button>
    </div>
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

// 20x12 waveform icons
const waveIcons = {
  sine: '<svg width="20" height="12" viewBox="0 0 20 12"><path d="M1 6 Q5 0, 10 6 Q15 12, 19 6" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round"/></svg>',
  ramp: '<svg width="20" height="12" viewBox="0 0 20 12"><path d="M2 10 L10 2 L10 10 L18 2 L18 10" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  saw: '<svg width="20" height="12" viewBox="0 0 20 12"><path d="M2 10 L2 2 L10 10 L10 2 L18 10" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  square: '<svg width="20" height="12" viewBox="0 0 20 12"><path d="M1 10 L1 2 L6 2 L6 10 L11 10 L11 2 L16 2 L16 10 L19 10" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  triangle: '<svg width="20" height="12" viewBox="0 0 20 12"><path d="M1 6 L5 2 L10 10 L15 2 L19 6" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  uniPulse: '<svg width="20" height="12" viewBox="0 0 20 12"><path d="M1 10 L4 10 L4 2 L6 2 L6 10 L14 10 L14 2 L16 2 L16 10 L19 10" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  biPulse: '<svg width="20" height="12" viewBox="0 0 20 12"><path d="M1 6 L3 6 L3 2 L5 2 L5 6 L7 6 L7 10 L9 10 L9 6 L13 6 L13 2 L15 2 L15 6 L17 6 L17 10 L19 10 L19 6" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'
}

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
        { label: { fr: 'Sinusoïde', en: 'Sine' }, icon: waveIcons.sine },
        { label: { fr: 'Rampe', en: 'Ramp' }, icon: waveIcons.ramp },
        { label: { fr: 'Dent de scie', en: 'Sawtooth' }, icon: waveIcons.saw },
        { label: { fr: 'Carrée', en: 'Square' }, icon: waveIcons.square },
        { label: { fr: 'Triangle', en: 'Triangle' }, icon: waveIcons.triangle },
        { label: { fr: 'Impulsion unipolaire', en: 'Unipolar Pulse' }, icon: waveIcons.uniPulse },
        { label: { fr: 'Impulsion bipolaire', en: 'Bipolar Pulse' }, icon: waveIcons.biPulse }
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
    selectWave(i) {
      this.waveType = i
      if (this.audio) this.audio.setLFOType(i)
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

  &__waves
    display: flex
    gap: 1px
    background: var(--color-border)
    border-radius: var(--control-radius)
    overflow: hidden

  &__wave
    flex: 1
    display: flex
    align-items: center
    justify-content: center
    padding: 5px 0
    border: none
    border-radius: 0
    background: var(--color-surface)
    color: var(--color-text-dim)
    cursor: pointer
    transition: all 0.12s ease

    &:hover
      color: var(--color-text)
      background: var(--color-surface-raised)

    &.active
      background: var(--color-accent)
      color: #fff

    svg
      display: block
</style>
