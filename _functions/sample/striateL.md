---
title: striateL
category: sample
---

~~~~ {haskell}
striateL :: Int -> Int -> OscPattern -> OscPattern
~~~~

Just like `striate`, but also loops each sample chunk a number of times specified in the second argument.
The primed version is just like `striate'`, where the loop count is the third argument. For example:

~~~~ {haskell}
d1 $ striateL' 3 0.125 4 $ sound "feel sn:2"
~~~~

Like `striate`, these use the `begin` and `end` parameters internally, as well as the `loop` parameter for these versions.
