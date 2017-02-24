---
title: delta
category: synth_parameters
---

Primarily useful for softsynths in SuperDirt, `delta` allows you to override the duration of notes.  Normally, Tidal informs
SuperDirt of how much "space" in the cycle each note takes up, for example in the pattern

~~~haskell
d1 $ n "[[a b] c]" # s "supersaw"
~~~

"a" and "b" have a 1/4 cycle duration, and "c" has 1/2 cycle duration, and these values are converted to times using the
current `cps`.  You can use the `delta` parameter to override these time calculations.

Also, if specified, `legato` will multiply these values.
