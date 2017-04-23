---
title: striate
category: sample
---

~~~~ haskell
striate :: Pattern Int -> ParamPattern -> ParamPattern
~~~~

Striate is a kind of granulator, cutting samples into bits in a similar to (chop)[#chop], but the resulting bits are organised differently. For example:

~~~~ haskell
d1 $ slow 4 $ striate 16 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"
~~~~

This plays the loop the given number of times, but triggering
progressive portions of each sample. So in this case it plays the loop
three times, the first time playing the first third of each sample,
then the second time playing the second third of each sample, etc..
With the highhat samples in the above example it sounds a bit like
reverb, but it isn't really.

Compare this with `chop`:

~~~~ haskell
d1 $ slow 4 $ chop 16 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"
~~~~

You can hear that the `striate` version interlaces the cut up bits of samples together, whereas the `chop` version plays each chopped up sample in turn. Here's the samples without any granulation, in case that helps understand what's happening in the above:

~~~~ haskell
d1 $ slow 4 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"
~~~~

The `striate'` function is a variant of `striate` with an extra
parameter, which specifies the length of each part. The `striate'`
function still scans across the sample over a single cycle, but if
each bit is longer, it creates a sort of stuttering effect. For
example the following will cut the bev sample into 32 parts, but each
will be 1/16th of a sample long:

~~~~ haskell
d1 $ slow 32 $ striate' 32 (1/16) $ sound "bev"
~~~~

Note that `striate` uses the `begin` and `end` parameters
internally. This means that if you're using `striate` (or `striate'`)
you probably shouldn't also specify `begin` or `end`.
