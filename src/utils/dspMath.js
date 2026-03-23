export function interpFloat(t, v1, v2) {
  return (v2 - v1) * t + v1
}

export function tFromValue(value, v1, v2) {
  if (v2 - v1 === 0) return 1.0
  return (value - v1) / (v2 - v1)
}

export function clamp(v, minv, maxv) {
  return Math.max(minv, Math.min(maxv, v))
}

export function toLog(t, v1, v2) {
  return Math.log10(t / v1) / Math.log10(v2 / v1)
}

export function toExp(t, v1, v2) {
  return Math.pow(10, t * (Math.log10(v2) - Math.log10(v1)) + Math.log10(v1))
}

export function rescale(value, ymin = 0, ymax = 1, ylog = false) {
  if (ylog) {
    const logMin = Math.log(ymin)
    const logMax = Math.log(ymax)
    return Math.exp(logMin + value * (logMax - logMin))
  }
  return ymin + value * (ymax - ymin)
}

export function dbToLinear(db) {
  return Math.pow(10, db * 0.05)
}

export function linearToDb(linear) {
  if (linear <= 0) return -Infinity
  return 20 * Math.log10(linear)
}

export function formatValue(val, integer = false) {
  if (integer) {
    return String(Math.round(val))
  }
  const abs = Math.abs(val)
  if (abs >= 1000) return val.toFixed(0)
  if (abs >= 100) return val.toFixed(1)
  if (abs >= 10) return val.toFixed(2)
  return val.toFixed(3)
}
