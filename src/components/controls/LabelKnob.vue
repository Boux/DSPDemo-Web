<template>
  <div class="label-knob">
    <span class="label-knob__label">{{ label }}</span>
    <RotaryKnob
      :modelValue="knobValue"
      :size="28"
      @update:modelValue="onKnobChange"
      @dblclick.native="resetToDefault"
    />
    <EditableValue
      :display="displayValue"
      @submit="onTextSubmit"
      @reset="resetToDefault"
    />
  </div>
</template>

<script>
import RotaryKnob from './RotaryKnob.vue'
import EditableValue from './EditableValue.vue'
import { interpFloat, tFromValue, toLog, toExp, formatValue, clamp } from '../../utils/dspMath'

export default {
  name: 'LabelKnob',
  components: { RotaryKnob, EditableValue },
  props: {
    label: { type: String, default: '' },
    modelValue: { type: Number, default: 0 },
    mini: { type: Number, default: 0 },
    maxi: { type: Number, default: 1 },
    init: { type: Number, default: null },
    log: { type: Boolean, default: false },
    integer: { type: Boolean, default: false },
    defaultValue: { type: Number, default: null }
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
    },
    onTextSubmit(parsed) {
      let val = clamp(parsed, this.mini, this.maxi)
      if (this.integer) val = Math.round(val)
      this.$emit('update:modelValue', val)
    },
    resetToDefault() {
      const def = this.defaultValue !== null ? this.defaultValue : this.init
      if (def !== null) {
        this.$emit('update:modelValue', def)
      }
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
  min-width: 46px

  &__label
    font-size: var(--font-size-xs)
    color: var(--color-text-muted)
    white-space: nowrap
</style>
