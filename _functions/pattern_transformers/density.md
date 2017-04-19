---
title: fast
category: pattern_transformers
---

~~~~ haskell
fast :: Pattern Time -> Pattern a -> Pattern a
~~~~

Speed up a pattern. For example, the following will play the sound
pattern `"bd sn kurt"` twice as fast (i.e. so it repeats twice per
cycle), and the vowel pattern three times as fast:

~~~~ haskell
d1 $ sound (fast 2 "bd sn kurt")
   # fast 3 (vowel "a e o")
~~~~
{: .render }

You can also use this function by its older alias, `density`.

See also [slow](#slow).
