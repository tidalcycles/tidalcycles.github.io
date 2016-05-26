---
title: when
category: conditional
---

~~~haskell
when :: (Int -> Bool) -> (Pattern a -> Pattern a) ->  Pattern a -> Pattern a
~~~

Only `when` the given test function returns `True` the given pattern transformation is applied. The test function will be called with the current cycle as a number.

~~~haskell
d1 $ when ((elem '4').show)
  (striate 4)
  $ sound "hh hc"
~~~
{: render-block }

The above will only apply `striate 4` to the pattern if the current cycle number contains the number 4. So the fourth cycle will be striated and the fourteenth and so on. Expect lots of striates after cycle number 399.