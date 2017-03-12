---
title: randcat
category: compositions
---

~~~~haskell
randcat :: [Pattern a] -> Pattern a
~~~~

`randcat` is similar to `slowcat`, but rather than playing the given
patterns in order, picks them at random.

~~~~haskell
d1 $ randcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]
~~~~
{: .render}
