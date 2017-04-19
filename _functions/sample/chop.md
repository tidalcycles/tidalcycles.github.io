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
