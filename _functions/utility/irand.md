---
title: irand
category: utility
---

`irand n` generates a pattern of (pseudo-)random integers between `0`
to `n-1` inclusive. Notably used to pick a random samples from a
folder:

~~~~haskell
d1 $ sound "amencutup*8" # n (irand 8)
~~~~
{: .render }
