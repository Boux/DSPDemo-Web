<template>
  <input
    v-if="editing"
    ref="input"
    :type="inputType"
    class="editable-value editable-value--editing"
    :value="editText"
    @input="editText = $event.target.value"
    @keydown.enter="commit"
    @keydown.escape="cancel"
    @blur="commit"
  />
  <span
    v-else
    class="editable-value"
    @click="startEdit"
    @dblclick.stop="$emit('reset')"
  >{{ display }}</span>
</template>

<script>
export default {
  name: 'EditableValue',
  props: {
    display: { type: String, required: true },
    inputType: { type: String, default: 'text' },
    parse: { type: Function, default: (v) => parseFloat(v) }
  },
  emits: ['submit', 'reset'],
  data() {
    return {
      editing: false,
      editText: ''
    }
  },
  methods: {
    startEdit() {
      this.editText = this.display
      this.editing = true
      this.$nextTick(() => {
        const input = this.$refs.input
        if (input) {
          input.focus()
          input.select()
        }
      })
    },
    commit() {
      if (!this.editing) return
      const parsed = this.parse(this.editText)
      if (parsed !== null && parsed !== undefined && !isNaN(parsed)) {
        this.$emit('submit', parsed)
      }
      this.editing = false
    },
    cancel() {
      this.editing = false
    }
  }
}
</script>

<style lang="sass">
.editable-value
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
    font-size: var(--font-size-xs)
    font-family: var(--font-mono)
</style>
