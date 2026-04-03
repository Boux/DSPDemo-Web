import("stdfaust.lib");

roomSize = hslider("roomSize", 0.5, 0, 1, 0.01) : si.smoo;
damping = hslider("damping", 0.5, 0, 1, 0.01) : si.smoo;
wet = hslider("wet", 0.25, 0, 1, 0.01) : si.smoo;

// Schroeder Model 2: 4 series allpass with lowpass damping per stage
sizeFactor = 0.5 + roomSize * 1.0;
dampFactor = 1.75 - damping * 1.5;

// Allpass with damping lowpass after each stage
apd(dt, fb, cutoff) = fi.allpass_fcomb(4096, dt, fb) : fi.lowpass(1, cutoff);

chain = apd(900*sizeFactor, 0.7, dampFactor*5000)
      : apd(2932*sizeFactor, 0.7, dampFactor*3000)
      : apd(1544*sizeFactor, 0.7, dampFactor*1500)
      : apd(1014*sizeFactor, 0.7, dampFactor*500);

process = _ <: *(1-wet), (chain : *(wet*0.4)) :> _;
