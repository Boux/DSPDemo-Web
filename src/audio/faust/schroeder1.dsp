import("stdfaust.lib");

roomSize = hslider("roomSize", 0.5, 0, 1, 0.01) : si.smoo;
damping = hslider("damping", 0.5, 0, 1, 0.01) : si.smoo;
wet = hslider("wet", 0.25, 0, 1, 0.01) : si.smoo;

// Schroeder Model 1: 4 parallel combs -> 2 series allpass -> lowpass
sizeFactor = 0.7 + roomSize * 0.6;
dampFreq = 200 + (1 - damping) * 9800;

// Lowpass comb filter: delay with filtered feedback
lpcf(dt, fb) = + ~ (de.fdelay(4096, dt) : fi.lowpass(1, dampFreq) : *(fb));

// 4 parallel lowpass comb filters
combs = _ <: lpcf(1310*sizeFactor, 0.805),
              lpcf(1636*sizeFactor, 0.827),
              lpcf(1812*sizeFactor, 0.783),
              lpcf(604*sizeFactor, 0.764)
         :> *(0.25);

// 2 series allpass
ap(dt) = fi.allpass_fcomb(4096, dt, -0.7);
allpasses = ap(225*sizeFactor) : ap(556*sizeFactor);

process = _ <: *(1-wet), (combs : allpasses : *(wet)) :> _;
