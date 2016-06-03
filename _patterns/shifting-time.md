---
category: shifting_time
layout: default
---

You can use the `~>` and `<-` functions to shift patterns forwards or backwards in time, respectively. With each of these functions, you can specify an amount, in cycle units.

~~~haskell
d1 $ (0.25 <~) $ sound "bd*2 cp*2 hh sn"
d1 $ (0.25 ~>) $ sound "bd*2 cp*2 hh sn"
~~~

The above code shifts the patterns over by one quarter of a cycle.

You can hear this shifting effect best when applying it conditionally. For example, the below shifts the pattern every third cycle:

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

However, in the above case every cycle is the same, so you won't here a difference between shifting it `1` or `1000` cycles.

You can also express time as a fraction, for example `1%4` instead of `0.25`. However, due to the way Haskell's parser works, you'll need to put this in parenthesis:

~~~haskell
d1 $ every 3 ((1%4) <~) $ sound "bd*2 cp*2 hh sn"
~~~
