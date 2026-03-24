<template>
  <div class="spectrum-view">
    <div class="section-head spectrum-view__tabs">
      <button
        v-for="tab in tabs"
        :key="tab.mode"
        class="spectrum-view__tab"
        :class="{ active: spectrum.mode === tab.mode }"
        @click="spectrum.mode = tab.mode"
      >{{ tab.label[$i18n.locale] || tab.label.en }}</button>
    </div>
    <div class="section-body viz-body">
      <div class="viz-controls">
        <button
          class="toggle-btn"
          :class="{ active: spectrum.freqLog }"
          @click="spectrum.freqLog = !spectrum.freqLog"
        >{{ $t('visualization.freqLog') }}</button>
        <button
          v-if="spectrum.mode === 'spectrum'"
          class="toggle-btn"
          :class="{ active: spectrum.magLog }"
          @click="spectrum.magLog = !spectrum.magLog"
        >{{ $t('visualization.magLog') }}</button>
        <select v-model.number="spectrum.windowType">
          <option v-for="(w, i) in windowChoices" :key="i" :value="i">{{ w }}</option>
        </select>
        <select v-model.number="spectrum.fftSize">
          <option v-for="(s, i) in fftSizeChoices" :key="i" :value="i">{{ s }}</option>
        </select>
        <LabelKnob
          :label="$t('visualization.amplitude')"
          v-model="spectrum.amplitude"
          :mini="0"
          :maxi="1"
        />
        <template v-if="spectrum.mode === 'waterfall'">
          <label class="control-label">{{ $i18n.locale === 'fr' ? 'Vitesse' : 'Speed' }}</label>
          <input
            type="range"
            class="viz-controls__slider viz-controls__slider--short"
            :min="1"
            :max="8"
            :step="1"
            v-model.number="spectrum.scrollSpeed"
          />
          <span class="viz-controls__value">{{ spectrum.scrollSpeed }}x</span>
        </template>
      </div>
      <div class="viz-canvas-wrap">
        <SpectrumAnalyzer v-if="spectrum.mode === 'spectrum'" />
        <Spectrogram v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { useUiStateStore, WINDOW_CHOICES, FFT_SIZE_CHOICES } from '../../stores/uiState'
import SpectrumAnalyzer from './SpectrumAnalyzer.vue'
import Spectrogram from './Spectrogram.vue'
import LabelKnob from '../controls/LabelKnob.vue'

export default {
  name: 'SpectrumView',
  components: { SpectrumAnalyzer, Spectrogram, LabelKnob },
  data() {
    return {
      windowChoices: WINDOW_CHOICES,
      fftSizeChoices: FFT_SIZE_CHOICES,
      tabs: [
        { mode: 'spectrum', label: { fr: 'Spectrogramme', en: 'Spectrum' } },
        { mode: 'waterfall', label: { fr: 'Cascade', en: 'Waterfall' } }
      ]
    }
  },
  computed: {
    spectrum() {
      return useUiStateStore().spectrum
    }
  }
}
</script>

<style lang="sass">
.spectrum-view
  display: flex
  flex-direction: column
  flex: 1
  min-height: 0

  &__tabs
    display: flex
    gap: 0
    padding: 0 !important

  &__tab
    flex: 1
    background: none
    border: none
    color: var(--color-text-dim)
    font-size: var(--font-size-xs)
    padding: var(--sp-1) var(--sp-2)
    cursor: pointer
    border-bottom: 2px solid transparent
    transition: color 0.15s, border-color 0.15s

    &.active
      color: var(--color-text)
      border-bottom-color: var(--color-accent, #4ade80)

    &:hover:not(.active)
      color: var(--color-text)
</style>
