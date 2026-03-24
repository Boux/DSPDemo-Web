<template>
  <div class="bl-source">
    <ControlSlider
      :label="$i18n.locale === 'fr' ? 'Fréquence' : 'Frequency'"
      :modelValue="frequency"
      :mini="20"
      :maxi="4000"
      :log="true"
      @update:modelValue="onFreqChange"
    />
    <div class="bl-source__row">
      <ControlSlider
        :label="$i18n.locale === 'fr' ? 'Forme d\'onde' : 'Waveform'"
        :modelValue="shape"
        :mini="0"
        :maxi="1"
        @update:modelValue="onShapeChange"
      />
      <ControlSlider
        :label="$i18n.locale === 'fr' ? 'Brillance' : 'Brightness'"
        :modelValue="bright"
        :mini="0"
        :maxi="1"
        @update:modelValue="onBrightChange"
      />
    </div>
  </div>
</template>

<script>
import ControlSlider from '../controls/ControlSlider.vue'

export default {
  name: 'BandLimitedSource',
  components: { ControlSlider },
  props: {
    audio: { type: Object, default: null }
  },
  data() {
    return {
      frequency: 172,
      shape: 0.25,
      bright: 0.5
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
      this.audio.setBLFrequency(this.frequency)
      this.audio.setBLParams(this.shape, this.bright)
    },
    onFreqChange(val) {
      this.frequency = val
      if (this.audio) this.audio.setBLFrequency(val)
    },
    onShapeChange(val) {
      this.shape = val
      if (this.audio) this.audio.setBLParams(val, this.bright)
    },
    onBrightChange(val) {
      this.bright = val
      if (this.audio) this.audio.setBLParams(this.shape, val)
    }
  }
}
</script>

<style lang="sass">
.bl-source
  display: flex
  flex-direction: column
  gap: var(--sp-2)

  &__row
    display: flex
    gap: var(--sp-2)

    > *
      flex: 1
</style>
