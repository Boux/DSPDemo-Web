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

export default {
  name: 'App',
  components: {
    AppHeader,
    LeftPanel,
    RightPanel
  }
}
</script>
