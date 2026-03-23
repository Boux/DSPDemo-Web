<template>
  <div class="module-wrapper">
    <div class="section-head">{{ moduleName }}</div>
    <div class="section-body module-body">
      <component :is="moduleComponent" v-if="moduleComponent" />
      <div v-else class="module-placeholder">
        {{ $t('menu.modules') }}: {{ $route.params.moduleId }}
      </div>
    </div>
  </div>
</template>

<script>
import { useModuleRegistryStore } from '../../stores/moduleRegistry'
import Mod00Sources from './Mod00Sources.vue'

const COMPONENT_MAP = {
  'Mod00Sources': Mod00Sources
}

export default {
  name: 'ModuleWrapper',
  computed: {
    moduleId() {
      return this.$route.params.moduleId
    },
    moduleDef() {
      const registry = useModuleRegistryStore()
      return registry.modules[this.moduleId] || null
    },
    moduleName() {
      if (!this.moduleDef) return this.moduleId
      return this.moduleDef.name[this.$i18n.locale] || this.moduleDef.name.fr
    },
    moduleComponent() {
      if (!this.moduleDef) return null
      return COMPONENT_MAP[this.moduleDef.component] || null
    }
  },
  watch: {
    moduleId(newId) {
      useModuleRegistryStore().setActiveModule(newId)
    }
  },
  created() {
    if (this.moduleId) {
      useModuleRegistryStore().setActiveModule(this.moduleId)
    }
  }
}
</script>

<style lang="sass">
.module-wrapper
  display: flex
  flex-direction: column
  min-height: 0

.module-body
  flex: 1
  overflow-y: auto

.module-placeholder
  padding: 20px
  text-align: center
  color: #888
  font-style: italic
</style>
