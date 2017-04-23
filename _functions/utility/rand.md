---
title: rand
category: utility
---

`rand` generates a pattern of (pseudo-)random, floating point numbers between `0` and `1`. For example, to bound randomly around the stereo field you can do this:

~~~~haskell
d1 $ sound "bd*8" # pan rand
~~~~
{: .render }

Or to enjoy randomised `speed` from `0.5` to `1.5`, you can simply add `0.5` to it:

~~~~haskell
d1 $ sound "arpy*4" # speed (rand + 0.5)
~~~~
{: .render }
