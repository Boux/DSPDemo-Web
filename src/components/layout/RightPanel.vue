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
          <ControlSlider
            :label="$t('visualization.windowSize')"
            v-model="scope.windowLength"
            :mini="10"
            :maxi="1000"
            :log="true"
            :integer="true"
          />
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
      fftSizeChoices: FFT_SIZE_CHOICES
    }
  },
  computed: {
    spectrum() {
      return useUiStateStore().spectrum
    },
    scope() {
      return useUiStateStore().scope
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
  flex-wrap: wrap

.viz-canvas-wrap
  flex: 1
  min-height: 80px
  position: relative
  border-radius: var(--control-radius)
  overflow: hidden
</style>
