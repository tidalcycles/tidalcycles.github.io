---
title: every
category: conditional
---

~~~~ {haskell}
every :: Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
every' :: [Int] -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
~~~~

`every` transforms a pattern with a function, but only for the given number of repetitions.

Example:

~~~~ {haskell}
d1 $ every 3 (density 2) $ sound "bd sn kurt"
~~~~

`every'` does the same, except a list of repetition numbers is given:

~~~~ {haskell}
d1 $ every' [3, 4, 5] (density 2) $ sound "bd sn kurt"

-- this is equal to:
d1 $ every 3 (density 2) $ every 4 (density 2) $ every 5 (density 2) $ sound "bd sn kurt"
~~~~

Also, see `whenmod`.
