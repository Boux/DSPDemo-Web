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
      <input
        v-if="editing"
        ref="textInput"
        type="text"
        class="control-slider__value control-slider__value--editing"
        :value="editText"
        @input="editText = $event.target.value"
        @keydown.enter="commitEdit"
        @keydown.escape="cancelEdit"
        @blur="commitEdit"
      />
      <span
        v-else
        class="control-slider__value"
        @click="startEdit"
      >{{ displayValue }}</span>
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
  data() {
    return {
      editing: false,
      editText: ''
    }
  },
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
    startEdit() {
      this.editText = this.displayValue
      this.editing = true
      this.$nextTick(() => {
        const input = this.$refs.textInput
        if (input) {
          input.focus()
          input.select()
        }
      })
    },
    commitEdit() {
      if (!this.editing) return
      const parsed = parseFloat(this.editText)
      if (!isNaN(parsed)) {
        let val = clamp(parsed, this.mini, this.maxi)
        if (this.integer) val = Math.round(val)
        this.$emit('update:modelValue', val)
      }
      this.editing = false
    },
    cancelEdit() {
      this.editing = false
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

  &__value
    font-size: var(--font-size-xs)
    color: var(--color-text-dim)
    font-family: var(--font-mono)
    text-align: right
    cursor: default

    &--editing
      background: var(--color-bg, #0a0a0e)
      border: 1px solid var(--color-accent, #4ade80)
      border-radius: 2px
      color: var(--color-text, #ddd)
      padding: 0 1px
      outline: none
      text-align: right
      width: 50px
      min-width: 50px
</style>
