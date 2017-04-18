---
title: Mapping over patterns
category: pattern_transformers
layout: default

---

Sometimes you want to transform all the events inside a pattern, and
not the time structure of the pattern itself. For example, if you
wanted to pass a sinewave to `speed`, but wanted the sinewave to go
from `0` to `2` rather than from `0` to `1`, you could do this:

~~~~ haskell
d1 $ sound "bd*2 [bd [sn sn*2 sn] sn]"
   # speed ((*2) <$> sine)
~~~~
{: .render }

The above applies the function `(* 2)` (which simply means multiply by
two), to all the values inside the `sine` pattern.

However since Tidal 0.9, with patterns of numbers you can do arithmetic directly, like this:

~~~~ haskell
d1 $ sound "bd*2 [bd [sn sn*2 sn] sn]"
   # speed (sine*2)
~~~~
{: .render }

There is a gotcha here in that you'll want to arrange things so the pattern you're working on is on the left hand side of any arithmetic. For example, this doesn't work well:

~~~~ haskell
d1 $ sound "bd*2 [bd [sn sn*2 sn] sn]"
   # speed (2*sine)
~~~~
{: .render }

This is because of the rule in Tidal that "the structure comes from the left", in this example the structure of the sine wave is lost to the structure of the number `2`.
