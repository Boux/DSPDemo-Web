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
        @dblclick="resetToDefault"
      />
      <EditableValue
        :display="displayValue"
        @submit="onTextSubmit"
        @reset="resetToDefault"
      />
    </div>
  </div>
</template>

<script>
import { toLog, toExp, interpFloat, tFromValue, formatValue, clamp } from '../../utils/dspMath'
import EditableValue from './EditableValue.vue'

export default {
  name: 'ControlSlider',
  components: { EditableValue },
  props: {
    label: { type: String, default: '' },
    modelValue: { type: Number, default: 0 },
    mini: { type: Number, default: 0 },
    maxi: { type: Number, default: 1 },
    log: { type: Boolean, default: false },
    integer: { type: Boolean, default: false },
    defaultValue: { type: Number, default: null }
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
    },
    onTextSubmit(parsed) {
      let val = clamp(parsed, this.mini, this.maxi)
      if (this.integer) val = Math.round(val)
      this.$emit('update:modelValue', val)
    },
    resetToDefault() {
      if (this.defaultValue !== null) {
        this.$emit('update:modelValue', this.defaultValue)
      }
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
    color: var(--color-text-muted)
    margin-bottom: 2px

  &__row
    display: flex
    align-items: center
    gap: var(--sp-1)

  &__input
    flex: 1
</style>
