---
title: spin
category: compositions
---

~~~~{haskell}
spin :: Int n -> Pattern a -> Pattern a
~~~~

`spin` will "spin" a layer up a pattern the given number of times, with each successive layer offset in time by an additional `1/n` of a cycle, and panned by an additional `1/n`. The result is a pattern that seems to spin around. This function works best on multichannel systems.

~~~~{haskell}
d1 $ slow 3 $ spin 4 $ sound "drum*3 tabla:4 [arpy:2 ~ arpy] [can:2 can:3]"
~~~~

