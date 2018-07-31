---
category: shifting_time
layout: default
---

You can use the `~>` and `<~` functions to shift patterns forwards or backwards in time, respectively. With each of these functions, you can specify an amount, in cycle units.

~~~haskell
d1 $ (0.25 <~) $ sound "bd*2 cp*2 hh sn"
~~~
{: .render}

~~~haskell
d1 $ (0.25 ~>) $ sound "bd*2 cp*2 hh sn"
~~~
{: .render}

The above code shifts the patterns over by one quarter of a cycle.

You can hear this shifting effect best when applying it conditionally. For example, the below shifts the pattern every third cycle:

~~~haskell
d1 $ every 3 (0.25 <~) $ sound "bd*2 cp*2 hh sn"
~~~
{: .render}

~~~haskell
d1 $ every 3 (0.25 ~>) $ sound "bd*2 cp*2 hh sn"
~~~

{: .render}

You can shift patterns as little or as much as you'd like:

~~~haskell
d1 $ every 3 (0.0625 <~) $ sound "bd*2 cp*2 hh sn"
~~~
{: .render}

~~~haskell
d1 $ every 3 (1000 ~>) $ sound "bd*2 cp*2 hh sn"
~~~
{: .render}

~~~haskell
d1 $ every 3 (1000.125 ~>) $ sound "bd*2 cp*2 hh sn"
~~~
{: .render}

However, in the above case every cycle is the same, so you won't hear a difference between shifting it `1` or `1000` cycles.

You can also specify a pattern for the shift amount:

~~~haskell
d1 $ "[0 0.25]/4" <~ (sound "bd*2 cp*2 hh sn")
~~~
{: .render}
