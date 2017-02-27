---
title: speed
category: synth_parameters
---
A pattern of numbers which multiplies the speed of sample playback, where `1` means normal speed.  Can be used as a cheap way
of changing pitch for samples.  Negative numbers will cause the sample to be played backwards.

When using this method to alter sample pitch, there's a convenience parameter `up`, which uses units of semitones instead of
multiplicative values.  For example,

~~~haskell
d1 $ s "arpy*4" # up "0 4 7 0"
~~~

will play the "arpy" sample at the orginal speed, then up 4 semitones (a third), then up 7 semitones (a fifth), 
then once more at the original speed.

The behavior of `speed` can be changed by the [`unit` parameter](unit).
