---
category: sample_selection
layout: default
---

The `sound` parameter we've been using up to now can actually be broken into two seperate parameters, making it easy to select samples with a pattern. These parameters are `s` that gives the name of the sample set, and `n` which gives the 
number of the sample within that set. For example, the following two patterns 
do exactly the same:

~~~haskell
d1 $ sound "arpy:0 arpy:2 arpy:3"
d1 $ n "0 2 3" # s "arpy"
~~~




It's possible to break the `sound` parameter into two different patterns, 
namely `s` that gives the name of the sample set, and `n` which gives the 
index of the sample within that set. For example, the following two patterns 
are the same:

~~~haskell
d1 $ sound "arpy:0 arpy:2 arpy:3"
d1 $ n "0 2 3" # s "arpy"
~~~

This allows us to separate the sample folder name from the index inside the
folder, possibly with surprising results!

There is also special function called `samples` that lets you do the same using the `sound` parameter.

~~~haskell
d1 $ sound $ samples "drum*4" "0 1 2 3"

-- the code above equals this:
d1 $ sound "drum:0 drum:1 drum:2 drum:3"
~~~

Whether you use `n` and `s` together, or `sound` with `samples` is up to you, although 
you might find the former to be more flexible.

Remember the `run` function? Since `run` generates a pattern of integers, it
can be used with `n` to automatically "run" through the sample indices
of a folder:

~~~haskell
d1 $ n (run 4) # s "drum"
d1 $ sound $ samples "drum*4" (run 4) -- or with samples
~~~

And of course you can specify a different pattern of sample names:

~~~haskell
d1 $ s "drum arpy cp hh" # n (run 10)
~~~

Again, by swapping the order of the `s` and `n` parameters, you can hear the difference between taking the structure from one or the other:

~~~haskell
d1 $ n (run 10) # s "drum arpy cp hh"
~~~ 

> NOTE: if you specify a run value that is greater than the number of
> samples in a folder, then the higher number index will "wrap" to the
> beginning of the samples in the folder (just like with the colon notation).

You might sometimes see the samples function wrapped in parenthesis:

~~~haskell
d1 $ sound (samples "drum arpy cp hh" (run 10))
~~~
