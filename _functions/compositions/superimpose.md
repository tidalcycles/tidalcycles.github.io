---
title: superimpose
category: compositions
---

~~~~haskell
superimpose f p = stack [p, f p]
~~~~

`superimpose` plays a modified version of a pattern at the same time as the original pattern,
resulting in two patterns being played at the same time.

~~~~haskell
d1 $ superimpose (density 2) $ sound "bd sn [cp ht] hh"
d1 $ superimpose ((# speed "2") . (0.125 <~)) $ sound "bd sn cp hh"
~~~~
