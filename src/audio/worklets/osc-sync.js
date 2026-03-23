// Soft/hard sync oscillator.
// A master phasor resets a slave oscillator's phase.
// Two overlapping slave oscillators with crossfade for soft sync.

class OscSyncProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    this.masterFreq = 172
    this.slaveFreq = 200
    this.xfade = 0 // 0 = hard sync, >0 = soft sync crossfade time in ms

    // Waveform table (default: sine, 8192 samples)
    this.tableSize = 8192
    this.table = new Float32Array(this.tableSize)
    for (let i = 0; i < this.tableSize; i++) {
      this.table[i] = Math.sin(2 * Math.PI * i / this.tableSize)
    }

    this.masterPhase = 0
    this.slavePhase1 = 0
    this.slavePhase2 = 0
    this.overlapIdx = 0 // 0 or 1 — which slave is active
    this.crossfadePhase = 0 // 0..1 for crossfade ramp

    this.port.onmessage = (e) => {
      if (e.data.masterFreq !== undefined) this.masterFreq = e.data.masterFreq
      if (e.data.slaveFreq !== undefined) this.slaveFreq = e.data.slaveFreq
      if (e.data.xfade !== undefined) this.xfade = e.data.xfade
      if (e.data.table) this.table = new Float32Array(e.data.table)
    }
  }

  readTable(phase) {
    const pos = phase * this.tableSize
    const idx = Math.floor(pos)
    const frac = pos - idx
    const s0 = this.table[idx % this.tableSize]
    const s1 = this.table[(idx + 1) % this.tableSize]
    return s0 + (s1 - s0) * frac
  }

  process(inputs, outputs) {
    const output = outputs[0]
    const channel = output[0]
    if (!channel) return true

    const sr = sampleRate
    const masterInc = this.masterFreq / sr
    const slaveInc = this.slaveFreq / sr
    const xfadeSamples = Math.max(1, (this.xfade * 0.001) * sr)

    for (let i = 0; i < channel.length; i++) {
      const prevMaster = this.masterPhase
      this.masterPhase += masterInc
      if (this.masterPhase >= 1) this.masterPhase -= 1

      // Detect master cycle reset
      if (this.masterPhase < prevMaster) {
        this.overlapIdx = 1 - this.overlapIdx
        // Reset the newly active oscillator
        if (this.overlapIdx === 0) {
          this.slavePhase1 = 0
        } else {
          this.slavePhase2 = 0
        }
        this.crossfadePhase = 0
      }

      // Advance slave phases
      this.slavePhase1 += slaveInc
      if (this.slavePhase1 >= 1) this.slavePhase1 -= Math.floor(this.slavePhase1)
      this.slavePhase2 += slaveInc
      if (this.slavePhase2 >= 1) this.slavePhase2 -= Math.floor(this.slavePhase2)

      const s1 = this.readTable(this.slavePhase1)
      const s2 = this.readTable(this.slavePhase2)

      // Crossfade
      this.crossfadePhase = Math.min(1, this.crossfadePhase + 1 / xfadeSamples)
      let fade
      if (this.overlapIdx === 1) {
        fade = this.crossfadePhase
      } else {
        fade = 1 - this.crossfadePhase
      }

      // Smooth crossfade using cosine
      const w = (Math.cos(fade * Math.PI) * 0.5 + 0.5)
      channel[i] = (s1 * w + s2 * (1 - w)) * 0.5
    }

    for (let ch = 1; ch < output.length; ch++) {
      output[ch].set(channel)
    }

    return true
  }
}

registerProcessor('osc-sync', OscSyncProcessor)
