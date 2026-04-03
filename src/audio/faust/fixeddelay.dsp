import("stdfaust.lib");

delayMs = hslider("delayMs", 5, 0.02, 100, 0.01) : si.smoo;
feedback = hslider("feedback", 0, 0, 0.99, 0.01) : si.smoo;

maxDelay = 8192;

fixedDelay = + ~ (de.fdelay(maxDelay, delaySamples) * feedback)
with {
    delaySamples = max(1, delayMs * 0.001 * ma.SR);
};

process = _ <: _, fixedDelay :> *(0.5);
