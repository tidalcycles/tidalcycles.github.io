---
title: weave
category: compositions
---

~~~~haskell
weave :: Rational -> OscPattern -> [OscPattern] -> OscPattern
weave' :: Rational -> OscPattern -> [OscPattern -> OscPattern] -> OscPattern
~~~~

`weave` applies a function smoothly over an array of different patterns. It uses an `OscPattern` to
apply the function at different levels to each pattern, creating a weaving effect.

~~~~haskell
d1 $ weave 3 (shape $ sine1) [sound "bd [sn drum:2*2] bd*2 [sn drum:1]", sound "arpy*8 ~"] 
~~~~
{: .render}

`weave'` is similar in that it blends functions at the same time at different amounts over a pattern:

~~~~haskell
d1 $ weave' 3 (sound "bd [sn drum:2*2] bd*2 [sn drum:1]") [density 2, (# speed "0.5"), chop 16]
~~~~
{: .render}
