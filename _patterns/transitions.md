---
category: transitions
---

Changing the pattern on a channel takes effect (almost) immediately. This may not be what you want, especially when performing live!

That's why Tidal allows you to choose a transition that will introduce another pattern, eventually replacing the current one.

For every channel, there's a transition channel that accepts a transition function and a new pattern.

So instead of directly sending the new pattern to `d1`, we'll send it to the corresponding transition channel `t1` and give it a nice transition function:

```haskell
d1 $ sound (samples "hc*8" (iter 4 $ run 4))

t1 anticipate $ sound (samples "bd(3,8)" (run 3))
```

To transition from here, simply change the pattern within `t1`, and in this case also change the transition function:

```haskell
t1 (xfadeIn 16) $ sound "bd(5,8)"
```

The above will fade over 16 cycles from the former pattern to the given new one.

Apart from `anticipate` and `xfadeIn` there are a lot more [transition functions](/functions.html#transitions) e.g. some that will force you to keep changing your patterns to avoid repetitive performances&hellip;
