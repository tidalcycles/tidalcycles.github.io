---
title: loopAt
category: sample
---

`loopAt` makes sample fit the given number of cycles. Internally, it
works by setting the `unit` parameter to "c", changing the playback
speed of the sample with the `speed` parameter, and setting setting
the `density` of the pattern to match.

~~~~ haskell
d1 $ loopAt 4 $ sound "breaks125"
~~~~
{: .render }

It's a good idea to use this in conjuction with `chop`, so the break is chopped into pieces and you don't have to wait for the whole sample to start/stop.

~~~~ haskell
d1 $ loopAt 4 $ chop 32 $ sound "breaks125"
~~~~
{: .render }

Like all tidal functions, you can mess about with this considerably. The below example shows how you can supply a pattern of cycle counts to loopAt:

~~~~ haskell
d1 $ juxBy 0.6 (|*| speed "2") $ loopAt "<4 6 2 3>" $ chop 12 $ sound "fm:14"
~~~~
{: .render }
