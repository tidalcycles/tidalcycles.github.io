---
title: append
category: compositions
---

~~~~{haskell}
append :: Pattern a -> Pattern a -> Pattern a
~~~~

`append` combines two patterns into a new pattern, so
that the events of the second pattern are appended to those of the
first pattern, within a single cycle.

~~~~{haskell}
d1 $ append (sound "bd*2 sn") (sound "arpy jvbass*2")
~~~~
