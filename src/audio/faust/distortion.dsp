import("stdfaust.lib");

distoType = nentry("type", 0, 0, 3, 1);
drive = hslider("drive", 0.5, 0, 1, 0.01) : si.smoo;
filterOn = checkbox("filterOn");
cutoff = hslider("cutoff", 5000, 100, 20000, 1) : si.smoo;

preGain = 1 + drive * 99;

// Distortion algorithms
clip(x) = max(-1, min(1, x));
rectify(x) = abs(x);
arctanDist(x) = atan(x * 3) / atan(3);
waveshape(x) = x - (x * x * x) / 3;

// Select distortion type using ba.selectn
disto = _ * preGain <: clip, rectify, arctanDist, waveshape : ba.selectn(4, distoType);

// Optional lowpass filter
output = _ <: *(1 - filterOn), (fi.lowpass(2, cutoff) : *(filterOn)) :> _;

process = _ : disto : output;
