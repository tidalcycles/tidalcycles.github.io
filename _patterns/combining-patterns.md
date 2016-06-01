---
category: combining_patterns
layout: default
---

Ok, remember when we started adding effects:

~~~haskell
d1 $ sound "bd sn drum arpy" # pan "0 1 0.25 0.75"
~~~

What we're actually doing in the code above is
_combining two patterns together_: the `sound` pattern, and the `pan` pattern.
The special pipe operators (`|=|, |+|, |-|, |*|, |/|`), allow us to combine
two patterns. Remember that `#` is shorthand for `|=|`.

We can actually swap sides and it sounds the same:

~~~haskell
d1 $ pan "0 1 0.25 0.75" # sound "bd sn drum arpy"
~~~

As we touched on earlier, the main thing to know when combining
patterns like this is that the left-most pattern determines the
rhythmic structure of the result. Removing one of the elements from
the `pan` pattern on the left results in a cycle with three samples
played:

~~~haskell
d1 $ pan "0 1 0.25" # sound "bd sn drum arpy"
~~~

In the code above, the `pan` pattern determines the rhythm because it is the
left-most pattern. The `sound` pattern now only determines what samples are
played at what time. The sound pattern gets _mapped_ onto the pan pattern.

You might be wondering how TidalCycles decides which sound values get
matched with which pan values in the above. (If not, there is no need
to read the rest of this paragraph just now!) The rule is, for each
value in the pattern on the left, values from the right are matched
where the start (or *onset*) of the left value, fall within the
timespan of the value on the right. For example, the second `pan`
value of `1` starts one third into its pattern, and the second `sound`
value of `sn` starts one quarter into its pattern, and ends at the
halfway point. Because the former onset (one third) falls inside the
timespan of the latter timespan (from one quarter until one half),
they are matched. The timespan of `arpy` doesn't contain any onsets
from the `pan` pattern, and so it doesn't match with anything, and
isn't played.

The rule described above may seem like a lot to keep in mind while
composing patterns, but in practice there is no need. Our advice is to
not worry, write some patterns and get a feel for how they fit together.

Anyway, this composition of pattern parameters allows us to do some
unique things:

~~~haskell
d1 $ up "0 0*2 0*4 1" # sound "[arpy, bass2, bd]"
~~~

Above, the `sound` pattern is merely specifying three samples to play
on every note.  Both the rhythm and pitch of these notes is defined by
the `up` pattern.
