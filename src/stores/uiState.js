import { defineStore } from 'pinia'
import { loadSettings, saveSetting } from '../utils/settings'

export const WINDOW_CHOICES = [
  'Rectangular', 'Hamming', 'Hanning', 'Bartlett',
  'Blackman 3-term', 'Blackman-Harris 4',
  'Blackman-Harris 7', 'Tuckey', 'Half-sine'
]

export const FFT_SIZE_CHOICES = [64, 128, 256, 512, 1024, 2048, 4096, 8192]

const SPECTRUM_DEFAULTS = {
  freqLog: false,
  magLog: true,
  windowType: 2,
  fftSize: 4,
  amplitude: 0.5,
  zoomMin: 0,
  zoomMax: 0.5
}

const SCOPE_DEFAULTS = {
  windowLength: 50,
  amplitude: 0.5,
  autoNormalize: true,
  forceSync: true
}

const settings = loadSettings()

export const useUiStateStore = defineStore('uiState', {
  state() {
    return {
      spectrum: { ...SPECTRUM_DEFAULTS, ...(settings.spectrum || {}) },
      scope: { ...SCOPE_DEFAULTS, ...(settings.scope || {}) }
    }
  },

  getters: {
    spectrumFftSize(state) {
      return FFT_SIZE_CHOICES[state.spectrum.fftSize]
    },

    spectrumWindowName(state) {
      return WINDOW_CHOICES[state.spectrum.windowType]
    }
  },

  actions: {
    saveState() {
      saveSetting('spectrum', { ...this.spectrum })
      saveSetting('scope', { ...this.scope })
    }
  }
})
