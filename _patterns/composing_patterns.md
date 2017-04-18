---
category: composing_patterns
layout: default
---


There are a few ways that you can compose new patterns from multiple other
patterns. You can concatenate or "append" patterns in serial, or you can
"stack" them and play them together in parallel.

### Concatenating patterns in serial

You can use the `fastcat` function to add patterns one after another:

~~~haskell

d1 $ fastcat [sound "bd sn:2" # vowel "[a o]/2",
              sound "casio casio:1 casio:2*2"
             ]

~~~
{: .render}

The `fastcat` function squeezes all the patterns into the space of one.
The more patterns you add to the list, the faster each pattern will be played so
that all patterns can fit into a single cycle.

~~~haskell
d1 $ fastcat [sound "bd sn:2" # vowel "[a o]/2",
              sound "casio casio:1 casio:2*2",
              sound "drum drum:2 drum:3 drum:4*2"
             ]
~~~
{: .render}

`cat` (also known as `slowcat`), will maintain the original playback speed of the patterns:

~~~haskell
d1 $ cat [sound "bd sn:2" # vowel "[a o]/2",
          sound "casio casio:1 casio:2*2",
          sound "drum drum:2 drum:3 drum:4*2"
         ]
~~~
{: .render}

`cat` is a great way to create a linear sequence of patterns (a sequence
of sequences), giving a larger form to multiple patterns.

There's also `randcat`, which will play a random pattern from the list.

### Playing patterns together in parallel

The `stack` function takes a list of patterns and combines them into a new
pattern by playing all of the patterns in the list simultaneously.

~~~haskell
d1 $ stack [
  sound "bd bd*2",
  sound "hh*2 [sn cp] cp future*4",
  sound (samples "arpy*8" (run 16))
]
~~~
{: .render}

This is useful if you want to apply functions or effects on the entire stack:

~~~haskell
d1 $ every 4 (slow 2) $ whenmod 5 3 (# speed "0.75 1.5") $ stack [
  sound "bd bd*2",
  sound "hh*2 [sn cp] cp future*4",
  sound (samples "arpy*8" (run 16))
] # speed "[[1 0.8], [1.5 2]*2]/3"
~~~
{: .render}
