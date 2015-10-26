---
title: xfade
category: transitions
---

```haskell
xfade :: Time -> [OscPattern] -> OscPattern
```

Crossfade between old and new pattern over the next two cycles.

```haskell
d1 $ sound "bd sn"

t1 xfade $ sound "can*3"
```

`xfade` is essentially `xfadeIn 2` so you can also specify how many cycles you want the transition to take:

### xfadeIn

```haskell
xfadeIn :: Time -> Time -> [OscPattern] -> OscPattern
```

crossfades between old and new pattern over given number of cycles, e.g.:

```haskell
d1 $ sound "bd sn"

t1 (xfadeIn 16) $ sound "jvbass*3"
```

Will fade over 16 cycles from "bd sn" to "jvbass*3"
