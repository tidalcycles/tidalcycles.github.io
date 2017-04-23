---
title: smash
category: pattern_transformers
---

~~~~ haskell
smash :: Int -> [Time] -> ParamPattern -> ParamPattern
~~~~

Smash is a combination of `spread` and `striate` - it cuts the samples
into the given number of bits, and then cuts between playing the loop
at different speeds according to the values in the list.

So this:

~~~~ haskell
d1 $ smash 3 [2,3,4] $ sound "ho ho:2 ho:3 hc"
~~~~
{: .render }

Is a bit like this:

~~~~ haskell
d1 $ slow "<2 3 4>" $ striate 3 $ sound "ho ho:2 ho:3 hc"
~~~~
{: .render }
