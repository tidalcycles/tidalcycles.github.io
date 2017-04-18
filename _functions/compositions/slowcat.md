---
title: cat
category: compositions
---

~~~~haskell
cat :: [Pattern a] -> Pattern a
~~~~

`cat`, (also known as `slowcat`) concatenates a list of patterns into a new pattern; each pattern in the list will maintain its 
original duration. `cat` is similar to `fastcat`, except that pattern lengths are not changed. Examples:

~~~~haskell
d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2"]
~~~~
{: .render}

~~~~haskell
d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]
~~~~
{: .render}

~~~~haskell
d1 $ cat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]
~~~~
{: .render}
