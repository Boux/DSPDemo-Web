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
      sourceReady: false,
      // Recording
      mediaRecorder: null,
      recordedChunks: []
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
      if (this.isRecording) {
        this.stopRecording()
      }
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

    startRecording() {
      if (!this.context || !this.masterGain) return

      const dest = this.context.createMediaStreamDestination()
      this.masterGain.connect(dest)

      this.recordedChunks = []
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : 'audio/webm'

      this.mediaRecorder = new MediaRecorder(dest.stream, { mimeType })
      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) this.recordedChunks.push(e.data)
      }
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.recordedChunks, { type: mimeType })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'dspdemo-recording.' + (mimeType.includes('webm') ? 'webm' : 'ogg')
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
        this.recordedChunks = []
      }
      this.mediaRecorder.start()
      this.isRecording = true
    },

    stopRecording() {
      if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
        this.mediaRecorder.stop()
      }
      this.mediaRecorder = null
      this.isRecording = false
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
