<template>
  <div class="mod-sources">
    <SourcePanel :audio="sourcePanel" />
  </div>
</template>

<script>
import SourcePanel from '../source/SourcePanel.vue'
import { useAudioEngineStore } from '../../stores/audioEngine'

export default {
  name: 'Mod00Sources',
  components: { SourcePanel },
  moduleId: 'mod-00-sources',
  computed: {
    sourcePanel() {
      return useAudioEngineStore().sourcePanel
    }
  }
}
</script>

<style lang="sass">
.mod-sources
  padding: 4px
</style>
