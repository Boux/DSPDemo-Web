<template>
  <main class="right-panel">
    <SpectrumView />
    <ScopeView />
  </main>
</template>

<script>
import { useUiStateStore } from '../../stores/uiState'
import SpectrumView from '../visualization/SpectrumView.vue'
import ScopeView from '../visualization/ScopeView.vue'

export default {
  name: 'RightPanel',
  components: {
    SpectrumView,
    ScopeView
  },
  data() {
    return {
      _saveTimer: null
    }
  },
  watch: {
    spectrum: {
      deep: true,
      handler() { this.debouncedSave() }
    },
    scope: {
      deep: true,
      handler() { this.debouncedSave() }
    }
  },
  computed: {
    spectrum() {
      return useUiStateStore().spectrum
    },
    scope() {
      return useUiStateStore().scope
    }
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
.viz-body
  flex: 1
  display: flex
  flex-direction: column
  min-height: 0

.viz-controls
  display: flex
  align-items: center
  gap: var(--sp-2)
  padding: var(--sp-1) 0
  flex-shrink: 0

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

.viz-canvas-wrap
  flex: 1
  min-height: 80px
  position: relative
  border-radius: var(--control-radius)
  overflow: hidden
</style>
