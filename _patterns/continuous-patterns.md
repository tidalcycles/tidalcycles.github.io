---
category: continuous
layout: default
---

So far we've only been working with *discrete* patterns, by which we mean patterns which containing events which begin and end. Tidal also supports *continuous* patterns which instead vary continually over time. You can create continuous patterns using functions which give sine, saw, triangle, and square waves:

~~~haskell
d1 $ sound "bd*16" # pan sine1
~~~
{: .render}

The code above uses the `sine1` function to generate a sine
wave oscillation of values between 0 and 1 for the `pan` values, so the bass drum moves smoothly between the left and right speakers.

In addition to `sine1`, there is also a `sine` function. What is the difference?

- `sine` produces values between -1 and 1
- `sine1` produces values between 0 and 1

Thus, the "1" suffix means only positive values.

In addition to the `sine`/`sine1` functions, Tidal also has `saw`/`saw1`,
`tri`/`tri1`, and `square`/`square1`.

Just like discrete patterns, you can control the speed of continuous patterns with `slow` or `density`:

~~~haskell
d1 $ sound "bd*16" # pan (slow 8 $ saw1)
~~~
{: .render}
~~~haskell
d1 $ sound "bd*8 sn*8" # pan (density 1.75 $ tri1)
~~~
{: .render}
~~~haskell
d1 $ sound "bd*8 sn*8" # speed (density 2 $ tri)
~~~
{: .render}

You can also combine them in different ways:

~~~haskell
d1 $ sound "bd*16" # pan (slowcat [sine1, saw1, square1, tri1])
~~~
{: .render}
~~~haskell
d1 $ sound "sn:2*16" # (speed $ scale 0.5 3 sine1) |*| (speed $ slow 4 saw1)
~~~
{: .render}

### Scaling Oscillation

You can tell the oscillation functions to scale themselves and oscillate
between two values:

~~~haskell
d1 $ sound "bd*8 sn*8" # speed (scale 1 3 $ tri1)
~~~
{: .render}
~~~haskell
d1 $ sound "bd*8 sn*8" # speed (slow 4 $ scale 1 3 $ tri1)
~~~
{: .render}

You can also scale to negative values, but make sure to wrap negative values in
parens (otherwise the interpreter thinks you're trying to subtract `2` from something):

~~~haskell
d1 $ sound "bd*8 sn*8" # speed (scale (-2) 3 $ tri1)
~~~
{: .render}

This technique works well for a slow low-pass filter cutoff:

~~~haskell
d1 $ sound "hh*32" # cutoff (scale 300 1000 $ slow 4 $ sine1) # resonance "0.4"
~~~
{: .render}
~~~haskell
d1 $ sound "hh*32" # cutoff (scale 0.001 0.1 $ slow 4 $ sine1) # resonance "0.1"
~~~
{: .render}

> NOTE 1: If you're using SuperDirt to produce sound (the default install choice), 
> `cutoff` is specified in Hertz, as in the first example above. 
> If you're using the older "classic" dirt, then you will instead need to specify
> cutoff between 0 and 1, as in the second example.

> NOTE 2: Despite the fact that the oscillator functions produce continuous values,
> you still need to map them to discrete sound events.
