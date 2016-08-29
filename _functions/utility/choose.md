---
title: choose
category: utility
---

`choose` randomly picks an element from the given list:

~~~~haskell
d1 $ sometimes (|+| up (choose[3, 7, 2, 9, (-3), (-7), (-9), (-2)])) $ n "~ 0 ~ 0" # s "sid"
~~~~
