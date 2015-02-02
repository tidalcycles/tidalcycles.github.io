---
title: spin
category: compositions
---

~~~~{haskell}
spin :: Double n -> Pattern a -> Pattern a
~~~~

For lack of a better explanation, `spin` introduces stereo offset interaction. 
It will "spin" a pattern around multiple channels. On a two-channel setup (e.g. left and right),
use Double values between 0 and 1 to notice an effect. For setups with more than two channels,
a Double value greater than 1 will produce a noticeable result.

~~~~{haskell}
# effective on two channels
d1 $ spin 0.75 $ sound "bd*2 bd [~ bd] bd*4"

# effective on more than two channels
d1 $ spin 1.5 $ sound "bd*2 bd [~ bd] bd*4"
~~~~

