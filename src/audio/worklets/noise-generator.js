class NoiseGeneratorProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    this.type = 0 // 0=white, 1=pink, 2=brown
    // Pink noise filter state (Paul Kellet's algorithm)
    this.b0 = 0; this.b1 = 0; this.b2 = 0
    this.b3 = 0; this.b4 = 0; this.b5 = 0; this.b6 = 0
    // Brown noise state
    this.lastBrown = 0

    this.port.onmessage = (e) => {
      if (e.data.type !== undefined) this.type = e.data.type
    }
  }

  process(inputs, outputs) {
    const output = outputs[0]
    const channel = output[0]
    if (!channel) return true

    for (let i = 0; i < channel.length; i++) {
      const white = Math.random() * 2 - 1

      if (this.type === 0) {
        // White noise
        channel[i] = white
      } else if (this.type === 1) {
        // Pink noise (-3dB/octave) - Paul Kellet's refined method
        this.b0 = 0.99886 * this.b0 + white * 0.0555179
        this.b1 = 0.99332 * this.b1 + white * 0.0750759
        this.b2 = 0.96900 * this.b2 + white * 0.1538520
        this.b3 = 0.86650 * this.b3 + white * 0.3104856
        this.b4 = 0.55000 * this.b4 + white * 0.5329522
        this.b5 = -0.7616 * this.b5 - white * 0.0168980
        channel[i] = (this.b0 + this.b1 + this.b2 + this.b3 + this.b4 + this.b5 + this.b6 + white * 0.5362) * 0.11
        this.b6 = white * 0.115926
      } else {
        // Brown noise (-6dB/octave) - integrated white noise
        this.lastBrown = (this.lastBrown + (0.02 * white)) / 1.02
        channel[i] = this.lastBrown * 3.5
      }
    }

    // Copy to all output channels (mono -> stereo)
    for (let ch = 1; ch < output.length; ch++) {
      output[ch].set(channel)
    }

    return true
  }
}

registerProcessor('noise-generator', NoiseGeneratorProcessor)
