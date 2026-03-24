<template>
  <div class="dock-panel">
    <div class="dock-panel__controls">
      <label class="control-label">{{ $t('visualization.windowSize') }}</label>
      <input type="range" class="viz-controls__slider" :min="0" :max="1" :step="0.001" :value="sliderValue" @input="onWindowChange" />
      <span class="viz-controls__value">{{ scope.windowLength }} ms</span>
      <LabelKnob :label="$t('visualization.amplitude')" v-model="scope.amplitude" :mini="0" :maxi="1" />
      <label class="viz-controls__checkbox"><input type="checkbox" v-model="scope.autoNormalize" />{{ $t('visualization.autoNormalize') }}</label>
      <label class="viz-controls__checkbox"><input type="checkbox" v-model="scope.forceSync" />{{ $t('visualization.forceSync') }}</label>
    </div>
    <div class="dock-panel__canvas">
      <Oscilloscope />
    </div>
  </div>
</template>

<script>
import { useUiStateStore } from '../../stores/uiState'
import Oscilloscope from '../visualization/Oscilloscope.vue'
import LabelKnob from '../controls/LabelKnob.vue'

export default {
  name: 'OscilloscopePanel',
  components: { Oscilloscope, LabelKnob },
  computed: {
    scope() { return useUiStateStore().scope },
    sliderValue() { return Math.log10(this.scope.windowLength / 10) / Math.log10(100) }
  },
  methods: {
    onWindowChange(e) {
      const t = parseFloat(e.target.value)
      this.scope.windowLength = Math.round(10 * Math.pow(100, t))
    }
  }
}
</script>
