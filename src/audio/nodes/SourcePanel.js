// Audio graph management for the 4 source types.
// Each source creates its own nodes. The SourcePanel manages switching
// between sources using a gain-based crossfade.

export class SourcePanelAudio {
  constructor(audioContext) {
    this.ctx = audioContext
    this.output = this.ctx.createGain()
    this.output.gain.value = 1.0

    // Current source gain (for crossfading)
    this.sourceGains = {}
    this.activeSource = null
    this.noiseWorkletReady = false

    // Track the current source frequency for oscilloscope sync.
    // 0 means no periodic frequency (noise, file playback).
    this.currentFrequency = 172

    // LFO source
    this.lfo = null
    this.lfoGain = this.ctx.createGain()
    this.lfoGain.gain.value = 0
    this.lfoGain.connect(this.output)

    // Band-limited source (using PeriodicWave for simplicity)
    this.blOsc = null
    this.blGain = this.ctx.createGain()
    this.blGain.gain.value = 0
    this.blGain.connect(this.output)

    // Sound file source
    this.fileSource = null
    this.fileBuffer = null
    this.fileGain = this.ctx.createGain()
    this.fileGain.gain.value = 0
    this.fileGain.connect(this.output)

    // Noise source
    this.noiseNode = null
    this.noiseGain = this.ctx.createGain()
    this.noiseGain.gain.value = 0
    this.noiseGain.connect(this.output)

    // Audio input source (mic)
    this.inputGain = this.ctx.createGain()
    this.inputGain.gain.value = 0
    this.inputGain.connect(this.output)

    this.sourceGains = {
      lfo: this.lfoGain,
      bandlimited: this.blGain,
      file: this.fileGain,
      noise: this.noiseGain,
      input: this.inputGain
    }
  }

  async init() {
    // Init LFO
    this.lfo = this.ctx.createOscillator()
    this.lfo.type = 'sine'
    this.lfo.frequency.value = 172
    this.lfo.connect(this.lfoGain)
    this.lfo.start()

    // Init band-limited oscillator (PeriodicWave-based)
    this.blOsc = this.ctx.createOscillator()
    this.blOsc.frequency.value = 172
    this._updateBLWaveform(0.25, 0.5)
    this.blOsc.connect(this.blGain)
    this.blOsc.start()

    // Init noise worklet
    try {
      await this.ctx.audioWorklet.addModule(
        new URL('../worklets/noise-generator.js', import.meta.url)
      )
      this.noiseNode = new AudioWorkletNode(this.ctx, 'noise-generator')
      this.noiseNode.connect(this.noiseGain)
      this.noiseWorkletReady = true
    } catch (e) {
      console.warn('Noise worklet failed to load:', e)
    }

    // Default to LFO
    this.switchSource('lfo')
  }

  switchSource(name) {
    const t = this.ctx.currentTime
    const fadeTime = 0.1

    // Mute all, then fade in selected
    for (const [key, gain] of Object.entries(this.sourceGains)) {
      gain.gain.cancelScheduledValues(t)
      if (key === name) {
        gain.gain.setTargetAtTime(1, t + fadeTime * 0.5, fadeTime / 3)
      } else {
        // Hard-set to 0 so it works even on a suspended context
        gain.gain.setValueAtTime(0, t)
      }
    }

    this.activeSource = name

    // Update tracked frequency
    if (name === 'lfo') this.currentFrequency = this.lfo.frequency.value
    else if (name === 'bandlimited') this.currentFrequency = this.blOsc.frequency.value
    else this.currentFrequency = 0
  }

  // LFO controls
  setLFOType(type) {
    // Map from original indices to Web Audio types
    // Original: 0=sine(LFO type 7), 1=ramp(0), 2=sawtooth(1), 3=square(2), 4=triangle(3), 5=pulse-uni(4), 6=pulse-bi(5)
    const typeMap = ['sine', 'sawtooth', 'sawtooth', 'square', 'triangle', 'square', 'square']
    this.lfo.type = typeMap[type] || 'sine'
  }

