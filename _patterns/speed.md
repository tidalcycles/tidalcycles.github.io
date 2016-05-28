---
category: speed
layout: default
---

You can change the playback speed of a sample in TidalCycles by using the `speed` effect.
You can use `speed` to change pitches, to create a weird effect, or to match
the length of a sample to a specific period of the cycle time.

You can set a sample's speed by using the `speed` effect with a number.

- `speed "1"` plays a sample at its original speed
- `speed "0.5"` plays a sample at half of its original speed
- `speed "2"` plays a sample at double its original speed

~~~haskell
d1 $ sound "arpy" # speed "1"
d1 $ sound "arpy" # speed "0.5"
d1 $ sound "arpy" # speed "2"
~~~

Just like other effects, you can specify a pattern for speed:

~~~haskell
d1 $ sound "arpy*4" # speed "1 0.5 2 1.5"
~~~

You can also reverse a sample by specifying negative values:

~~~haskell
d1 $ sound "arpy*4" # speed "-1 -0.5 -2 -1.5"
~~~

### Play a sample at multiple speeds simultaneously

Use the pattern grouping syntax with a comma to cause `speed` to play
a sample back at multiple speeds at the same time:

~~~haskell
d1 $ sound "arpy" # speed "[1, 1.5]"
d1 $ sound "arpy*4" # speed "[1 0.5, 1.5 2 3 4]"
~~~

### 12-tone scale speeds

You can also use the `up` function to change playback speed. `up` is a shortcut
effect that matches speeds to half steps on a 12-tone scale. For example, the
following plays a chromatic scale:

~~~haskell
d1 $ sound "arpy*12" # up "0 1 2 3 4 5 6 7 8 9 10 11"
~~~

> You can also use the `run` function to create an incrementing pattern of
> integers: `d1 $ sound "arpy*12" # up (run 12)`. The `run` function will be
> discussed later.
