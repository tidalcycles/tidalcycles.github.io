---
title: cat
category: compositions
---

~~~~haskell
cat :: [Pattern a] -> Pattern a
~~~~

`cat` concatenates a list of patterns into a new pattern. The new pattern's length will 
be a single cycle. Note that the more patterns you add to the list, the faster each pattern
will be played so that all patterns can fit into a single cycle. Examples:

~~~~haskell
d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2"]
d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]
d1 $ cat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]
~~~~