  setLFOFrequency(freq) {
    this.lfo.frequency.setTargetAtTime(freq, this.ctx.currentTime, 0.05)
    this.currentFrequency = freq
  }

  // Band-limited controls
  setBLFrequency(freq) {
    this.blOsc.frequency.setTargetAtTime(freq, this.ctx.currentTime, 0.05)
    this.currentFrequency = freq
  }

  setBLParams(shape, bright) {
    this._updateBLWaveform(shape, bright)
  }

  _updateBLWaveform(shape, bright) {
    // Generate band-limited waveform using PeriodicWave
    // shape: 0=impulse train, 0.25=saw, 0.7=square, 1.0=triangle
    // bright: 0=sine only, 1=all harmonics
    const numHarmonics = Math.max(1, Math.floor(bright * 64))
    const real = new Float32Array(numHarmonics + 1)
    const imag = new Float32Array(numHarmonics + 1)
    real[0] = 0
    imag[0] = 0

    for (let n = 1; n <= numHarmonics; n++) {
      let amp = 0
      if (shape <= 0.25) {
        // Impulse train -> sawtooth crossfade
        const t = shape / 0.25
        const impulseAmp = 1.0 / numHarmonics
        const sawAmp = 1.0 / n
        amp = impulseAmp * (1 - t) + sawAmp * t
      } else if (shape <= 0.7) {
        // Sawtooth -> square crossfade
        const t = (shape - 0.25) / 0.45
        const sawAmp = 1.0 / n
        const sqrAmp = (n % 2 === 1) ? 1.0 / n : 0
        amp = sawAmp * (1 - t) + sqrAmp * t
      } else {
        // Square -> triangle crossfade
        const t = (shape - 0.7) / 0.3
        const sqrAmp = (n % 2 === 1) ? 1.0 / n : 0
        const triAmp = (n % 2 === 1) ? (((n - 1) / 2 % 2 === 0 ? 1 : -1) / (n * n)) : 0
        amp = sqrAmp * (1 - t) + triAmp * t
      }
      imag[n] = amp
    }

    const wave = this.ctx.createPeriodicWave(real, imag, { disableNormalization: false })
    this.blOsc.setPeriodicWave(wave)
  }

  // Noise controls
  setNoiseType(type) {
    if (this.noiseNode) {
      this.noiseNode.port.postMessage({ type })
    }
  }

  // File controls
  async loadFile(file) {
    const arrayBuffer = await file.arrayBuffer()
    this.fileBuffer = await this.ctx.decodeAudioData(arrayBuffer)
  }

  playFile(loop = false, speed = 1) {
    this.stopFile()
    if (!this.fileBuffer) return

    this.fileSource = this.ctx.createBufferSource()
    this.fileSource.buffer = this.fileBuffer
    this.fileSource.loop = loop
    this.fileSource.playbackRate.value = speed
    this.fileSource.connect(this.fileGain)
    this.fileSource.start()
  }

  stopFile() {
    if (this.fileSource) {
      try { this.fileSource.stop() } catch (e) { /* */ }
      try { this.fileSource.disconnect() } catch (e) { /* */ }
      this.fileSource = null
    }
  }

  setFileSpeed(speed) {
    if (this.fileSource) {
      this.fileSource.playbackRate.setTargetAtTime(speed, this.ctx.currentTime, 0.05)
    }
  }

  setFileLoop(loop) {
    if (this.fileSource) {
      this.fileSource.loop = loop
    }
  }

  destroy() {
    if (this.lfo) { this.lfo.stop(); this.lfo.disconnect() }
    if (this.blOsc) { this.blOsc.stop(); this.blOsc.disconnect() }
    if (this.noiseNode) this.noiseNode.disconnect()
    this.stopFile()
    this.lfoGain.disconnect()
    this.blGain.disconnect()
    this.fileGain.disconnect()
    this.inputGain.disconnect()
    this.noiseGain.disconnect()
    this.output.disconnect()
  }
}
