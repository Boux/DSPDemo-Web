<template>
  <div class="label-knob">
    <span class="label-knob__label">{{ label }}</span>
    <RotaryKnob
      :modelValue="knobValue"
      :size="28"
      @update:modelValue="onKnobChange"
    />
    <span class="label-knob__value">{{ displayValue }}</span>
  </div>
</template>

<script>
import RotaryKnob from './RotaryKnob.vue'
import { interpFloat, tFromValue, toLog, toExp, formatValue } from '../../utils/dspMath'

export default {
  name: 'LabelKnob',
  components: { RotaryKnob },
  props: {
    label: { type: String, default: '' },
    modelValue: { type: Number, default: 0 },
    mini: { type: Number, default: 0 },
    maxi: { type: Number, default: 1 },
    init: { type: Number, default: null },
    log: { type: Boolean, default: false },
    integer: { type: Boolean, default: false }
  },
  emits: ['update:modelValue'],
  computed: {
    knobValue() {
      if (this.log) {
        return toLog(this.modelValue, this.mini, this.maxi)
      }
      return tFromValue(this.modelValue, this.mini, this.maxi)
    },
    displayValue() {
      return formatValue(this.modelValue, this.integer)
    }
  },
  methods: {
    onKnobChange(knobVal) {
      let realVal
      if (this.log) {
        realVal = toExp(knobVal, this.mini, this.maxi)
      } else {
        realVal = interpFloat(knobVal, this.mini, this.maxi)
      }
      if (this.integer) {
        realVal = Math.round(realVal)
      }
      this.$emit('update:modelValue', realVal)
    }
  }
}
</script>

<style lang="sass">
.label-knob
  display: flex
  flex-direction: column
  align-items: center
  gap: 2px
  min-width: 50px

  &__label
    font-size: var(--font-size-sm)
    color: #444
    white-space: nowrap

  &__value
    font-size: 10px
    color: #555
    font-family: monospace
</style>
