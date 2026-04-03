import("stdfaust.lib");

roomSize = hslider("roomSize", 0.5, 0, 1, 0.01) : si.smoo;
damping = hslider("damping", 0.5, 0, 1, 0.01) : si.smoo;
wet = hslider("wet", 0.25, 0, 1, 0.01) : si.smoo;

// Feedback Delay Network using Faust's built-in Zita reverb
// Map roomSize to decay times, damping to HF damping
t60low = 1 + roomSize * 7;       // 1-8 seconds low freq decay
t60mid = 0.5 + roomSize * 4;     // 0.5-4.5 seconds mid freq decay
hfDamp = 2000 + (1-damping)*6000; // 2000-8000 Hz crossover

zita = re.zita_rev1_stereo(0.02, 200, hfDamp, t60low, t60mid, 48000);

process = _ <: *(1-wet), (_ <: zita :> *(wet)) :> _;
