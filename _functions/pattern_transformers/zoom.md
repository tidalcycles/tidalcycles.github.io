---
title: zoom
category: pattern_transformers
---

~~~~ haskell
zoom :: Arc -> Pattern a -> Pattern a
~~~~

Plays a portion of a pattern, specified by a beginning and end arc of time. 
The new resulting pattern is played over the time period of the original pattern:

~~~~ haskell
d1 $ zoom (0.25, 0.75) $ sound "bd*2 hh*3 [sn bd]*2 drum"
~~~~
{: .render }

In the pattern above, `zoom` is used with an arc from 25% to 75%. It is equivalent to this pattern:

~~~~ haskell
d1 $ sound "hh*3 [sn bd]*2"
~~~~
{: .render }

Here's an example of it being used with a conditional:

~~~~ haskell
d1 $ every 4 (zoom (0.25, 0.75)) $ sound "bd*2 hh*3 [sn bd]*2 drum"
~~~~
{: .render }
