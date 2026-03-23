<template>
  <main class="right-panel">
    <div class="viz-section">
      <div class="section-head">{{ $t('visualization.spectrogram') }}</div>
      <div class="section-body viz-body">
        <div class="viz-controls">
          <button
            class="toggle-btn"
            :class="{ active: spectrum.freqLog }"
            @click="spectrum.freqLog = !spectrum.freqLog"
          >{{ $t('visualization.freqLog') }}</button>
          <button
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
        </div>
        <div class="viz-canvas-wrap">
          <SpectrumAnalyzer />
        </div>
      </div>
    </div>

    <div class="viz-section">
      <div class="section-head">{{ $t('visualization.oscilloscope') }}</div>
      <div class="section-body viz-body">
        <div class="viz-controls">
          <label class="control-label">{{ $t('visualization.windowSize') }}</label>
          <input
            type="range"
            class="viz-controls__slider"
            :min="0"
            :max="1"
            :step="0.001"
            :value="scopeSliderValue"
            @input="onScopeWindowChange"
          />
          <span class="viz-controls__value">{{ scope.windowLength }} ms</span>
          <LabelKnob
            :label="$t('visualization.amplitude')"
            v-model="scope.amplitude"
            :mini="0"
            :maxi="1"
          />
        </div>
        <div class="viz-canvas-wrap">
          <Oscilloscope />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useUiStateStore, WINDOW_CHOICES, FFT_SIZE_CHOICES } from '../../stores/uiState'
import SpectrumAnalyzer from '../visualization/SpectrumAnalyzer.vue'
import Oscilloscope from '../visualization/Oscilloscope.vue'
import LabelKnob from '../controls/LabelKnob.vue'
import ControlSlider from '../controls/ControlSlider.vue'

export default {
  name: 'RightPanel',
  components: {
    SpectrumAnalyzer,
    Oscilloscope,
    LabelKnob,
    ControlSlider
  },
  data() {
    return {
      windowChoices: WINDOW_CHOICES,
      fftSizeChoices: FFT_SIZE_CHOICES,
      _saveTimer: null
    }
  },
  watch: {
    spectrum: {
      deep: true,
      handler() { this.debouncedSave() }
    },
    scope: {
      deep: true,
      handler() { this.debouncedSave() }
    }
  },
  computed: {
    spectrum() {
      return useUiStateStore().spectrum
    },
    scope() {
      return useUiStateStore().scope
    },
    scopeSliderValue() {
      // Log mapping: 10..1000 -> 0..1
      return Math.log10(this.scope.windowLength / 10) / Math.log10(100)
    }
  },
  methods: {
    debouncedSave() {
      clearTimeout(this._saveTimer)
      this._saveTimer = setTimeout(() => useUiStateStore().saveState(), 500)
    },
    onScopeWindowChange(e) {
      // Log mapping: 0..1 -> 10..1000
      const t = parseFloat(e.target.value)
      this.scope.windowLength = Math.round(10 * Math.pow(100, t))
    }
  }
}
</script>

<style lang="sass">
.viz-section
  flex: 1
  display: flex
  flex-direction: column
  min-height: 0

.viz-body
  flex: 1
  display: flex
  flex-direction: column
  min-height: 0

.viz-controls
  display: flex
  align-items: center
  gap: var(--sp-2)
  padding: var(--sp-1) 0
  flex-shrink: 0

  &__slider
    width: 140px
    flex-shrink: 0

  &__value
    font-size: var(--font-size-xs)
    font-family: var(--font-mono)
    color: var(--color-text-dim)
    min-width: 42px

.viz-canvas-wrap
  flex: 1
  min-height: 80px
  position: relative
  border-radius: var(--control-radius)
  overflow: hidden
</style>
