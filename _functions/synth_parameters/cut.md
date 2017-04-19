---
title: cut
category: synth_parameters
---

~~~haskell
cut :: Pattern Int -> ParamPattern
~~~

In the style of classic drum-machines, `cut` will stop a playing sample as soon as another samples with in same cutgroup is to be played.

An example would be an open hi-hat followed by a closed one, essentially muting the open.

~~~haskell
d1 $ stack [
  sound "bd",
  sound "~ [~ [ho:2 hc/2]]" # cut "1"
  ]
~~~

This will mute the open hi-hat every second cycle when the closed one is played.

Using `cut` with negative values will only cut the same sample. This is useful to cut very long samples

~~~haskell
d1 $ sound "[bev, [ho:3](3,8)]" # cut "-1"
~~~

Using `cut "0"` is effectively _no_ cutgroup.