---
title: every
category: conditional
---

~~~~ {haskell}
every :: Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
~~~~

`every` transforms a pattern with a function, but only for the given number of repetitions.

Example:

~~~~ {haskell}
d1 $ every 3 (density 2) $ sound "bd sn kurt"
~~~~

Also, see `whenmod`.
