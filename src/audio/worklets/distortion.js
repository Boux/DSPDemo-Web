class DistortionProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    this.type = 0 // 0=clip, 1=rectifier, 2=arctan, 3=waveshaper
    this.drive = 0.5

    this.port.onmessage = (e) => {
      if (e.data.type !== undefined) this.type = e.data.type
      if (e.data.drive !== undefined) this.drive = e.data.drive
    }
  }

  process(inputs, outputs) {
    const input = inputs[0]
    const output = outputs[0]
    if (!input[0] || !output[0]) return true

    const inData = input[0]
    const outData = output[0]
    const drive = this.drive

    for (let i = 0; i < inData.length; i++) {
      const x = inData[i]

      switch (this.type) {
        case 0: {
          // Clipping
          const thresh = Math.max(0.01, 1 - drive)
          outData[i] = Math.max(-thresh, Math.min(thresh, x)) * (0.707 / thresh)
          break
        }
        case 1: {
          // Rectifier: blend between original and abs
          outData[i] = x * (1 - drive) + Math.abs(x) * drive
          break
        }
        case 2: {
          // Arctangent
          const comp = drive * (Math.PI / 4) + (Math.PI / 4)
          outData[i] = Math.atan2(x, (1 - drive) * Math.PI) / comp
          break
        }
        case 3: {
          // Waveshaper: (1+k)*x / (1+k*|x|)
          const clipped = Math.min(drive, 0.999)
          const k = (2 * clipped) / (1 - clipped)
          outData[i] = ((1 + k) * x) / (1 + k * Math.abs(x))
          break
        }
      }
    }

    for (let ch = 1; ch < output.length; ch++) {
      output[ch].set(outData)
    }

    return true
  }
}

registerProcessor('distortion', DistortionProcessor)
