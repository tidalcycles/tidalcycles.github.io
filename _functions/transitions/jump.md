---
title: jump
category: transitions
---

~~~haskell
jump :: Time -> [ParamPattern] -> ParamPattern
~~~

Jumps directly into the given pattern, this is essentially the _no transition_-transition.

Variants of `jump` provide more useful capabilities, see `jumpIn` and `jumpMod`
