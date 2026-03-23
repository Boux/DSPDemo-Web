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

    <button class="app-header__info-btn" @click="showAbout = true" title="About">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/>
        <text x="8" y="11.5" text-anchor="middle" fill="currentColor" font-size="10" font-weight="600">i</text>
      </svg>
    </button>

    <div v-if="showAbout" class="about-overlay" @click.self="showAbout = false">
      <div class="about-dialog">
        <button class="about-dialog__close" @click="showAbout = false">&times;</button>
        <h2 class="about-dialog__title">DSPDemo Web</h2>
        <p class="about-dialog__version">v0.1.0</p>
        <p class="about-dialog__text">
          {{ $i18n.locale === 'fr'
            ? 'Application interactive pour l\'apprentissage du traitement numérique du signal audio. Visualisez la physique et les mathématiques derrière le son.'
            : 'Interactive application for learning digital audio signal processing. Visualize the physics and mathematics behind sound.' }}
        </p>
        <div class="about-dialog__credits">
          <p class="about-dialog__credit-label">
            {{ $i18n.locale === 'fr' ? 'Basé sur le projet original de' : 'Based on the original project by' }}
          </p>
          <p class="about-dialog__credit-name">Olivier Bélanger (2016-2020)</p>
          <a
            class="about-dialog__link"
            href="https://github.com/belangeo/dspdemo"
            target="_blank"
            rel="noopener"
          >github.com/belangeo/dspdemo</a>
        </div>
        <p class="about-dialog__text about-dialog__text--small">
          {{ $i18n.locale === 'fr'
            ? 'Réécriture web utilisant Vue 3, Web Audio API et AudioWorklet.'
            : 'Web rewrite using Vue 3, Web Audio API and AudioWorklet.' }}
        </p>
      </div>
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
      menuOpen: false,
      showAbout: false
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
    margin-right: var(--sp-2)

  &__info-btn
    display: flex
    align-items: center
    justify-content: center
    width: 28px
    height: 28px
    border: 1px solid var(--color-border)
    border-radius: var(--control-radius)
    background: transparent
    color: var(--color-text-muted)
    cursor: pointer
    transition: background 0.12s, color 0.12s

    &:hover
      background: var(--color-surface-raised)
      color: var(--color-text)
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

.about-overlay
  position: fixed
  inset: 0
  z-index: 200
  background: rgba(0, 0, 0, 0.6)
  display: flex
  align-items: center
  justify-content: center

.about-dialog
  background: var(--color-surface)
  border: 1px solid var(--color-border)
  border-radius: var(--sp-2)
  padding: var(--sp-5)
  max-width: 400px
  width: 90%
  position: relative
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5)

  &__close
    position: absolute
    top: var(--sp-2)
    right: var(--sp-2)
    background: none
    border: none
    color: var(--color-text-muted)
    font-size: 20px
    cursor: pointer
    line-height: 1

    &:hover
      color: var(--color-text)

  &__title
    font-size: 18px
    font-weight: 700
    margin-bottom: var(--sp-1)

  &__version
    font-size: var(--font-size-sm)
    color: var(--color-text-dim)
    margin-bottom: var(--sp-3)

  &__text
    font-size: var(--font-size-base)
    color: var(--color-text-muted)
    line-height: 1.5
    margin-bottom: var(--sp-3)

    &--small
      font-size: var(--font-size-sm)
      margin-bottom: 0

  &__credits
    background: var(--color-bg)
    border-radius: var(--control-radius)
    padding: var(--sp-3)
    margin-bottom: var(--sp-3)

  &__credit-label
    font-size: var(--font-size-sm)
    color: var(--color-text-dim)
    margin-bottom: var(--sp-1)

  &__credit-name
    font-size: var(--font-size-base)
    font-weight: 600
    margin-bottom: var(--sp-1)

  &__link
    font-size: var(--font-size-sm)
    color: var(--color-accent)
    text-decoration: none

    &:hover
      text-decoration: underline
</style>
