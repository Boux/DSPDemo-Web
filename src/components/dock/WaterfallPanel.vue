<template>
  <div class="dock-panel">
    <div class="dock-panel__controls">
      <button class="toggle-btn" :class="{ active: waterfall.freqLog }" @click="waterfall.freqLog = !waterfall.freqLog">{{ $t('visualization.freqLog') }}</button>
      <select v-model.number="waterfall.windowType">
        <option v-for="(w, i) in windowChoices" :key="i" :value="i">{{ w }}</option>
      </select>
      <select v-model.number="waterfall.fftSize">
        <option v-for="(s, i) in fftSizeChoices" :key="i" :value="i">{{ s }}</option>
      </select>
      <LabelKnob :label="$t('visualization.amplitude')" v-model="waterfall.amplitude" :mini="0" :maxi="1" />
      <label class="control-label">{{ $i18n.locale === 'fr' ? 'Vitesse' : 'Speed' }}</label>
      <input type="range" class="viz-controls__slider viz-controls__slider--short" :min="1" :max="8" :step="1" v-model.number="waterfall.scrollSpeed" />
      <span class="viz-controls__value">{{ waterfall.scrollSpeed }}x</span>
    </div>
    <div class="dock-panel__canvas">
      <Spectrogram />
    </div>
  </div>
</template>

<script>
import { useUiStateStore, WINDOW_CHOICES, FFT_SIZE_CHOICES } from '../../stores/uiState'
import Spectrogram from '../visualization/Spectrogram.vue'
import LabelKnob from '../controls/LabelKnob.vue'

export default {
  name: 'WaterfallPanel',
  components: { Spectrogram, LabelKnob },
  data() {
    return { windowChoices: WINDOW_CHOICES, fftSizeChoices: FFT_SIZE_CHOICES }
  },
  computed: {
    waterfall() { return useUiStateStore().waterfall }
  }
}
</script>
