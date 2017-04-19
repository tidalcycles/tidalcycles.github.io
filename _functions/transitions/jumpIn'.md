---
title: jumpIn'
category: transitions
---

~~~haskell
jumpIn' :: Int -> Time -> [ParamPattern] -> ParamPattern
~~~

Does a sharp "jump" cut transition after at least the specified number of cycles have passed, but only transitions at a cycle boundary (e.g. when the cycle count is an integer)
