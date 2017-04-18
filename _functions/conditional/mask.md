---
title: mask
category: conditional
---

~~~haskell
mask :: Pattern a -> Pattern b -> Pattern b
~~~

Removes events from second pattern that don't start during an event from first.

Consider this, kind of messy rhythm without any rests.

~~~haskell
d1 $ sound (cat ["sn*8", "[cp*4 bd*4, hc*5]"]) # n (run 8)
~~~
{: .render }

If we apply a mask to it

~~~haskell
d1 $ s (mask ("1 1 1 ~ 1 1 ~ 1" :: Pattern Bool)
  (cat ["sn*8", "[cp*4 bd*4, bass*5]"] ))
  # n (run 8) 
~~~
{: .render }

Due to the use of `cat` here, the same mask is first applied to `"sn*8"` and in the next cycle to `"[cp*4 bd*4, hc*5]".

You could achieve the same effect by adding rests within the `cat` patterns, but mask allows you to do this more easily. It kind of keeps the rhythmic structure and you can change the used samples independently, e.g.

~~~haskell
d1 $ s (mask ("1 ~ 1 ~ 1 1 ~ 1" :: Pattern Bool)
  (cat ["can*8", "[cp*4 sn*4, jvbass*16]"] ))
  # n (run 8) 
~~~
{: .render }

Detail: It is currently needed to explicitly _tell_ Tidal that the mask itself is a `Pattern Bool` as it cannot infer this by itself, otherwise it will complain as it does not know how to interpret your input.



