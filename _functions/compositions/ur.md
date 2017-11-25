---
title: ur
category: compositions
---

~~~~ haskell
ur :: Time -> Pattern String -> [Pattern a] -> Pattern a
~~~~

`ur` allows for the meta-composition of patterns. The first argument is a number of cycles
that the `ur` function loops at. The function will automatically split up the patterns defined
across that number of cycles. The second argument is a pattern that defines how to compose
the patterns to be defined. The third argument is an array of Tidal patterns.

In the following code

~~~~ haskell
d1 $ ur 2 "[0 1]"
  [(n "9 9 9 9" # s "bd"),
   (n "1 1 1 1" # s "sn")]
~~~~
{: .render}

we have defined a pattern 2 cycles long. The pattern is `"[0 1]"`. Tidal splits the event `0` and `1`
across 2 cycles so each plays for 1 cycle. Event `0` is the first pattern in the pattern array and `1`
is the second. So in this case we hear 4 bass drum kicks then 4 snare hits and then it repeats.

The meta-pattern can be extended to have more than 2 events in it which will truncate each defined
pattern in order to fit into the 2 cycles defined.

~~~~ haskell
d1 $ ur 2 "[0 1 0 1]"
  [(n "9 9 9 9" # s "bd"),
   (n "1 1 1 1" # s "sn")]
~~~~
{: .render}

With the truncation, we hear 2 bass drum kicks followed by 2 snare hits which loops.

~~~~ haskell
ur' :: Time -> Pattern String -> [(String, Pattern a)] -> [(String, Pattern a -> Pattern a)] -> Pattern a
~~~~

`ur'` is similar to `ur`, but it allows the ability to give names to patterns and also allows for
named transitions.

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

In this example, both the bass drum and snare will play in the first cycle, just the bass
drum in the second, both again in the third, and then a sped up snare drum in the fourth
cycle.  Then the four cycles repeat.
