<template>
  <div class="dock-panel">
    <div class="dock-panel__controls">
      <label class="control-label">{{ $t('visualization.windowSize') }}</label>
      <input type="range" class="viz-controls__slider" :min="0" :max="1" :step="0.001" :value="sliderValue" @input="onWindowChange" />
      <span class="viz-controls__value">{{ xy.windowLength }} ms</span>
      <LabelKnob :label="$t('visualization.amplitude')" v-model="xy.amplitude" :mini="0" :maxi="1" />
      <label class="viz-controls__checkbox"><input type="checkbox" v-model="xy.autoNormalize" />{{ $t('visualization.autoNormalize') }}</label>
    </div>
    <div class="dock-panel__canvas">
      <XYScope />
    </div>
  </div>
</template>

<script>
import { useUiStateStore } from '../../stores/uiState'
import XYScope from '../visualization/XYScope.vue'
import LabelKnob from '../controls/LabelKnob.vue'

export default {
  name: 'XYPanel',
  components: { XYScope, LabelKnob },
  computed: {
    xy() { return useUiStateStore().xy },
    sliderValue() { return Math.log10(this.xy.windowLength / 10) / Math.log10(100) }
  },
  methods: {
    onWindowChange(e) {
      const t = parseFloat(e.target.value)
      this.xy.windowLength = Math.round(10 * Math.pow(100, t))
    }
  }
}
</script>
