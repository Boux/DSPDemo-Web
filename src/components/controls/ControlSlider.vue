<template>
  <div class="control-slider">
    <label v-if="label" class="control-slider__label">{{ label }}</label>
    <div class="control-slider__row">
      <input
        ref="range"
        type="range"
        :min="0"
        :max="1"
        :step="0.001"
        :value="normalizedValue"
        class="control-slider__input"
        @input="onInput"
      />
      <span class="control-slider__value">{{ displayValue }}</span>
    </div>
  </div>
</template>

<script>
import { toLog, toExp, interpFloat, tFromValue, formatValue, clamp } from '../../utils/dspMath'

export default {
  name: 'ControlSlider',
  props: {
    label: { type: String, default: '' },
    modelValue: { type: Number, default: 0 },
    mini: { type: Number, default: 0 },
    maxi: { type: Number, default: 1 },
    log: { type: Boolean, default: false },
    integer: { type: Boolean, default: false }
  },
  emits: ['update:modelValue'],
  computed: {
    normalizedValue() {
      if (this.log) {
        return toLog(clamp(this.modelValue, this.mini, this.maxi), this.mini, this.maxi)
      }
      return tFromValue(clamp(this.modelValue, this.mini, this.maxi), this.mini, this.maxi)
    },
    displayValue() {
      return formatValue(this.modelValue, this.integer)
    }
  },
  methods: {
    onInput(e) {
      const t = parseFloat(e.target.value)
      let val
      if (this.log) {
        val = toExp(t, this.mini, this.maxi)
      } else {
        val = interpFloat(t, this.mini, this.maxi)
      }
      if (this.integer) {
        val = Math.round(val)
      }
      this.$emit('update:modelValue', val)
    }
  }
}
</script>

<style lang="sass">
.control-slider
  width: 100%

  &__label
    display: block
    font-size: var(--font-size-sm)
    color: #444
    margin-bottom: 2px

  &__row
    display: flex
    align-items: center
    gap: 6px

  &__input
    flex: 1

  &__value
    font-size: 10px
    color: #555
    font-family: monospace
    min-width: 44px
    text-align: right
</style>
