---
category: effects
layout: default
---

TidalCycles has a number of effects that you can apply to sounds. Some
of them do simple things like change volume, and others do more
complex things like add delay or distortion.

You use an effect by adding the `#` operator between your sound pattern and
the effect:

~~~haskell
d1 $ sound "bd*4" # crush "4"
~~~
{: .render}

The above code adds a bitcrushing effect with a value of 4 (which means, really grungy).

You can chain multiple effects together, separating them again with the `#`
operator:

~~~haskell
d1 $ sound "bd*4" # crush "4" # speed "2"
~~~
{: .render}

The code above both bitcrushes and speeds up sample playback (which increases the 'pitch').

### Effects are patterns too

You may notice that the values of effects are specified in double
quotes. This means that you can pattern the effect values too:

~~~haskell
d1 $ sound "bd*4" # gain "1 0.8 0.5 0.7"
~~~
{: .render}

The above `gain` effect changes how loud the sample is, good for patterns of emphasis as above. Effect patterns follow all the same grouping rules as sound patterns:

~~~haskell
d1 $ sound "bd*4 sn*4" # gain "[[1 0.8]*2 [0.5 0.7]]/2"
~~~
{: .render}

And you can also apply functions to effect patterns:

~~~haskell
d1 $ sound "bd*4" # gain (every 3 (rev) $ "1 0.8 0.5 0.7")
~~~
{: .render}

> Like with the `sound` example earlier, you must use parenthesis after `gain`
> in order to specify a function on the `gain` pattern.

### Effect pattern order

You can specify the effect before the sound pattern:

~~~haskell
d1 $ gain "1 0.8 0.5 0.7" # sound "bd"
~~~
{: .render}

The order that you put things matters; the structure of the pattern is given by 
the pattern on the left of the `#`. In this case, only one `bd` sound is given, 
but you hear four, because the structure comes from the `gain` pattern on the left.

### Modifying effect values

The `#` operator is just a shortcut to a longer form of operator called `|=|`.
The `|=|` operator means something special about combining patterns, but we'll
cover that later. All you need to know right now is that `|=|` will set an
effect's value equal to a pattern.

However, you can also change an effect value on the other side of a pattern:

~~~haskell
d1 $ (|=| speed "2") $ sound "arpy*4" |=| speed "1"
~~~
{: .render}

In the code above, the left-most effect overrides the original effect
that was specified on the right. In this case, `speed` will always equal 2.

You can do this conditionally:

~~~haskell
d1 $ every 2 (|=| speed "2") $ sound "arpy*4" |=| speed "1"
~~~
{: .render}

There are other types of operators that allow you to perform arithmetic:

~~~haskell
|+|
|-|
|*|
|/|
~~~

For example, using `|+|` will perform an _addition_ operation and _add_ to
an original value:

~~~haskell
d1 $ every 2 (|+| speed "1") $ sound "arpy*4" |=| speed "1"
~~~
{: .render}

> The code above results in a speed of "2" every other cycle.

The following will multiply values:

~~~haskell
d1 $ every 2 (|*| speed "1.5") $ sound "arpy*4" |=| speed "1"
~~~
{: .render}

More complex patterns and chaining can be done, and with any effect, of course:

~~~haskell
d1 $ every 3 (|-| up "3") $ every 2 (|+| up "5") $ sound "arpy*4" |=| up "0 2 4 5"
~~~
{: .render}

### Some Common Effects

Here is a quick list of some effects you can use in Tidal (the full list is
available in the Reference section):

- gain (changes volume, values from 0 to 1)
- pan (pans sound right and left, values from 0 to 1)
- shape (a type of amplifier, values from 0 to 1)
- vowel (a vowel formant filter, values include a, e, i, o, and u)
- speed (changes playback speed of a sample, see below)
