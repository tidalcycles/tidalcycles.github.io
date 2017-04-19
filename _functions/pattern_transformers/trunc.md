---
title: trunc
category: pattern_transformers
---

~~~~ haskell
trunc :: Pattern Time -> Pattern a -> Pattern a
~~~~

Truncates a pattern so that only a fraction of the pattern is played. 
The following example plays only the first three quarters of the pattern:

~~~~ haskell
d1 $ trunc 0.75 $ sound "bd sn*2 cp hh*4 arpy bd*2 cp bd*2"
~~~~
{: .render }

You can also pattern the first parameter, for example to cycle through three values, one per cycle:

~~~~ haskell
d1 $ trunc "<0.75 0.25 1>" $ sound "bd sn:2 [mt rs] hc"
~~~~
{: .render }
