---
title: fit
category: pattern_transformers
---

~~~~ {haskell}
fit :: Int -> [a] -> Pattern Int -> Pattern a
~~~~

The `fit` function takes a pattern of integer numbers, which are used to select values from the given list. What makes this a bit strange is that only a given number of values are selected each cycle. For example:

~~~~ {haskell}
d1 $ sound (fit 3 ["bd", "sn", "arpy", "arpy:1", "casio"] "0 [~ 1] 2 1")
~~~~

The above fits three samples into the pattern, i.e. for the first cycle this will be `"bd"`, `"sn"` and `"arpy"`, giving the result `"bd [~ sn] arpy sn"` (note that we start counting at zero, so that `0` picks the first value). The following cycle the *next* three values in the list will be picked, i.e. `"arpy:1", "casio" and "bd", giving the pattern `"arpy:1 [~ casio] bd casio"` (note that the list wraps round here). 
