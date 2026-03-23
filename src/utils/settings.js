const STORAGE_KEY = 'dspdemo-settings'

const DEFAULTS = {
  locale: 'fr'
}

export function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) }
  } catch (e) {
    // corrupted or unavailable
  }
  return { ...DEFAULTS }
}

export function saveSetting(key, value) {
  const settings = loadSettings()
  settings[key] = value
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  } catch (e) {
    // storage full or unavailable
  }
}
