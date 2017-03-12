---
title: up
category: utility
---

`up` changes the speed of playback, but conforming to a 12-tone scale. The example below creates a pattern that plays the sample at 5 semitones, then 3 semitones, above natural pitch.

~~~~haskell
d1 $ sound "arpy" # up "5 3"
~~~~
{: .render }
