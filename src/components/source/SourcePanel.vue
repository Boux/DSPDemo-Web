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
          :title="tab.label[$i18n.locale]"
          @click="switchTab(i)"
        >{{ tab.short[$i18n.locale] }}</button>
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
    const sourceNames = ['lfo', 'bandlimited', 'file', 'noise']
    const currentSource = this.audio ? this.audio.activeSource : 'lfo'
    const initialTab = Math.max(0, sourceNames.indexOf(currentSource))
    return {
      activeTab: initialTab,
      tabs: [
        { label: { fr: 'Oscillateur multiforme', en: 'Multi-waveform Oscillator' }, short: { fr: 'Multiforme', en: 'Waveform' }, source: 'lfo' },
        { label: { fr: 'Oscillateur anti-alias', en: 'Anti-alias Oscillator' }, short: { fr: 'Anti-alias', en: 'Anti-alias' }, source: 'bandlimited' },
        { label: { fr: 'Fichier sonore', en: 'Sound File' }, short: { fr: 'Fichier', en: 'File' }, source: 'file' },
        { label: { fr: 'Générateur de bruit', en: 'Noise Generator' }, short: { fr: 'Bruit', en: 'Noise' }, source: 'noise' }
      ]
    }
  },
  watch: {
    audio(val) {
      if (val) val.switchSource(this.tabs[this.activeTab].source)
    }
  },
  mounted() {
    if (this.audio) this.audio.switchSource(this.tabs[this.activeTab].source)
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
    gap: var(--sp-1)
    margin-bottom: var(--sp-2)

    .toggle-btn
      flex: 1
      min-width: 0
      font-size: var(--font-size-xs)
      padding: var(--sp-1)
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis

  &__content
    min-height: 60px
</style>
