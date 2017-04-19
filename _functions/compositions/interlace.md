---
title: interlace
category: compositions
---

~~~~ haskell
interlace :: ParamPattern -> ParamPattern -> ParamPattern
~~~~

(A function that takes two ParamPatterns, and blends them together into
a new ParamPattern. A ParamPattern is basically a pattern of messages to
a synthesiser.)

Shifts between the two given patterns, using distortion.

Example:

~~~~ haskell
d1 $ interlace (sound  "bd sn kurt") (every 3 rev $ sound  "bd sn:2")
~~~~
{: .render}
