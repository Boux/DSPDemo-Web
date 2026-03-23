// Pulse Width Modulation oscillator with optional anti-alias FIR filter.
// Generates a bipolar square wave (-1/+1) with configurable duty cycle.

class PWMProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    this.freq = 172
    this.duty = 0.5
    this.damp = 0 // FIR kernel half-length (0 = no filter)
    this.phase = 0

    this.port.onmessage = (e) => {
      if (e.data.freq !== undefined) this.freq = e.data.freq
      if (e.data.duty !== undefined) this.duty = e.data.duty
      if (e.data.damp !== undefined) this.damp = e.data.damp
    }
  }

  process(inputs, outputs) {
    const output = outputs[0]
    const channel = output[0]
    if (!channel) return true

    const sr = sampleRate
    const phaseInc = this.freq / sr

    for (let i = 0; i < channel.length; i++) {
      // Raw PWM: +1 if phase < duty, -1 otherwise
      channel[i] = this.phase < this.duty ? 1 : -1
      this.phase += phaseInc
      if (this.phase >= 1) this.phase -= 1
    }

    // Apply simple moving average as anti-alias filter
    if (this.damp > 0) {
      const kernelSize = this.damp * 2
      const temp = new Float32Array(channel.length)
      for (let i = 0; i < channel.length; i++) {
        let sum = 0
        let count = 0
        for (let j = -this.damp; j <= this.damp; j++) {
          const idx = i + j
          if (idx >= 0 && idx < channel.length) {
            sum += channel[idx]
            count++
          }
        }
        temp[i] = sum / count
      }
      channel.set(temp)
    }

    for (let ch = 1; ch < output.length; ch++) {
      output[ch].set(channel)
    }

    return true
  }
}

registerProcessor('pwm', PWMProcessor)
