<template>
  <div class="dock-panel">
    <div class="dock-panel__controls">
      <button class="toggle-btn" :class="{ active: spectrum.freqLog }" @click="spectrum.freqLog = !spectrum.freqLog">{{ $t('visualization.freqLog') }}</button>
      <button class="toggle-btn" :class="{ active: spectrum.magLog }" @click="spectrum.magLog = !spectrum.magLog">{{ $t('visualization.magLog') }}</button>
      <select v-model.number="spectrum.windowType">
        <option v-for="(w, i) in windowChoices" :key="i" :value="i">{{ w }}</option>
      </select>
      <select v-model.number="spectrum.fftSize">
        <option v-for="(s, i) in fftSizeChoices" :key="i" :value="i">{{ s }}</option>
      </select>
      <LabelKnob :label="$t('visualization.amplitude')" v-model="spectrum.amplitude" :mini="0" :maxi="1" />
    </div>
    <div class="dock-panel__canvas">
      <SpectrumAnalyzer />
    </div>
  </div>
</template>

<script>
import { useUiStateStore, WINDOW_CHOICES, FFT_SIZE_CHOICES } from '../../stores/uiState'
import SpectrumAnalyzer from '../visualization/SpectrumAnalyzer.vue'
import LabelKnob from '../controls/LabelKnob.vue'

export default {
  name: 'SpectrumPanel',
  components: { SpectrumAnalyzer, LabelKnob },
  data() {
    return { windowChoices: WINDOW_CHOICES, fftSizeChoices: FFT_SIZE_CHOICES }
  },
  computed: {
    spectrum() { return useUiStateStore().spectrum }
  }
}
</script>
