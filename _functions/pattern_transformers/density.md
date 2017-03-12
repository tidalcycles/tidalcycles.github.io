---
title: density
category: pattern_transformers
---

~~~~ haskell
density :: Time -> Pattern a -> Pattern a
~~~~

Speed up a pattern. For example, the following will play the sound
pattern `"bd sn kurt"` twice as fast (i.e. so it repeats twice per
cycle), and the vowel pattern three times as fast:

~~~~ haskell
d1 $ sound (density 2 "bd sn kurt")
   # density 3 (vowel "a e o")
~~~~
{: .render }

Also, see `slow`.
