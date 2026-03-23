import { defineStore } from 'pinia'

export const MODULE_CATEGORIES = [
  { id: 'sources', modules: ['mod-00-sources'] },
  { id: 'sampling', modules: ['mod-01-resampling', 'mod-01-quantize'] },
  { id: 'filtering', modules: ['mod-02-filters'] },
  {
    id: 'delay',
    modules: [
      'mod-03-fixed-delay', 'mod-03-variable-delay', 'mod-03-phasing',
      'mod-03-transpose', 'mod-03-reverb'
    ]
  },
  { id: 'spatialization', modules: ['mod-04-panning', 'mod-04-binaural'] },
  {
    id: 'dynamics',
    modules: [
      'mod-05-peak-rms', 'mod-05-env-follower', 'mod-05-gate',
      'mod-05-compressor', 'mod-05-mb-compressor'
    ]
  },
  {
    id: 'spectral',
    modules: [
      'mod-06-vocoder', 'mod-06-spectral-filter', 'mod-06-cross-synth',
      'mod-06-spectral-playback', 'mod-06-spectral-delay'
    ]
  },
  { id: 'granulation', modules: ['mod-07-granular-playback', 'mod-07-granular-reorg'] },
  {
    id: 'synthesis',
    modules: [
      'mod-08-additive-fixed', 'mod-08-additive-var',
      'mod-08-pwm', 'mod-08-osc-sync'
    ]
  },
  {
    id: 'modulation',
    modules: ['mod-09-amp-mod', 'mod-09-freq-mod', 'mod-09-auto-mod']
  },
  { id: 'distortion', modules: ['mod-10-chebyshev', 'mod-10-distortion'] }
]

export const MODULE_DEFINITIONS = {
  'mod-00-sources': {
    id: 'mod-00-sources',
    name: { fr: '00-Sources', en: '00-Sources' },
    category: 'sources',
    component: 'Mod00Sources'
  }
  // Additional modules will be registered as they are implemented
}

export const useModuleRegistryStore = defineStore('moduleRegistry', {
  state() {
    return {
      activeModuleId: 'mod-00-sources',
      modules: MODULE_DEFINITIONS,
      categories: MODULE_CATEGORIES
    }
  },

  getters: {
    activeModule(state) {
      return state.modules[state.activeModuleId] || null
    },

    availableModules(state) {
      return Object.values(state.modules)
    },

    categorizedModules(state) {
      return state.categories.map(cat => ({
        ...cat,
        modules: cat.modules
          .filter(id => state.modules[id])
          .map(id => state.modules[id])
      })).filter(cat => cat.modules.length > 0)
    }
  },

  actions: {
    setActiveModule(moduleId) {
      if (this.modules[moduleId]) {
        this.activeModuleId = moduleId
      }
    }
  }
})
