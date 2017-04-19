---
title: superimpose
category: compositions
---

~~~~haskell
superimpose :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a
~~~~

`superimpose` plays a modified version of a pattern at the same time as the original pattern,
resulting in two patterns being played at the same time.

~~~~haskell
d1 $ superimpose (fast 2) $ sound "bd sn [cp ht] hh"
~~~~
{: .render}
~~~~haskell
d1 $ superimpose ((# speed "2") . (0.125 <~)) $ sound "bd sn cp hh"
~~~~
{: .render}
