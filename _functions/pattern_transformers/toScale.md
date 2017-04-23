---
title: toScale
category: pattern_transformers
---

~~~~ haskell
toScale::[Int] -> Pattern Int -> Pattern Int
~~~~

The `toScale` function lets you turn a pattern of notes within a scale (expressed as a
list) to note numbers.  For example 

~~~~ haskell
d1 $ n (toScale [0, 4, 7] "0 1 2 3") # sound "supermandolin"
~~~~
{: .render }

will turn the pattern `"0 1 2 3"` into the pattern `"0 4 7 12"` by "picking" those notes out of the provided
scale `[0, 4, 7]`.

`toScale` assumes your scale repeats after a single octave, if it doesn't you can use a primed version
`toScale' size`.  For example

~~~~ haskell
toscale' 24 [0,4,7,10,14,17] (run 8)
~~~~

turns into `"0 4 7 10 14 17 24 28"`

A large number of scale and chord names have been provided in the Sound.Tidal.Chords and Sound.Tidal.Scales modules.
If not already loaded, you can gain access to these with a command like

~~~~ haskell
import qualified Sound.Tidal.Scales as Scales
~~~~

and then use them as `Scales.ionian`, `Scales.dorian`, `Scales.phrygian`, etc...
