---
category: run
layout: default
---

There is a special utility function called `run` which will return a pattern of
integers up to a specified maximum. You can use `run` with effects to aid in
automatically generating a linear pattern:

```haskell
d1 $ sound "arpy*8" # up (run 8)
d1 $ sound "arpy*8" # speed (run 8)
```

Because `run` returns a pattern, you can apply functions to its result:

```haskell
d1 $ sound "arpy*8" # up (every 2 (rev) $ run 8)
```

For a more practical example of using `run`, read below about
selecting samples from folders.
