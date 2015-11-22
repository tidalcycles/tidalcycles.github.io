---
title: scale
category: utility
---

`scale` will take a pattern which goes from 0 to 1 (like `sine1`), and scale it to a different range - between the first and second arguments. In the below example, `scale 1 1.5` shifts the range of `sine1` from 0 - 1 to 1 - 1.5.

~~~~{haskell}
d1 $ jux (iter 4) $ sound "arpy arpy:2*2"
  |+| speed (slow 4 $ scale 1 1.5 sine1)
~~~~
