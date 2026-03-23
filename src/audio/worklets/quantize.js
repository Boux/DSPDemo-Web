class QuantizeProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    this.bits = 16
    this.ditherType = 0 // 0=none, 1=rect, 2=tri, 3=gauss, 4=HP, 5=LP
    this.showNoise = false
    // HP/LP dither state
    this.lastDither = 0

    this.port.onmessage = (e) => {
      if (e.data.bits !== undefined) this.bits = e.data.bits
      if (e.data.ditherType !== undefined) this.ditherType = e.data.ditherType
      if (e.data.showNoise !== undefined) this.showNoise = e.data.showNoise
    }
  }

  generateDither() {
    const steps = Math.pow(2, this.bits) / 2
    const ditherAmp = (1 / steps) * 0.66

    switch (this.ditherType) {
      case 0: return 0
      case 1: // Rectangular
        return (Math.random() * 2 - 1) * ditherAmp
      case 2: // Triangular
        return ((Math.random() + Math.random()) / 2 * 2 - 1) * ditherAmp
      case 3: { // Gaussian (sum of 6 uniforms approximation)
        let sum = 0
        for (let i = 0; i < 6; i++) sum += Math.random()
        return ((sum / 3) - 1) * ditherAmp
      }
      case 4: { // High-pass shaped
        const white = (Math.random() * 2 - 1) * ditherAmp
        const hp = white - this.lastDither
        this.lastDither = white
        return hp
      }
      case 5: { // Low-pass shaped
        const white = (Math.random() * 2 - 1) * ditherAmp
        const lp = (white + this.lastDither) * 0.5
        this.lastDither = white
        return lp
      }
      default: return 0
    }
  }

  process(inputs, outputs) {
    const input = inputs[0]
    const output = outputs[0]
    if (!input[0] || !output[0]) return true

    const inData = input[0]
    const outData = output[0]
    const steps = Math.pow(2, this.bits)
    const halfSteps = steps / 2

    for (let i = 0; i < inData.length; i++) {
      const dither = this.generateDither()
      const sample = inData[i] + dither
      // Quantize
      const quantized = Math.round(sample * halfSteps) / halfSteps

      if (this.showNoise) {
        // Output quantization noise only
        outData[i] = quantized - inData[i]
      } else {
        outData[i] = quantized
      }
    }

    for (let ch = 1; ch < output.length; ch++) {
      output[ch].set(outData)
    }

    return true
  }
}

registerProcessor('quantize', QuantizeProcessor)
