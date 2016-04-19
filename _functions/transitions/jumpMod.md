---
title: jumpMod
category: transitions
---

~~~haskell
jumpMod :: Int -> Time -> [OscPattern] -> OscPattern
~~~

Does a sharp "jump" cut transition the next time the cycle count modulo the given integer is zero.
