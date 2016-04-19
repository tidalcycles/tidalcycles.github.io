---
title: run
category: utility
---

`run n` generates a pattern representing a cycle of numbers from 0 to n-1 inclusive. Notably used to 'run' through a folder of samples in order:

~~~~haskell
d1 $ sound (samples "drum*4" (run 5))
~~~~
