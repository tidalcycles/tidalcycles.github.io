---
title: xfadeIn
category: transitions
---

```haskell
xfadeIn :: Time -> Time -> [OscPattern] -> OscPattern
```

Crossfade between old and new pattern over given number of cycles, e.g.:

```haskell
d1 $ sound "bd sn"

t1 (xfadeIn 16) $ sound "jvbass*3"
```

Will fade over 16 cycles from "bd sn" to "jvbass*3"
