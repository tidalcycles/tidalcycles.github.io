---
category: pattern_groups
layout: default
---

Use Tidal's _square braces_ syntax to create a pattern grouping:

~~~haskell
d1 $ sound "[bd sn] cp"
~~~

Square braces allow several events to be played inside of a single event.
Practically, this means you can create denser sub-divisions of samples:

~~~haskell
d1 $ sound "bd [sn sn]"
d1 $ sound "bd [sn sn sn]"
d1 $ sound "bd [sn sn sn sn]"
d1 $ sound "[bd bd] [sn sn sn sn]"
d1 $ sound "[bd bd bd] [sn sn]"
d1 $ sound "[bd bd bd bd] [sn]"
~~~

You can even nest groups inside groups to create very dense and complex
patterns:

~~~haskell
d1 $ sound "[bd bd] [bd [sn [sn sn] sn] sn]"
~~~

### Layering (Polyrhythms) Instead of Grouping

You can also layer up several loops, by using commas to separate the different parts:

~~~haskell
d1 $ sound "[bd bd bd, sn cp sn cp]"
~~~

This would play the sequence `bd bd bd` at the same time as `sn cp sn cp`.
Note that the first sequence only has three events, and the second one has four.
Because tidal ensures both loops fit inside same duration, you end up with
a polyrhythm.

You can layer any number of patterns to create many polyrhythms:

~~~haskell
d1 $ sound "[bd bd bd, sn cp sn cp, arpy arpy, odx]"
~~~

And of course you can use groupings inside of the layers:

~~~haskell
d1 $ sound "[bd bd bd, [sn sn] cp, arpy [arpy [arpy arpy] arpy arpy], odx]"
~~~
