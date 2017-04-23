---
title: chop
category: sample
---

~~~~ haskell
chop :: Pattern Int -> ParamPattern -> ParamPattern
~~~~

`chop` granualizes every sample in place as it is played, turning a pattern of samples into a pattern of sample parts. Use an integer value to specify how many granules each sample is chopped into:

~~~~ haskell
d1 $ chop 16 $ sound "arpy ~ feel*2 newnotes"
~~~~

You can pattern that first parameter:

~~~~ haskell
d1 $ chop "<16 128 32>" $ sound "arpy ~ feel*2 newnotes"
~~~~

You end up with a pattern of the chopped up bits of samples, so for example if you then reverse the pattern, you reverse the order of the bits:

~~~~ haskell
d1 $ slow 2 $ rev $ chop 16 $ sound "breaks125"
~~~~

Lets try that reverse in just one speaker:

~~~~ haskell
d1 $ slow 2 $ jux rev $ chop 16 $ sound "breaks125"
~~~~

Different values of `chop` can yield very different results, depending
on the samples used:

~~~~ haskell
d1 $ chop 16 $ sound (samples "arpy*8" (run 16))
d1 $ chop 32 $ sound (samples "arpy*8" (run 16))
d1 $ chop 256 $ sound "bd*4 [sn cp] [hh future]*2 [cp feel]"
~~~~

You can also use chop (or (striate)[#striate]) with very long samples, to cut it into short
chunks and pattern those chunks. The following cuts a sample into 32 parts, and plays
it over 8 cycles:

~~~~ haskell
d1 $ loopAt 8 $ chop 32 $ sound "bev"
~~~~

The `loopAt` takes care of changing the speed of sample playback so
that the sample fits in the given number of cycles.

You can't hear that the sample has been cut into bits in the above. This becomes more apparent when you do further manipulations of the pattern, for example `rev` to reverse the order of the cut up bits:

~~~~ haskell
d1 $ loopAt 8 $ rev $ chop 32 $ sound "bev"
~~~~

See also [striate](#striate).
