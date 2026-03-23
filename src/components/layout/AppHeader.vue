<template>
  <header class="app-header">
    <span class="app-header__title">DSPDemo</span>

    <nav class="app-header__nav">
      <div class="module-menu" ref="menuRoot">
        <button class="module-menu__trigger" @click="menuOpen = !menuOpen">{{ $t('menu.modules') }}</button>
        <div v-if="menuOpen" class="module-menu__dropdown">
          <div v-for="cat in categorizedModules" :key="cat.id" class="module-menu__category">
            <div class="module-menu__category-label">{{ $t('categories.' + cat.id) }}</div>
            <button
              v-for="mod in cat.modules"
              :key="mod.id"
              class="module-menu__item"
              :class="{ 'module-menu__item--active': mod.id === activeModuleId }"
              @click="selectModule(mod.id)"
            >
              {{ mod.name[$i18n.locale] || mod.name.fr }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="app-header__spacer"></div>

    <div class="app-header__lang">
      <button
        class="lang-btn"
        :class="{ active: $i18n.locale === 'fr' }"
        @click="setLocale('fr')"
      >FR</button>
      <button
        class="lang-btn"
        :class="{ active: $i18n.locale === 'en' }"
        @click="setLocale('en')"
      >EN</button>
    </div>
  </header>
</template>

<script>
import { useModuleRegistryStore } from '../../stores/moduleRegistry'
import { saveSetting } from '../../utils/settings'

export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false
    }
  },
  computed: {
    categorizedModules() {
      return useModuleRegistryStore().categorizedModules
    },
    activeModuleId() {
      return useModuleRegistryStore().activeModuleId
    }
  },
  mounted() {
    this._onClickOutside = (e) => {
      if (this.menuOpen && this.$refs.menuRoot && !this.$refs.menuRoot.contains(e.target)) {
        this.menuOpen = false
      }
    }
    document.addEventListener('mousedown', this._onClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('mousedown', this._onClickOutside)
  },
  methods: {
    selectModule(moduleId) {
      this.menuOpen = false
      useModuleRegistryStore().setActiveModule(moduleId)
      this.$router.push({ name: 'module', params: { moduleId } })
    },
    setLocale(locale) {
      this.$i18n.locale = locale
      saveSetting('locale', locale)
    }
  }
}
</script>

<style lang="sass">
.app-header
  position: relative

  &__title
    font-weight: 700
    font-size: var(--font-size-lg)
    margin-right: var(--sp-4)
    letter-spacing: 0.03em

  &__nav
    display: flex
    align-items: center

  &__spacer
    flex: 1

  &__lang
    display: flex
    gap: var(--sp-1)

.lang-btn
  padding: var(--sp-1) var(--sp-2)
  border: 1px solid var(--color-border)
  border-radius: var(--control-radius)
  background: transparent
  color: var(--color-text-muted)
  cursor: pointer
  font-size: var(--font-size-xs)
  font-family: var(--font-family)
  transition: background 0.12s

  &:hover
    background: var(--color-surface-raised)

  &.active
    background: var(--color-accent)
    border-color: var(--color-accent)
    color: #fff

.module-menu
  position: relative

  &__trigger
    padding: var(--sp-1) var(--sp-3)
    border: 1px solid var(--color-border)
    border-radius: var(--control-radius)
    background: transparent
    color: var(--color-text)
    cursor: pointer
    font-size: var(--font-size-sm)
    font-family: var(--font-family)
    transition: background 0.12s

    &:hover
      background: var(--color-surface-raised)

  &__dropdown
    position: absolute
    top: calc(100% + 4px)
    left: 0
    z-index: 100
    background: var(--color-surface)
    border: 1px solid var(--color-border)
    border-radius: var(--control-radius)
    min-width: 300px
    max-height: 70vh
    overflow-y: auto
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5)

  &__category
    border-bottom: 1px solid var(--color-border)

    &:last-child
      border-bottom: none

  &__category-label
    padding: var(--sp-2) var(--sp-3) var(--sp-1)
    font-size: var(--font-size-xs)
    font-weight: 600
    color: var(--color-text-dim)
    text-transform: uppercase
    letter-spacing: 0.05em

  &__item
    display: block
    width: 100%
    padding: var(--sp-1) var(--sp-3) var(--sp-1) var(--sp-5)
    border: none
    background: transparent
    text-align: left
    cursor: pointer
    font-size: var(--font-size-sm)
    font-family: var(--font-family)
    color: var(--color-text)
    transition: background 0.1s

    &:hover
      background: var(--color-accent)
      color: #fff

    &--active
      color: var(--color-accent)
      font-weight: 600
</style>
