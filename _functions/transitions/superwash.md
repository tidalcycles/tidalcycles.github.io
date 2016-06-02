---
title: superwash
category: transitions
---

~~~haskell
superwash :: (Pattern a -> Pattern a) -> (Pattern a -> Pattern a) -> Time -> Time -> Time -> Time -> [Pattern a] -> Pattern a
~~~

A generalization of `wash`. Washes away the current pattern after a certain delay by applying a function to it over time, then switching over to the next pattern to which another function is applied.

~~~haskell
d1 $ sound "feel*4 [feel:2 sn:2]"

t1 (superwash (# accelerate "4 2 -2 -4") (striate 2) 1 4 6) $ sound "bd [odx:2 sn/2]"
~~~

Note that after one cycle `# accelerate "4 2 -2 -4"` is applied to `sound "feel*4 [feel:2 sn:2]"` for 4 cycles and then the whole pattern is replaced by `sound "bd [odx:2 sn/2]"` and `striate 2` is applied to it for 6 cycles. Afterwards `sound "bd [odx:2 sn/2]"` is played normally.