---
category: pattern_transformers
title: brak
---

~~~~ haskell
brak :: Pattern a -> Pattern a
~~~~

(The above means that `brak` is a function from patterns of any type,
to a pattern of the same type.)

Make a pattern sound a bit like a breakbeat. It does this by every other cycle, squashing the pattern to fit half a cycle, and offsetting it by a quarter of a cycle.

~~~~ haskell
d1 $ brak $ sound "[feel feel:3, hc:3 hc:2 hc:4 ho:1]"
~~~~
{: .render }
