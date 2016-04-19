---
category: shifting_time
layout: default
---


You can use the `<~` and `~>` functions to shift time to the left and right.
With each of these functions, you can specify an amount, in cycle units.

~~~haskell
d1 $ (0.25 <~) $ sound "bd*2 cp*2 hh sn"
d1 $ (0.25 ~>) $ sound "bd*2 cp*2 hh sn"
~~~

The above code shifts the patterns over by 0.25 cycles.

However, it's easier (and more practical?) to hear the shifting effect when
applying it conditionally every few cycles:

~~~haskell
d1 $ every 3 (0.25 <~) $ sound "bd*2 cp*2 hh sn"
d1 $ every 3 (0.25 ~>) $ sound "bd*2 cp*2 hh sn"
~~~

You can shift patterns as little or as much as you'd like:

~~~haskell
d1 $ every 3 (0.0625 <~) $ sound "bd*2 cp*2 hh sn"
d1 $ every 3 (1000 ~>) $ sound "bd*2 cp*2 hh sn"
d1 $ every 3 (1000.125 ~>) $ sound "bd*2 cp*2 hh sn"
~~~
