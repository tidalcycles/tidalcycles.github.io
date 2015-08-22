---
title: irand
category: utility
---

`irand n` generates a pattern of random integers from `0` to `n-1`. Notably used to pick a random
samples from a folder:

~~~~{haskell}
d1 $ sound (samples "drum*4" (irand 5))
~~~~

