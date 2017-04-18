---
category: randomness
layout: default
---


Tidal can produce random patterns of integers and decimals. It can also
introduce randomness into patterns by removing random events.

### Random Decimal Patterns

You can use the `rand` function to create a random value between 0
and 1. This is useful for effects:

~~~haskell
d1 $ sound "arpy*4" # pan (rand)
~~~
{: .render}

As with `run` and all numeric patterns, the values that `rand` give you can be scaled, for example the below gives random numbers between `0.25` and `0.75`:

~~~haskell
d1 $ sound "arpy*4" # pan (scale 0.25 0.75 $ rand)
~~~
{: .render}

### Random Integer Patterns

Use the `irand` function to create a random integer up to a given maximum.
The most common usage of `irand` is to produce a random pattern of
sample indices (similar to `run`):

~~~haskell
d1 $ s "arpy*8" # n (irand 30)
~~~
{: .render}

The code above randomly chooses from 30 samples in the "arpy" folder.

> Hairy detail: `rand` and `irand` are actually *continuous* patterns,
> which in practical terms means they have infinite detail - you can
> treat them as pure information! As with all patterns they are also
> deterministic, stateless functions of time, so that if you
> retriggered a pattern from the same logical time point, exactly the
> same numbers would be produced. Furthermore, if you use a `rand` or
> `irand` in two different places, you would get the same 'random'
> pattern - if this isn't what you want, you can simply shift or slow
> down time a little for one of them, e.g. `slow 0.3 rand`.

### Removing or "Degrading" Pattern events

Tidal has a few ways to randomly remove events from patterns. You can use the
shorthand `?` symbol if you want to give an event a 50/50 chance of happening
or not on every cycle:

~~~haskell
d1 $ sound "bd? sd? sd? sd?"
~~~
{: .render}

In the code above, each `bd` and `sd` sample has a 50% chance of being played on every
cycle.

You can add the `?` after the completion of any event or group in a pattern:

~~~haskell
d1 $ sound "bd*16?"
~~~
{: .render}

~~~haskell
d1 $ sound "bd sn? cp hh?"
~~~
{: .render}

~~~haskell
d1 $ sound "[bd sn cp hh]?"
~~~
{: .render}

The `?` symbol is shorthand for the `degrade` function. The two lines below
are equivalent:

~~~haskell
d1 $ sound "bd*16?"
~~~
{: .render}

~~~haskell
d1 $ degrade $ sound "bd*16"
~~~

Related to `degrade` is the `degradeBy` function, where you can specify the
probability (from 0 to 1) that events will be removed from a pattern:

~~~haskell
d1 $ degradeBy 0.25 $ sound "bd*16"
~~~
{: .render}

There is also `sometimesBy`, which executes a function based on a probability:

~~~haskell
d1 $ sometimesBy 0.75 (# crush 4) $ sound "bd arpy sn ~"
~~~
{: .render}

The code above has a 75% chance of applying the bitcrush effect pattern `# crush 4` on every event in the sound pattern.

There are other aliases for `sometimesBy`:

~~~haskell
sometimes = sometimesBy 0.5
often = sometimesBy 0.75
rarely = sometimesBy 0.25
almostNever = sometimesBy 0.1
almostAlways = sometimesBy 0.9
~~~

e.g.:

~~~haskell
d1 $ rarely (# crush 4) $ sound "bd*8"
~~~
{: .render}
