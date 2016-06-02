---
title: ifp
category: conditional
---

~~~haskell
ifp :: (Int -> Bool) -> (Pattern a -> Pattern a) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
~~~

Decide whether to apply one or another function depending on the result of a test function that is passed the current cycle as a number.

~~~haskell
d1 $ ifp ((== 0).(flip mod 2))
  (striate 4)
  (# coarse "24 48") $
  sound "hh hc"
~~~
{: render-block }

This will apply `striate 4` for every _even_ cycle and aply `# coarse "24 48"` for every _odd_.

Detail: As you can see the test function is arbitrary and does not rely on anything tidal specific. In fact it uses only plain haskell functionality, that is: it calculates the modulo of 2 of the current cycle which is either 0 (for even cycles) or 1. It then compares this value against 0 and returns the result, which is either `True` or `False`. This is what the `ifp` signature's first part signifies `(Int -> Bool)`, a function that takes a whole number and returns either `True` or `False`.

