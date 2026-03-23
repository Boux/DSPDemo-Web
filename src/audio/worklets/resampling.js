class ResamplingProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    this.factor = 1 // 1=sr, 2=sr/2, 4=sr/4, 8=sr/8
    this.antiAliasOrder = 0 // 0=none, 8/32/128=FIR taps
    this.reconstructOrder = 0
    this.holdValue = 0
    this.counter = 0

    this.port.onmessage = (e) => {
      if (e.data.factor !== undefined) this.factor = e.data.factor
      if (e.data.antiAliasOrder !== undefined) this.antiAliasOrder = e.data.antiAliasOrder
      if (e.data.reconstructOrder !== undefined) this.reconstructOrder = e.data.reconstructOrder
    }
  }

  process(inputs, outputs) {
    const input = inputs[0]
    const output = outputs[0]
    if (!input[0] || !output[0]) return true

    const inData = input[0]
    const outData = output[0]

    for (let i = 0; i < inData.length; i++) {
      // Sample-and-hold decimation
      if (this.counter === 0) {
        this.holdValue = inData[i]
      }
      this.counter++
      if (this.counter >= this.factor) {
        this.counter = 0
      }
      outData[i] = this.holdValue
    }

    // Copy to other channels
    for (let ch = 1; ch < output.length; ch++) {
      output[ch].set(outData)
    }

    return true
  }
}

registerProcessor('resampling', ResamplingProcessor)
