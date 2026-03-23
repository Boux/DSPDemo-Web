// Granular synthesis processor.
// Schedules overlapping grains from an audio buffer with independent
// position (speed) and pitch (playback rate) control.

class GranularProcessor extends AudioWorkletProcessor {
  constructor() {
    super()
    this.buffer = null
    this.bufferLength = 0
    this.isPlaying = false

    // Parameters
    this.density = 128     // grains per second
    this.grainDur = 0.2    // seconds
    this.deviation = 0.01  // random position deviation
    this.pitch = 1.0       // playback rate within grain

    // Position control
    this.position = 0      // 0..1 normalized position in buffer
    this.posSpeed = 0.5    // position advance rate (0 = freeze)
    this.posPhase = 0

    // Jump/random controls (for reorganize module)
    this.jumpAmount = 0
    this.jumpSpeed = 8
    this.randomAmount = 0
    this.randomSpeed = 8
    this.jumpPhase = 0
    this.randomPhase = 0
    this.jumpOffset = 0
    this.randomOffset = 0

    // Grain pool
    this.maxGrains = 256
    this.grains = new Array(this.maxGrains)
    for (let i = 0; i < this.maxGrains; i++) {
      this.grains[i] = { active: false, pos: 0, speed: 0, durSamples: 0, elapsed: 0 }
    }
    this.grainTimer = 0

    // Hanning window (1024 points)
    this.windowSize = 1024
    this.window = new Float32Array(this.windowSize)
    for (let i = 0; i < this.windowSize; i++) {
      this.window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / this.windowSize))
    }

    this.port.onmessage = (e) => {
      if (e.data.buffer) {
        this.buffer = new Float32Array(e.data.buffer)
        this.bufferLength = this.buffer.length
      }
      if (e.data.play !== undefined) this.isPlaying = e.data.play
      if (e.data.density !== undefined) this.density = e.data.density
      if (e.data.grainDur !== undefined) this.grainDur = e.data.grainDur
      if (e.data.deviation !== undefined) this.deviation = e.data.deviation
      if (e.data.pitch !== undefined) this.pitch = e.data.pitch
      if (e.data.posSpeed !== undefined) this.posSpeed = e.data.posSpeed
      if (e.data.jumpAmount !== undefined) this.jumpAmount = e.data.jumpAmount
      if (e.data.jumpSpeed !== undefined) this.jumpSpeed = e.data.jumpSpeed
      if (e.data.randomAmount !== undefined) this.randomAmount = e.data.randomAmount
      if (e.data.randomSpeed !== undefined) this.randomSpeed = e.data.randomSpeed
    }
  }

  spawnGrain() {
    for (let i = 0; i < this.maxGrains; i++) {
      if (!this.grains[i].active) {
        const g = this.grains[i]
        // Position with deviation + jump + random offsets
        const basePos = this.posPhase + this.jumpOffset + this.randomOffset
        const dev = (Math.random() * 2 - 1) * this.deviation
        let pos = (basePos + dev) % 1
        if (pos < 0) pos += 1

        g.active = true
        g.pos = pos * this.bufferLength
        g.speed = this.pitch + (Math.random() * 0.004 - 0.002) // slight pitch jitter
        g.durSamples = Math.floor(this.grainDur * sampleRate)
        g.elapsed = 0
        return
      }
    }
  }

  process(inputs, outputs) {
    const output = outputs[0]
    const channel = output[0]
    if (!channel || !this.buffer || !this.isPlaying) {
      if (channel) channel.fill(0)
      return true
    }

    const sr = sampleRate
    const grainInterval = sr / this.density

    for (let i = 0; i < channel.length; i++) {
      // Advance position
      this.posPhase += this.posSpeed / (this.bufferLength / sr) / sr
      if (this.posPhase > 1) this.posPhase -= 1
      if (this.posPhase < 0) this.posPhase += 1

      // Jump offset
      this.jumpPhase += this.jumpSpeed / sr
      if (this.jumpPhase >= 1) {
        this.jumpPhase -= 1
        this.jumpOffset = (Math.random() * 2 - 1) * this.jumpAmount
      }

      // Random offset
      this.randomPhase += this.randomSpeed / sr
      if (this.randomPhase >= 1) {
        this.randomPhase -= 1
        this.randomOffset = (Math.random() * 2 - 1) * this.randomAmount
      }

      // Spawn grains
      this.grainTimer++
      if (this.grainTimer >= grainInterval) {
        this.grainTimer = 0
        this.spawnGrain()
      }

      // Mix active grains
      let sample = 0
      for (let g = 0; g < this.maxGrains; g++) {
        const grain = this.grains[g]
        if (!grain.active) continue

        // Window envelope
        const winIdx = Math.floor((grain.elapsed / grain.durSamples) * this.windowSize)
        const env = winIdx < this.windowSize ? this.window[winIdx] : 0

        // Read from buffer with interpolation
        const bufPos = grain.pos % this.bufferLength
        const idx = Math.floor(bufPos)
        const frac = bufPos - idx
        const s0 = this.buffer[idx % this.bufferLength]
        const s1 = this.buffer[(idx + 1) % this.bufferLength]
        sample += (s0 + (s1 - s0) * frac) * env

        // Advance grain
        grain.pos += grain.speed
        grain.elapsed++
        if (grain.elapsed >= grain.durSamples) {
          grain.active = false
        }
      }

      channel[i] = sample * 0.2
    }

    for (let ch = 1; ch < output.length; ch++) {
      output[ch].set(channel)
    }

    return true
  }
}

registerProcessor('granular', GranularProcessor)
