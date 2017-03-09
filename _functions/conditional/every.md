---
title: every
category: conditional
---

~~~~ haskell
every :: Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
~~~~

`every` transforms a pattern with a function, but only for the given number of repetitions.

Example:

~~~~ haskell
d1 $ every 3 (density 2) $ sound "bd sn kurt"
~~~~

There is a primed variant with an offset

~~~~ haskell
every' :: Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
~~~~

So `every' 4 0` will transform a pattern on cycles 0,4,8,... whereas `every' 4 2` will transform the pattern on
cycles 2,6,10,...

Also, see `whenmod`.
