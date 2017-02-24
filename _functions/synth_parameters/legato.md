---
title: legato
category: synth_parameters
---

Controls the length of the sound relative to its "space" in the pattern.  `legato "1"` means the sound will play for the
duration of its "space" and then stop playing.  For example

~~~haskell
d1 $ sound "[[rave rave] rave]" # legato "1"
~~~
Will play the first two sounds for 1/4 of a cycle, and the third for 1/2 of a cycle.  Other values of `legato` will
multiply that duration.

For softsynths, leaving `legato` unspecified causes SuperDirt to default to `legato "1"`.  But see also the `delta` parameter.

For samples, when leaving `legato` unspecified SuperDirt will play the sample for its full duration, whatever that might be.
