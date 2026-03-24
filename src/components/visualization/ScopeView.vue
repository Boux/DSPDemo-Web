<template>
  <div class="scope-view">
    <div class="section-head scope-view__tabs">
      <button
        v-for="tab in tabs"
        :key="tab.mode"
        class="scope-view__tab"
        :class="{ active: scope.mode === tab.mode }"
        @click="scope.mode = tab.mode"
      >{{ tab.label[$i18n.locale] || tab.label.en }}</button>
    </div>
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
          @input="onWindowChange"
        />
        <span class="viz-controls__value">{{ scope.windowLength }} ms</span>
        <LabelKnob
          :label="$t('visualization.amplitude')"
          v-model="scope.amplitude"
          :mini="0"
          :maxi="1"
        />
        <label class="viz-controls__checkbox">
          <input type="checkbox" v-model="scope.autoNormalize" />
          {{ $t('visualization.autoNormalize') }}
        </label>
        <label v-if="scope.mode === 'scope'" class="viz-controls__checkbox">
          <input type="checkbox" v-model="scope.forceSync" />
          {{ $t('visualization.forceSync') }}
        </label>
      </div>
      <div class="viz-canvas-wrap">
        <Oscilloscope v-if="scope.mode === 'scope'" />
        <XYScope v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { useUiStateStore } from '../../stores/uiState'
import Oscilloscope from './Oscilloscope.vue'
import XYScope from './XYScope.vue'
import LabelKnob from '../controls/LabelKnob.vue'

export default {
  name: 'ScopeView',
  components: { Oscilloscope, XYScope, LabelKnob },
  data() {
    return {
      tabs: [
        { mode: 'scope', label: { fr: 'Oscilloscope', en: 'Oscilloscope' } },
        { mode: 'xy', label: { fr: 'XY', en: 'XY' } }
      ]
    }
  },
  computed: {
    scope() {
      return useUiStateStore().scope
    },
    scopeSliderValue() {
      return Math.log10(this.scope.windowLength / 10) / Math.log10(100)
    }
  },
  methods: {
    onWindowChange(e) {
      const t = parseFloat(e.target.value)
      this.scope.windowLength = Math.round(10 * Math.pow(100, t))
    }
  }
}
</script>

<style lang="sass">
.scope-view
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
