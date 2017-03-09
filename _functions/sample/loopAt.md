---
title: loopAt
category: sample
---

`loopAt` makes sample fit the given number of cycles. Internally, it
works by setting the `unit` parameter to "c", changing the playback
speed of the sample with the `speed` parameter, and setting setting
the `density` of the pattern to match.

~~~~ haskell
d1 $ loopAt 4 $ sound "breaks125"
d1 $ juxBy 0.6 (|*| speed "2") $ spread (loopAt) [4,6,2,3] $ chop 12 $ sound "fm:14"
~~~~
