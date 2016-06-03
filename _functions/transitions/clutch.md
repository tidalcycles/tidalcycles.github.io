---
title: clutch
category: transitions
---

~~~haskell
clutch :: Time -> [Pattern a] -> Pattern a
~~~

Degrades the current pattern while undegrading the next.

This is like `xfade` but not by gain of samples but by randomly removing events from the current pattern and slowly adding back in missing events from the next one.

~~~haskell
d1 $ sound "bd(3,8)"

t1 clutch $ sound "[hh*4, odx(3,8)]"
~~~
{: .render-lines-4 }

`clutch` takes two cycles for the transition, essentially this is `clutchIn 2`.

### clutchIn

~~~haskell
clutchIn :: Time -> Time -> [Pattern a] -> Pattern a
~~~

Also degrades the current pattern and undegrades the next.
To change the number of cycles the transition takes, you can use `clutchIn` like so:

~~~haskell
d1 $ sound "bd(5,8)"

t1 (clutchIn 8) $ sound "[hh*4, odx(3,8)]"
~~~
{: .render-lines-4 }

will take 8 cycles for the transition.
