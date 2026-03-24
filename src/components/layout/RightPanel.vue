<template>
  <main class="right-panel">
    <DockLayout />
  </main>
</template>

<script>
import { useUiStateStore } from '../../stores/uiState'
import DockLayout from '../dock/DockLayout.vue'

export default {
  name: 'RightPanel',
  components: { DockLayout },
  data() {
    return { _saveTimer: null }
  },
  watch: {
    spectrum: { deep: true, handler() { this.debouncedSave() } },
    waterfall: { deep: true, handler() { this.debouncedSave() } },
    scope: { deep: true, handler() { this.debouncedSave() } },
    xy: { deep: true, handler() { this.debouncedSave() } }
  },
  computed: {
    spectrum() { return useUiStateStore().spectrum },
    waterfall() { return useUiStateStore().waterfall },
    scope() { return useUiStateStore().scope },
    xy() { return useUiStateStore().xy }
  },
  methods: {
    debouncedSave() {
      clearTimeout(this._saveTimer)
      this._saveTimer = setTimeout(() => useUiStateStore().saveState(), 500)
    }
  }
}
</script>

<style lang="sass">
// Shared viz control styles used by dock panels
.viz-controls
  &__slider
    width: 140px
    flex-shrink: 0

    &--short
      width: 80px

  &__value
    font-size: var(--font-size-xs)
    font-family: var(--font-mono)
    color: var(--color-text-dim)
    min-width: 42px

  &__checkbox
    display: flex
    align-items: center
    gap: 4px
    font-size: var(--font-size-xs)
    color: var(--color-text-dim)
    cursor: pointer
    white-space: nowrap
    user-select: none
</style>
