<template>
  <aside class="left-panel">
    <AudioControls />
    <div class="module-area">
      <router-view />
    </div>
    <OutputControls />
  </aside>
</template>

<script>
import AudioControls from './AudioControls.vue'
import OutputControls from './OutputControls.vue'

export default {
  name: 'LeftPanel',
  components: {
    AudioControls,
    OutputControls
  }
}
</script>

<style lang="sass">
.module-area
  flex: 1
  min-height: 0
  overflow-y: auto
</style>
