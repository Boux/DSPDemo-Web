<template>
  <div class="dock-layout-wrap">
    <button class="dock-reset-btn" :title="$i18n.locale === 'fr' ? 'Réinitialiser la disposition' : 'Reset layout'" @click="resetLayout">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
        <path d="M2 8a6 6 0 0 1 10.3-4.2L11 5h4V1l-1.6 1.6A7.9 7.9 0 0 0 8 0a8 8 0 1 0 8 8h-2a6 6 0 0 1-12 0z" fill="currentColor"/>
      </svg>
    </button>
    <div ref="container" class="dock-layout"></div>
  </div>
  <!-- Teleport each live panel into its GL-managed container element -->
  <template v-for="panel in panels" :key="panel.id">
    <Teleport :to="panel.element" v-if="panel.element">
      <component :is="panelComponents[panel.type]" />
    </Teleport>
  </template>
</template>

<script>
import { GoldenLayout, LayoutConfig } from 'golden-layout'
import { markRaw } from 'vue'
import { loadSettings, saveSetting } from '../../utils/settings'
import SpectrumPanel from './SpectrumPanel.vue'
import WaterfallPanel from './WaterfallPanel.vue'
import OscilloscopePanel from './OscilloscopePanel.vue'
import XYPanel from './XYPanel.vue'

const PANEL_COMPONENTS = {
  spectrum: markRaw(SpectrumPanel),
  waterfall: markRaw(WaterfallPanel),
  oscilloscope: markRaw(OscilloscopePanel),
  xy: markRaw(XYPanel)
}

const DEFAULT_LAYOUT = {
  root: {
    type: 'column',
    content: [
      {
        type: 'stack',
        content: [
          { type: 'component', componentType: 'spectrum', title: 'Spectrum' },
          { type: 'component', componentType: 'waterfall', title: 'Waterfall' }
        ]
      },
      {
        type: 'stack',
        content: [
          { type: 'component', componentType: 'oscilloscope', title: 'Oscilloscope' },
          { type: 'component', componentType: 'xy', title: 'XY' }
        ]
      }
    ]
  }
}

let panelIdCounter = 0

export default {
  name: 'DockLayout',
  data() {
    return {
      panels: [],
      panelComponents: PANEL_COMPONENTS,
      gl: null
    }
  },
  mounted() {
    this.initLayout()
    this._resizeObserver = new ResizeObserver(() => {
      if (this.gl) this.gl.updateRootSize()
    })
    this._resizeObserver.observe(this.$refs.container)
    this._onReset = () => this.resetLayout()
    document.addEventListener('reset-dock-layout', this._onReset)
  },
  beforeUnmount() {
    document.removeEventListener('reset-dock-layout', this._onReset)
    if (this._resizeObserver) this._resizeObserver.disconnect()
    if (this._saveTimer) clearTimeout(this._saveTimer)
    if (this.gl) {
      this.gl.destroy()
      this.gl = null
    }
  },
  methods: {
    initLayout() {
      const container = this.$refs.container
      if (!container) return

      const gl = new GoldenLayout(
        container,
        this.handleBind.bind(this),
        this.handleUnbind.bind(this)
      )

      this.gl = gl

      // Listen for layout changes to persist
      gl.on('stateChanged', () => this.debouncedSave())

      // Load saved layout or default
      const saved = loadSettings().dockLayout
      if (saved && saved.root) {
        try {
          gl.loadLayout(saved)
        } catch (e) {
          console.warn('Failed to load saved dock layout, using default:', e)
          gl.loadLayout(DEFAULT_LAYOUT)
        }
      } else {
        gl.loadLayout(DEFAULT_LAYOUT)
      }
    },

    handleBind(container, itemConfig) {
      const type = itemConfig.componentType
      const id = ++panelIdCounter

      if (!this._containerMap) this._containerMap = new Map()
      this._containerMap.set(id, container)

      this.panels.push({ id, type, element: container.element })

      return { component: undefined, virtual: true }
    },

    handleUnbind(container) {
      const idx = this.panels.findIndex(p => {
        return this._containerMap.get(p.id) === container
      })
      if (idx !== -1) {
        const panel = this.panels[idx]
        this._containerMap.delete(panel.id)
        this.panels.splice(idx, 1)
      }
    },

    resetLayout() {
      if (!this.gl) return
      this.panels = []
      if (this._containerMap) this._containerMap.clear()
      this.gl.clear()
      this.gl.loadLayout(DEFAULT_LAYOUT)
      saveSetting('dockLayout', null)
    },

    debouncedSave() {
      clearTimeout(this._saveTimer)
      this._saveTimer = setTimeout(() => {
        if (this.gl) {
          const resolved = this.gl.saveLayout()
          saveSetting('dockLayout', LayoutConfig.fromResolved(resolved))
        }
      }, 500)
    }
  }
}
</script>

<style lang="sass">
@import 'golden-layout/dist/css/goldenlayout-base.css'
@import 'golden-layout/dist/css/themes/goldenlayout-dark-theme.css'

// Visual overrides on top of stock dark theme
.lm_goldenlayout
  background: var(--color-bg, #0a0a0e)
  user-select: none

.lm_content
  background: var(--color-section-bg, #12121a)
  border: none

.lm_splitter
  background: var(--color-border, #252530)
  opacity: 0.3
  transition: opacity 200ms ease

.lm_splitter:hover,
.lm_splitter.lm_dragging
  background: var(--color-accent, #4ade80)
  opacity: 0.8

.lm_header .lm_tab
  font-family: inherit
  font-size: var(--font-size-xs, 11px)
  color: var(--color-text-dim, #999)
  background: var(--color-bg, #0a0a0e)
  margin-right: 1px
  padding: 2px 12px 2px
  border: none
  box-shadow: none

.lm_header .lm_tab:hover,
.lm_header .lm_tab.lm_active
  color: var(--color-text, #ddd)
  background: var(--color-section-bg, #12121a)

.lm_header .lm_tab.lm_active
  border-bottom: 2px solid var(--color-accent, #4ade80)
  box-shadow: none

.lm_header .lm_tab.lm_active.lm_focused
  background: var(--color-section-bg, #12121a)

.lm_header .lm_tab .lm_close_tab
  display: none

.lm_controls > *
  display: none

// Panel layout
.dock-panel
  display: flex
  flex-direction: column
  width: 100%
  height: 100%
  overflow: hidden

  &__controls
    display: flex
    align-items: center
    gap: var(--sp-2, 6px)
    padding: var(--sp-1, 3px) var(--sp-2, 6px)
    flex-shrink: 0
    min-height: 0

  &__canvas
    flex: 1
    min-height: 0
    position: relative

.dock-layout-wrap
  flex: 1
  min-height: 0
  width: 100%
  position: relative

.dock-layout
  width: 100%
  height: 100%

.dock-reset-btn
  position: absolute
  top: 0
  right: 2px
  z-index: 10
  width: 20px
  height: 20px
  display: flex
  align-items: center
  justify-content: center
  background: transparent
  border: none
  color: var(--color-text-dim, #666)
  cursor: pointer
  opacity: 0.4
  transition: opacity 0.15s

  &:hover
    opacity: 1
    color: var(--color-text, #ddd)
</style>
