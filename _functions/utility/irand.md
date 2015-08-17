---
title: irand
category: utility
---

`irand` generates a random integer. Notably used to pick a random
sample from a folder:

~~~~{haskell}
d1 $ sound (samples "drum*4" (irand))
~~~~

