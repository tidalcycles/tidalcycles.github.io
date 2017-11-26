---
title: ur
category: compositions
---

**Experimental**

The `ur'` function is currently experimental and may change in future versions of Tidalcycles.

~~~~ haskell
ur' :: Time -> Pattern String -> [(String, Pattern a)] -> [(String, Pattern a -> Pattern a)] -> Pattern a
~~~~

`ur'` allows for the meta-composition of patterns. The first argument is a number of cycles
that the `ur'` function loops at. The function will automatically split up the patterns defined
across that number of cycles. The second argument is a pattern that defines how to compose
the patterns to be defined. The third argument is a named array of Tidal patterns. The fourth argument is a named array of transition functions.

~~~~ haskell
d1 $ ur' 4 "[bd1 sn1]"
  [("bd1", n "9 9 9 9" # s "bd"),
   ("sn1", n "1 1 1 1" # s "sn")]
~~~~
{: .render}

This will play the `bd1` pattern for 2 cycles and the `sn1` pattern for 2 cycles.

~~~~ haskell
d1 $ ur' 4 "[bd1 sn1:double]"
  [("bd1", n "9 9 9 9" # s "bd"),
   ("sn1", n "1 1 1 1" # s "sn")]
  [("double", fast 2)]
~~~~
{: .render}

This example is almost the same as the previous except that `sn1:double` says to apply the
`double` transition to the `sn1` pattern.  The `sn1` pattern will be sped up by a factor of 2.

The patterns can be as simple or complex as needed.

~~~~ haskell
d1 $ ur' 4 "[[bd1, sn1] bd1 [bd1, sn1] sn1:double]"
  [("bd1", n "9 ~ 9 ~" # s "bd"),
   ("sn1", n "~ 1 ~ 1" # s "sn")]
  [("double", fast 2)]
~~~~
{: .render}

In this example, both the bass drum and snare will play in the first cycle, just the bass
drum in the second, both again in the third, and then a sped up snare drum in the fourth
cycle.  Then the four cycles repeat.
