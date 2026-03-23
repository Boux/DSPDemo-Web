// Phase vocoder processor implementing STFT analysis/synthesis with overlap-add.
// Supports operations: filter (per-bin amplitude scaling), multiply (cross-synthesis),
// buffer (record/playback), delay (per-bin delay).

class PhaseVocoderProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super()
    const fftSize = (options.processorOptions && options.processorOptions.fftSize) || 1024
    this.fftSize = fftSize
    this.halfSize = fftSize / 2
    this.hopSize = fftSize / 4
    this.hopCounter = 0

    // Input buffer (circular)
    this.inputBuffer = new Float32Array(fftSize)
    this.inputWritePos = 0

    // Output overlap-add buffer
    this.outputBuffer = new Float32Array(fftSize * 2)
    this.outputReadPos = 0

    // Hanning window
    this.window = new Float32Array(fftSize)
    for (let i = 0; i < fftSize; i++) {
      this.window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / fftSize))
    }

    // Operation mode
    this.mode = 'passthrough' // passthrough, filter, delay
    this.filterGains = new Float32Array(256).fill(1) // 256-point filter curve
    this.delayTimes = new Float32Array(256).fill(0)
    this.delayFeedback = new Float32Array(256).fill(0)

    // Delay buffer for spectral delay (per-bin circular buffers)
    this.maxDelayFrames = 200
    this.delayBufferReal = null
    this.delayBufferImag = null
    this.delayWritePos = 0

    // FFT work arrays
    this.realIn = new Float32Array(fftSize)
    this.imagIn = new Float32Array(fftSize)
    this.realOut = new Float32Array(fftSize)
    this.imagOut = new Float32Array(fftSize)

    this.port.onmessage = (e) => {
      if (e.data.mode !== undefined) this.mode = e.data.mode
      if (e.data.filterGains) this.filterGains = new Float32Array(e.data.filterGains)
      if (e.data.delayTimes) this.delayTimes = new Float32Array(e.data.delayTimes)
      if (e.data.delayFeedback) this.delayFeedback = new Float32Array(e.data.delayFeedback)
    }
  }

  // Simple DFT (not FFT — acceptable for educational purposes at these sizes)
  dft(real, imag, inverse) {
    const n = real.length
    const outR = new Float32Array(n)
    const outI = new Float32Array(n)
    const sign = inverse ? 1 : -1

    for (let k = 0; k < n; k++) {
      let sumR = 0, sumI = 0
      for (let t = 0; t < n; t++) {
        const angle = 2 * Math.PI * t * k / n
        const cos = Math.cos(angle)
        const sin = Math.sin(angle)
        sumR += real[t] * cos + sign * imag[t] * sin
        sumI += sign * (-real[t] * sin) + imag[t] * cos
      }
      if (inverse) {
        outR[k] = sumR / n
        outI[k] = sumI / n
      } else {
        outR[k] = sumR
        outI[k] = sumI
      }
    }
    return { real: outR, imag: outI }
  }

  processFrame() {
    // Window the input
    for (let i = 0; i < this.fftSize; i++) {
      const idx = (this.inputWritePos + i) % this.fftSize
      this.realIn[i] = this.inputBuffer[idx] * this.window[i]
      this.imagIn[i] = 0
    }

    // Forward DFT
    const spectrum = this.dft(this.realIn, this.imagIn, false)

    // Apply operation
    if (this.mode === 'filter') {
      this.applyFilter(spectrum)
    } else if (this.mode === 'delay') {
      this.applyDelay(spectrum)
    }

    // Inverse DFT
    const output = this.dft(spectrum.real, spectrum.imag, true)

    // Overlap-add to output buffer
    for (let i = 0; i < this.fftSize; i++) {
      const idx = (this.outputReadPos + i) % (this.fftSize * 2)
      this.outputBuffer[idx] += output.real[i] * this.window[i]
    }
  }

  applyFilter(spectrum) {
    const halfSize = this.halfSize
    const filterLen = this.filterGains.length
    for (let i = 0; i < halfSize; i++) {
      const fi = Math.min(Math.floor(i / halfSize * filterLen), filterLen - 1)
      const gain = this.filterGains[fi]
      spectrum.real[i] *= gain
      spectrum.imag[i] *= gain
      // Mirror
      if (i > 0 && i < halfSize) {
        spectrum.real[this.fftSize - i] *= gain
        spectrum.imag[this.fftSize - i] *= gain
      }
    }
  }

  applyDelay(spectrum) {
    if (!this.delayBufferReal) {
      this.delayBufferReal = new Array(this.halfSize)
      this.delayBufferImag = new Array(this.halfSize)
      for (let i = 0; i < this.halfSize; i++) {
        this.delayBufferReal[i] = new Float32Array(this.maxDelayFrames)
        this.delayBufferImag[i] = new Float32Array(this.maxDelayFrames)
      }
    }

    const halfSize = this.halfSize
    const filterLen = this.delayTimes.length

    for (let i = 0; i < halfSize; i++) {
      const fi = Math.min(Math.floor(i / halfSize * filterLen), filterLen - 1)
      const delayFrames = Math.floor(this.delayTimes[fi])
      const fb = this.delayFeedback[fi]

      // Write current + feedback into delay buffer
      this.delayBufferReal[i][this.delayWritePos] = spectrum.real[i] + (this.delayBufferReal[i][(this.delayWritePos - delayFrames + this.maxDelayFrames) % this.maxDelayFrames] || 0) * fb
      this.delayBufferImag[i][this.delayWritePos] = spectrum.imag[i] + (this.delayBufferImag[i][(this.delayWritePos - delayFrames + this.maxDelayFrames) % this.maxDelayFrames] || 0) * fb

      // Read delayed
      const readPos = (this.delayWritePos - delayFrames + this.maxDelayFrames) % this.maxDelayFrames
      spectrum.real[i] = this.delayBufferReal[i][readPos]
      spectrum.imag[i] = this.delayBufferImag[i][readPos]
      if (i > 0) {
        spectrum.real[this.fftSize - i] = spectrum.real[i]
        spectrum.imag[this.fftSize - i] = -spectrum.imag[i]
      }
    }
    this.delayWritePos = (this.delayWritePos + 1) % this.maxDelayFrames
  }

  process(inputs, outputs) {
    const input = inputs[0]
    const output = outputs[0]
    if (!input[0] || !output[0]) return true

    const inData = input[0]
    const outData = output[0]

    for (let i = 0; i < inData.length; i++) {
      // Write to circular input buffer
      this.inputBuffer[this.inputWritePos] = inData[i]
      this.inputWritePos = (this.inputWritePos + 1) % this.fftSize

      // Read from output buffer
      outData[i] = this.outputBuffer[this.outputReadPos]
      this.outputBuffer[this.outputReadPos] = 0 // Clear after reading
      this.outputReadPos = (this.outputReadPos + 1) % (this.fftSize * 2)

      // Process a frame every hopSize samples
      this.hopCounter++
      if (this.hopCounter >= this.hopSize) {
        this.hopCounter = 0
        this.processFrame()
      }
    }

    for (let ch = 1; ch < output.length; ch++) {
      output[ch].set(outData)
    }

    return true
  }
}

registerProcessor('phase-vocoder', PhaseVocoderProcessor)
