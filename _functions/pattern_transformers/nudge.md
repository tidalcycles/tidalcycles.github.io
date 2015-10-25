---
title: nudge
category: pattern_transformers
---

```haskell
nudge :: Pattern Double -> OscPattern
```

Pushes things forward (or backwards within built-in latency) in time. Allows for nice things like _swing_ feeling:

```haskell
d1 $ stack [
  sound "bd bd/4",
  sound "hh(5,8)"
  ] # nudge "[0 0.04]*4"
```

Low values will give a more _human_ feeling, high values might result in quite the contrary.