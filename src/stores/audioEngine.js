import { defineStore } from 'pinia'
import { SourcePanelAudio } from '../audio/nodes/SourcePanel'

export const useAudioEngineStore = defineStore('audioEngine', {
  state() {
    return {
      context: null,
      masterGain: null,
      analyserSpectrum: null,
      analyserScope: null,
      analyserVu: null,
      sourcePanel: null,
      isRunning: false,
      isRecording: false,
      sampleRate: 44100,
      volumeDb: -6,
      sourceReady: false
    }
  },

  actions: {
    async init() {
      if (this.context) return

      this.context = new AudioContext()
      this.sampleRate = this.context.sampleRate

      // Master gain
      this.masterGain = this.context.createGain()
      this.masterGain.gain.value = Math.pow(10, this.volumeDb * 0.05)
      this.masterGain.connect(this.context.destination)

      // Analyser for spectrum
      this.analyserSpectrum = this.context.createAnalyser()
      this.analyserSpectrum.fftSize = 2048
      this.analyserSpectrum.smoothingTimeConstant = 0.8

      // Analyser for oscilloscope
      this.analyserScope = this.context.createAnalyser()
      this.analyserScope.fftSize = 2048
      this.analyserScope.smoothingTimeConstant = 0

      // Analyser for VU meter
      this.analyserVu = this.context.createAnalyser()
      this.analyserVu.fftSize = 256
      this.analyserVu.smoothingTimeConstant = 0.8

      // Connect master gain to analysers
      this.masterGain.connect(this.analyserSpectrum)
      this.masterGain.connect(this.analyserScope)
      this.masterGain.connect(this.analyserVu)

      // Init source panel audio
      this.sourcePanel = new SourcePanelAudio(this.context)
      await this.sourcePanel.init()
      this.sourcePanel.output.connect(this.masterGain)
      this.sourceReady = true

      // AudioContext starts suspended
      await this.context.suspend()
    },

    async start() {
      if (!this.context) await this.init()
      await this.context.resume()
      this.isRunning = true
    },

    async stop() {
      if (this.context) {
        await this.context.suspend()
      }
      this.isRunning = false
    },

    setVolume(db) {
      this.volumeDb = db
      if (this.masterGain) {
        this.masterGain.gain.setTargetAtTime(
          Math.pow(10, db * 0.05),
          this.context.currentTime,
          0.02
        )
      }
    },

    connectSource(sourceNode) {
      if (sourceNode && this.masterGain) {
        sourceNode.connect(this.masterGain)
      }
    },

    disconnectSource(sourceNode) {
      if (sourceNode) {
        try {
          sourceNode.disconnect(this.masterGain)
        } catch (e) {
          // Already disconnected
        }
      }
    }
  }
})
