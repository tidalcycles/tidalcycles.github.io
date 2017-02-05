---
title: scramble
category: pattern_transformers
---

~~~~ haskell
scramble :: Int -> Pattern a -> Pattern a
~~~~

`scramble n p` divides the pattern `p` into `n` equal parts, and then creates a new pattern each cycle by randomly selecting
from the parts. This could also be called "sampling with replacement".  For example, 

~~~~ haskell
d1 $ sound $ scramble 3 "bd sn hh"
~~~~

will sometimes play `"sn bd hh"` or `"hh sn bd"`, but can also play `"bd sn bd"` or `"hh hh hh"`, because it can make
any random combination of the three parts.
