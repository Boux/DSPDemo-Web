// Shared bilingual waveform labels used by AM, FM, Additive, and OscSync modules.
// Each entry maps to a PeriodicWave construction in the module's buildPeriodicWave/buildWaveTable.

export const WAVEFORM_LABELS = [
  { fr: 'Sinus', en: 'Sine' },
  { fr: 'Scie 2', en: 'Saw 2' },
  { fr: 'Scie 5', en: 'Saw 5' },
  { fr: 'Scie 10', en: 'Saw 10' },
  { fr: 'Scie 20', en: 'Saw 20' },
  { fr: 'Carrée 2', en: 'Square 2' },
  { fr: 'Carrée 5', en: 'Square 5' },
  { fr: 'Carrée 10', en: 'Square 10' },
  { fr: 'Carrée 20', en: 'Square 20' },
  { fr: 'Triangle 2', en: 'Triangle 2' },
  { fr: 'Triangle 5', en: 'Triangle 5' },
  { fr: 'Triangle 10', en: 'Triangle 10' },
  { fr: 'Triangle 20', en: 'Triangle 20' }
]

// Variant with different harmonic counts (used by AddSynthVar, OscSync)
export const WAVEFORM_LABELS_ALT = [
  { fr: 'Sinus', en: 'Sine' },
  { fr: 'Scie 5', en: 'Saw 5' },
  { fr: 'Scie 15', en: 'Saw 15' },
  { fr: 'Scie 30', en: 'Saw 30' },
  { fr: 'Scie 60', en: 'Saw 60' },
  { fr: 'Carrée 5', en: 'Square 5' },
  { fr: 'Carrée 15', en: 'Square 15' },
  { fr: 'Carrée 30', en: 'Square 30' },
  { fr: 'Carrée 60', en: 'Square 60' },
  { fr: 'Triangle 3', en: 'Triangle 3' },
  { fr: 'Triangle 6', en: 'Triangle 6' },
  { fr: 'Triangle 12', en: 'Triangle 12' },
  { fr: 'Triangle 24', en: 'Triangle 24' }
]
