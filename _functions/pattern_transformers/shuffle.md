---
title: shuffle
category: pattern_transformers
---

~~~~ haskell
shuffle :: Int -> Pattern a -> Pattern a
~~~~

`shuffle n p` divides the pattern `p` into `n` equal parts, and then creates a new pattern each cycle by selecting a
random permutation of those parts. This could also be called "sampling without replacement".  For example, 

~~~~ haskell
d1 $ sound $ shuffle 3 "bd sn hh"
~~~~
{: .render }

will sometimes play `"sn bd hh"` or `"hh sn bd"` or `"hh bd sn"`.  But it can **never** play `"hh hh hh"`, because that isn't
a permutation of the three parts.
