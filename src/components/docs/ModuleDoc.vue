<template>
  <div v-if="docText" class="module-doc">
    <button class="toggle-btn module-doc__toggle" @click="showDoc = !showDoc">
      {{ showDoc ? (locale === 'fr' ? 'Masquer la doc' : 'Hide docs') : (locale === 'fr' ? 'Documentation' : 'Documentation') }}
    </button>
    <div v-if="showDoc" class="module-doc__content">
      <pre class="module-doc__text">{{ docText }}</pre>
    </div>
  </div>
</template>

<script>
import { MODULE_DOCS } from './moduleDocs'

export default {
  name: 'ModuleDoc',
  props: {
    moduleId: { type: String, required: true }
  },
  data() {
    return { showDoc: false }
  },
  computed: {
    locale() { return this.$i18n.locale },
    docText() {
      const doc = MODULE_DOCS[this.moduleId]
      if (!doc) return null
      return doc[this.locale] || doc.fr || null
    }
  },
  watch: {
    moduleId() { this.showDoc = false }
  }
}
</script>

<style lang="sass">
.module-doc
  margin-top: 6px

  &__toggle
    width: 100%
    font-size: var(--font-size-sm)

  &__content
    margin-top: 4px
    background: #EEEEF0
    border-radius: var(--section-border-radius)
    padding: 8px
    max-height: 300px
    overflow-y: auto

  &__text
    font-family: var(--font-family)
    font-size: var(--font-size-sm)
    white-space: pre-wrap
    word-wrap: break-word
    line-height: 1.5
    color: #333
</style>
