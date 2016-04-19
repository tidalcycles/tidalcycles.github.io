---
title: slowcat
category: compositions
---

~~~~haskell
slowcat :: [Pattern a] -> Pattern a
~~~~

`slowcat` concatenates a list of patterns into a new pattern; each pattern in the list will maintain its 
original duration. `slowcat` is similar to `cat`, except that pattern lengths are not changed. Examples:

~~~~haskell
d1 $ slowcat [sound "bd*2 sn", sound "arpy jvbass*2"]
d1 $ slowcat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]
d1 $ slowcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]
~~~~
