---
title: wash
category: transitions
---

~~~haskell
wash :: (Pattern a -> Pattern a) -> Time -> Time -> [Pattern a] -> Pattern a
~~~

Wash away the current pattern by applying a function to it over time, then switching over to the next.

~~~haskell
d1 $ sound "feel ! feel:1 feel:2"

t1 (wash (chop 8) 4) $ sound "feel*4 [feel:2 sn:2]"
~~~

Note that `chop 8` is applied to `sound "feel ! feel:1 feel:2"` for 4 cycles and then the whole pattern is replaced by `sound "feel*4 [feel:2 sn:2]`