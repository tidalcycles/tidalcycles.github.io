---
category: randomness
layout: default
---


Tidal can produce random patterns of integers and decimals. It can also
introduce randomness into patterns by removing random events.

### Random Decimal Patterns

Use the `rand` function to create a random value between 0 and 1 (useful for
effects):

~~~haskell
d1 $ sound "arpy*4" # pan (rand)
~~~

Similar to `run`, `rand` can also be scaled:

~~~haskell
d1 $ sound "arpy*4" # pan (scale 0.25 0.75 $ rand)
~~~

### Random Integer Patterns

Use the `irand` function to create a random integer up to a given maximum.
Perhaps the most common usage of `irand` is to produce a random pattern of
sample indices (similar to `run`):

~~~haskell
d1 $ sound $ samples "arpy*8" (irand 30)
~~~

> The code above randomly chooses from 30 samples in the "arpy" folder.

### Removing or "Degrading" Pattern events

Tidal has a few ways to randomly remove events from patterns. You can use the
shorthand `?` symbol if you want to give an event a 50/50 chance of happening
or not on every cycle:

~~~haskell
d1 $ sound "bd?"
~~~

In the code above, the "bd" sample has a 50% chance of being played on every
cycle.

You can add the `?` after the completion of any event or group in a pattern:

~~~haskell
d1 $ sound "bd*16?"
d1 $ sound "bd sn? cp hh?"
d1 $ sound "[bd sn cp hh]?"
~~~

The `?` symbol is shorthand for the `degrade` function. The two lines below
are equivalent:

~~~haskell
d1 $ sound "bd*16?"
d1 $ degrade $ sound "bd*16"
~~~

Related to `degrade` is the `degradeBy` function, where you can specify the
probability (from 0 to 1) that events will be removed from a pattern:

~~~haskell
d1 $ degradeBy 0.25 $ sound "bd*16"
~~~

There is also `sometimesBy`, which executes a function based on a probability:

~~~haskell
d1 $ sometimesBy 0.75 (slow 2) $ sound "bd*16"
~~~

The code above has a 75% chance of calling `slow 2` on every event in the
pattern.

There are other aliases for `sometimesBy`:

~~~haskell
sometimes = sometimesBy 0.5
often = sometimesBy 0.75
rarely = sometimesBy 0.25
almostNever = sometimesBy 0.1
almostAlways = sometimesBy 0.9

d1 $ sometimes (density 2) $ sound "bd*8"
d1 $ rarely (density 2) $ sound "bd*8"
~~~
