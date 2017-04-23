---
title: gap
category: sample
---

~~~~ haskell
gap :: Int -> ParamPattern -> ParamPattern
~~~~

`gap` is similar to `chop` in that it granualizes every sample in place as it is played, 
but every other grain is silent. Use an integer value to specify how many granules 
each sample is chopped into:

~~~~ haskell
d1 $ gap 8 $ sound "jvbass"
~~~~

~~~~ haskell
d1 $ gap 16 $ sound "[jvbass drum:4]"
~~~~

You can also provide a pattern here:

~~~~ haskell
d1 $ gap "<32 16 8 4>" $ sound "rave"
~~~~
