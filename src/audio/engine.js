// Audio engine utilities
// The core AudioContext and node management lives in the Pinia store (stores/audioEngine.js).
// This file provides helper functions for audio operations.

export function dbToLinear(db) {
  return Math.pow(10, db * 0.05)
}

export function linearToDb(linear) {
  if (linear <= 0) return -Infinity
  return 20 * Math.log10(linear)
}

export function rescale(value, ymin = 0, ymax = 1, ylog = false) {
  if (ylog) {
    const logMin = Math.log(ymin)
    const logMax = Math.log(ymax)
    return Math.exp(logMin + value * (logMax - logMin))
  }
  return ymin + value * (ymax - ymin)
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}
