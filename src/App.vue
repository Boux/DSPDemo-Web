<template>
  <AppHeader />
  <div class="app-body">
    <LeftPanel />
    <RightPanel />
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'
import LeftPanel from './components/layout/LeftPanel.vue'
import RightPanel from './components/layout/RightPanel.vue'
import { useAudioEngineStore } from './stores/audioEngine'

export default {
  name: 'App',
  components: {
    AppHeader,
    LeftPanel,
    RightPanel
  },
  created() {
    // Eagerly create the audio graph (suspended) so module components
    // can wire into it as soon as they mount, before Enable is clicked.
    useAudioEngineStore().init()
  }
}
</script>
