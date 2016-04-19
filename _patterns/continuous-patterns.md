---
category: continuous
layout: default
---

So far we've only been working with discrete values. Tidal has some helper
functions to create continuous patterns using sine, saw, triangle, and square
waves:

~~~haskell
d1 $ sound "bd*16" # pan sine1
~~~

The code above uses the `sine1` function to generate a sine wave oscillation of
values between 0 and 1 for the `pan` values.

In addition to `sine1`, there is also a `sine` function. What is the difference?

- `sine` produces values between -1 and 1
- `sine1` produces values between 0 and 1

Thus, the "1" suffix means only positive values.

In addition to the `sine/sine1` functions, Tidal also has `saw/saw1`,
`tri/tri1`, and `square/square1`.


You can control oscillation speed with `slow` or `density`:

~~~haskell
d1 $ sound "bd*16" # pan (slow 8 $ saw1)
d1 $ sound "bd*8 sn*8" # pan (density 1.75 $ tri1)
d1 $ sound "bd*8 sn*8" # speed (density 2 $ tri)
~~~

### Scaling Oscillation

You can tell the oscillation functions to scale themselves and oscillate
between two values:

~~~haskell
d1 $ sound "bd*8 sn*8" # speed (scale 1 3 $ tri1)
d1 $ sound "bd*8 sn*8" # speed (slow 4 $ scale 1 3 $ tri1)
~~~

You can also scale to negative values, but make sure to wrap negative values in
parens (because of Haskell's syntax):

~~~haskell
d1 $ sound "bd*8 sn*8" # speed (scale (-2) 3 $ tri1)
~~~

This technique works well for a slow low-pass filter cutoff:

~~~haskell
d1 $ sound "hh*32" # cutoff (scale 0.001 0.1 $ slow 4 $ sine1) # resonance "0.1"
~~~

> NOTE: despite the fact that the oscillator functions produce continuous values,
> they are still only heard during discrete sound events.
