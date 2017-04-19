---
title: anticipate
category: transitions
---

~~~haskell
anticipate :: Time -> [ParamPattern] -> ParamPattern
~~~

Build up some tension, culminating in a _drop_ to the new pattern after 8 cycles.

### anticipateIn

~~~haskell
anticipateIn :: Time -> Time -> [ParamPattern] -> ParamPattern
~~~

same as `anticipate` though it allows you to specify the number of cycles until dropping to the new pattern, e.g.:

~~~haskell
d1 $ sound "jvbass(3,8)"

t1 (anticipateIn 4) $ sound "jvbass(5,8)"
~~~