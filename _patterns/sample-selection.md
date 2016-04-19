---
category: sample_selection
layout: default
---

Perhaps one of Tidal's biggest strengths is that it can select samples from
Dirt folders based on an algorithm. There is a special function called `samples`
that combines a pattern of samples with a pattern of sample indexes from a folder:

~~~haskell
d1 $ sound $ samples "drum*4" "0 1 2 3"

-- the code above equals this:
d1 $ sound "drum:0 drum:1 drum:2 drum:3"
~~~

This allows us to separate the sample folder name from the index inside the
folder, possibly with surprising results!

Remember the `run` function? Since `run` generates a pattern of integers, it
can be used with `samples` to automatically "run" through the sample indices
of a folder:

~~~haskell
d1 $ sound $ samples "drum*4" (run 4)
~~~

And of course you can specify a different pattern of sample names:

~~~haskell
d1 $ sound $ samples "drum arpy cp hh" (run 10)
~~~

> NOTE: if you specify a run value that is greater than the number of
> samples in a folder, then the higher number index will "wrap" to the
> beginning of the samples in the folder (just like with the colon notation).

You might sometimes see the samples function wrapped in parenthesis:


~~~haskell
d1 $ sound (samples "drum arpy cp hh" (run 10))
~~~
