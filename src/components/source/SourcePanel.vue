<template>
  <div class="source-panel">
    <div class="section-head">
      {{ $i18n.locale === 'fr' ? 'Source Sonore' : 'Audio Source' }}
    </div>
    <div class="section-body">
      <div class="source-panel__tabs">
        <button
          v-for="(tab, i) in tabs"
          :key="i"
          class="toggle-btn"
          :class="{ active: activeTab === i }"
          @click="switchTab(i)"
        >{{ tab.label[$i18n.locale] }}</button>
      </div>
      <div class="source-panel__content">
        <LFOSource v-if="activeTab === 0" :audio="audio" />
        <BandLimitedSource v-else-if="activeTab === 1" :audio="audio" />
        <SoundFileSource v-else-if="activeTab === 2" :audio="audio" />
        <NoiseSource v-else-if="activeTab === 3" :audio="audio" />
      </div>
    </div>
  </div>
</template>

<script>
import LFOSource from './LFOSource.vue'
import BandLimitedSource from './BandLimitedSource.vue'
import SoundFileSource from './SoundFileSource.vue'
import NoiseSource from './NoiseSource.vue'

export default {
  name: 'SourcePanel',
  components: { LFOSource, BandLimitedSource, SoundFileSource, NoiseSource },
  props: {
    audio: { type: Object, default: null }
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        { label: { fr: 'Oscillateur multiforme', en: 'Multi-waveform Oscillator' }, source: 'lfo' },
        { label: { fr: 'Oscillateur anti-alias', en: 'Anti-alias Oscillator' }, source: 'bandlimited' },
        { label: { fr: 'Fichier sonore', en: 'Sound File' }, source: 'file' },
        { label: { fr: 'Générateur de bruit', en: 'Noise Generator' }, source: 'noise' }
      ]
    }
  },
  methods: {
    switchTab(index) {
      this.activeTab = index
      if (this.audio) {
        this.audio.switchSource(this.tabs[index].source)
      }
    }
  }
}
</script>

<style lang="sass">
.source-panel
  &__tabs
    display: flex
    flex-wrap: wrap
    gap: 4px
    margin-bottom: 8px

    .toggle-btn
      flex: 1
      min-width: 0
      font-size: 10px
      padding: 3px 4px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

  &__content
    min-height: 60px
</style>
