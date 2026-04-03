import("stdfaust.lib");

baseFreq = hslider("baseFreq", 100, 40, 1000, 1) : si.smoo;
spread = hslider("spread", 1.3, 1.1, 4, 0.01) : si.smoo;
feedback = hslider("feedback", 0.5, 0, 0.99, 0.01) : si.smoo;

// Nyquist-safe second-order allpass: clamp frequency below 0.45 * SR
ap2(fc) = fi.tf2(b0, b1, b2, a1, a2) with {
    safefc = min(fc, 0.45 * ma.SR);
    w = 2.0 * ma.PI * safefc / ma.SR;
    cw = cos(w);
    alpha = sin(w) / 2.0;
    a0r = 1.0 / (1.0 + alpha);
    b0 = (1.0 - alpha) * a0r;
    b1 = -2.0 * cw * a0r;
    b2 = 1.0;
    a1 = b1;
    a2 = b0;
};

// 12 allpass filters in series, each frequency clamped to safe range
chain = seq(i, 12, ap2(baseFreq * (spread ^ i)));

// Phaser with feedback
process = _ : (+ ~ (chain : *(feedback))) : *(0.5);
