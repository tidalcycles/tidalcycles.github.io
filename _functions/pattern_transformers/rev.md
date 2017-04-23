---
title: rev
category: pattern_transformers
---

~~~~ haskell
rev :: Pattern a -> Pattern a
~~~~

Reverse every cycle of a pattern. For example:

~~~~ haskell
d1 $ slow 2 $ rev $ n "0 1 2 3" # sound "numbers"
~~~~
{: .render }

Or in a conditional:

~~~~ haskell
d1 $ slow 2 $ every 3 (rev) $ n "0 1 2 3" # sound "numbers"
~~~~
{: .render }
