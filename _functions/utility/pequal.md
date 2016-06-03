---
title: pequal
category: utility
---

~~~haskell
pequal :: Ord a => Time -> Pattern a -> Pattern a -> Bool
~~~

Quickly test if the first and the second given pattern are the same in the given number of cycles. This more of a building block for higher-level tidal functions.