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
  },
  'mod-02-filters': {
    id: 'mod-02-filters',
    name: { fr: '02-Filtrage - Comparaison des filtres', en: '02-Filtering - Filter Comparison' },
    category: 'filtering',
    component: 'Mod02Filters'
  },
  'mod-03-fixed-delay': {
    id: 'mod-03-fixed-delay',
    name: { fr: '03-Délai - Délais fixes', en: '03-Delay - Fixed Delays' },
    category: 'delay',
    component: 'Mod03FixedDelay'
  },
  'mod-03-variable-delay': {
    id: 'mod-03-variable-delay',
    name: { fr: '03-Délai - Délais variables', en: '03-Delay - Variable Delays' },
    category: 'delay',
    component: 'Mod03VariableDelay'
  },
  'mod-03-phasing': {
    id: 'mod-03-phasing',
    name: { fr: '03-Délai - Phasing', en: '03-Delay - Phasing' },
    category: 'delay',
    component: 'Mod03Phasing'
  },
  'mod-04-panning': {
    id: 'mod-04-panning',
    name: { fr: '04-Spatialisation - Panoramisation', en: '04-Spatialization - Panning' },
    category: 'spatialization',
    component: 'Mod04Panning'
  },
  'mod-05-peak-rms': {
    id: 'mod-05-peak-rms',
    name: { fr: '05-Dynamique - Valeur crête vs RMS', en: '05-Dynamics - Peak vs RMS' },
    category: 'dynamics',
    component: 'Mod05PeakRMS'
  },
  'mod-09-amp-mod': {
    id: 'mod-09-amp-mod',
    name: { fr: "09-Modulation - Modulation de l'amplitude", en: '09-Modulation - Amplitude Modulation' },
    category: 'modulation',
    component: 'Mod09AmpMod'
  },
  'mod-09-freq-mod': {
    id: 'mod-09-freq-mod',
    name: { fr: '09-Modulation - Modulation de fréquence', en: '09-Modulation - Frequency Modulation' },
    category: 'modulation',
    component: 'Mod09FreqMod'
  },
  'mod-01-resampling': {
    id: 'mod-01-resampling',
    name: { fr: "01-Échantillonnage - Fréquence d'échantillonnage", en: '01-Sampling - Sample Rate' },
    category: 'sampling',
    component: 'Mod01Resampling'
  },
  'mod-01-quantize': {
    id: 'mod-01-quantize',
    name: { fr: '01-Échantillonnage - Quantification', en: '01-Sampling - Quantization' },
    category: 'sampling',
    component: 'Mod01Quantize'
  },
  'mod-05-env-follower': {
    id: 'mod-05-env-follower',
    name: { fr: "05-Dynamique - Suivi d'amplitude", en: '05-Dynamics - Envelope Follower' },
    category: 'dynamics',
    component: 'Mod05EnvFollower'
  },
  'mod-05-gate': {
    id: 'mod-05-gate',
    name: { fr: '05-Dynamique - Porte de bruit', en: '05-Dynamics - Noise Gate' },
    category: 'dynamics',
    component: 'Mod05Gate'
  },
  'mod-05-compressor': {
    id: 'mod-05-compressor',
    name: { fr: '05-Dynamique - Compresseur', en: '05-Dynamics - Compressor' },
    category: 'dynamics',
    component: 'Mod05Compress'
  },
  'mod-09-auto-mod': {
    id: 'mod-09-auto-mod',
    name: { fr: '09-Modulation - Auto-modulation', en: '09-Modulation - Self-Modulation' },
    category: 'modulation',
    component: 'Mod09AutoMod'
  },
  'mod-10-chebyshev': {
    id: 'mod-10-chebyshev',
    name: { fr: '10-Distorsion - Fonctions de Chebychev', en: '10-Distortion - Chebyshev Functions' },
    category: 'distortion',
    component: 'Mod10Chebyshev'
  },
  'mod-10-distortion': {
    id: 'mod-10-distortion',
    name: { fr: '10-Distorsion - Algorithmes de distorsion', en: '10-Distortion - Distortion Algorithms' },
    category: 'distortion',
    component: 'Mod10Distortion'
  }
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
