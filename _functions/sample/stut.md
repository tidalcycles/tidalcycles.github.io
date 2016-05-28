---
title: stut
category: sample
---


~~~~ haskell
stut :: Integer -> Double -> Rational -> OscPattern -> OscPattern
~~~~

Stut applies a type of delay to a pattern. It has three parameters, 
which could be called depth, feedback and time. Depth is an integer
and the others floating point. This adds a bit of echo:

~~~~ haskell
d1 $ stut 4 0.5 0.2 $ sound "bd sn"
~~~~

The above results in 4 echos, each one 50% quieter than the last, 
with 1/5th of a cycle between them. It is possible to reverse the echo:

~~~~ haskell
d1 $ stut 4 0.5 (-0.2) $ sound "bd sn"
~~~~

### stut'

~~~haskell
stut' :: Integer -> Time -> (ParamPattern -> ParamPattern) -> ParamPattern -> ParamPattern
~~~

Instead of just decreasing volume to produce echoes, `stut'` allows to apply a function for each step and overlays the result delayed by the given time.

~~~haskell
d1 $ stut' 2 (1%3) (# vowel "{a e i o u}%2") $ sound "bd sn"
~~~
{: render-lines }

In this case there are two _overlays_ delayed by 1/3 of a cycle, where each has the `vowel` filter applied.
