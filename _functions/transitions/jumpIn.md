---
title: jumpIn
category: transitions
---

~~~haskell
jumpIn :: Show a => a -> Int -> ControlPattern -> IO ()
~~~

`jumpIn` is passed a **channel number**, an integer **number of cycles**, and a **control pattern**.

`jumpIn` does a sharp "jump" cut transition after the specified number of cycles have passed (not limited to cycle boundaries unlike `jumpIn'`).


Given:
~~~haskell
d1 $ sound "bd sd*2"
~~~
and executing the following after the `bd` but before `sd*2`:
~~~haskell
jumpIn 1 1 $ sound "rs cp*2"
~~~
causes the latter pattern to begin playing on channel 1 during the next cycle (since 1 in specified) beginning with `cp*2`.




