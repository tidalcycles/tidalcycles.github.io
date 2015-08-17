---
title: rand
category: utility
---

`rand` generates a random number between 0 and 1, and can
be used to create random values for functions that would
otherwise generate continuous pattern values:

~~~~{haskell}
d1 $ sound "bd*8" |+| pan (scale 0 1 $ rand)
~~~~

