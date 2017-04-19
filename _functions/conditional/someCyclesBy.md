---
title: someCyclesBy
category: conditional
---

~~~~ haskell
someCyclesBy :: Double -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
~~~~

Similar to `sometimesBy`, but applies/doesn't apply a function on a cycle-by-cycle
basis instead of event by event.
Use `someCyclesBy` to apply a given function for some cycles, but not for others. 
For example, the 
following code results in `fast 2` being applied for about 25% of all cycles:

~~~~ haskell
d1 $ someCyclesBy 0.25 (fast 2) $ sound "bd*8"
~~~~
{: .render }

There is an alias as well:

~~~~ haskell
someCycles = someCyclesBy 0.5
~~~~
