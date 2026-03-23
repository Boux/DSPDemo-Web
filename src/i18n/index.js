import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'
import { loadSettings } from '../utils/settings'

const settings = loadSettings()

const i18n = createI18n({
  legacy: true,
  locale: settings.locale,
  fallbackLocale: 'en',
  messages: { fr, en }
})

export default i18n
