<template>
  <div class="noise-source">
    <div class="noise-source__buttons">
      <button
        v-for="(n, i) in noiseTypes"
        :key="i"
        class="toggle-btn"
        :class="{ active: noiseType === i }"
        @click="setNoiseType(i)"
      >{{ n[$i18n.locale] }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoiseSource',
  props: {
    audio: { type: Object, default: null }
  },
  data() {
    return {
      noiseType: 0,
      noiseTypes: [
        { fr: 'Bruit blanc', en: 'White Noise' },
        { fr: 'Bruit rose', en: 'Pink Noise' },
        { fr: 'Bruit brun', en: 'Brown Noise' }
      ]
    }
  },
  methods: {
    setNoiseType(type) {
      this.noiseType = type
      if (this.audio) this.audio.setNoiseType(type)
    }
  }
}
</script>

<style lang="sass">
.noise-source
  &__buttons
    display: flex
    gap: var(--sp-1)

    .toggle-btn
      flex: 1
      font-size: var(--font-size-xs)
</style>
