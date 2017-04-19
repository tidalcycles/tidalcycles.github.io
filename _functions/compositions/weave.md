---
title: weave
category: compositions
---

~~~~haskell
weave :: Time -> ParamPattern -> [ParamPattern] -> ParamPattern
weave' :: Time -> ParamPattern -> [ParamPattern -> ParamPattern] -> ParamPattern
~~~~

`weave` applies one parameter pattern to an list of other parameter patterns. For example:

~~~~haskell
d1 $ weave 16 (pan sine)
  [sound "bd sn cp",
   sound "casio casio:1",
   sound "[jvbass*2 jvbass:2]/2",
   sound "hc*4"
  ]
~~~~
{: .render}

What makes this interesting is that the `pan sine` pattern is offset for each of the given `sound` patterns. The `pan sine` is slowed down by the given number of cycles `16`, and because the patterns are offset, they seem to chase after each other around the stereo field. Try listening on headphones.

You can have it the other way round, and have the effect parameters chasing after each other around a `sound` parameter, like this:

~~~~haskell
d1 $ weave 16 (sound "arpy*8" # n (run 8))
  [vowel "a e i",
   vowel "i [i o] o u",
   vowel "[e o]/3 [i o u]/2",
   speed "1 2 3"
  ]
~~~~

`weave'` is similar in that it blends functions at the same time at different amounts over a pattern:

~~~~haskell
d1 $ weave' 3 (sound "bd [sn drum:2*2] bd*2 [sn drum:1]") [fast 2, (# speed "0.5"), chop 16]
~~~~
{: .render}
