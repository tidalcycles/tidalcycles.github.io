---
title: seqP
category: compositions
---

There is a similar function named `seqP` which allows you to define when
a sound within a list starts and ends. The code below contains three
separate patterns in a "stack", but each has different start times 
(zero cycles, eight cycles, and sixteen cycles, respectively). In the example, ll patterns stop after 12 cycles:

~~~~ haskell
d1 $ seqP [ 
  (0, 12, sound "bd bd*2"), 
  (4, 12, sound "hh*2 [sn cp] cp future*4"), 
  (8, 12, sound (samples "arpy*8" (run 16)))
]
~~~~

If you run the above, you probably won't hear anything. This is because cycles start ticking up as soon as you start Tidal, and you have probably already gone part cycle 12.

You can reset the cycle clock back to zero by running `cps (-1)` followed by `cps 1`, or whatever tempo you want to restart at. Alternatively, you can shift time for the seqP pattern back to zero like this:

~~~~ haskell
d1 $ (pure now) ~> seqP [ 
  (0, 12, sound "bd bd*2"), 
  (4, 12, sound "hh*2 [sn cp] cp future*4"), 
  (8, 12, sound (samples "arpy*8" (run 16)))
]
~~~~

A third option is to use `seqPLoop` instead, which will keep looping the sequence when it gets to the end:

~~~~haskell
d1 $ (pure now) ~> seqPLoop [ 
  (0, 12, sound "bd bd*2"), 
  (4, 12, sound "hh*2 [sn cp] cp future*4"), 
  (8, 12, sound (samples "arpy*8" (run 16)))
]
~~~~
