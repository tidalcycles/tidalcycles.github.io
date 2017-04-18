---
category: continuous
layout: default
---

So far we've only been working with *discrete* patterns, by which we mean patterns which containing events which begin and end. Tidal also supports *continuous* patterns which instead vary continually over time. You can create continuous patterns using functions which give sine, saw, triangle, and square waves:

~~~haskell
d1 $ sound "bd*16" # pan sine
~~~
{: .render}
 
The code above uses the `sine` pattern to specify a sine
wave oscillation of values between 0 and 1 for the `pan` values, so the bass drum moves smoothly between the left and right speakers.

> Tidal used to have `sine` and `sine1` patterns with different ranges, but now they are aliases, with both giving a range from 0 to 1.

In addition to the `sine` pattern, Tidal also has `saw`, `tri`, and `square`, for sawtooth, triangle and square waves respectively.

Just like discrete patterns, you can control the speed of continuous patterns with `slow` or `density`:

~~~haskell
d1 $ sound "bd*16" # pan (slow 8 $ saw)
~~~
{: .render}

~~~haskell
d1 $ sound "bd*8 sn*8" # pan (density 1.75 $ tri)
~~~
{: .render}

~~~haskell
d1 $ sound "bd*8 sn*8" # speed (density 2 $ tri)
~~~
{: .render}

You can also combine them in different ways:

~~~haskell
d1 $ sound "bd*16" # pan (slowcat [sine, saw, square, tri])
~~~
{: .render}

~~~haskell
d1 $ sound "sn:2*16" # speed ((scale 0.5 3 sine) * (slow 4 saw))
~~~
{: .render}

### Scaling Oscillation

You can tell the oscillation functions to scale themselves and oscillate
between two values:

~~~haskell
d1 $ sound "bd*8 sn*8" # speed (scale 1 3 $ tri)
~~~
{: .render}

~~~haskell
d1 $ sound "bd*8 sn*8" # speed (slow 4 $ scale 1 3 $ tri)
~~~
{: .render}

You can also scale to negative values, but make sure to wrap negative values in
parens (otherwise the interpreter thinks you're trying to subtract `2` from something):

~~~haskell
d1 $ sound "bd*8 sn*8" # speed (scale (-2) 3 $ tri)
~~~
{: .render}

This technique works well for a slow low-pass filter cutoff:

~~~haskell
d1 $ sound "hh*32" # cutoff (scale 300 1000 $ slow 4 $ sine) # resonance "0.4"
~~~
{: .render}

> NOTE: Despite the fact that these oscillator patterns produce continuous values,
> you still need to combine them with discrete sound patterns.
