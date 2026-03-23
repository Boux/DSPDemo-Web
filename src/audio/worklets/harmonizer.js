// Pitch shifter using dual overlapping delay lines with linear ramp.
// Based on the Harmonizer algorithm: two read pointers scan through a
// circular buffer at a speed offset from the write pointer, crossfading
// between them to avoid discontinuities.

class HarmonizerProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    this.transpo = -7 // semitones
    this.feedback = 0
    this.bufferSize = 65536
    this.buffer = new Float32Array(this.bufferSize)
    this.writePos = 0
    this.readPos1 = 0
    this.readPos2 = 0
    this.phase = 0 // 0..1 for crossfade
    this.windowSize = 2048 // samples for one ramp cycle
    this.lastOut = 0

    this.port.onmessage = (e) => {
      if (e.data.transpo !== undefined) this.transpo = e.data.transpo
      if (e.data.feedback !== undefined) this.feedback = e.data.feedback
    }
  }

  process(inputs, outputs) {
    const input = inputs[0]
    const output = outputs[0]
    if (!input[0] || !output[0]) return true

    const inData = input[0]
    const outData = output[0]
    const sr = sampleRate

    // Rate offset: how much faster/slower the read pointer moves vs write
    // transpo semitones -> rate = 2^(transpo/12) - 1
    const rate = Math.pow(2, this.transpo / 12) - 1

    for (let i = 0; i < inData.length; i++) {
      // Write input + feedback into buffer
      this.buffer[this.writePos] = inData[i] + this.lastOut * this.feedback

      // Advance phase
      this.phase += 1 / this.windowSize
      if (this.phase >= 1) this.phase -= 1

      // Two read positions, offset by half a window
      const delay1 = this.phase * this.windowSize * Math.abs(rate)
      const delay2 = ((this.phase + 0.5) % 1) * this.windowSize * Math.abs(rate)

      let rp1 = this.writePos - delay1 * (rate >= 0 ? 1 : -1)
      let rp2 = this.writePos - delay2 * (rate >= 0 ? 1 : -1)

      // Wrap read positions
      rp1 = ((rp1 % this.bufferSize) + this.bufferSize) % this.bufferSize
      rp2 = ((rp2 % this.bufferSize) + this.bufferSize) % this.bufferSize

      // Linear interpolation for sub-sample reading
      const idx1 = Math.floor(rp1)
      const frac1 = rp1 - idx1
      const s1 = this.buffer[idx1] * (1 - frac1) + this.buffer[(idx1 + 1) % this.bufferSize] * frac1

      const idx2 = Math.floor(rp2)
      const frac2 = rp2 - idx2
      const s2 = this.buffer[idx2] * (1 - frac2) + this.buffer[(idx2 + 1) % this.bufferSize] * frac2

      // Crossfade: cos^2 window
      const fade = this.phase
      const w1 = Math.cos(fade * Math.PI) * 0.5 + 0.5
      const w2 = 1 - w1

      outData[i] = s1 * w1 + s2 * w2
      this.lastOut = outData[i]

      this.writePos = (this.writePos + 1) % this.bufferSize
    }

    for (let ch = 1; ch < output.length; ch++) {
      output[ch].set(outData)
    }

    return true
  }
}

registerProcessor('harmonizer', HarmonizerProcessor)
