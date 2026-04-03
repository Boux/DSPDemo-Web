import("stdfaust.lib");

lfoFreq = hslider("lfoFreq", 0.1, 0.01, 20, 0.01) : si.smoo;
meanDelay = hslider("meanDelay", 5, 2, 100, 0.1) : si.smoo;
depth = hslider("depth", 0.995, 0, 0.995, 0.001) : si.smoo;
feedback = hslider("feedback", 0, 0, 0.99, 0.01) : si.smoo;

// Max delay in samples (100ms at 48kHz + margin)
maxDelay = 8192;

// LFO-modulated delay with feedback
varDelay = + ~ (de.fdelay(maxDelay, delTime) * feedback) : de.fdelay(maxDelay, delTime)
with {
    meanSamples = meanDelay * 0.001 * ma.SR;
    lfo = os.osc(lfoFreq);
    delTime = max(1, meanSamples + lfo * meanSamples * depth);
};

// Dry/wet mix (50/50)
process = _ <: _, varDelay :> *(0.5);
