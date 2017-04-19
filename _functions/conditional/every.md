---
title: every
category: conditional
---

~~~~ haskell
every :: Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
~~~~

`every` transforms a pattern with a function every 'n'th cycle, where `n` is the value you supply as the first parameter.

For example, to make a pattern twice as fast every third cycle:

~~~~ haskell
d1 $ every 3 (fast 2) $ sound "bd sn kurt"
~~~~
{: .render}

There is a primed variant with an offset

~~~~ haskell
every' :: Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
~~~~

So `every' 4 0` will transform a pattern on cycles 0,4,8,... whereas `every' 4 2` will transform the pattern on
cycles 2,6,10,...

Also, see `whenmod`.
