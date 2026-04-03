const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./__vite-browser-external-D6v0R7Vd.js","./chunk-f7LOQL_L.js"])))=>i.map(i=>d[i]);
import { r as __toESM } from "./chunk-f7LOQL_L.js";
import { C as renderList, D as normalizeClass, E as withDirectives, O as toDisplayString, S as openBlock, T as resolveDynamicComponent, _ as createBlock, a as interpFloat, b as createTextVNode, c as toLog, d as useModuleRegistryStore, f as __vitePreload, g as createBaseVNode, h as Fragment, i as formatValue, l as useAudioEngineStore, m as vModelSelect, n as EditableValue_default, o as tFromValue, p as vModelCheckbox, r as clamp, s as toExp, t as LabelKnob_default, u as _plugin_vue_export_helper_default, v as createCommentVNode, w as resolveComponent, x as createVNode, y as createElementBlock } from "./index-CoteY__X.js";
//#region src/components/docs/moduleDocs.js
var MODULE_DOCS = {
	"mod-00-sources": {
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
	"mod-01-resampling": {
		fr: `Fréquence d'échantillonnage - Illustre l'effet de l'échantillonnage sur le spectre.

Ré-échantillonnage: Choix de la nouvelle fréquence (sr, sr/2, sr/4, sr/8).
Filtre anti-repliement: Filtre FIR appliqué avant le ré-échantillonnage.
Filtre de reconstruction: Filtre FIR appliqué après le ré-échantillonnage.`,
		en: `Sample Rate - Illustrates the effect of sampling on the frequency spectrum.

Resampling: Choice of new sample rate (sr, sr/2, sr/4, sr/8).
Anti-aliasing filter: FIR filter applied before resampling.
Reconstruction filter: FIR filter applied after resampling.`
	},
	"mod-01-quantize": {
		fr: `Quantification - Illustre l'impact du nombre de bits sur le signal.

# de bits: Pas de quantification, entre 2 et 16 bits.
Signal: Écouter le signal dégradé ou le bruit de quantification seul.
Bruit de dispersion: Ajout de dither pour masquer le bruit de quantification.`,
		en: `Quantization - Illustrates the impact of bit depth on the signal.

# of bits: Quantization step, between 2 and 16 bits.
Signal: Listen to the degraded signal or quantization noise alone.
Dither noise: Added to mask quantization noise.`
	},
	"mod-02-filters": {
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
	"mod-03-fixed-delay": {
		fr: `Délais fixes - Visualise l'effet du temps de délai.

Effets: Filtre passe-bas (très courts délais), filtres en peigne (0.1-50 ms), échos (>50 ms).
Rouge: signal original. Vert: signal délayé. Bleu: addition des deux.`,
		en: `Fixed Delays - Visualizes the effect of delay time.

Effects: Lowpass filter (very short delays), comb filters (0.1-50 ms), echoes (>50 ms).
Red: original signal. Green: delayed signal. Blue: sum of both.`
	},
	"mod-03-variable-delay": {
		fr: `Délais variables - Ligne de délai modulée par un LFO.

Flanger typique: LFO 0.1 Hz, délai 5 ms, profondeur 99%.
Chorus typique: LFO 3 Hz, délai 12 ms, profondeur 5%.`,
		en: `Variable Delays - Delay line modulated by an LFO.

Typical flanger: LFO 0.1 Hz, delay 5 ms, depth 99%.
Typical chorus: LFO 3 Hz, delay 12 ms, depth 5%.`
	},
	"mod-03-phasing": {
		fr: `Phasing - 12 filtres passe-tout d'ordre second.

La différence entre flanger et phaser: dans un phaser, le nombre de pics dépend du nombre de filtres et leur répartition dépend des fréquences centrales.`,
		en: `Phasing - 12 second-order allpass filters.

The difference between flanger and phaser: in a phaser, the number of peaks depends on the number of filters and their distribution depends on center frequencies.`
	},
	"mod-03-transpose": {
		fr: `Transposition - Transposition dans le domaine temporel à l'aide de deux lignes de délai superposées.`,
		en: `Transposition - Time-domain pitch shifting using two overlapping delay lines.`
	},
	"mod-03-reverb": {
		fr: `Réverbération - Divers algorithmes: Schroeder (modèles 1 et 2), Freeverb, réseau de délais récursifs (FDN), et réverbe par convolution.`,
		en: `Reverberation - Various algorithms: Schroeder (models 1 and 2), Freeverb, feedback delay network (FDN), and convolution reverb.`
	},
	"mod-04-panning": {
		fr: `Panoramisation - Compare trois algorithmes: linéaire (-6 dB au centre), sinus/cosinus (intensité constante), racine carrée (compromis).`,
		en: `Panning - Compares three algorithms: linear (-6 dB at center), sine/cosine (constant intensity), square root (compromise).`
	},
	"mod-04-binaural": {
		fr: `Spatialisation binaurale en 3D - Panoramisation 3D en stéréo avec HRTF. Écoutez avec des écouteurs!`,
		en: `3D Binaural Spatialization - 3D stereo panning with HRTF. Listen with headphones!`
	},
	"mod-05-peak-rms": {
		fr: `Valeur crête vs RMS - Illustre la différence entre la valeur crête (peak) et la valeur efficace (RMS).`,
		en: `Peak vs RMS - Illustrates the difference between peak value and RMS (root mean square) value.`
	},
	"mod-05-env-follower": {
		fr: `Suivi d'amplitude - L'enveloppe d'amplitude de la source contrôle l'amplitude d'un bruit rose.`,
		en: `Envelope Follower - The source's amplitude envelope controls the amplitude of pink noise.`
	},
	"mod-05-gate": {
		fr: `Porte de bruit - Lorsque l'amplitude passe sous le seuil, le signal est coupé avec les temps d'attaque et de relâche spécifiés.`,
		en: `Noise Gate - When amplitude falls below threshold, the signal is cut with specified attack and release times.`
	},
	"mod-05-compressor": {
		fr: `Compresseur - Compresse le signal au-dessus du seuil selon le ratio. Avec seuil ~0 dB et ratio 50-100, agit comme limiteur.`,
		en: `Compressor - Compresses signal above threshold according to ratio. With threshold ~0 dB and ratio 50-100, acts as a limiter.`
	},
	"mod-05-mb-compressor": {
		fr: `Compresseur Multi-Bande - Compression indépendante sur 4 bandes: 0-150, 150-600, 600-3200, 3200+ Hz.`,
		en: `Multiband Compressor - Independent compression on 4 bands: 0-150, 150-600, 600-3200, 3200+ Hz.`
	},
	"mod-06-vocoder": {
		fr: `Vocodeur - Suivi d'amplitude sur les bandes de fréquence de l'analyseur, appliqué au synthétiseur.`,
		en: `Vocoder - Amplitude tracking on analyzer frequency bands, applied to synthesizer bands.`
	},
	"mod-06-spectral-filter": {
		fr: `Filtrage spectral - Analyse FFT puis contrôle du volume de chaque tranche de fréquence via un graphique à bande dessinable.`,
		en: `Spectral Filtering - FFT analysis then per-frequency-bin volume control via a drawable bar graph.`
	},
	"mod-06-cross-synth": {
		fr: `Synthèse croisée - Multiplication des spectres de deux signaux pour appliquer le profil spectral de l'un sur l'autre.`,
		en: `Cross Synthesis - Multiplying the spectra of two signals to apply one's spectral profile onto the other.`
	},
	"mod-06-spectral-playback": {
		fr: `Vitesse et Hauteur Indépendantes - Vocodeur de phase permettant un contrôle indépendant de la vitesse et de la hauteur.`,
		en: `Independent Speed & Pitch - Phase vocoder allowing independent control of playback speed and pitch.`
	},
	"mod-06-spectral-delay": {
		fr: `Délai Spectral - Chaque tranche de fréquence peut être délayée indépendamment avec récursion.`,
		en: `Spectral Delay - Each frequency bin can be delayed independently with feedback.`
	},
	"mod-07-granular-playback": {
		fr: `Granulation - Vitesse et Hauteur Indépendantes. Le point de départ des grains est indépendant de la vitesse de lecture dans le grain. Vitesse 0 = gel du son!`,
		en: `Granulation - Independent Speed & Pitch. Grain start position is independent of playback speed within the grain. Speed 0 = sound freeze!`
	},
	"mod-07-granular-reorg": {
		fr: `Réorganisation temporelle - Sauts et déplacements aléatoires de la position de lecture par granulation.`,
		en: `Temporal Reorganization - Jumps and random displacements of playback position through granulation.`
	},
	"mod-08-additive-fixed": {
		fr: `Sommation de sinusoïdes - Construction graduelle de formes d'onde par sommation d'harmoniques.
Dent de scie: toutes les harmoniques, A(n) = 1/n.
Onde carrée: harmoniques impaires, A(n) = 1/n.
Onde triangulaire: harmoniques impaires, A(n) = 1/n², phase alternée.`,
		en: `Sine Summation - Gradual waveform construction by summing harmonics.
Sawtooth: all harmonics, A(n) = 1/n.
Square wave: odd harmonics, A(n) = 1/n.
Triangle wave: odd harmonics, A(n) = 1/n², alternating phase.`
	},
	"mod-08-additive-var": {
		fr: `Synthèse Additive - Jusqu'à 60 partiels avec enveloppe ADSR, réduction d'amplitude et de durée, expansion fréquentielle, et variations aléatoires.`,
		en: `Additive Synthesis - Up to 60 partials with ADSR envelope, amplitude and time damping, frequency expansion, and random variations.`
	},
	"mod-08-pwm": {
		fr: `Modulation de largeur d'impulsion (PWM) - Signal oscillant entre +1 et -1. Le cycle d'ouverture contrôle la proportion de temps dans le positif. 50% = onde carrée.`,
		en: `Pulse Width Modulation (PWM) - Signal oscillating between +1 and -1. Duty cycle controls the proportion of time in positive. 50% = square wave.`
	},
	"mod-08-osc-sync": {
		fr: `Oscillateur synchronisé - L'oscillateur maître remet la phase de l'oscillateur esclave à zéro, créant des formes d'onde riches en harmoniques.`,
		en: `Oscillator Sync - The master oscillator resets the slave oscillator's phase, creating waveforms rich in harmonics.`
	},
	"mod-09-amp-mod": {
		fr: `Modulation d'amplitude - Modulation en anneaux (bipolaire) vs modulation d'amplitude (unipolaire). Le spectre contient la somme et la différence des fréquences.`,
		en: `Amplitude Modulation - Ring modulation (bipolar) vs amplitude modulation (unipolar). Spectrum contains sum and difference frequencies.`
	},
	"mod-09-freq-mod": {
		fr: `Modulation de fréquence (FM) - Algorithme de Chowning. Bandes latérales aux multiples de la fréquence modulante. Ratios entiers = spectre harmonique.`,
		en: `Frequency Modulation (FM) - Chowning's algorithm. Sidebands at multiples of modulator frequency. Integer ratios = harmonic spectrum.`
	},
	"mod-09-auto-mod": {
		fr: `Auto-modulation - L'oscillateur module sa propre fréquence. Équivalent à une FM avec ratio fixé à 1.`,
		en: `Self-Modulation - The oscillator modulates its own frequency. Equivalent to FM with ratio fixed at 1.`
	},
	"mod-10-chebyshev": {
		fr: `Fonctions de Chebychev - Fonction de transfert créée à l'aide des 10 premiers polynômes de Chebychev. La normalisation empêche le dépassement de l'ambitus -1 à 1.`,
		en: `Chebyshev Functions - Transfer function created from the first 10 Chebyshev polynomials. Normalization prevents exceeding the -1 to 1 range.`
	},
	"mod-10-distortion": {
		fr: `Algorithmes de distorsion - Clipping, redresseur d'onde, arctangente, et waveshaper. Filtre passe-bas optionnel après la distorsion.`,
		en: `Distortion Algorithms - Clipping, wave rectifier, arctangent, and waveshaper. Optional lowpass filter after distortion.`
	}
};
//#endregion
//#region src/components/docs/ModuleDoc.vue
var _sfc_main$42 = {
	name: "ModuleDoc",
	props: { moduleId: {
		type: String,
		required: true
	} },
	data() {
		return { showDoc: false };
	},
	computed: {
		locale() {
			return this.$i18n.locale;
		},
		docText() {
			const doc = MODULE_DOCS[this.moduleId];
			if (!doc) return null;
			return doc[this.locale] || doc.fr || null;
		}
	},
	watch: { moduleId() {
		this.showDoc = false;
	} }
};
var _hoisted_1$42 = {
	key: 0,
	class: "module-doc"
};
var _hoisted_2$41 = {
	key: 0,
	class: "module-doc__content"
};
var _hoisted_3$37 = { class: "module-doc__text" };
function _sfc_render$42(_ctx, _cache, $props, $setup, $data, $options) {
	return $options.docText ? (openBlock(), createElementBlock("div", _hoisted_1$42, [createBaseVNode("button", {
		class: "toggle-btn module-doc__toggle",
		onClick: _cache[0] || (_cache[0] = ($event) => $data.showDoc = !$data.showDoc)
	}, toDisplayString($data.showDoc ? $options.locale === "fr" ? "Masquer la doc" : "Hide docs" : $options.locale === "fr" ? "Documentation" : "Documentation"), 1), $data.showDoc ? (openBlock(), createElementBlock("div", _hoisted_2$41, [createBaseVNode("pre", _hoisted_3$37, toDisplayString($options.docText), 1)])) : createCommentVNode("", true)])) : createCommentVNode("", true);
}
var ModuleDoc_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$42, [["render", _sfc_render$42]]);
//#endregion
//#region src/components/controls/ControlSlider.vue
var _sfc_main$41 = {
	name: "ControlSlider",
	components: { EditableValue: EditableValue_default },
	props: {
		label: {
			type: String,
			default: ""
		},
		modelValue: {
			type: Number,
			default: 0
		},
		mini: {
			type: Number,
			default: 0
		},
		maxi: {
			type: Number,
			default: 1
		},
		log: {
			type: Boolean,
			default: false
		},
		integer: {
			type: Boolean,
			default: false
		},
		defaultValue: {
			type: Number,
			default: null
		}
	},
	emits: ["update:modelValue"],
	computed: {
		normalizedValue() {
			if (this.log) return toLog(clamp(this.modelValue, this.mini, this.maxi), this.mini, this.maxi);
			return tFromValue(clamp(this.modelValue, this.mini, this.maxi), this.mini, this.maxi);
		},
		displayValue() {
			return formatValue(this.modelValue, this.integer);
		}
	},
	methods: {
		onInput(e) {
			const t = parseFloat(e.target.value);
			let val;
			if (this.log) val = toExp(t, this.mini, this.maxi);
			else val = interpFloat(t, this.mini, this.maxi);
			if (this.integer) val = Math.round(val);
			this.$emit("update:modelValue", val);
		},
		onTextSubmit(parsed) {
			let val = clamp(parsed, this.mini, this.maxi);
			if (this.integer) val = Math.round(val);
			this.$emit("update:modelValue", val);
		},
		resetToDefault() {
			if (this.defaultValue !== null) this.$emit("update:modelValue", this.defaultValue);
		}
	}
};
var _hoisted_1$41 = { class: "control-slider" };
var _hoisted_2$40 = {
	key: 0,
	class: "control-slider__label"
};
var _hoisted_3$36 = { class: "control-slider__row" };
var _hoisted_4$26 = ["value"];
function _sfc_render$41(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_EditableValue = resolveComponent("EditableValue");
	return openBlock(), createElementBlock("div", _hoisted_1$41, [$props.label ? (openBlock(), createElementBlock("label", _hoisted_2$40, toDisplayString($props.label), 1)) : createCommentVNode("", true), createBaseVNode("div", _hoisted_3$36, [createBaseVNode("input", {
		ref: "range",
		type: "range",
		min: 0,
		max: 1,
		step: .001,
		value: $options.normalizedValue,
		class: "control-slider__input",
		onInput: _cache[0] || (_cache[0] = (...args) => $options.onInput && $options.onInput(...args)),
		onDblclick: _cache[1] || (_cache[1] = (...args) => $options.resetToDefault && $options.resetToDefault(...args))
	}, null, 40, _hoisted_4$26), createVNode(_component_EditableValue, {
		display: $options.displayValue,
		onSubmit: $options.onTextSubmit,
		onReset: $options.resetToDefault
	}, null, 8, [
		"display",
		"onSubmit",
		"onReset"
	])])]);
}
var ControlSlider_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$41, [["render", _sfc_render$41]]);
//#endregion
//#region src/components/source/LFOSource.vue
var waveIcons = {
	sine: "<svg width=\"20\" height=\"12\" viewBox=\"0 0 20 12\"><path d=\"M1 6 Q5 0, 10 6 Q15 12, 19 6\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\"/></svg>",
	ramp: "<svg width=\"20\" height=\"12\" viewBox=\"0 0 20 12\"><path d=\"M2 10 L10 2 L10 10 L18 2 L18 10\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
	saw: "<svg width=\"20\" height=\"12\" viewBox=\"0 0 20 12\"><path d=\"M2 10 L2 2 L10 10 L10 2 L18 10\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
	square: "<svg width=\"20\" height=\"12\" viewBox=\"0 0 20 12\"><path d=\"M1 10 L1 2 L6 2 L6 10 L11 10 L11 2 L16 2 L16 10 L19 10\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
	triangle: "<svg width=\"20\" height=\"12\" viewBox=\"0 0 20 12\"><path d=\"M1 6 L5 2 L10 10 L15 2 L19 6\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
	uniPulse: "<svg width=\"20\" height=\"12\" viewBox=\"0 0 20 12\"><path d=\"M1 10 L4 10 L4 2 L6 2 L6 10 L14 10 L14 2 L16 2 L16 10 L19 10\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
	biPulse: "<svg width=\"20\" height=\"12\" viewBox=\"0 0 20 12\"><path d=\"M1 6 L3 6 L3 2 L5 2 L5 6 L7 6 L7 10 L9 10 L9 6 L13 6 L13 2 L15 2 L15 6 L17 6 L17 10 L19 10 L19 6\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"
};
var _sfc_main$40 = {
	name: "LFOSource",
	components: { ControlSlider: ControlSlider_default },
	props: { audio: {
		type: Object,
		default: null
	} },
	data() {
		return {
			waveType: 0,
			frequency: 172,
			waveTypes: [
				{
					label: {
						fr: "Sinusoïde",
						en: "Sine"
					},
					icon: waveIcons.sine
				},
				{
					label: {
						fr: "Rampe",
						en: "Ramp"
					},
					icon: waveIcons.ramp
				},
				{
					label: {
						fr: "Dent de scie",
						en: "Sawtooth"
					},
					icon: waveIcons.saw
				},
				{
					label: {
						fr: "Carrée",
						en: "Square"
					},
					icon: waveIcons.square
				},
				{
					label: {
						fr: "Triangle",
						en: "Triangle"
					},
					icon: waveIcons.triangle
				},
				{
					label: {
						fr: "Impulsion unipolaire",
						en: "Unipolar Pulse"
					},
					icon: waveIcons.uniPulse
				},
				{
					label: {
						fr: "Impulsion bipolaire",
						en: "Bipolar Pulse"
					},
					icon: waveIcons.biPulse
				}
			]
		};
	},
	watch: { audio(val) {
		if (val) this.syncAudio();
	} },
	mounted() {
		if (this.audio) this.syncAudio();
	},
	methods: {
		syncAudio() {
			this.audio.setLFOType(this.waveType);
			this.audio.setLFOFrequency(this.frequency);
		},
		selectWave(i) {
			this.waveType = i;
			if (this.audio) this.audio.setLFOType(i);
		},
		onFreqChange(val) {
			this.frequency = val;
			if (this.audio) this.audio.setLFOFrequency(val);
		}
	}
};
var _hoisted_1$40 = { class: "lfo-source" };
var _hoisted_2$39 = { class: "lfo-source__waves" };
var _hoisted_3$35 = [
	"title",
	"onClick",
	"innerHTML"
];
function _sfc_render$40(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$40, [createBaseVNode("div", _hoisted_2$39, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.waveTypes, (w, i) => {
		return openBlock(), createElementBlock("button", {
			key: i,
			class: normalizeClass(["lfo-source__wave", { active: $data.waveType === i }]),
			title: w.label[_ctx.$i18n.locale],
			onClick: ($event) => $options.selectWave(i),
			innerHTML: w.icon
		}, null, 10, _hoisted_3$35);
	}), 128))]), createVNode(_component_ControlSlider, {
		label: _ctx.$i18n.locale === "fr" ? "Fréquence" : "Frequency",
		modelValue: $data.frequency,
		mini: 20,
		maxi: 4e3,
		log: true,
		"onUpdate:modelValue": $options.onFreqChange
	}, null, 8, [
		"label",
		"modelValue",
		"onUpdate:modelValue"
	])]);
}
var LFOSource_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$40, [["render", _sfc_render$40]]);
//#endregion
//#region src/components/source/BandLimitedSource.vue
var _sfc_main$39 = {
	name: "BandLimitedSource",
	components: { ControlSlider: ControlSlider_default },
	props: { audio: {
		type: Object,
		default: null
	} },
	data() {
		return {
			frequency: 172,
			shape: .25,
			bright: .5
		};
	},
	watch: { audio(val) {
		if (val) this.syncAudio();
	} },
	mounted() {
		if (this.audio) this.syncAudio();
	},
	methods: {
		syncAudio() {
			this.audio.setBLFrequency(this.frequency);
			this.audio.setBLParams(this.shape, this.bright);
		},
		onFreqChange(val) {
			this.frequency = val;
			if (this.audio) this.audio.setBLFrequency(val);
		},
		onShapeChange(val) {
			this.shape = val;
			if (this.audio) this.audio.setBLParams(val, this.bright);
		},
		onBrightChange(val) {
			this.bright = val;
			if (this.audio) this.audio.setBLParams(this.shape, val);
		}
	}
};
var _hoisted_1$39 = { class: "bl-source" };
var _hoisted_2$38 = { class: "bl-source__row" };
function _sfc_render$39(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$39, [createVNode(_component_ControlSlider, {
		label: _ctx.$i18n.locale === "fr" ? "Fréquence" : "Frequency",
		modelValue: $data.frequency,
		mini: 20,
		maxi: 4e3,
		log: true,
		"onUpdate:modelValue": $options.onFreqChange
	}, null, 8, [
		"label",
		"modelValue",
		"onUpdate:modelValue"
	]), createBaseVNode("div", _hoisted_2$38, [createVNode(_component_ControlSlider, {
		label: _ctx.$i18n.locale === "fr" ? "Forme d'onde" : "Waveform",
		modelValue: $data.shape,
		mini: 0,
		maxi: 1,
		"onUpdate:modelValue": $options.onShapeChange
	}, null, 8, [
		"label",
		"modelValue",
		"onUpdate:modelValue"
	]), createVNode(_component_ControlSlider, {
		label: _ctx.$i18n.locale === "fr" ? "Brillance" : "Brightness",
		modelValue: $data.bright,
		mini: 0,
		maxi: 1,
		"onUpdate:modelValue": $options.onBrightChange
	}, null, 8, [
		"label",
		"modelValue",
		"onUpdate:modelValue"
	])])]);
}
var BandLimitedSource_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$39, [["render", _sfc_render$39]]);
//#endregion
//#region src/components/source/SoundFileSource.vue
var _sfc_main$38 = {
	name: "SoundFileSource",
	components: { ControlSlider: ControlSlider_default },
	props: { audio: {
		type: Object,
		default: null
	} },
	data() {
		return {
			isPlaying: false,
			loop: false,
			speed: 1,
			hasFile: false,
			fileName: ""
		};
	},
	methods: {
		async onFileSelect(e) {
			const file = e.target.files[0];
			if (!file || !this.audio) return;
			this.fileName = file.name;
			await this.audio.loadFile(file);
			this.hasFile = true;
		},
		async togglePlay() {
			if (!this.audio || !this.hasFile) return;
			if (this.isPlaying) {
				this.audio.stopFile();
				this.isPlaying = false;
			} else {
				const engine = useAudioEngineStore();
				if (!engine.isRunning) await engine.start();
				this.audio.playFile(this.loop, this.speed);
				this.isPlaying = true;
			}
		},
		toggleLoop() {
			this.loop = !this.loop;
			if (this.audio) this.audio.setFileLoop(this.loop);
		},
		onSpeedChange(val) {
			this.speed = val;
			if (this.audio) this.audio.setFileSpeed(val);
		}
	}
};
var _hoisted_1$38 = { class: "file-source" };
var _hoisted_2$37 = { class: "file-source__buttons" };
var _hoisted_3$34 = { class: "toggle-btn file-source__load" };
var _hoisted_4$25 = ["disabled"];
var _hoisted_5$22 = {
	key: 0,
	class: "file-source__name"
};
function _sfc_render$38(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$38, [
		createBaseVNode("div", _hoisted_2$37, [
			createBaseVNode("label", _hoisted_3$34, [createTextVNode(toDisplayString(_ctx.$i18n.locale === "fr" ? "Choisir" : "Choose") + " ", 1), createBaseVNode("input", {
				type: "file",
				accept: "audio/*",
				onChange: _cache[0] || (_cache[0] = (...args) => $options.onFileSelect && $options.onFileSelect(...args)),
				hidden: ""
			}, null, 32)]),
			createBaseVNode("button", {
				class: normalizeClass(["toggle-btn", { active: $data.isPlaying }]),
				onClick: _cache[1] || (_cache[1] = (...args) => $options.togglePlay && $options.togglePlay(...args)),
				disabled: !$data.hasFile
			}, toDisplayString(_ctx.$i18n.locale === "fr" ? "Jouer" : "Play"), 11, _hoisted_4$25),
			createBaseVNode("button", {
				class: normalizeClass(["toggle-btn", { active: $data.loop }]),
				onClick: _cache[2] || (_cache[2] = (...args) => $options.toggleLoop && $options.toggleLoop(...args))
			}, "Loop", 2)
		]),
		$data.fileName ? (openBlock(), createElementBlock("div", _hoisted_5$22, toDisplayString($data.fileName), 1)) : createCommentVNode("", true),
		createVNode(_component_ControlSlider, {
			label: _ctx.$i18n.locale === "fr" ? "Vitesse de lecture" : "Playback Speed",
			modelValue: $data.speed,
			mini: .25,
			maxi: 4,
			log: true,
			"onUpdate:modelValue": $options.onSpeedChange
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		])
	]);
}
var SoundFileSource_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$38, [["render", _sfc_render$38]]);
//#endregion
//#region src/components/source/NoiseSource.vue
var _sfc_main$37 = {
	name: "NoiseSource",
	props: { audio: {
		type: Object,
		default: null
	} },
	data() {
		return {
			noiseType: 0,
			noiseTypes: [
				{
					fr: "Bruit blanc",
					en: "White Noise"
				},
				{
					fr: "Bruit rose",
					en: "Pink Noise"
				},
				{
					fr: "Bruit brun",
					en: "Brown Noise"
				}
			]
		};
	},
	watch: { audio(val) {
		if (val) val.setNoiseType(this.noiseType);
	} },
	mounted() {
		if (this.audio) this.audio.setNoiseType(this.noiseType);
	},
	methods: { setNoiseType(type) {
		this.noiseType = type;
		if (this.audio) this.audio.setNoiseType(type);
	} }
};
var _hoisted_1$37 = { class: "noise-source" };
var _hoisted_2$36 = { class: "noise-source__buttons" };
var _hoisted_3$33 = ["onClick"];
function _sfc_render$37(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$37, [createBaseVNode("div", _hoisted_2$36, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.noiseTypes, (n, i) => {
		return openBlock(), createElementBlock("button", {
			key: i,
			class: normalizeClass(["toggle-btn", { active: $data.noiseType === i }]),
			onClick: ($event) => $options.setNoiseType(i)
		}, toDisplayString(n[_ctx.$i18n.locale]), 11, _hoisted_3$33);
	}), 128))])]);
}
var NoiseSource_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$37, [["render", _sfc_render$37]]);
//#endregion
//#region src/components/source/AudioInputSource.vue
var _sfc_main$36 = {
	name: "AudioInputSource",
	components: { ControlSlider: ControlSlider_default },
	props: { audio: {
		type: Object,
		default: null
	} },
	data() {
		return {
			isActive: false,
			gain: 1,
			error: "",
			stream: null,
			inputNode: null,
			gainNode: null
		};
	},
	watch: { audio(val) {
		if (val && this.isActive) this.connectInput();
	} },
	beforeUnmount() {
		this.stopInput();
	},
	methods: {
		async toggleInput() {
			if (this.isActive) this.stopInput();
			else await this.startInput();
		},
		async startInput() {
			const engine = useAudioEngineStore();
			if (!engine.isRunning) await engine.start();
			try {
				this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
				this.error = "";
				this.connectInput();
				this.isActive = true;
			} catch (e) {
				this.error = this.$i18n.locale === "fr" ? "Accès au microphone refusé" : "Microphone access denied";
			}
		},
		connectInput() {
			if (!this.audio || !this.stream) return;
			const ctx = useAudioEngineStore().context;
			if (!ctx) return;
			this.inputNode = ctx.createMediaStreamSource(this.stream);
			this.gainNode = ctx.createGain();
			this.gainNode.gain.value = this.gain;
			this.inputNode.connect(this.gainNode);
			this.gainNode.connect(this.audio.inputGain || this.audio.output);
		},
		stopInput() {
			if (this.inputNode) {
				try {
					this.inputNode.disconnect();
				} catch (e) {}
				this.inputNode = null;
			}
			if (this.gainNode) {
				try {
					this.gainNode.disconnect();
				} catch (e) {}
				this.gainNode = null;
			}
			if (this.stream) {
				this.stream.getTracks().forEach((t) => t.stop());
				this.stream = null;
			}
			this.isActive = false;
		},
		onGainChange(val) {
			this.gain = val;
			if (this.gainNode) this.gainNode.gain.setTargetAtTime(val, useAudioEngineStore().context.currentTime, .05);
		}
	}
};
var _hoisted_1$36 = { class: "input-source" };
var _hoisted_2$35 = {
	key: 0,
	class: "input-source__error"
};
function _sfc_render$36(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$36, [
		createBaseVNode("button", {
			class: normalizeClass(["toggle-btn", { active: $data.isActive }]),
			onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleInput && $options.toggleInput(...args))
		}, toDisplayString($data.isActive ? _ctx.$i18n.locale === "fr" ? "Arrêter" : "Stop" : _ctx.$i18n.locale === "fr" ? "Activer le micro" : "Enable Microphone"), 3),
		$data.error ? (openBlock(), createElementBlock("div", _hoisted_2$35, toDisplayString($data.error), 1)) : createCommentVNode("", true),
		createVNode(_component_ControlSlider, {
			label: _ctx.$i18n.locale === "fr" ? "Volume d'entrée" : "Input Gain",
			modelValue: $data.gain,
			mini: 0,
			maxi: 2,
			"onUpdate:modelValue": $options.onGainChange
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		])
	]);
}
var AudioInputSource_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$36, [["render", _sfc_render$36]]);
//#endregion
//#region src/components/source/SourcePanel.vue
var icons = {
	waveform: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M1 8 Q4 2, 8 8 Q12 14, 15 8\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" fill=\"none\"/></svg>",
	antialias: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M1 12 L4 12 L4 9 L7 9 L7 6 L10 6 L10 4 L13 4 L15 4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></svg>",
	file: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M4 2 L10 2 L13 5 L13 14 L4 14 Z\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M10 2 L10 5 L13 5\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linejoin=\"round\" fill=\"none\"/></svg>",
	noise: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M1 8 L3 4 L5 11 L7 3 L9 13 L11 5 L13 10 L15 7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></svg>",
	mic: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><rect x=\"6\" y=\"2\" width=\"4\" height=\"7\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.3\" fill=\"none\"/><path d=\"M4 8 Q4 13, 8 13 Q12 13, 12 8\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\" fill=\"none\"/><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\" stroke=\"currentColor\" stroke-width=\"1.3\" stroke-linecap=\"round\"/></svg>"
};
var _sfc_main$35 = {
	name: "SourcePanel",
	components: {
		LFOSource: LFOSource_default,
		BandLimitedSource: BandLimitedSource_default,
		SoundFileSource: SoundFileSource_default,
		NoiseSource: NoiseSource_default,
		AudioInputSource: AudioInputSource_default
	},
	props: { audio: {
		type: Object,
		default: null
	} },
	data() {
		const sourceNames = [
			"lfo",
			"bandlimited",
			"file",
			"noise",
			"input"
		];
		const currentSource = this.audio ? this.audio.activeSource : "lfo";
		return {
			activeTab: Math.max(0, sourceNames.indexOf(currentSource)),
			tabs: [
				{
					label: {
						fr: "Oscillateur multiforme",
						en: "Multi-waveform Oscillator"
					},
					icon: icons.waveform,
					source: "lfo"
				},
				{
					label: {
						fr: "Oscillateur anti-alias",
						en: "Anti-alias Oscillator"
					},
					icon: icons.antialias,
					source: "bandlimited"
				},
				{
					label: {
						fr: "Fichier sonore",
						en: "Sound File"
					},
					icon: icons.file,
					source: "file"
				},
				{
					label: {
						fr: "Générateur de bruit",
						en: "Noise Generator"
					},
					icon: icons.noise,
					source: "noise"
				},
				{
					label: {
						fr: "Entrée audio",
						en: "Audio Input"
					},
					icon: icons.mic,
					source: "input"
				}
			]
		};
	},
	watch: { audio(val) {
		if (val) val.switchSource(this.tabs[this.activeTab].source);
	} },
	mounted() {
		if (this.audio) this.audio.switchSource(this.tabs[this.activeTab].source);
	},
	methods: { switchTab(index) {
		this.activeTab = index;
		if (this.audio) this.audio.switchSource(this.tabs[index].source);
	} }
};
var _hoisted_1$35 = { class: "source-panel" };
var _hoisted_2$34 = { class: "section-head" };
var _hoisted_3$32 = { class: "section-body" };
var _hoisted_4$24 = { class: "source-panel__tabs" };
var _hoisted_5$21 = [
	"title",
	"onClick",
	"innerHTML"
];
var _hoisted_6$20 = { class: "source-panel__content" };
function _sfc_render$35(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_LFOSource = resolveComponent("LFOSource");
	const _component_BandLimitedSource = resolveComponent("BandLimitedSource");
	const _component_SoundFileSource = resolveComponent("SoundFileSource");
	const _component_NoiseSource = resolveComponent("NoiseSource");
	const _component_AudioInputSource = resolveComponent("AudioInputSource");
	return openBlock(), createElementBlock("div", _hoisted_1$35, [createBaseVNode("div", _hoisted_2$34, toDisplayString(_ctx.$i18n.locale === "fr" ? "Source Sonore" : "Audio Source"), 1), createBaseVNode("div", _hoisted_3$32, [createBaseVNode("div", _hoisted_4$24, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.tabs, (tab, i) => {
		return openBlock(), createElementBlock("button", {
			key: i,
			class: normalizeClass(["source-panel__tab", { active: $data.activeTab === i }]),
			title: tab.label[_ctx.$i18n.locale],
			onClick: ($event) => $options.switchTab(i),
			innerHTML: tab.icon
		}, null, 10, _hoisted_5$21);
	}), 128))]), createBaseVNode("div", _hoisted_6$20, [$data.activeTab === 0 ? (openBlock(), createBlock(_component_LFOSource, {
		key: 0,
		audio: $props.audio
	}, null, 8, ["audio"])) : $data.activeTab === 1 ? (openBlock(), createBlock(_component_BandLimitedSource, {
		key: 1,
		audio: $props.audio
	}, null, 8, ["audio"])) : $data.activeTab === 2 ? (openBlock(), createBlock(_component_SoundFileSource, {
		key: 2,
		audio: $props.audio
	}, null, 8, ["audio"])) : $data.activeTab === 3 ? (openBlock(), createBlock(_component_NoiseSource, {
		key: 3,
		audio: $props.audio
	}, null, 8, ["audio"])) : $data.activeTab === 4 ? (openBlock(), createBlock(_component_AudioInputSource, {
		key: 4,
		audio: $props.audio
	}, null, 8, ["audio"])) : createCommentVNode("", true)])])]);
}
var SourcePanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$35, [["render", _sfc_render$35]]);
//#endregion
//#region src/components/modules/Mod00Sources.vue
var _sfc_main$34 = {
	name: "Mod00Sources",
	components: { SourcePanel: SourcePanel_default },
	moduleId: "mod-00-sources",
	computed: { sourcePanel() {
		return useAudioEngineStore().sourcePanel;
	} }
};
var _hoisted_1$34 = { class: "mod-sources" };
function _sfc_render$34(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	return openBlock(), createElementBlock("div", _hoisted_1$34, [createVNode(_component_SourcePanel, { audio: $options.sourcePanel }, null, 8, ["audio"])]);
}
var Mod00Sources_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$34, [["render", _sfc_render$34]]);
//#endregion
//#region src/mixins/moduleAudio.js
var moduleAudioMixin = {
	data() {
		return { audioReady: false };
	},
	computed: {
		engine() {
			return useAudioEngineStore();
		},
		ctx() {
			return this.engine.context;
		}
	},
	watch: { "engine.sourceReady": {
		immediate: true,
		handler(ready) {
			if (ready && !this.audioReady) this._doSetup();
		}
	} },
	beforeUnmount() {
		if (this.audioReady) {
			this.teardown();
			this.audioReady = false;
		}
	},
	methods: {
		async _doSetup() {
			if (this.audioReady) return;
			try {
				await this.setup();
				this.audioReady = true;
			} catch (e) {
				console.warn(`[${this.$options.name}] audio setup failed:`, e);
			}
		},
		claimSource() {
			const source = this.engine.sourcePanel.output;
			try {
				source.disconnect(this.engine.masterGain);
			} catch (e) {}
			return source;
		},
		releaseSource() {
			if (this.engine.sourcePanel) {
				const source = this.engine.sourcePanel.output;
				try {
					source.disconnect();
				} catch (e) {}
				try {
					source.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		disconnectNodes(...nodes) {
			for (const n of nodes) if (n) try {
				n.disconnect();
			} catch (e) {}
		},
		param(node, paramName, value, timeConstant = .05) {
			if (!this.audioReady || !node) return;
			node[paramName].setTargetAtTime(value, this.ctx.currentTime, timeConstant);
		},
		setup() {},
		teardown() {}
	}
};
//#endregion
//#region src/components/modules/Mod02Filters.vue
var FILTER_TYPES = [
	{
		fr: "Passe-bas",
		en: "Lowpass",
		biquad: "lowpass"
	},
	{
		fr: "Passe-haut",
		en: "Highpass",
		biquad: "highpass"
	},
	{
		fr: "Passe-bande",
		en: "Bandpass",
		biquad: "bandpass"
	},
	{
		fr: "Réjecteur de bande",
		en: "Bandstop",
		biquad: "notch"
	},
	{
		fr: "Crête/Creux (peak/notch)",
		en: "Peak/Notch",
		biquad: "peaking"
	},
	{
		fr: "Dégradé passe-bas",
		en: "Low Shelf",
		biquad: "lowshelf"
	},
	{
		fr: "Dégradé passe-haut",
		en: "High Shelf",
		biquad: "highshelf"
	}
];
var _sfc_main$33 = {
	name: "Mod02Filters",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			filterTypeIdx: 0,
			filterTypes: FILTER_TYPES,
			frequency: 1e3,
			qFactor: 1,
			boost: -6,
			order: 2,
			filters: [],
			outputGain: null
		};
	},
	computed: { isEqFilter() {
		return this.filterTypeIdx >= 4;
	} },
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				filterType: {
					fr: "Type de filtre",
					en: "Filter Type"
				},
				cutoffFreq: {
					fr: "Fréquence de coupure/centrale",
					en: "Cutoff/Center Frequency"
				},
				qFactor: {
					fr: "Facteur de qualité",
					en: "Q Factor"
				},
				boostCut: {
					fr: "Augmentation/réduction (dB)",
					en: "Boost/Cut (dB)"
				},
				filterOrder: {
					fr: "Ordre du filtre",
					en: "Filter Order"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			this.outputGain = this.engine.context.createGain();
			this.outputGain.gain.value = 1;
			this.engine.sourcePanel.output.disconnect(this.engine.masterGain);
			this.buildFilterChain();
		},
		teardown() {
			if (this.engine.sourcePanel && this.engine.masterGain) {
				this.disconnectFilters();
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		buildFilterChain() {
			this.disconnectFilters();
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			const stages = this.isEqFilter ? 1 : this.order / 2;
			this.filters = [];
			for (let i = 0; i < stages; i++) {
				const f = ctx.createBiquadFilter();
				f.type = FILTER_TYPES[this.filterTypeIdx].biquad;
				f.frequency.value = this.frequency;
				f.Q.value = this.qFactor;
				if (this.isEqFilter) f.gain.value = this.boost;
				this.filters.push(f);
			}
			source.connect(this.filters[0]);
			for (let i = 0; i < this.filters.length - 1; i++) this.filters[i].connect(this.filters[i + 1]);
			this.filters[this.filters.length - 1].connect(this.engine.masterGain);
		},
		disconnectFilters() {
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.disconnect();
			} catch (e) {}
			this.filters.forEach((f) => {
				try {
					f.disconnect();
				} catch (e) {}
			});
			this.filters = [];
		},
		onFilterTypeChange() {
			if (!this.audioReady) return;
			this.buildFilterChain();
		},
		onFreqChange(val) {
			if (!this.audioReady) return;
			this.filters.forEach((f) => f.frequency.setTargetAtTime(val, this.engine.context.currentTime, .05));
		},
		onQChange(val) {
			if (!this.audioReady) return;
			this.filters.forEach((f) => f.Q.setTargetAtTime(val, this.engine.context.currentTime, .05));
		},
		onBoostChange(val) {
			if (!this.audioReady) return;
			this.filters.forEach((f) => f.gain.setTargetAtTime(val, this.engine.context.currentTime, .05));
		},
		onOrderChange() {
			if (!this.audioReady) return;
			if (!this.isEqFilter) this.buildFilterChain();
		}
	}
};
var _hoisted_1$33 = { class: "module-controls" };
var _hoisted_2$33 = { class: "section-head" };
var _hoisted_3$31 = { class: "section-body" };
var _hoisted_4$23 = { class: "control-group" };
var _hoisted_5$20 = { class: "control-label" };
var _hoisted_6$19 = ["value"];
var _hoisted_7$14 = { class: "control-group" };
var _hoisted_8$13 = { class: "control-label" };
var _hoisted_9$11 = ["disabled"];
var _hoisted_10$8 = ["value"];
function _sfc_render$33(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$33, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$33, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$31, [
			createBaseVNode("div", _hoisted_4$23, [createBaseVNode("label", _hoisted_5$20, toDisplayString($options.t("filterType")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.filterTypeIdx = $event),
				onChange: _cache[1] || (_cache[1] = (...args) => $options.onFilterTypeChange && $options.onFilterTypeChange(...args))
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.filterTypes, (f, i) => {
				return openBlock(), createElementBlock("option", {
					key: i,
					value: i
				}, toDisplayString(f[_ctx.$i18n.locale]), 9, _hoisted_6$19);
			}), 128))], 544), [[
				vModelSelect,
				$data.filterTypeIdx,
				void 0,
				{ number: true }
			]])]),
			createVNode(_component_ControlSlider, {
				label: $options.t("cutoffFreq"),
				modelValue: $data.frequency,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.frequency = $event), $options.onFreqChange],
				mini: 50,
				maxi: 15e3,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("qFactor"),
				modelValue: $data.qFactor,
				"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.qFactor = $event), $options.onQChange],
				mini: .5,
				maxi: 10,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("boostCut"),
				modelValue: $data.boost,
				"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $data.boost = $event), $options.onBoostChange],
				mini: -48,
				maxi: 12,
				disabled: !$options.isEqFilter
			}, null, 8, [
				"label",
				"modelValue",
				"disabled",
				"onUpdate:modelValue"
			]),
			createBaseVNode("div", _hoisted_7$14, [createBaseVNode("label", _hoisted_8$13, toDisplayString($options.t("filterOrder")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.order = $event),
				onChange: _cache[6] || (_cache[6] = (...args) => $options.onOrderChange && $options.onOrderChange(...args)),
				disabled: $options.isEqFilter
			}, [(openBlock(), createElementBlock(Fragment, null, renderList([
				2,
				4,
				6,
				8
			], (o) => {
				return createBaseVNode("option", {
					key: o,
					value: o
				}, toDisplayString(o), 9, _hoisted_10$8);
			}), 64))], 40, _hoisted_9$11), [[
				vModelSelect,
				$data.order,
				void 0,
				{ number: true }
			]])])
		])
	]);
}
var Mod02Filters_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$33, [["render", _sfc_render$33]]);
//#endregion
//#region node_modules/@grame/faustwasm/dist/esm/index.js
var __typeError = (msg) => {
	throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var instantiateFaustModuleFromFile = async (jsFile, dataFile = jsFile.replace(/c?js$/, "data"), wasmFile = jsFile.replace(/c?js$/, "wasm")) => {
	var _a, _b;
	let FaustModule;
	let dataBinary;
	let wasmBinary;
	const jsCodeHead = /var (.+) = \(/;
	if (typeof window === "object") {
		let jsCode = await (await fetch(jsFile)).text();
		jsCode = `${jsCode}
export default ${(_a = jsCode.match(jsCodeHead)) == null ? void 0 : _a[1]};
`;
		const jsFileMod = URL.createObjectURL(new Blob([jsCode], { type: "text/javascript" }));
		FaustModule = (await __vitePreload(async () => {
			const { default: __vite_default__ } = await import(
				/* webpackIgnore: true */
				jsFileMod
);
			return { default: __vite_default__ };
		}, [], import.meta.url)).default;
		dataBinary = await (await fetch(dataFile)).arrayBuffer();
		wasmBinary = await (await fetch(wasmFile)).arrayBuffer();
	} else {
		const { promises: fs } = await __vitePreload(async () => {
			const { promises: fs } = await import("./__vite-browser-external-D6v0R7Vd.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
			return { promises: fs };
		}, __vite__mapDeps([0,1]), import.meta.url);
		const { pathToFileURL } = await __vitePreload(async () => {
			const { pathToFileURL } = await import("./__vite-browser-external-D6v0R7Vd.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
			return { pathToFileURL };
		}, __vite__mapDeps([0,1]), import.meta.url);
		let jsCode = await fs.readFile(jsFile, { encoding: "utf-8" });
		jsCode = `
import process from "process";
import * as path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
const require = createRequire(import.meta.url);

${jsCode}

export default ${(_b = jsCode.match(jsCodeHead)) == null ? void 0 : _b[1]};
`;
		const jsFileMod = jsFile.replace(/c?js$/, "mjs");
		await fs.writeFile(jsFileMod, jsCode);
		FaustModule = (await __vitePreload(async () => {
			const { default: __vite_default__ } = await import(
				/* webpackIgnore: true */
				pathToFileURL(jsFileMod).href
);
			return { default: __vite_default__ };
		}, [], import.meta.url)).default;
		await fs.unlink(jsFileMod);
		dataBinary = new Uint8Array(await fs.readFile(dataFile)).buffer;
		wasmBinary = new Uint8Array(await fs.readFile(wasmFile)).buffer;
	}
	return await FaustModule({
		wasmBinary,
		getPreloadedPackage: (remotePackageName, remotePackageSize) => {
			if (remotePackageName === "libfaust-wasm.data") return dataBinary;
			return /* @__PURE__ */ new ArrayBuffer(0);
		}
	});
};
var instantiateFaustModuleFromFile_default = instantiateFaustModuleFromFile;
var getFaustAudioWorkletProcessor = (dependencies, faustData, register = true) => {
	const { registerProcessor, AudioWorkletProcessor, sampleRate } = globalThis;
	const { FaustBaseWebAudioDsp: FaustBaseWebAudioDsp2, FaustWasmInstantiator: FaustWasmInstantiator2, FaustAudioWorkletProcessorCommunicator: FaustAudioWorkletProcessorCommunicator2 } = dependencies;
	const { processorName, dspName, dspMeta, effectMeta, poly } = faustData;
	const analysePolyParameters = (item) => {
		const isPolyReserved = "address" in item && !![
			"/gate",
			"/freq",
			"/gain",
			"/key",
			"/vel",
			"/velocity"
		].find((k) => item.address.endsWith(k));
		if (poly && isPolyReserved) return null;
		if (item.type === "vslider" || item.type === "hslider" || item.type === "nentry") return {
			name: item.address,
			defaultValue: item.init || 0,
			minValue: item.min || 0,
			maxValue: item.max || 0
		};
		else if (item.type === "button" || item.type === "checkbox") return {
			name: item.address,
			defaultValue: item.init || 0,
			minValue: 0,
			maxValue: 1
		};
		return null;
	};
	class FaustAudioWorkletProcessor extends AudioWorkletProcessor {
		constructor(options) {
			super(options);
			this.paramValuesCache = {};
			this.fCommunicator = new FaustAudioWorkletProcessorCommunicator2(this.port);
			const { parameterDescriptors } = this.constructor;
			parameterDescriptors.forEach((pd) => {
				this.paramValuesCache[pd.name] = pd.defaultValue || 0;
			});
			const { moduleId, instanceId } = options.processorOptions;
			if (!moduleId || !instanceId) return;
			this.wamInfo = {
				moduleId,
				instanceId
			};
		}
		static get parameterDescriptors() {
			const params = [];
			const callback = (item) => {
				const param = analysePolyParameters(item);
				if (param) params.push(param);
			};
			FaustBaseWebAudioDsp2.parseUI(dspMeta.ui, callback);
			if (effectMeta) FaustBaseWebAudioDsp2.parseUI(effectMeta.ui, callback);
			return params;
		}
		setupWamEventHandler() {
			var _a;
			if (!this.wamInfo) return;
			const { moduleId, instanceId } = this.wamInfo;
			const { webAudioModules } = globalThis;
			const ModuleScope = webAudioModules.getModuleScope(moduleId);
			const paramMgrProcessor = (_a = ModuleScope == null ? void 0 : ModuleScope.paramMgrProcessors) == null ? void 0 : _a[instanceId];
			if (!paramMgrProcessor) return;
			if (paramMgrProcessor.handleEvent) return;
			paramMgrProcessor.handleEvent = (event) => {
				if (event.type === "wam-midi") this.midiMessage(event.data.bytes);
			};
		}
		process(inputs, outputs, parameters) {
			for (const path in parameters) {
				const [paramValue] = parameters[path];
				if (paramValue !== this.paramValuesCache[path]) this.setParamValue(path, paramValue);
			}
			if (this.fCommunicator.getNewAccDataAvailable()) {
				const acc = this.fCommunicator.getAcc();
				if (acc) {
					this.fCommunicator.setNewAccDataAvailable(false);
					const { invert, ...data } = acc;
					this.propagateAcc(data, invert);
				}
			}
			if (this.fCommunicator.getNewGyrDataAvailable()) {
				const gyr = this.fCommunicator.getGyr();
				if (gyr) {
					this.fCommunicator.setNewGyrDataAvailable(false);
					this.propagateGyr(gyr);
				}
			}
			return this.fDSPCode.compute(inputs[0], outputs[0]);
		}
		handleMessageAux(e) {
			const msg = e.data;
			switch (msg.type) {
				case "midi":
					this.midiMessage(msg.data);
					break;
				case "ctrlChange":
					this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]);
					break;
				case "pitchWheel":
					this.pitchWheel(msg.data[0], msg.data[1]);
					break;
				case "keyOn":
					this.keyOn(msg.data[0], msg.data[1], msg.data[2]);
					break;
				case "keyOff":
					this.keyOff(msg.data[0], msg.data[1], msg.data[2]);
					break;
				case "param":
					this.setParamValue(msg.data.path, msg.data.value);
					break;
				case "setPlotHandler":
					if (msg.data) this.fDSPCode.setPlotHandler((output, index, events) => this.port.postMessage({
						type: "plot",
						value: output,
						index,
						events
					}));
					else this.fDSPCode.setPlotHandler(null);
					break;
				case "setupWamEventHandler":
					this.setupWamEventHandler();
					break;
				case "start":
					this.fDSPCode.start();
					break;
				case "stop":
					this.fDSPCode.stop();
					break;
				case "destroy":
					this.port.close();
					this.fDSPCode.destroy();
					break;
				default: break;
			}
		}
		setParamValue(path, value) {
			this.fDSPCode.setParamValue(path, value);
			this.paramValuesCache[path] = value;
		}
		midiMessage(data) {
			this.fDSPCode.midiMessage(data);
		}
		ctrlChange(channel, ctrl, value) {
			this.fDSPCode.ctrlChange(channel, ctrl, value);
		}
		pitchWheel(channel, wheel) {
			this.fDSPCode.pitchWheel(channel, wheel);
		}
		keyOn(channel, pitch, velocity) {
			this.fDSPCode.keyOn(channel, pitch, velocity);
		}
		keyOff(channel, pitch, velocity) {
			this.fDSPCode.keyOff(channel, pitch, velocity);
		}
		propagateAcc(accelerationIncludingGravity, invert = false) {
			this.fDSPCode.propagateAcc(accelerationIncludingGravity, invert);
		}
		propagateGyr(event) {
			this.fDSPCode.propagateGyr(event);
		}
	}
	class FaustMonoAudioWorkletProcessor extends FaustAudioWorkletProcessor {
		constructor(options) {
			super(options);
			this.handleMessageAux = (e) => {
				super.handleMessageAux(e);
			};
			const { FaustMonoWebAudioDsp: FaustMonoWebAudioDsp2 } = dependencies;
			const { factory, sampleSize } = options.processorOptions;
			this.fDSPCode = new FaustMonoWebAudioDsp2(FaustWasmInstantiator2.createSyncMonoDSPInstance(factory), sampleRate, sampleSize, 128, factory.soundfiles);
			this.port.addEventListener("message", this.handleMessageAux);
			this.port.start();
			this.fDSPCode.setOutputParamHandler((path, value) => this.port.postMessage({
				path,
				value,
				type: "out-param"
			}));
			this.fDSPCode.setInputParamHandler((path, value) => this.port.postMessage({
				path,
				value,
				type: "in-param"
			}));
			this.fDSPCode.start();
		}
	}
	class FaustPolyAudioWorkletProcessor extends FaustAudioWorkletProcessor {
		constructor(options) {
			super(options);
			this.handleMessageAux = (e) => {
				const msg = e.data;
				switch (msg.type) {
					case "keyOn":
						this.keyOn(msg.data[0], msg.data[1], msg.data[2]);
						break;
					case "keyOff":
						this.keyOff(msg.data[0], msg.data[1], msg.data[2]);
						break;
					default:
						super.handleMessageAux(e);
						break;
				}
			};
			const { FaustPolyWebAudioDsp: FaustPolyWebAudioDsp3 } = dependencies;
			const { voiceFactory, mixerModule, voices, effectFactory, sampleSize } = options.processorOptions;
			this.fDSPCode = new FaustPolyWebAudioDsp3(FaustWasmInstantiator2.createSyncPolyDSPInstance(voiceFactory, mixerModule, voices, effectFactory), sampleRate, sampleSize, 128, {
				...effectFactory == null ? void 0 : effectFactory.soundfiles,
				...voiceFactory.soundfiles
			});
			this.port.addEventListener("message", this.handleMessageAux);
			this.port.start();
			this.fDSPCode.setOutputParamHandler((path, value) => this.port.postMessage({
				path,
				value,
				type: "out-param"
			}));
			this.fDSPCode.setInputParamHandler((path, value) => this.port.postMessage({
				path,
				value,
				type: "in-param"
			}));
			this.fDSPCode.start();
		}
		midiMessage(data) {
			const cmd = data[0] >> 4;
			const channel = data[0] & 15;
			const data1 = data[1];
			const data2 = data[2];
			if (cmd === 8 || cmd === 9 && data2 === 0) this.keyOff(channel, data1, data2);
			else if (cmd === 9) this.keyOn(channel, data1, data2);
			else super.midiMessage(data);
		}
		keyOn(channel, pitch, velocity) {
			this.fDSPCode.keyOn(channel, pitch, velocity);
		}
		keyOff(channel, pitch, velocity) {
			this.fDSPCode.keyOff(channel, pitch, velocity);
		}
		allNotesOff(hard) {
			this.fDSPCode.allNotesOff(hard);
		}
	}
	const Processor = poly ? FaustPolyAudioWorkletProcessor : FaustMonoAudioWorkletProcessor;
	if (register) try {
		registerProcessor(processorName || dspName || (poly ? "mydsp_poly" : "mydsp"), Processor);
	} catch (error) {
		console.warn(error);
	}
	return poly ? FaustPolyAudioWorkletProcessor : FaustMonoAudioWorkletProcessor;
};
var FaustAudioWorkletProcessor_default = getFaustAudioWorkletProcessor;
var getFaustFFTAudioWorkletProcessor = (dependencies, faustData, register = true) => {
	const { registerProcessor, AudioWorkletProcessor, sampleRate } = globalThis;
	const { FaustBaseWebAudioDsp: FaustBaseWebAudioDsp2, FaustWasmInstantiator: FaustWasmInstantiator2, FaustMonoWebAudioDsp: FaustMonoWebAudioDsp2, FaustAudioWorkletProcessorCommunicator: FaustAudioWorkletProcessorCommunicator2, FFTUtils } = dependencies;
	const { processorName, dspName, dspMeta, fftOptions } = faustData;
	const { windowFunctions, getFFT, fftToSignal, signalToFFT, signalToNoFFT } = FFTUtils;
	const ceil = (x, to) => Math.abs(to) < 1 ? Math.ceil(x * (1 / to)) / (1 / to) : Math.ceil(x / to) * to;
	const mod = (x, y) => (x % y + y) % y;
	const apply = (array, windowFunction) => {
		for (let i = 0; i < array.length; i++) array[i] *= windowFunction(i, array.length);
	};
	const fftParamKeywords = [
		"/fftSize",
		"/fftHopSize",
		"/fftOverlap",
		"/windowFunction",
		"/noIFFT"
	];
	const setTypedArray = (to, from, offsetTo = 0, offsetFrom = 0) => {
		const toLength = to.length;
		const fromLength = from.length;
		const spillLength = Math.min(toLength, fromLength);
		let spilled = 0;
		let $to = mod(offsetTo, toLength) || 0;
		let $from = mod(offsetFrom, fromLength) || 0;
		while (spilled < spillLength) {
			const $spillLength = Math.min(spillLength - spilled, toLength - $to, fromLength - $from);
			const $fromEnd = $from + $spillLength;
			if ($from === 0 && $fromEnd === fromLength) to.set(from, $to);
			else to.set(from.subarray($from, $fromEnd), $to);
			$to = ($to + $spillLength) % toLength;
			$from = $fromEnd % fromLength;
			spilled += $spillLength;
		}
		return $to;
	};
	const analyseParameters = (item) => {
		if ("address" in item && !!fftParamKeywords.find((k) => item.address.endsWith(k))) return null;
		if (item.type === "vslider" || item.type === "hslider" || item.type === "nentry") return {
			name: item.address,
			defaultValue: item.init || 0,
			minValue: item.min || 0,
			maxValue: item.max || 0
		};
		else if (item.type === "button" || item.type === "checkbox") return {
			name: item.address,
			defaultValue: item.init || 0,
			minValue: 0,
			maxValue: 1
		};
		return null;
	};
	class FaustFFTAudioWorkletProcessor extends AudioWorkletProcessor {
		constructor(options) {
			super(options);
			this.paramValuesCache = {};
			this.destroyed = false;
			/** Pointer of next start sample to write of the FFT input window */
			this.$inputWrite = 0;
			/** Pointer of next start sample to read of the FFT input window */
			this.$inputRead = 0;
			/** Pointer of next start sample to write of the FFT output window */
			this.$outputWrite = 0;
			/** Pointer of next start sample to read of the FFT output window */
			this.$outputRead = 0;
			/** Not perform in IFFT when reconstruct the audio signal */
			this.noIFFT = false;
			/** audio data from input, array of channels */
			this.fftInput = [];
			/** audio data for output, array of channels */
			this.fftOutput = [];
			/** FFT Overlaps, 1 means no overlap */
			this.fftOverlap = 0;
			this.fftHopSize = 0;
			this.fftSize = 0;
			this.fftBufferSize = 0;
			this.fPlotHandler = null;
			this.fCachedEvents = [];
			this.fBufferNum = 0;
			this.soundfiles = {};
			this.windowFunction = null;
			this.handleMessageAux = (e) => {
				var _a, _b, _c;
				const msg = e.data;
				switch (msg.type) {
					case "midi":
						this.midiMessage(msg.data);
						break;
					case "ctrlChange":
						this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]);
						break;
					case "pitchWheel":
						this.pitchWheel(msg.data[0], msg.data[1]);
						break;
					case "param":
						this.setParamValue(msg.data.path, msg.data.value);
						break;
					case "setPlotHandler":
						if (msg.data) this.fPlotHandler = (output, index, events) => {
							if (events) this.fCachedEvents.push(...events);
						};
						else this.fPlotHandler = null;
						(_a = this.fDSPCode) == null || _a.setPlotHandler(this.fPlotHandler);
						break;
					case "setupWamEventHandler":
						this.setupWamEventHandler();
						break;
					case "start":
						(_b = this.fDSPCode) == null || _b.start();
						break;
					case "stop":
						(_c = this.fDSPCode) == null || _c.stop();
						break;
					case "destroy":
						this.port.close();
						this.destroy();
						break;
					default: break;
				}
			};
			this.port.addEventListener("message", this.handleMessageAux);
			this.port.start();
			this.communicator = new FaustAudioWorkletProcessorCommunicator2(this.port);
			const { parameterDescriptors } = this.constructor;
			parameterDescriptors.forEach((pd) => {
				this.paramValuesCache[pd.name] = pd.defaultValue || 0;
			});
			const { factory, sampleSize } = options.processorOptions;
			this.dspInstance = FaustWasmInstantiator2.createSyncMonoDSPInstance(factory);
			this.sampleSize = sampleSize;
			this.soundfiles = factory.soundfiles;
			this.initFFT();
			const { moduleId, instanceId } = options.processorOptions;
			if (!moduleId || !instanceId) return;
			this.wamInfo = {
				moduleId,
				instanceId
			};
		}
		get fftProcessorBufferSize() {
			return this.fftSize / 2 + 1;
		}
		async initFFT() {
			this.FFT = await getFFT();
			await this.createFFTProcessor();
			return true;
		}
		static get parameterDescriptors() {
			const params = [];
			const callback = (item) => {
				const param = analyseParameters(item);
				if (param) params.push(param);
			};
			FaustBaseWebAudioDsp2.parseUI(dspMeta.ui, callback);
			return [
				...params,
				{
					defaultValue: (fftOptions == null ? void 0 : fftOptions.fftSize) || 1024,
					maxValue: 2 ** 32,
					minValue: 2,
					name: "fftSize"
				},
				{
					defaultValue: (fftOptions == null ? void 0 : fftOptions.fftOverlap) || 2,
					maxValue: 32,
					minValue: 1,
					name: "fftOverlap"
				},
				{
					defaultValue: typeof (fftOptions == null ? void 0 : fftOptions.defaultWindowFunction) === "number" ? fftOptions.defaultWindowFunction + 1 : 0,
					maxValue: (windowFunctions == null ? void 0 : windowFunctions.length) || 0,
					minValue: 0,
					name: "windowFunction"
				},
				{
					defaultValue: +!!(fftOptions == null ? void 0 : fftOptions.noIFFT) || 0,
					maxValue: 1,
					minValue: 0,
					name: "noIFFT"
				}
			];
		}
		setupWamEventHandler() {
			var _a;
			if (!this.wamInfo) return;
			const { moduleId, instanceId } = this.wamInfo;
			const { webAudioModules } = globalThis;
			const ModuleScope = webAudioModules.getModuleScope(moduleId);
			const paramMgrProcessor = (_a = ModuleScope == null ? void 0 : ModuleScope.paramMgrProcessors) == null ? void 0 : _a[instanceId];
			if (!paramMgrProcessor) return;
			if (paramMgrProcessor.handleEvent) return;
			paramMgrProcessor.handleEvent = (event) => {
				if (event.type === "wam-midi") this.midiMessage(event.data.bytes);
			};
		}
		processFFT() {
			let samplesForFFT = mod(this.$inputWrite - this.$inputRead, this.fftBufferSize) || this.fftBufferSize;
			while (samplesForFFT >= this.fftSize) {
				let fftProcessorOutputs = [];
				this.fDSPCode.compute((inputs) => {
					for (let i = 0; i < Math.min(this.fftInput.length, Math.ceil(inputs.length / 3)); i++) fftToSignal(this.rfft.forward((fftBuffer) => {
						setTypedArray(fftBuffer, this.fftInput[i], 0, this.$inputRead);
						for (let j = 0; j < fftBuffer.length; j++) fftBuffer[j] *= this.window[j];
					}), inputs[i * 3], inputs[i * 3 + 1], inputs[i * 3 + 2]);
					for (let i = this.fftInput.length * 3; i < inputs.length; i++) if (i % 3 === 2) inputs[i].forEach((v, j) => inputs[i][j] = j);
					else inputs[i].fill(0);
				}, (outputs) => {
					fftProcessorOutputs = outputs;
				});
				this.$inputRead += this.fftHopSize;
				this.$inputRead %= this.fftBufferSize;
				samplesForFFT -= this.fftHopSize;
				for (let i = 0; i < this.fftOutput.length; i++) {
					let iffted;
					if (this.noIFFT) {
						iffted = this.noIFFTBuffer;
						signalToNoFFT(fftProcessorOutputs[i * 2] || this.fftProcessorZeros, fftProcessorOutputs[i * 2 + 1] || this.fftProcessorZeros, iffted);
					} else iffted = this.rfft.inverse((ifftBuffer) => {
						signalToFFT(fftProcessorOutputs[i * 2] || this.fftProcessorZeros, fftProcessorOutputs[i * 2 + 1] || this.fftProcessorZeros, ifftBuffer);
					});
					for (let j = 0; j < iffted.length; j++) iffted[j] *= this.window[j];
					let $;
					for (let j = 0; j < iffted.length - this.fftHopSize; j++) {
						$ = mod(this.$outputWrite + j, this.fftBufferSize);
						this.fftOutput[i][$] += iffted[j];
						if (i === 0) this.windowSumSquare[$] += this.noIFFT ? this.window[j] : this.window[j] ** 2;
					}
					for (let j = iffted.length - this.fftHopSize; j < iffted.length; j++) {
						$ = mod(this.$outputWrite + j, this.fftBufferSize);
						this.fftOutput[i][$] = iffted[j];
						if (i === 0) this.windowSumSquare[$] = this.noIFFT ? this.window[j] : this.window[j] ** 2;
					}
				}
				this.$outputWrite += this.fftHopSize;
				this.$outputWrite %= this.fftBufferSize;
			}
		}
		process(inputs, outputs, parameters) {
			if (this.destroyed) return false;
			if (!this.FFT) return true;
			const input = inputs[0];
			const output = outputs[0];
			const inputChannels = (input == null ? void 0 : input.length) || 0;
			const outputChannels = (output == null ? void 0 : output.length) || 0;
			const bufferSize = (input == null ? void 0 : input.length) ? Math.max(...input.map((c) => c.length)) || 128 : 128;
			this.noIFFT = !!parameters.noIFFT[0];
			this.resetFFT(~~parameters.fftSize[0], ~~parameters.fftOverlap[0], ~~parameters.windowFunction[0], inputChannels, outputChannels, bufferSize);
			if (!this.fDSPCode) return true;
			for (const path in parameters) {
				if (fftParamKeywords.find((k) => `/${path}`.endsWith(k))) continue;
				const [paramValue] = parameters[path];
				if (paramValue !== this.paramValuesCache[path]) this.setParamValue(path, paramValue);
			}
			if (this.communicator.getNewAccDataAvailable()) {
				const acc = this.communicator.getAcc();
				if (acc) {
					this.communicator.setNewAccDataAvailable(false);
					const { invert, ...data } = acc;
					this.propagateAcc(data, invert);
				}
			}
			if (this.communicator.getNewGyrDataAvailable()) {
				const gyr = this.communicator.getGyr();
				if (gyr) {
					this.communicator.setNewGyrDataAvailable(false);
					this.propagateGyr(gyr);
				}
			}
			if (input == null ? void 0 : input.length) {
				let $inputWrite = 0;
				for (let i = 0; i < input.length; i++) {
					const inputWindow = this.fftInput[i];
					$inputWrite = setTypedArray(inputWindow, input[i].length ? input[i] : new Float32Array(bufferSize), this.$inputWrite);
				}
				this.$inputWrite = $inputWrite;
			} else {
				this.$inputWrite += bufferSize;
				this.$inputWrite %= this.fftBufferSize;
			}
			this.processFFT();
			for (let i = 0; i < output.length; i++) {
				setTypedArray(output[i], this.fftOutput[i], 0, this.$outputRead);
				let div = 0;
				for (let j = 0; j < bufferSize; j++) {
					div = this.windowSumSquare[mod(this.$outputRead + j, this.fftBufferSize)];
					output[i][j] /= div < 1e-8 ? 1 : div;
				}
			}
			this.$outputRead += bufferSize;
			this.$outputRead %= this.fftBufferSize;
			if (this.fPlotHandler) {
				this.port.postMessage({
					type: "plot",
					value: output,
					index: this.fBufferNum++,
					events: this.fCachedEvents
				});
				this.fCachedEvents = [];
			}
			return true;
		}
		setParamValue(path, value) {
			var _a;
			(_a = this.fDSPCode) == null || _a.setParamValue(path, value);
			this.paramValuesCache[path] = value;
		}
		midiMessage(data) {
			var _a;
			(_a = this.fDSPCode) == null || _a.midiMessage(data);
		}
		ctrlChange(channel, ctrl, value) {
			var _a;
			(_a = this.fDSPCode) == null || _a.ctrlChange(channel, ctrl, value);
		}
		pitchWheel(channel, wheel) {
			var _a;
			(_a = this.fDSPCode) == null || _a.pitchWheel(channel, wheel);
		}
		propagateAcc(accelerationIncludingGravity, invert = false) {
			this.fDSPCode.propagateAcc(accelerationIncludingGravity, invert);
		}
		propagateGyr(event) {
			this.fDSPCode.propagateGyr(event);
		}
		resetFFT(sizeIn, overlapIn, windowFunctionIn, inputChannels, outputChannels, bufferSize) {
			var _a, _b;
			const fftSize = ~~ceil(Math.max(2, sizeIn || 1024), 2);
			const fftOverlap = ~~Math.min(fftSize, Math.max(1, overlapIn));
			const fftHopSize = ~~Math.max(1, fftSize / fftOverlap);
			const latency = fftSize - Math.min(fftHopSize, bufferSize);
			let windowFunction = null;
			if (windowFunctionIn !== 0) windowFunction = typeof windowFunctions === "object" ? windowFunctions[~~windowFunctionIn - 1] || null : null;
			const fftSizeChanged = fftSize !== this.fftSize;
			const fftOverlapChanged = fftOverlap !== this.fftOverlap;
			if (fftSizeChanged || fftOverlapChanged) {
				this.fftSize = fftSize;
				this.fftOverlap = fftOverlap;
				this.fftHopSize = fftHopSize;
				this.$inputWrite = 0;
				this.$inputRead = 0;
				this.$outputWrite = 0;
				this.$outputRead = -latency;
				this.fftBufferSize = Math.max(fftSize * 2 - this.fftHopSize, bufferSize * 2);
				if (!fftSizeChanged && this.fftHopSizeParam) (_a = this.fDSPCode) == null || _a.setParamValue(this.fftHopSizeParam, this.fftHopSize);
			}
			if (fftSizeChanged) {
				(_b = this.rfft) == null || _b.dispose();
				this.rfft = new this.FFT(fftSize);
				this.noIFFTBuffer = new Float32Array(this.fftSize);
				this.createFFTProcessor();
			}
			if (fftSizeChanged || fftOverlapChanged || windowFunction !== this.windowFunction) {
				this.windowFunction = windowFunction;
				this.window = new Float32Array(fftSize);
				this.window.fill(1);
				if (windowFunction) apply(this.window, windowFunction);
				this.windowSumSquare = new Float32Array(this.fftBufferSize);
			}
			if (this.fftInput.length > inputChannels) this.fftInput.splice(inputChannels);
			if (this.fftOutput.length > outputChannels) this.fftOutput.splice(outputChannels);
			if (fftSizeChanged || fftOverlapChanged) {
				for (let i = 0; i < inputChannels; i++) this.fftInput[i] = new Float32Array(this.fftBufferSize);
				for (let i = 0; i < outputChannels; i++) this.fftOutput[i] = new Float32Array(this.fftBufferSize);
			} else {
				if (this.fftInput.length < inputChannels) for (let i = this.fftInput.length; i < inputChannels; i++) this.fftInput[i] = new Float32Array(this.fftBufferSize);
				if (this.fftOutput.length < outputChannels) for (let i = this.fftOutput.length; i < outputChannels; i++) this.fftOutput[i] = new Float32Array(this.fftBufferSize);
			}
		}
		async createFFTProcessor() {
			var _a, _b;
			(_a = this.fDSPCode) == null || _a.stop();
			(_b = this.fDSPCode) == null || _b.destroy();
			this.fDSPCode = new FaustMonoWebAudioDsp2(this.dspInstance, sampleRate, this.sampleSize, this.fftProcessorBufferSize, this.soundfiles);
			this.fDSPCode.setOutputParamHandler((path, value) => this.port.postMessage({
				path,
				value,
				type: "out-param"
			}));
			this.fDSPCode.setInputParamHandler((path, value) => this.port.postMessage({
				path,
				value,
				type: "in-param"
			}));
			this.fDSPCode.setPlotHandler(this.fPlotHandler);
			const params = this.fDSPCode.getParams();
			this.fDSPCode.start();
			for (const path in this.paramValuesCache) {
				if (fftParamKeywords.find((k) => `/${path}`.endsWith(k))) continue;
				this.fDSPCode.setParamValue(path, this.paramValuesCache[path]);
			}
			const fftSizeParam = params.find((s) => s.endsWith("/fftSize"));
			if (fftSizeParam) this.fDSPCode.setParamValue(fftSizeParam, this.fftSize);
			this.fftHopSizeParam = params.find((s) => s.endsWith("/fftHopSize"));
			if (this.fftHopSizeParam) this.fDSPCode.setParamValue(this.fftHopSizeParam, this.fftHopSize);
			this.fftProcessorZeros = new Float32Array(this.fftProcessorBufferSize);
		}
		destroy() {
			var _a, _b, _c;
			(_a = this.fDSPCode) == null || _a.stop();
			(_b = this.fDSPCode) == null || _b.destroy();
			(_c = this.rfft) == null || _c.dispose();
			this.destroyed = true;
		}
	}
	const Processor = FaustFFTAudioWorkletProcessor;
	if (register) try {
		registerProcessor(processorName || dspName || "myfftdsp", Processor);
	} catch (error) {
		console.warn(error);
	}
	return FaustFFTAudioWorkletProcessor;
};
var FaustFFTAudioWorkletProcessor_default = getFaustFFTAudioWorkletProcessor;
function __awaiter(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P ? value : new P(function(resolve) {
			resolve(value);
		});
	}
	return new (P || (P = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}
function __generator(thisArg, body) {
	var _ = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	}, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
	return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
		return this;
	}), g;
	function verb(n) {
		return function(v) {
			return step([n, v]);
		};
	}
	function step(op) {
		if (f) throw new TypeError("Generator is already executing.");
		while (g && (g = 0, op[0] && (_ = 0)), _) try {
			if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
			if (y = 0, t) op = [op[0] & 2, t.value];
			switch (op[0]) {
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_.label++;
					y = op[1];
					op = [0];
					continue;
				case 7:
					op = _.ops.pop();
					_.trys.pop();
					continue;
				default:
					if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_ = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_.label = op[1];
						break;
					}
					if (op[0] === 6 && _.label < t[1]) {
						_.label = t[1];
						t = op;
						break;
					}
					if (t && _.label < t[2]) {
						_.label = t[2];
						_.ops.push(op);
						break;
					}
					if (t[2]) _.ops.pop();
					_.trys.pop();
					continue;
			}
			op = body.call(thisArg, _);
		} catch (e) {
			op = [6, e];
			y = 0;
		} finally {
			f = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 32;
var KEY = new Uint32Array([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]);
var INIT = [
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
];
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
var RawSha256 = (function() {
	function RawSha2562() {
		this.state = Int32Array.from(INIT);
		this.temp = new Int32Array(64);
		this.buffer = new Uint8Array(64);
		this.bufferLength = 0;
		this.bytesHashed = 0;
		this.finished = false;
	}
	RawSha2562.prototype.update = function(data) {
		if (this.finished) throw new Error("Attempted to update an already finished hash.");
		var position = 0;
		var byteLength = data.byteLength;
		this.bytesHashed += byteLength;
		if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) throw new Error("Cannot hash more than 2^53 - 1 bits");
		while (byteLength > 0) {
			this.buffer[this.bufferLength++] = data[position++];
			byteLength--;
			if (this.bufferLength === BLOCK_SIZE) {
				this.hashBuffer();
				this.bufferLength = 0;
			}
		}
	};
	RawSha2562.prototype.digest = function() {
		if (!this.finished) {
			var bitsHashed = this.bytesHashed * 8;
			var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
			var undecoratedLength = this.bufferLength;
			bufferView.setUint8(this.bufferLength++, 128);
			if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
				for (var i = this.bufferLength; i < BLOCK_SIZE; i++) bufferView.setUint8(i, 0);
				this.hashBuffer();
				this.bufferLength = 0;
			}
			for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) bufferView.setUint8(i, 0);
			bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
			bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
			this.hashBuffer();
			this.finished = true;
		}
		var out = new Uint8Array(DIGEST_LENGTH);
		for (var i = 0; i < 8; i++) {
			out[i * 4] = this.state[i] >>> 24 & 255;
			out[i * 4 + 1] = this.state[i] >>> 16 & 255;
			out[i * 4 + 2] = this.state[i] >>> 8 & 255;
			out[i * 4 + 3] = this.state[i] >>> 0 & 255;
		}
		return out;
	};
	RawSha2562.prototype.hashBuffer = function() {
		var _a = this, buffer = _a.buffer, state = _a.state;
		var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
		for (var i = 0; i < BLOCK_SIZE; i++) {
			if (i < 16) this.temp[i] = (buffer[i * 4] & 255) << 24 | (buffer[i * 4 + 1] & 255) << 16 | (buffer[i * 4 + 2] & 255) << 8 | buffer[i * 4 + 3] & 255;
			else {
				var u = this.temp[i - 2];
				var t1_1 = (u >>> 17 | u << 15) ^ (u >>> 19 | u << 13) ^ u >>> 10;
				u = this.temp[i - 15];
				var t2_1 = (u >>> 7 | u << 25) ^ (u >>> 18 | u << 14) ^ u >>> 3;
				this.temp[i] = (t1_1 + this.temp[i - 7] | 0) + (t2_1 + this.temp[i - 16] | 0);
			}
			var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i] + this.temp[i] | 0) | 0) | 0;
			var t2 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
			state7 = state6;
			state6 = state5;
			state5 = state4;
			state4 = state3 + t1 | 0;
			state3 = state2;
			state2 = state1;
			state1 = state0;
			state0 = t1 + t2 | 0;
		}
		state[0] += state0;
		state[1] += state1;
		state[2] += state2;
		state[3] += state3;
		state[4] += state4;
		state[5] += state5;
		state[6] += state6;
		state[7] += state7;
	};
	return RawSha2562;
})();
var fromUtf8 = (input) => new TextEncoder().encode(input);
var fromUtf82 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
	return Buffer.from(input, "utf8");
} : fromUtf8;
function convertToBuffer(data) {
	if (data instanceof Uint8Array) return data;
	if (typeof data === "string") return fromUtf82(data);
	if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
	return new Uint8Array(data);
}
function isEmptyData(data) {
	if (typeof data === "string") return data.length === 0;
	return data.byteLength === 0;
}
var Sha256 = (function() {
	function Sha2562(secret) {
		this.secret = secret;
		this.hash = new RawSha256();
		this.reset();
	}
	Sha2562.prototype.update = function(toHash) {
		if (isEmptyData(toHash) || this.error) return;
		try {
			this.hash.update(convertToBuffer(toHash));
		} catch (e) {
			this.error = e;
		}
	};
	Sha2562.prototype.digestSync = function() {
		if (this.error) throw this.error;
		if (this.outer) {
			if (!this.outer.finished) this.outer.update(this.hash.digest());
			return this.outer.digest();
		}
		return this.hash.digest();
	};
	Sha2562.prototype.digest = function() {
		return __awaiter(this, void 0, void 0, function() {
			return __generator(this, function(_a) {
				return [2, this.digestSync()];
			});
		});
	};
	Sha2562.prototype.reset = function() {
		this.hash = new RawSha256();
		if (this.secret) {
			this.outer = new RawSha256();
			var inner = bufferFromSecret(this.secret);
			var outer = new Uint8Array(BLOCK_SIZE);
			outer.set(inner);
			for (var i = 0; i < BLOCK_SIZE; i++) {
				inner[i] ^= 54;
				outer[i] ^= 92;
			}
			this.hash.update(inner);
			this.outer.update(outer);
			for (var i = 0; i < inner.byteLength; i++) inner[i] = 0;
		}
	};
	return Sha2562;
})();
function bufferFromSecret(secret) {
	var input = convertToBuffer(secret);
	if (input.byteLength > BLOCK_SIZE) {
		var bufferHash = new RawSha256();
		bufferHash.update(input);
		input = bufferHash.digest();
	}
	var buffer = new Uint8Array(BLOCK_SIZE);
	buffer.set(input);
	return buffer;
}
var ab2str = (buf) => String.fromCharCode.apply(null, Array.from(buf));
var str2ab = (str) => {
	const buf = new ArrayBuffer(str.length);
	const bufView = new Uint8Array(buf);
	for (let i = 0, strLen = str.length; i < strLen; i++) bufView[i] = str.charCodeAt(i);
	return bufView;
};
var sha256 = async (str) => {
	const sha2562 = new Sha256();
	sha2562.update(str);
	return Array.from(await sha2562.digest()).map((b) => b.toString(16).padStart(2, "0")).join("");
};
var _FaustCompiler = class _FaustCompiler {
	/**
	* Get a stringified DSP factories table
	*/
	static serializeDSPFactories() {
		const table = {};
		this.gFactories.forEach((factory, shaKey) => {
			const { code, json, poly } = factory;
			table[shaKey] = {
				code: btoa(ab2str(code)),
				json: JSON.parse(json),
				poly
			};
		});
		return table;
	}
	/**
	* Get a stringified DSP factories table as string
	*/
	static stringifyDSPFactories() {
		return JSON.stringify(this.serializeDSPFactories());
	}
	/**
	* Import a DSP factories table
	*/
	static deserializeDSPFactories(table) {
		const awaited = [];
		for (const shaKey in table) {
			const { code, json, poly } = table[shaKey];
			const ab = str2ab(atob(code));
			awaited.push(WebAssembly.compile(ab).then((module) => this.gFactories.set(shaKey, {
				shaKey,
				cfactory: 0,
				code: ab,
				module,
				json: JSON.stringify(json),
				poly,
				soundfiles: {}
			})));
		}
		return Promise.all(awaited);
	}
	/**
	* Import a stringified DSP factories table
	*/
	static importDSPFactories(tableStr) {
		const table = JSON.parse(tableStr);
		return this.deserializeDSPFactories(table);
	}
	constructor(libFaust) {
		this.fLibFaust = libFaust;
		this.fErrorMessage = "";
	}
	intVec2intArray(vec) {
		const size = vec.size();
		const ui8Code = new Uint8Array(size);
		for (let i = 0; i < size; i++) ui8Code[i] = vec.get(i);
		return ui8Code;
	}
	async createDSPFactory(name, code, args, poly) {
		if (_FaustCompiler.gFactories.size > 10) _FaustCompiler.gFactories.clear();
		const shaKey = await sha256(name + code + args + (poly ? "poly" : "mono"));
		if (_FaustCompiler.gFactories.has(shaKey)) return _FaustCompiler.gFactories.get(shaKey) || null;
		else try {
			const faustDspWasm = this.fLibFaust.createDSPFactory(name, code, args, !poly);
			const ui8Code = this.intVec2intArray(faustDspWasm.data);
			faustDspWasm.data.delete();
			const module = await WebAssembly.compile(ui8Code);
			const factory = {
				shaKey,
				cfactory: faustDspWasm.cfactory,
				code: ui8Code,
				module,
				json: faustDspWasm.json,
				poly,
				soundfiles: {}
			};
			this.deleteDSPFactory(factory);
			_FaustCompiler.gFactories.set(shaKey, factory);
			return factory;
		} catch (e) {
			this.fErrorMessage = this.fLibFaust.getErrorAfterException();
			this.fLibFaust.cleanupAfterException();
			throw this.fErrorMessage ? new Error(this.fErrorMessage) : e;
		}
	}
	version() {
		return this.fLibFaust.version();
	}
	getErrorMessage() {
		return this.fErrorMessage;
	}
	async createMonoDSPFactory(name, code, args) {
		return this.createDSPFactory(name, code, args, false);
	}
	async createPolyDSPFactory(name, code, args) {
		return this.createDSPFactory(name, code, args, true);
	}
	deleteDSPFactory(factory) {
		this.fLibFaust.deleteDSPFactory(factory.cfactory);
		factory.cfactory = 0;
	}
	expandDSP(code, args) {
		try {
			return this.fLibFaust.expandDSP("FaustDSP", code, args);
		} catch (e) {
			this.fErrorMessage = this.fLibFaust.getErrorAfterException();
			this.fLibFaust.cleanupAfterException();
			throw this.fErrorMessage ? new Error(this.fErrorMessage) : e;
		}
	}
	generateAuxFiles(name, code, args) {
		try {
			return this.fLibFaust.generateAuxFiles(name, code, args);
		} catch (e) {
			this.fErrorMessage = this.fLibFaust.getErrorAfterException();
			this.fLibFaust.cleanupAfterException();
			throw this.fErrorMessage ? new Error(this.fErrorMessage) : e;
		}
	}
	deleteAllDSPFactories() {
		this.fLibFaust.deleteAllDSPFactories();
	}
	fs() {
		return this.fLibFaust.fs();
	}
	async getAsyncInternalMixerModule(isDouble = false) {
		const bufferKey = isDouble ? "mixer64Buffer" : "mixer32Buffer";
		const moduleKey = isDouble ? "mixer64Module" : "mixer32Module";
		if (this[moduleKey]) return {
			mixerBuffer: this[bufferKey],
			mixerModule: this[moduleKey]
		};
		const path = isDouble ? "/usr/rsrc/mixer64.wasm" : "/usr/rsrc/mixer32.wasm";
		const mixerBuffer = this.fs().readFile(path, { encoding: "binary" });
		this[bufferKey] = mixerBuffer;
		const mixerModule = await WebAssembly.compile(new Uint8Array(mixerBuffer));
		this[moduleKey] = mixerModule;
		return {
			mixerBuffer,
			mixerModule
		};
	}
	getSyncInternalMixerModule(isDouble = false) {
		const bufferKey = isDouble ? "mixer64Buffer" : "mixer32Buffer";
		const moduleKey = isDouble ? "mixer64Module" : "mixer32Module";
		if (this[moduleKey]) return {
			mixerBuffer: this[bufferKey],
			mixerModule: this[moduleKey]
		};
		const path = isDouble ? "/usr/rsrc/mixer64.wasm" : "/usr/rsrc/mixer32.wasm";
		const mixerBuffer = this.fs().readFile(path, { encoding: "binary" });
		this[bufferKey] = mixerBuffer;
		const mixerModule = new WebAssembly.Module(new Uint8Array(mixerBuffer));
		this[moduleKey] = mixerModule;
		return {
			mixerBuffer,
			mixerModule
		};
	}
};
_FaustCompiler.gFactories = /* @__PURE__ */ new Map();
var FaustCompiler_default = _FaustCompiler;
var FaustDspInstance = class {
	constructor(exports) {
		this.fExports = exports;
	}
	compute($dsp, count, $input, $output) {
		this.fExports.compute($dsp, count, $input, $output);
	}
	getNumInputs($dsp) {
		return this.fExports.getNumInputs($dsp);
	}
	getNumOutputs($dsp) {
		return this.fExports.getNumOutputs($dsp);
	}
	getParamValue($dsp, index) {
		return this.fExports.getParamValue($dsp, index);
	}
	getSampleRate($dsp) {
		return this.fExports.getSampleRate($dsp);
	}
	init($dsp, sampleRate) {
		this.fExports.init($dsp, sampleRate);
	}
	instanceClear($dsp) {
		this.fExports.instanceClear($dsp);
	}
	instanceConstants($dsp, sampleRate) {
		this.fExports.instanceConstants($dsp, sampleRate);
	}
	instanceInit($dsp, sampleRate) {
		this.fExports.instanceInit($dsp, sampleRate);
	}
	instanceResetUserInterface($dsp) {
		this.fExports.instanceResetUserInterface($dsp);
	}
	setParamValue($dsp, index, value) {
		this.fExports.setParamValue($dsp, index, value);
	}
};
var FaustWasmInstantiator = class {
	static createWasmImport(memory) {
		return { env: {
			memory: memory || new WebAssembly.Memory({ initial: 100 }),
			memoryBase: 0,
			tableBase: 0,
			_abs: Math.abs,
			_acosf: Math.acos,
			_asinf: Math.asin,
			_atanf: Math.atan,
			_atan2f: Math.atan2,
			_ceilf: Math.ceil,
			_cosf: Math.cos,
			_expf: Math.exp,
			_floorf: Math.floor,
			_fmodf: (x, y) => x % y,
			_logf: Math.log,
			_log10f: Math.log10,
			_max_f: Math.max,
			_min_f: Math.min,
			_remainderf: (x, y) => x - Math.round(x / y) * y,
			_powf: Math.pow,
			_roundf: Math.round,
			_sinf: Math.sin,
			_sqrtf: Math.sqrt,
			_tanf: Math.tan,
			_acoshf: Math.acosh,
			_asinhf: Math.asinh,
			_atanhf: Math.atanh,
			_coshf: Math.cosh,
			_sinhf: Math.sinh,
			_tanhf: Math.tanh,
			_isnanf: Number.isNaN,
			_isinff: (x) => !isFinite(x),
			_copysignf: (x, y) => Math.sign(x) === Math.sign(y) ? x : -x,
			_acos: Math.acos,
			_asin: Math.asin,
			_atan: Math.atan,
			_atan2: Math.atan2,
			_ceil: Math.ceil,
			_cos: Math.cos,
			_exp: Math.exp,
			_floor: Math.floor,
			_fmod: (x, y) => x % y,
			_log: Math.log,
			_log10: Math.log10,
			_max_: Math.max,
			_min_: Math.min,
			_remainder: (x, y) => x - Math.round(x / y) * y,
			_pow: Math.pow,
			_round: Math.round,
			_sin: Math.sin,
			_sqrt: Math.sqrt,
			_tan: Math.tan,
			_acosh: Math.acosh,
			_asinh: Math.asinh,
			_atanh: Math.atanh,
			_cosh: Math.cosh,
			_sinh: Math.sinh,
			_tanh: Math.tanh,
			_isnan: Number.isNaN,
			_isinf: (x) => !isFinite(x),
			_copysign: (x, y) => Math.sign(x) === Math.sign(y) ? x : -x,
			table: new WebAssembly.Table({
				initial: 0,
				element: "anyfunc"
			})
		} };
	}
	static createWasmMemoryPoly(voicesIn, sampleSize, dspMeta, effectMeta, bufferSize) {
		const voices = Math.max(4, voicesIn);
		const ptrSize = sampleSize;
		const pow2limit = (x) => {
			let n = 65536;
			while (n < x) n *= 2;
			return n;
		};
		let memorySize = pow2limit((effectMeta ? effectMeta.size : 0) + dspMeta.size * voices + (dspMeta.inputs + dspMeta.outputs * 2) * (ptrSize + bufferSize * sampleSize)) / 65536;
		memorySize = Math.max(2, memorySize);
		return new WebAssembly.Memory({ initial: memorySize });
	}
	static createWasmMemoryMono(sampleSize, dspMeta, bufferSize) {
		const ptrSize = sampleSize;
		const memorySize = (dspMeta.size + (dspMeta.inputs + dspMeta.outputs) * (ptrSize + bufferSize * sampleSize)) / 65536;
		return new WebAssembly.Memory({ initial: memorySize * 2 });
	}
	static createMonoDSPInstanceAux(instance, json, mem = null) {
		const functions = instance.exports;
		const api = new FaustDspInstance(functions);
		return {
			memory: mem ? mem : instance.exports.memory,
			api,
			json
		};
	}
	static createMemoryMono(monoFactory) {
		const monoMeta = JSON.parse(monoFactory.json);
		const sampleSize = monoMeta.compile_options.match("-double") ? 8 : 4;
		return this.createWasmMemoryMono(sampleSize, monoMeta, 8192);
	}
	static createMemoryPoly(voices, voiceFactory, effectFactory) {
		const voiceMeta = JSON.parse(voiceFactory.json);
		const effectMeta = effectFactory && effectFactory.json ? JSON.parse(effectFactory.json) : null;
		const sampleSize = voiceMeta.compile_options.match("-double") ? 8 : 4;
		return this.createWasmMemoryPoly(voices, sampleSize, voiceMeta, effectMeta, 8192);
	}
	static createMixerAux(mixerModule, memory) {
		const mixerImport = {
			imports: { print: console.log },
			memory: { memory }
		};
		return new WebAssembly.Instance(mixerModule, mixerImport).exports;
	}
	static async loadDSPFactory(wasmPath, jsonPath) {
		const wasmFile = await fetch(wasmPath);
		if (!wasmFile.ok) throw new Error(`=> exception raised while running loadDSPFactory, file not found: ${wasmPath}`);
		try {
			const wasmBuffer = await wasmFile.arrayBuffer();
			const module = await WebAssembly.compile(wasmBuffer);
			const json = await (await fetch(jsonPath)).text();
			const poly = JSON.parse(json).compile_options.indexOf("wasm-e") !== -1;
			return {
				cfactory: 0,
				code: new Uint8Array(wasmBuffer),
				module,
				json,
				poly
			};
		} catch (e) {
			throw e;
		}
	}
	static async loadDSPMixer(mixerPath, fs) {
		try {
			let mixerBuffer = null;
			if (fs) mixerBuffer = new Uint8Array(fs.readFile(mixerPath, { encoding: "binary" }));
			else mixerBuffer = await (await fetch(mixerPath)).arrayBuffer();
			return WebAssembly.compile(mixerBuffer);
		} catch (e) {
			throw e;
		}
	}
	static async createAsyncMonoDSPInstance(factory) {
		if (/"type":\s*"soundfile"/.test(factory.json)) {
			const memory = this.createMemoryMono(factory);
			const instance = await WebAssembly.instantiate(factory.module, this.createWasmImport(memory));
			return this.createMonoDSPInstanceAux(instance, factory.json, memory);
		} else {
			const instance = await WebAssembly.instantiate(factory.module, this.createWasmImport());
			return this.createMonoDSPInstanceAux(instance, factory.json);
		}
	}
	static createSyncMonoDSPInstance(factory) {
		if (/"type":\s*"soundfile"/.test(factory.json)) {
			const memory = this.createMemoryMono(factory);
			const instance = new WebAssembly.Instance(factory.module, this.createWasmImport(memory));
			return this.createMonoDSPInstanceAux(instance, factory.json, memory);
		} else {
			const instance = new WebAssembly.Instance(factory.module, this.createWasmImport());
			return this.createMonoDSPInstanceAux(instance, factory.json);
		}
	}
	static async createAsyncPolyDSPInstance(voiceFactory, mixerModule, voices, effectFactory) {
		const memory = this.createMemoryPoly(voices, voiceFactory, effectFactory);
		const voiceFunctions = (await WebAssembly.instantiate(voiceFactory.module, this.createWasmImport(memory))).exports;
		const voiceAPI = new FaustDspInstance(voiceFunctions);
		const mixerAPI = this.createMixerAux(mixerModule, memory);
		if (effectFactory) {
			const effectFunctions = (await WebAssembly.instantiate(effectFactory.module, this.createWasmImport(memory))).exports;
			return {
				memory,
				voices,
				voiceAPI,
				effectAPI: new FaustDspInstance(effectFunctions),
				mixerAPI,
				voiceJSON: voiceFactory.json,
				effectJSON: effectFactory.json
			};
		} else return {
			memory,
			voices,
			voiceAPI,
			mixerAPI,
			voiceJSON: voiceFactory.json
		};
	}
	static createSyncPolyDSPInstance(voiceFactory, mixerModule, voices, effectFactory) {
		const memory = this.createMemoryPoly(voices, voiceFactory, effectFactory);
		const voiceFunctions = new WebAssembly.Instance(voiceFactory.module, this.createWasmImport(memory)).exports;
		const voiceAPI = new FaustDspInstance(voiceFunctions);
		const mixerAPI = this.createMixerAux(mixerModule, memory);
		if (effectFactory) {
			const effectFunctions = new WebAssembly.Instance(effectFactory.module, this.createWasmImport(memory)).exports;
			return {
				memory,
				voices,
				voiceAPI,
				effectAPI: new FaustDspInstance(effectFunctions),
				mixerAPI,
				voiceJSON: voiceFactory.json,
				effectJSON: effectFactory.json
			};
		} else return {
			memory,
			voices,
			voiceAPI,
			mixerAPI,
			voiceJSON: voiceFactory.json
		};
	}
};
var FaustWasmInstantiator_default = FaustWasmInstantiator;
var FaustSensors = class _FaustSensors {
	/**
	* Function to convert a number to an axis type
	*
	* @param value number
	* @returns axis type
	*/
	static convertToAxis(value) {
		switch (value) {
			case 0: return 0;
			case 1: return 1;
			case 2: return 2;
			default:
				console.error("Error: Axis not found value: " + value);
				return 0;
		}
	}
	/**
	* Function to convert a number to a curve type
	*
	* @param value number
	* @returns curve type
	*/
	static convertToCurve(value) {
		switch (value) {
			case 0: return 0;
			case 1: return 1;
			case 2: return 2;
			case 3: return 3;
			default:
				console.error("Error: Curve not found value: " + value);
				return 0;
		}
	}
	static get Range() {
		if (!this._Range) this._Range = class {
			constructor(x, y) {
				this.fLo = Math.min(x, y);
				this.fHi = Math.max(x, y);
			}
			clip(x) {
				if (x < this.fLo) return this.fLo;
				if (x > this.fHi) return this.fHi;
				return x;
			}
		};
		return this._Range;
	}
	/**
	* Interpolator class
	*/
	static get Interpolator() {
		if (!this._Interpolator) this._Interpolator = class {
			constructor(lo, hi, v1, v2) {
				this.fRange = new _FaustSensors.Range(lo, hi);
				if (hi !== lo) {
					this.fCoef = (v2 - v1) / (hi - lo);
					this.fOffset = v1 - lo * this.fCoef;
				} else {
					this.fCoef = 0;
					this.fOffset = (v1 + v2) / 2;
				}
			}
			returnMappedValue(v) {
				const x = this.fRange.clip(v);
				return this.fOffset + x * this.fCoef;
			}
			getLowHigh(amin, amax) {
				return {
					amin: this.fRange.fLo,
					amax: this.fRange.fHi
				};
			}
		};
		return this._Interpolator;
	}
	/**
	* Interpolator3pt class, combine two interpolators
	*/
	static get Interpolator3pt() {
		if (!this._Interpolator3pt) this._Interpolator3pt = class {
			constructor(lo, mid, hi, v1, vMid, v2) {
				this.fSegment1 = new _FaustSensors.Interpolator(lo, mid, v1, vMid);
				this.fSegment2 = new _FaustSensors.Interpolator(mid, hi, vMid, v2);
				this.fMid = mid;
			}
			returnMappedValue(x) {
				return x < this.fMid ? this.fSegment1.returnMappedValue(x) : this.fSegment2.returnMappedValue(x);
			}
			getMappingValues(amin, amid, amax) {
				const lowHighSegment1 = this.fSegment1.getLowHigh(amin, amid);
				const lowHighSegment2 = this.fSegment2.getLowHigh(amid, amax);
				return {
					amin: lowHighSegment1.amin,
					amid: lowHighSegment2.amin,
					amax: lowHighSegment2.amax
				};
			}
		};
		return this._Interpolator3pt;
	}
	/**
	* UpConverter class, convert accelerometer value to Faust value
	*/
	static get UpConverter() {
		if (!this._UpConverter) this._UpConverter = class {
			constructor(amin, amid, amax, fmin, fmid, fmax) {
				this.fActive = true;
				this.fA2F = new _FaustSensors.Interpolator3pt(amin, amid, amax, fmin, fmid, fmax);
				this.fF2A = new _FaustSensors.Interpolator3pt(fmin, fmid, fmax, amin, amid, amax);
			}
			uiToFaust(x) {
				return this.fA2F.returnMappedValue(x);
			}
			faustToUi(x) {
				return this.fF2A.returnMappedValue(x);
			}
			setMappingValues(amin, amid, amax, min, init, max) {
				this.fA2F = new _FaustSensors.Interpolator3pt(amin, amid, amax, min, init, max);
				this.fF2A = new _FaustSensors.Interpolator3pt(min, init, max, amin, amid, amax);
			}
			getMappingValues(amin, amid, amax) {
				return this.fA2F.getMappingValues(amin, amid, amax);
			}
			setActive(onOff) {
				this.fActive = onOff;
			}
			getActive() {
				return this.fActive;
			}
		};
		return this._UpConverter;
	}
	/**
	* DownConverter class, convert accelerometer value to Faust value
	*/
	static get DownConverter() {
		if (!this._DownConverter) this._DownConverter = class {
			constructor(amin, amid, amax, fmin, fmid, fmax) {
				this.fActive = true;
				this.fA2F = new _FaustSensors.Interpolator3pt(amin, amid, amax, fmax, fmid, fmin);
				this.fF2A = new _FaustSensors.Interpolator3pt(fmin, fmid, fmax, amax, amid, amin);
			}
			uiToFaust(x) {
				return this.fA2F.returnMappedValue(x);
			}
			faustToUi(x) {
				return this.fF2A.returnMappedValue(x);
			}
			setMappingValues(amin, amid, amax, min, init, max) {
				this.fA2F = new _FaustSensors.Interpolator3pt(amin, amid, amax, max, init, min);
				this.fF2A = new _FaustSensors.Interpolator3pt(min, init, max, amax, amid, amin);
			}
			getMappingValues(amin, amid, amax) {
				return this.fA2F.getMappingValues(amin, amid, amax);
			}
			setActive(onOff) {
				this.fActive = onOff;
			}
			getActive() {
				return this.fActive;
			}
		};
		return this._DownConverter;
	}
	/**
	* UpDownConverter class, convert accelerometer value to Faust value
	*/
	static get UpDownConverter() {
		if (!this._UpDownConverter) this._UpDownConverter = class {
			constructor(amin, amid, amax, fmin, fmid, fmax) {
				this.fActive = true;
				this.fA2F = new _FaustSensors.Interpolator3pt(amin, amid, amax, fmin, fmax, fmin);
				this.fF2A = new _FaustSensors.Interpolator(fmin, fmax, amin, amax);
			}
			uiToFaust(x) {
				return this.fA2F.returnMappedValue(x);
			}
			faustToUi(x) {
				return this.fF2A.returnMappedValue(x);
			}
			setMappingValues(amin, amid, amax, min, init, max) {
				this.fA2F = new _FaustSensors.Interpolator3pt(amin, amid, amax, min, max, min);
				this.fF2A = new _FaustSensors.Interpolator(min, max, amin, amax);
			}
			getMappingValues(amin, amid, amax) {
				return this.fA2F.getMappingValues(amin, amid, amax);
			}
			setActive(onOff) {
				this.fActive = onOff;
			}
			getActive() {
				return this.fActive;
			}
		};
		return this._UpDownConverter;
	}
	static get DownUpConverter() {
		if (!this._DownUpConverter) this._DownUpConverter = class {
			constructor(amin, amid, amax, fmin, fmid, fmax) {
				this.fActive = true;
				this.fA2F = new _FaustSensors.Interpolator3pt(amin, amid, amax, fmax, fmin, fmax);
				this.fF2A = new _FaustSensors.Interpolator(fmin, fmax, amin, amax);
			}
			uiToFaust(x) {
				return this.fA2F.returnMappedValue(x);
			}
			faustToUi(x) {
				return this.fF2A.returnMappedValue(x);
			}
			setMappingValues(amin, amid, amax, min, init, max) {
				this.fA2F = new _FaustSensors.Interpolator3pt(amin, amid, amax, max, min, max);
				this.fF2A = new _FaustSensors.Interpolator(min, max, amin, amax);
			}
			getMappingValues(amin, amid, amax) {
				return this.fA2F.getMappingValues(amin, amid, amax);
			}
			setActive(onOff) {
				this.fActive = onOff;
			}
			getActive() {
				return this.fActive;
			}
		};
		return this._DownUpConverter;
	}
	/**
	* Public function to build the accelerometer handler
	*
	* @returns `UpdatableValueConverter` built for the given curve
	*/
	static buildHandler(curve, amin, amid, amax, min, init, max) {
		switch (curve) {
			case 0: return new _FaustSensors.UpConverter(amin, amid, amax, min, init, max);
			case 1: return new _FaustSensors.DownConverter(amin, amid, amax, min, init, max);
			case 2: return new _FaustSensors.UpDownConverter(amin, amid, amax, min, init, max);
			case 3: return new _FaustSensors.DownUpConverter(amin, amid, amax, min, init, max);
			default: return new _FaustSensors.UpConverter(amin, amid, amax, min, init, max);
		}
	}
};
var WasmAllocator = class {
	constructor(memory, offset) {
		this.memory = memory;
		this.allocatedBytes = offset;
	}
	/**
	* Allocates a block of memory of the specified size, returning the pointer to the
	* beginning of the block. The block is allocated at the current offset and the
	* offset is incremented by the size of the block.
	*
	* @param sizeInBytes The size of the block to allocate in bytes.
	* @returns The offset (pointer) to the beginning of the allocated block.
	*/
	alloc(sizeInBytes) {
		const currentOffset = this.allocatedBytes;
		const newOffset = currentOffset + sizeInBytes;
		const totalMemoryBytes = this.memory.buffer.byteLength;
		if (newOffset > totalMemoryBytes) {
			const neededPages = Math.ceil((newOffset - totalMemoryBytes) / 65536);
			console.log(`GROW: ${neededPages} pages`);
			this.memory.grow(neededPages);
		}
		this.allocatedBytes = newOffset;
		return currentOffset;
	}
	/**
	* Returns the underlying buffer object.
	*
	* @returns The buffer object.
	*/
	getBuffer() {
		return this.memory.buffer;
	}
	/**
	* Returns the Int32 view of the underlying buffer object.
	*
	* @returns The view of the memory buffer as Int32Array.
	*/
	getInt32Array() {
		return new Int32Array(this.memory.buffer);
	}
	/**
	* Returns the Int64 view of the underlying buffer object.
	*
	* @returns The view of the memory buffer as BigInt64Array.
	*/
	getInt64Array() {
		return new BigInt64Array(this.memory.buffer);
	}
	/**
	* Returns the Float32 view of the underlying buffer object.
	*
	* @returns The view of the memory buffer as Float32Array.
	*/
	getFloat32Array() {
		return new Float32Array(this.memory.buffer);
	}
	/**
	* Returns the Float64 view of the underlying buffer object..
	*
	* @returns The view of the memory buffer as Float64Array.
	*/
	getFloat64Array() {
		return new Float64Array(this.memory.buffer);
	}
};
var Soundfile = class _Soundfile {
	/** Maximum number of soundfile parts. */
	static get MAX_SOUNDFILE_PARTS() {
		return 256;
	}
	/** Maximum number of channels. */
	static get MAX_CHAN() {
		return 64;
	}
	/** Maximum buffer size in frames. */
	static get BUFFER_SIZE() {
		return 1024;
	}
	/** Default sample rate. */
	static get SAMPLE_RATE() {
		return 44100;
	}
	constructor(allocator, sampleSize, curChan, length, maxChan, totalParts) {
		this.fSampleSize = sampleSize;
		this.fIntSize = this.fSampleSize;
		this.fPtrSize = 4;
		this.fAllocator = allocator;
		console.log(`Soundfile constructor: curChan: ${curChan}, length: ${length}, maxChan: ${maxChan}, totalParts: ${totalParts}`);
		this.fPtr = allocator.alloc(4 * this.fPtrSize);
		this.fLength = allocator.alloc(_Soundfile.MAX_SOUNDFILE_PARTS * this.fIntSize);
		this.fSR = allocator.alloc(_Soundfile.MAX_SOUNDFILE_PARTS * this.fIntSize);
		this.fOffset = allocator.alloc(_Soundfile.MAX_SOUNDFILE_PARTS * this.fIntSize);
		this.fBuffers = this.allocBuffers(curChan, length, maxChan);
		const HEAP32 = this.fAllocator.getInt32Array();
		HEAP32[this.fPtr >> 2] = this.fBuffers;
		HEAP32[this.fPtr + this.fPtrSize >> 2] = this.fLength;
		HEAP32[this.fPtr + 2 * this.fPtrSize >> 2] = this.fSR;
		HEAP32[this.fPtr + 3 * this.fPtrSize >> 2] = this.fOffset;
		for (let chan = 0; chan < curChan; chan++) {
			const buffer = HEAP32[(this.fBuffers >> 2) + chan];
			console.log(`allocBuffers AFTER: ${chan} - ${buffer}`);
		}
	}
	allocBuffers(curChan, length, maxChan) {
		const buffers = this.fAllocator.alloc(maxChan * this.fPtrSize);
		console.log(`allocBuffers buffers: ${buffers}`);
		for (let chan = 0; chan < curChan; chan++) {
			const buffer = this.fAllocator.alloc(length * this.fSampleSize);
			const HEAP32 = this.fAllocator.getInt32Array();
			HEAP32[(buffers >> 2) + chan] = buffer;
		}
		return buffers;
	}
	shareBuffers(curChan, maxChan) {
		const HEAP32 = this.fAllocator.getInt32Array();
		for (let chan = curChan; chan < maxChan; chan++) HEAP32[(this.fBuffers >> 2) + chan] = HEAP32[(this.fBuffers >> 2) + chan % curChan];
	}
	copyToOut(part, maxChannels, offset, audioData) {
		if (this.fIntSize === 4) {
			const HEAP32 = this.fAllocator.getInt32Array();
			HEAP32[(this.fLength >> Math.log2(this.fIntSize)) + part] = audioData.audioBuffer[0].length;
			HEAP32[(this.fSR >> Math.log2(this.fIntSize)) + part] = audioData.sampleRate;
			HEAP32[(this.fOffset >> Math.log2(this.fIntSize)) + part] = offset;
		} else {
			const HEAP64 = this.fAllocator.getInt64Array();
			HEAP64[(this.fLength >> Math.log2(this.fIntSize)) + part] = BigInt(audioData.audioBuffer[0].length);
			HEAP64[(this.fSR >> Math.log2(this.fIntSize)) + part] = BigInt(audioData.sampleRate);
			HEAP64[(this.fOffset >> Math.log2(this.fIntSize)) + part] = BigInt(offset);
		}
		console.log(`copyToOut: part: ${part}, maxChannels: ${maxChannels}, offset: ${offset}, buffer: ${audioData}`);
		if (this.fSampleSize === 8) this.copyToOutReal64(maxChannels, offset, audioData);
		else this.copyToOutReal32(maxChannels, offset, audioData);
	}
	copyToOutReal32(maxChannels, offset, audioData) {
		const HEAP32 = this.fAllocator.getInt32Array();
		const HEAPF = this.fAllocator.getFloat32Array();
		for (let chan = 0; chan < audioData.audioBuffer.length; chan++) {
			const input = audioData.audioBuffer[chan];
			const output = HEAP32[(this.fBuffers >> 2) + chan];
			const begin = output + offset * this.fSampleSize >> Math.log2(this.fSampleSize);
			const end = output + (offset + input.length) * this.fSampleSize >> Math.log2(this.fSampleSize);
			console.log(`copyToOutReal32 begin: ${begin}, end: ${end}, delta: ${end - begin}`);
			const outputReal = HEAPF.subarray(output + offset * this.fSampleSize >> Math.log2(this.fSampleSize), output + (offset + input.length) * this.fSampleSize >> Math.log2(this.fSampleSize));
			for (let sample = 0; sample < input.length; sample++) outputReal[sample] = input[sample];
		}
	}
	copyToOutReal64(maxChannels, offset, audioData) {
		const HEAP32 = this.fAllocator.getInt32Array();
		const HEAPF = this.fAllocator.getFloat64Array();
		for (let chan = 0; chan < audioData.audioBuffer.length; chan++) {
			const input = audioData.audioBuffer[chan];
			const output = HEAP32[(this.fBuffers >> 2) + chan];
			const begin = output + offset * this.fSampleSize >> Math.log2(this.fSampleSize);
			const end = output + (offset + input.length) * this.fSampleSize >> Math.log2(this.fSampleSize);
			console.log(`copyToOutReal64 begin: ${begin}, end: ${end}, delta: ${end - begin}`);
			const outputReal = HEAPF.subarray(output + offset * this.fSampleSize >> Math.log2(this.fSampleSize), output + (offset + input.length) * this.fSampleSize >> Math.log2(this.fSampleSize));
			for (let sample = 0; sample < input.length; sample++) outputReal[sample] = input[sample];
		}
	}
	emptyFile(part, offset) {
		if (this.fIntSize === 4) {
			const HEAP32 = this.fAllocator.getInt32Array();
			HEAP32[(this.fLength >> Math.log2(this.fIntSize)) + part] = _Soundfile.BUFFER_SIZE;
			HEAP32[(this.fSR >> Math.log2(this.fIntSize)) + part] = _Soundfile.SAMPLE_RATE;
			HEAP32[(this.fOffset >> Math.log2(this.fIntSize)) + part] = offset;
		} else {
			const HEAP64 = this.fAllocator.getInt64Array();
			HEAP64[(this.fLength >> Math.log2(this.fIntSize)) + part] = BigInt(_Soundfile.BUFFER_SIZE);
			HEAP64[(this.fSR >> Math.log2(this.fIntSize)) + part] = BigInt(_Soundfile.SAMPLE_RATE);
			HEAP64[(this.fOffset >> Math.log2(this.fIntSize)) + part] = BigInt(offset);
		}
		return offset + _Soundfile.BUFFER_SIZE;
	}
	displayMemory(where = "", mem = false) {
		console.log("Soundfile memory: " + where);
		console.log(`fPtr: ${this.fPtr}`);
		console.log(`fBuffers: ${this.fBuffers}`);
		console.log(`fLength: ${this.fLength}`);
		console.log(`fSR: ${this.fSR}`);
		console.log(`fOffset: ${this.fOffset}`);
		const HEAP32 = this.fAllocator.getInt32Array();
		if (mem) console.log(`HEAP32: ${HEAP32}`);
		console.log(`HEAP32[this.fPtr >> 2]: ${HEAP32[this.fPtr >> 2]}`);
		console.log(`HEAP32[(this.fPtr + ptrSize) >> 2]: ${HEAP32[this.fPtr + this.fPtrSize >> 2]}`);
		console.log(`HEAP32[(this.fPtr + 2 * ptrSize) >> 2]: ${HEAP32[this.fPtr + 2 * this.fPtrSize >> 2]}`);
		console.log(`HEAP32[(this.fPtr + 3 * ptrSize) >> 2]: ${HEAP32[this.fPtr + 3 * this.fPtrSize >> 2]}`);
	}
	getPtr() {
		return this.fPtr;
	}
	getHEAP32() {
		return this.fAllocator.getInt32Array();
	}
	getHEAPFloat32() {
		return this.fAllocator.getFloat32Array();
	}
	getHEAPFloat64() {
		return this.fAllocator.getFloat64Array();
	}
};
var FaustBaseWebAudioDsp = class _FaustBaseWebAudioDsp {
	constructor(sampleSize, bufferSize, soundfiles) {
		this.fOutputHandler = null;
		this.fInputHandler = null;
		this.fComputeHandler = null;
		this.fPlotHandler = null;
		this.fCachedEvents = [];
		this.fBufferNum = 0;
		this.fInChannels = [];
		this.fOutChannels = [];
		this.fOutputsTimer = 5;
		this.fInputsItems = [];
		this.fOutputsItems = [];
		this.fDescriptor = [];
		this.fSoundfiles = [];
		this.fSoundfileBuffers = {};
		this.fPitchwheelLabel = [];
		this.fCtrlLabel = new Array(128).fill(null).map(() => []);
		this.fMidiKeyLabel = new Array(128).fill(null).map(() => []);
		this.fMidiKeyOnLabel = new Array(128).fill(null).map(() => []);
		this.fMidiKeyOffLabel = new Array(128).fill(null).map(() => []);
		this.fPathTable = {};
		this.fUICallback = (item) => {
			if (item.type === "hbargraph" || item.type === "vbargraph") {
				const registerPath = (alias) => {
					if (this.fPathTable[alias] === void 0) this.fPathTable[alias] = item.index;
				};
				this.fOutputsItems.push(item.address);
				registerPath(item.address);
				registerPath(item.shortname);
				registerPath(item.label);
			} else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
				const registerPath = (alias) => {
					if (this.fPathTable[alias] === void 0) this.fPathTable[alias] = item.index;
				};
				this.fInputsItems.push(item.address);
				registerPath(item.address);
				registerPath(item.shortname);
				registerPath(item.label);
				this.fDescriptor.push(item);
				if (!item.meta) return;
				item.meta.forEach((meta) => {
					var _a, _b, _c, _d, _e, _f;
					const { midi, acc, gyr } = meta;
					if (midi) {
						const strMidi = midi.trim();
						if (strMidi === "pitchwheel") {
							const matched = strMidi.match(/^pitchwheel\s(\d+)/);
							if (matched) this.fPitchwheelLabel.push({
								path: item.address,
								chan: parseInt(matched[1]),
								min: item.min,
								max: item.max
							});
							else this.fPitchwheelLabel.push({
								path: item.address,
								chan: 0,
								min: item.min,
								max: item.max
							});
						} else {
							const matched2 = strMidi.match(/^ctrl\s(\d+)\s(\d+)/);
							const matched1 = strMidi.match(/^ctrl\s(\d+)/);
							const matchedKey = strMidi.match(/^key\s+(\d+)(?:\s+(\d+))?$/);
							const matchedKeyOn = strMidi.match(/^keyon\s+(\d+)(?:\s+(\d+))?$/);
							const matchedKeyOff = strMidi.match(/^keyoff\s+(\d+)(?:\s+(\d+))?$/);
							if (matched2) this.fCtrlLabel[parseInt(matched2[1])].push({
								path: item.address,
								chan: parseInt(matched2[2]),
								min: item.min,
								max: item.max
							});
							else if (matched1) this.fCtrlLabel[parseInt(matched1[1])].push({
								path: item.address,
								chan: 0,
								min: item.min,
								max: item.max
							});
							else if (matchedKey) {
								const note = parseInt(matchedKey[1]);
								const channel = matchedKey[2] ? parseInt(matchedKey[2]) : 0;
								this.fMidiKeyLabel[note].push({
									path: item.address,
									chan: channel,
									min: (_a = item.min) != null ? _a : 0,
									max: (_b = item.max) != null ? _b : 1
								});
							} else if (matchedKeyOn) {
								const note = parseInt(matchedKeyOn[1]);
								const channel = matchedKeyOn[2] ? parseInt(matchedKeyOn[2]) : 0;
								this.fMidiKeyOnLabel[note].push({
									path: item.address,
									chan: channel,
									min: (_c = item.min) != null ? _c : 0,
									max: (_d = item.max) != null ? _d : 1
								});
							} else if (matchedKeyOff) {
								const note = parseInt(matchedKeyOff[1]);
								const channel = matchedKeyOff[2] ? parseInt(matchedKeyOff[2]) : 0;
								this.fMidiKeyOffLabel[note].push({
									path: item.address,
									chan: channel,
									min: (_e = item.min) != null ? _e : 0,
									max: (_f = item.max) != null ? _f : 1
								});
							}
						}
					}
					if (acc) {
						const numAcc = acc.trim().split(" ").map(Number);
						this.setupAccHandler(item.address, FaustSensors.convertToAxis(numAcc[0]), FaustSensors.convertToCurve(numAcc[1]), numAcc[2], numAcc[3], numAcc[4], item.min, item.init, item.max);
					}
					if (gyr) {
						const numAcc = gyr.trim().split(" ").map(Number);
						this.setupGyrHandler(item.address, FaustSensors.convertToAxis(numAcc[0]), FaustSensors.convertToCurve(numAcc[1]), numAcc[2], numAcc[3], numAcc[4], item.min, item.init, item.max);
					}
				});
			} else if (item.type === "soundfile") this.fSoundfiles.push({
				name: item.label,
				url: item.url,
				index: item.index,
				basePtr: -1
			});
		};
		this.fProcessing = false;
		this.fDestroyed = false;
		this.fFirstCall = true;
		this.fBufferSize = bufferSize;
		this.fPtrSize = sampleSize;
		this.fSampleSize = sampleSize;
		this.fSoundfileBuffers = soundfiles;
		this.fAcc = {
			x: [],
			y: [],
			z: []
		};
		this.fGyr = {
			x: [],
			y: [],
			z: []
		};
	}
	static remap(v, mn0, mx0, mn1, mx1) {
		return (v - mn0) / (mx0 - mn0) * (mx1 - mn1) + mn1;
	}
	static parseUI(ui, callback) {
		ui.forEach((group) => this.parseGroup(group, callback));
	}
	static parseGroup(group, callback) {
		if (group.items) this.parseItems(group.items, callback);
	}
	static parseItems(items, callback) {
		items.forEach((item) => this.parseItem(item, callback));
	}
	static parseItem(item, callback) {
		if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") this.parseItems(item.items, callback);
		else callback(item);
	}
	/** Split the soundfile names and return an array of names */
	static splitSoundfileNames(input) {
		return input.replace(/^\{|\}$/g, "").split(";").map((str) => str.length <= 2 ? "" : str.substring(1, str.length - 1)).map((str) => str.trim()).filter((str) => str.length > 0);
	}
	get hasAccInput() {
		return this.fAcc.x.length + this.fAcc.y.length + this.fAcc.z.length > 0;
	}
	propagateAcc(accelerationIncludingGravity, invert = false) {
		const { x, y, z } = accelerationIncludingGravity;
		if (invert) {
			if (x !== null) this.fAcc.x.forEach((handler) => handler(-x));
			if (y !== null) this.fAcc.y.forEach((handler) => handler(-y));
			if (z !== null) this.fAcc.z.forEach((handler) => handler(-z));
		} else {
			if (x !== null) this.fAcc.x.forEach((handler) => handler(x));
			if (y !== null) this.fAcc.y.forEach((handler) => handler(y));
			if (z !== null) this.fAcc.z.forEach((handler) => handler(z));
		}
	}
	get hasGyrInput() {
		return this.fGyr.x.length + this.fGyr.y.length + this.fGyr.z.length > 0;
	}
	propagateGyr(event) {
		const { alpha, beta, gamma } = event;
		if (alpha !== null) this.fGyr.x.forEach((handler) => handler(alpha));
		if (beta !== null) this.fGyr.y.forEach((handler) => handler(beta));
		if (gamma !== null) this.fGyr.z.forEach((handler) => handler(gamma));
	}
	/** Build the accelerometer handler */
	setupAccHandler(path, axis, curve, amin, amid, amax, min, init, max) {
		const handler = FaustSensors.buildHandler(curve, amin, amid, amax, min, init, max);
		switch (axis) {
			case 0:
				this.fAcc.x.push((val) => this.setParamValue(path, handler.uiToFaust(val)));
				break;
			case 1:
				this.fAcc.y.push((val) => this.setParamValue(path, handler.uiToFaust(val)));
				break;
			case 2:
				this.fAcc.z.push((val) => this.setParamValue(path, handler.uiToFaust(val)));
				break;
		}
	}
	/** Build the gyroscope handler */
	setupGyrHandler(path, axis, curve, amin, amid, amax, min, init, max) {
		const handler = FaustSensors.buildHandler(curve, amin, amid, amax, min, init, max);
		switch (axis) {
			case 0:
				this.fGyr.x.push((val) => this.setParamValue(path, handler.uiToFaust(val)));
				break;
			case 1:
				this.fGyr.y.push((val) => this.setParamValue(path, handler.uiToFaust(val)));
				break;
			case 2:
				this.fGyr.z.push((val) => this.setParamValue(path, handler.uiToFaust(val)));
				break;
		}
	}
	static extractUrlsFromMeta(dspMeta) {
		const soundfilesEntry = dspMeta.meta.find((entry) => entry.soundfiles !== void 0);
		if (soundfilesEntry) return soundfilesEntry.soundfiles.split(";").filter((url) => url !== "");
		else return [];
	}
	/**
	* Load a soundfile possibly containing several parts in the DSP struct.
	* Soundfile pointers are located at 'index' offset, to be read in the JSON file.
	* The DSP struct is located at baseDSP in the wasm memory,
	* either a monophonic DSP, or a voice in a polyphonic context.
	*
	* @param allocator : the wasm memory allocator
	* @param baseDSP : the base DSP in the wasm memory
	* @param name : the name of the soundfile
	* @param url : the url of the soundfile
	*/
	loadSoundfile(allocator, baseDSP, name, url) {
		console.log(`Soundfile ${name} paths: ${url}`);
		const soundfileIds = _FaustBaseWebAudioDsp.splitSoundfileNames(url);
		const item = this.fSoundfiles.find((item2) => item2.url === url);
		if (!item) throw new Error(`Soundfile with ${url} cannot be found !}`);
		if (item.basePtr !== -1) {
			const HEAP32 = allocator.getInt32Array();
			console.log(`Soundfile CACHE ${url}} : ${name} loaded at ${item.basePtr} in wasm memory with index ${item.index}`);
			HEAP32[baseDSP + item.index >> 2] = item.basePtr;
		} else {
			const soundfile = this.createSoundfile(allocator, soundfileIds, this.fSoundfileBuffers);
			if (soundfile) {
				const HEAP32 = soundfile.getHEAP32();
				item.basePtr = soundfile.getPtr();
				console.log(`Soundfile ${name} loaded at ${item.basePtr} in wasm memory with index ${item.index}`);
				HEAP32[baseDSP + item.index >> 2] = item.basePtr;
			} else console.log(`Soundfile ${name} for ${url} cannot be created !}`);
		}
	}
	createSoundfile(allocator, soundfileIdList, soundfiles, maxChan = Soundfile.MAX_CHAN) {
		let curChan = 1;
		let totalLength = 0;
		for (const soundfileId of soundfileIdList) {
			let chan = 0;
			let len = 0;
			const audioData = soundfiles == null ? void 0 : soundfiles[soundfileId];
			if (audioData) {
				chan = audioData.audioBuffer.length;
				len = audioData.audioBuffer[0].length;
			} else {
				len = Soundfile.BUFFER_SIZE;
				chan = 1;
			}
			curChan = Math.max(curChan, chan);
			totalLength += len;
		}
		totalLength += (Soundfile.MAX_SOUNDFILE_PARTS - soundfileIdList.length) * Soundfile.BUFFER_SIZE;
		const soundfile = new Soundfile(allocator, this.fSampleSize, curChan, totalLength, maxChan, soundfileIdList.length);
		let offset = 0;
		for (let part = 0; part < soundfileIdList.length; part++) {
			const soundfileId = soundfileIdList[part];
			const audioData = soundfiles == null ? void 0 : soundfiles[soundfileId];
			if (audioData) {
				soundfile.copyToOut(part, maxChan, offset, audioData);
				offset += audioData.audioBuffer[0].length;
			} else offset = soundfile.emptyFile(part, offset);
		}
		for (let part = soundfileIdList.length; part < Soundfile.MAX_SOUNDFILE_PARTS; part++) offset = soundfile.emptyFile(part, offset);
		soundfile.shareBuffers(curChan, maxChan);
		return soundfile;
	}
	/**
	* Init soundfiles memory.
	*
	* @param allocator : the wasm memory allocator
	* @param baseDSP : the DSP struct (either a monophonic DSP of polyphonic voice) base DSP in the wasm memory
	*/
	initSoundfileMemory(allocator, baseDSP) {
		for (const { name, url } of this.fSoundfiles) this.loadSoundfile(allocator, baseDSP, name, url);
	}
	updateOutputs() {
		if (this.fOutputsItems.length > 0 && this.fOutputHandler && this.fOutputsTimer-- === 0) {
			this.fOutputsTimer = 5;
			this.fOutputsItems.forEach((item) => {
				var _a;
				return (_a = this.fOutputHandler) == null ? void 0 : _a.call(this, item, this.getParamValue(item));
			});
		}
	}
	metadata(handler) {
		if (this.fJSONDsp.meta) this.fJSONDsp.meta.forEach((meta) => handler(Object.keys(meta)[0], meta[Object.keys(meta)[0]]));
	}
	compute(input, output) {
		return false;
	}
	setOutputParamHandler(handler) {
		this.fOutputHandler = handler;
	}
	getOutputParamHandler() {
		return this.fOutputHandler;
	}
	callOutputParamHandler(path, value) {
		if (this.fOutputHandler) this.fOutputHandler(path, value);
	}
	setInputParamHandler(handler) {
		this.fInputHandler = handler;
	}
	getInputParamHandler() {
		return this.fInputHandler;
	}
	callInputParamHandler(path, value) {
		if (this.fInputHandler) this.fInputHandler(path, value);
	}
	setComputeHandler(handler) {
		this.fComputeHandler = handler;
	}
	getComputeHandler() {
		return this.fComputeHandler;
	}
	setPlotHandler(handler) {
		this.fPlotHandler = handler;
	}
	getPlotHandler() {
		return this.fPlotHandler;
	}
	getNumInputs() {
		return -1;
	}
	getNumOutputs() {
		return -1;
	}
	midiMessage(data) {
		if (this.fPlotHandler) this.fCachedEvents.push({
			data,
			type: "midi"
		});
		const cmd = data[0] >> 4;
		const channel = data[0] & 15;
		const data1 = data[1];
		const data2 = data[2];
		if (cmd === 11) return this.ctrlChange(channel, data1, data2);
		if (cmd === 14) return this.pitchWheel(channel, data2 * 128 + data1);
		if (cmd === 9) if (data2 > 0) return this.keyOn(channel, data1, data2);
		else return this.keyOff(channel, data1, data2);
		if (cmd === 8) return this.keyOff(channel, data1, data2);
	}
	ctrlChange(channel, ctrl, value) {
		if (this.fPlotHandler) this.fCachedEvents.push({
			type: "ctrlChange",
			data: [
				channel,
				ctrl,
				value
			]
		});
		if (this.fCtrlLabel[ctrl].length) this.fCtrlLabel[ctrl].forEach((ctrl2) => {
			const { path, chan } = ctrl2;
			if (chan === 0 || channel === chan - 1) {
				this.setParamValue(path, _FaustBaseWebAudioDsp.remap(value, 0, 127, ctrl2.min, ctrl2.max));
				if (this.fOutputHandler) this.fOutputHandler(path, this.getParamValue(path));
			}
		});
	}
	keyOn(channel, pitch, velocity) {
		if (this.fPlotHandler) this.fCachedEvents.push({
			type: "keyOn",
			data: [
				channel,
				pitch,
				velocity
			]
		});
		this.fMidiKeyOnLabel[pitch].forEach((key) => {
			const { path, chan } = key;
			if (chan === 0 || channel === chan - 1) {
				this.setParamValue(path, _FaustBaseWebAudioDsp.remap(velocity, 0, 127, key.min, key.max));
				if (this.fOutputHandler) this.fOutputHandler(path, this.getParamValue(path));
			}
		});
		this.fMidiKeyLabel[pitch].forEach((key) => {
			const { path, chan } = key;
			if (chan === 0 || channel === chan - 1) {
				this.setParamValue(path, _FaustBaseWebAudioDsp.remap(velocity, 0, 127, key.min, key.max));
				if (this.fOutputHandler) this.fOutputHandler(path, this.getParamValue(path));
			}
		});
	}
	keyOff(channel, pitch, velocity) {
		if (this.fPlotHandler) this.fCachedEvents.push({
			type: "keyOff",
			data: [
				channel,
				pitch,
				velocity
			]
		});
		this.fMidiKeyOffLabel[pitch].forEach((key) => {
			const { path, chan } = key;
			if (chan === 0 || channel === chan - 1) {
				this.setParamValue(path, _FaustBaseWebAudioDsp.remap(velocity, 0, 127, key.min, key.max));
				if (this.fOutputHandler) this.fOutputHandler(path, this.getParamValue(path));
			}
		});
		this.fMidiKeyLabel[pitch].forEach((key) => {
			const { path, chan } = key;
			if (chan === 0 || channel === chan - 1) {
				this.setParamValue(path, 0);
				if (this.fOutputHandler) this.fOutputHandler(path, this.getParamValue(path));
			}
		});
	}
	pitchWheel(channel, wheel) {
		if (this.fPlotHandler) this.fCachedEvents.push({
			type: "pitchWheel",
			data: [channel, wheel]
		});
		this.fPitchwheelLabel.forEach((pw) => {
			const { path, chan } = pw;
			if (chan === 0 || channel === chan - 1) {
				this.setParamValue(path, _FaustBaseWebAudioDsp.remap(wheel, 0, 16383, pw.min, pw.max));
				if (this.fOutputHandler) this.fOutputHandler(path, this.getParamValue(path));
			}
		});
	}
	setParamValue(path, value) {}
	getParamValue(path) {
		return 0;
	}
	getParams() {
		return this.fInputsItems;
	}
	getMeta() {
		return this.fJSONDsp;
	}
	getJSON() {
		return JSON.stringify(this.getMeta());
	}
	getUI() {
		return this.fJSONDsp.ui;
	}
	getDescriptors() {
		return this.fDescriptor;
	}
	hasSoundfiles() {
		return this.fSoundfiles.length > 0;
	}
	startSensors() {
		this.startSensors();
	}
	stopSensors() {
		this.stopSensors();
	}
	start() {
		this.fProcessing = true;
	}
	stop() {
		this.fProcessing = false;
	}
	destroy() {
		this.fDestroyed = true;
		this.fOutputHandler = null;
		this.fInputHandler = null;
		this.fComputeHandler = null;
		this.fPlotHandler = null;
	}
};
var FaustMonoWebAudioDsp = class extends FaustBaseWebAudioDsp {
	constructor(instance, sampleRate, sampleSize, bufferSize, soundfiles) {
		super(sampleSize, bufferSize, soundfiles);
		this.fInstance = instance;
		console.log(`sampleSize: ${sampleSize} bufferSize: ${bufferSize}`);
		this.fJSONDsp = JSON.parse(this.fInstance.json);
		FaustBaseWebAudioDsp.parseUI(this.fJSONDsp.ui, this.fUICallback);
		this.fEndMemory = this.initMemory();
		this.fInstance.api.init(this.fDSP, sampleRate);
		if (this.fSoundfiles.length > 0) {
			const allocator = new WasmAllocator(this.fInstance.memory, this.fEndMemory);
			this.initSoundfileMemory(allocator, this.fDSP);
		}
	}
	initMemory() {
		this.fDSP = 0;
		this.fAudioInputs = this.fJSONDsp.size;
		this.fAudioOutputs = this.fAudioInputs + this.getNumInputs() * this.fPtrSize;
		const $audioInputs = this.fAudioOutputs + this.getNumOutputs() * this.fPtrSize;
		const $audioOutputs = $audioInputs + this.getNumInputs() * this.fBufferSize * this.fSampleSize;
		const endMemory = $audioOutputs + this.getNumOutputs() * this.fBufferSize * this.fSampleSize;
		const HEAP = this.fInstance.memory.buffer;
		const HEAP32 = new Int32Array(HEAP);
		const HEAPF = this.fSampleSize === 4 ? new Float32Array(HEAP) : new Float64Array(HEAP);
		if (this.getNumInputs() > 0) {
			for (let chan = 0; chan < this.getNumInputs(); chan++) HEAP32[(this.fAudioInputs >> 2) + chan] = $audioInputs + this.fBufferSize * this.fSampleSize * chan;
			const dspInChans = HEAP32.subarray(this.fAudioInputs >> 2, this.fAudioInputs + this.getNumInputs() * this.fPtrSize >> 2);
			for (let chan = 0; chan < this.getNumInputs(); chan++) this.fInChannels[chan] = HEAPF.subarray(dspInChans[chan] >> Math.log2(this.fSampleSize), dspInChans[chan] + this.fBufferSize * this.fSampleSize >> Math.log2(this.fSampleSize));
		}
		if (this.getNumOutputs() > 0) {
			for (let chan = 0; chan < this.getNumOutputs(); chan++) HEAP32[(this.fAudioOutputs >> 2) + chan] = $audioOutputs + this.fBufferSize * this.fSampleSize * chan;
			const dspOutChans = HEAP32.subarray(this.fAudioOutputs >> 2, this.fAudioOutputs + this.getNumOutputs() * this.fPtrSize >> 2);
			for (let chan = 0; chan < this.getNumOutputs(); chan++) this.fOutChannels[chan] = HEAPF.subarray(dspOutChans[chan] >> Math.log2(this.fSampleSize), dspOutChans[chan] + this.fBufferSize * this.fSampleSize >> Math.log2(this.fSampleSize));
		}
		return endMemory;
	}
	toString() {
		return `============== Mono Memory layout ==============
        this.fBufferSize: ${this.fBufferSize}
        this.fJSONDsp.size: ${this.fJSONDsp.size}
        this.fAudioInputs: ${this.fAudioInputs}
        this.fAudioOutputs: ${this.fAudioOutputs}
        this.fDSP: ${this.fDSP}`;
	}
	compute(input, output) {
		if (this.fDestroyed) return false;
		if (!this.fProcessing) return true;
		if (this.fFirstCall) {
			this.initMemory();
			this.fFirstCall = false;
		}
		if (typeof input === "function") input(this.fInChannels);
		else {
			if (this.getNumInputs() > 0 && (!input || !input[0] || input[0].length === 0)) return true;
			if (this.getNumOutputs() > 0 && typeof output !== "function" && (!output || !output[0] || output[0].length === 0)) return true;
			if (input !== void 0) for (let chan = 0; chan < Math.min(this.getNumInputs(), input.length); chan++) this.fInChannels[chan].set(input[chan]);
		}
		if (this.fComputeHandler) this.fComputeHandler(this.fBufferSize);
		this.fInstance.api.compute(this.fDSP, this.fBufferSize, this.fAudioInputs, this.fAudioOutputs);
		this.updateOutputs();
		let forPlot = this.fOutChannels;
		if (typeof output === "function") output(this.fOutChannels);
		else {
			for (let chan = 0; chan < Math.min(this.getNumOutputs(), output.length); chan++) {
				const dspOutput = this.fOutChannels[chan];
				output[chan].set(dspOutput);
			}
			forPlot = output;
		}
		if (this.fPlotHandler) {
			this.fPlotHandler(forPlot, this.fBufferNum++, this.fCachedEvents.length ? this.fCachedEvents : void 0);
			this.fCachedEvents = [];
		}
		return true;
	}
	metadata(handler) {
		super.metadata(handler);
	}
	getNumInputs() {
		return this.fInstance.api.getNumInputs(this.fDSP);
	}
	getNumOutputs() {
		return this.fInstance.api.getNumOutputs(this.fDSP);
	}
	setParamValue(path, value) {
		if (this.fPlotHandler) this.fCachedEvents.push({
			type: "param",
			data: {
				path,
				value
			}
		});
		this.fInstance.api.setParamValue(this.fDSP, this.fPathTable[path], value);
		this.callInputParamHandler(path, this.getParamValue(path));
	}
	getParamValue(path) {
		return this.fInstance.api.getParamValue(this.fDSP, this.fPathTable[path]);
	}
	getMeta() {
		return this.fJSONDsp;
	}
	getJSON() {
		return this.fInstance.json;
	}
	getDescriptors() {
		return this.fDescriptor;
	}
	getUI() {
		return this.fJSONDsp.ui;
	}
};
var FaustWebAudioDspVoice = class _FaustWebAudioDspVoice {
	constructor($dsp, api, inputItems, pathTable, sampleRate) {
		this.fFreqLabel = [];
		this.fGateLabel = [];
		this.fGainLabel = [];
		this.fKeyLabel = [];
		this.fVelLabel = [];
		this.fCurNote = _FaustWebAudioDspVoice.kFreeVoice;
		this.fNextNote = -1;
		this.fNextVel = -1;
		this.fDate = 0;
		this.fLevel = 0;
		this.fDSP = $dsp;
		this.fAPI = api;
		this.fAPI.init(this.fDSP, sampleRate);
		this.extractPaths(inputItems, pathTable);
	}
	static get kActiveVoice() {
		return 0;
	}
	static get kFreeVoice() {
		return -1;
	}
	static get kReleaseVoice() {
		return -2;
	}
	static get kLegatoVoice() {
		return -3;
	}
	static get kNoVoice() {
		return -4;
	}
	static get VOICE_STOP_LEVEL() {
		return 3162e-8;
	}
	static midiToFreq(note) {
		return 440 * 2 ** ((note - 69) / 12);
	}
	static normalizeVelocity(velocity) {
		return velocity / 127;
	}
	extractPaths(inputItems, pathTable) {
		inputItems.forEach((item) => {
			if (item.endsWith("/gate")) this.fGateLabel.push(pathTable[item]);
			else if (item.endsWith("/freq")) this.fFreqLabel.push(pathTable[item]);
			else if (item.endsWith("/key")) this.fKeyLabel.push(pathTable[item]);
			else if (item.endsWith("/gain")) this.fGainLabel.push(pathTable[item]);
			else if (item.endsWith("/vel") && item.endsWith("/velocity")) this.fVelLabel.push(pathTable[item]);
		});
	}
	keyOn(pitch, velocity, legato = false) {
		if (legato) {
			this.fNextNote = pitch;
			this.fNextVel = velocity;
		} else {
			this.fFreqLabel.forEach((index) => this.fAPI.setParamValue(this.fDSP, index, _FaustWebAudioDspVoice.midiToFreq(pitch)));
			this.fGateLabel.forEach((index) => this.fAPI.setParamValue(this.fDSP, index, 1));
			this.fGainLabel.forEach((index) => this.fAPI.setParamValue(this.fDSP, index, _FaustWebAudioDspVoice.normalizeVelocity(velocity)));
			this.fKeyLabel.forEach((index) => this.fAPI.setParamValue(this.fDSP, index, pitch));
			this.fVelLabel.forEach((index) => this.fAPI.setParamValue(this.fDSP, index, velocity));
			this.fCurNote = pitch;
		}
	}
	keyOff(hard = false) {
		this.fGateLabel.forEach((index) => this.fAPI.setParamValue(this.fDSP, index, 0));
		if (hard) this.fCurNote = _FaustWebAudioDspVoice.kFreeVoice;
		else this.fCurNote = _FaustWebAudioDspVoice.kReleaseVoice;
	}
	computeLegato(bufferSize, $inputs, $outputZero, $outputsHalf) {
		const size = bufferSize / 2;
		this.fGateLabel.forEach((index) => this.fAPI.setParamValue(this.fDSP, index, 0));
		this.fAPI.compute(this.fDSP, size, $inputs, $outputZero);
		this.keyOn(this.fNextNote, this.fNextVel);
		this.fAPI.compute(this.fDSP, size, $inputs, $outputsHalf);
	}
	compute(bufferSize, $inputs, $outputs) {
		this.fAPI.compute(this.fDSP, bufferSize, $inputs, $outputs);
	}
	setParamValue(index, value) {
		this.fAPI.setParamValue(this.fDSP, index, value);
	}
	getParamValue(index) {
		return this.fAPI.getParamValue(this.fDSP, index);
	}
};
var FaustPolyWebAudioDsp = class _FaustPolyWebAudioDsp extends FaustBaseWebAudioDsp {
	constructor(instance, sampleRate, sampleSize, bufferSize, soundfiles) {
		super(sampleSize, bufferSize, soundfiles);
		this.fInstance = instance;
		console.log(`sampleSize: ${sampleSize} bufferSize: ${bufferSize}`);
		this.fJSONDsp = JSON.parse(this.fInstance.voiceJSON);
		this.fJSONEffect = this.fInstance.effectAPI && this.fInstance.effectJSON ? JSON.parse(this.fInstance.effectJSON) : null;
		FaustBaseWebAudioDsp.parseUI(this.fJSONDsp.ui, this.fUICallback);
		if (this.fJSONEffect) FaustBaseWebAudioDsp.parseUI(this.fJSONEffect.ui, this.fUICallback);
		this.fEndMemory = this.initMemory();
		this.fVoiceTable = [];
		for (let voice = 0; voice < this.fInstance.voices; voice++) this.fVoiceTable.push(new FaustWebAudioDspVoice(this.fJSONDsp.size * voice, this.fInstance.voiceAPI, this.fInputsItems, this.fPathTable, sampleRate));
		if (this.fInstance.effectAPI) this.fInstance.effectAPI.init(this.fEffect, sampleRate);
		if (this.fSoundfiles.length > 0) {
			const allocator = new WasmAllocator(this.fInstance.memory, this.fEndMemory);
			for (let voice = 0; voice < this.fInstance.voices; voice++) this.initSoundfileMemory(allocator, this.fJSONDsp.size * voice);
		}
	}
	initMemory() {
		this.fEffect = this.fJSONDsp.size * this.fInstance.voices;
		this.fAudioInputs = this.fEffect + (this.fJSONEffect ? this.fJSONEffect.size : 0);
		this.fAudioOutputs = this.fAudioInputs + this.getNumInputs() * this.fPtrSize;
		this.fAudioMixing = this.fAudioOutputs + this.getNumOutputs() * this.fPtrSize;
		this.fAudioMixingHalf = this.fAudioMixing + this.getNumOutputs() * this.fPtrSize;
		const $audioInputs = this.fAudioMixingHalf + this.getNumOutputs() * this.fPtrSize;
		const $audioOutputs = $audioInputs + this.getNumInputs() * this.fBufferSize * this.fSampleSize;
		const $audioMixing = $audioOutputs + this.getNumOutputs() * this.fBufferSize * this.fSampleSize;
		const endMemory = $audioMixing + this.getNumOutputs() * this.fBufferSize * this.fSampleSize;
		const HEAP = this.fInstance.memory.buffer;
		const HEAP32 = new Int32Array(HEAP);
		const HEAPF = this.fSampleSize === 4 ? new Float32Array(HEAP) : new Float64Array(HEAP);
		if (this.getNumInputs() > 0) {
			for (let chan = 0; chan < this.getNumInputs(); chan++) HEAP32[(this.fAudioInputs >> 2) + chan] = $audioInputs + this.fBufferSize * this.fSampleSize * chan;
			const dspInChans = HEAP32.subarray(this.fAudioInputs >> 2, this.fAudioInputs + this.getNumInputs() * this.fPtrSize >> 2);
			for (let chan = 0; chan < this.getNumInputs(); chan++) this.fInChannels[chan] = HEAPF.subarray(dspInChans[chan] >> Math.log2(this.fSampleSize), dspInChans[chan] + this.fBufferSize * this.fSampleSize >> Math.log2(this.fSampleSize));
		}
		if (this.getNumOutputs() > 0) {
			for (let chan = 0; chan < this.getNumOutputs(); chan++) {
				HEAP32[(this.fAudioOutputs >> 2) + chan] = $audioOutputs + this.fBufferSize * this.fSampleSize * chan;
				HEAP32[(this.fAudioMixing >> 2) + chan] = $audioMixing + this.fBufferSize * this.fSampleSize * chan;
				HEAP32[(this.fAudioMixingHalf >> 2) + chan] = $audioMixing + this.fBufferSize * this.fSampleSize * chan + this.fBufferSize / 2 * this.fSampleSize;
			}
			const dspOutChans = HEAP32.subarray(this.fAudioOutputs >> 2, this.fAudioOutputs + this.getNumOutputs() * this.fPtrSize >> 2);
			for (let chan = 0; chan < this.getNumOutputs(); chan++) this.fOutChannels[chan] = HEAPF.subarray(dspOutChans[chan] >> Math.log2(this.fSampleSize), dspOutChans[chan] + this.fBufferSize * this.fSampleSize >> Math.log2(this.fSampleSize));
		}
		return endMemory;
	}
	toString() {
		return `============== Poly Memory layout ==============
        this.fBufferSize: ${this.fBufferSize}
        this.fJSONDsp.size: ${this.fJSONDsp.size}
        this.fAudioInputs: ${this.fAudioInputs}
        this.fAudioOutputs: ${this.fAudioOutputs}
        this.fAudioMixing: ${this.fAudioMixing}
        this.fAudioMixingHalf: ${this.fAudioMixingHalf}`;
	}
	allocVoice(voice, type) {
		this.fVoiceTable[voice].fDate++;
		this.fVoiceTable[voice].fCurNote = type;
		return voice;
	}
	getPlayingVoice(pitch) {
		let voicePlaying = FaustWebAudioDspVoice.kNoVoice;
		let oldestDatePlaying = Number.MAX_VALUE;
		for (let i = 0; i < this.fInstance.voices; i++) {
			const curNote = this.fVoiceTable[i].fCurNote;
			const nextNote = this.fVoiceTable[i].fNextNote;
			if (curNote === pitch || curNote === FaustWebAudioDspVoice.kLegatoVoice && nextNote === pitch) {
				if (this.fVoiceTable[i].fDate < oldestDatePlaying) {
					oldestDatePlaying = this.fVoiceTable[i].fDate;
					voicePlaying = i;
				}
			}
		}
		return voicePlaying;
	}
	getFreeVoice() {
		for (let voice = 0; voice < this.fInstance.voices; voice++) if (this.fVoiceTable[voice].fCurNote === FaustWebAudioDspVoice.kFreeVoice) return this.allocVoice(voice, FaustWebAudioDspVoice.kActiveVoice);
		let voiceRelease = FaustWebAudioDspVoice.kNoVoice;
		let voicePlaying = FaustWebAudioDspVoice.kNoVoice;
		let oldestDateRelease = Number.MAX_VALUE;
		let oldestDatePlaying = Number.MAX_VALUE;
		for (let voice = 0; voice < this.fInstance.voices; voice++) if (this.fVoiceTable[voice].fCurNote === FaustWebAudioDspVoice.kReleaseVoice) {
			if (this.fVoiceTable[voice].fDate < oldestDateRelease) {
				oldestDateRelease = this.fVoiceTable[voice].fDate;
				voiceRelease = voice;
			}
		} else if (this.fVoiceTable[voice].fDate < oldestDatePlaying) {
			oldestDatePlaying = this.fVoiceTable[voice].fDate;
			voicePlaying = voice;
		}
		if (oldestDateRelease !== Number.MAX_VALUE) {
			console.log(`Steal release voice : voice_date = ${this.fVoiceTable[voiceRelease].fDate} voice = ${voiceRelease}`);
			return this.allocVoice(voiceRelease, FaustWebAudioDspVoice.kLegatoVoice);
		}
		if (oldestDatePlaying !== Number.MAX_VALUE) {
			console.log(`Steal playing voice : voice_date = ${this.fVoiceTable[voicePlaying].fDate} voice = ${voicePlaying}`);
			return this.allocVoice(voicePlaying, FaustWebAudioDspVoice.kLegatoVoice);
		}
		return FaustWebAudioDspVoice.kNoVoice;
	}
	compute(input, output) {
		if (this.fDestroyed) return false;
		if (this.fFirstCall) {
			this.initMemory();
			this.fFirstCall = false;
		}
		if (!this.fProcessing) return true;
		if (this.getNumInputs() > 0 && (!input || !input[0] || input[0].length === 0)) return true;
		if (this.getNumOutputs() > 0 && (!output || !output[0] || output[0].length === 0)) return true;
		if (input !== void 0) for (let chan = 0; chan < Math.min(this.getNumInputs(), input.length); ++chan) this.fInChannels[chan].set(input[chan]);
		if (this.fComputeHandler) this.fComputeHandler(this.fBufferSize);
		this.fInstance.mixerAPI.clearOutput(this.fBufferSize, this.getNumOutputs(), this.fAudioOutputs);
		this.fVoiceTable.forEach((voice) => {
			if (voice.fCurNote === FaustWebAudioDspVoice.kLegatoVoice) {
				voice.computeLegato(this.fBufferSize, this.fAudioInputs, this.fAudioMixing, this.fAudioMixingHalf);
				this.fInstance.mixerAPI.fadeOut(this.fBufferSize / 2, this.getNumOutputs(), this.fAudioMixing);
				voice.fLevel = this.fInstance.mixerAPI.mixCheckVoice(this.fBufferSize, this.getNumOutputs(), this.fAudioMixing, this.fAudioOutputs);
			} else if (voice.fCurNote !== FaustWebAudioDspVoice.kFreeVoice) {
				voice.compute(this.fBufferSize, this.fAudioInputs, this.fAudioMixing);
				voice.fLevel = this.fInstance.mixerAPI.mixCheckVoice(this.fBufferSize, this.getNumOutputs(), this.fAudioMixing, this.fAudioOutputs);
				if (voice.fCurNote == FaustWebAudioDspVoice.kReleaseVoice && voice.fLevel < FaustWebAudioDspVoice.VOICE_STOP_LEVEL) voice.fCurNote = FaustWebAudioDspVoice.kFreeVoice;
			}
		});
		if (this.fInstance.effectAPI) this.fInstance.effectAPI.compute(this.fEffect, this.fBufferSize, this.fAudioOutputs, this.fAudioOutputs);
		this.updateOutputs();
		if (output !== void 0) {
			for (let chan = 0; chan < Math.min(this.getNumOutputs(), output.length); chan++) {
				const dspOutput = this.fOutChannels[chan];
				output[chan].set(dspOutput);
			}
			if (this.fPlotHandler) {
				this.fPlotHandler(output, this.fBufferNum++, this.fCachedEvents.length ? this.fCachedEvents : void 0);
				this.fCachedEvents = [];
			}
		}
		return true;
	}
	getNumInputs() {
		return this.fInstance.voiceAPI.getNumInputs(0);
	}
	getNumOutputs() {
		return this.fInstance.voiceAPI.getNumOutputs(0);
	}
	static findPath(o, p) {
		if (typeof o !== "object") return false;
		else if (o.address) return o.address === p;
		else {
			for (const k in o) if (_FaustPolyWebAudioDsp.findPath(o[k], p)) return true;
			return false;
		}
	}
	setParamValue(path, value) {
		if (this.fPlotHandler) this.fCachedEvents.push({
			type: "param",
			data: {
				path,
				value
			}
		});
		if (this.fJSONEffect && _FaustPolyWebAudioDsp.findPath(this.fJSONEffect.ui, path) && this.fInstance.effectAPI) this.fInstance.effectAPI.setParamValue(this.fEffect, this.fPathTable[path], value);
		else this.fVoiceTable.forEach((voice) => voice.setParamValue(this.fPathTable[path], value));
		this.callInputParamHandler(path, this.getParamValue(path));
	}
	getParamValue(path) {
		if (this.fJSONEffect && _FaustPolyWebAudioDsp.findPath(this.fJSONEffect.ui, path) && this.fInstance.effectAPI) return this.fInstance.effectAPI.getParamValue(this.fEffect, this.fPathTable[path]);
		else return this.fVoiceTable[0].getParamValue(this.fPathTable[path]);
	}
	getMeta() {
		const o = this.fJSONDsp;
		const e = this.fJSONEffect;
		const r = { ...o };
		if (e) r.ui = [{
			type: "tgroup",
			label: "Sequencer",
			items: [{
				type: "vgroup",
				label: "Instrument",
				items: o.ui
			}, {
				type: "vgroup",
				label: "Effect",
				items: e.ui
			}]
		}];
		else r.ui = [{
			type: "tgroup",
			label: "Polyphonic",
			items: [{
				type: "vgroup",
				label: "Voices",
				items: o.ui
			}]
		}];
		return r;
	}
	getJSON() {
		return JSON.stringify(this.getMeta());
	}
	getUI() {
		return this.getMeta().ui;
	}
	getDescriptors() {
		return this.fDescriptor;
	}
	midiMessage(data) {
		const cmd = data[0] >> 4;
		const channel = data[0] & 15;
		const data1 = data[1];
		const data2 = data[2];
		if (cmd === 8 || cmd === 9 && data2 === 0) return this.keyOff(channel, data1, data2);
		else if (cmd === 9) return this.keyOn(channel, data1, data2);
		else super.midiMessage(data);
	}
	ctrlChange(channel, ctrl, value) {
		if (ctrl === 123 || ctrl === 120) this.allNotesOff(true);
		else super.ctrlChange(channel, ctrl, value);
	}
	keyOn(channel, pitch, velocity) {
		if (this.fPlotHandler) this.fCachedEvents.push({
			type: "keyOn",
			data: [
				channel,
				pitch,
				velocity
			]
		});
		const voice = this.getFreeVoice();
		this.fVoiceTable[voice].keyOn(pitch, velocity, this.fVoiceTable[voice].fCurNote == FaustWebAudioDspVoice.kLegatoVoice);
	}
	keyOff(channel, pitch, velocity) {
		if (this.fPlotHandler) this.fCachedEvents.push({
			type: "keyOff",
			data: [
				channel,
				pitch,
				velocity
			]
		});
		const voice = this.getPlayingVoice(pitch);
		if (voice !== FaustWebAudioDspVoice.kNoVoice) this.fVoiceTable[voice].keyOff();
		else console.log("Playing pitch = %d not found\n", pitch);
	}
	allNotesOff(hard = true) {
		this.fCachedEvents.push({
			type: "ctrlChange",
			data: [
				0,
				123,
				0
			]
		});
		this.fVoiceTable.forEach((voice) => voice.keyOff(hard));
	}
};
var FaustOfflineProcessor = class {
	constructor(instance, bufferSize) {
		this.fDSPCode = instance;
		this.fBufferSize = bufferSize;
		this.fInputs = new Array(this.fDSPCode.getNumInputs()).fill(null).map(() => new Float32Array(bufferSize));
		this.fOutputs = new Array(this.fDSPCode.getNumOutputs()).fill(null).map(() => new Float32Array(bufferSize));
	}
	getParameterDescriptors() {
		const params = [];
		const callback = (item) => {
			let param = null;
			const isPolyReserved = "address" in item && !![
				"/gate",
				"/freq",
				"/gain",
				"/key",
				"/vel",
				"/velocity"
			].find((k) => item.address.endsWith(k));
			if (this.fDSPCode instanceof FaustMonoWebAudioDsp || !isPolyReserved) {
				if (item.type === "vslider" || item.type === "hslider" || item.type === "nentry") param = {
					name: item.address,
					defaultValue: item.init || 0,
					minValue: item.min || 0,
					maxValue: item.max || 0
				};
				else if (item.type === "button" || item.type === "checkbox") param = {
					name: item.address,
					defaultValue: item.init || 0,
					minValue: 0,
					maxValue: 1
				};
			}
			if (param) params.push(param);
		};
		FaustBaseWebAudioDsp.parseUI(this.fDSPCode.getUI(), callback);
		return params;
	}
	compute(input, output) {
		return this.fDSPCode.compute(input, output);
	}
	setOutputParamHandler(handler) {
		this.fDSPCode.setOutputParamHandler(handler);
	}
	getOutputParamHandler() {
		return this.fDSPCode.getOutputParamHandler();
	}
	callOutputParamHandler(path, value) {
		this.fDSPCode.callOutputParamHandler(path, value);
	}
	setInputParamHandler(handler) {
		this.fDSPCode.setInputParamHandler(handler);
	}
	getInputParamHandler() {
		return this.fDSPCode.getInputParamHandler();
	}
	callInputParamHandler(path, value) {
		this.fDSPCode.callInputParamHandler(path, value);
	}
	setComputeHandler(handler) {
		this.fDSPCode.setComputeHandler(handler);
	}
	getComputeHandler() {
		return this.fDSPCode.getComputeHandler();
	}
	setPlotHandler(handler) {
		this.fDSPCode.setPlotHandler(handler);
	}
	getPlotHandler() {
		return this.fDSPCode.getPlotHandler();
	}
	getNumInputs() {
		return this.fDSPCode.getNumInputs();
	}
	getNumOutputs() {
		return this.fDSPCode.getNumOutputs();
	}
	metadata(handler) {}
	midiMessage(data) {
		this.fDSPCode.midiMessage(data);
	}
	ctrlChange(chan, ctrl, value) {
		this.fDSPCode.ctrlChange(chan, ctrl, value);
	}
	pitchWheel(chan, value) {
		this.fDSPCode.pitchWheel(chan, value);
	}
	keyOn(channel, pitch, velocity) {
		this.fDSPCode.keyOn(channel, pitch, velocity);
	}
	keyOff(channel, pitch, velocity) {
		this.fDSPCode.keyOff(channel, pitch, velocity);
	}
	setParamValue(path, value) {
		this.fDSPCode.setParamValue(path, value);
	}
	getParamValue(path) {
		return this.fDSPCode.getParamValue(path);
	}
	getParams() {
		return this.fDSPCode.getParams();
	}
	getMeta() {
		return this.fDSPCode.getMeta();
	}
	getJSON() {
		return this.fDSPCode.getJSON();
	}
	getDescriptors() {
		return this.fDSPCode.getDescriptors();
	}
	getUI() {
		return this.fDSPCode.getUI();
	}
	start() {
		this.fDSPCode.start();
	}
	stop() {
		this.fDSPCode.stop();
	}
	destroy() {
		this.fDSPCode.destroy();
	}
	get hasAccInput() {
		return this.fDSPCode.hasAccInput;
	}
	propagateAcc(accelerationIncludingGravity, invert = false) {
		this.fDSPCode.propagateAcc(accelerationIncludingGravity, invert);
	}
	get hasGyrInput() {
		return this.fDSPCode.hasGyrInput;
	}
	propagateGyr(event) {
		this.fDSPCode.propagateGyr(event);
	}
	startSensors() {}
	stopSensors() {}
	/**
	* Render frames in an array.
	*
	* @param inputs - input signal
	* @param length - the number of frames to render (default: bufferSize)
	* @param onUpdate - a callback after each buffer calculated, with an argument "current sample"
	* @return an array of Float32Array with the rendered frames
	*/
	render(inputs = [], length = this.fBufferSize, onUpdate) {
		let l = 0;
		const outputs = new Array(this.fDSPCode.getNumOutputs()).fill(null).map(() => new Float32Array(length));
		this.fDSPCode.start();
		while (l < length) {
			const sliceLength = Math.min(length - l, this.fBufferSize);
			for (let i = 0; i < this.fDSPCode.getNumInputs(); i++) {
				let input;
				if (inputs[i]) if (inputs[i].length <= l) input = new Float32Array(sliceLength);
				else if (inputs[i].length > l + sliceLength) input = inputs[i].subarray(l, l + sliceLength);
				else input = inputs[i].subarray(l, inputs[i].length);
				else input = new Float32Array(sliceLength);
				this.fInputs[i] = input;
			}
			this.fDSPCode.compute(this.fInputs, this.fOutputs);
			for (let i = 0; i < this.fDSPCode.getNumOutputs(); i++) {
				const output = this.fOutputs[i];
				if (sliceLength < this.fBufferSize) outputs[i].set(output.subarray(0, sliceLength), l);
				else outputs[i].set(output, l);
			}
			l += sliceLength;
			onUpdate?.(l);
		}
		this.fDSPCode.stop();
		return outputs;
	}
};
var FaustMonoOfflineProcessor = class extends FaustOfflineProcessor {};
var FaustPolyOfflineProcessor = class extends FaustOfflineProcessor {
	keyOn(channel, pitch, velocity) {
		this.fDSPCode.keyOn(channel, pitch, velocity);
	}
	keyOff(channel, pitch, velocity) {
		this.fDSPCode.keyOff(channel, pitch, velocity);
	}
	allNotesOff(hard) {
		this.fDSPCode.allNotesOff(hard);
	}
};
var LibFaust = class {
	constructor(module) {
		this.fModule = module;
		this.fCompiler = new module.libFaustWasm();
		this.fFileSystem = this.fModule.FS;
	}
	module() {
		return this.fModule;
	}
	fs() {
		return this.fFileSystem;
	}
	version() {
		return this.fCompiler.version();
	}
	createDSPFactory(name, code, args, useInternalMemory) {
		return this.fCompiler.createDSPFactory(name, code, args, useInternalMemory);
	}
	deleteDSPFactory(cFactory) {
		return this.fCompiler.deleteDSPFactory(cFactory);
	}
	expandDSP(name, code, args) {
		return this.fCompiler.expandDSP(name, code, args);
	}
	generateAuxFiles(name, code, args) {
		return this.fCompiler.generateAuxFiles(name, code, args);
	}
	deleteAllDSPFactories() {
		return this.fCompiler.deleteAllDSPFactories();
	}
	getErrorAfterException() {
		return this.fCompiler.getErrorAfterException();
	}
	cleanupAfterException() {
		return this.fCompiler.cleanupAfterException();
	}
	getInfos(what) {
		return this.fCompiler.getInfos(what);
	}
	toString() {
		return `LibFaust module: ${this.fModule}, compiler: ${this.fCompiler}`;
	}
};
var LibFaust_default = LibFaust;
var SoundfileReader = class {
	/**
	* Set fallback base URLs used to resolve soundfile paths.
	*
	* In Node or other non-browser runtimes, `location` may be undefined;
	* in that case this returns an empty list to avoid resolution errors.
	*/
	static get fallbackPaths() {
		const loc = typeof location !== "undefined" ? location : null;
		const href = loc == null ? void 0 : loc.href;
		const origin = loc == null ? void 0 : loc.origin;
		return [
			href,
			href ? this.getParentUrl(href) : null,
			origin
		].filter((value) => typeof value === "string" && value.length > 0);
	}
	/**
	* Extract the parent URL from an URL.
	* @param url : the URL
	* @returns : the parent URL
	*/
	static getParentUrl(url) {
		return url.substring(0, url.lastIndexOf("/") + 1);
	}
	/**
	* Convert an audio buffer to audio data.
	*
	* @param audioBuffer : the audio buffer to convert
	* @returns : the audio data
	*/
	static toAudioData(audioBuffer) {
		const { sampleRate, numberOfChannels } = audioBuffer;
		return {
			sampleRate,
			audioBuffer: new Array(numberOfChannels).fill(null).map((v, i) => audioBuffer.getChannelData(i))
		};
	}
	/**
	* Extract the URLs from the metadata.
	*
	* @param dspMeta : the metadata
	* @returns : the URLs
	*/
	static findSoundfilesFromMeta(dspMeta) {
		const soundfiles = {};
		const callback = (item) => {
			if (item.type === "soundfile") FaustBaseWebAudioDsp.splitSoundfileNames(item.url).filter((url) => url.trim().length > 0).forEach((url) => soundfiles[url] = null);
		};
		FaustBaseWebAudioDsp.parseUI(dspMeta.ui, callback);
		return soundfiles;
	}
	/**
	* Fetch the soundfile.
	*
	* @param url : the url of the soundfile
	* @param audioCtx : the audio context
	* @returns : the audio data
	*/
	static async fetchSoundfile(url, audioCtx) {
		console.log(`Loading sound file from ${url}`);
		const response = await fetch(url);
		if (!response.ok) throw new Error(`Failed to load sound file from ${url}: ${response.statusText}`);
		const arrayBuffer = await response.arrayBuffer();
		const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
		return this.toAudioData(audioBuffer);
	}
	/**
	* Load the soundfile.
	*
	* @param filename : the filename
	* @param metaUrls : the metadata URLs
	* @param soundfiles : the soundfiles
	* @param audioCtx : the audio context
	*/
	static async loadSoundfile(filename, metaUrls, soundfiles, audioCtx) {
		if (soundfiles == null ? void 0 : soundfiles[filename]) return;
		const urlsToCheck = [filename, ...[...metaUrls, ...this.fallbackPaths].map((path) => new URL(filename, path.endsWith("/") ? path : `${path}/`).href)];
		let lastError = null;
		for (const url of urlsToCheck) try {
			soundfiles[filename] = await this.fetchSoundfile(url, audioCtx);
			return;
		} catch (error) {
			lastError = error;
		}
		throw new Error(`Failed to load sound file ${filename}, all check failed. Last error: ${String(lastError)}`);
	}
	/**
	* Load the soundfiles, public API.
	*
	* @param dspMeta : the metadata
	* @param soundfilesIn : the soundfiles
	* @param audioCtx : the audio context
	* @returns : the soundfiles
	*/
	static async loadSoundfiles(dspMeta, soundfilesIn, audioCtx) {
		const metaUrls = FaustBaseWebAudioDsp.extractUrlsFromMeta(dspMeta);
		const soundfiles = this.findSoundfilesFromMeta(dspMeta);
		for (const id in soundfiles) {
			if (soundfilesIn == null ? void 0 : soundfilesIn[id]) {
				soundfiles[id] = soundfilesIn[id];
				continue;
			}
			try {
				await this.loadSoundfile(id, metaUrls, soundfiles, audioCtx);
			} catch (error) {
				console.error(error);
			}
		}
		return soundfiles;
	}
};
var SoundfileReader_default = SoundfileReader;
var FaustAudioWorkletCommunicator = class {
	constructor(port) {
		this.port = port;
		this.supportSharedArrayBuffer = !!globalThis.SharedArrayBuffer;
		this.byteLength = 4 * Uint8Array.BYTES_PER_ELEMENT + 3 * Float32Array.BYTES_PER_ELEMENT + 3 * Float32Array.BYTES_PER_ELEMENT;
	}
	initializeBuffer(ab) {
		let ptr = 0;
		this.uin8Invert = new Uint8ClampedArray(ab, ptr, 1);
		ptr += Uint8ClampedArray.BYTES_PER_ELEMENT;
		this.uin8NewAccData = new Uint8ClampedArray(ab, ptr, 1);
		ptr += Uint8ClampedArray.BYTES_PER_ELEMENT;
		this.uin8NewGyrData = new Uint8ClampedArray(ab, ptr, 1);
		ptr += Uint8ClampedArray.BYTES_PER_ELEMENT;
		ptr += Uint8ClampedArray.BYTES_PER_ELEMENT;
		this.f32Acc = new Float32Array(ab, ptr, 3);
		ptr += 3 * Float32Array.BYTES_PER_ELEMENT;
		this.f32Gyr = new Float32Array(ab, ptr, 3);
		ptr += 3 * Float32Array.BYTES_PER_ELEMENT;
	}
	setNewAccDataAvailable(value) {
		if (!this.uin8NewAccData) return;
		this.uin8NewAccData[0] = +value;
	}
	getNewAccDataAvailable() {
		var _a;
		return !!((_a = this.uin8NewAccData) == null ? void 0 : _a[0]);
	}
	setNewGyrDataAvailable(value) {
		if (!this.uin8NewGyrData) return;
		this.uin8NewGyrData[0] = +value;
	}
	getNewGyrDataAvailable() {
		var _a;
		return !!((_a = this.uin8NewGyrData) == null ? void 0 : _a[0]);
	}
	setAcc({ x, y, z }, invert = false) {
		if (!this.supportSharedArrayBuffer) {
			const e = {
				type: "acc",
				data: {
					x,
					y,
					z
				},
				invert
			};
			this.port.postMessage(e);
		}
		if (!this.uin8NewAccData) return;
		this.uin8Invert[0] = +invert;
		this.f32Acc[0] = x;
		this.f32Acc[1] = y;
		this.f32Acc[2] = z;
		this.uin8NewAccData[0] = 1;
	}
	getAcc() {
		if (!this.uin8NewAccData) return;
		const invert = !!this.uin8Invert[0];
		const [x, y, z] = this.f32Acc;
		return {
			x,
			y,
			z,
			invert
		};
	}
	setGyr({ alpha, beta, gamma }) {
		if (!this.supportSharedArrayBuffer) {
			const e = {
				type: "gyr",
				data: {
					alpha,
					beta,
					gamma
				}
			};
			this.port.postMessage(e);
		}
		if (!this.uin8NewGyrData) return;
		this.f32Gyr[0] = alpha;
		this.f32Gyr[1] = beta;
		this.f32Gyr[2] = gamma;
		this.uin8NewGyrData[0] = 1;
	}
	getGyr() {
		if (!this.uin8NewGyrData) return;
		const [alpha, beta, gamma] = this.f32Gyr;
		return {
			alpha,
			beta,
			gamma
		};
	}
};
var FaustAudioWorkletNodeCommunicator = class extends FaustAudioWorkletCommunicator {
	constructor(port) {
		super(port);
		if (this.supportSharedArrayBuffer) {
			const sab = new SharedArrayBuffer(this.byteLength);
			this.initializeBuffer(sab);
			this.port.postMessage({
				type: "initSab",
				sab
			});
		} else {
			const ab = new ArrayBuffer(this.byteLength);
			this.initializeBuffer(ab);
		}
	}
};
var FaustAudioWorkletProcessorCommunicator = class extends FaustAudioWorkletCommunicator {
	constructor(port) {
		super(port);
		if (this.supportSharedArrayBuffer) this.port.addEventListener("message", (event) => {
			const { data } = event;
			if (data.type === "initSab") this.initializeBuffer(data.sab);
		});
		else {
			const ab = new ArrayBuffer(this.byteLength);
			this.initializeBuffer(ab);
			this.port.addEventListener("message", (event) => {
				const msg = event.data;
				switch (msg.type) {
					case "acc":
						this.setAcc(msg.data, msg.invert);
						break;
					case "gyr":
						this.setGyr(msg.data);
						break;
					default: break;
				}
			});
		}
	}
};
var _hasAccInput, _hasGyrInput;
var FaustAudioWorkletNode = class extends (globalThis.AudioWorkletNode || null) {
	constructor(context, name, factory, options = {}) {
		const JSONObj = JSON.parse(factory.json);
		super(context, name, {
			numberOfInputs: JSONObj.inputs > 0 ? 1 : 0,
			numberOfOutputs: JSONObj.outputs > 0 ? 1 : 0,
			channelCount: Math.max(1, JSONObj.inputs),
			outputChannelCount: [JSONObj.outputs],
			channelCountMode: "explicit",
			channelInterpretation: "speakers",
			processorOptions: options.processorOptions,
			...options
		});
		__privateAdd(this, _hasAccInput, false);
		__privateAdd(this, _hasGyrInput, false);
		this.handleMessageAux = (e) => {
			if (e.data.type === "out-param" && this.fOutputHandler) this.fOutputHandler(e.data.path, e.data.value);
			else if (e.data.type === "in-param" && this.fInputHandler) this.fInputHandler(e.data.path, e.data.value);
			else if (e.data.type === "plot" && this.fPlotHandler) this.fPlotHandler(e.data.value, e.data.index, e.data.events);
		};
		this.handleDeviceMotion = ({ accelerationIncludingGravity }) => {
			const isAndroid = /Android/i.test(navigator.userAgent);
			if (!accelerationIncludingGravity) return;
			const { x, y, z } = accelerationIncludingGravity;
			this.propagateAcc({
				x,
				y,
				z
			}, isAndroid);
		};
		this.handleDeviceOrientation = ({ alpha, beta, gamma }) => {
			this.propagateGyr({
				alpha,
				beta,
				gamma
			});
		};
		this.fJSONDsp = JSONObj;
		this.fJSON = factory.json;
		this.fOutputHandler = null;
		this.fInputHandler = null;
		this.fComputeHandler = null;
		this.fPlotHandler = null;
		this.fDescriptor = [];
		this.fParamAliases = {};
		this.fInputsItems = [];
		this.fUICallback = (item) => {
			if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
				this.fInputsItems.push(item.address);
				this.fDescriptor.push(item);
				const registerAlias = (alias) => {
					if (!this.fParamAliases[alias]) this.fParamAliases[alias] = item.address;
				};
				registerAlias(item.shortname);
				registerAlias(item.label);
				if (!item.meta) return;
				item.meta.forEach((meta) => {
					const { midi, acc, gyr } = meta;
					if (acc) __privateSet(this, _hasAccInput, true);
					if (gyr) __privateSet(this, _hasGyrInput, true);
				});
			}
		};
		FaustBaseWebAudioDsp.parseUI(this.fJSONDsp.ui, this.fUICallback);
		this.fCommunicator = new FaustAudioWorkletNodeCommunicator(this.port);
		this.port.addEventListener("message", this.handleMessageAux);
		this.port.start();
	}
	/** Setup accelerometer and gyroscope handlers */
	async startSensors() {
		if (this.hasAccInput) if (window.DeviceMotionEvent) window.addEventListener("devicemotion", this.handleDeviceMotion, true);
		else console.log("Cannot set the accelerometer handler.");
		if (this.hasGyrInput) if (window.DeviceMotionEvent) window.addEventListener("deviceorientation", this.handleDeviceOrientation, true);
		else console.log("Cannot set the gyroscope handler.");
	}
	stopSensors() {
		if (this.hasAccInput) window.removeEventListener("devicemotion", this.handleDeviceMotion, true);
		if (this.hasGyrInput) window.removeEventListener("deviceorientation", this.handleDeviceOrientation, true);
	}
	setOutputParamHandler(handler) {
		this.fOutputHandler = handler;
	}
	getOutputParamHandler() {
		return this.fOutputHandler;
	}
	callOutputParamHandler(path, value) {
		if (this.fOutputHandler) this.fOutputHandler(path, value);
	}
	setInputParamHandler(handler) {
		this.fInputHandler = handler;
	}
	getInputParamHandler() {
		return this.fInputHandler;
	}
	callInputParamHandler(path, value) {
		if (this.fInputHandler) this.fInputHandler(path, value);
	}
	setComputeHandler(handler) {
		this.fComputeHandler = handler;
	}
	getComputeHandler() {
		return this.fComputeHandler;
	}
	setPlotHandler(handler) {
		this.fPlotHandler = handler;
		if (this.fPlotHandler) this.port.postMessage({
			type: "setPlotHandler",
			data: true
		});
		else this.port.postMessage({
			type: "setPlotHandler",
			data: false
		});
	}
	getPlotHandler() {
		return this.fPlotHandler;
	}
	setupWamEventHandler() {
		this.port.postMessage({ type: "setupWamEventHandler" });
	}
	getNumInputs() {
		return this.fJSONDsp.inputs;
	}
	getNumOutputs() {
		return this.fJSONDsp.outputs;
	}
	compute(inputs, outputs) {
		return false;
	}
	metadata(handler) {
		if (this.fJSONDsp.meta) this.fJSONDsp.meta.forEach((meta) => handler(Object.keys(meta)[0], meta[Object.keys(meta)[0]]));
	}
	midiMessage(data) {
		const cmd = data[0] >> 4;
		const channel = data[0] & 15;
		const data1 = data[1];
		const data2 = data[2];
		if (cmd === 11) this.ctrlChange(channel, data1, data2);
		else if (cmd === 14) this.pitchWheel(channel, data2 * 128 + data1);
		if (cmd === 8 || cmd === 9 && data2 === 0) this.keyOff(channel, data1, data2);
		else if (cmd === 9) this.keyOn(channel, data1, data2);
		else this.port.postMessage({
			type: "midi",
			data
		});
	}
	ctrlChange(channel, ctrl, value) {
		const e = {
			type: "ctrlChange",
			data: [
				channel,
				ctrl,
				value
			]
		};
		this.port.postMessage(e);
	}
	pitchWheel(channel, wheel) {
		const e = {
			type: "pitchWheel",
			data: [channel, wheel]
		};
		this.port.postMessage(e);
	}
	keyOn(channel, pitch, velocity) {
		const e = {
			type: "keyOn",
			data: [
				channel,
				pitch,
				velocity
			]
		};
		this.port.postMessage(e);
	}
	keyOff(channel, pitch, velocity) {
		const e = {
			type: "keyOff",
			data: [
				channel,
				pitch,
				velocity
			]
		};
		this.port.postMessage(e);
	}
	get hasAccInput() {
		return __privateGet(this, _hasAccInput);
	}
	propagateAcc(accelerationIncludingGravity, invert = false) {
		if (!accelerationIncludingGravity) return;
		const { x, y, z } = accelerationIncludingGravity;
		this.fCommunicator.setAcc({
			x,
			y,
			z
		}, invert);
	}
	get hasGyrInput() {
		return __privateGet(this, _hasGyrInput);
	}
	propagateGyr(event) {
		if (!event) return;
		const { alpha, beta, gamma } = event;
		this.fCommunicator.setGyr({
			alpha,
			beta,
			gamma
		});
	}
	setParamValue(path, value) {
		const resolved = this.fParamAliases[path] || path;
		this.port.postMessage({
			type: "param",
			data: {
				path: resolved,
				value
			}
		});
		const param = this.parameters.get(resolved);
		if (param) param.setValueAtTime(value, this.context.currentTime);
	}
	getParamValue(path) {
		const resolved = this.fParamAliases[path] || path;
		const param = this.parameters.get(resolved);
		return param ? param.value : 0;
	}
	getParams() {
		return this.fInputsItems;
	}
	getMeta() {
		return this.fJSONDsp;
	}
	getJSON() {
		return JSON.stringify(this.getMeta());
	}
	getUI() {
		return this.fJSONDsp.ui;
	}
	getDescriptors() {
		return this.fDescriptor;
	}
	start() {
		this.port.postMessage({ type: "start" });
	}
	stop() {
		this.port.postMessage({ type: "stop" });
	}
	destroy() {
		this.port.postMessage({ type: "destroy" });
		this.port.close();
	}
};
_hasAccInput = /* @__PURE__ */ new WeakMap();
_hasGyrInput = /* @__PURE__ */ new WeakMap();
var FaustMonoAudioWorkletNode = class extends FaustAudioWorkletNode {
	constructor(context, options) {
		super(context, options.processorOptions.name, options.processorOptions.factory, options);
		this.onprocessorerror = (e) => {
			throw e;
		};
	}
};
var FaustPolyAudioWorkletNode = class extends FaustAudioWorkletNode {
	constructor(context, options) {
		super(context, options.processorOptions.name, options.processorOptions.voiceFactory, options);
		this.onprocessorerror = (e) => {
			throw e;
		};
		this.fJSONEffect = options.processorOptions.effectFactory ? JSON.parse(options.processorOptions.effectFactory.json) : null;
		if (this.fJSONEffect) FaustBaseWebAudioDsp.parseUI(this.fJSONEffect.ui, this.fUICallback);
	}
	keyOn(channel, pitch, velocity) {
		const e = {
			type: "keyOn",
			data: [
				channel,
				pitch,
				velocity
			]
		};
		this.port.postMessage(e);
	}
	keyOff(channel, pitch, velocity) {
		const e = {
			type: "keyOff",
			data: [
				channel,
				pitch,
				velocity
			]
		};
		this.port.postMessage(e);
	}
	allNotesOff(hard) {
		this.port.postMessage({
			type: "ctrlChange",
			data: [
				0,
				123,
				0
			]
		});
	}
	getMeta() {
		const o = this.fJSONDsp;
		const e = this.fJSONEffect;
		const r = { ...o };
		if (e) r.ui = [{
			type: "tgroup",
			label: "Sequencer",
			items: [{
				type: "vgroup",
				label: "Instrument",
				items: o.ui
			}, {
				type: "vgroup",
				label: "Effect",
				items: e.ui
			}]
		}];
		else r.ui = [{
			type: "tgroup",
			label: "Polyphonic",
			items: [{
				type: "vgroup",
				label: "Voices",
				items: o.ui
			}]
		}];
		return r;
	}
	getJSON() {
		return JSON.stringify(this.getMeta());
	}
	getUI() {
		return this.getMeta().ui;
	}
};
var FaustScriptProcessorNode = class extends (globalThis.ScriptProcessorNode || null) {
	constructor() {
		super(...arguments);
		this.handleDeviceMotion = void 0;
		this.handleDeviceOrientation = void 0;
	}
	init(instance) {
		this.fDSPCode = instance;
		this.fInputs = new Array(this.fDSPCode.getNumInputs());
		this.fOutputs = new Array(this.fDSPCode.getNumOutputs());
		this.handleDeviceMotion = ({ accelerationIncludingGravity }) => {
			const isAndroid = /Android/i.test(navigator.userAgent);
			if (!accelerationIncludingGravity) return;
			const { x, y, z } = accelerationIncludingGravity;
			this.propagateAcc({
				x,
				y,
				z
			}, isAndroid);
		};
		this.handleDeviceOrientation = ({ alpha, beta, gamma }) => {
			this.propagateGyr({
				alpha,
				beta,
				gamma
			});
		};
		this.onaudioprocess = (e) => {
			for (let chan = 0; chan < this.fDSPCode.getNumInputs(); chan++) this.fInputs[chan] = e.inputBuffer.getChannelData(chan);
			for (let chan = 0; chan < this.fDSPCode.getNumOutputs(); chan++) this.fOutputs[chan] = e.outputBuffer.getChannelData(chan);
			return this.fDSPCode.compute(this.fInputs, this.fOutputs);
		};
		this.start();
	}
	/** Start accelerometer and gyroscope handlers */
	async startSensors() {
		if (this.hasAccInput) if (window.DeviceMotionEvent) window.addEventListener("devicemotion", this.handleDeviceMotion, true);
		else console.log("Cannot set the accelerometer handler.");
		if (this.hasGyrInput) if (window.DeviceMotionEvent) window.addEventListener("deviceorientation", this.handleDeviceOrientation, true);
		else console.log("Cannot set the gyroscope handler.");
	}
	/** Stop accelerometer and gyroscope handlers */
	stopSensors() {
		if (this.hasAccInput) window.removeEventListener("devicemotion", this.handleDeviceMotion, true);
		if (this.hasGyrInput) window.removeEventListener("deviceorientation", this.handleDeviceOrientation, true);
	}
	compute(input, output) {
		return this.fDSPCode.compute(input, output);
	}
	setOutputParamHandler(handler) {
		this.fDSPCode.setOutputParamHandler(handler);
	}
	getOutputParamHandler() {
		return this.fDSPCode.getOutputParamHandler();
	}
	callOutputParamHandler(path, value) {
		this.fDSPCode.callOutputParamHandler(path, value);
	}
	setInputParamHandler(handler) {
		this.fDSPCode.setInputParamHandler(handler);
	}
	getInputParamHandler() {
		return this.fDSPCode.getInputParamHandler();
	}
	callInputParamHandler(path, value) {
		this.fDSPCode.callInputParamHandler(path, value);
	}
	setComputeHandler(handler) {
		this.fDSPCode.setComputeHandler(handler);
	}
	getComputeHandler() {
		return this.fDSPCode.getComputeHandler();
	}
	setPlotHandler(handler) {
		this.fDSPCode.setPlotHandler(handler);
	}
	getPlotHandler() {
		return this.fDSPCode.getPlotHandler();
	}
	getNumInputs() {
		return this.fDSPCode.getNumInputs();
	}
	getNumOutputs() {
		return this.fDSPCode.getNumOutputs();
	}
	metadata(handler) {}
	midiMessage(data) {
		this.fDSPCode.midiMessage(data);
	}
	ctrlChange(chan, ctrl, value) {
		this.fDSPCode.ctrlChange(chan, ctrl, value);
	}
	pitchWheel(chan, value) {
		this.fDSPCode.pitchWheel(chan, value);
	}
	keyOn(channel, pitch, velocity) {
		this.fDSPCode.keyOn(channel, pitch, velocity);
	}
	keyOff(channel, pitch, velocity) {
		this.fDSPCode.keyOff(channel, pitch, velocity);
	}
	setParamValue(path, value) {
		this.fDSPCode.setParamValue(path, value);
	}
	getParamValue(path) {
		return this.fDSPCode.getParamValue(path);
	}
	getParams() {
		return this.fDSPCode.getParams();
	}
	getMeta() {
		return this.fDSPCode.getMeta();
	}
	getJSON() {
		return this.fDSPCode.getJSON();
	}
	getDescriptors() {
		return this.fDSPCode.getDescriptors();
	}
	getUI() {
		return this.fDSPCode.getUI();
	}
	start() {
		this.fDSPCode.start();
	}
	stop() {
		this.fDSPCode.stop();
	}
	destroy() {
		this.fDSPCode.destroy();
	}
	get hasAccInput() {
		return this.fDSPCode.hasAccInput;
	}
	propagateAcc(accelerationIncludingGravity, invert = false) {
		this.fDSPCode.propagateAcc(accelerationIncludingGravity, invert);
	}
	get hasGyrInput() {
		return this.fDSPCode.hasGyrInput;
	}
	propagateGyr(event) {
		this.fDSPCode.propagateGyr(event);
	}
};
var FaustMonoScriptProcessorNode = class extends FaustScriptProcessorNode {};
var FaustPolyScriptProcessorNode = class extends FaustScriptProcessorNode {
	keyOn(channel, pitch, velocity) {
		this.fDSPCode.keyOn(channel, pitch, velocity);
	}
	keyOff(channel, pitch, velocity) {
		this.fDSPCode.keyOff(channel, pitch, velocity);
	}
	allNotesOff(hard) {
		this.fDSPCode.allNotesOff(hard);
	}
};
var _FaustMonoDspGenerator = class _FaustMonoDspGenerator {
	constructor() {
		this.factory = null;
	}
	async compile(compiler, name, code, args) {
		this.factory = await compiler.createMonoDSPFactory(name, code, args);
		if (this.factory) {
			this.name = name;
			return this;
		} else return null;
	}
	addSoundfiles(soundfileMap) {
		if (!this.factory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		for (const id in soundfileMap) this.factory.soundfiles[id] = soundfileMap[id];
	}
	getSoundfileList() {
		if (!this.factory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		const meta = JSON.parse(this.factory.json);
		const map = SoundfileReader_default.findSoundfilesFromMeta(meta);
		if (!map) return [];
		return Object.keys(map);
	}
	async createNode(context, name = this.name, factory = this.factory, sp = false, bufferSize = 1024, processorName = (factory == null ? void 0 : factory.shaKey) || name, processorOptions = {}) {
		var _a, _b;
		if (!factory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		const meta = JSON.parse(factory.json);
		const sampleSize = meta.compile_options.match("-double") ? 8 : 4;
		factory.soundfiles = await SoundfileReader_default.loadSoundfiles(meta, factory.soundfiles || {}, context);
		if (sp) {
			const monoDsp = new FaustMonoWebAudioDsp(await FaustWasmInstantiator_default.createAsyncMonoDSPInstance(factory), context.sampleRate, sampleSize, bufferSize, factory.soundfiles);
			const sp2 = context.createScriptProcessor(bufferSize, monoDsp.getNumInputs(), monoDsp.getNumOutputs());
			Object.setPrototypeOf(sp2, FaustMonoScriptProcessorNode.prototype);
			sp2.init(monoDsp);
			return sp2;
		} else {
			if (!_FaustMonoDspGenerator.gWorkletProcessors.has(context)) _FaustMonoDspGenerator.gWorkletProcessors.set(context, /* @__PURE__ */ new Set());
			if (!((_a = _FaustMonoDspGenerator.gWorkletProcessors.get(context)) == null ? void 0 : _a.has(processorName))) try {
				const processorCode = `
// DSP name and JSON string for DSP are generated
const faustData = ${JSON.stringify({
					processorName,
					dspName: name,
					dspMeta: meta,
					poly: false
				})};
// Implementation needed classes of functions
var ${FaustDspInstance.name} = ${FaustDspInstance.toString()}
var FaustDspInstance = ${FaustDspInstance.name};
var ${FaustBaseWebAudioDsp.name} = ${FaustBaseWebAudioDsp.toString()}
var FaustBaseWebAudioDsp = ${FaustBaseWebAudioDsp.name};
var ${FaustMonoWebAudioDsp.name} = ${FaustMonoWebAudioDsp.toString()}
var FaustMonoWebAudioDsp = ${FaustMonoWebAudioDsp.name};
var ${FaustWasmInstantiator_default.name} = ${FaustWasmInstantiator_default.toString()}
var FaustWasmInstantiator = ${FaustWasmInstantiator_default.name};
var ${Soundfile.name} = ${Soundfile.toString()}
var Soundfile = ${Soundfile.name};
var ${WasmAllocator.name} = ${WasmAllocator.toString()}
var WasmAllocator = ${WasmAllocator.name};
var ${FaustSensors.name} = ${FaustSensors.toString()}
var FaustSensors = ${FaustSensors.name};
var ${FaustAudioWorkletCommunicator.name} = ${FaustAudioWorkletCommunicator.toString()}
var FaustAudioWorkletCommunicator = ${FaustAudioWorkletCommunicator.name};
var ${FaustAudioWorkletProcessorCommunicator.name} = ${FaustAudioWorkletProcessorCommunicator.toString()}
var FaustAudioWorkletProcessorCommunicator = ${FaustAudioWorkletProcessorCommunicator.name};
// Put them in dependencies
const dependencies = {
    FaustBaseWebAudioDsp,
    FaustMonoWebAudioDsp,
    FaustWasmInstantiator,
    FaustAudioWorkletProcessorCommunicator
};
// Generate the actual AudioWorkletProcessor code
(${FaustAudioWorkletProcessor_default.toString()})(dependencies, faustData);
`;
				const url = URL.createObjectURL(new Blob([processorCode], { type: "text/javascript" }));
				await context.audioWorklet.addModule(url);
				(_b = _FaustMonoDspGenerator.gWorkletProcessors.get(context)) == null || _b.add(processorName);
			} catch (e) {
				throw e;
			}
			return new FaustMonoAudioWorkletNode(context, { processorOptions: {
				name: processorName,
				factory,
				sampleSize,
				...processorOptions
			} });
		}
	}
	async createFFTNode(context, fftUtils, name = this.name, factory = this.factory, fftOptions = {}, processorName = (factory == null ? void 0 : factory.shaKey) ? `${factory.shaKey}_fft` : name, processorOptions = {}) {
		var _a, _b;
		if (!factory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		const meta = JSON.parse(factory.json);
		const sampleSize = meta.compile_options.match("-double") ? 8 : 4;
		factory.soundfiles = await SoundfileReader_default.loadSoundfiles(meta, factory.soundfiles || {}, context);
		if (!_FaustMonoDspGenerator.gWorkletProcessors.has(context)) _FaustMonoDspGenerator.gWorkletProcessors.set(context, /* @__PURE__ */ new Set());
		if (!((_a = _FaustMonoDspGenerator.gWorkletProcessors.get(context)) == null ? void 0 : _a.has(processorName))) try {
			const processorCode = `
// DSP name and JSON string for DSP are generated
const faustData = ${JSON.stringify({
				processorName,
				dspName: name,
				dspMeta: meta,
				fftOptions
			})};
// Implementation needed classes of functions
var ${FaustDspInstance.name} = ${FaustDspInstance.toString()}
var FaustDspInstance = ${FaustDspInstance.name};
var ${FaustBaseWebAudioDsp.name} = ${FaustBaseWebAudioDsp.toString()}
var FaustBaseWebAudioDsp = ${FaustBaseWebAudioDsp.name};
var ${FaustMonoWebAudioDsp.name} = ${FaustMonoWebAudioDsp.toString()}
var FaustMonoWebAudioDsp = ${FaustMonoWebAudioDsp.name};
var ${FaustWasmInstantiator_default.name} = ${FaustWasmInstantiator_default.toString()}
var FaustWasmInstantiator = ${FaustWasmInstantiator_default.name};
var ${Soundfile.name} = ${Soundfile.toString()}
var Soundfile = ${Soundfile.name};
var ${WasmAllocator.name} = ${WasmAllocator.toString()}
var WasmAllocator = ${WasmAllocator.name};
var ${FaustSensors.name} = ${FaustSensors.toString()}
var FaustSensors = ${FaustSensors.name};
var ${FaustAudioWorkletCommunicator.name} = ${FaustAudioWorkletCommunicator.toString()}
var FaustAudioWorkletCommunicator = ${FaustAudioWorkletCommunicator.name};
var ${FaustAudioWorkletProcessorCommunicator.name} = ${FaustAudioWorkletProcessorCommunicator.toString()}
var FaustAudioWorkletProcessorCommunicator = ${FaustAudioWorkletProcessorCommunicator.name};
var FFTUtils = ${fftUtils.toString()}
// Put them in dependencies
const dependencies = {
    FaustBaseWebAudioDsp,
    FaustMonoWebAudioDsp,
    FaustWasmInstantiator,
    FaustAudioWorkletProcessorCommunicator,
    FFTUtils
};
// Generate the actual AudioWorkletProcessor code
(${FaustFFTAudioWorkletProcessor_default.toString()})(dependencies, faustData);
`;
			const url = URL.createObjectURL(new Blob([processorCode], { type: "text/javascript" }));
			await context.audioWorklet.addModule(url);
			(_b = _FaustMonoDspGenerator.gWorkletProcessors.get(context)) == null || _b.add(processorName);
		} catch (e) {
			throw e;
		}
		const node = new FaustMonoAudioWorkletNode(context, {
			channelCount: Math.max(1, Math.ceil(meta.inputs / 3)),
			outputChannelCount: [Math.ceil(meta.outputs / 2)],
			processorOptions: {
				name: processorName,
				factory,
				sampleSize,
				...processorOptions
			}
		});
		if (fftOptions.fftSize) {
			const param = node.parameters.get("fftSize");
			if (param) param.value = fftOptions.fftSize;
		}
		if (fftOptions.fftOverlap) {
			const param = node.parameters.get("fftOverlap");
			if (param) param.value = fftOptions.fftOverlap;
		}
		if (typeof fftOptions.defaultWindowFunction === "number") {
			const param = node.parameters.get("windowFunction");
			if (param) param.value = fftOptions.defaultWindowFunction + 1;
		}
		if (typeof fftOptions.noIFFT === "boolean") {
			const param = node.parameters.get("noIFFT");
			if (param) param.value = +fftOptions.noIFFT;
		}
		return node;
	}
	async createAudioWorkletProcessor(name = this.name, factory = this.factory, processorName = (factory == null ? void 0 : factory.shaKey) || name) {
		if (!factory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		const meta = JSON.parse(factory.json);
		const dependencies = {
			FaustBaseWebAudioDsp,
			FaustMonoWebAudioDsp,
			FaustWasmInstantiator: FaustWasmInstantiator_default,
			FaustAudioWorkletProcessorCommunicator,
			FaustPolyWebAudioDsp: void 0,
			FaustWebAudioDspVoice: void 0
		};
		try {
			return FaustAudioWorkletProcessor_default(dependencies, {
				processorName,
				dspName: name,
				dspMeta: meta,
				poly: false
			});
		} catch (e) {
			throw e;
		}
	}
	async createOfflineProcessor(sampleRate, bufferSize, factory = this.factory, context) {
		if (!factory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		const meta = JSON.parse(factory.json);
		const instance = await FaustWasmInstantiator_default.createAsyncMonoDSPInstance(factory);
		const sampleSize = meta.compile_options.match("-double") ? 8 : 4;
		if (context) factory.soundfiles = await SoundfileReader_default.loadSoundfiles(meta, factory.soundfiles || {}, context);
		return new FaustMonoOfflineProcessor(new FaustMonoWebAudioDsp(instance, sampleRate, sampleSize, bufferSize, factory.soundfiles), bufferSize);
	}
	getMeta() {
		return JSON.parse(this.factory.json);
	}
	getJSON() {
		return JSON.stringify(this.getMeta());
	}
	getUI() {
		return this.getMeta().ui;
	}
};
_FaustMonoDspGenerator.gWorkletProcessors = /* @__PURE__ */ new Map();
var FaustMonoDspGenerator = _FaustMonoDspGenerator;
var _FaustPolyDspGenerator = class _FaustPolyDspGenerator {
	constructor() {
		this.voiceFactory = null;
		this.effectFactory = null;
	}
	async compile(compiler, name, dspCodeAux, args, effectCodeAux = `dsp_code = environment{
                ${dspCodeAux}
            };
            process = dsp_code.effect;`) {
		try {
			this.effectFactory = await compiler.createPolyDSPFactory(name, effectCodeAux, args);
			if (this.effectFactory) {
				const effectJSON = JSON.parse(this.effectFactory.json);
				const dspCode = `// Voice output is forced to 2, when DSP is stereo or effect has 2 ins or 2 outs,
// so that the effect can process the 2 channels of the voice
adaptOut(1,1,1) = _;
adaptOut(1,1,2) = _ <: _,0;  // The left channel only is kept
adaptOut(1,2,1) = _ <: _,_;
adaptOut(1,2,2) = _ <: _,_;
adaptOut(2,1,1) = _,_;
adaptOut(2,1,2) = _,_;
adaptOut(2,2,1) = _,_;
adaptOut(2,2,2) = _,_;
adaptor(F) = adaptOut(outputs(F),${effectJSON.inputs},${effectJSON.outputs});
dsp_code = environment{
    ${dspCodeAux}
};
process = dsp_code.process : adaptor(dsp_code.process);
`;
				const effectCode = `// Inputs
adaptIn(1,1,1) = _;
adaptIn(1,1,2) = _,_ :> _;  
adaptIn(1,2,1) = _,_;
adaptIn(1,2,2) = _,_;
adaptIn(2,1,1) = _,_ :> _;
adaptIn(2,1,2) = _,_ :> _;
adaptIn(2,2,1) = _,_;
adaptIn(2,2,2) = _,_;
// Outputs
adaptOut(1,1) = _ <: _,0;   // The left channel only is kept
adaptOut(1,2) = _,_;
adaptOut(2,1) = _ <: _,0;   // The left channel only is kept
adaptOut(2,2) = _,_;
adaptorIns(F) = adaptIn(outputs(F),${effectJSON.inputs},${effectJSON.outputs});
adaptorOuts = adaptOut(${effectJSON.inputs},${effectJSON.outputs});
dsp_code = environment{
    ${dspCodeAux}
};
process = adaptorIns(dsp_code.process) : dsp_code.effect : adaptorOuts;
`;
				this.voiceFactory = await compiler.createPolyDSPFactory(name, dspCode, args);
				try {
					this.effectFactory = await compiler.createPolyDSPFactory(name, effectCode, args + " -inpl");
				} catch (e) {
					console.warn(e);
				}
			}
		} catch (e) {
			if (!(e instanceof Error ? e.message : String(e != null ? e : "unknown error")).includes("undefined symbol : effect")) console.warn(e);
			this.voiceFactory = await compiler.createPolyDSPFactory(name, dspCodeAux, args);
		}
		if (this.voiceFactory) {
			this.name = name;
			const isDouble = JSON.parse(this.voiceFactory.json).compile_options.match("-double");
			const { mixerBuffer, mixerModule } = await compiler.getAsyncInternalMixerModule(!!isDouble);
			this.mixerBuffer = mixerBuffer;
			this.mixerModule = mixerModule;
			return this;
		} else return null;
	}
	addSoundfiles(soundfileMap) {
		if (!this.voiceFactory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		for (const id in soundfileMap) this.voiceFactory.soundfiles[id] = soundfileMap[id];
	}
	getSoundfileList() {
		if (!this.voiceFactory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		const meta = JSON.parse(this.voiceFactory.json);
		const map = SoundfileReader_default.findSoundfilesFromMeta(meta);
		if (!map) return [];
		if (!this.effectFactory) return Object.keys(map);
		const effectMeta = JSON.parse(this.effectFactory.json);
		const effectMap = SoundfileReader_default.findSoundfilesFromMeta(effectMeta);
		return Object.keys({
			...effectMap,
			...map
		});
	}
	async createNode(context, voices, name = this.name, voiceFactory = this.voiceFactory, mixerModule = this.mixerModule, effectFactory = this.effectFactory, sp = false, bufferSize = 1024, processorName = ((voiceFactory == null ? void 0 : voiceFactory.shaKey) || "") + ((effectFactory == null ? void 0 : effectFactory.shaKey) || "") || `${name}_poly`, processorOptions = {}) {
		var _a, _b;
		if (!voiceFactory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		const voiceMeta = JSON.parse(voiceFactory.json);
		const effectMeta = effectFactory ? JSON.parse(effectFactory.json) : void 0;
		const sampleSize = voiceMeta.compile_options.match("-double") ? 8 : 4;
		voiceFactory.soundfiles = await SoundfileReader_default.loadSoundfiles(voiceMeta, voiceFactory.soundfiles || {}, context);
		if (effectFactory) effectFactory.soundfiles = await SoundfileReader_default.loadSoundfiles(effectMeta, effectFactory.soundfiles || {}, context);
		if (sp) {
			const instance = await FaustWasmInstantiator_default.createAsyncPolyDSPInstance(voiceFactory, mixerModule, voices, effectFactory || void 0);
			const soundfiles = {
				...effectFactory == null ? void 0 : effectFactory.soundfiles,
				...voiceFactory.soundfiles
			};
			const polyDsp = new FaustPolyWebAudioDsp(instance, context.sampleRate, sampleSize, bufferSize, soundfiles);
			const sp2 = context.createScriptProcessor(bufferSize, polyDsp.getNumInputs(), polyDsp.getNumOutputs());
			Object.setPrototypeOf(sp2, FaustPolyScriptProcessorNode.prototype);
			sp2.init(polyDsp);
			return sp2;
		} else {
			if (!_FaustPolyDspGenerator.gWorkletProcessors.has(context)) _FaustPolyDspGenerator.gWorkletProcessors.set(context, /* @__PURE__ */ new Set());
			if (!((_a = _FaustPolyDspGenerator.gWorkletProcessors.get(context)) == null ? void 0 : _a.has(processorName))) try {
				const processorCode = `
// DSP name and JSON string for DSP are generated
const faustData = ${JSON.stringify({
					processorName,
					dspName: name,
					dspMeta: voiceMeta,
					poly: true,
					effectMeta
				})};
// Implementation needed classes of functions
var ${FaustDspInstance.name} = ${FaustDspInstance.toString()}
var FaustDspInstance = ${FaustDspInstance.name};
var ${FaustBaseWebAudioDsp.name} = ${FaustBaseWebAudioDsp.toString()}
var FaustBaseWebAudioDsp = ${FaustBaseWebAudioDsp.name};
var ${FaustPolyWebAudioDsp.name} = ${FaustPolyWebAudioDsp.toString()}
var FaustPolyWebAudioDsp = ${FaustPolyWebAudioDsp.name};
var ${FaustWebAudioDspVoice.name} = ${FaustWebAudioDspVoice.toString()}
var FaustWebAudioDspVoice = ${FaustWebAudioDspVoice.name};
var ${FaustWasmInstantiator_default.name} = ${FaustWasmInstantiator_default.toString()}
var FaustWasmInstantiator = ${FaustWasmInstantiator_default.name};
var ${Soundfile.name} = ${Soundfile.toString()}
var Soundfile = ${Soundfile.name};
var ${WasmAllocator.name} = ${WasmAllocator.toString()}
var WasmAllocator = ${WasmAllocator.name};
var ${FaustSensors.name} = ${FaustSensors.toString()}
var FaustSensors = ${FaustSensors.name};
var ${FaustAudioWorkletCommunicator.name} = ${FaustAudioWorkletCommunicator.toString()}
var FaustAudioWorkletCommunicator = ${FaustAudioWorkletCommunicator.name};
var ${FaustAudioWorkletProcessorCommunicator.name} = ${FaustAudioWorkletProcessorCommunicator.toString()}
var FaustAudioWorkletProcessorCommunicator = ${FaustAudioWorkletProcessorCommunicator.name};
// Put them in dependencies
const dependencies = {
    FaustBaseWebAudioDsp,
    FaustPolyWebAudioDsp,
    FaustWasmInstantiator,
    FaustAudioWorkletProcessorCommunicator
};
// Generate the actual AudioWorkletProcessor code
(${FaustAudioWorkletProcessor_default.toString()})(dependencies, faustData);
`;
				const url = URL.createObjectURL(new Blob([processorCode], { type: "text/javascript" }));
				await context.audioWorklet.addModule(url);
				(_b = _FaustPolyDspGenerator.gWorkletProcessors.get(context)) == null || _b.add(processorName);
			} catch (e) {
				throw e;
			}
			return new FaustPolyAudioWorkletNode(context, { processorOptions: {
				name: processorName,
				voiceFactory,
				mixerModule,
				voices,
				sampleSize,
				effectFactory: effectFactory || void 0,
				...processorOptions
			} });
		}
	}
	async createAudioWorkletProcessor(name = this.name, voiceFactory = this.voiceFactory, effectFactory = this.effectFactory, processorName = ((voiceFactory == null ? void 0 : voiceFactory.shaKey) || "") + ((effectFactory == null ? void 0 : effectFactory.shaKey) || "") || `${name}_poly`) {
		if (!voiceFactory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		const voiceMeta = JSON.parse(voiceFactory.json);
		const effectMeta = effectFactory ? JSON.parse(effectFactory.json) : void 0;
		voiceMeta.compile_options.match("-double");
		try {
			return FaustAudioWorkletProcessor_default({
				FaustBaseWebAudioDsp,
				FaustMonoWebAudioDsp: void 0,
				FaustWasmInstantiator: FaustWasmInstantiator_default,
				FaustPolyWebAudioDsp,
				FaustWebAudioDspVoice,
				FaustAudioWorkletProcessorCommunicator
			}, {
				processorName,
				dspName: name,
				dspMeta: voiceMeta,
				poly: true,
				effectMeta
			});
		} catch (e) {
			throw e;
		}
	}
	async createOfflineProcessor(sampleRate, bufferSize, voices, voiceFactory = this.voiceFactory, mixerModule = this.mixerModule, effectFactory = this.effectFactory, context) {
		if (!voiceFactory) throw new Error("Code is not compiled, please define the factory or call `await this.compile()` first.");
		const voiceMeta = JSON.parse(voiceFactory.json);
		const effectMeta = effectFactory ? JSON.parse(effectFactory.json) : void 0;
		const instance = await FaustWasmInstantiator_default.createAsyncPolyDSPInstance(voiceFactory, mixerModule, voices, effectFactory || void 0);
		const sampleSize = voiceMeta.compile_options.match("-double") ? 8 : 4;
		if (context) {
			voiceFactory.soundfiles = await SoundfileReader_default.loadSoundfiles(voiceMeta, voiceFactory.soundfiles || {}, context);
			if (effectFactory) effectFactory.soundfiles = await SoundfileReader_default.loadSoundfiles(effectMeta, effectFactory.soundfiles || {}, context);
		}
		return new FaustPolyOfflineProcessor(new FaustPolyWebAudioDsp(instance, sampleRate, sampleSize, bufferSize, {
			...effectFactory == null ? void 0 : effectFactory.soundfiles,
			...voiceFactory.soundfiles
		}), bufferSize);
	}
	getMeta() {
		const o = this.voiceFactory ? JSON.parse(this.voiceFactory.json) : null;
		const e = this.effectFactory ? JSON.parse(this.effectFactory.json) : null;
		const r = { ...o };
		if (e) r.ui = [{
			type: "tgroup",
			label: "Sequencer",
			items: [{
				type: "vgroup",
				label: "Instrument",
				items: o.ui
			}, {
				type: "vgroup",
				label: "Effect",
				items: e.ui
			}]
		}];
		else r.ui = [{
			type: "tgroup",
			label: "Polyphonic",
			items: [{
				type: "vgroup",
				label: "Voices",
				items: o.ui
			}]
		}];
		return r;
	}
	getJSON() {
		return JSON.stringify(this.getMeta());
	}
	getUI() {
		return this.getMeta().ui;
	}
};
_FaustPolyDspGenerator.gWorkletProcessors = /* @__PURE__ */ new Map();
var FaustPolyDspGenerator = _FaustPolyDspGenerator;
var _FaustDspGenerator = class _FaustDspGenerator {
	extractMidiAndNvoices(jsonData) {
		const optionsMetadata = jsonData.meta.find((meta) => meta.options);
		if (optionsMetadata && optionsMetadata.options) {
			const options = optionsMetadata.options;
			const midiRegex = /\[midi:(on|off)\]/;
			const nvoicesRegex = /\[nvoices:(\d+)\]/;
			const midiMatch = options.match(midiRegex);
			const nvoicesMatch = options.match(nvoicesRegex);
			return {
				midi: midiMatch ? midiMatch[1] === "on" : false,
				nvoices: nvoicesMatch ? parseInt(nvoicesMatch[1], 10) : -1
			};
		} else return {
			midi: false,
			nvoices: -1
		};
	}
	/**
	* Compile DSP code, inspect metadata for [nvoices:] (and optionally [midi:on]), and build either a mono
	* or poly WebAudio node (ScriptProcessor or AudioWorklet depending on `sp`). Compilation uses a shared,
	* lazily-created libfaust instance to avoid repeatedly instantiating the WASM compiler.
	*/
	async createFaustNode(context, name, code, sp, bufferSize) {
		const getCompiler = async () => {
			if (!_FaustDspGenerator.compilerPromise) {
				const baseURL = (typeof document !== "undefined" ? "src" in (document.currentScript || {}) ? document.currentScript.src : document.baseURI : void 0) || (typeof window !== "undefined" ? window.location.href : void 0);
				if (!baseURL) throw new Error("Cannot resolve libfaust-wasm location.");
				const jsURL = new URL("../libfaust-wasm/libfaust-wasm.js", baseURL).href;
				_FaustDspGenerator.compilerPromise = instantiateFaustModuleFromFile_default(jsURL, jsURL.replace(/c?js$/, "data"), jsURL.replace(/c?js$/, "wasm")).then((module) => new FaustCompiler_default(new LibFaust_default(module)));
			}
			return _FaustDspGenerator.compilerPromise;
		};
		const args = "-ftz 2";
		try {
			const compiler = await getCompiler();
			const monoGenerator = new FaustMonoDspGenerator();
			if (!await monoGenerator.compile(compiler, name, code, args)) return null;
			const { nvoices } = this.extractMidiAndNvoices(monoGenerator.getMeta());
			if (nvoices > 0) {
				const polyGenerator = new FaustPolyDspGenerator();
				if (!await polyGenerator.compile(compiler, name, code, args)) return null;
				return await polyGenerator.createNode(context, nvoices, name, void 0, void 0, void 0, sp, bufferSize);
			}
			return await monoGenerator.createNode(context, name, void 0, sp, bufferSize);
		} catch (e) {
			console.error(e);
			return null;
		}
	}
};
_FaustDspGenerator.compilerPromise = null;
//#endregion
//#region src/audio/faust/compiled/fixeddelay.wasm?url
var fixeddelay_default = "data:application/wasm;base64,AGFzbQEAAAABy4CAgAAOYAJ/fwBgBH9/f38AYAF/AX9gAX8Bf2ACf38BfWABfwF/YAJ/fwBgAX8AYAJ/fwBgAn9/AGABfwBgAn9/AX9gAn9/AX9gA39/fQACgYCAgAAAA4+AgIAADgABAgMEBQYHCAkKCwwNBYyAgIAAAQGEgICAAOyHgIAAB7qBgIAADAdjb21wdXRlAAEMZ2V0TnVtSW5wdXRzAAINZ2V0TnVtT3V0cHV0cwADDWdldFBhcmFtVmFsdWUABA1nZXRTYW1wbGVSYXRlAAUEaW5pdAAGDWluc3RhbmNlQ2xlYXIABxFpbnN0YW5jZUNvbnN0YW50cwAIDGluc3RhbmNlSW5pdAAJGmluc3RhbmNlUmVzZXRVc2VySW50ZXJmYWNlAAoNc2V0UGFyYW1WYWx1ZQANBm1lbW9yeQIACtmHgIAADoKAgIAAAAujhICAAAIHfwh9QQAhBEEAIQVDAAAAACELQwAAAAAhDEEAIQZDAAAAACENQwAAAAAhDkMAAAAAIQ9DAAAAACEQQQAhB0MAAAAAIRFBACEIQQAhCUEAIQpDAAAAACESIAJBAGooAgAhBCADQQBqKAIAIQVBACoCCEEAKgIMlCELQQAqAghBACoCJJQhDEEAIQYDQAJAIAQgBmoqAgAhDSALQQAqAhBBACoCGJSSIQ5BACAOvEGAgID8B3EEfSAOBUMAAAAACzgCFCAMQQAqAhBBACoCLJSSIQ9BACAPvEGAgID8B3EEfSAPBUMAAAAACzgCKEMAAIA/QQAqAiBBACoCKJSXIRAgEKghByAQjiERIAdBAWohCEEAIAdIBH8gBwVBAAshCUEAIAhIBH8gCAVBAAshCiANQQAqAhRBMEEAKAIcQYHAACAJSAR/QYHAAAUgCQtBAWprQf//AHFBAnRqKgIAIBFDAACAPyAQk5KUIBAgEZNBMEEAKAIcQYHAACAKSAR/QYHAAAUgCgtBAWprQf//AHFBAnRqKgIAlJKUkiESQTBBACgCHEH//wBxQQJ0aiASvEGAgID8B3EEfSASBUMAAAAACzgCACAFIAZqQwAAAD8gDUEwQQAoAhxB//8AcUECdGoqAgCSlDgCAEEAQQAqAhQ4AhhBAEEAKAIcQQFqNgIcQQBBACoCKDgCLCAGQQRqIQYgBkEEIAFsSARADAIMAQsLCwuFgICAAABBAQ8LhYCAgAAAQQEPC4uAgIAAACAAIAFqKgIADwuIgICAAABBACgCAA8LjoCAgAAAIAAgARAAIAAgARAJC6CBgIAAAQN/QQAhAUEAIQJBACEDQQAhAQNAAkBBFCABQQJ0akMAAAAAOAIAIAFBAWohASABQQJIBEAMAgwBCwsLQQBBADYCHEEAIQIDQAJAQSggAkECdGpDAAAAADgCACACQQFqIQIgAkECSARADAIMAQsLC0EAIQMDQAJAQTAgA0ECdGpDAAAAADgCACADQQFqIQMgA0GAgAFIBEAMAgwBCwsLC9CAgIAAAEEAIAE2AgBBAEMAgDtIQwAAgD9BACgCALKXljgCBEEAQ2ZmMEJBACoCBJU4AghBAEMAAIA/QQAqAgiTOAIQQQBDbxKDOkEAKgIElDgCIAuQgICAAAAgACABEAggABAKIAAQBwuWgICAAABBAEMAAAAAOAIMQQBDAACgQDgCJAuQgICAAAAgACABSAR/IAEFIAALDwuQgICAAAAgACABSAR/IAAFIAELDwuMgICAAAAgACABaiACOAIACwuEjICAAAEAQQAL/Qt7Im5hbWUiOiAiZml4ZWRkZWxheSIsImZpbGVuYW1lIjogImZpeGVkZGVsYXkiLCJ2ZXJzaW9uIjogIjIuODQuMyIsImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWkgLWZwZ2EtbWVtLXRoIDQgLWN0IDEgLWVzIDEgLW1jZCAxNiAtbWRkIDEwMjQgLW1keSAzMyAtc2luZ2xlIC1mdHogMiIsImxpYnJhcnlfbGlzdCI6IFsiL3Vzci9zaGFyZS9mYXVzdC9zdGRmYXVzdC5saWIiLCIvdXNyL3NoYXJlL2ZhdXN0L2RlbGF5cy5saWIiLCIvdXNyL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL3NoYXJlL2ZhdXN0L3BsYXRmb3JtLmxpYiJdLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL2ZhdXN0L3VzZXIvaW5jMCIsIi9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiJdLCJzaXplIjogNjU1ODQsImNvZGUiOiAiVkR3ZiIsImlucHV0cyI6IDEsIm91dHB1dHMiOiAxLCJtZXRhIjogWyB7ICJjb21waWxlX29wdGlvbnMiOiAiLWxhbmcgd2FzbS1pIC1mcGdhLW1lbS10aCA0IC1jdCAxIC1lcyAxIC1tY2QgMTYgLW1kZCAxMDI0IC1tZHkgMzMgLXNpbmdsZSAtZnR6IDIiIH0seyAiZGVsYXlzLmxpYi9uYW1lIjogIkZhdXN0IERlbGF5IExpYnJhcnkiIH0seyAiZGVsYXlzLmxpYi92ZXJzaW9uIjogIjEuMi4wIiB9LHsgImZpbGVuYW1lIjogImZpeGVkZGVsYXkiIH0seyAibWF0aHMubGliL2F1dGhvciI6ICJHUkFNRSIgfSx7ICJtYXRocy5saWIvY29weXJpZ2h0IjogIkdSQU1FIiB9LHsgIm1hdGhzLmxpYi9saWNlbnNlIjogIkxHUEwgd2l0aCBleGNlcHRpb24iIH0seyAibWF0aHMubGliL25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IiB9LHsgIm1hdGhzLmxpYi92ZXJzaW9uIjogIjIuOS4wIiB9LHsgIm5hbWUiOiAiZml4ZWRkZWxheSIgfSx7ICJwbGF0Zm9ybS5saWIvbmFtZSI6ICJHZW5lcmljIFBsYXRmb3JtIExpYnJhcnkiIH0seyAicGxhdGZvcm0ubGliL3ZlcnNpb24iOiAiMS4zLjAiIH0seyAic2lnbmFscy5saWIvbmFtZSI6ICJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5IiB9LHsgInNpZ25hbHMubGliL3ZlcnNpb24iOiAiMS42LjAiIH1dLCJ1aSI6IFsgeyJ0eXBlIjogInZncm91cCIsImxhYmVsIjogImZpeGVkZGVsYXkiLCJpdGVtcyI6IFsgeyJ0eXBlIjogImhzbGlkZXIiLCJsYWJlbCI6ICJkZWxheU1zIiwidmFybmFtZSI6ICJmSHNsaWRlcjEiLCJzaG9ydG5hbWUiOiAiZGVsYXlNcyIsImFkZHJlc3MiOiAiL2ZpeGVkZGVsYXkvZGVsYXlNcyIsImluZGV4IjogMzYsImluaXQiOiA1LCJtaW4iOiAwLjAyLCJtYXgiOiAxMDAsInN0ZXAiOiAwLjAxfSx7InR5cGUiOiAiaHNsaWRlciIsImxhYmVsIjogImZlZWRiYWNrIiwidmFybmFtZSI6ICJmSHNsaWRlcjAiLCJzaG9ydG5hbWUiOiAiZmVlZGJhY2siLCJhZGRyZXNzIjogIi9maXhlZGRlbGF5L2ZlZWRiYWNrIiwiaW5kZXgiOiAxMiwiaW5pdCI6IDAsIm1pbiI6IDAsIm1heCI6IDAuOTksInN0ZXAiOiAwLjAxfV19XX0=";
//#endregion
//#region src/audio/faust/compiled/fixeddelay-meta.json?url
var fixeddelay_meta_default = "data:application/json;base64,ewogICAgIm5hbWUiOiAiZml4ZWRkZWxheSIsCiAgICAiZmlsZW5hbWUiOiAiZml4ZWRkZWxheSIsCiAgICAidmVyc2lvbiI6ICIyLjg0LjMiLAogICAgImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWkgLWZwZ2EtbWVtLXRoIDQgLWN0IDEgLWVzIDEgLW1jZCAxNiAtbWRkIDEwMjQgLW1keSAzMyAtc2luZ2xlIC1mdHogMiIsCiAgICAibGlicmFyeV9saXN0IjogWwogICAgICAgICIvdXNyL3NoYXJlL2ZhdXN0L3N0ZGZhdXN0LmxpYiIsCiAgICAgICAgIi91c3Ivc2hhcmUvZmF1c3QvZGVsYXlzLmxpYiIsCiAgICAgICAgIi91c3Ivc2hhcmUvZmF1c3Qvc2lnbmFscy5saWIiLAogICAgICAgICIvdXNyL3NoYXJlL2ZhdXN0L21hdGhzLmxpYiIsCiAgICAgICAgIi91c3Ivc2hhcmUvZmF1c3QvcGxhdGZvcm0ubGliIgogICAgXSwKICAgICJpbmNsdWRlX3BhdGhuYW1lcyI6IFsKICAgICAgICAiL2ZhdXN0L3VzZXIvaW5jMCIsCiAgICAgICAgIi9zaGFyZS9mYXVzdCIsCiAgICAgICAgIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLAogICAgICAgICIvdXNyL3NoYXJlL2ZhdXN0IiwKICAgICAgICAiLiIKICAgIF0sCiAgICAic2l6ZSI6IDY1NTg0LAogICAgImNvZGUiOiAiVkR3ZiIsCiAgICAiaW5wdXRzIjogMSwKICAgICJvdXRwdXRzIjogMSwKICAgICJtZXRhIjogWwogICAgICAgIHsKICAgICAgICAgICAgImNvbXBpbGVfb3B0aW9ucyI6ICItbGFuZyB3YXNtLWkgLWZwZ2EtbWVtLXRoIDQgLWN0IDEgLWVzIDEgLW1jZCAxNiAtbWRkIDEwMjQgLW1keSAzMyAtc2luZ2xlIC1mdHogMiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgImRlbGF5cy5saWIvbmFtZSI6ICJGYXVzdCBEZWxheSBMaWJyYXJ5IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAiZGVsYXlzLmxpYi92ZXJzaW9uIjogIjEuMi4wIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAiZmlsZW5hbWUiOiAiZml4ZWRkZWxheSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgIm1hdGhzLmxpYi9hdXRob3IiOiAiR1JBTUUiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJtYXRocy5saWIvY29weXJpZ2h0IjogIkdSQU1FIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibWF0aHMubGliL2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgIm1hdGhzLmxpYi9uYW1lIjogIkZhdXN0IE1hdGggTGlicmFyeSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgIm1hdGhzLmxpYi92ZXJzaW9uIjogIjIuOS4wIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibmFtZSI6ICJmaXhlZGRlbGF5IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAicGxhdGZvcm0ubGliL25hbWUiOiAiR2VuZXJpYyBQbGF0Zm9ybSBMaWJyYXJ5IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAicGxhdGZvcm0ubGliL3ZlcnNpb24iOiAiMS4zLjAiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJzaWduYWxzLmxpYi9uYW1lIjogIkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJzaWduYWxzLmxpYi92ZXJzaW9uIjogIjEuNi4wIgogICAgICAgIH0KICAgIF0sCiAgICAidWkiOiBbCiAgICAgICAgewogICAgICAgICAgICAidHlwZSI6ICJ2Z3JvdXAiLAogICAgICAgICAgICAibGFiZWwiOiAiZml4ZWRkZWxheSIsCiAgICAgICAgICAgICJpdGVtcyI6IFsKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAidHlwZSI6ICJoc2xpZGVyIiwKICAgICAgICAgICAgICAgICAgICAibGFiZWwiOiAiZGVsYXlNcyIsCiAgICAgICAgICAgICAgICAgICAgInZhcm5hbWUiOiAiZkhzbGlkZXIxIiwKICAgICAgICAgICAgICAgICAgICAic2hvcnRuYW1lIjogImRlbGF5TXMiLAogICAgICAgICAgICAgICAgICAgICJhZGRyZXNzIjogIi9maXhlZGRlbGF5L2RlbGF5TXMiLAogICAgICAgICAgICAgICAgICAgICJpbmRleCI6IDM2LAogICAgICAgICAgICAgICAgICAgICJpbml0IjogNSwKICAgICAgICAgICAgICAgICAgICAibWluIjogMC4wMiwKICAgICAgICAgICAgICAgICAgICAibWF4IjogMTAwLAogICAgICAgICAgICAgICAgICAgICJzdGVwIjogMC4wMQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAidHlwZSI6ICJoc2xpZGVyIiwKICAgICAgICAgICAgICAgICAgICAibGFiZWwiOiAiZmVlZGJhY2siLAogICAgICAgICAgICAgICAgICAgICJ2YXJuYW1lIjogImZIc2xpZGVyMCIsCiAgICAgICAgICAgICAgICAgICAgInNob3J0bmFtZSI6ICJmZWVkYmFjayIsCiAgICAgICAgICAgICAgICAgICAgImFkZHJlc3MiOiAiL2ZpeGVkZGVsYXkvZmVlZGJhY2siLAogICAgICAgICAgICAgICAgICAgICJpbmRleCI6IDEyLAogICAgICAgICAgICAgICAgICAgICJpbml0IjogMCwKICAgICAgICAgICAgICAgICAgICAibWluIjogMCwKICAgICAgICAgICAgICAgICAgICAibWF4IjogMC45OSwKICAgICAgICAgICAgICAgICAgICAic3RlcCI6IDAuMDEKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgXQogICAgICAgIH0KICAgIF0KfQ==";
//#endregion
//#region src/components/modules/Mod03FixedDelay.vue
var _sfc_main$32 = {
	name: "Mod03FixedDelay",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			delayTimeMs: 5,
			feedback: 0,
			faustNode: null,
			outputGain: null
		};
	},
	computed: {
		minTimeMs() {
			return 1e3 / this.engine.sampleRate;
		},
		delaySamples() {
			return (this.delayTimeMs * .001 * this.engine.sampleRate).toFixed(2);
		}
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				delayTime: {
					fr: "Temps de délai (ms)",
					en: "Delay Time (ms)"
				},
				delaySamples: {
					fr: "Délai en échantillons",
					en: "Delay in samples"
				},
				feedback: {
					fr: "Réinjection en %",
					en: "Feedback %"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.ctx;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			const dspMeta = await (await fetch(fixeddelay_meta_default)).json();
			const dspModule = await WebAssembly.compileStreaming(await fetch(fixeddelay_default));
			this.faustNode = await new FaustMonoDspGenerator().createNode(ctx, "fixeddelay", {
				module: dspModule,
				json: JSON.stringify(dspMeta)
			});
			if (!this.faustNode) {
				console.warn("Failed to create Faust fixeddelay node");
				return;
			}
			this.faustNode.setParamValue("/fixeddelay/delayMs", this.delayTimeMs);
			this.faustNode.setParamValue("/fixeddelay/feedback", this.feedback * .01);
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = 1;
			source.connect(this.faustNode);
			this.faustNode.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			if (this.faustNode) {
				try {
					this.faustNode.disconnect();
				} catch (e) {}
				if (this.faustNode.destroy) this.faustNode.destroy();
				this.faustNode = null;
			}
			if (this.outputGain) {
				try {
					this.outputGain.disconnect();
				} catch (e) {}
				this.outputGain = null;
			}
			this.releaseSource();
		},
		onTimeChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/fixeddelay/delayMs", val);
		},
		onFeedChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/fixeddelay/feedback", val * .01);
		}
	}
};
var _hoisted_1$32 = { class: "module-controls" };
var _hoisted_2$32 = { class: "section-head" };
var _hoisted_3$30 = { class: "section-body" };
var _hoisted_4$22 = { class: "control-label delay-samples" };
function _sfc_render$32(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$32, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$32, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$30, [
			createVNode(_component_ControlSlider, {
				label: $options.t("delayTime"),
				modelValue: $data.delayTimeMs,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.delayTimeMs = $event), $options.onTimeChange],
				mini: $options.minTimeMs,
				maxi: 100,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"mini",
				"onUpdate:modelValue"
			]),
			createBaseVNode("div", _hoisted_4$22, toDisplayString($options.t("delaySamples")) + ": " + toDisplayString($options.delaySamples), 1),
			createVNode(_component_ControlSlider, {
				label: $options.t("feedback"),
				modelValue: $data.feedback,
				"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.feedback = $event), $options.onFeedChange],
				mini: 0,
				maxi: 99
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			])
		])
	]);
}
var Mod03FixedDelay_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$32, [["render", _sfc_render$32]]);
//#endregion
//#region src/audio/faust/compiled/vardelay.wasm?url
var vardelay_default = "" + new URL("vardelay-BYoAUPaa.wasm", import.meta.url).href;
//#endregion
//#region src/audio/faust/compiled/vardelay-meta.json?url
var vardelay_meta_default = "data:application/json;base64,ewogICAgIm5hbWUiOiAidmFyZGVsYXkiLAogICAgImZpbGVuYW1lIjogInZhcmRlbGF5IiwKICAgICJ2ZXJzaW9uIjogIjIuODQuMyIsCiAgICAiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taSAtZnBnYS1tZW0tdGggNCAtY3QgMSAtZXMgMSAtbWNkIDE2IC1tZGQgMTAyNCAtbWR5IDMzIC1zaW5nbGUgLWZ0eiAyIiwKICAgICJsaWJyYXJ5X2xpc3QiOiBbCiAgICAgICAgIi91c3Ivc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwKICAgICAgICAiL3Vzci9zaGFyZS9mYXVzdC9kZWxheXMubGliIiwKICAgICAgICAiL3Vzci9zaGFyZS9mYXVzdC9zaWduYWxzLmxpYiIsCiAgICAgICAgIi91c3Ivc2hhcmUvZmF1c3QvbWF0aHMubGliIiwKICAgICAgICAiL3Vzci9zaGFyZS9mYXVzdC9wbGF0Zm9ybS5saWIiLAogICAgICAgICIvdXNyL3NoYXJlL2ZhdXN0L29zY2lsbGF0b3JzLmxpYiIsCiAgICAgICAgIi91c3Ivc2hhcmUvZmF1c3QvYmFzaWNzLmxpYiIKICAgIF0sCiAgICAiaW5jbHVkZV9wYXRobmFtZXMiOiBbCiAgICAgICAgIi9mYXVzdC91c2VyL2luYzAiLAogICAgICAgICIvc2hhcmUvZmF1c3QiLAogICAgICAgICIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0IiwKICAgICAgICAiL3Vzci9zaGFyZS9mYXVzdCIsCiAgICAgICAgIi4iCiAgICBdLAogICAgInNpemUiOiAzMjc3ODgsCiAgICAiY29kZSI6ICIyTmpaIiwKICAgICJpbnB1dHMiOiAxLAogICAgIm91dHB1dHMiOiAxLAogICAgIm1ldGEiOiBbCiAgICAgICAgewogICAgICAgICAgICAiYmFzaWNzLmxpYi9uYW1lIjogIkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgImJhc2ljcy5saWIvdmVyc2lvbiI6ICIxLjIyLjAiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJjb21waWxlX29wdGlvbnMiOiAiLWxhbmcgd2FzbS1pIC1mcGdhLW1lbS10aCA0IC1jdCAxIC1lcyAxIC1tY2QgMTYgLW1kZCAxMDI0IC1tZHkgMzMgLXNpbmdsZSAtZnR6IDIiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJkZWxheXMubGliL25hbWUiOiAiRmF1c3QgRGVsYXkgTGlicmFyeSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgImRlbGF5cy5saWIvdmVyc2lvbiI6ICIxLjIuMCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgImZpbGVuYW1lIjogInZhcmRlbGF5IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibWF0aHMubGliL2F1dGhvciI6ICJHUkFNRSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgIm1hdGhzLmxpYi9jb3B5cmlnaHQiOiAiR1JBTUUiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJtYXRocy5saWIvbGljZW5zZSI6ICJMR1BMIHdpdGggZXhjZXB0aW9uIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibWF0aHMubGliL25hbWUiOiAiRmF1c3QgTWF0aCBMaWJyYXJ5IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAibWF0aHMubGliL3ZlcnNpb24iOiAiMi45LjAiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJuYW1lIjogInZhcmRlbGF5IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAib3NjaWxsYXRvcnMubGliL25hbWUiOiAiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5IgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiAiMS43LjAiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJwbGF0Zm9ybS5saWIvbmFtZSI6ICJHZW5lcmljIFBsYXRmb3JtIExpYnJhcnkiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJwbGF0Zm9ybS5saWIvdmVyc2lvbiI6ICIxLjMuMCIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgInNpZ25hbHMubGliL25hbWUiOiAiRmF1c3QgU2lnbmFsIFJvdXRpbmcgTGlicmFyeSIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgInNpZ25hbHMubGliL3ZlcnNpb24iOiAiMS42LjAiCiAgICAgICAgfQogICAgXSwKICAgICJ1aSI6IFsKICAgICAgICB7CiAgICAgICAgICAgICJ0eXBlIjogInZncm91cCIsCiAgICAgICAgICAgICJsYWJlbCI6ICJ2YXJkZWxheSIsCiAgICAgICAgICAgICJpdGVtcyI6IFsKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAidHlwZSI6ICJoc2xpZGVyIiwKICAgICAgICAgICAgICAgICAgICAibGFiZWwiOiAiZGVwdGgiLAogICAgICAgICAgICAgICAgICAgICJ2YXJuYW1lIjogImZIc2xpZGVyMSIsCiAgICAgICAgICAgICAgICAgICAgInNob3J0bmFtZSI6ICJkZXB0aCIsCiAgICAgICAgICAgICAgICAgICAgImFkZHJlc3MiOiAiL3ZhcmRlbGF5L2RlcHRoIiwKICAgICAgICAgICAgICAgICAgICAiaW5kZXgiOiAyNjIxODQsCiAgICAgICAgICAgICAgICAgICAgImluaXQiOiAwLjk5NSwKICAgICAgICAgICAgICAgICAgICAibWluIjogMCwKICAgICAgICAgICAgICAgICAgICAibWF4IjogMC45OTUsCiAgICAgICAgICAgICAgICAgICAgInN0ZXAiOiAwLjAwMQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAidHlwZSI6ICJoc2xpZGVyIiwKICAgICAgICAgICAgICAgICAgICAibGFiZWwiOiAiZmVlZGJhY2siLAogICAgICAgICAgICAgICAgICAgICJ2YXJuYW1lIjogImZIc2xpZGVyMyIsCiAgICAgICAgICAgICAgICAgICAgInNob3J0bmFtZSI6ICJmZWVkYmFjayIsCiAgICAgICAgICAgICAgICAgICAgImFkZHJlc3MiOiAiL3ZhcmRlbGF5L2ZlZWRiYWNrIiwKICAgICAgICAgICAgICAgICAgICAiaW5kZXgiOiAyNjIyMjAsCiAgICAgICAgICAgICAgICAgICAgImluaXQiOiAwLAogICAgICAgICAgICAgICAgICAgICJtaW4iOiAwLAogICAgICAgICAgICAgICAgICAgICJtYXgiOiAwLjk5LAogICAgICAgICAgICAgICAgICAgICJzdGVwIjogMC4wMQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAidHlwZSI6ICJoc2xpZGVyIiwKICAgICAgICAgICAgICAgICAgICAibGFiZWwiOiAibGZvRnJlcSIsCiAgICAgICAgICAgICAgICAgICAgInZhcm5hbWUiOiAiZkhzbGlkZXIyIiwKICAgICAgICAgICAgICAgICAgICAic2hvcnRuYW1lIjogImxmb0ZyZXEiLAogICAgICAgICAgICAgICAgICAgICJhZGRyZXNzIjogIi92YXJkZWxheS9sZm9GcmVxIiwKICAgICAgICAgICAgICAgICAgICAiaW5kZXgiOiAyNjIyMDAsCiAgICAgICAgICAgICAgICAgICAgImluaXQiOiAwLjEsCiAgICAgICAgICAgICAgICAgICAgIm1pbiI6IDAuMDEsCiAgICAgICAgICAgICAgICAgICAgIm1heCI6IDIwLAogICAgICAgICAgICAgICAgICAgICJzdGVwIjogMC4wMQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAidHlwZSI6ICJoc2xpZGVyIiwKICAgICAgICAgICAgICAgICAgICAibGFiZWwiOiAibWVhbkRlbGF5IiwKICAgICAgICAgICAgICAgICAgICAidmFybmFtZSI6ICJmSHNsaWRlcjAiLAogICAgICAgICAgICAgICAgICAgICJzaG9ydG5hbWUiOiAibWVhbkRlbGF5IiwKICAgICAgICAgICAgICAgICAgICAiYWRkcmVzcyI6ICIvdmFyZGVsYXkvbWVhbkRlbGF5IiwKICAgICAgICAgICAgICAgICAgICAiaW5kZXgiOiAyNjIxNjAsCiAgICAgICAgICAgICAgICAgICAgImluaXQiOiA1LAogICAgICAgICAgICAgICAgICAgICJtaW4iOiAyLAogICAgICAgICAgICAgICAgICAgICJtYXgiOiAxMDAsCiAgICAgICAgICAgICAgICAgICAgInN0ZXAiOiAwLjEKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgXQogICAgICAgIH0KICAgIF0KfQ==";
//#endregion
//#region src/components/modules/Mod03VariableDelay.vue
var _sfc_main$31 = {
	name: "Mod03VariableDelay",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			lfoFreq: .1,
			meanDelay: 5,
			depth: 99.5,
			feedback: 0,
			faustNode: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				lfoFreq: {
					fr: "Fréquence du LFO",
					en: "LFO Frequency"
				},
				meanDelay: {
					fr: "Temps de délai moyen (ms)",
					en: "Mean Delay Time (ms)"
				},
				depth: {
					fr: "Profondeur de la modulation (%)",
					en: "Modulation Depth (%)"
				},
				feedback: {
					fr: "Réinjection en %",
					en: "Feedback %"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.ctx;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			const dspMeta = await (await fetch(vardelay_meta_default)).json();
			const dspModule = await WebAssembly.compileStreaming(await fetch(vardelay_default));
			this.faustNode = await new FaustMonoDspGenerator().createNode(ctx, "vardelay", {
				module: dspModule,
				json: JSON.stringify(dspMeta)
			});
			if (!this.faustNode) {
				console.warn("Failed to create Faust vardelay node");
				return;
			}
			this.faustNode.setParamValue("/vardelay/lfoFreq", this.lfoFreq);
			this.faustNode.setParamValue("/vardelay/meanDelay", this.meanDelay);
			this.faustNode.setParamValue("/vardelay/depth", this.depth * .01);
			this.faustNode.setParamValue("/vardelay/feedback", this.feedback * .01);
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = 1;
			source.connect(this.faustNode);
			this.faustNode.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			if (this.faustNode) {
				try {
					this.faustNode.disconnect();
				} catch (e) {}
				if (this.faustNode.destroy) this.faustNode.destroy();
				this.faustNode = null;
			}
			if (this.outputGain) {
				try {
					this.outputGain.disconnect();
				} catch (e) {}
				this.outputGain = null;
			}
			this.releaseSource();
		},
		onLfoFreqChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/vardelay/lfoFreq", val);
		},
		onMeanDelayChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/vardelay/meanDelay", val);
		},
		onDepthChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/vardelay/depth", val * .01);
		},
		onFeedChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/vardelay/feedback", val * .01);
		}
	}
};
var _hoisted_1$31 = { class: "module-controls" };
var _hoisted_2$31 = { class: "section-head" };
var _hoisted_3$29 = { class: "section-body" };
function _sfc_render$31(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$31, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$31, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$29, [
			createVNode(_component_ControlSlider, {
				label: $options.t("lfoFreq"),
				modelValue: $data.lfoFreq,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.lfoFreq = $event), $options.onLfoFreqChange],
				mini: .01,
				maxi: 20,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("meanDelay"),
				modelValue: $data.meanDelay,
				"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.meanDelay = $event), $options.onMeanDelayChange],
				mini: 2,
				maxi: 100,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("depth"),
				modelValue: $data.depth,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.depth = $event), $options.onDepthChange],
				mini: 0,
				maxi: 99.5
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("feedback"),
				modelValue: $data.feedback,
				"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.feedback = $event), $options.onFeedChange],
				mini: 0,
				maxi: 99
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			])
		])
	]);
}
var Mod03VariableDelay_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$31, [["render", _sfc_render$31]]);
//#endregion
//#region src/audio/faust/compiled/phaser.wasm?url
var phaser_default = "" + new URL("phaser-DBy0GuC4.wasm", import.meta.url).href;
//#endregion
//#region src/audio/faust/compiled/phaser-meta.json?url
var phaser_meta_default = "" + new URL("phaser-meta-DKz115LQ.json", import.meta.url).href;
//#endregion
//#region src/components/modules/Mod03Phasing.vue
var _sfc_main$30 = {
	name: "Mod03Phasing",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			baseFreq: 100,
			spread: 1.3,
			feedback: 50,
			faustNode: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				baseFreq: {
					fr: "Fréquence de base en Hz",
					en: "Base Frequency (Hz)"
				},
				spread: {
					fr: "Espacement des filtres",
					en: "Filter Spread"
				},
				feedback: {
					fr: "Réinjection en %",
					en: "Feedback %"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.ctx;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			const dspMeta = await (await fetch(phaser_meta_default)).json();
			const dspModule = await WebAssembly.compileStreaming(await fetch(phaser_default));
			this.faustNode = await new FaustMonoDspGenerator().createNode(ctx, "phaser", {
				module: dspModule,
				json: JSON.stringify(dspMeta)
			});
			if (!this.faustNode) {
				console.warn("Failed to create Faust phaser node");
				return;
			}
			this.faustNode.setParamValue("/phaser/baseFreq", this.baseFreq);
			this.faustNode.setParamValue("/phaser/spread", this.spread);
			this.faustNode.setParamValue("/phaser/feedback", this.feedback * .01);
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = 1;
			source.connect(this.faustNode);
			this.faustNode.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			if (this.faustNode) {
				try {
					this.faustNode.disconnect();
				} catch (e) {}
				if (this.faustNode.destroy) this.faustNode.destroy();
				this.faustNode = null;
			}
			if (this.outputGain) {
				try {
					this.outputGain.disconnect();
				} catch (e) {}
				this.outputGain = null;
			}
			this.releaseSource();
		},
		onFreqChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/phaser/baseFreq", val);
		},
		onSpreadChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/phaser/spread", val);
		},
		onFeedChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/phaser/feedback", val * .01);
		}
	}
};
var _hoisted_1$30 = { class: "module-controls" };
var _hoisted_2$30 = { class: "section-head" };
var _hoisted_3$28 = { class: "section-body" };
function _sfc_render$30(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$30, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$30, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$28, [
			createVNode(_component_ControlSlider, {
				label: $options.t("baseFreq"),
				modelValue: $data.baseFreq,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.baseFreq = $event), $options.onFreqChange],
				mini: 40,
				maxi: 1e3,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("spread"),
				modelValue: $data.spread,
				"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.spread = $event), $options.onSpreadChange],
				mini: 1.1,
				maxi: 4,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("feedback"),
				modelValue: $data.feedback,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.feedback = $event), $options.onFeedChange],
				mini: 0,
				maxi: 99
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			])
		])
	]);
}
var Mod03Phasing_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$30, [["render", _sfc_render$30]]);
//#endregion
//#region src/components/modules/Mod04Panning.vue
var _sfc_main$29 = {
	name: "Mod04Panning",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			panType: 0,
			pan: .5,
			algorithms: [
				{
					fr: "Linéaire",
					en: "Linear"
				},
				{
					fr: "Sinus/cosinus",
					en: "Sine/Cosine"
				},
				{
					fr: "Racine carrée",
					en: "Square Root"
				}
			],
			splitter: null,
			merger: null,
			gainL: null,
			gainR: null
		};
	},
	computed: {},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				algorithm: {
					fr: "Algorithme de panoramisation",
					en: "Panning Algorithm"
				},
				pan: {
					fr: "Pan gauche - droite",
					en: "Pan Left - Right"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			this.gainL = ctx.createGain();
			this.gainR = ctx.createGain();
			this.merger = ctx.createChannelMerger(2);
			this.gainL.connect(this.merger, 0, 0);
			this.gainR.connect(this.merger, 0, 1);
			this.merger.connect(this.engine.masterGain);
			source.connect(this.gainL);
			source.connect(this.gainR);
			this.applyPan();
		},
		teardown() {
			[
				this.gainL,
				this.gainR,
				this.merger
			].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		applyPan() {
			if (!this.gainL || !this.gainR) return;
			const p = this.pan;
			const t = this.engine.context.currentTime;
			let l, r;
			if (this.panType === 0) {
				l = 1 - p;
				r = p;
			} else if (this.panType === 1) {
				l = Math.cos(p * Math.PI / 2);
				r = Math.sin(p * Math.PI / 2);
			} else {
				l = Math.sqrt(1 - p);
				r = Math.sqrt(p);
			}
			this.gainL.gain.setTargetAtTime(l, t, .02);
			this.gainR.gain.setTargetAtTime(r, t, .02);
		},
		onPanTypeChange() {
			if (!this.audioReady) return;
			this.applyPan();
		},
		onPanChange() {
			if (!this.audioReady) return;
			this.applyPan();
		}
	}
};
var _hoisted_1$29 = { class: "module-controls" };
var _hoisted_2$29 = { class: "section-head" };
var _hoisted_3$27 = { class: "section-body" };
var _hoisted_4$21 = { class: "control-group" };
var _hoisted_5$19 = { class: "control-label" };
var _hoisted_6$18 = ["value"];
function _sfc_render$29(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$29, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$29, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$27, [createBaseVNode("div", _hoisted_4$21, [createBaseVNode("label", _hoisted_5$19, toDisplayString($options.t("algorithm")), 1), withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.panType = $event),
			onChange: _cache[1] || (_cache[1] = (...args) => $options.onPanTypeChange && $options.onPanTypeChange(...args))
		}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.algorithms, (a, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString(a[_ctx.$i18n.locale]), 9, _hoisted_6$18);
		}), 128))], 544), [[
			vModelSelect,
			$data.panType,
			void 0,
			{ number: true }
		]])]), createVNode(_component_ControlSlider, {
			label: $options.t("pan"),
			modelValue: $data.pan,
			"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.pan = $event), $options.onPanChange],
			mini: 0,
			maxi: 1
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		])])
	]);
}
var Mod04Panning_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$29, [["render", _sfc_render$29]]);
//#endregion
//#region src/components/modules/Mod05PeakRMS.vue
var _sfc_main$28 = {
	name: "Mod05PeakRMS",
	components: { SourcePanel: SourcePanel_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			peakValue: "0.000",
			rmsValue: "0.000",
			animFrameId: null,
			analyser: null
		};
	},
	computed: {},
	mounted() {
		this.startMeasure();
	},
	beforeUnmount() {
		if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				signalRed: {
					fr: "Signal source en rouge",
					en: "Source signal in red"
				},
				peakGreen: {
					fr: "Valeur crête en vert",
					en: "Peak value in green"
				},
				rmsBlue: {
					fr: "Valeur RMS en bleu",
					en: "RMS value in blue"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			this.analyser = this.engine.context.createAnalyser();
			this.analyser.fftSize = 2048;
			this.engine.sourcePanel.output.connect(this.analyser);
		},
		teardown() {
			if (this.analyser) try {
				this.analyser.disconnect();
			} catch (e) {}
		},
		startMeasure() {
			const update = () => {
				if (this.analyser && this.engine.isRunning) {
					const data = new Float32Array(this.analyser.fftSize);
					this.analyser.getFloatTimeDomainData(data);
					let peak = 0;
					let sumSquares = 0;
					for (let i = 0; i < data.length; i++) {
						const v = Math.abs(data[i]);
						if (v > peak) peak = v;
						sumSquares += data[i] * data[i];
					}
					const rms = Math.sqrt(sumSquares / data.length);
					this.peakValue = peak.toFixed(3);
					this.rmsValue = rms.toFixed(3);
				}
				this.animFrameId = requestAnimationFrame(update);
			};
			update();
		}
	}
};
var _hoisted_1$28 = { class: "module-controls" };
var _hoisted_2$28 = { class: "section-head" };
var _hoisted_3$26 = { class: "section-body" };
var _hoisted_4$20 = { class: "peak-rms__line peak-rms__signal" };
var _hoisted_5$18 = { class: "peak-rms__line peak-rms__peak" };
var _hoisted_6$17 = { class: "peak-rms__line peak-rms__rms" };
function _sfc_render$28(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	return openBlock(), createElementBlock("div", _hoisted_1$28, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$28, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$26, [
			createBaseVNode("p", _hoisted_4$20, toDisplayString($options.t("signalRed")), 1),
			createBaseVNode("p", _hoisted_5$18, toDisplayString($options.t("peakGreen")) + ": " + toDisplayString($data.peakValue), 1),
			createBaseVNode("p", _hoisted_6$17, toDisplayString($options.t("rmsBlue")) + ": " + toDisplayString($data.rmsValue), 1)
		])
	]);
}
var Mod05PeakRMS_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$28, [["render", _sfc_render$28]]);
//#endregion
//#region src/utils/waveformLabels.js
var WAVEFORM_LABELS = [
	{
		fr: "Sinus",
		en: "Sine"
	},
	{
		fr: "Scie 2",
		en: "Saw 2"
	},
	{
		fr: "Scie 5",
		en: "Saw 5"
	},
	{
		fr: "Scie 10",
		en: "Saw 10"
	},
	{
		fr: "Scie 20",
		en: "Saw 20"
	},
	{
		fr: "Carrée 2",
		en: "Square 2"
	},
	{
		fr: "Carrée 5",
		en: "Square 5"
	},
	{
		fr: "Carrée 10",
		en: "Square 10"
	},
	{
		fr: "Carrée 20",
		en: "Square 20"
	},
	{
		fr: "Triangle 2",
		en: "Triangle 2"
	},
	{
		fr: "Triangle 5",
		en: "Triangle 5"
	},
	{
		fr: "Triangle 10",
		en: "Triangle 10"
	},
	{
		fr: "Triangle 20",
		en: "Triangle 20"
	}
];
var WAVEFORM_LABELS_ALT = [
	{
		fr: "Sinus",
		en: "Sine"
	},
	{
		fr: "Scie 5",
		en: "Saw 5"
	},
	{
		fr: "Scie 15",
		en: "Saw 15"
	},
	{
		fr: "Scie 30",
		en: "Saw 30"
	},
	{
		fr: "Scie 60",
		en: "Saw 60"
	},
	{
		fr: "Carrée 5",
		en: "Square 5"
	},
	{
		fr: "Carrée 15",
		en: "Square 15"
	},
	{
		fr: "Carrée 30",
		en: "Square 30"
	},
	{
		fr: "Carrée 60",
		en: "Square 60"
	},
	{
		fr: "Triangle 3",
		en: "Triangle 3"
	},
	{
		fr: "Triangle 6",
		en: "Triangle 6"
	},
	{
		fr: "Triangle 12",
		en: "Triangle 12"
	},
	{
		fr: "Triangle 24",
		en: "Triangle 24"
	}
];
//#endregion
//#region src/components/modules/Mod09AmpMod.vue
function buildPeriodicWave$1(ctx, index) {
	if (index === 0) return null;
	let harmonics, type;
	if (index <= 4) {
		type = "saw";
		harmonics = [
			2,
			5,
			10,
			20
		][index - 1];
	} else if (index <= 8) {
		type = "square";
		harmonics = [
			2,
			5,
			10,
			20
		][index - 5];
	} else {
		type = "triangle";
		harmonics = [
			2,
			5,
			10,
			20
		][index - 9];
	}
	const real = new Float32Array(harmonics + 1);
	const imag = new Float32Array(harmonics + 1);
	real[0] = 0;
	imag[0] = 0;
	for (let n = 1; n <= harmonics; n++) if (type === "saw") imag[n] = 1 / n;
	else if (type === "square") imag[n] = n % 2 === 1 ? 1 / n : 0;
	else if (n % 2 === 1) imag[n] = ((n - 1) / 2 % 2 === 0 ? 1 : -1) / (n * n);
	return ctx.createPeriodicWave(real, imag, { disableNormalization: false });
}
var _sfc_main$27 = {
	name: "Mod09AmpMod",
	components: { ControlSlider: ControlSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			modType: 0,
			carrierFreq: 344,
			modFreq: 172,
			carrierWaveIdx: 0,
			modWaveIdx: 0,
			waveforms: WAVEFORM_LABELS,
			carrier: null,
			modulator: null,
			modGain: null,
			outputGain: null,
			dcOffset: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				modType: {
					fr: "Type de modulation",
					en: "Modulation Type"
				},
				ring: {
					fr: "Modulation en anneaux",
					en: "Ring Modulation"
				},
				am: {
					fr: "Modulation d'amplitude",
					en: "Amplitude Modulation"
				},
				carrierFreq: {
					fr: "Fréquence porteuse",
					en: "Carrier Frequency"
				},
				modFreq: {
					fr: "Fréquence modulante",
					en: "Modulator Frequency"
				},
				carrierWave: {
					fr: "Forme d'onde de la porteuse",
					en: "Carrier Waveform"
				},
				modWave: {
					fr: "Forme d'onde de la modulante",
					en: "Modulator Waveform"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.disconnect(this.engine.masterGain);
			} catch (e) {}
			this.carrier = ctx.createOscillator();
			this.carrier.type = "sine";
			this.carrier.frequency.value = this.carrierFreq;
			this.modulator = ctx.createOscillator();
			this.modulator.type = "sine";
			this.modulator.frequency.value = this.modFreq;
			this.modGain = ctx.createGain();
			this.modGain.gain.value = 0;
			this.dcOffset = ctx.createConstantSource();
			this.dcOffset.offset.value = 0;
			this.dcOffset.start();
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = .707;
			this.carrier.connect(this.modGain);
			this.modGain.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
			this.modulator.connect(this.modGain.gain);
			this.dcOffset.connect(this.modGain.gain);
			this.carrier.start();
			this.modulator.start();
			this.applyModType();
		},
		teardown() {
			if (this.carrier) try {
				this.carrier.stop();
			} catch (e) {}
			if (this.modulator) try {
				this.modulator.stop();
			} catch (e) {}
			if (this.dcOffset) try {
				this.dcOffset.stop();
			} catch (e) {}
			[
				this.carrier,
				this.modulator,
				this.modGain,
				this.outputGain,
				this.dcOffset
			].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		applyModType() {
			if (!this.dcOffset) return;
			if (this.modType === 0) this.dcOffset.offset.value = 0;
			else this.dcOffset.offset.value = .5;
		},
		onModTypeChange() {
			this.applyModType();
		},
		onCarrierFreqChange(val) {
			if (!this.audioReady) return;
			this.carrier.frequency.setTargetAtTime(val, this.engine.context.currentTime, .05);
		},
		onModFreqChange(val) {
			if (!this.audioReady) return;
			this.modulator.frequency.setTargetAtTime(val, this.engine.context.currentTime, .05);
		},
		onCarrierWaveChange() {
			if (!this.audioReady) return;
			const wave = buildPeriodicWave$1(this.engine.context, this.carrierWaveIdx);
			if (wave) this.carrier.setPeriodicWave(wave);
			else this.carrier.type = "sine";
		},
		onModWaveChange() {
			if (!this.audioReady) return;
			const wave = buildPeriodicWave$1(this.engine.context, this.modWaveIdx);
			if (wave) this.modulator.setPeriodicWave(wave);
			else this.modulator.type = "sine";
		}
	}
};
var _hoisted_1$27 = { class: "module-controls" };
var _hoisted_2$27 = { class: "section-head" };
var _hoisted_3$25 = { class: "section-body" };
var _hoisted_4$19 = { class: "control-group" };
var _hoisted_5$17 = { class: "control-label" };
var _hoisted_6$16 = { value: 0 };
var _hoisted_7$13 = { value: 1 };
var _hoisted_8$12 = { class: "control-group" };
var _hoisted_9$10 = { class: "control-label" };
var _hoisted_10$7 = ["value"];
var _hoisted_11$6 = { class: "control-group" };
var _hoisted_12$4 = { class: "control-label" };
var _hoisted_13$4 = ["value"];
function _sfc_render$27(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$27, [createBaseVNode("div", _hoisted_2$27, toDisplayString($options.t("moduleInterface")), 1), createBaseVNode("div", _hoisted_3$25, [
		createBaseVNode("div", _hoisted_4$19, [createBaseVNode("label", _hoisted_5$17, toDisplayString($options.t("modType")), 1), withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.modType = $event),
			onChange: _cache[1] || (_cache[1] = (...args) => $options.onModTypeChange && $options.onModTypeChange(...args))
		}, [createBaseVNode("option", _hoisted_6$16, toDisplayString($options.t("ring")), 1), createBaseVNode("option", _hoisted_7$13, toDisplayString($options.t("am")), 1)], 544), [[
			vModelSelect,
			$data.modType,
			void 0,
			{ number: true }
		]])]),
		createVNode(_component_ControlSlider, {
			label: $options.t("carrierFreq"),
			modelValue: $data.carrierFreq,
			"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.carrierFreq = $event), $options.onCarrierFreqChange],
			mini: 40,
			maxi: 2e3,
			log: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createVNode(_component_ControlSlider, {
			label: $options.t("modFreq"),
			modelValue: $data.modFreq,
			"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.modFreq = $event), $options.onModFreqChange],
			mini: 1,
			maxi: 2e3,
			log: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createBaseVNode("div", _hoisted_8$12, [createBaseVNode("label", _hoisted_9$10, toDisplayString($options.t("carrierWave")), 1), withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.carrierWaveIdx = $event),
			onChange: _cache[5] || (_cache[5] = (...args) => $options.onCarrierWaveChange && $options.onCarrierWaveChange(...args))
		}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.waveforms, (w, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString(w[_ctx.$i18n.locale]), 9, _hoisted_10$7);
		}), 128))], 544), [[
			vModelSelect,
			$data.carrierWaveIdx,
			void 0,
			{ number: true }
		]])]),
		createBaseVNode("div", _hoisted_11$6, [createBaseVNode("label", _hoisted_12$4, toDisplayString($options.t("modWave")), 1), withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.modWaveIdx = $event),
			onChange: _cache[7] || (_cache[7] = (...args) => $options.onModWaveChange && $options.onModWaveChange(...args))
		}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.waveforms, (w, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString(w[_ctx.$i18n.locale]), 9, _hoisted_13$4);
		}), 128))], 544), [[
			vModelSelect,
			$data.modWaveIdx,
			void 0,
			{ number: true }
		]])])
	])]);
}
var Mod09AmpMod_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$27, [["render", _sfc_render$27]]);
//#endregion
//#region src/components/modules/Mod09FreqMod.vue
function buildPeriodicWave(ctx, index) {
	if (index === 0) return null;
	let harmonics, type;
	if (index <= 4) {
		type = "saw";
		harmonics = [
			2,
			5,
			10,
			20
		][index - 1];
	} else if (index <= 8) {
		type = "square";
		harmonics = [
			2,
			5,
			10,
			20
		][index - 5];
	} else {
		type = "triangle";
		harmonics = [
			2,
			5,
			10,
			20
		][index - 9];
	}
	const real = new Float32Array(harmonics + 1);
	const imag = new Float32Array(harmonics + 1);
	for (let n = 1; n <= harmonics; n++) if (type === "saw") imag[n] = 1 / n;
	else if (type === "square") imag[n] = n % 2 === 1 ? 1 / n : 0;
	else if (n % 2 === 1) imag[n] = ((n - 1) / 2 % 2 === 0 ? 1 : -1) / (n * n);
	return ctx.createPeriodicWave(real, imag, { disableNormalization: false });
}
var _sfc_main$26 = {
	name: "Mod09FreqMod",
	components: { ControlSlider: ControlSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			carrierFreq: 344,
			ratio: 1,
			modIndex: 5,
			carrierWaveIdx: 0,
			modWaveIdx: 0,
			waveforms: WAVEFORM_LABELS,
			carrier: null,
			modulator: null,
			modGainNode: null,
			outputGain: null
		};
	},
	computed: {
		modFreq() {
			return this.carrierFreq / this.ratio;
		},
		modAmp() {
			return this.modFreq * this.modIndex;
		}
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				carrierFreq: {
					fr: "Fréquence porteuse",
					en: "Carrier Frequency"
				},
				ratio: {
					fr: "Ratio porteuse:modulante",
					en: "Carrier:Modulator Ratio"
				},
				index: {
					fr: "Index de modulation",
					en: "Modulation Index"
				},
				carrierWave: {
					fr: "Forme d'onde de la porteuse",
					en: "Carrier Waveform"
				},
				modWave: {
					fr: "Forme d'onde de la modulante",
					en: "Modulator Waveform"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.disconnect(this.engine.masterGain);
			} catch (e) {}
			this.modulator = ctx.createOscillator();
			this.modulator.type = "sine";
			this.modulator.frequency.value = this.modFreq;
			this.modGainNode = ctx.createGain();
			this.modGainNode.gain.value = this.modAmp;
			this.carrier = ctx.createOscillator();
			this.carrier.type = "sine";
			this.carrier.frequency.value = this.carrierFreq;
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = .707;
			this.modulator.connect(this.modGainNode);
			this.modGainNode.connect(this.carrier.frequency);
			this.carrier.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
			this.modulator.start();
			this.carrier.start();
		},
		teardown() {
			if (this.carrier) try {
				this.carrier.stop();
			} catch (e) {}
			if (this.modulator) try {
				this.modulator.stop();
			} catch (e) {}
			[
				this.carrier,
				this.modulator,
				this.modGainNode,
				this.outputGain
			].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		updateModParams() {
			if (!this.audioReady) return;
			const t = this.engine.context.currentTime;
			const mf = this.carrierFreq / this.ratio;
			const ma = mf * this.modIndex;
			this.modulator.frequency.setTargetAtTime(mf, t, .05);
			this.modGainNode.gain.setTargetAtTime(ma, t, .05);
		},
		onCarrierFreqChange(val) {
			if (!this.audioReady) return;
			this.carrier.frequency.setTargetAtTime(val, this.engine.context.currentTime, .05);
			this.updateModParams();
		},
		onRatioChange() {
			this.updateModParams();
		},
		onIndexChange() {
			this.updateModParams();
		},
		onCarrierWaveChange() {
			if (!this.audioReady) return;
			const wave = buildPeriodicWave(this.engine.context, this.carrierWaveIdx);
			if (wave) this.carrier.setPeriodicWave(wave);
			else this.carrier.type = "sine";
		},
		onModWaveChange() {
			if (!this.audioReady) return;
			const wave = buildPeriodicWave(this.engine.context, this.modWaveIdx);
			if (wave) this.modulator.setPeriodicWave(wave);
			else this.modulator.type = "sine";
		}
	}
};
var _hoisted_1$26 = { class: "module-controls" };
var _hoisted_2$26 = { class: "section-head" };
var _hoisted_3$24 = { class: "section-body" };
var _hoisted_4$18 = { class: "control-group" };
var _hoisted_5$16 = { class: "control-label" };
var _hoisted_6$15 = ["value"];
var _hoisted_7$12 = { class: "control-group" };
var _hoisted_8$11 = { class: "control-label" };
var _hoisted_9$9 = ["value"];
function _sfc_render$26(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$26, [createBaseVNode("div", _hoisted_2$26, toDisplayString($options.t("moduleInterface")), 1), createBaseVNode("div", _hoisted_3$24, [
		createVNode(_component_ControlSlider, {
			label: $options.t("carrierFreq"),
			modelValue: $data.carrierFreq,
			"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.carrierFreq = $event), $options.onCarrierFreqChange],
			mini: 40,
			maxi: 5e3,
			log: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createVNode(_component_ControlSlider, {
			label: $options.t("ratio"),
			modelValue: $data.ratio,
			"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.ratio = $event), $options.onRatioChange],
			mini: .1,
			maxi: 10
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createVNode(_component_ControlSlider, {
			label: $options.t("index"),
			modelValue: $data.modIndex,
			"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.modIndex = $event), $options.onIndexChange],
			mini: 0,
			maxi: 40
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createBaseVNode("div", _hoisted_4$18, [createBaseVNode("label", _hoisted_5$16, toDisplayString($options.t("carrierWave")), 1), withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.carrierWaveIdx = $event),
			onChange: _cache[4] || (_cache[4] = (...args) => $options.onCarrierWaveChange && $options.onCarrierWaveChange(...args))
		}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.waveforms, (w, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString(w[_ctx.$i18n.locale]), 9, _hoisted_6$15);
		}), 128))], 544), [[
			vModelSelect,
			$data.carrierWaveIdx,
			void 0,
			{ number: true }
		]])]),
		createBaseVNode("div", _hoisted_7$12, [createBaseVNode("label", _hoisted_8$11, toDisplayString($options.t("modWave")), 1), withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.modWaveIdx = $event),
			onChange: _cache[6] || (_cache[6] = (...args) => $options.onModWaveChange && $options.onModWaveChange(...args))
		}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.waveforms, (w, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString(w[_ctx.$i18n.locale]), 9, _hoisted_9$9);
		}), 128))], 544), [[
			vModelSelect,
			$data.modWaveIdx,
			void 0,
			{ number: true }
		]])])
	])]);
}
var Mod09FreqMod_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$26, [["render", _sfc_render$26]]);
//#endregion
//#region src/components/modules/Mod01Resampling.vue
var _sfc_main$25 = {
	name: "Mod01Resampling",
	components: { SourcePanel: SourcePanel_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			factor: 1,
			antiAliasOrder: 0,
			reconstructOrder: 0,
			workletNode: null,
			antiAliasFilter: null,
			reconstructFilter: null
		};
	},
	computed: {},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				resampling: {
					fr: "Ré-échantillonnage",
					en: "Resampling"
				},
				antiAlias: {
					fr: "Filtre anti-repliement",
					en: "Anti-aliasing Filter"
				},
				reconstruction: {
					fr: "Filtre de reconstruction",
					en: "Reconstruction Filter"
				},
				none: {
					fr: "Aucun",
					en: "None"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			await ctx.audioWorklet.addModule(new URL("data:text/javascript;base64,Y2xhc3MgUmVzYW1wbGluZ1Byb2Nlc3NvciBleHRlbmRzIEF1ZGlvV29ya2xldFByb2Nlc3NvciB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBzdXBlcigpCiAgICB0aGlzLmZhY3RvciA9IDEgLy8gMT1zciwgMj1zci8yLCA0PXNyLzQsIDg9c3IvOAogICAgdGhpcy5hbnRpQWxpYXNPcmRlciA9IDAgLy8gMD1ub25lLCA4LzMyLzEyOD1GSVIgdGFwcwogICAgdGhpcy5yZWNvbnN0cnVjdE9yZGVyID0gMAogICAgdGhpcy5ob2xkVmFsdWUgPSAwCiAgICB0aGlzLmNvdW50ZXIgPSAwCgogICAgdGhpcy5wb3J0Lm9ubWVzc2FnZSA9IChlKSA9PiB7CiAgICAgIGlmIChlLmRhdGEuZmFjdG9yICE9PSB1bmRlZmluZWQpIHRoaXMuZmFjdG9yID0gZS5kYXRhLmZhY3RvcgogICAgICBpZiAoZS5kYXRhLmFudGlBbGlhc09yZGVyICE9PSB1bmRlZmluZWQpIHRoaXMuYW50aUFsaWFzT3JkZXIgPSBlLmRhdGEuYW50aUFsaWFzT3JkZXIKICAgICAgaWYgKGUuZGF0YS5yZWNvbnN0cnVjdE9yZGVyICE9PSB1bmRlZmluZWQpIHRoaXMucmVjb25zdHJ1Y3RPcmRlciA9IGUuZGF0YS5yZWNvbnN0cnVjdE9yZGVyCiAgICB9CiAgfQoKICBwcm9jZXNzKGlucHV0cywgb3V0cHV0cykgewogICAgY29uc3QgaW5wdXQgPSBpbnB1dHNbMF0KICAgIGNvbnN0IG91dHB1dCA9IG91dHB1dHNbMF0KICAgIGlmICghaW5wdXRbMF0gfHwgIW91dHB1dFswXSkgcmV0dXJuIHRydWUKCiAgICBjb25zdCBpbkRhdGEgPSBpbnB1dFswXQogICAgY29uc3Qgb3V0RGF0YSA9IG91dHB1dFswXQoKICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5EYXRhLmxlbmd0aDsgaSsrKSB7CiAgICAgIC8vIFNhbXBsZS1hbmQtaG9sZCBkZWNpbWF0aW9uCiAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDApIHsKICAgICAgICB0aGlzLmhvbGRWYWx1ZSA9IGluRGF0YVtpXQogICAgICB9CiAgICAgIHRoaXMuY291bnRlcisrCiAgICAgIGlmICh0aGlzLmNvdW50ZXIgPj0gdGhpcy5mYWN0b3IpIHsKICAgICAgICB0aGlzLmNvdW50ZXIgPSAwCiAgICAgIH0KICAgICAgb3V0RGF0YVtpXSA9IHRoaXMuaG9sZFZhbHVlCiAgICB9CgogICAgLy8gQ29weSB0byBvdGhlciBjaGFubmVscwogICAgZm9yIChsZXQgY2ggPSAxOyBjaCA8IG91dHB1dC5sZW5ndGg7IGNoKyspIHsKICAgICAgb3V0cHV0W2NoXS5zZXQob3V0RGF0YSkKICAgIH0KCiAgICByZXR1cm4gdHJ1ZQogIH0KfQoKcmVnaXN0ZXJQcm9jZXNzb3IoJ3Jlc2FtcGxpbmcnLCBSZXNhbXBsaW5nUHJvY2Vzc29yKQo=", "" + import.meta.url));
			this.workletNode = new AudioWorkletNode(ctx, "resampling");
			this.antiAliasFilter = ctx.createBiquadFilter();
			this.antiAliasFilter.type = "lowpass";
			this.antiAliasFilter.frequency.value = ctx.sampleRate / 2;
			this.antiAliasFilter.Q.value = .707;
			this.reconstructFilter = ctx.createBiquadFilter();
			this.reconstructFilter.type = "lowpass";
			this.reconstructFilter.frequency.value = ctx.sampleRate / 2;
			this.reconstructFilter.Q.value = .707;
			source.connect(this.antiAliasFilter);
			this.antiAliasFilter.connect(this.workletNode);
			this.workletNode.connect(this.reconstructFilter);
			this.reconstructFilter.connect(this.engine.masterGain);
			this.updateParams();
		},
		teardown() {
			[
				this.workletNode,
				this.antiAliasFilter,
				this.reconstructFilter
			].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		updateParams() {
			if (!this.workletNode) return;
			this.workletNode.port.postMessage({ factor: this.factor });
			const nyquist = this.engine.sampleRate / (2 * this.factor);
			if (this.antiAliasOrder > 0) this.antiAliasFilter.frequency.value = nyquist;
			else this.antiAliasFilter.frequency.value = this.engine.sampleRate / 2;
			if (this.reconstructOrder > 0) this.reconstructFilter.frequency.value = nyquist;
			else this.reconstructFilter.frequency.value = this.engine.sampleRate / 2;
		},
		onFactorChange() {
			if (!this.audioReady) return;
			this.updateParams();
		},
		onFilterChange() {
			if (!this.audioReady) return;
			this.updateParams();
		}
	}
};
var _hoisted_1$25 = { class: "module-controls" };
var _hoisted_2$25 = { class: "section-head" };
var _hoisted_3$23 = { class: "section-body" };
var _hoisted_4$17 = { class: "control-group" };
var _hoisted_5$15 = { class: "control-label" };
var _hoisted_6$14 = { class: "control-group" };
var _hoisted_7$11 = { class: "control-label" };
var _hoisted_8$10 = { value: 0 };
var _hoisted_9$8 = { class: "control-group" };
var _hoisted_10$6 = { class: "control-label" };
var _hoisted_11$5 = { value: 0 };
function _sfc_render$25(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	return openBlock(), createElementBlock("div", _hoisted_1$25, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$25, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$23, [
			createBaseVNode("div", _hoisted_4$17, [createBaseVNode("label", _hoisted_5$15, toDisplayString($options.t("resampling")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.factor = $event),
				onChange: _cache[1] || (_cache[1] = (...args) => $options.onFactorChange && $options.onFactorChange(...args))
			}, [..._cache[6] || (_cache[6] = [
				createBaseVNode("option", { value: 1 }, "sr", -1),
				createBaseVNode("option", { value: 2 }, "sr/2", -1),
				createBaseVNode("option", { value: 4 }, "sr/4", -1),
				createBaseVNode("option", { value: 8 }, "sr/8", -1)
			])], 544), [[
				vModelSelect,
				$data.factor,
				void 0,
				{ number: true }
			]])]),
			createBaseVNode("div", _hoisted_6$14, [createBaseVNode("label", _hoisted_7$11, toDisplayString($options.t("antiAlias")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.antiAliasOrder = $event),
				onChange: _cache[3] || (_cache[3] = (...args) => $options.onFilterChange && $options.onFilterChange(...args))
			}, [
				createBaseVNode("option", _hoisted_8$10, toDisplayString($options.t("none")), 1),
				_cache[7] || (_cache[7] = createBaseVNode("option", { value: 8 }, "FIR-8", -1)),
				_cache[8] || (_cache[8] = createBaseVNode("option", { value: 32 }, "FIR-32", -1)),
				_cache[9] || (_cache[9] = createBaseVNode("option", { value: 128 }, "FIR-128", -1))
			], 544), [[
				vModelSelect,
				$data.antiAliasOrder,
				void 0,
				{ number: true }
			]])]),
			createBaseVNode("div", _hoisted_9$8, [createBaseVNode("label", _hoisted_10$6, toDisplayString($options.t("reconstruction")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.reconstructOrder = $event),
				onChange: _cache[5] || (_cache[5] = (...args) => $options.onFilterChange && $options.onFilterChange(...args))
			}, [
				createBaseVNode("option", _hoisted_11$5, toDisplayString($options.t("none")), 1),
				_cache[10] || (_cache[10] = createBaseVNode("option", { value: 8 }, "FIR-8", -1)),
				_cache[11] || (_cache[11] = createBaseVNode("option", { value: 32 }, "FIR-32", -1)),
				_cache[12] || (_cache[12] = createBaseVNode("option", { value: 128 }, "FIR-128", -1))
			], 544), [[
				vModelSelect,
				$data.reconstructOrder,
				void 0,
				{ number: true }
			]])])
		])
	]);
}
var Mod01Resampling_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$25, [["render", _sfc_render$25]]);
//#endregion
//#region src/components/modules/Mod01Quantize.vue
var _sfc_main$24 = {
	name: "Mod01Quantize",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			bits: 16,
			signalMode: 0,
			ditherType: 0,
			ditherTypes: [
				{
					fr: "Aucun",
					en: "None"
				},
				{
					fr: "Rectangulaire",
					en: "Rectangular"
				},
				{
					fr: "Triangulaire",
					en: "Triangular"
				},
				{
					fr: "Gaussien",
					en: "Gaussian"
				},
				{
					fr: "Bruit hautes fréquences",
					en: "High-frequency noise"
				},
				{
					fr: "Bruit basses fréquences",
					en: "Low-frequency noise"
				}
			],
			workletNode: null
		};
	},
	computed: {},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				bits: {
					fr: "# de bits de quantification",
					en: "# of quantization bits"
				},
				signal: {
					fr: "Choisir le signal",
					en: "Choose signal"
				},
				degraded: {
					fr: "Signal dégradé",
					en: "Degraded signal"
				},
				noiseOnly: {
					fr: "Bruit de quantification",
					en: "Quantization noise"
				},
				dither: {
					fr: "Bruit de dispersion",
					en: "Dither noise"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			await ctx.audioWorklet.addModule(new URL("data:text/javascript;base64,Y2xhc3MgUXVhbnRpemVQcm9jZXNzb3IgZXh0ZW5kcyBBdWRpb1dvcmtsZXRQcm9jZXNzb3IgewogIGNvbnN0cnVjdG9yKCkgewogICAgc3VwZXIoKQogICAgdGhpcy5iaXRzID0gMTYKICAgIHRoaXMuZGl0aGVyVHlwZSA9IDAgLy8gMD1ub25lLCAxPXJlY3QsIDI9dHJpLCAzPWdhdXNzLCA0PUhQLCA1PUxQCiAgICB0aGlzLnNob3dOb2lzZSA9IGZhbHNlCiAgICAvLyBIUC9MUCBkaXRoZXIgc3RhdGUKICAgIHRoaXMubGFzdERpdGhlciA9IDAKCiAgICB0aGlzLnBvcnQub25tZXNzYWdlID0gKGUpID0+IHsKICAgICAgaWYgKGUuZGF0YS5iaXRzICE9PSB1bmRlZmluZWQpIHRoaXMuYml0cyA9IGUuZGF0YS5iaXRzCiAgICAgIGlmIChlLmRhdGEuZGl0aGVyVHlwZSAhPT0gdW5kZWZpbmVkKSB0aGlzLmRpdGhlclR5cGUgPSBlLmRhdGEuZGl0aGVyVHlwZQogICAgICBpZiAoZS5kYXRhLnNob3dOb2lzZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnNob3dOb2lzZSA9IGUuZGF0YS5zaG93Tm9pc2UKICAgIH0KICB9CgogIGdlbmVyYXRlRGl0aGVyKCkgewogICAgY29uc3Qgc3RlcHMgPSBNYXRoLnBvdygyLCB0aGlzLmJpdHMpIC8gMgogICAgY29uc3QgZGl0aGVyQW1wID0gKDEgLyBzdGVwcykgKiAwLjY2CgogICAgc3dpdGNoICh0aGlzLmRpdGhlclR5cGUpIHsKICAgICAgY2FzZSAwOiByZXR1cm4gMAogICAgICBjYXNlIDE6IC8vIFJlY3Rhbmd1bGFyCiAgICAgICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICogMiAtIDEpICogZGl0aGVyQW1wCiAgICAgIGNhc2UgMjogLy8gVHJpYW5ndWxhcgogICAgICAgIHJldHVybiAoKE1hdGgucmFuZG9tKCkgKyBNYXRoLnJhbmRvbSgpKSAvIDIgKiAyIC0gMSkgKiBkaXRoZXJBbXAKICAgICAgY2FzZSAzOiB7IC8vIEdhdXNzaWFuIChzdW0gb2YgNiB1bmlmb3JtcyBhcHByb3hpbWF0aW9uKQogICAgICAgIGxldCBzdW0gPSAwCiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHN1bSArPSBNYXRoLnJhbmRvbSgpCiAgICAgICAgcmV0dXJuICgoc3VtIC8gMykgLSAxKSAqIGRpdGhlckFtcAogICAgICB9CiAgICAgIGNhc2UgNDogeyAvLyBIaWdoLXBhc3Mgc2hhcGVkCiAgICAgICAgY29uc3Qgd2hpdGUgPSAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKSAqIGRpdGhlckFtcAogICAgICAgIGNvbnN0IGhwID0gd2hpdGUgLSB0aGlzLmxhc3REaXRoZXIKICAgICAgICB0aGlzLmxhc3REaXRoZXIgPSB3aGl0ZQogICAgICAgIHJldHVybiBocAogICAgICB9CiAgICAgIGNhc2UgNTogeyAvLyBMb3ctcGFzcyBzaGFwZWQKICAgICAgICBjb25zdCB3aGl0ZSA9IChNYXRoLnJhbmRvbSgpICogMiAtIDEpICogZGl0aGVyQW1wCiAgICAgICAgY29uc3QgbHAgPSAod2hpdGUgKyB0aGlzLmxhc3REaXRoZXIpICogMC41CiAgICAgICAgdGhpcy5sYXN0RGl0aGVyID0gd2hpdGUKICAgICAgICByZXR1cm4gbHAKICAgICAgfQogICAgICBkZWZhdWx0OiByZXR1cm4gMAogICAgfQogIH0KCiAgcHJvY2VzcyhpbnB1dHMsIG91dHB1dHMpIHsKICAgIGNvbnN0IGlucHV0ID0gaW5wdXRzWzBdCiAgICBjb25zdCBvdXRwdXQgPSBvdXRwdXRzWzBdCiAgICBpZiAoIWlucHV0WzBdIHx8ICFvdXRwdXRbMF0pIHJldHVybiB0cnVlCgogICAgY29uc3QgaW5EYXRhID0gaW5wdXRbMF0KICAgIGNvbnN0IG91dERhdGEgPSBvdXRwdXRbMF0KICAgIGNvbnN0IHN0ZXBzID0gTWF0aC5wb3coMiwgdGhpcy5iaXRzKQogICAgY29uc3QgaGFsZlN0ZXBzID0gc3RlcHMgLyAyCgogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbkRhdGEubGVuZ3RoOyBpKyspIHsKICAgICAgY29uc3QgZGl0aGVyID0gdGhpcy5nZW5lcmF0ZURpdGhlcigpCiAgICAgIGNvbnN0IHNhbXBsZSA9IGluRGF0YVtpXSArIGRpdGhlcgogICAgICAvLyBRdWFudGl6ZQogICAgICBjb25zdCBxdWFudGl6ZWQgPSBNYXRoLnJvdW5kKHNhbXBsZSAqIGhhbGZTdGVwcykgLyBoYWxmU3RlcHMKCiAgICAgIGlmICh0aGlzLnNob3dOb2lzZSkgewogICAgICAgIC8vIE91dHB1dCBxdWFudGl6YXRpb24gbm9pc2Ugb25seQogICAgICAgIG91dERhdGFbaV0gPSBxdWFudGl6ZWQgLSBpbkRhdGFbaV0KICAgICAgfSBlbHNlIHsKICAgICAgICBvdXREYXRhW2ldID0gcXVhbnRpemVkCiAgICAgIH0KICAgIH0KCiAgICBmb3IgKGxldCBjaCA9IDE7IGNoIDwgb3V0cHV0Lmxlbmd0aDsgY2grKykgewogICAgICBvdXRwdXRbY2hdLnNldChvdXREYXRhKQogICAgfQoKICAgIHJldHVybiB0cnVlCiAgfQp9CgpyZWdpc3RlclByb2Nlc3NvcigncXVhbnRpemUnLCBRdWFudGl6ZVByb2Nlc3NvcikK", "" + import.meta.url));
			this.workletNode = new AudioWorkletNode(ctx, "quantize");
			source.connect(this.workletNode);
			this.workletNode.connect(this.engine.masterGain);
			this.updateParams();
		},
		teardown() {
			if (this.workletNode) try {
				this.workletNode.disconnect();
			} catch (e) {}
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		updateParams() {
			if (!this.workletNode) return;
			this.workletNode.port.postMessage({
				bits: this.bits,
				ditherType: this.ditherType,
				showNoise: this.signalMode === 1
			});
		},
		onBitsChange() {
			if (!this.audioReady) return;
			this.updateParams();
		},
		onSignalChange() {
			if (!this.audioReady) return;
			this.updateParams();
		},
		onDitherChange() {
			if (!this.audioReady) return;
			this.updateParams();
		}
	}
};
var _hoisted_1$24 = { class: "module-controls" };
var _hoisted_2$24 = { class: "section-head" };
var _hoisted_3$22 = { class: "section-body" };
var _hoisted_4$16 = { class: "control-group" };
var _hoisted_5$14 = { class: "control-label" };
var _hoisted_6$13 = { value: 0 };
var _hoisted_7$10 = { value: 1 };
var _hoisted_8$9 = { class: "control-group" };
var _hoisted_9$7 = { class: "control-label" };
var _hoisted_10$5 = ["value"];
function _sfc_render$24(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$24, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$24, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$22, [
			createVNode(_component_ControlSlider, {
				label: $options.t("bits"),
				modelValue: $data.bits,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.bits = $event), $options.onBitsChange],
				mini: 2,
				maxi: 16,
				integer: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createBaseVNode("div", _hoisted_4$16, [createBaseVNode("label", _hoisted_5$14, toDisplayString($options.t("signal")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.signalMode = $event),
				onChange: _cache[2] || (_cache[2] = (...args) => $options.onSignalChange && $options.onSignalChange(...args))
			}, [createBaseVNode("option", _hoisted_6$13, toDisplayString($options.t("degraded")), 1), createBaseVNode("option", _hoisted_7$10, toDisplayString($options.t("noiseOnly")), 1)], 544), [[
				vModelSelect,
				$data.signalMode,
				void 0,
				{ number: true }
			]])]),
			createBaseVNode("div", _hoisted_8$9, [createBaseVNode("label", _hoisted_9$7, toDisplayString($options.t("dither")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.ditherType = $event),
				onChange: _cache[4] || (_cache[4] = (...args) => $options.onDitherChange && $options.onDitherChange(...args))
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.ditherTypes, (d, i) => {
				return openBlock(), createElementBlock("option", {
					key: i,
					value: i
				}, toDisplayString(d[_ctx.$i18n.locale]), 9, _hoisted_10$5);
			}), 128))], 544), [[
				vModelSelect,
				$data.ditherType,
				void 0,
				{ number: true }
			]])])
		])
	]);
}
var Mod01Quantize_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$24, [["render", _sfc_render$24]]);
//#endregion
//#region src/components/modules/Mod05EnvFollower.vue
var _sfc_main$23 = {
	name: "Mod05EnvFollower",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			lpFreq: 10,
			analyser: null,
			noiseNode: null,
			noiseGain: null,
			mixGain: null,
			animFrameId: null
		};
	},
	computed: {},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				lpFreq: {
					fr: "Fréq. du filtre passe-bas en Hz",
					en: "Lowpass Filter Freq (Hz)"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			try {
				this.noiseNode = new AudioWorkletNode(ctx, "noise-generator");
				this.noiseNode.port.postMessage({ type: 1 });
			} catch (e) {
				await ctx.audioWorklet.addModule(new URL("data:text/javascript;base64,Y2xhc3MgTm9pc2VHZW5lcmF0b3JQcm9jZXNzb3IgZXh0ZW5kcyBBdWRpb1dvcmtsZXRQcm9jZXNzb3IgewogIGNvbnN0cnVjdG9yKCkgewogICAgc3VwZXIoKQogICAgdGhpcy50eXBlID0gMCAvLyAwPXdoaXRlLCAxPXBpbmssIDI9YnJvd24KICAgIC8vIFBpbmsgbm9pc2UgZmlsdGVyIHN0YXRlIChQYXVsIEtlbGxldCdzIGFsZ29yaXRobSkKICAgIHRoaXMuYjAgPSAwOyB0aGlzLmIxID0gMDsgdGhpcy5iMiA9IDAKICAgIHRoaXMuYjMgPSAwOyB0aGlzLmI0ID0gMDsgdGhpcy5iNSA9IDA7IHRoaXMuYjYgPSAwCiAgICAvLyBCcm93biBub2lzZSBzdGF0ZQogICAgdGhpcy5sYXN0QnJvd24gPSAwCgogICAgdGhpcy5wb3J0Lm9ubWVzc2FnZSA9IChlKSA9PiB7CiAgICAgIGlmIChlLmRhdGEudHlwZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnR5cGUgPSBlLmRhdGEudHlwZQogICAgfQogIH0KCiAgcHJvY2VzcyhpbnB1dHMsIG91dHB1dHMpIHsKICAgIGNvbnN0IG91dHB1dCA9IG91dHB1dHNbMF0KICAgIGNvbnN0IGNoYW5uZWwgPSBvdXRwdXRbMF0KICAgIGlmICghY2hhbm5lbCkgcmV0dXJuIHRydWUKCiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYW5uZWwubGVuZ3RoOyBpKyspIHsKICAgICAgY29uc3Qgd2hpdGUgPSBNYXRoLnJhbmRvbSgpICogMiAtIDEKCiAgICAgIGlmICh0aGlzLnR5cGUgPT09IDApIHsKICAgICAgICAvLyBXaGl0ZSBub2lzZQogICAgICAgIGNoYW5uZWxbaV0gPSB3aGl0ZQogICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gMSkgewogICAgICAgIC8vIFBpbmsgbm9pc2UgKC0zZEIvb2N0YXZlKSAtIFBhdWwgS2VsbGV0J3MgcmVmaW5lZCBtZXRob2QKICAgICAgICB0aGlzLmIwID0gMC45OTg4NiAqIHRoaXMuYjAgKyB3aGl0ZSAqIDAuMDU1NTE3OQogICAgICAgIHRoaXMuYjEgPSAwLjk5MzMyICogdGhpcy5iMSArIHdoaXRlICogMC4wNzUwNzU5CiAgICAgICAgdGhpcy5iMiA9IDAuOTY5MDAgKiB0aGlzLmIyICsgd2hpdGUgKiAwLjE1Mzg1MjAKICAgICAgICB0aGlzLmIzID0gMC44NjY1MCAqIHRoaXMuYjMgKyB3aGl0ZSAqIDAuMzEwNDg1NgogICAgICAgIHRoaXMuYjQgPSAwLjU1MDAwICogdGhpcy5iNCArIHdoaXRlICogMC41MzI5NTIyCiAgICAgICAgdGhpcy5iNSA9IC0wLjc2MTYgKiB0aGlzLmI1IC0gd2hpdGUgKiAwLjAxNjg5ODAKICAgICAgICBjaGFubmVsW2ldID0gKHRoaXMuYjAgKyB0aGlzLmIxICsgdGhpcy5iMiArIHRoaXMuYjMgKyB0aGlzLmI0ICsgdGhpcy5iNSArIHRoaXMuYjYgKyB3aGl0ZSAqIDAuNTM2MikgKiAwLjExCiAgICAgICAgdGhpcy5iNiA9IHdoaXRlICogMC4xMTU5MjYKICAgICAgfSBlbHNlIHsKICAgICAgICAvLyBCcm93biBub2lzZSAoLTZkQi9vY3RhdmUpIC0gaW50ZWdyYXRlZCB3aGl0ZSBub2lzZQogICAgICAgIHRoaXMubGFzdEJyb3duID0gKHRoaXMubGFzdEJyb3duICsgKDAuMDIgKiB3aGl0ZSkpIC8gMS4wMgogICAgICAgIGNoYW5uZWxbaV0gPSB0aGlzLmxhc3RCcm93biAqIDMuNQogICAgICB9CiAgICB9CgogICAgLy8gQ29weSB0byBhbGwgb3V0cHV0IGNoYW5uZWxzIChtb25vIC0+IHN0ZXJlbykKICAgIGZvciAobGV0IGNoID0gMTsgY2ggPCBvdXRwdXQubGVuZ3RoOyBjaCsrKSB7CiAgICAgIG91dHB1dFtjaF0uc2V0KGNoYW5uZWwpCiAgICB9CgogICAgcmV0dXJuIHRydWUKICB9Cn0KCnJlZ2lzdGVyUHJvY2Vzc29yKCdub2lzZS1nZW5lcmF0b3InLCBOb2lzZUdlbmVyYXRvclByb2Nlc3NvcikK", "" + import.meta.url));
				this.noiseNode = new AudioWorkletNode(ctx, "noise-generator");
				this.noiseNode.port.postMessage({ type: 1 });
			}
			this.analyser = ctx.createAnalyser();
			this.analyser.fftSize = 2048;
			this.analyser.smoothingTimeConstant = .9;
			source.connect(this.analyser);
			this.noiseGain = ctx.createGain();
			this.noiseGain.gain.value = 0;
			this.noiseNode.connect(this.noiseGain);
			this.mixGain = ctx.createGain();
			this.mixGain.gain.value = .5;
			source.connect(this.mixGain);
			this.noiseGain.connect(this.mixGain);
			this.mixGain.connect(this.engine.masterGain);
			source.disconnect(this.engine.masterGain);
			this.startFollower();
		},
		teardown() {
			if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
			[
				this.analyser,
				this.noiseNode,
				this.noiseGain,
				this.mixGain
			].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		startFollower() {
			const data = new Float32Array(this.analyser.fftSize);
			const update = () => {
				if (this.analyser && this.engine.isRunning) {
					this.analyser.getFloatTimeDomainData(data);
					let sumSq = 0;
					for (let i = 0; i < data.length; i++) sumSq += data[i] * data[i];
					const rms = Math.sqrt(sumSq / data.length);
					this.noiseGain.gain.setTargetAtTime(rms, this.engine.context.currentTime, 1 / (2 * Math.PI * this.lpFreq));
				}
				this.animFrameId = requestAnimationFrame(update);
			};
			update();
		},
		onFreqChange() {
			if (!this.audioReady) return;
		}
	}
};
var _hoisted_1$23 = { class: "module-controls" };
var _hoisted_2$23 = { class: "section-head" };
var _hoisted_3$21 = { class: "section-body" };
function _sfc_render$23(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$23, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$23, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$21, [createVNode(_component_ControlSlider, {
			label: $options.t("lpFreq"),
			modelValue: $data.lpFreq,
			"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.lpFreq = $event), $options.onFreqChange],
			mini: .1,
			maxi: 100,
			log: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		])])
	]);
}
var Mod05EnvFollower_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$23, [["render", _sfc_render$23]]);
//#endregion
//#region src/components/modules/Mod05Gate.vue
var _sfc_main$22 = {
	name: "Mod05Gate",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			threshold: -50,
			attack: .01,
			release: .05,
			analyser: null,
			gateGain: null,
			animFrameId: null,
			gateOpen: false
		};
	},
	computed: {},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				threshold: {
					fr: "Seuil en dB",
					en: "Threshold (dB)"
				},
				attack: {
					fr: "Temps d'attaque en seconde",
					en: "Attack Time (s)"
				},
				release: {
					fr: "Temps de relâche en seconde",
					en: "Release Time (s)"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			this.analyser = ctx.createAnalyser();
			this.analyser.fftSize = 512;
			this.analyser.smoothingTimeConstant = .8;
			this.gateGain = ctx.createGain();
			this.gateGain.gain.value = 0;
			source.connect(this.analyser);
			source.connect(this.gateGain);
			this.gateGain.connect(this.engine.masterGain);
			this.startGate();
		},
		teardown() {
			if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
			[this.analyser, this.gateGain].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		startGate() {
			const data = new Float32Array(512);
			const update = () => {
				if (this.analyser && this.engine.isRunning) {
					this.analyser.getFloatTimeDomainData(data);
					let peak = 0;
					for (let i = 0; i < data.length; i++) {
						const abs = Math.abs(data[i]);
						if (abs > peak) peak = abs;
					}
					const peakDb = peak > 0 ? 20 * Math.log10(peak) : -Infinity;
					const t = this.engine.context.currentTime;
					if (peakDb >= this.threshold && !this.gateOpen) {
						this.gateOpen = true;
						this.gateGain.gain.setTargetAtTime(1, t, this.attack / 3);
					} else if (peakDb < this.threshold && this.gateOpen) {
						this.gateOpen = false;
						this.gateGain.gain.setTargetAtTime(0, t, this.release / 3);
					}
				}
				this.animFrameId = requestAnimationFrame(update);
			};
			update();
		},
		updateParams() {
			if (!this.audioReady) return;
		}
	}
};
var _hoisted_1$22 = { class: "module-controls" };
var _hoisted_2$22 = { class: "section-head" };
var _hoisted_3$20 = { class: "section-body" };
function _sfc_render$22(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$22, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$22, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$20, [
			createVNode(_component_ControlSlider, {
				label: $options.t("threshold"),
				modelValue: $data.threshold,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.threshold = $event), $options.updateParams],
				mini: -70,
				maxi: 0
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("attack"),
				modelValue: $data.attack,
				"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.attack = $event), $options.updateParams],
				mini: 1e-4,
				maxi: .25,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("release"),
				modelValue: $data.release,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.release = $event), $options.updateParams],
				mini: 1e-4,
				maxi: .25,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			])
		])
	]);
}
var Mod05Gate_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$22, [["render", _sfc_render$22]]);
//#endregion
//#region src/components/modules/Mod05Compress.vue
var _sfc_main$21 = {
	name: "Mod05Compress",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			threshold: -50,
			ratio: 4,
			attack: .01,
			release: .05,
			makeupGain: 0,
			compressor: null,
			gainNode: null
		};
	},
	computed: {},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				threshold: {
					fr: "Seuil en dB",
					en: "Threshold (dB)"
				},
				ratio: {
					fr: "Ratio de compression",
					en: "Compression Ratio"
				},
				attack: {
					fr: "Temps d'attaque en seconde",
					en: "Attack Time (s)"
				},
				release: {
					fr: "Temps de relâche en seconde",
					en: "Release Time (s)"
				},
				gain: {
					fr: "Gain post-compresseur",
					en: "Post-compressor Gain"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			this.compressor = ctx.createDynamicsCompressor();
			this.compressor.threshold.value = this.threshold;
			this.compressor.ratio.value = this.ratio;
			this.compressor.attack.value = this.attack;
			this.compressor.release.value = this.release;
			this.compressor.knee.value = 0;
			this.gainNode = ctx.createGain();
			this.gainNode.gain.value = Math.pow(10, this.makeupGain * .05);
			source.connect(this.compressor);
			this.compressor.connect(this.gainNode);
			this.gainNode.connect(this.engine.masterGain);
		},
		teardown() {
			[this.compressor, this.gainNode].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		updateCompressor() {
			if (!this.compressor) return;
			const t = this.engine.context.currentTime;
			this.compressor.threshold.setTargetAtTime(this.threshold, t, .05);
			this.compressor.ratio.setTargetAtTime(Math.min(this.ratio, 20), t, .05);
			this.compressor.attack.setTargetAtTime(this.attack, t, .05);
			this.compressor.release.setTargetAtTime(this.release, t, .05);
		},
		updateGain() {
			if (!this.gainNode) return;
			this.gainNode.gain.setTargetAtTime(Math.pow(10, this.makeupGain * .05), this.engine.context.currentTime, .05);
		}
	}
};
var _hoisted_1$21 = { class: "module-controls" };
var _hoisted_2$21 = { class: "section-head" };
var _hoisted_3$19 = { class: "section-body" };
function _sfc_render$21(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$21, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$21, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$19, [
			createVNode(_component_ControlSlider, {
				label: $options.t("threshold"),
				modelValue: $data.threshold,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.threshold = $event), $options.updateCompressor],
				mini: -70,
				maxi: 0
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("ratio"),
				modelValue: $data.ratio,
				"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.ratio = $event), $options.updateCompressor],
				mini: 1,
				maxi: 100,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("attack"),
				modelValue: $data.attack,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.attack = $event), $options.updateCompressor],
				mini: 1e-4,
				maxi: .25,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("release"),
				modelValue: $data.release,
				"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.release = $event), $options.updateCompressor],
				mini: 1e-4,
				maxi: .25,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("gain"),
				modelValue: $data.makeupGain,
				"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $data.makeupGain = $event), $options.updateGain],
				mini: 0,
				maxi: 24
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			])
		])
	]);
}
var Mod05Compress_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$21, [["render", _sfc_render$21]]);
//#endregion
//#region src/components/modules/Mod09AutoMod.vue
var _sfc_main$20 = {
	name: "Mod09AutoMod",
	components: { ControlSlider: ControlSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			freq: 172,
			index: .1,
			osc: null,
			feedbackGain: null,
			outputGain: null,
			delayNode: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				carrierFreq: {
					fr: "Fréquence porteuse",
					en: "Carrier Frequency"
				},
				index: {
					fr: "Index de modulation",
					en: "Modulation Index"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.disconnect(this.engine.masterGain);
			} catch (e) {}
			this.osc = ctx.createOscillator();
			this.osc.type = "sine";
			this.osc.frequency.value = this.freq;
			this.feedbackGain = ctx.createGain();
			this.feedbackGain.gain.value = this.index * this.freq * .17;
			this.delayNode = ctx.createDelay(.01);
			this.delayNode.delayTime.value = 1 / ctx.sampleRate;
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = .707;
			this.osc.connect(this.feedbackGain);
			this.feedbackGain.connect(this.delayNode);
			this.delayNode.connect(this.osc.frequency);
			this.osc.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
			this.osc.start();
		},
		teardown() {
			if (this.osc) try {
				this.osc.stop();
			} catch (e) {}
			[
				this.osc,
				this.feedbackGain,
				this.delayNode,
				this.outputGain
			].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		onFreqChange(val) {
			if (!this.audioReady) return;
			this.osc.frequency.setTargetAtTime(val, this.engine.context.currentTime, .05);
			this.feedbackGain.gain.setTargetAtTime(this.index * val * .17, this.engine.context.currentTime, .05);
		},
		onIndexChange(val) {
			if (!this.audioReady) return;
			this.feedbackGain.gain.setTargetAtTime(val * this.freq * .17, this.engine.context.currentTime, .05);
		}
	}
};
var _hoisted_1$20 = { class: "module-controls" };
var _hoisted_2$20 = { class: "section-head" };
var _hoisted_3$18 = { class: "section-body" };
function _sfc_render$20(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$20, [createBaseVNode("div", _hoisted_2$20, toDisplayString($options.t("moduleInterface")), 1), createBaseVNode("div", _hoisted_3$18, [createVNode(_component_ControlSlider, {
		label: $options.t("carrierFreq"),
		modelValue: $data.freq,
		"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.freq = $event), $options.onFreqChange],
		mini: 40,
		maxi: 2e3,
		log: true
	}, null, 8, [
		"label",
		"modelValue",
		"onUpdate:modelValue"
	]), createVNode(_component_ControlSlider, {
		label: $options.t("index"),
		modelValue: $data.index,
		"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.index = $event), $options.onIndexChange],
		mini: 0,
		maxi: 1
	}, null, 8, [
		"label",
		"modelValue",
		"onUpdate:modelValue"
	])])]);
}
var Mod09AutoMod_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$20, [["render", _sfc_render$20]]);
//#endregion
//#region src/components/visualization/TransferFunction.vue
var _sfc_main$19 = {
	name: "TransferFunction",
	props: { curve: {
		type: Float32Array,
		default: null
	} },
	watch: { curve() {
		this.draw();
	} },
	mounted() {
		this.draw();
	},
	methods: { draw() {
		const canvas = this.$refs.canvas;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		const w = canvas.width;
		const h = canvas.height;
		ctx.fillStyle = "#0a0a0e";
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = "#1a1a24";
		ctx.lineWidth = .5;
		ctx.beginPath();
		ctx.moveTo(w / 2, 0);
		ctx.lineTo(w / 2, h);
		ctx.moveTo(0, h / 2);
		ctx.lineTo(w, h / 2);
		ctx.stroke();
		if (!this.curve || this.curve.length === 0) return;
		ctx.strokeStyle = "#4ade80";
		ctx.lineWidth = 1.5;
		ctx.beginPath();
		const len = this.curve.length;
		for (let i = 0; i < len; i++) {
			const x = i / (len - 1) * w;
			const y = (1 - (this.curve[i] + 1) / 2) * h;
			if (i === 0) ctx.moveTo(x, y);
			else ctx.lineTo(x, y);
		}
		ctx.stroke();
	} }
};
var _hoisted_1$19 = { class: "transfer-function" };
var _hoisted_2$19 = {
	ref: "canvas",
	width: "256",
	height: "200",
	class: "transfer-function__canvas"
};
function _sfc_render$19(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$19, [createBaseVNode("canvas", _hoisted_2$19, null, 512)]);
}
var TransferFunction_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$19, [["render", _sfc_render$19]]);
//#endregion
//#region src/components/modules/Mod10Chebyshev.vue
function chebyshev(n, x) {
	if (n === 0) return 1;
	if (n === 1) return x;
	let t0 = 1, t1 = x;
	for (let i = 2; i <= n; i++) {
		const t2 = 2 * x * t1 - t0;
		t0 = t1;
		t1 = t2;
	}
	return t1;
}
function buildCurve(amps, size) {
	const curve = new Float32Array(size);
	for (let i = 0; i < size; i++) {
		const x = i / (size - 1) * 2 - 1;
		let val = 0;
		for (let n = 0; n < amps.length; n++) val += amps[n] * chebyshev(n + 1, x);
		curve[i] = val;
	}
	let maxAbs = 0;
	for (let i = 0; i < size; i++) {
		const abs = Math.abs(curve[i]);
		if (abs > maxAbs) maxAbs = abs;
	}
	if (maxAbs > 0) for (let i = 0; i < size; i++) curve[i] /= maxAbs;
	return curve;
}
var _sfc_main$18 = {
	name: "Mod10Chebyshev",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default,
		LabelKnob: LabelKnob_default,
		TransferFunction: TransferFunction_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			amps: [
				1,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			inputGain: 1,
			normalize: false,
			curve: null,
			waveshaper: null,
			inputGainNode: null,
			outputGain: null
		};
	},
	mounted() {
		this.updateCurve();
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				amplitudes: {
					fr: "Amplitudes des polynômes",
					en: "Polynomial Amplitudes"
				},
				inputGain: {
					fr: "Volume d'entrée",
					en: "Input Gain"
				},
				normalize: {
					fr: "Activer la normalisation",
					en: "Enable Normalization"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			this.inputGainNode = ctx.createGain();
			this.inputGainNode.gain.value = this.inputGain;
			this.waveshaper = ctx.createWaveShaper();
			this.waveshaper.oversample = "4x";
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = .707;
			source.connect(this.inputGainNode);
			this.inputGainNode.connect(this.waveshaper);
			this.waveshaper.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			[
				this.inputGainNode,
				this.waveshaper,
				this.outputGain
			].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		setAmp(index, value) {
			this.amps[index] = value;
			this.updateCurve();
		},
		updateCurve() {
			this.curve = buildCurve(this.amps, 1024);
			if (this.waveshaper) this.waveshaper.curve = this.curve;
		},
		onGainChange(val) {
			if (this.inputGainNode) this.inputGainNode.gain.setTargetAtTime(val, this.engine.context.currentTime, .05);
		}
	}
};
var _hoisted_1$18 = { class: "module-controls" };
var _hoisted_2$18 = { class: "section-head" };
var _hoisted_3$17 = { class: "section-body" };
var _hoisted_4$15 = { class: "control-label" };
var _hoisted_5$13 = { class: "cheby-knobs" };
var _hoisted_6$12 = { class: "control-label" };
function _sfc_render$18(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_LabelKnob = resolveComponent("LabelKnob");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	const _component_TransferFunction = resolveComponent("TransferFunction");
	return openBlock(), createElementBlock("div", _hoisted_1$18, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$18, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$17, [
			createBaseVNode("label", _hoisted_4$15, toDisplayString($options.t("amplitudes")), 1),
			createBaseVNode("div", _hoisted_5$13, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.amps, (_, i) => {
				return openBlock(), createBlock(_component_LabelKnob, {
					key: i,
					label: "T" + (i + 1),
					modelValue: $data.amps[i],
					mini: -1,
					maxi: 1,
					"onUpdate:modelValue": (v) => $options.setAmp(i, v)
				}, null, 8, [
					"label",
					"modelValue",
					"onUpdate:modelValue"
				]);
			}), 128))]),
			createVNode(_component_ControlSlider, {
				label: $options.t("inputGain"),
				modelValue: $data.inputGain,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.inputGain = $event), $options.onGainChange],
				mini: .01,
				maxi: 1
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createBaseVNode("label", _hoisted_6$12, [withDirectives(createBaseVNode("input", {
				type: "checkbox",
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.normalize = $event),
				onChange: _cache[2] || (_cache[2] = (...args) => $options.updateCurve && $options.updateCurve(...args))
			}, null, 544), [[vModelCheckbox, $data.normalize]]), createTextVNode(" " + toDisplayString($options.t("normalize")), 1)]),
			createVNode(_component_TransferFunction, { curve: $data.curve }, null, 8, ["curve"])
		])
	]);
}
var Mod10Chebyshev_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$18, [["render", _sfc_render$18]]);
//#endregion
//#region src/audio/faust/compiled/distortion.wasm?url
var distortion_default = "" + new URL("distortion-NXgzjmXX.wasm", import.meta.url).href;
//#endregion
//#region src/audio/faust/compiled/distortion-meta.json?url
var distortion_meta_default = "" + new URL("distortion-meta-BTbmrGEB.json", import.meta.url).href;
//#endregion
//#region src/components/modules/Mod10Distortion.vue
var _sfc_main$17 = {
	name: "Mod10Distortion",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			distoType: 0,
			drive: .5,
			filterEnabled: false,
			cutoff: 5e3,
			distoTypes: [
				{
					fr: "Clipping",
					en: "Clipping"
				},
				{
					fr: "Redresseur d'onde",
					en: "Wave Rectifier"
				},
				{
					fr: "Arctangente",
					en: "Arctangent"
				},
				{
					fr: "Waveshaper",
					en: "Waveshaper"
				}
			],
			faustNode: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				distoType: {
					fr: "Choix de la distorsion",
					en: "Distortion Type"
				},
				enableFilter: {
					fr: "Activer le filtre passe-bas",
					en: "Enable Lowpass Filter"
				},
				cutoff: {
					fr: "Fréquence de coupure du filtre",
					en: "Filter Cutoff Frequency"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.ctx;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			const dspMeta = await (await fetch(distortion_meta_default)).json();
			const dspModule = await WebAssembly.compileStreaming(await fetch(distortion_default));
			this.faustNode = await new FaustMonoDspGenerator().createNode(ctx, "distortion", {
				module: dspModule,
				json: JSON.stringify(dspMeta)
			});
			if (!this.faustNode) {
				console.warn("Failed to create Faust distortion node");
				return;
			}
			this.faustNode.setParamValue("/distortion/type", this.distoType);
			this.faustNode.setParamValue("/distortion/drive", this.drive);
			this.faustNode.setParamValue("/distortion/filterOn", this.filterEnabled ? 1 : 0);
			this.faustNode.setParamValue("/distortion/cutoff", this.cutoff);
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = 1;
			source.connect(this.faustNode);
			this.faustNode.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			if (this.faustNode) {
				try {
					this.faustNode.disconnect();
				} catch (e) {}
				if (this.faustNode.destroy) this.faustNode.destroy();
				this.faustNode = null;
			}
			if (this.outputGain) {
				try {
					this.outputGain.disconnect();
				} catch (e) {}
				this.outputGain = null;
			}
			this.releaseSource();
		},
		onTypeChange() {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/distortion/type", this.distoType);
		},
		onDriveChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/distortion/drive", val);
		},
		onFilterToggle() {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/distortion/filterOn", this.filterEnabled ? 1 : 0);
		},
		onCutoffChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			this.faustNode.setParamValue("/distortion/cutoff", val);
		}
	}
};
var _hoisted_1$17 = { class: "module-controls" };
var _hoisted_2$17 = { class: "section-head" };
var _hoisted_3$16 = { class: "section-body" };
var _hoisted_4$14 = { class: "control-group" };
var _hoisted_5$12 = { class: "control-label" };
var _hoisted_6$11 = ["value"];
var _hoisted_7$9 = { class: "control-label" };
function _sfc_render$17(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$17, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$17, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$16, [
			createBaseVNode("div", _hoisted_4$14, [createBaseVNode("label", _hoisted_5$12, toDisplayString($options.t("distoType")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.distoType = $event),
				onChange: _cache[1] || (_cache[1] = (...args) => $options.onTypeChange && $options.onTypeChange(...args))
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.distoTypes, (d, i) => {
				return openBlock(), createElementBlock("option", {
					key: i,
					value: i
				}, toDisplayString(d[_ctx.$i18n.locale]), 9, _hoisted_6$11);
			}), 128))], 544), [[
				vModelSelect,
				$data.distoType,
				void 0,
				{ number: true }
			]])]),
			createVNode(_component_ControlSlider, {
				label: "Drive",
				modelValue: $data.drive,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.drive = $event), $options.onDriveChange],
				mini: 0,
				maxi: 1
			}, null, 8, ["modelValue", "onUpdate:modelValue"]),
			createBaseVNode("label", _hoisted_7$9, [withDirectives(createBaseVNode("input", {
				type: "checkbox",
				"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.filterEnabled = $event),
				onChange: _cache[4] || (_cache[4] = (...args) => $options.onFilterToggle && $options.onFilterToggle(...args))
			}, null, 544), [[vModelCheckbox, $data.filterEnabled]]), createTextVNode(" " + toDisplayString($options.t("enableFilter")), 1)]),
			createVNode(_component_ControlSlider, {
				label: $options.t("cutoff"),
				modelValue: $data.cutoff,
				"onUpdate:modelValue": [_cache[5] || (_cache[5] = ($event) => $data.cutoff = $event), $options.onCutoffChange],
				mini: 100,
				maxi: 2e4,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			])
		])
	]);
}
var Mod10Distortion_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$17, [["render", _sfc_render$17]]);
//#endregion
//#region src/components/modules/Mod03Transpose.vue
var _sfc_main$16 = {
	name: "Mod03Transpose",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			transpo: -7,
			feedback: 0,
			balance: .5,
			workletNode: null,
			dryGain: null,
			wetGain: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				transpo: {
					fr: "Transposition en demi-tons",
					en: "Transposition (semitones)"
				},
				feedback: {
					fr: "Réinjection en %",
					en: "Feedback %"
				},
				balance: {
					fr: "Balance original/transposé",
					en: "Balance dry/wet"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			await ctx.audioWorklet.addModule(new URL("data:text/javascript;base64,Ly8gUGl0Y2ggc2hpZnRlciB1c2luZyBkdWFsIG92ZXJsYXBwaW5nIGRlbGF5IGxpbmVzIHdpdGggbGluZWFyIHJhbXAuCi8vIEJhc2VkIG9uIHRoZSBIYXJtb25pemVyIGFsZ29yaXRobTogdHdvIHJlYWQgcG9pbnRlcnMgc2NhbiB0aHJvdWdoIGEKLy8gY2lyY3VsYXIgYnVmZmVyIGF0IGEgc3BlZWQgb2Zmc2V0IGZyb20gdGhlIHdyaXRlIHBvaW50ZXIsIGNyb3NzZmFkaW5nCi8vIGJldHdlZW4gdGhlbSB0byBhdm9pZCBkaXNjb250aW51aXRpZXMuCgpjbGFzcyBIYXJtb25pemVyUHJvY2Vzc29yIGV4dGVuZHMgQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIHsKICBjb25zdHJ1Y3RvcigpIHsKICAgIHN1cGVyKCkKICAgIHRoaXMudHJhbnNwbyA9IC03IC8vIHNlbWl0b25lcwogICAgdGhpcy5mZWVkYmFjayA9IDAKICAgIHRoaXMuYnVmZmVyU2l6ZSA9IDY1NTM2CiAgICB0aGlzLmJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5idWZmZXJTaXplKQogICAgdGhpcy53cml0ZVBvcyA9IDAKICAgIHRoaXMucmVhZFBvczEgPSAwCiAgICB0aGlzLnJlYWRQb3MyID0gMAogICAgdGhpcy5waGFzZSA9IDAgLy8gMC4uMSBmb3IgY3Jvc3NmYWRlCiAgICB0aGlzLndpbmRvd1NpemUgPSAyMDQ4IC8vIHNhbXBsZXMgZm9yIG9uZSByYW1wIGN5Y2xlCiAgICB0aGlzLmxhc3RPdXQgPSAwCgogICAgdGhpcy5wb3J0Lm9ubWVzc2FnZSA9IChlKSA9PiB7CiAgICAgIGlmIChlLmRhdGEudHJhbnNwbyAhPT0gdW5kZWZpbmVkKSB0aGlzLnRyYW5zcG8gPSBlLmRhdGEudHJhbnNwbwogICAgICBpZiAoZS5kYXRhLmZlZWRiYWNrICE9PSB1bmRlZmluZWQpIHRoaXMuZmVlZGJhY2sgPSBlLmRhdGEuZmVlZGJhY2sKICAgIH0KICB9CgogIHByb2Nlc3MoaW5wdXRzLCBvdXRwdXRzKSB7CiAgICBjb25zdCBpbnB1dCA9IGlucHV0c1swXQogICAgY29uc3Qgb3V0cHV0ID0gb3V0cHV0c1swXQogICAgaWYgKCFpbnB1dFswXSB8fCAhb3V0cHV0WzBdKSByZXR1cm4gdHJ1ZQoKICAgIGNvbnN0IGluRGF0YSA9IGlucHV0WzBdCiAgICBjb25zdCBvdXREYXRhID0gb3V0cHV0WzBdCiAgICBjb25zdCBzciA9IHNhbXBsZVJhdGUKCiAgICAvLyBSYXRlIG9mZnNldDogaG93IG11Y2ggZmFzdGVyL3Nsb3dlciB0aGUgcmVhZCBwb2ludGVyIG1vdmVzIHZzIHdyaXRlCiAgICAvLyB0cmFuc3BvIHNlbWl0b25lcyAtPiByYXRlID0gMl4odHJhbnNwby8xMikgLSAxCiAgICBjb25zdCByYXRlID0gTWF0aC5wb3coMiwgdGhpcy50cmFuc3BvIC8gMTIpIC0gMQoKICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5EYXRhLmxlbmd0aDsgaSsrKSB7CiAgICAgIC8vIFdyaXRlIGlucHV0ICsgZmVlZGJhY2sgaW50byBidWZmZXIKICAgICAgdGhpcy5idWZmZXJbdGhpcy53cml0ZVBvc10gPSBpbkRhdGFbaV0gKyB0aGlzLmxhc3RPdXQgKiB0aGlzLmZlZWRiYWNrCgogICAgICAvLyBBZHZhbmNlIHBoYXNlCiAgICAgIHRoaXMucGhhc2UgKz0gMSAvIHRoaXMud2luZG93U2l6ZQogICAgICBpZiAodGhpcy5waGFzZSA+PSAxKSB0aGlzLnBoYXNlIC09IDEKCiAgICAgIC8vIFR3byByZWFkIHBvc2l0aW9ucywgb2Zmc2V0IGJ5IGhhbGYgYSB3aW5kb3cKICAgICAgY29uc3QgZGVsYXkxID0gdGhpcy5waGFzZSAqIHRoaXMud2luZG93U2l6ZSAqIE1hdGguYWJzKHJhdGUpCiAgICAgIGNvbnN0IGRlbGF5MiA9ICgodGhpcy5waGFzZSArIDAuNSkgJSAxKSAqIHRoaXMud2luZG93U2l6ZSAqIE1hdGguYWJzKHJhdGUpCgogICAgICBsZXQgcnAxID0gdGhpcy53cml0ZVBvcyAtIGRlbGF5MSAqIChyYXRlID49IDAgPyAxIDogLTEpCiAgICAgIGxldCBycDIgPSB0aGlzLndyaXRlUG9zIC0gZGVsYXkyICogKHJhdGUgPj0gMCA/IDEgOiAtMSkKCiAgICAgIC8vIFdyYXAgcmVhZCBwb3NpdGlvbnMKICAgICAgcnAxID0gKChycDEgJSB0aGlzLmJ1ZmZlclNpemUpICsgdGhpcy5idWZmZXJTaXplKSAlIHRoaXMuYnVmZmVyU2l6ZQogICAgICBycDIgPSAoKHJwMiAlIHRoaXMuYnVmZmVyU2l6ZSkgKyB0aGlzLmJ1ZmZlclNpemUpICUgdGhpcy5idWZmZXJTaXplCgogICAgICAvLyBMaW5lYXIgaW50ZXJwb2xhdGlvbiBmb3Igc3ViLXNhbXBsZSByZWFkaW5nCiAgICAgIGNvbnN0IGlkeDEgPSBNYXRoLmZsb29yKHJwMSkKICAgICAgY29uc3QgZnJhYzEgPSBycDEgLSBpZHgxCiAgICAgIGNvbnN0IHMxID0gdGhpcy5idWZmZXJbaWR4MV0gKiAoMSAtIGZyYWMxKSArIHRoaXMuYnVmZmVyWyhpZHgxICsgMSkgJSB0aGlzLmJ1ZmZlclNpemVdICogZnJhYzEKCiAgICAgIGNvbnN0IGlkeDIgPSBNYXRoLmZsb29yKHJwMikKICAgICAgY29uc3QgZnJhYzIgPSBycDIgLSBpZHgyCiAgICAgIGNvbnN0IHMyID0gdGhpcy5idWZmZXJbaWR4Ml0gKiAoMSAtIGZyYWMyKSArIHRoaXMuYnVmZmVyWyhpZHgyICsgMSkgJSB0aGlzLmJ1ZmZlclNpemVdICogZnJhYzIKCiAgICAgIC8vIENyb3NzZmFkZTogY29zXjIgd2luZG93CiAgICAgIGNvbnN0IGZhZGUgPSB0aGlzLnBoYXNlCiAgICAgIGNvbnN0IHcxID0gTWF0aC5jb3MoZmFkZSAqIE1hdGguUEkpICogMC41ICsgMC41CiAgICAgIGNvbnN0IHcyID0gMSAtIHcxCgogICAgICBvdXREYXRhW2ldID0gczEgKiB3MSArIHMyICogdzIKICAgICAgdGhpcy5sYXN0T3V0ID0gb3V0RGF0YVtpXQoKICAgICAgdGhpcy53cml0ZVBvcyA9ICh0aGlzLndyaXRlUG9zICsgMSkgJSB0aGlzLmJ1ZmZlclNpemUKICAgIH0KCiAgICBmb3IgKGxldCBjaCA9IDE7IGNoIDwgb3V0cHV0Lmxlbmd0aDsgY2grKykgewogICAgICBvdXRwdXRbY2hdLnNldChvdXREYXRhKQogICAgfQoKICAgIHJldHVybiB0cnVlCiAgfQp9CgpyZWdpc3RlclByb2Nlc3NvcignaGFybW9uaXplcicsIEhhcm1vbml6ZXJQcm9jZXNzb3IpCg==", "" + import.meta.url));
			this.workletNode = new AudioWorkletNode(ctx, "harmonizer");
			this.workletNode.port.postMessage({
				transpo: this.transpo,
				feedback: this.feedback * .01
			});
			this.dryGain = ctx.createGain();
			this.dryGain.gain.value = 1 - this.balance;
			this.wetGain = ctx.createGain();
			this.wetGain.gain.value = this.balance;
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = 1;
			source.connect(this.workletNode);
			source.connect(this.dryGain);
			this.workletNode.connect(this.wetGain);
			this.dryGain.connect(this.outputGain);
			this.wetGain.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			[
				this.workletNode,
				this.dryGain,
				this.wetGain,
				this.outputGain
			].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		onTranspoChange(val) {
			if (this.workletNode) this.workletNode.port.postMessage({ transpo: val });
		},
		onFeedChange(val) {
			if (this.workletNode) this.workletNode.port.postMessage({ feedback: val * .01 });
		},
		onBalanceChange(val) {
			if (!this.audioReady) return;
			const t = this.engine.context.currentTime;
			this.dryGain.gain.setTargetAtTime(1 - val, t, .02);
			this.wetGain.gain.setTargetAtTime(val, t, .02);
		}
	}
};
var _hoisted_1$16 = { class: "module-controls" };
var _hoisted_2$16 = { class: "section-head" };
var _hoisted_3$15 = { class: "section-body" };
function _sfc_render$16(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$16, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$16, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$15, [
			createVNode(_component_ControlSlider, {
				label: $options.t("transpo"),
				modelValue: $data.transpo,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.transpo = $event), $options.onTranspoChange],
				mini: -24,
				maxi: 12
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("feedback"),
				modelValue: $data.feedback,
				"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.feedback = $event), $options.onFeedChange],
				mini: 0,
				maxi: 99
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("balance"),
				modelValue: $data.balance,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.balance = $event), $options.onBalanceChange],
				mini: 0,
				maxi: 1
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			])
		])
	]);
}
var Mod03Transpose_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$16, [["render", _sfc_render$16]]);
//#endregion
//#region src/audio/faust/compiled/freeverb.wasm?url
var freeverb_default = "" + new URL("freeverb-q6nEgfm1.wasm", import.meta.url).href;
//#endregion
//#region src/audio/faust/compiled/freeverb-meta.json?url
var freeverb_meta_default = "" + new URL("freeverb-meta-Bfcoe697.json", import.meta.url).href;
//#endregion
//#region src/audio/faust/compiled/schroeder1.wasm?url
var schroeder1_default = "" + new URL("schroeder1-C7cLaceZ.wasm", import.meta.url).href;
//#endregion
//#region src/audio/faust/compiled/schroeder1-meta.json?url
var schroeder1_meta_default = "" + new URL("schroeder1-meta-DmmGdn77.json", import.meta.url).href;
//#endregion
//#region src/audio/faust/compiled/schroeder2.wasm?url
var schroeder2_default = "" + new URL("schroeder2-8o_KVDO3.wasm", import.meta.url).href;
//#endregion
//#region src/audio/faust/compiled/schroeder2-meta.json?url
var schroeder2_meta_default = "" + new URL("schroeder2-meta-ZVuvzhAi.json", import.meta.url).href;
//#endregion
//#region src/audio/faust/compiled/fdn.wasm?url
var fdn_default = "" + new URL("fdn-ZIVMrMWu.wasm", import.meta.url).href;
//#endregion
//#region src/audio/faust/compiled/fdn-meta.json?url
var fdn_meta_default = "" + new URL("fdn-meta-BZ0ODOPu.json", import.meta.url).href;
//#endregion
//#region src/components/modules/Mod03Reverb.vue
var _sfc_main$15 = {
	name: "Mod03Reverb",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			reverbType: 0,
			roomSize: .5,
			damping: .5,
			balance: .33,
			reverbTypes: [
				{
					fr: "Schroeder modèle 1",
					en: "Schroeder Model 1"
				},
				{
					fr: "Schroeder modèle 2",
					en: "Schroeder Model 2"
				},
				{
					fr: "Freeverb",
					en: "Freeverb"
				},
				{
					fr: "Réseau de délais récursifs",
					en: "Feedback Delay Network"
				},
				{
					fr: "Réverbe par convolution",
					en: "Convolution Reverb"
				}
			],
			faustNode: null,
			convNodes: null,
			dryGain: null,
			reverbOutput: null,
			irBuffer: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				reverbType: {
					fr: "Type de réverbération",
					en: "Reverb Type"
				},
				roomSize: {
					fr: "Taille de la pièce",
					en: "Room Size"
				},
				damping: {
					fr: "Atténuation hautes fréquences",
					en: "High Frequency Damping"
				},
				balance: {
					fr: "Balance original/réverbéré",
					en: "Balance dry/reverb"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.ctx;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			this.dryGain = ctx.createGain();
			this.dryGain.gain.value = 1;
			this.reverbOutput = ctx.createGain();
			this.reverbOutput.gain.value = 1;
			source.connect(this.dryGain);
			this.dryGain.connect(this.reverbOutput);
			this.reverbOutput.connect(this.engine.masterGain);
			this.loadIR();
			await this.buildEffect(source);
		},
		async loadIR() {
			try {
				const arrayBuffer = await (await fetch(new URL("" + new URL("IRMediumHallStereo-CuldImGm.wav", import.meta.url).href, "" + import.meta.url))).arrayBuffer();
				this.irBuffer = await this.ctx.decodeAudioData(arrayBuffer);
			} catch (e) {
				console.warn("Failed to load IR:", e);
			}
		},
		async buildEffect(source) {
			this.cleanupEffect();
			if (this.reverbType === 0) {
				this._paramPrefix = "/schroeder1";
				await this.createFaustReverb(source, schroeder1_default, schroeder1_meta_default, "schroeder1", "/schroeder1");
			} else if (this.reverbType === 1) {
				this._paramPrefix = "/schroeder2";
				await this.createFaustReverb(source, schroeder2_default, schroeder2_meta_default, "schroeder2", "/schroeder2");
			} else if (this.reverbType === 2) {
				this._paramPrefix = "freeverb";
				await this.buildFreeverb(source);
			} else if (this.reverbType === 3) {
				this._paramPrefix = "/fdn";
				await this.createFaustReverb(source, fdn_default, fdn_meta_default, "fdn", "/fdn");
			} else if (this.reverbType === 4) {
				this._paramPrefix = null;
				this.buildConvolution(source);
			}
		},
		async createFaustReverb(source, wasmUrl, metaUrl, name, paramPrefix) {
			const dspMeta = await (await fetch(metaUrl)).json();
			const dspModule = await WebAssembly.compileStreaming(await fetch(wasmUrl));
			this.faustNode = await new FaustMonoDspGenerator().createNode(this.ctx, name, {
				module: dspModule,
				json: JSON.stringify(dspMeta)
			});
			if (!this.faustNode) return;
			this.faustNode.setParamValue(paramPrefix + "/roomSize", this.roomSize);
			this.faustNode.setParamValue(paramPrefix + "/damping", this.damping);
			this.faustNode.setParamValue(paramPrefix + "/wet", this.balance);
			source.connect(this.faustNode);
			this.faustNode.connect(this.reverbOutput);
			this.dryGain.gain.value = 0;
		},
		async buildFreeverb(source) {
			const ctx = this.ctx;
			const dspMeta = await (await fetch(freeverb_meta_default)).json();
			const dspModule = await WebAssembly.compileStreaming(await fetch(freeverb_default));
			this.faustNode = await new FaustMonoDspGenerator().createNode(ctx, "freeverb", {
				module: dspModule,
				json: JSON.stringify(dspMeta)
			});
			if (!this.faustNode) {
				console.warn("Failed to create Faust Freeverb node");
				return;
			}
			this.setFaustParam("/Freeverb/0x00/RoomSize", this.roomSize);
			this.setFaustParam("/Freeverb/0x00/Damp", this.damping);
			this.setFaustParam("/Freeverb/Wet", this.balance);
			source.connect(this.faustNode);
			this.faustNode.connect(this.reverbOutput);
			this.dryGain.gain.value = 0;
		},
		buildConvolution(source) {
			const convolver = this.ctx.createConvolver();
			if (this.irBuffer) convolver.buffer = this.irBuffer;
			const wetGain = this.ctx.createGain();
			wetGain.gain.value = this.balance;
			this.dryGain.gain.value = 1 - this.balance;
			source.connect(convolver);
			convolver.connect(wetGain);
			wetGain.connect(this.reverbOutput);
			this.convNodes = [convolver, wetGain];
		},
		setFaustParam(address, value) {
			if (this.faustNode && this.faustNode.setParamValue) this.faustNode.setParamValue(address, value);
		},
		cleanupEffect() {
			if (this.faustNode) {
				try {
					this.faustNode.disconnect();
				} catch (e) {}
				if (this.faustNode.destroy) this.faustNode.destroy();
				this.faustNode = null;
			}
			if (this.convNodes) {
				this.convNodes.forEach((n) => {
					try {
						n.disconnect();
					} catch (e) {}
				});
				this.convNodes = null;
			}
		},
		teardown() {
			this.cleanupEffect();
			if (this.dryGain) try {
				this.dryGain.disconnect();
			} catch (e) {}
			if (this.reverbOutput) try {
				this.reverbOutput.disconnect();
			} catch (e) {}
			this.releaseSource();
		},
		async onTypeChange() {
			if (!this.audioReady) return;
			const source = this.engine.sourcePanel.output;
			try {
				source.disconnect();
			} catch (e) {}
			source.connect(this.dryGain);
			this.dryGain.connect(this.reverbOutput);
			await this.buildEffect(source);
		},
		onRoomChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			if (this._paramPrefix === "freeverb") this.setFaustParam("/Freeverb/0x00/RoomSize", val);
			else this.setFaustParam(this._paramPrefix + "/roomSize", val);
		},
		onDampChange(val) {
			if (!this.audioReady || !this.faustNode) return;
			if (this._paramPrefix === "freeverb") this.setFaustParam("/Freeverb/0x00/Damp", val);
			else this.setFaustParam(this._paramPrefix + "/damping", val);
		},
		onBalanceChange(val) {
			if (!this.audioReady) return;
			if (this.faustNode) if (this._paramPrefix === "freeverb") this.setFaustParam("/Freeverb/Wet", val);
			else this.setFaustParam(this._paramPrefix + "/wet", val);
			else if (this.convNodes) {
				const t = this.ctx.currentTime;
				this.dryGain.gain.setTargetAtTime(1 - val, t, .02);
				this.convNodes[1].gain.setTargetAtTime(val, t, .02);
			}
		}
	}
};
var _hoisted_1$15 = { class: "module-controls" };
var _hoisted_2$15 = { class: "section-head" };
var _hoisted_3$14 = { class: "section-body" };
var _hoisted_4$13 = { class: "control-group" };
var _hoisted_5$11 = { class: "control-label" };
var _hoisted_6$10 = ["value"];
function _sfc_render$15(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$15, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$15, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$14, [
			createBaseVNode("div", _hoisted_4$13, [createBaseVNode("label", _hoisted_5$11, toDisplayString($options.t("reverbType")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.reverbType = $event),
				onChange: _cache[1] || (_cache[1] = (...args) => $options.onTypeChange && $options.onTypeChange(...args))
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.reverbTypes, (r, i) => {
				return openBlock(), createElementBlock("option", {
					key: i,
					value: i
				}, toDisplayString(r[_ctx.$i18n.locale]), 9, _hoisted_6$10);
			}), 128))], 544), [[
				vModelSelect,
				$data.reverbType,
				void 0,
				{ number: true }
			]])]),
			createVNode(_component_ControlSlider, {
				label: $options.t("roomSize"),
				modelValue: $data.roomSize,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.roomSize = $event), $options.onRoomChange],
				mini: 0,
				maxi: 1
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("damping"),
				modelValue: $data.damping,
				"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.damping = $event), $options.onDampChange],
				mini: 0,
				maxi: 1
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("balance"),
				modelValue: $data.balance,
				"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $data.balance = $event), $options.onBalanceChange],
				mini: 0,
				maxi: 1
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			])
		])
	]);
}
var Mod03Reverb_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$15, [["render", _sfc_render$15]]);
//#endregion
//#region src/components/modules/Mod06Vocoder.vue
var _sfc_main$14 = {
	name: "Mod06Vocoder",
	components: {
		LabelKnob: LabelKnob_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			freq: 100,
			expansion: 1.2,
			qFactor: 20,
			slope: .5,
			stages: 24,
			volumeDb: 0,
			isPlaying: false,
			envBuffer: null,
			excBuffer: null,
			envName: "",
			excName: "",
			envSource: null,
			excSource: null,
			analysisBands: [],
			synthBands: [],
			followers: [],
			modulators: [],
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				sources: {
					fr: "Sources Sonores",
					en: "Audio Sources"
				},
				envelope: {
					fr: "Enveloppe",
					en: "Envelope"
				},
				excitation: {
					fr: "Excitation",
					en: "Excitation"
				},
				choose: {
					fr: "Choisir...",
					en: "Choose..."
				},
				play: {
					fr: "Jouer les sons",
					en: "Play sounds"
				},
				stop: {
					fr: "Arrêter",
					en: "Stop"
				},
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const source = this.engine.sourcePanel.output;
			try {
				source.disconnect(this.engine.masterGain);
			} catch (e) {}
			this.outputGain = this.ctx.createGain();
			this.outputGain.gain.value = Math.pow(10, this.volumeDb * .05) * .25;
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			this.stopPlay();
			this.cleanupBands();
			if (this.outputGain) try {
				this.outputGain.disconnect();
			} catch (e) {}
			this.releaseSource();
		},
		async loadEnvelope(e) {
			const file = e.target.files[0];
			if (!file || !this.ctx) return;
			this.envName = file.name;
			const buf = await file.arrayBuffer();
			this.envBuffer = await this.ctx.decodeAudioData(buf);
		},
		async loadExcitation(e) {
			const file = e.target.files[0];
			if (!file || !this.ctx) return;
			this.excName = file.name;
			const buf = await file.arrayBuffer();
			this.excBuffer = await this.ctx.decodeAudioData(buf);
		},
		togglePlay() {
			if (this.isPlaying) this.stopPlay();
			else this.startPlay();
		},
		startPlay() {
			if (!this.envBuffer || !this.excBuffer) return;
			this.envSource = this.ctx.createBufferSource();
			this.envSource.buffer = this.envBuffer;
			this.envSource.loop = true;
			this.excSource = this.ctx.createBufferSource();
			this.excSource.buffer = this.excBuffer;
			this.excSource.loop = true;
			this.buildBands();
			this.envSource.start();
			this.excSource.start();
			this.isPlaying = true;
		},
		stopPlay() {
			if (this._followerFrame) cancelAnimationFrame(this._followerFrame);
			if (this.envSource) try {
				this.envSource.stop();
			} catch (e) {}
			if (this.excSource) try {
				this.excSource.stop();
			} catch (e) {}
			this.envSource = null;
			this.excSource = null;
			this.cleanupBands();
			this.isPlaying = false;
		},
		cleanupBands() {
			[
				...this.analysisBands,
				...this.synthBands,
				...this.followers,
				...this.modulators
			].forEach((n) => {
				try {
					n.disconnect();
				} catch (e) {}
			});
			this.analysisBands = [];
			this.synthBands = [];
			this.followers = [];
			this.modulators = [];
		},
		buildBands() {
			this.cleanupBands();
			if (!this.envSource || !this.excSource) return;
			const numBands = Math.round(this.stages);
			for (let i = 0; i < numBands; i++) {
				const bandFreq = this.freq * Math.pow(this.expansion, i);
				if (bandFreq > this.ctx.sampleRate / 2) break;
				const aBp = this.ctx.createBiquadFilter();
				aBp.type = "bandpass";
				aBp.frequency.value = bandFreq;
				aBp.Q.value = this.qFactor;
				const sBp = this.ctx.createBiquadFilter();
				sBp.type = "bandpass";
				sBp.frequency.value = bandFreq;
				sBp.Q.value = this.qFactor;
				const modGain = this.ctx.createGain();
				modGain.gain.value = 0;
				this.envSource.connect(aBp);
				this.excSource.connect(sBp);
				sBp.connect(modGain);
				modGain.connect(this.outputGain);
				const analyser = this.ctx.createAnalyser();
				analyser.fftSize = 256;
				analyser.smoothingTimeConstant = 1 - this.slope;
				aBp.connect(analyser);
				this.analysisBands.push(aBp);
				this.synthBands.push(sBp);
				this.modulators.push(modGain);
				this.followers.push(analyser);
			}
			this.startFollowerLoop();
		},
		startFollowerLoop() {
			if (this._followerFrame) cancelAnimationFrame(this._followerFrame);
			const update = () => {
				for (let i = 0; i < this.followers.length; i++) {
					const data = new Float32Array(this.followers[i].fftSize);
					this.followers[i].getFloatTimeDomainData(data);
					let rms = 0;
					for (let j = 0; j < data.length; j++) rms += data[j] * data[j];
					rms = Math.sqrt(rms / data.length);
					this.modulators[i].gain.setTargetAtTime(rms * 20, this.ctx.currentTime, .01);
				}
				this._followerFrame = requestAnimationFrame(update);
			};
			update();
		},
		updateVocoder() {
			for (let i = 0; i < this.analysisBands.length; i++) {
				const f = this.freq * Math.pow(this.expansion, i);
				this.analysisBands[i].frequency.value = f;
				this.analysisBands[i].Q.value = this.qFactor;
				this.synthBands[i].frequency.value = f;
				this.synthBands[i].Q.value = this.qFactor;
				if (this.followers[i]) this.followers[i].smoothingTimeConstant = 1 - this.slope;
			}
		},
		rebuildVocoder() {
			if (!this.isPlaying) return;
			this.buildBands();
		},
		updateGain() {
			if (this.outputGain) this.outputGain.gain.setTargetAtTime(Math.pow(10, this.volumeDb * .05) * .25, this.ctx.currentTime, .05);
		}
	}
};
var _hoisted_1$14 = { class: "module-controls" };
var _hoisted_2$14 = { class: "section-head" };
var _hoisted_3$13 = { class: "section-body" };
var _hoisted_4$12 = { class: "vocoder-source" };
var _hoisted_5$10 = { class: "vocoder-source__label" };
var _hoisted_6$9 = { class: "toggle-btn vocoder-source__btn" };
var _hoisted_7$8 = { class: "vocoder-source" };
var _hoisted_8$8 = { class: "vocoder-source__label" };
var _hoisted_9$6 = { class: "toggle-btn vocoder-source__btn" };
var _hoisted_10$4 = ["disabled"];
var _hoisted_11$4 = { class: "section-head" };
var _hoisted_12$3 = { class: "section-body" };
var _hoisted_13$3 = { class: "vocoder-knobs" };
function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_LabelKnob = resolveComponent("LabelKnob");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$14, [
		createBaseVNode("div", _hoisted_2$14, toDisplayString($options.t("sources")), 1),
		createBaseVNode("div", _hoisted_3$13, [
			createBaseVNode("div", _hoisted_4$12, [createBaseVNode("label", _hoisted_5$10, toDisplayString($options.t("envelope")), 1), createBaseVNode("label", _hoisted_6$9, [createTextVNode(toDisplayString($data.envName || $options.t("choose")) + " ", 1), createBaseVNode("input", {
				type: "file",
				accept: "audio/*",
				onChange: _cache[0] || (_cache[0] = (...args) => $options.loadEnvelope && $options.loadEnvelope(...args)),
				hidden: ""
			}, null, 32)])]),
			createBaseVNode("div", _hoisted_7$8, [createBaseVNode("label", _hoisted_8$8, toDisplayString($options.t("excitation")), 1), createBaseVNode("label", _hoisted_9$6, [createTextVNode(toDisplayString($data.excName || $options.t("choose")) + " ", 1), createBaseVNode("input", {
				type: "file",
				accept: "audio/*",
				onChange: _cache[1] || (_cache[1] = (...args) => $options.loadExcitation && $options.loadExcitation(...args)),
				hidden: ""
			}, null, 32)])]),
			createBaseVNode("button", {
				class: normalizeClass(["toggle-btn", { active: $data.isPlaying }]),
				onClick: _cache[2] || (_cache[2] = (...args) => $options.togglePlay && $options.togglePlay(...args)),
				disabled: !$data.envBuffer || !$data.excBuffer
			}, toDisplayString($data.isPlaying ? $options.t("stop") : $options.t("play")), 11, _hoisted_10$4)
		]),
		createBaseVNode("div", _hoisted_11$4, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_12$3, [createBaseVNode("div", _hoisted_13$3, [
			createVNode(_component_LabelKnob, {
				label: "Freq",
				modelValue: $data.freq,
				"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.freq = $event), $options.updateVocoder],
				mini: 40,
				maxi: 250
			}, null, 8, ["modelValue", "onUpdate:modelValue"]),
			createVNode(_component_LabelKnob, {
				label: "Exp.",
				modelValue: $data.expansion,
				"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $data.expansion = $event), $options.updateVocoder],
				mini: .5,
				maxi: 2
			}, null, 8, ["modelValue", "onUpdate:modelValue"]),
			createVNode(_component_LabelKnob, {
				label: "Q",
				modelValue: $data.qFactor,
				"onUpdate:modelValue": [_cache[5] || (_cache[5] = ($event) => $data.qFactor = $event), $options.updateVocoder],
				mini: 1,
				maxi: 100
			}, null, 8, ["modelValue", "onUpdate:modelValue"]),
			createVNode(_component_LabelKnob, {
				label: "Pente",
				modelValue: $data.slope,
				"onUpdate:modelValue": [_cache[6] || (_cache[6] = ($event) => $data.slope = $event), $options.updateVocoder],
				mini: 0,
				maxi: 1
			}, null, 8, ["modelValue", "onUpdate:modelValue"]),
			createVNode(_component_LabelKnob, {
				label: "Nbrs",
				modelValue: $data.stages,
				"onUpdate:modelValue": [_cache[7] || (_cache[7] = ($event) => $data.stages = $event), $options.rebuildVocoder],
				mini: 2,
				maxi: 64,
				integer: true
			}, null, 8, ["modelValue", "onUpdate:modelValue"])
		]), createVNode(_component_ControlSlider, {
			label: "Volume (dB)",
			modelValue: $data.volumeDb,
			"onUpdate:modelValue": [_cache[8] || (_cache[8] = ($event) => $data.volumeDb = $event), $options.updateGain],
			mini: -60,
			maxi: 18
		}, null, 8, ["modelValue", "onUpdate:modelValue"])])
	]);
}
var Mod06Vocoder_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$14, [["render", _sfc_render$14]]);
//#endregion
//#region src/components/controls/DrawableMultiSlider.vue
var _sfc_main$13 = {
	name: "DrawableMultiSlider",
	props: {
		modelValue: {
			type: Array,
			default: () => new Array(256).fill(0)
		},
		height: {
			type: Number,
			default: 100
		},
		minVal: {
			type: Number,
			default: 0
		},
		maxVal: {
			type: Number,
			default: 1
		},
		color: {
			type: String,
			default: "#00CC66"
		}
	},
	emits: ["update:modelValue"],
	data() {
		return {
			drawing: false,
			lastX: -1
		};
	},
	watch: { modelValue() {
		this.draw();
	} },
	mounted() {
		this.resizeCanvas();
		window.addEventListener("resize", this.resizeCanvas);
		this.draw();
	},
	beforeUnmount() {
		window.removeEventListener("resize", this.resizeCanvas);
	},
	methods: {
		resizeCanvas() {
			const canvas = this.$refs.canvas;
			if (!canvas) return;
			canvas.width = canvas.parentElement.getBoundingClientRect().width;
			this.draw();
		},
		getBarIndex(e) {
			const canvas = this.$refs.canvas;
			const rect = canvas.getBoundingClientRect();
			const x = e.clientX - rect.left;
			return Math.floor(x / canvas.width * this.modelValue.length);
		},
		getValue(e) {
			const canvas = this.$refs.canvas;
			const rect = canvas.getBoundingClientRect();
			const t = 1 - (e.clientY - rect.top) / canvas.height;
			return this.minVal + t * (this.maxVal - this.minVal);
		},
		setBar(e) {
			const idx = this.getBarIndex(e);
			const val = Math.max(this.minVal, Math.min(this.maxVal, this.getValue(e)));
			if (idx < 0 || idx >= this.modelValue.length) return;
			const newValues = [...this.modelValue];
			if (this.lastX >= 0 && this.lastX !== idx) {
				const start = Math.min(this.lastX, idx);
				const end = Math.max(this.lastX, idx);
				const startVal = newValues[this.lastX];
				for (let i = start; i <= end; i++) {
					const t = (i - start) / (end - start);
					newValues[i] = startVal + (val - startVal) * t;
				}
			} else newValues[idx] = val;
			this.lastX = idx;
			this.$emit("update:modelValue", newValues);
		},
		onMouseDown(e) {
			this.drawing = true;
			this.lastX = -1;
			this.setBar(e);
		},
		onMouseMove(e) {
			if (this.drawing) this.setBar(e);
		},
		onMouseUp() {
			this.drawing = false;
			this.lastX = -1;
		},
		draw() {
			const canvas = this.$refs.canvas;
			if (!canvas) return;
			const ctx = canvas.getContext("2d");
			const w = canvas.width;
			const h = canvas.height;
			const values = this.modelValue;
			const len = values.length;
			const barW = w / len;
			const range = this.maxVal - this.minVal;
			ctx.fillStyle = "#0a0a0e";
			ctx.fillRect(0, 0, w, h);
			ctx.fillStyle = this.color;
			for (let i = 0; i < len; i++) {
				const barH = (values[i] - this.minVal) / range * h;
				ctx.fillRect(i * barW, h - barH, Math.max(barW - .5, 1), barH);
			}
		}
	}
};
var _hoisted_1$13 = { class: "multi-slider" };
var _hoisted_2$13 = ["height"];
function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$13, [createBaseVNode("canvas", {
		ref: "canvas",
		height: $props.height,
		class: "multi-slider__canvas",
		onMousedown: _cache[0] || (_cache[0] = (...args) => $options.onMouseDown && $options.onMouseDown(...args)),
		onMousemove: _cache[1] || (_cache[1] = (...args) => $options.onMouseMove && $options.onMouseMove(...args)),
		onMouseup: _cache[2] || (_cache[2] = (...args) => $options.onMouseUp && $options.onMouseUp(...args)),
		onMouseleave: _cache[3] || (_cache[3] = (...args) => $options.onMouseUp && $options.onMouseUp(...args))
	}, null, 40, _hoisted_2$13)]);
}
var DrawableMultiSlider_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$13, [["render", _sfc_render$13]]);
//#endregion
//#region src/components/modules/Mod06SpectralFilter.vue
var FFT_SIZES$3 = [
	64,
	128,
	256,
	512,
	1024,
	2048,
	4096,
	8192
];
var OVERLAPS$3 = [
	2,
	4,
	8,
	16,
	32
];
var _sfc_main$12 = {
	name: "Mod06SpectralFilter",
	components: {
		SourcePanel: SourcePanel_default,
		DrawableMultiSlider: DrawableMultiSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			fftSizeIdx: 4,
			overlapIdx: 1,
			fftSizes: FFT_SIZES$3,
			overlaps: OVERLAPS$3,
			filterValues: new Array(256).fill(0),
			workletNode: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				fftSize: {
					fr: "Taille FFT",
					en: "FFT Size"
				},
				overlaps: {
					fr: "Chevauchements",
					en: "Overlaps"
				},
				drawFilter: {
					fr: "Dessiner le filtre (256 points)",
					en: "Draw filter (256 points)"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			await ctx.audioWorklet.addModule(new URL("" + new URL("phase-vocoder-RDqbNA3b.js", import.meta.url).href, "" + import.meta.url));
			this.workletNode = new AudioWorkletNode(ctx, "phase-vocoder", { processorOptions: { fftSize: FFT_SIZES$3[this.fftSizeIdx] } });
			this.workletNode.port.postMessage({
				mode: "filter",
				filterGains: this.filterValues
			});
			source.connect(this.workletNode);
			this.workletNode.connect(this.engine.masterGain);
		},
		teardown() {
			if (this.workletNode) try {
				this.workletNode.disconnect();
			} catch (e) {}
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		async onFftChange() {
			if (!this.audioReady) return;
			if (this.workletNode) {
				try {
					this.workletNode.disconnect();
				} catch (e) {}
				if (this.engine.sourcePanel) try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
			}
			const ctx = this.engine.context;
			this.workletNode = new AudioWorkletNode(ctx, "phase-vocoder", { processorOptions: { fftSize: FFT_SIZES$3[this.fftSizeIdx] } });
			this.workletNode.port.postMessage({
				mode: "filter",
				filterGains: this.filterValues
			});
			this.engine.sourcePanel.output.connect(this.workletNode);
			this.workletNode.connect(this.engine.masterGain);
		},
		onFilterChange(values) {
			if (this.workletNode) this.workletNode.port.postMessage({ filterGains: values });
		}
	}
};
var _hoisted_1$12 = { class: "module-controls" };
var _hoisted_2$12 = { class: "section-head" };
var _hoisted_3$12 = { class: "section-body" };
var _hoisted_4$11 = { class: "control-row" };
var _hoisted_5$9 = { class: "control-group" };
var _hoisted_6$8 = { class: "control-label" };
var _hoisted_7$7 = ["value"];
var _hoisted_8$7 = { class: "control-group" };
var _hoisted_9$5 = { class: "control-label" };
var _hoisted_10$3 = ["value"];
var _hoisted_11$3 = { class: "control-label" };
function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_DrawableMultiSlider = resolveComponent("DrawableMultiSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$12, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$12, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$12, [
			createBaseVNode("div", _hoisted_4$11, [createBaseVNode("div", _hoisted_5$9, [createBaseVNode("label", _hoisted_6$8, toDisplayString($options.t("fftSize")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.fftSizeIdx = $event),
				onChange: _cache[1] || (_cache[1] = (...args) => $options.onFftChange && $options.onFftChange(...args))
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.fftSizes, (s, i) => {
				return openBlock(), createElementBlock("option", {
					key: i,
					value: i
				}, toDisplayString(s), 9, _hoisted_7$7);
			}), 128))], 544), [[
				vModelSelect,
				$data.fftSizeIdx,
				void 0,
				{ number: true }
			]])]), createBaseVNode("div", _hoisted_8$7, [createBaseVNode("label", _hoisted_9$5, toDisplayString($options.t("overlaps")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.overlapIdx = $event),
				onChange: _cache[3] || (_cache[3] = (...args) => $options.onFftChange && $options.onFftChange(...args))
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.overlaps, (o, i) => {
				return openBlock(), createElementBlock("option", {
					key: i,
					value: i
				}, toDisplayString(o), 9, _hoisted_10$3);
			}), 128))], 544), [[
				vModelSelect,
				$data.overlapIdx,
				void 0,
				{ number: true }
			]])])]),
			createBaseVNode("label", _hoisted_11$3, toDisplayString($options.t("drawFilter")), 1),
			createVNode(_component_DrawableMultiSlider, {
				modelValue: $data.filterValues,
				"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $data.filterValues = $event), $options.onFilterChange],
				height: 120
			}, null, 8, ["modelValue", "onUpdate:modelValue"])
		])
	]);
}
var Mod06SpectralFilter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$12, [["render", _sfc_render$12]]);
//#endregion
//#region src/components/modules/Mod06CrossSynth.vue
var FFT_SIZES$2 = [
	64,
	128,
	256,
	512,
	1024,
	2048,
	4096,
	8192
];
var OVERLAPS$2 = [
	2,
	4,
	8,
	16,
	32
];
var _sfc_main$11 = {
	name: "Mod06CrossSynth",
	components: { ControlSlider: ControlSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			fftSizeIdx: 4,
			overlapIdx: 1,
			fftSizes: FFT_SIZES$2,
			overlaps: OVERLAPS$2,
			volumeDb: 0,
			isPlaying: false,
			buffers: [null, null],
			sources: [null, null],
			convolverNode: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				sources: {
					fr: "Sources Sonores",
					en: "Audio Sources"
				},
				envelope: {
					fr: "Enveloppe",
					en: "Envelope"
				},
				excitation: {
					fr: "Excitation",
					en: "Excitation"
				},
				play: {
					fr: "Jouer les sons",
					en: "Play sounds"
				},
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				fftSize: {
					fr: "Taille FFT",
					en: "FFT Size"
				},
				overlaps: {
					fr: "Chevauchements",
					en: "Overlaps"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			this.outputGain = this.engine.context.createGain();
			this.outputGain.gain.value = Math.pow(10, this.volumeDb * .05);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			this.stopPlay();
			if (this.convolverNode) try {
				this.convolverNode.disconnect();
			} catch (e) {}
			if (this.outputGain) try {
				this.outputGain.disconnect();
			} catch (e) {}
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		async loadFile(idx, e) {
			const file = e.target.files[0];
			if (!file) return;
			const buf = await file.arrayBuffer();
			this.buffers[idx] = await this.engine.context.decodeAudioData(buf);
		},
		togglePlay() {
			if (this.isPlaying) this.stopPlay();
			else this.startPlay();
		},
		startPlay() {
			if (!this.buffers[0] || !this.buffers[1]) return;
			const ctx = this.engine.context;
			this.convolverNode = ctx.createConvolver();
			this.convolverNode.normalize = false;
			const shorter = this.buffers[0].duration < this.buffers[1].duration ? 0 : 1;
			const longer = 1 - shorter;
			this.convolverNode.buffer = this.buffers[shorter];
			this.sources[longer] = ctx.createBufferSource();
			this.sources[longer].buffer = this.buffers[longer];
			this.sources[longer].loop = true;
			this.sources[longer].connect(this.convolverNode);
			this.convolverNode.connect(this.outputGain);
			this.sources[longer].start();
			this.isPlaying = true;
		},
		stopPlay() {
			this.sources.forEach((s, i) => {
				if (s) {
					try {
						s.stop();
					} catch (e) {}
					try {
						s.disconnect();
					} catch (e) {}
				}
				this.sources[i] = null;
			});
			if (this.convolverNode) {
				try {
					this.convolverNode.disconnect();
				} catch (e) {}
				this.convolverNode = null;
			}
			this.isPlaying = false;
		},
		updateGain() {
			if (this.outputGain) this.outputGain.gain.setTargetAtTime(Math.pow(10, this.volumeDb * .05), this.engine.context.currentTime, .05);
		}
	}
};
var _hoisted_1$11 = { class: "module-controls" };
var _hoisted_2$11 = { class: "section-head" };
var _hoisted_3$11 = { class: "section-body" };
var _hoisted_4$10 = { class: "control-row" };
var _hoisted_5$8 = { class: "toggle-btn file-source__load" };
var _hoisted_6$7 = { class: "toggle-btn file-source__load" };
var _hoisted_7$6 = { class: "section-head" };
var _hoisted_8$6 = { class: "section-body" };
var _hoisted_9$4 = { class: "control-row" };
var _hoisted_10$2 = { class: "control-group" };
var _hoisted_11$2 = { class: "control-label" };
var _hoisted_12$2 = ["value"];
var _hoisted_13$2 = { class: "control-group" };
var _hoisted_14$2 = { class: "control-label" };
var _hoisted_15$2 = ["value"];
function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$11, [
		createBaseVNode("div", _hoisted_2$11, toDisplayString($options.t("sources")), 1),
		createBaseVNode("div", _hoisted_3$11, [createBaseVNode("div", _hoisted_4$10, [createBaseVNode("label", _hoisted_5$8, [createTextVNode(toDisplayString($options.t("envelope")) + " ", 1), createBaseVNode("input", {
			type: "file",
			accept: "audio/*",
			onChange: _cache[0] || (_cache[0] = ($event) => $options.loadFile(0, $event)),
			hidden: ""
		}, null, 32)]), createBaseVNode("label", _hoisted_6$7, [createTextVNode(toDisplayString($options.t("excitation")) + " ", 1), createBaseVNode("input", {
			type: "file",
			accept: "audio/*",
			onChange: _cache[1] || (_cache[1] = ($event) => $options.loadFile(1, $event)),
			hidden: ""
		}, null, 32)])]), createBaseVNode("button", {
			class: normalizeClass(["toggle-btn", { active: $data.isPlaying }]),
			onClick: _cache[2] || (_cache[2] = (...args) => $options.togglePlay && $options.togglePlay(...args))
		}, toDisplayString($options.t("play")), 3)]),
		createBaseVNode("div", _hoisted_7$6, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_8$6, [createBaseVNode("div", _hoisted_9$4, [createBaseVNode("div", _hoisted_10$2, [createBaseVNode("label", _hoisted_11$2, toDisplayString($options.t("fftSize")), 1), withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.fftSizeIdx = $event) }, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.fftSizes, (s, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString(s), 9, _hoisted_12$2);
		}), 128))], 512), [[
			vModelSelect,
			$data.fftSizeIdx,
			void 0,
			{ number: true }
		]])]), createBaseVNode("div", _hoisted_13$2, [createBaseVNode("label", _hoisted_14$2, toDisplayString($options.t("overlaps")), 1), withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.overlapIdx = $event) }, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.overlaps, (o, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString(o), 9, _hoisted_15$2);
		}), 128))], 512), [[
			vModelSelect,
			$data.overlapIdx,
			void 0,
			{ number: true }
		]])])]), createVNode(_component_ControlSlider, {
			label: "Volume (dB)",
			modelValue: $data.volumeDb,
			"onUpdate:modelValue": [_cache[5] || (_cache[5] = ($event) => $data.volumeDb = $event), $options.updateGain],
			mini: -60,
			maxi: 18
		}, null, 8, ["modelValue", "onUpdate:modelValue"])])
	]);
}
var Mod06CrossSynth_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$11, [["render", _sfc_render$11]]);
//#endregion
//#region src/components/modules/Mod06SpectralPlayback.vue
var FFT_SIZES$1 = [
	64,
	128,
	256,
	512,
	1024,
	2048,
	4096,
	8192
];
var OVERLAPS$1 = [
	2,
	4,
	8,
	16,
	32
];
var _sfc_main$10 = {
	name: "Mod06SpectralPlayback",
	components: { ControlSlider: ControlSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			fftSizeIdx: 4,
			overlapIdx: 1,
			fftSizes: FFT_SIZES$1,
			overlaps: OVERLAPS$1,
			speed: .5,
			pitch: 1,
			isPlaying: false,
			fileName: "",
			fileBuffer: null,
			bufferSource: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				source: {
					fr: "Source Sonore",
					en: "Audio Source"
				},
				loadFile: {
					fr: "Fichier sonore",
					en: "Sound File"
				},
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				fftSize: {
					fr: "Taille FFT",
					en: "FFT Size"
				},
				overlaps: {
					fr: "Chevauchements",
					en: "Overlaps"
				},
				recordPlay: {
					fr: "Enregistrer et jouer...",
					en: "Record and play..."
				},
				speed: {
					fr: "Vitesse de lecture",
					en: "Playback Speed"
				},
				pitch: {
					fr: "Transposition",
					en: "Transposition"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			this.outputGain = this.engine.context.createGain();
			this.outputGain.gain.value = 1;
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			this.stopPlayback();
			if (this.outputGain) try {
				this.outputGain.disconnect();
			} catch (e) {}
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		async onLoadFile(e) {
			const file = e.target.files[0];
			if (!file) return;
			this.fileName = file.name;
			const buf = await file.arrayBuffer();
			this.fileBuffer = await this.engine.context.decodeAudioData(buf);
		},
		togglePlay() {
			if (this.isPlaying) this.stopPlayback();
			else this.startPlayback();
		},
		startPlayback() {
			if (!this.fileBuffer) return;
			this.bufferSource = this.engine.context.createBufferSource();
			this.bufferSource.buffer = this.fileBuffer;
			this.bufferSource.loop = true;
			this.bufferSource.playbackRate.value = Math.abs(this.speed) * this.pitch;
			this.bufferSource.connect(this.outputGain);
			this.bufferSource.start();
			this.isPlaying = true;
		},
		stopPlayback() {
			if (this.bufferSource) {
				try {
					this.bufferSource.stop();
				} catch (e) {}
				try {
					this.bufferSource.disconnect();
				} catch (e) {}
				this.bufferSource = null;
			}
			this.isPlaying = false;
		},
		onSpeedChange() {
			if (this.bufferSource) this.bufferSource.playbackRate.setTargetAtTime(Math.abs(this.speed) * this.pitch, this.engine.context.currentTime, .05);
		},
		onPitchChange() {
			this.onSpeedChange();
		}
	}
};
var _hoisted_1$10 = { class: "module-controls" };
var _hoisted_2$10 = { class: "section-head" };
var _hoisted_3$10 = { class: "section-body" };
var _hoisted_4$9 = {
	class: "toggle-btn file-source__load",
	style: {
		"display": "block",
		"text-align": "center"
	}
};
var _hoisted_5$7 = {
	key: 0,
	class: "file-source__name"
};
var _hoisted_6$6 = { class: "section-head" };
var _hoisted_7$5 = { class: "section-body" };
var _hoisted_8$5 = { class: "control-row" };
var _hoisted_9$3 = { class: "control-group" };
var _hoisted_10$1 = { class: "control-label" };
var _hoisted_11$1 = ["value"];
var _hoisted_12$1 = { class: "control-group" };
var _hoisted_13$1 = { class: "control-label" };
var _hoisted_14$1 = ["value"];
var _hoisted_15$1 = ["disabled"];
function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$10, [
		createBaseVNode("div", _hoisted_2$10, toDisplayString($options.t("source")), 1),
		createBaseVNode("div", _hoisted_3$10, [createBaseVNode("label", _hoisted_4$9, [createTextVNode(toDisplayString($options.t("loadFile")) + " ", 1), createBaseVNode("input", {
			type: "file",
			accept: "audio/*",
			onChange: _cache[0] || (_cache[0] = (...args) => $options.onLoadFile && $options.onLoadFile(...args)),
			hidden: ""
		}, null, 32)]), $data.fileName ? (openBlock(), createElementBlock("div", _hoisted_5$7, toDisplayString($data.fileName), 1)) : createCommentVNode("", true)]),
		createBaseVNode("div", _hoisted_6$6, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_7$5, [
			createBaseVNode("div", _hoisted_8$5, [createBaseVNode("div", _hoisted_9$3, [createBaseVNode("label", _hoisted_10$1, toDisplayString($options.t("fftSize")), 1), withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.fftSizeIdx = $event) }, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.fftSizes, (s, i) => {
				return openBlock(), createElementBlock("option", {
					key: i,
					value: i
				}, toDisplayString(s), 9, _hoisted_11$1);
			}), 128))], 512), [[
				vModelSelect,
				$data.fftSizeIdx,
				void 0,
				{ number: true }
			]])]), createBaseVNode("div", _hoisted_12$1, [createBaseVNode("label", _hoisted_13$1, toDisplayString($options.t("overlaps")), 1), withDirectives(createBaseVNode("select", { "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.overlapIdx = $event) }, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.overlaps, (o, i) => {
				return openBlock(), createElementBlock("option", {
					key: i,
					value: i
				}, toDisplayString(o), 9, _hoisted_14$1);
			}), 128))], 512), [[
				vModelSelect,
				$data.overlapIdx,
				void 0,
				{ number: true }
			]])])]),
			createBaseVNode("button", {
				class: normalizeClass(["toggle-btn", { active: $data.isPlaying }]),
				onClick: _cache[3] || (_cache[3] = (...args) => $options.togglePlay && $options.togglePlay(...args)),
				disabled: !$data.fileBuffer,
				style: {
					"width": "100%",
					"margin": "6px 0"
				}
			}, toDisplayString($options.t("recordPlay")), 11, _hoisted_15$1),
			createVNode(_component_ControlSlider, {
				label: $options.t("speed"),
				modelValue: $data.speed,
				"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $data.speed = $event), $options.onSpeedChange],
				mini: -2,
				maxi: 2
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("pitch"),
				modelValue: $data.pitch,
				"onUpdate:modelValue": [_cache[5] || (_cache[5] = ($event) => $data.pitch = $event), $options.onPitchChange],
				mini: .1,
				maxi: 2
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			])
		])
	]);
}
var Mod06SpectralPlayback_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$10, [["render", _sfc_render$10]]);
//#endregion
//#region src/components/modules/Mod06SpectralDelay.vue
var FFT_SIZES = [
	64,
	128,
	256,
	512,
	1024,
	2048,
	4096,
	8192
];
var OVERLAPS = [
	2,
	4,
	8,
	16,
	32
];
var _sfc_main$9 = {
	name: "Mod06SpectralDelay",
	components: { DrawableMultiSlider: DrawableMultiSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			fftSizeIdx: 4,
			overlapIdx: 1,
			fftSizes: FFT_SIZES,
			overlaps: OVERLAPS,
			delayValues: new Array(256).fill(0),
			feedbackValues: new Array(256).fill(0),
			isPlaying: false,
			fileName: "",
			fileBuffer: null,
			fileSource: null,
			workletNode: null
		};
	},
	methods: {
		t(key) {
			return ({
				source: {
					fr: "Source Sonore",
					en: "Audio Source"
				},
				loadFile: {
					fr: "Choisir un son",
					en: "Choose a sound"
				},
				play: {
					fr: "Jouer",
					en: "Play"
				},
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				fftSize: {
					fr: "Taille FFT",
					en: "FFT Size"
				},
				overlaps: {
					fr: "Chevauchements",
					en: "Overlaps"
				},
				delayBands: {
					fr: "Délai par tranche de fréquence",
					en: "Per-band Delay"
				},
				feedbackBands: {
					fr: "Récursion par tranche de fréq.",
					en: "Per-band Feedback"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.engine.context;
			await ctx.audioWorklet.addModule(new URL("" + new URL("phase-vocoder-RDqbNA3b.js", import.meta.url).href, "" + import.meta.url));
			this.workletNode = new AudioWorkletNode(ctx, "phase-vocoder", { processorOptions: { fftSize: FFT_SIZES[this.fftSizeIdx] } });
			this.workletNode.port.postMessage({
				mode: "delay",
				delayTimes: this.delayValues,
				delayFeedback: this.feedbackValues
			});
			this.workletNode.connect(this.engine.masterGain);
		},
		teardown() {
			this.stopPlay();
			if (this.workletNode) try {
				this.workletNode.disconnect();
			} catch (e) {}
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		async onLoadFile(e) {
			const file = e.target.files[0];
			if (!file) return;
			this.fileName = file.name;
			const buf = await file.arrayBuffer();
			this.fileBuffer = await this.engine.context.decodeAudioData(buf);
		},
		togglePlay() {
			if (this.isPlaying) this.stopPlay();
			else this.startPlay();
		},
		startPlay() {
			if (!this.fileBuffer || !this.workletNode) return;
			this.fileSource = this.engine.context.createBufferSource();
			this.fileSource.buffer = this.fileBuffer;
			this.fileSource.loop = true;
			this.fileSource.connect(this.workletNode);
			this.fileSource.start();
			this.isPlaying = true;
		},
		stopPlay() {
			if (this.fileSource) {
				try {
					this.fileSource.stop();
				} catch (e) {}
				try {
					this.fileSource.disconnect();
				} catch (e) {}
				this.fileSource = null;
			}
			this.isPlaying = false;
		},
		async onFftChange() {
			if (!this.audioReady) return;
			const wasPlaying = this.isPlaying;
			this.stopPlay();
			if (this.workletNode) try {
				this.workletNode.disconnect();
			} catch (e) {}
			const ctx = this.engine.context;
			this.workletNode = new AudioWorkletNode(ctx, "phase-vocoder", { processorOptions: { fftSize: FFT_SIZES[this.fftSizeIdx] } });
			this.workletNode.port.postMessage({
				mode: "delay",
				delayTimes: this.delayValues,
				delayFeedback: this.feedbackValues
			});
			this.workletNode.connect(this.engine.masterGain);
			if (wasPlaying) this.startPlay();
		},
		onDelayChange(values) {
			if (this.workletNode) this.workletNode.port.postMessage({ delayTimes: values });
		},
		onFeedbackChange(values) {
			if (this.workletNode) this.workletNode.port.postMessage({ delayFeedback: values });
		}
	}
};
var _hoisted_1$9 = { class: "module-controls" };
var _hoisted_2$9 = { class: "section-head" };
var _hoisted_3$9 = { class: "section-body" };
var _hoisted_4$8 = { class: "control-row" };
var _hoisted_5$6 = { class: "toggle-btn file-source__load" };
var _hoisted_6$5 = {
	key: 0,
	class: "file-source__name"
};
var _hoisted_7$4 = { class: "section-head" };
var _hoisted_8$4 = { class: "section-body" };
var _hoisted_9$2 = { class: "control-row" };
var _hoisted_10 = { class: "control-group" };
var _hoisted_11 = { class: "control-label" };
var _hoisted_12 = ["value"];
var _hoisted_13 = { class: "control-group" };
var _hoisted_14 = { class: "control-label" };
var _hoisted_15 = ["value"];
var _hoisted_16 = { class: "control-label" };
var _hoisted_17 = { class: "control-label" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_DrawableMultiSlider = resolveComponent("DrawableMultiSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$9, [
		createBaseVNode("div", _hoisted_2$9, toDisplayString($options.t("source")), 1),
		createBaseVNode("div", _hoisted_3$9, [createBaseVNode("div", _hoisted_4$8, [createBaseVNode("label", _hoisted_5$6, [createTextVNode(toDisplayString($options.t("loadFile")) + " ", 1), createBaseVNode("input", {
			type: "file",
			accept: "audio/*",
			onChange: _cache[0] || (_cache[0] = (...args) => $options.onLoadFile && $options.onLoadFile(...args)),
			hidden: ""
		}, null, 32)]), createBaseVNode("button", {
			class: normalizeClass(["toggle-btn", { active: $data.isPlaying }]),
			onClick: _cache[1] || (_cache[1] = (...args) => $options.togglePlay && $options.togglePlay(...args))
		}, toDisplayString($options.t("play")), 3)]), $data.fileName ? (openBlock(), createElementBlock("div", _hoisted_6$5, toDisplayString($data.fileName), 1)) : createCommentVNode("", true)]),
		createBaseVNode("div", _hoisted_7$4, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_8$4, [
			createBaseVNode("div", _hoisted_9$2, [createBaseVNode("div", _hoisted_10, [createBaseVNode("label", _hoisted_11, toDisplayString($options.t("fftSize")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.fftSizeIdx = $event),
				onChange: _cache[3] || (_cache[3] = (...args) => $options.onFftChange && $options.onFftChange(...args))
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.fftSizes, (s, i) => {
				return openBlock(), createElementBlock("option", {
					key: i,
					value: i
				}, toDisplayString(s), 9, _hoisted_12);
			}), 128))], 544), [[
				vModelSelect,
				$data.fftSizeIdx,
				void 0,
				{ number: true }
			]])]), createBaseVNode("div", _hoisted_13, [createBaseVNode("label", _hoisted_14, toDisplayString($options.t("overlaps")), 1), withDirectives(createBaseVNode("select", {
				"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.overlapIdx = $event),
				onChange: _cache[5] || (_cache[5] = (...args) => $options.onFftChange && $options.onFftChange(...args))
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.overlaps, (o, i) => {
				return openBlock(), createElementBlock("option", {
					key: i,
					value: i
				}, toDisplayString(o), 9, _hoisted_15);
			}), 128))], 544), [[
				vModelSelect,
				$data.overlapIdx,
				void 0,
				{ number: true }
			]])])]),
			createBaseVNode("label", _hoisted_16, toDisplayString($options.t("delayBands")), 1),
			createVNode(_component_DrawableMultiSlider, {
				modelValue: $data.delayValues,
				"onUpdate:modelValue": [_cache[6] || (_cache[6] = ($event) => $data.delayValues = $event), $options.onDelayChange],
				height: 100,
				maxVal: 200,
				color: "#4488CC"
			}, null, 8, ["modelValue", "onUpdate:modelValue"]),
			createBaseVNode("label", _hoisted_17, toDisplayString($options.t("feedbackBands")), 1),
			createVNode(_component_DrawableMultiSlider, {
				modelValue: $data.feedbackValues,
				"onUpdate:modelValue": [_cache[7] || (_cache[7] = ($event) => $data.feedbackValues = $event), $options.onFeedbackChange],
				height: 100,
				color: "#CC8844"
			}, null, 8, ["modelValue", "onUpdate:modelValue"])
		])
	]);
}
var Mod06SpectralDelay_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$9, [["render", _sfc_render$9]]);
//#endregion
//#region src/components/modules/Mod08AddSynthFix.vue
var _sfc_main$8 = {
	name: "Mod08AddSynthFix",
	components: { ControlSlider: ControlSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			waveType: 0,
			frequency: 172,
			harmonics: 10,
			osc: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				waveform: {
					fr: "Forme d'onde",
					en: "Waveform"
				},
				sawtooth: {
					fr: "Dent de scie",
					en: "Sawtooth"
				},
				square: {
					fr: "Onde carrée",
					en: "Square Wave"
				},
				triangle: {
					fr: "Onde triangulaire",
					en: "Triangle Wave"
				},
				frequency: {
					fr: "Fréquence fondamentale",
					en: "Fundamental Frequency"
				},
				harmonics: {
					fr: "Nombre d'harmoniques",
					en: "Number of Harmonics"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.disconnect(this.engine.masterGain);
			} catch (e) {}
			this.osc = ctx.createOscillator();
			this.osc.frequency.value = this.frequency;
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = .707;
			this.osc.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
			this.updateWaveform();
			this.osc.start();
		},
		teardown() {
			if (this.osc) try {
				this.osc.stop();
			} catch (e) {}
			[this.osc, this.outputGain].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		buildPeriodicWave() {
			const n = Math.round(this.harmonics);
			const real = new Float32Array(n + 1);
			const imag = new Float32Array(n + 1);
			for (let h = 1; h <= n; h++) if (this.waveType === 0) imag[h] = 1 / h;
			else if (this.waveType === 1) imag[h] = h % 2 === 1 ? 1 / h : 0;
			else if (h % 2 === 1) imag[h] = ((h - 1) / 2 % 2 === 0 ? 1 : -1) / (h * h);
			return this.engine.context.createPeriodicWave(real, imag, { disableNormalization: false });
		},
		updateWaveform() {
			if (!this.osc) return;
			const wave = this.buildPeriodicWave();
			this.osc.setPeriodicWave(wave);
		},
		onFreqChange(val) {
			if (this.osc) this.osc.frequency.setTargetAtTime(val, this.engine.context.currentTime, .05);
		}
	}
};
var _hoisted_1$8 = { class: "module-controls" };
var _hoisted_2$8 = { class: "section-head" };
var _hoisted_3$8 = { class: "section-body" };
var _hoisted_4$7 = { class: "control-group" };
var _hoisted_5$5 = { class: "control-label" };
var _hoisted_6$4 = { value: 0 };
var _hoisted_7$3 = { value: 1 };
var _hoisted_8$3 = { value: 2 };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$8, [createBaseVNode("div", _hoisted_2$8, toDisplayString($options.t("moduleInterface")), 1), createBaseVNode("div", _hoisted_3$8, [
		createBaseVNode("div", _hoisted_4$7, [createBaseVNode("label", _hoisted_5$5, toDisplayString($options.t("waveform")), 1), withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.waveType = $event),
			onChange: _cache[1] || (_cache[1] = (...args) => $options.updateWaveform && $options.updateWaveform(...args))
		}, [
			createBaseVNode("option", _hoisted_6$4, toDisplayString($options.t("sawtooth")), 1),
			createBaseVNode("option", _hoisted_7$3, toDisplayString($options.t("square")), 1),
			createBaseVNode("option", _hoisted_8$3, toDisplayString($options.t("triangle")), 1)
		], 544), [[
			vModelSelect,
			$data.waveType,
			void 0,
			{ number: true }
		]])]),
		createVNode(_component_ControlSlider, {
			label: $options.t("frequency"),
			modelValue: $data.frequency,
			"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.frequency = $event), $options.onFreqChange],
			mini: 40,
			maxi: 4e3,
			log: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createVNode(_component_ControlSlider, {
			label: $options.t("harmonics"),
			modelValue: $data.harmonics,
			"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.harmonics = $event), $options.updateWaveform],
			mini: 1,
			maxi: 50,
			integer: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		])
	])]);
}
var Mod08AddSynthFix_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$8, [["render", _sfc_render$8]]);
//#endregion
//#region src/components/modules/Mod08AddSynthVar.vue
function buildWaveTable(ctx, index) {
	if (index === 0) return null;
	let harmonics, type;
	if (index <= 4) {
		type = "saw";
		harmonics = [
			5,
			15,
			30,
			60
		][index - 1];
	} else if (index <= 8) {
		type = "square";
		harmonics = [
			5,
			15,
			30,
			60
		][index - 5];
	} else {
		type = "triangle";
		harmonics = [
			3,
			6,
			12,
			24
		][index - 9];
	}
	const real = new Float32Array(harmonics + 1);
	const imag = new Float32Array(harmonics + 1);
	for (let n = 1; n <= harmonics; n++) if (type === "saw") imag[n] = 1 / n;
	else if (type === "square") imag[n] = n % 2 === 1 ? 1 / n : 0;
	else if (n % 2 === 1) imag[n] = ((n - 1) / 2 % 2 === 0 ? 1 : -1) / (n * n);
	return ctx.createPeriodicWave(real, imag, { disableNormalization: false });
}
var _sfc_main$7 = {
	name: "Mod08AddSynthVar",
	components: {
		ControlSlider: ControlSlider_default,
		LabelKnob: LabelKnob_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			partials: 30,
			attack: 10,
			decay: 100,
			sustain: .7,
			release: 500,
			ampDamp: .9,
			timeDamp: .9,
			freq: 172,
			spread: 1,
			waveIdx: 0,
			waveforms: WAVEFORM_LABELS_ALT,
			isPlaying: false,
			oscillators: [],
			gains: [],
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				partials: {
					fr: "Nombre de partiels",
					en: "Number of Partials"
				},
				ampDamp: {
					fr: "Réduction amp",
					en: "Amp Damping"
				},
				timeDamp: {
					fr: "Réduction dur",
					en: "Time Damping"
				},
				fundamental: {
					fr: "Fondamentale",
					en: "Fundamental"
				},
				waveform: {
					fr: "Forme d'onde",
					en: "Waveform"
				},
				play: {
					fr: "Jouer",
					en: "Play"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.disconnect(this.engine.masterGain);
			} catch (e) {}
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = .25;
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			this.stopSound();
			if (this.outputGain) try {
				this.outputGain.disconnect();
			} catch (e) {}
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		togglePlay() {
			if (this.isPlaying) this.stopSound();
			else this.playSound();
		},
		stopSound() {
			this.oscillators.forEach((o) => {
				try {
					o.stop();
				} catch (e) {}
				try {
					o.disconnect();
				} catch (e) {}
			});
			this.gains.forEach((g) => {
				try {
					g.disconnect();
				} catch (e) {}
			});
			this.oscillators = [];
			this.gains = [];
			this.isPlaying = false;
		},
		playSound() {
			this.stopSound();
			const ctx = this.engine.context;
			const now = ctx.currentTime;
			const numPartials = Math.round(this.partials);
			const wave = buildWaveTable(ctx, this.waveIdx);
			let amp = 1;
			let att = this.attack * .001;
			let dec = this.decay * .001;
			let sus = this.sustain;
			let rel = this.release * .001;
			const normGain = .25 * Math.sqrt(1 / numPartials) / this.ampDamp;
			for (let i = 0; i < numPartials; i++) {
				const partialFreq = this.freq * Math.pow(i + 1, this.spread);
				if (partialFreq > ctx.sampleRate / 2) break;
				const osc = ctx.createOscillator();
				osc.frequency.value = partialFreq;
				if (wave) osc.setPeriodicWave(wave);
				else osc.type = "sine";
				const gain = ctx.createGain();
				gain.gain.setValueAtTime(0, now);
				gain.gain.linearRampToValueAtTime(amp * normGain, now + att);
				gain.gain.linearRampToValueAtTime(sus * amp * normGain, now + att + dec);
				osc.connect(gain);
				gain.connect(this.outputGain);
				osc.start(now);
				this.oscillators.push(osc);
				this.gains.push(gain);
				amp *= this.ampDamp;
				sus *= this.ampDamp;
				att *= this.timeDamp;
				dec *= this.timeDamp;
				rel *= this.timeDamp;
			}
			this.isPlaying = true;
		},
		rebuildOnPlay() {
			if (!this.audioReady) return;
			if (this.isPlaying) this.playSound();
		},
		onPartialsChange() {
			if (!this.audioReady) return;
			if (this.isPlaying) this.playSound();
		}
	}
};
var _hoisted_1$7 = { class: "module-controls" };
var _hoisted_2$7 = { class: "section-head" };
var _hoisted_3$7 = { class: "section-body" };
var _hoisted_4$6 = { class: "synth-row" };
var _hoisted_5$4 = { class: "synth-row-2" };
var _hoisted_6$3 = { class: "synth-row-2" };
var _hoisted_7$2 = { class: "control-group" };
var _hoisted_8$2 = { class: "control-label" };
var _hoisted_9$1 = ["value"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	const _component_LabelKnob = resolveComponent("LabelKnob");
	return openBlock(), createElementBlock("div", _hoisted_1$7, [createBaseVNode("div", _hoisted_2$7, toDisplayString($options.t("moduleInterface")), 1), createBaseVNode("div", _hoisted_3$7, [
		createVNode(_component_ControlSlider, {
			label: $options.t("partials"),
			modelValue: $data.partials,
			"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.partials = $event), $options.onPartialsChange],
			mini: 1,
			maxi: 60,
			integer: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createBaseVNode("div", _hoisted_4$6, [
			_cache[12] || (_cache[12] = createBaseVNode("span", { class: "control-label" }, "Env.", -1)),
			createVNode(_component_LabelKnob, {
				label: "att",
				modelValue: $data.attack,
				"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.attack = $event), $options.rebuildOnPlay],
				mini: 1,
				maxi: 2e3,
				log: true
			}, null, 8, ["modelValue", "onUpdate:modelValue"]),
			createVNode(_component_LabelKnob, {
				label: "dec",
				modelValue: $data.decay,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.decay = $event), $options.rebuildOnPlay],
				mini: 1,
				maxi: 2e3,
				log: true
			}, null, 8, ["modelValue", "onUpdate:modelValue"]),
			createVNode(_component_LabelKnob, {
				label: "sus",
				modelValue: $data.sustain,
				"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.sustain = $event), $options.rebuildOnPlay],
				mini: 0,
				maxi: 1
			}, null, 8, ["modelValue", "onUpdate:modelValue"]),
			createVNode(_component_LabelKnob, {
				label: "rel",
				modelValue: $data.release,
				"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $data.release = $event), $options.rebuildOnPlay],
				mini: 1,
				maxi: 2e3,
				log: true
			}, null, 8, ["modelValue", "onUpdate:modelValue"])
		]),
		createBaseVNode("div", _hoisted_5$4, [createVNode(_component_ControlSlider, {
			label: $options.t("ampDamp"),
			modelValue: $data.ampDamp,
			"onUpdate:modelValue": [_cache[5] || (_cache[5] = ($event) => $data.ampDamp = $event), $options.rebuildOnPlay],
			mini: .5,
			maxi: 1
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]), createVNode(_component_ControlSlider, {
			label: $options.t("timeDamp"),
			modelValue: $data.timeDamp,
			"onUpdate:modelValue": [_cache[6] || (_cache[6] = ($event) => $data.timeDamp = $event), $options.rebuildOnPlay],
			mini: .5,
			maxi: 1
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		])]),
		createBaseVNode("div", _hoisted_6$3, [createVNode(_component_ControlSlider, {
			label: $options.t("fundamental"),
			modelValue: $data.freq,
			"onUpdate:modelValue": [_cache[7] || (_cache[7] = ($event) => $data.freq = $event), $options.rebuildOnPlay],
			mini: 40,
			maxi: 4e3,
			log: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]), createVNode(_component_ControlSlider, {
			label: "Expansion",
			modelValue: $data.spread,
			"onUpdate:modelValue": [_cache[8] || (_cache[8] = ($event) => $data.spread = $event), $options.rebuildOnPlay],
			mini: .001,
			maxi: 2,
			log: true
		}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
		createBaseVNode("div", _hoisted_7$2, [createBaseVNode("label", _hoisted_8$2, toDisplayString($options.t("waveform")), 1), withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.waveIdx = $event),
			onChange: _cache[10] || (_cache[10] = (...args) => $options.rebuildOnPlay && $options.rebuildOnPlay(...args))
		}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.waveforms, (w, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString(w[_ctx.$i18n.locale]), 9, _hoisted_9$1);
		}), 128))], 544), [[
			vModelSelect,
			$data.waveIdx,
			void 0,
			{ number: true }
		]])]),
		createBaseVNode("button", {
			class: normalizeClass(["toggle-btn", { active: $data.isPlaying }]),
			onClick: _cache[11] || (_cache[11] = (...args) => $options.togglePlay && $options.togglePlay(...args)),
			style: { "width": "100%" }
		}, toDisplayString($options.t("play")), 3)
	])]);
}
var Mod08AddSynthVar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$7, [["render", _sfc_render$7]]);
//#endregion
//#region src/components/modules/Mod08PWM.vue
var _sfc_main$6 = {
	name: "Mod08PWM",
	components: { ControlSlider: ControlSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			freq: 172,
			duty: 50,
			damp: 0,
			workletNode: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				frequency: {
					fr: "Fréquence fondamentale en Hz",
					en: "Fundamental Frequency (Hz)"
				},
				duty: {
					fr: "Cycle d'ouverture en %",
					en: "Duty Cycle (%)"
				},
				filter: {
					fr: "Filtre anti-alias",
					en: "Anti-alias Filter"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.engine.context;
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.disconnect(this.engine.masterGain);
			} catch (e) {}
			await ctx.audioWorklet.addModule(new URL("data:text/javascript;base64,Ly8gUHVsc2UgV2lkdGggTW9kdWxhdGlvbiBvc2NpbGxhdG9yIHdpdGggb3B0aW9uYWwgYW50aS1hbGlhcyBGSVIgZmlsdGVyLgovLyBHZW5lcmF0ZXMgYSBiaXBvbGFyIHNxdWFyZSB3YXZlICgtMS8rMSkgd2l0aCBjb25maWd1cmFibGUgZHV0eSBjeWNsZS4KCmNsYXNzIFBXTVByb2Nlc3NvciBleHRlbmRzIEF1ZGlvV29ya2xldFByb2Nlc3NvciB7CiAgY29uc3RydWN0b3IoKSB7CiAgICBzdXBlcigpCiAgICB0aGlzLmZyZXEgPSAxNzIKICAgIHRoaXMuZHV0eSA9IDAuNQogICAgdGhpcy5kYW1wID0gMCAvLyBGSVIga2VybmVsIGhhbGYtbGVuZ3RoICgwID0gbm8gZmlsdGVyKQogICAgdGhpcy5waGFzZSA9IDAKCiAgICB0aGlzLnBvcnQub25tZXNzYWdlID0gKGUpID0+IHsKICAgICAgaWYgKGUuZGF0YS5mcmVxICE9PSB1bmRlZmluZWQpIHRoaXMuZnJlcSA9IGUuZGF0YS5mcmVxCiAgICAgIGlmIChlLmRhdGEuZHV0eSAhPT0gdW5kZWZpbmVkKSB0aGlzLmR1dHkgPSBlLmRhdGEuZHV0eQogICAgICBpZiAoZS5kYXRhLmRhbXAgIT09IHVuZGVmaW5lZCkgdGhpcy5kYW1wID0gZS5kYXRhLmRhbXAKICAgIH0KICB9CgogIHByb2Nlc3MoaW5wdXRzLCBvdXRwdXRzKSB7CiAgICBjb25zdCBvdXRwdXQgPSBvdXRwdXRzWzBdCiAgICBjb25zdCBjaGFubmVsID0gb3V0cHV0WzBdCiAgICBpZiAoIWNoYW5uZWwpIHJldHVybiB0cnVlCgogICAgY29uc3Qgc3IgPSBzYW1wbGVSYXRlCiAgICBjb25zdCBwaGFzZUluYyA9IHRoaXMuZnJlcSAvIHNyCgogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFubmVsLmxlbmd0aDsgaSsrKSB7CiAgICAgIC8vIFJhdyBQV006ICsxIGlmIHBoYXNlIDwgZHV0eSwgLTEgb3RoZXJ3aXNlCiAgICAgIGNoYW5uZWxbaV0gPSB0aGlzLnBoYXNlIDwgdGhpcy5kdXR5ID8gMSA6IC0xCiAgICAgIHRoaXMucGhhc2UgKz0gcGhhc2VJbmMKICAgICAgaWYgKHRoaXMucGhhc2UgPj0gMSkgdGhpcy5waGFzZSAtPSAxCiAgICB9CgogICAgLy8gQXBwbHkgc2ltcGxlIG1vdmluZyBhdmVyYWdlIGFzIGFudGktYWxpYXMgZmlsdGVyCiAgICBpZiAodGhpcy5kYW1wID4gMCkgewogICAgICBjb25zdCBrZXJuZWxTaXplID0gdGhpcy5kYW1wICogMgogICAgICBjb25zdCB0ZW1wID0gbmV3IEZsb2F0MzJBcnJheShjaGFubmVsLmxlbmd0aCkKICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFubmVsLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgbGV0IHN1bSA9IDAKICAgICAgICBsZXQgY291bnQgPSAwCiAgICAgICAgZm9yIChsZXQgaiA9IC10aGlzLmRhbXA7IGogPD0gdGhpcy5kYW1wOyBqKyspIHsKICAgICAgICAgIGNvbnN0IGlkeCA9IGkgKyBqCiAgICAgICAgICBpZiAoaWR4ID49IDAgJiYgaWR4IDwgY2hhbm5lbC5sZW5ndGgpIHsKICAgICAgICAgICAgc3VtICs9IGNoYW5uZWxbaWR4XQogICAgICAgICAgICBjb3VudCsrCiAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHRlbXBbaV0gPSBzdW0gLyBjb3VudAogICAgICB9CiAgICAgIGNoYW5uZWwuc2V0KHRlbXApCiAgICB9CgogICAgZm9yIChsZXQgY2ggPSAxOyBjaCA8IG91dHB1dC5sZW5ndGg7IGNoKyspIHsKICAgICAgb3V0cHV0W2NoXS5zZXQoY2hhbm5lbCkKICAgIH0KCiAgICByZXR1cm4gdHJ1ZQogIH0KfQoKcmVnaXN0ZXJQcm9jZXNzb3IoJ3B3bScsIFBXTVByb2Nlc3NvcikK", "" + import.meta.url));
			this.workletNode = new AudioWorkletNode(ctx, "pwm");
			this.workletNode.port.postMessage({
				freq: this.freq,
				duty: this.duty * .01,
				damp: this.damp
			});
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = .5;
			this.workletNode.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			[this.workletNode, this.outputGain].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		onFreqChange(val) {
			if (this.workletNode) this.workletNode.port.postMessage({ freq: val });
		},
		onDutyChange(val) {
			if (this.workletNode) this.workletNode.port.postMessage({ duty: val * .01 });
		},
		onDampChange(val) {
			if (this.workletNode) this.workletNode.port.postMessage({ damp: Math.round(val) });
		}
	}
};
var _hoisted_1$6 = { class: "module-controls" };
var _hoisted_2$6 = { class: "section-head" };
var _hoisted_3$6 = { class: "section-body" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$6, [createBaseVNode("div", _hoisted_2$6, toDisplayString($options.t("moduleInterface")), 1), createBaseVNode("div", _hoisted_3$6, [
		createVNode(_component_ControlSlider, {
			label: $options.t("frequency"),
			modelValue: $data.freq,
			"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.freq = $event), $options.onFreqChange],
			mini: 40,
			maxi: 2e3,
			log: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createVNode(_component_ControlSlider, {
			label: $options.t("duty"),
			modelValue: $data.duty,
			"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.duty = $event), $options.onDutyChange],
			mini: 1,
			maxi: 99,
			integer: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createVNode(_component_ControlSlider, {
			label: $options.t("filter"),
			modelValue: $data.damp,
			"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.damp = $event), $options.onDampChange],
			mini: 0,
			maxi: 32,
			integer: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		])
	])]);
}
var Mod08PWM_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$6, [["render", _sfc_render$6]]);
//#endregion
//#region src/components/modules/Mod08OscSync.vue
function buildTableData(index) {
	const size = 8192;
	const table = new Float32Array(size);
	if (index === 0) {
		for (let i = 0; i < size; i++) table[i] = Math.sin(2 * Math.PI * i / size);
		return table;
	}
	let harmonics, type;
	if (index <= 4) {
		type = "saw";
		harmonics = [
			5,
			15,
			30,
			60
		][index - 1];
	} else if (index <= 8) {
		type = "square";
		harmonics = [
			5,
			15,
			30,
			60
		][index - 5];
	} else {
		type = "triangle";
		harmonics = [
			3,
			6,
			12,
			24
		][index - 9];
	}
	for (let i = 0; i < size; i++) {
		let val = 0;
		for (let n = 1; n <= harmonics; n++) {
			const angle = 2 * Math.PI * n * i / size;
			if (type === "saw") val += Math.sin(angle) / n;
			else if (type === "square") val += n % 2 === 1 ? Math.sin(angle) / n : 0;
			else if (n % 2 === 1) val += ((n - 1) / 2 % 2 === 0 ? 1 : -1) * Math.sin(angle) / (n * n);
		}
		table[i] = val;
	}
	let max = 0;
	for (let i = 0; i < size; i++) if (Math.abs(table[i]) > max) max = Math.abs(table[i]);
	if (max > 0) for (let i = 0; i < size; i++) table[i] /= max;
	return table;
}
var _sfc_main$5 = {
	name: "Mod08OscSync",
	components: { ControlSlider: ControlSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			waveIdx: 0,
			masterFreq: 172,
			slaveFreq: 200,
			xfade: 0,
			waveforms: WAVEFORM_LABELS_ALT,
			workletNode: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				waveform: {
					fr: "Forme d'onde",
					en: "Waveform"
				},
				masterFreq: {
					fr: "Fréquence maître en Hz",
					en: "Master Frequency (Hz)"
				},
				slaveFreq: {
					fr: "Fréquence esclave en Hz",
					en: "Slave Frequency (Hz)"
				},
				crossfade: {
					fr: "Fondu enchaîné en ms",
					en: "Crossfade (ms)"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.engine.context;
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.disconnect(this.engine.masterGain);
			} catch (e) {}
			await ctx.audioWorklet.addModule(new URL("data:text/javascript;base64,Ly8gU29mdC9oYXJkIHN5bmMgb3NjaWxsYXRvci4KLy8gQSBtYXN0ZXIgcGhhc29yIHJlc2V0cyBhIHNsYXZlIG9zY2lsbGF0b3IncyBwaGFzZS4KLy8gVHdvIG92ZXJsYXBwaW5nIHNsYXZlIG9zY2lsbGF0b3JzIHdpdGggY3Jvc3NmYWRlIGZvciBzb2Z0IHN5bmMuCgpjbGFzcyBPc2NTeW5jUHJvY2Vzc29yIGV4dGVuZHMgQXVkaW9Xb3JrbGV0UHJvY2Vzc29yIHsKICBjb25zdHJ1Y3RvcigpIHsKICAgIHN1cGVyKCkKICAgIHRoaXMubWFzdGVyRnJlcSA9IDE3MgogICAgdGhpcy5zbGF2ZUZyZXEgPSAyMDAKICAgIHRoaXMueGZhZGUgPSAwIC8vIDAgPSBoYXJkIHN5bmMsID4wID0gc29mdCBzeW5jIGNyb3NzZmFkZSB0aW1lIGluIG1zCgogICAgLy8gV2F2ZWZvcm0gdGFibGUgKGRlZmF1bHQ6IHNpbmUsIDgxOTIgc2FtcGxlcykKICAgIHRoaXMudGFibGVTaXplID0gODE5MgogICAgdGhpcy50YWJsZSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy50YWJsZVNpemUpCiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFibGVTaXplOyBpKyspIHsKICAgICAgdGhpcy50YWJsZVtpXSA9IE1hdGguc2luKDIgKiBNYXRoLlBJICogaSAvIHRoaXMudGFibGVTaXplKQogICAgfQoKICAgIHRoaXMubWFzdGVyUGhhc2UgPSAwCiAgICB0aGlzLnNsYXZlUGhhc2UxID0gMAogICAgdGhpcy5zbGF2ZVBoYXNlMiA9IDAKICAgIHRoaXMub3ZlcmxhcElkeCA9IDAgLy8gMCBvciAxIOKAlCB3aGljaCBzbGF2ZSBpcyBhY3RpdmUKICAgIHRoaXMuY3Jvc3NmYWRlUGhhc2UgPSAwIC8vIDAuLjEgZm9yIGNyb3NzZmFkZSByYW1wCgogICAgdGhpcy5wb3J0Lm9ubWVzc2FnZSA9IChlKSA9PiB7CiAgICAgIGlmIChlLmRhdGEubWFzdGVyRnJlcSAhPT0gdW5kZWZpbmVkKSB0aGlzLm1hc3RlckZyZXEgPSBlLmRhdGEubWFzdGVyRnJlcQogICAgICBpZiAoZS5kYXRhLnNsYXZlRnJlcSAhPT0gdW5kZWZpbmVkKSB0aGlzLnNsYXZlRnJlcSA9IGUuZGF0YS5zbGF2ZUZyZXEKICAgICAgaWYgKGUuZGF0YS54ZmFkZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnhmYWRlID0gZS5kYXRhLnhmYWRlCiAgICAgIGlmIChlLmRhdGEudGFibGUpIHRoaXMudGFibGUgPSBuZXcgRmxvYXQzMkFycmF5KGUuZGF0YS50YWJsZSkKICAgIH0KICB9CgogIHJlYWRUYWJsZShwaGFzZSkgewogICAgY29uc3QgcG9zID0gcGhhc2UgKiB0aGlzLnRhYmxlU2l6ZQogICAgY29uc3QgaWR4ID0gTWF0aC5mbG9vcihwb3MpCiAgICBjb25zdCBmcmFjID0gcG9zIC0gaWR4CiAgICBjb25zdCBzMCA9IHRoaXMudGFibGVbaWR4ICUgdGhpcy50YWJsZVNpemVdCiAgICBjb25zdCBzMSA9IHRoaXMudGFibGVbKGlkeCArIDEpICUgdGhpcy50YWJsZVNpemVdCiAgICByZXR1cm4gczAgKyAoczEgLSBzMCkgKiBmcmFjCiAgfQoKICBwcm9jZXNzKGlucHV0cywgb3V0cHV0cykgewogICAgY29uc3Qgb3V0cHV0ID0gb3V0cHV0c1swXQogICAgY29uc3QgY2hhbm5lbCA9IG91dHB1dFswXQogICAgaWYgKCFjaGFubmVsKSByZXR1cm4gdHJ1ZQoKICAgIGNvbnN0IHNyID0gc2FtcGxlUmF0ZQogICAgY29uc3QgbWFzdGVySW5jID0gdGhpcy5tYXN0ZXJGcmVxIC8gc3IKICAgIGNvbnN0IHNsYXZlSW5jID0gdGhpcy5zbGF2ZUZyZXEgLyBzcgogICAgY29uc3QgeGZhZGVTYW1wbGVzID0gTWF0aC5tYXgoMSwgKHRoaXMueGZhZGUgKiAwLjAwMSkgKiBzcikKCiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYW5uZWwubGVuZ3RoOyBpKyspIHsKICAgICAgY29uc3QgcHJldk1hc3RlciA9IHRoaXMubWFzdGVyUGhhc2UKICAgICAgdGhpcy5tYXN0ZXJQaGFzZSArPSBtYXN0ZXJJbmMKICAgICAgaWYgKHRoaXMubWFzdGVyUGhhc2UgPj0gMSkgdGhpcy5tYXN0ZXJQaGFzZSAtPSAxCgogICAgICAvLyBEZXRlY3QgbWFzdGVyIGN5Y2xlIHJlc2V0CiAgICAgIGlmICh0aGlzLm1hc3RlclBoYXNlIDwgcHJldk1hc3RlcikgewogICAgICAgIHRoaXMub3ZlcmxhcElkeCA9IDEgLSB0aGlzLm92ZXJsYXBJZHgKICAgICAgICAvLyBSZXNldCB0aGUgbmV3bHkgYWN0aXZlIG9zY2lsbGF0b3IKICAgICAgICBpZiAodGhpcy5vdmVybGFwSWR4ID09PSAwKSB7CiAgICAgICAgICB0aGlzLnNsYXZlUGhhc2UxID0gMAogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICB0aGlzLnNsYXZlUGhhc2UyID0gMAogICAgICAgIH0KICAgICAgICB0aGlzLmNyb3NzZmFkZVBoYXNlID0gMAogICAgICB9CgogICAgICAvLyBBZHZhbmNlIHNsYXZlIHBoYXNlcwogICAgICB0aGlzLnNsYXZlUGhhc2UxICs9IHNsYXZlSW5jCiAgICAgIGlmICh0aGlzLnNsYXZlUGhhc2UxID49IDEpIHRoaXMuc2xhdmVQaGFzZTEgLT0gTWF0aC5mbG9vcih0aGlzLnNsYXZlUGhhc2UxKQogICAgICB0aGlzLnNsYXZlUGhhc2UyICs9IHNsYXZlSW5jCiAgICAgIGlmICh0aGlzLnNsYXZlUGhhc2UyID49IDEpIHRoaXMuc2xhdmVQaGFzZTIgLT0gTWF0aC5mbG9vcih0aGlzLnNsYXZlUGhhc2UyKQoKICAgICAgY29uc3QgczEgPSB0aGlzLnJlYWRUYWJsZSh0aGlzLnNsYXZlUGhhc2UxKQogICAgICBjb25zdCBzMiA9IHRoaXMucmVhZFRhYmxlKHRoaXMuc2xhdmVQaGFzZTIpCgogICAgICAvLyBDcm9zc2ZhZGUKICAgICAgdGhpcy5jcm9zc2ZhZGVQaGFzZSA9IE1hdGgubWluKDEsIHRoaXMuY3Jvc3NmYWRlUGhhc2UgKyAxIC8geGZhZGVTYW1wbGVzKQogICAgICBsZXQgZmFkZQogICAgICBpZiAodGhpcy5vdmVybGFwSWR4ID09PSAxKSB7CiAgICAgICAgZmFkZSA9IHRoaXMuY3Jvc3NmYWRlUGhhc2UKICAgICAgfSBlbHNlIHsKICAgICAgICBmYWRlID0gMSAtIHRoaXMuY3Jvc3NmYWRlUGhhc2UKICAgICAgfQoKICAgICAgLy8gU21vb3RoIGNyb3NzZmFkZSB1c2luZyBjb3NpbmUKICAgICAgY29uc3QgdyA9IChNYXRoLmNvcyhmYWRlICogTWF0aC5QSSkgKiAwLjUgKyAwLjUpCiAgICAgIGNoYW5uZWxbaV0gPSAoczEgKiB3ICsgczIgKiAoMSAtIHcpKSAqIDAuNQogICAgfQoKICAgIGZvciAobGV0IGNoID0gMTsgY2ggPCBvdXRwdXQubGVuZ3RoOyBjaCsrKSB7CiAgICAgIG91dHB1dFtjaF0uc2V0KGNoYW5uZWwpCiAgICB9CgogICAgcmV0dXJuIHRydWUKICB9Cn0KCnJlZ2lzdGVyUHJvY2Vzc29yKCdvc2Mtc3luYycsIE9zY1N5bmNQcm9jZXNzb3IpCg==", "" + import.meta.url));
			this.workletNode = new AudioWorkletNode(ctx, "osc-sync");
			this.workletNode.port.postMessage({
				masterFreq: this.masterFreq,
				slaveFreq: this.slaveFreq,
				xfade: this.xfade,
				table: Array.from(buildTableData(this.waveIdx))
			});
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = .707;
			this.workletNode.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			[this.workletNode, this.outputGain].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		onWaveChange() {
			if (this.workletNode) this.workletNode.port.postMessage({ table: Array.from(buildTableData(this.waveIdx)) });
		},
		onMasterChange(val) {
			if (this.workletNode) this.workletNode.port.postMessage({ masterFreq: val });
		},
		onSlaveChange(val) {
			if (this.workletNode) this.workletNode.port.postMessage({ slaveFreq: val });
		},
		onXfadeChange(val) {
			if (this.workletNode) this.workletNode.port.postMessage({ xfade: val });
		}
	}
};
var _hoisted_1$5 = { class: "module-controls" };
var _hoisted_2$5 = { class: "section-head" };
var _hoisted_3$5 = { class: "section-body" };
var _hoisted_4$5 = { class: "control-group" };
var _hoisted_5$3 = { class: "control-label" };
var _hoisted_6$2 = ["value"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$5, [createBaseVNode("div", _hoisted_2$5, toDisplayString($options.t("moduleInterface")), 1), createBaseVNode("div", _hoisted_3$5, [
		createBaseVNode("div", _hoisted_4$5, [createBaseVNode("label", _hoisted_5$3, toDisplayString($options.t("waveform")), 1), withDirectives(createBaseVNode("select", {
			"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.waveIdx = $event),
			onChange: _cache[1] || (_cache[1] = (...args) => $options.onWaveChange && $options.onWaveChange(...args))
		}, [(openBlock(true), createElementBlock(Fragment, null, renderList($data.waveforms, (w, i) => {
			return openBlock(), createElementBlock("option", {
				key: i,
				value: i
			}, toDisplayString(w[_ctx.$i18n.locale]), 9, _hoisted_6$2);
		}), 128))], 544), [[
			vModelSelect,
			$data.waveIdx,
			void 0,
			{ number: true }
		]])]),
		createVNode(_component_ControlSlider, {
			label: $options.t("masterFreq"),
			modelValue: $data.masterFreq,
			"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.masterFreq = $event), $options.onMasterChange],
			mini: 40,
			maxi: 2e3,
			log: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createVNode(_component_ControlSlider, {
			label: $options.t("slaveFreq"),
			modelValue: $data.slaveFreq,
			"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.slaveFreq = $event), $options.onSlaveChange],
			mini: 40,
			maxi: 2e3,
			log: true
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		]),
		createVNode(_component_ControlSlider, {
			label: $options.t("crossfade"),
			modelValue: $data.xfade,
			"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $data.xfade = $event), $options.onXfadeChange],
			mini: 0,
			maxi: 2
		}, null, 8, [
			"label",
			"modelValue",
			"onUpdate:modelValue"
		])
	])]);
}
var Mod08OscSync_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$5, [["render", _sfc_render$5]]);
//#endregion
//#region src/components/modules/Mod07GranularPlayback.vue
var _sfc_main$4 = {
	name: "Mod07GranularPlayback",
	components: { ControlSlider: ControlSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			speed: .5,
			pitch: 1,
			isPlaying: false,
			hasFile: false,
			fileName: "",
			workletNode: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				source: {
					fr: "Source Sonore",
					en: "Audio Source"
				},
				loadFile: {
					fr: "Fichier sonore",
					en: "Sound File"
				},
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				startPlayback: {
					fr: "Démarrer la lecture",
					en: "Start Playback"
				},
				speed: {
					fr: "Vitesse de lecture",
					en: "Playback Speed"
				},
				pitch: {
					fr: "Transposition",
					en: "Transposition"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.engine.context;
			await ctx.audioWorklet.addModule(new URL("" + new URL("granular-DKwNfZgo.js", import.meta.url).href, "" + import.meta.url));
			this.workletNode = new AudioWorkletNode(ctx, "granular");
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = 1;
			this.workletNode.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			if (this.workletNode) this.workletNode.port.postMessage({ play: false });
			[this.workletNode, this.outputGain].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		async onLoadFile(e) {
			const file = e.target.files[0];
			if (!file) return;
			this.fileName = file.name;
			const ctx = this.engine.context;
			const arrayBuf = await file.arrayBuffer();
			const data = (await ctx.decodeAudioData(arrayBuf)).getChannelData(0);
			this.workletNode.port.postMessage({ buffer: Array.from(data) });
			this.hasFile = true;
		},
		togglePlay() {
			this.isPlaying = !this.isPlaying;
			if (this.workletNode) this.workletNode.port.postMessage({
				play: this.isPlaying,
				posSpeed: this.speed,
				pitch: this.pitch
			});
		},
		onSpeedChange(val) {
			if (this.workletNode) this.workletNode.port.postMessage({ posSpeed: val });
		},
		onPitchChange(val) {
			if (this.workletNode) this.workletNode.port.postMessage({ pitch: val });
		}
	}
};
var _hoisted_1$4 = { class: "module-controls" };
var _hoisted_2$4 = { class: "section-head" };
var _hoisted_3$4 = { class: "section-body" };
var _hoisted_4$4 = {
	class: "toggle-btn file-source__load",
	style: {
		"display": "block",
		"text-align": "center"
	}
};
var _hoisted_5$2 = {
	key: 0,
	class: "file-source__name"
};
var _hoisted_6$1 = { class: "section-head" };
var _hoisted_7$1 = { class: "section-body" };
var _hoisted_8$1 = ["disabled"];
var _hoisted_9 = {
	class: "control-label",
	style: {
		"margin-top": "8px",
		"font-style": "italic"
	}
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$4, [
		createBaseVNode("div", _hoisted_2$4, toDisplayString($options.t("source")), 1),
		createBaseVNode("div", _hoisted_3$4, [createBaseVNode("label", _hoisted_4$4, [createTextVNode(toDisplayString($options.t("loadFile")) + " ", 1), createBaseVNode("input", {
			type: "file",
			accept: "audio/*",
			onChange: _cache[0] || (_cache[0] = (...args) => $options.onLoadFile && $options.onLoadFile(...args)),
			hidden: ""
		}, null, 32)]), $data.fileName ? (openBlock(), createElementBlock("div", _hoisted_5$2, toDisplayString($data.fileName), 1)) : createCommentVNode("", true)]),
		createBaseVNode("div", _hoisted_6$1, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_7$1, [
			createBaseVNode("button", {
				class: normalizeClass(["toggle-btn", { active: $data.isPlaying }]),
				onClick: _cache[1] || (_cache[1] = (...args) => $options.togglePlay && $options.togglePlay(...args)),
				disabled: !$data.hasFile,
				style: {
					"width": "100%",
					"margin-bottom": "6px"
				}
			}, toDisplayString($options.t("startPlayback")), 11, _hoisted_8$1),
			createVNode(_component_ControlSlider, {
				label: $options.t("speed"),
				modelValue: $data.speed,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.speed = $event), $options.onSpeedChange],
				mini: -2,
				maxi: 2
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("pitch"),
				modelValue: $data.pitch,
				"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.pitch = $event), $options.onPitchChange],
				mini: .1,
				maxi: 2
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createBaseVNode("p", _hoisted_9, toDisplayString(_ctx.$i18n.locale === "fr" ? "Une vitesse de 0 produira un gel du son!" : "A speed of 0 will freeze the sound!"), 1)
		])
	]);
}
var Mod07GranularPlayback_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$4, [["render", _sfc_render$4]]);
//#endregion
//#region src/components/modules/Mod07GranularReorg.vue
var _sfc_main$3 = {
	name: "Mod07GranularReorg",
	components: { ControlSlider: ControlSlider_default },
	mixins: [moduleAudioMixin],
	data() {
		return {
			jumpAmount: 0,
			jumpSpeed: 8,
			randomAmount: 0,
			randomSpeed: 8,
			isPlaying: false,
			hasFile: false,
			fileName: "",
			workletNode: null,
			outputGain: null
		};
	},
	methods: {
		t(key) {
			return ({
				source: {
					fr: "Source Sonore",
					en: "Audio Source"
				},
				loadFile: {
					fr: "Fichier sonore",
					en: "Sound File"
				},
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				startPlayback: {
					fr: "Démarrer la lecture",
					en: "Start Playback"
				},
				jumpRange: {
					fr: "Ambitus des sauts",
					en: "Jump Range"
				},
				jumpSpeed: {
					fr: "Vitesse des sauts (Hz)",
					en: "Jump Speed (Hz)"
				},
				randomRange: {
					fr: "Ambitus variations aléatoires",
					en: "Random Variation Range"
				},
				randomSpeed: {
					fr: "Vitesse des variations (Hz)",
					en: "Variation Speed (Hz)"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		async setup() {
			const ctx = this.engine.context;
			await ctx.audioWorklet.addModule(new URL("" + new URL("granular-DKwNfZgo.js", import.meta.url).href, "" + import.meta.url));
			this.workletNode = new AudioWorkletNode(ctx, "granular");
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = 1;
			this.workletNode.connect(this.outputGain);
			this.outputGain.connect(this.engine.masterGain);
		},
		teardown() {
			if (this.workletNode) this.workletNode.port.postMessage({ play: false });
			[this.workletNode, this.outputGain].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) try {
				this.engine.sourcePanel.output.connect(this.engine.masterGain);
			} catch (e) {}
		},
		async onLoadFile(e) {
			const file = e.target.files[0];
			if (!file) return;
			this.fileName = file.name;
			const ctx = this.engine.context;
			const arrayBuf = await file.arrayBuffer();
			const data = (await ctx.decodeAudioData(arrayBuf)).getChannelData(0);
			this.workletNode.port.postMessage({ buffer: Array.from(data) });
			this.hasFile = true;
		},
		togglePlay() {
			this.isPlaying = !this.isPlaying;
			this.workletNode.port.postMessage({
				play: this.isPlaying,
				posSpeed: 1,
				jumpAmount: this.jumpAmount,
				jumpSpeed: this.jumpSpeed,
				randomAmount: this.randomAmount,
				randomSpeed: this.randomSpeed
			});
		},
		onParamChange() {
			if (this.workletNode) this.workletNode.port.postMessage({
				jumpAmount: this.jumpAmount,
				jumpSpeed: this.jumpSpeed,
				randomAmount: this.randomAmount,
				randomSpeed: this.randomSpeed
			});
		}
	}
};
var _hoisted_1$3 = { class: "module-controls" };
var _hoisted_2$3 = { class: "section-head" };
var _hoisted_3$3 = { class: "section-body" };
var _hoisted_4$3 = {
	class: "toggle-btn file-source__load",
	style: {
		"display": "block",
		"text-align": "center"
	}
};
var _hoisted_5$1 = {
	key: 0,
	class: "file-source__name"
};
var _hoisted_6 = { class: "section-head" };
var _hoisted_7 = { class: "section-body" };
var _hoisted_8 = ["disabled"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$3, [
		createBaseVNode("div", _hoisted_2$3, toDisplayString($options.t("source")), 1),
		createBaseVNode("div", _hoisted_3$3, [createBaseVNode("label", _hoisted_4$3, [createTextVNode(toDisplayString($options.t("loadFile")) + " ", 1), createBaseVNode("input", {
			type: "file",
			accept: "audio/*",
			onChange: _cache[0] || (_cache[0] = (...args) => $options.onLoadFile && $options.onLoadFile(...args)),
			hidden: ""
		}, null, 32)]), $data.fileName ? (openBlock(), createElementBlock("div", _hoisted_5$1, toDisplayString($data.fileName), 1)) : createCommentVNode("", true)]),
		createBaseVNode("div", _hoisted_6, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_7, [
			createBaseVNode("button", {
				class: normalizeClass(["toggle-btn", { active: $data.isPlaying }]),
				onClick: _cache[1] || (_cache[1] = (...args) => $options.togglePlay && $options.togglePlay(...args)),
				disabled: !$data.hasFile,
				style: {
					"width": "100%",
					"margin-bottom": "6px"
				}
			}, toDisplayString($options.t("startPlayback")), 11, _hoisted_8),
			createVNode(_component_ControlSlider, {
				label: $options.t("jumpRange"),
				modelValue: $data.jumpAmount,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.jumpAmount = $event), $options.onParamChange],
				mini: 0,
				maxi: 1
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("jumpSpeed"),
				modelValue: $data.jumpSpeed,
				"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.jumpSpeed = $event), $options.onParamChange],
				mini: 1,
				maxi: 20
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("randomRange"),
				modelValue: $data.randomAmount,
				"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $data.randomAmount = $event), $options.onParamChange],
				mini: 0,
				maxi: 1
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("randomSpeed"),
				modelValue: $data.randomSpeed,
				"onUpdate:modelValue": [_cache[5] || (_cache[5] = ($event) => $data.randomSpeed = $event), $options.onParamChange],
				mini: 1,
				maxi: 20
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			])
		])
	]);
}
var Mod07GranularReorg_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$3, [["render", _sfc_render$3]]);
//#endregion
//#region src/components/modules/Mod04Binaural.vue
var _sfc_main$2 = {
	name: "Mod04Binaural",
	components: {
		SourcePanel: SourcePanel_default,
		ControlSlider: ControlSlider_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			azimuth: 0,
			elevation: 0,
			pannerNode: null
		};
	},
	computed: {},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				azimuth: {
					fr: "Position en azimuth",
					en: "Azimuth Position"
				},
				elevation: {
					fr: "Position en élévation",
					en: "Elevation Position"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			this.pannerNode = ctx.createPanner();
			this.pannerNode.panningModel = "HRTF";
			this.pannerNode.distanceModel = "inverse";
			this.pannerNode.refDistance = 1;
			this.pannerNode.maxDistance = 10;
			this.pannerNode.rolloffFactor = 1;
			this.pannerNode.coneInnerAngle = 360;
			this.pannerNode.coneOuterAngle = 360;
			this.pannerNode.coneOuterGain = 0;
			source.connect(this.pannerNode);
			this.pannerNode.connect(this.engine.masterGain);
			this.updatePan();
		},
		teardown() {
			if (this.pannerNode) try {
				this.pannerNode.disconnect();
			} catch (e) {}
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		updatePan() {
			if (!this.pannerNode) return;
			const azRad = this.azimuth * Math.PI / 180;
			const elRad = this.elevation * Math.PI / 180;
			const dist = 1;
			const x = dist * Math.cos(elRad) * Math.sin(azRad);
			const y = dist * Math.sin(elRad);
			const z = -dist * Math.cos(elRad) * Math.cos(azRad);
			const t = this.engine.context.currentTime;
			this.pannerNode.positionX.setTargetAtTime(x, t, .02);
			this.pannerNode.positionY.setTargetAtTime(y, t, .02);
			this.pannerNode.positionZ.setTargetAtTime(z, t, .02);
		}
	}
};
var _hoisted_1$2 = { class: "module-controls" };
var _hoisted_2$2 = { class: "section-head" };
var _hoisted_3$2 = { class: "section-body" };
var _hoisted_4$2 = {
	class: "control-label",
	style: {
		"font-style": "italic",
		"margin-top": "6px"
	}
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_ControlSlider = resolveComponent("ControlSlider");
	return openBlock(), createElementBlock("div", _hoisted_1$2, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$2, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$2, [
			createVNode(_component_ControlSlider, {
				label: $options.t("azimuth"),
				modelValue: $data.azimuth,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.azimuth = $event), $options.updatePan],
				mini: -180,
				maxi: 180
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_ControlSlider, {
				label: $options.t("elevation"),
				modelValue: $data.elevation,
				"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.elevation = $event), $options.updatePan],
				mini: 0,
				maxi: 90
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createBaseVNode("p", _hoisted_4$2, toDisplayString(_ctx.$i18n.locale === "fr" ? "Pour un meilleur résultat, utilisez des écouteurs." : "For best results, use headphones."), 1)
		])
	]);
}
var Mod04Binaural_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$2, [["render", _sfc_render$2]]);
//#endregion
//#region src/components/modules/Mod05MBCompress.vue
var CROSSOVER_FREQS = [
	150,
	600,
	3200
];
var _sfc_main$1 = {
	name: "Mod05MBCompress",
	components: {
		SourcePanel: SourcePanel_default,
		LabelKnob: LabelKnob_default
	},
	mixins: [moduleAudioMixin],
	data() {
		return {
			threshold: -20,
			ratio: 1,
			attack: .01,
			release: .1,
			gain: 0,
			lpFilters: [],
			hpFilters: [],
			compressors: [],
			bandGains: [],
			outputGain: null
		};
	},
	computed: {},
	methods: {
		t(key) {
			return ({
				moduleInterface: {
					fr: "Interface du Module",
					en: "Module Interface"
				},
				bands: {
					fr: "Bandes: 0-150, 150-600, 600-3200, 3200+ Hz",
					en: "Bands: 0-150, 150-600, 600-3200, 3200+ Hz"
				},
				threshold: {
					fr: "seuil",
					en: "thresh"
				},
				ratio: {
					fr: "ratio",
					en: "ratio"
				},
				attack: {
					fr: "rise",
					en: "rise"
				},
				release: {
					fr: "fall",
					en: "fall"
				}
			}[key] || {})[this.$i18n.locale] || key;
		},
		setup() {
			const ctx = this.engine.context;
			const source = this.engine.sourcePanel.output;
			source.disconnect(this.engine.masterGain);
			this.outputGain = ctx.createGain();
			this.outputGain.gain.value = Math.pow(10, this.gain * .05);
			this.outputGain.connect(this.engine.masterGain);
			this.lpFilters = [];
			this.hpFilters = [];
			this.compressors = [];
			for (let b = 0; b < 4; b++) {
				const comp = ctx.createDynamicsCompressor();
				comp.threshold.value = this.threshold;
				comp.ratio.value = this.ratio;
				comp.attack.value = this.attack;
				comp.release.value = this.release;
				comp.knee.value = 3;
				if (b === 0) {
					const lp = ctx.createBiquadFilter();
					lp.type = "lowpass";
					lp.frequency.value = CROSSOVER_FREQS[0];
					source.connect(lp);
					lp.connect(comp);
					this.lpFilters.push(lp);
				} else if (b === 3) {
					const hp = ctx.createBiquadFilter();
					hp.type = "highpass";
					hp.frequency.value = CROSSOVER_FREQS[2];
					source.connect(hp);
					hp.connect(comp);
					this.hpFilters.push(hp);
				} else {
					const hp = ctx.createBiquadFilter();
					hp.type = "highpass";
					hp.frequency.value = CROSSOVER_FREQS[b - 1];
					const lp = ctx.createBiquadFilter();
					lp.type = "lowpass";
					lp.frequency.value = CROSSOVER_FREQS[b];
					source.connect(hp);
					hp.connect(lp);
					lp.connect(comp);
					this.hpFilters.push(hp);
					this.lpFilters.push(lp);
				}
				comp.connect(this.outputGain);
				this.compressors.push(comp);
			}
		},
		teardown() {
			[
				...this.lpFilters,
				...this.hpFilters,
				...this.compressors,
				this.outputGain
			].forEach((n) => {
				if (n) try {
					n.disconnect();
				} catch (e) {}
			});
			if (this.engine.sourcePanel) {
				try {
					this.engine.sourcePanel.output.disconnect();
				} catch (e) {}
				try {
					this.engine.sourcePanel.output.connect(this.engine.masterGain);
				} catch (e) {}
			}
		},
		updateCompressors() {
			if (!this.audioReady) return;
			const t = this.engine.context.currentTime;
			this.compressors.forEach((c) => {
				c.threshold.setTargetAtTime(this.threshold, t, .05);
				c.ratio.setTargetAtTime(Math.min(this.ratio, 20), t, .05);
				c.attack.setTargetAtTime(this.attack, t, .05);
				c.release.setTargetAtTime(this.release, t, .05);
			});
		},
		updateGain() {
			if (this.outputGain) this.outputGain.gain.setTargetAtTime(Math.pow(10, this.gain * .05), this.engine.context.currentTime, .05);
		}
	}
};
var _hoisted_1$1 = { class: "module-controls" };
var _hoisted_2$1 = { class: "section-head" };
var _hoisted_3$1 = { class: "section-body" };
var _hoisted_4$1 = { class: "control-label" };
var _hoisted_5 = { class: "mb-knobs" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_SourcePanel = resolveComponent("SourcePanel");
	const _component_LabelKnob = resolveComponent("LabelKnob");
	return openBlock(), createElementBlock("div", _hoisted_1$1, [
		createVNode(_component_SourcePanel, { audio: _ctx.engine.sourcePanel }, null, 8, ["audio"]),
		createBaseVNode("div", _hoisted_2$1, toDisplayString($options.t("moduleInterface")), 1),
		createBaseVNode("div", _hoisted_3$1, [createBaseVNode("p", _hoisted_4$1, toDisplayString($options.t("bands")), 1), createBaseVNode("div", _hoisted_5, [
			createVNode(_component_LabelKnob, {
				label: $options.t("threshold"),
				modelValue: $data.threshold,
				"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => $data.threshold = $event), $options.updateCompressors],
				mini: -40,
				maxi: 0
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_LabelKnob, {
				label: $options.t("ratio"),
				modelValue: $data.ratio,
				"onUpdate:modelValue": [_cache[1] || (_cache[1] = ($event) => $data.ratio = $event), $options.updateCompressors],
				mini: 1,
				maxi: 20
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_LabelKnob, {
				label: $options.t("attack"),
				modelValue: $data.attack,
				"onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $data.attack = $event), $options.updateCompressors],
				mini: .001,
				maxi: .2,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_LabelKnob, {
				label: $options.t("release"),
				modelValue: $data.release,
				"onUpdate:modelValue": [_cache[3] || (_cache[3] = ($event) => $data.release = $event), $options.updateCompressors],
				mini: .005,
				maxi: .5,
				log: true
			}, null, 8, [
				"label",
				"modelValue",
				"onUpdate:modelValue"
			]),
			createVNode(_component_LabelKnob, {
				label: "gain",
				modelValue: $data.gain,
				"onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $data.gain = $event), $options.updateGain],
				mini: -24,
				maxi: 24
			}, null, 8, ["modelValue", "onUpdate:modelValue"])
		])])
	]);
}
var Mod05MBCompress_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1]]);
//#endregion
//#region src/components/modules/ModuleWrapper.vue
var COMPONENT_MAP = {
	"Mod00Sources": Mod00Sources_default,
	"Mod02Filters": Mod02Filters_default,
	"Mod03FixedDelay": Mod03FixedDelay_default,
	"Mod03VariableDelay": Mod03VariableDelay_default,
	"Mod03Phasing": Mod03Phasing_default,
	"Mod04Panning": Mod04Panning_default,
	"Mod05PeakRMS": Mod05PeakRMS_default,
	"Mod09AmpMod": Mod09AmpMod_default,
	"Mod09FreqMod": Mod09FreqMod_default,
	"Mod01Resampling": Mod01Resampling_default,
	"Mod01Quantize": Mod01Quantize_default,
	"Mod05EnvFollower": Mod05EnvFollower_default,
	"Mod05Gate": Mod05Gate_default,
	"Mod05Compress": Mod05Compress_default,
	"Mod09AutoMod": Mod09AutoMod_default,
	"Mod10Chebyshev": Mod10Chebyshev_default,
	"Mod10Distortion": Mod10Distortion_default,
	"Mod03Transpose": Mod03Transpose_default,
	"Mod03Reverb": Mod03Reverb_default,
	"Mod06Vocoder": Mod06Vocoder_default,
	"Mod06SpectralFilter": Mod06SpectralFilter_default,
	"Mod06CrossSynth": Mod06CrossSynth_default,
	"Mod06SpectralPlayback": Mod06SpectralPlayback_default,
	"Mod06SpectralDelay": Mod06SpectralDelay_default,
	"Mod08AddSynthFix": Mod08AddSynthFix_default,
	"Mod08AddSynthVar": Mod08AddSynthVar_default,
	"Mod08PWM": Mod08PWM_default,
	"Mod08OscSync": Mod08OscSync_default,
	"Mod07GranularPlayback": Mod07GranularPlayback_default,
	"Mod07GranularReorg": Mod07GranularReorg_default,
	"Mod04Binaural": Mod04Binaural_default,
	"Mod05MBCompress": Mod05MBCompress_default
};
var _sfc_main = {
	name: "ModuleWrapper",
	components: { ModuleDoc: ModuleDoc_default },
	computed: {
		moduleId() {
			return this.$route.params.moduleId;
		},
		moduleDef() {
			return useModuleRegistryStore().modules[this.moduleId] || null;
		},
		moduleName() {
			if (!this.moduleDef) return this.moduleId;
			return this.moduleDef.name[this.$i18n.locale] || this.moduleDef.name.fr;
		},
		moduleComponent() {
			if (!this.moduleDef) return null;
			return COMPONENT_MAP[this.moduleDef.component] || null;
		}
	},
	watch: { moduleId(newId) {
		useModuleRegistryStore().setActiveModule(newId);
	} },
	created() {
		if (this.moduleId) useModuleRegistryStore().setActiveModule(this.moduleId);
	}
};
var _hoisted_1 = { class: "module-wrapper" };
var _hoisted_2 = { class: "module-title" };
var _hoisted_3 = { class: "module-body" };
var _hoisted_4 = {
	key: 1,
	class: "module-placeholder"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_ModuleDoc = resolveComponent("ModuleDoc");
	return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, toDisplayString($options.moduleName), 1), createBaseVNode("div", _hoisted_3, [$options.moduleComponent ? (openBlock(), createBlock(resolveDynamicComponent($options.moduleComponent), { key: $options.moduleId })) : (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(_ctx.$t("menu.modules")) + ": " + toDisplayString(_ctx.$route.params.moduleId), 1)), createVNode(_component_ModuleDoc, { moduleId: $options.moduleId }, null, 8, ["moduleId"])])]);
}
var ModuleWrapper_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { ModuleWrapper_default as default };
