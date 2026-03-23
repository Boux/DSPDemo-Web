import { defineStore } from 'pinia'

export const WINDOW_CHOICES = [
  'Rectangular', 'Hamming', 'Hanning', 'Bartlett',
  'Blackman 3-term', 'Blackman-Harris 4',
  'Blackman-Harris 7', 'Tuckey', 'Half-sine'
]

export const FFT_SIZE_CHOICES = [64, 128, 256, 512, 1024, 2048, 4096, 8192]

export const useUiStateStore = defineStore('uiState', {
  state() {
    return {
      spectrum: {
        freqLog: false,
        magLog: true,
        windowType: 2,
        fftSize: 4,
        amplitude: 0.5,
        zoomMin: 0,
        zoomMax: 0.5
      },
      scope: {
        windowLength: 50,
        amplitude: 0.5
      }
    }
  },

  getters: {
    spectrumFftSize(state) {
      return FFT_SIZE_CHOICES[state.spectrum.fftSize]
    },

    spectrumWindowName(state) {
      return WINDOW_CHOICES[state.spectrum.windowType]
    }
  }
})
