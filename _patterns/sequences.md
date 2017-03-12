---
category: sequences
layout: default
---

### Play a Single Sample

Tidal starts with nine connections to the SuperDirt synthesiser, named
from `d1` to `d9` (if you're using the 'classic' dirt, then instead
use `c1` to `c9`).  Here's a minimal example, that plays a bass drum
every cycle:

~~~haskell
d1 $ sound "bd"
~~~
{: .render}

> Evaluate the above code in the Atom (or Emacs) editor by pressing
> `Ctrl+Enter`. 

In the code above, `sound` tells us we're making a pattern of sound
samples, and `"bd"` is a pattern that contains a single sound. `bd` is
a sample of a bass drum.  Samples live inside the `Dirt-Samples`
folder which came with SuperDirt, and each sub-folder under that
corresponds to a sample name (like `bd`).

> To find the SuperDirt samples on your system, in the SuperCollider
> IDE select the `File > Open User Support Directory` menu item. From
> there, open `downloaded-quarks` and finally `Dirt-Samples` in
> there. You should find a lot of folders, each one is a sample bank
> containing standard `wav` files. Feel free to make new folders and
> add your own sounds to it.

We can pick a different sample in the `bd` folder by adding a colon
(`:`) then a number. For example, this picks the fourth bass drum (it
counts from zero, so `:3` gives you the fourth sound in the folder):

~~~haskell
d1 $ sound "bd:3"
~~~
{: .render}

If you specify a number greater than the number of samples in a
folder, then Tidal just "wraps" around back to the first sample again
(it starts counting at zero, e.g. in a folder with five samples,
"bd:5" would play "bd:0").

### Sequences From Multiple Samples

Putting things in quotes actually defines a sequence. For example, the following
gives you a pattern of bass drum then snare:

~~~haskell
d1 $ sound "bd sn"
~~~
{: .render}

When you run the code above, you are replacing the previous pattern with another
one on-the-fly. Congratulations, you're live coding.

### Playing More Than One Sequence

The easiest way to play multiple sequences at the same time is to use
two or more connections to the synthesizer:

~~~haskell
d1 $ sound "bd sn"
~~~
{: .render}
~~~haskell
d2 $ sound "hh hh hh hh"
~~~
{: .render}
~~~haskell
d3 $ sound "arpy"
~~~
{: .render}

> NOTE: each connection must be evaluated separately in your text
> editor.  That is, you must press `Ctrl+Enter` three times, once for
> each line above. Make sure that there is a blank line between them
> each pattern, or Tidal will evaluate them together and get confused
> (if you want to evaluate just one line, you can press shift-enter).

### What is a Cycle?

A cycle is the main "loop" of time in Tidal. The cycle repeats forever
in the background, even when you've stopped samples from playing. The
cycle's duration always stays the same unless you modify it with
`cps`, we'll cover this later.

> Note that this omniprescent cyclic looping doesn't necessary
> constrain you, for example it's common to stretch a pattern outside
> of a single loop, and vary patterns from one loop to the next. We'll
> see several ways to do this later, as well.

All of the samples inside of a pattern get squashed into a single cycle.
The patterns below all loop over the same amount of time:

~~~haskell
d1 $ sound "bd sn"
~~~
{: .render}
~~~haskell
d1 $ sound "bd sn hh cp mt arpy drum"
~~~
{: .render}
~~~haskell
d1 $ sound "bd sn hh cp mt arpy drum odx bd arpy bass2 feel future"
~~~
{: .render}

Note how the more steps you add to the pattern, the faster it goes to
fit them all in. No matter how many samples you put in a pattern in
this way, they will always be distributed evenly within a single
cycle.
