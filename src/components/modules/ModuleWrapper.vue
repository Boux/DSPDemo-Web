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
import Mod02Filters from './Mod02Filters.vue'
import Mod03FixedDelay from './Mod03FixedDelay.vue'
import Mod03VariableDelay from './Mod03VariableDelay.vue'
import Mod03Phasing from './Mod03Phasing.vue'
import Mod04Panning from './Mod04Panning.vue'
import Mod05PeakRMS from './Mod05PeakRMS.vue'
import Mod09AmpMod from './Mod09AmpMod.vue'
import Mod09FreqMod from './Mod09FreqMod.vue'
import Mod01Resampling from './Mod01Resampling.vue'
import Mod01Quantize from './Mod01Quantize.vue'
import Mod05EnvFollower from './Mod05EnvFollower.vue'
import Mod05Gate from './Mod05Gate.vue'
import Mod05Compress from './Mod05Compress.vue'
import Mod09AutoMod from './Mod09AutoMod.vue'
import Mod10Chebyshev from './Mod10Chebyshev.vue'
import Mod10Distortion from './Mod10Distortion.vue'
import Mod03Transpose from './Mod03Transpose.vue'
import Mod03Reverb from './Mod03Reverb.vue'
import Mod06Vocoder from './Mod06Vocoder.vue'
import Mod06SpectralFilter from './Mod06SpectralFilter.vue'
import Mod06CrossSynth from './Mod06CrossSynth.vue'
import Mod06SpectralPlayback from './Mod06SpectralPlayback.vue'
import Mod06SpectralDelay from './Mod06SpectralDelay.vue'
import Mod08AddSynthFix from './Mod08AddSynthFix.vue'
import Mod08AddSynthVar from './Mod08AddSynthVar.vue'
import Mod08PWM from './Mod08PWM.vue'
import Mod08OscSync from './Mod08OscSync.vue'
import Mod07GranularPlayback from './Mod07GranularPlayback.vue'
import Mod07GranularReorg from './Mod07GranularReorg.vue'
import Mod04Binaural from './Mod04Binaural.vue'
import Mod05MBCompress from './Mod05MBCompress.vue'

const COMPONENT_MAP = {
  'Mod00Sources': Mod00Sources,
  'Mod02Filters': Mod02Filters,
  'Mod03FixedDelay': Mod03FixedDelay,
  'Mod03VariableDelay': Mod03VariableDelay,
  'Mod03Phasing': Mod03Phasing,
  'Mod04Panning': Mod04Panning,
  'Mod05PeakRMS': Mod05PeakRMS,
  'Mod09AmpMod': Mod09AmpMod,
  'Mod09FreqMod': Mod09FreqMod,
  'Mod01Resampling': Mod01Resampling,
  'Mod01Quantize': Mod01Quantize,
  'Mod05EnvFollower': Mod05EnvFollower,
  'Mod05Gate': Mod05Gate,
  'Mod05Compress': Mod05Compress,
  'Mod09AutoMod': Mod09AutoMod,
  'Mod10Chebyshev': Mod10Chebyshev,
  'Mod10Distortion': Mod10Distortion,
  'Mod03Transpose': Mod03Transpose,
  'Mod03Reverb': Mod03Reverb,
  'Mod06Vocoder': Mod06Vocoder,
  'Mod06SpectralFilter': Mod06SpectralFilter,
  'Mod06CrossSynth': Mod06CrossSynth,
  'Mod06SpectralPlayback': Mod06SpectralPlayback,
  'Mod06SpectralDelay': Mod06SpectralDelay,
  'Mod08AddSynthFix': Mod08AddSynthFix,
  'Mod08AddSynthVar': Mod08AddSynthVar,
  'Mod08PWM': Mod08PWM,
  'Mod08OscSync': Mod08OscSync,
  'Mod07GranularPlayback': Mod07GranularPlayback,
  'Mod07GranularReorg': Mod07GranularReorg,
  'Mod04Binaural': Mod04Binaural,
  'Mod05MBCompress': Mod05MBCompress
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
