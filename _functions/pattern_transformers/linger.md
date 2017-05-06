---
title: linger
category: pattern_transformers
---

~~~~ haskell
linger :: Pattern Time -> Pattern a -> Pattern a
~~~~

Similar to [trunc](#trunc), in that it truncates a pattern so that
only the first fraction of the pattern is played. However unlike
`trunk`, `linger` repeats that part to fill the remainder of the cycle.

The following example plays only the first three quarters of the pattern. For example this repeats the first quarter, so you only hear a single repeating note:

~~~~ haskell
d1 $ linger 0.25 $ n "0 2 [3 4] 2" # sound "arpy"
~~~~
{: .render }

or slightly more interesting, applied only every fourth cycle:

~~~~ haskell
d1 $ every 4 (linger 0.25) $ n "0 2 [3 4] 2" # sound "arpy"
~~~~
{: .render }

or to a chopped-up sample:

~~~~ haskell
d1 $ every 2 (linger 0.25) $ loopAt 2 $ chop 8 $ sound "breaks125"
~~~~
{: .render }


You can also pattern the first parameter, for example to cycle through three values, one per cycle:

~~~~ haskell
d1 $ trunc "<0.75 0.25 1>" $ sound "bd sn:2 [mt rs] hc"
~~~~
{: .render }

~~~~ haskell
d1 $ linger "<0.25 0.5 1>" $ loopAt 2 $ chop 8 $ sound "breaks125"
~~~~
{: .render }
