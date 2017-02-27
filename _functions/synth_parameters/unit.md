---
title: unit
category: synth_parameters
---
accepts values of "r" (default), "c", or "s", which controls how the `speed` parameter is interpreted.

With `unit "r"`, `speed` multiplies the sample playback rate, so `1` is normal speed, `2` is double speed, `0.5` half
speed, etc.

With `unit "c"`, `speed` specifies the playback rate *relative to cycle length*.  So `unit "c" # speed "1"` will speed up or 
slow down the sample to fit in one cycle, `unit "c" # speed "2"` will play the sample twice as fast (so that it fits in half
a cycle), etc.  This can be useful for beat matching if your sample is a drum loop.

With `unit "s"`, `speed` specifies the playback *length* in seconds.
