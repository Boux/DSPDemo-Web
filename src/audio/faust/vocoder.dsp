import("stdfaust.lib");

baseFreq = hslider("baseFreq", 100, 40, 250, 1) : si.smoo;
expansion = hslider("expansion", 1.2, 0.5, 2, 0.01) : si.smoo;
qFactor = hslider("q", 20, 1, 100, 0.1) : si.smoo;
slope = hslider("slope", 0.5, 0, 1, 0.01);
numBands = nentry("stages", 24, 2, 64, 1);
gain = hslider("gain", 0, -60, 18, 0.1) : ba.db2linear : si.smoo;

// Max bands at compile time
N = 64;

// Envelope follower: rectify + smoothing lowpass
followRate = 10 + slope * 490;

// Single vocoder channel: takes (envelope, excitation), outputs modulated signal
// Only active if band index < numBands and freq < nyquist
vocoderChan(i, env, exc) = exc_filtered * env_level * active
with {
    freq = baseFreq * (expansion ^ i);
    active = (i < numBands) & (freq < ma.SR/2);
    env_filtered = env : fi.resonbp(freq, qFactor, 1);
    env_level = env_filtered : abs : fi.lowpass(1, followRate);
    exc_filtered = exc : fi.resonbp(freq, qFactor, 1);
};

process(env, exc) = sum(i, N, vocoderChan(i, env, exc)) * gain;
