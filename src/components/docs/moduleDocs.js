export const MODULE_DOCS = {
  'mod-00-sources': {
    fr: `Source Sonore - Sélection du son source.

Le menu déroulant permet de sélectionner le son source parmi un choix de sons de synthèse ou une lecture de fichier audio.

Oscillateur multiforme: Forme d'onde classique (sinusoïde, rampe, dent de scie, carrée, triangle, impulsions).
Oscillateur anti-alias: Forme d'onde dont les harmoniques ne dépassent jamais la fréquence de Nyquist.
Fichier sonore: Lecture d'un fichier audio mono ou stéréo.
Générateur de bruit: Bruit blanc, rose ou brun.`,
    en: `Audio Source - Source sound selection.

The dropdown selects the source sound from synthesis options or audio file playback.

Multi-waveform oscillator: Classic waveforms (sine, ramp, sawtooth, square, triangle, pulses).
Anti-alias oscillator: Waveform whose harmonics never exceed the Nyquist frequency.
Sound file: Mono or stereo audio file playback.
Noise generator: White, pink, or brown noise.`
  },
  'mod-01-resampling': {
    fr: `Fréquence d'échantillonnage - Illustre l'effet de l'échantillonnage sur le spectre.

Ré-échantillonnage: Choix de la nouvelle fréquence (sr, sr/2, sr/4, sr/8).
Filtre anti-repliement: Filtre FIR appliqué avant le ré-échantillonnage.
Filtre de reconstruction: Filtre FIR appliqué après le ré-échantillonnage.`,
    en: `Sample Rate - Illustrates the effect of sampling on the frequency spectrum.

Resampling: Choice of new sample rate (sr, sr/2, sr/4, sr/8).
Anti-aliasing filter: FIR filter applied before resampling.
Reconstruction filter: FIR filter applied after resampling.`
  },
  'mod-01-quantize': {
    fr: `Quantification - Illustre l'impact du nombre de bits sur le signal.

# de bits: Pas de quantification, entre 2 et 16 bits.
Signal: Écouter le signal dégradé ou le bruit de quantification seul.
Bruit de dispersion: Ajout de dither pour masquer le bruit de quantification.`,
    en: `Quantization - Illustrates the impact of bit depth on the signal.

# of bits: Quantization step, between 2 and 16 bits.
Signal: Listen to the degraded signal or quantization noise alone.
Dither noise: Added to mask quantization noise.`
  },
  'mod-02-filters': {
    fr: `Comparaison des filtres - Compare l'effet des principaux filtres.

Type: Passe-bas, passe-haut, passe-bande, réjecteur, crête/creux, dégradés.
Fréquence: Fréquence de coupure ou centrale en Hz.
Q: Facteur de qualité du filtre.
Gain: Pour les filtres d'égalisation.
Ordre: Nombre de cascades du filtre (2, 4, 6, 8).`,
    en: `Filter Comparison - Compares the effect of main filter types.

Type: Lowpass, highpass, bandpass, bandstop, peak/notch, shelving.
Frequency: Cutoff or center frequency in Hz.
Q: Quality factor of the filter.
Gain: For equalization filters.
Order: Number of cascaded filter stages (2, 4, 6, 8).`
  },
  'mod-03-fixed-delay': {
    fr: `Délais fixes - Visualise l'effet du temps de délai.

Effets: Filtre passe-bas (très courts délais), filtres en peigne (0.1-50 ms), échos (>50 ms).
Rouge: signal original. Vert: signal délayé. Bleu: addition des deux.`,
    en: `Fixed Delays - Visualizes the effect of delay time.

Effects: Lowpass filter (very short delays), comb filters (0.1-50 ms), echoes (>50 ms).
Red: original signal. Green: delayed signal. Blue: sum of both.`
  },
  'mod-03-variable-delay': {
    fr: `Délais variables - Ligne de délai modulée par un LFO.

Flanger typique: LFO 0.1 Hz, délai 5 ms, profondeur 99%.
Chorus typique: LFO 3 Hz, délai 12 ms, profondeur 5%.`,
    en: `Variable Delays - Delay line modulated by an LFO.

Typical flanger: LFO 0.1 Hz, delay 5 ms, depth 99%.
Typical chorus: LFO 3 Hz, delay 12 ms, depth 5%.`
  },
  'mod-03-phasing': {
    fr: `Phasing - 12 filtres passe-tout d'ordre second.

La différence entre flanger et phaser: dans un phaser, le nombre de pics dépend du nombre de filtres et leur répartition dépend des fréquences centrales.`,
    en: `Phasing - 12 second-order allpass filters.

The difference between flanger and phaser: in a phaser, the number of peaks depends on the number of filters and their distribution depends on center frequencies.`
  },
  'mod-03-transpose': {
    fr: `Transposition - Transposition dans le domaine temporel à l'aide de deux lignes de délai superposées.`,
    en: `Transposition - Time-domain pitch shifting using two overlapping delay lines.`
  },
  'mod-03-reverb': {
    fr: `Réverbération - Divers algorithmes: Schroeder (modèles 1 et 2), Freeverb, réseau de délais récursifs (FDN), et réverbe par convolution.`,
    en: `Reverberation - Various algorithms: Schroeder (models 1 and 2), Freeverb, feedback delay network (FDN), and convolution reverb.`
  },
  'mod-04-panning': {
    fr: `Panoramisation - Compare trois algorithmes: linéaire (-6 dB au centre), sinus/cosinus (intensité constante), racine carrée (compromis).`,
    en: `Panning - Compares three algorithms: linear (-6 dB at center), sine/cosine (constant intensity), square root (compromise).`
  },
  'mod-04-binaural': {
    fr: `Spatialisation binaurale en 3D - Panoramisation 3D en stéréo avec HRTF. Écoutez avec des écouteurs!`,
    en: `3D Binaural Spatialization - 3D stereo panning with HRTF. Listen with headphones!`
  },
  'mod-05-peak-rms': {
    fr: `Valeur crête vs RMS - Illustre la différence entre la valeur crête (peak) et la valeur efficace (RMS).`,
    en: `Peak vs RMS - Illustrates the difference between peak value and RMS (root mean square) value.`
  },
  'mod-05-env-follower': {
    fr: `Suivi d'amplitude - L'enveloppe d'amplitude de la source contrôle l'amplitude d'un bruit rose.`,
    en: `Envelope Follower - The source's amplitude envelope controls the amplitude of pink noise.`
  },
  'mod-05-gate': {
    fr: `Porte de bruit - Lorsque l'amplitude passe sous le seuil, le signal est coupé avec les temps d'attaque et de relâche spécifiés.`,
    en: `Noise Gate - When amplitude falls below threshold, the signal is cut with specified attack and release times.`
  },
  'mod-05-compressor': {
    fr: `Compresseur - Compresse le signal au-dessus du seuil selon le ratio. Avec seuil ~0 dB et ratio 50-100, agit comme limiteur.`,
    en: `Compressor - Compresses signal above threshold according to ratio. With threshold ~0 dB and ratio 50-100, acts as a limiter.`
  },
  'mod-05-mb-compressor': {
    fr: `Compresseur Multi-Bande - Compression indépendante sur 4 bandes: 0-150, 150-600, 600-3200, 3200+ Hz.`,
    en: `Multiband Compressor - Independent compression on 4 bands: 0-150, 150-600, 600-3200, 3200+ Hz.`
  },
  'mod-06-vocoder': {
    fr: `Vocodeur - Suivi d'amplitude sur les bandes de fréquence de l'analyseur, appliqué au synthétiseur.`,
    en: `Vocoder - Amplitude tracking on analyzer frequency bands, applied to synthesizer bands.`
  },
  'mod-06-spectral-filter': {
    fr: `Filtrage spectral - Analyse FFT puis contrôle du volume de chaque tranche de fréquence via un graphique à bande dessinable.`,
    en: `Spectral Filtering - FFT analysis then per-frequency-bin volume control via a drawable bar graph.`
  },
  'mod-06-cross-synth': {
    fr: `Synthèse croisée - Multiplication des spectres de deux signaux pour appliquer le profil spectral de l'un sur l'autre.`,
    en: `Cross Synthesis - Multiplying the spectra of two signals to apply one's spectral profile onto the other.`
  },
  'mod-06-spectral-playback': {
    fr: `Vitesse et Hauteur Indépendantes - Vocodeur de phase permettant un contrôle indépendant de la vitesse et de la hauteur.`,
    en: `Independent Speed & Pitch - Phase vocoder allowing independent control of playback speed and pitch.`
  },
  'mod-06-spectral-delay': {
    fr: `Délai Spectral - Chaque tranche de fréquence peut être délayée indépendamment avec récursion.`,
    en: `Spectral Delay - Each frequency bin can be delayed independently with feedback.`
  },
  'mod-07-granular-playback': {
    fr: `Granulation - Vitesse et Hauteur Indépendantes. Le point de départ des grains est indépendant de la vitesse de lecture dans le grain. Vitesse 0 = gel du son!`,
    en: `Granulation - Independent Speed & Pitch. Grain start position is independent of playback speed within the grain. Speed 0 = sound freeze!`
  },
  'mod-07-granular-reorg': {
    fr: `Réorganisation temporelle - Sauts et déplacements aléatoires de la position de lecture par granulation.`,
    en: `Temporal Reorganization - Jumps and random displacements of playback position through granulation.`
  },
  'mod-08-additive-fixed': {
    fr: `Sommation de sinusoïdes - Construction graduelle de formes d'onde par sommation d'harmoniques.
Dent de scie: toutes les harmoniques, A(n) = 1/n.
Onde carrée: harmoniques impaires, A(n) = 1/n.
Onde triangulaire: harmoniques impaires, A(n) = 1/n², phase alternée.`,
    en: `Sine Summation - Gradual waveform construction by summing harmonics.
Sawtooth: all harmonics, A(n) = 1/n.
Square wave: odd harmonics, A(n) = 1/n.
Triangle wave: odd harmonics, A(n) = 1/n², alternating phase.`
  },
  'mod-08-additive-var': {
    fr: `Synthèse Additive - Jusqu'à 60 partiels avec enveloppe ADSR, réduction d'amplitude et de durée, expansion fréquentielle, et variations aléatoires.`,
    en: `Additive Synthesis - Up to 60 partials with ADSR envelope, amplitude and time damping, frequency expansion, and random variations.`
  },
  'mod-08-pwm': {
    fr: `Modulation de largeur d'impulsion (PWM) - Signal oscillant entre +1 et -1. Le cycle d'ouverture contrôle la proportion de temps dans le positif. 50% = onde carrée.`,
    en: `Pulse Width Modulation (PWM) - Signal oscillating between +1 and -1. Duty cycle controls the proportion of time in positive. 50% = square wave.`
  },
  'mod-08-osc-sync': {
    fr: `Oscillateur synchronisé - L'oscillateur maître remet la phase de l'oscillateur esclave à zéro, créant des formes d'onde riches en harmoniques.`,
    en: `Oscillator Sync - The master oscillator resets the slave oscillator's phase, creating waveforms rich in harmonics.`
  },
  'mod-09-amp-mod': {
    fr: `Modulation d'amplitude - Modulation en anneaux (bipolaire) vs modulation d'amplitude (unipolaire). Le spectre contient la somme et la différence des fréquences.`,
    en: `Amplitude Modulation - Ring modulation (bipolar) vs amplitude modulation (unipolar). Spectrum contains sum and difference frequencies.`
  },
  'mod-09-freq-mod': {
    fr: `Modulation de fréquence (FM) - Algorithme de Chowning. Bandes latérales aux multiples de la fréquence modulante. Ratios entiers = spectre harmonique.`,
    en: `Frequency Modulation (FM) - Chowning's algorithm. Sidebands at multiples of modulator frequency. Integer ratios = harmonic spectrum.`
  },
  'mod-09-auto-mod': {
    fr: `Auto-modulation - L'oscillateur module sa propre fréquence. Équivalent à une FM avec ratio fixé à 1.`,
    en: `Self-Modulation - The oscillator modulates its own frequency. Equivalent to FM with ratio fixed at 1.`
  },
  'mod-10-chebyshev': {
    fr: `Fonctions de Chebychev - Fonction de transfert créée à l'aide des 10 premiers polynômes de Chebychev. La normalisation empêche le dépassement de l'ambitus -1 à 1.`,
    en: `Chebyshev Functions - Transfer function created from the first 10 Chebyshev polynomials. Normalization prevents exceeding the -1 to 1 range.`
  },
  'mod-10-distortion': {
    fr: `Algorithmes de distorsion - Clipping, redresseur d'onde, arctangente, et waveshaper. Filtre passe-bas optionnel après la distorsion.`,
    en: `Distortion Algorithms - Clipping, wave rectifier, arctangent, and waveshaper. Optional lowpass filter after distortion.`
  }
}
