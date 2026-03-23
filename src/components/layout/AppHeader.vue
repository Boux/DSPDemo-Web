<template>
  <header class="app-header">
    <span class="app-header__title">DSPDemo</span>

    <nav class="app-header__nav">
      <div class="module-menu" @mouseenter="menuOpen = true" @mouseleave="menuOpen = false">
        <button class="module-menu__trigger">{{ $t('menu.modules') }}</button>
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
        @click="$i18n.locale = 'fr'"
      >FR</button>
      <button
        class="lang-btn"
        :class="{ active: $i18n.locale === 'en' }"
        @click="$i18n.locale = 'en'"
      >EN</button>
    </div>
  </header>
</template>

<script>
import { useModuleRegistryStore } from '../../stores/moduleRegistry'

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
  methods: {
    selectModule(moduleId) {
      this.menuOpen = false
      useModuleRegistryStore().setActiveModule(moduleId)
      this.$router.push({ name: 'module', params: { moduleId } })
    }
  }
}
</script>

<style lang="sass">
.app-header
  position: relative

  &__title
    font-weight: 700
    font-size: 16px
    margin-right: 16px

  &__nav
    display: flex
    align-items: center

  &__spacer
    flex: 1

  &__lang
    display: flex
    gap: 4px

.lang-btn
  padding: 2px 8px
  border: 1px solid rgba(255, 255, 255, 0.3)
  border-radius: 3px
  background: transparent
  color: var(--head-title-text)
  cursor: pointer
  font-size: var(--font-size-sm)
  font-family: var(--font-family)

  &.active
    background: rgba(255, 255, 255, 0.2)

.module-menu
  position: relative

  &__trigger
    padding: 4px 12px
    border: 1px solid rgba(255, 255, 255, 0.3)
    border-radius: 3px
    background: transparent
    color: var(--head-title-text)
    cursor: pointer
    font-size: var(--font-size-base)
    font-family: var(--font-family)

  &__dropdown
    position: absolute
    top: 100%
    left: 0
    z-index: 100
    background: var(--panel-background)
    border: 1px solid var(--border-color)
    border-radius: 0 0 4px 4px
    min-width: 280px
    max-height: 70vh
    overflow-y: auto
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2)

  &__category
    border-bottom: 1px solid var(--border-color)

    &:last-child
      border-bottom: none

  &__category-label
    padding: 6px 10px 2px
    font-size: var(--font-size-sm)
    font-weight: 600
    color: #666

  &__item
    display: block
    width: 100%
    padding: 4px 10px 4px 20px
    border: none
    background: transparent
    text-align: left
    cursor: pointer
    font-size: var(--font-size-sm)
    font-family: var(--font-family)
    color: #222

    &:hover
      background: var(--head-title-background)
      color: var(--head-title-text)

    &--active
      font-weight: 600
</style>
