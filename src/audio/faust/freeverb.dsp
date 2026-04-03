import("stdfaust.lib");

roomSize = hslider("roomSize", 0.5, 0, 1, 0.01) : si.smoo;
damping = hslider("damping", 0.5, 0, 1, 0.01) : si.smoo;
wet = hslider("wet", 0.33, 0, 1, 0.01) : si.smoo;

process = dm.freeverb_demo;
