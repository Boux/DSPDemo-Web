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
          class="source-panel__tab"
          :class="{ active: activeTab === i }"
          :title="tab.label[$i18n.locale]"
          @click="switchTab(i)"
          v-html="tab.icon"
        ></button>
      </div>
      <div class="source-panel__content">
        <LFOSource v-if="activeTab === 0" :audio="audio" />
        <BandLimitedSource v-else-if="activeTab === 1" :audio="audio" />
        <SoundFileSource v-else-if="activeTab === 2" :audio="audio" />
        <NoiseSource v-else-if="activeTab === 3" :audio="audio" />
        <AudioInputSource v-else-if="activeTab === 4" :audio="audio" />
      </div>
    </div>
  </div>
</template>

<script>
import LFOSource from './LFOSource.vue'
import BandLimitedSource from './BandLimitedSource.vue'
import SoundFileSource from './SoundFileSource.vue'
import NoiseSource from './NoiseSource.vue'
import AudioInputSource from './AudioInputSource.vue'

// SVG icons — 16x16, stroke-based, clean
const icons = {
  // Sine wave
  waveform: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8 Q4 2, 8 8 Q12 14, 15 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>',
  // Staircase/band-limited
  antialias: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 12 L4 12 L4 9 L7 9 L7 6 L10 6 L10 4 L13 4 L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
  // File/document
  file: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2 L10 2 L13 5 L13 14 L4 14 Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" fill="none"/><path d="M10 2 L10 5 L13 5" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" fill="none"/></svg>',
  // Random noise zigzag
  noise: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 8 L3 4 L5 11 L7 3 L9 13 L11 5 L13 10 L15 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
  // Microphone
  mic: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="6" y="2" width="4" height="7" rx="2" stroke="currentColor" stroke-width="1.3" fill="none"/><path d="M4 8 Q4 13, 8 13 Q12 13, 12 8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" fill="none"/><line x1="8" y1="13" x2="8" y2="15" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>'
}

export default {
  name: 'SourcePanel',
  components: { LFOSource, BandLimitedSource, SoundFileSource, NoiseSource, AudioInputSource },
  props: {
    audio: { type: Object, default: null }
  },
  data() {
    const sourceNames = ['lfo', 'bandlimited', 'file', 'noise', 'input']
    const currentSource = this.audio ? this.audio.activeSource : 'lfo'
    const initialTab = Math.max(0, sourceNames.indexOf(currentSource))
    return {
      activeTab: initialTab,
      tabs: [
        { label: { fr: 'Oscillateur multiforme', en: 'Multi-waveform Oscillator' }, icon: icons.waveform, source: 'lfo' },
        { label: { fr: 'Oscillateur anti-alias', en: 'Anti-alias Oscillator' }, icon: icons.antialias, source: 'bandlimited' },
        { label: { fr: 'Fichier sonore', en: 'Sound File' }, icon: icons.file, source: 'file' },
        { label: { fr: 'Générateur de bruit', en: 'Noise Generator' }, icon: icons.noise, source: 'noise' },
        { label: { fr: 'Entrée audio', en: 'Audio Input' }, icon: icons.mic, source: 'input' }
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
    gap: 1px
    margin-bottom: var(--sp-2)
    background: var(--color-border)
    border-radius: var(--control-radius)
    overflow: hidden

  &__tab
    flex: 1
    display: flex
    align-items: center
    justify-content: center
    padding: 6px 0
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

  &__content
    min-height: 40px
</style>
