---
title: jumpIn'
category: transitions
---

~~~haskell
jumpIn' :: Show a => a -> Int -> ControlPattern -> IO ()
~~~

`jumpIn'` is passed a **channel number**, an integer **number of cycles**, and a **control pattern**.

`jumpIn'`does a sharp "jump" cut transition after at least the specified number of cycles have passed, but only transitions at the upcoming cycle boundary (e.g. when the cycle count is an integer). For jump cut transitions not limited to cycle boundaries, look at `jumpIn`.

Given:
~~~haskell
d1 $ sound "bd sd*2"
~~~
and executing the following **anytime** within the cycle:
~~~haskell
jumpIn' 1 0 $ sound "rs cp*2"
~~~
causes the latter pattern to begin playing on channel 1 at the next upcoming cycle boundary after 0 cycles (the beginning of the next cycle starting with the `rs`).


