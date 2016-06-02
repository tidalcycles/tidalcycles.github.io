---
category: variation
layout: default
---

You can create a lot of cyclic variations in patterns by layering conditional
logic:

~~~haskell
d1 $ every 5 (|+| speed "0.5") $ every 4 (0.25 <~) $ every 3 (rev) $
   sound "bd sn arpy*2 cp"
   # speed "[1 1.25 0.75 -1.5]/3"
~~~

In addition to `every` you can also use the `whenmod` conditional function.
`whenmod` takes two parameters; it executes a function when the remainder of
the current loop number divided by the first parameter is less than the
second parameter.

For example, the following will play a pattern normally for cycles 1-6, then
play it in reverse for cycles 7-8. Then normally again for six cycles, then
in reverse for two, and so on:

~~~haskell
d1 $ whenmod 8 6 (rev) $ sound "bd*2 arpy*2 cp hh*22"
~~~
