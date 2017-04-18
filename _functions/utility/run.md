---
title: run
category: utility
---

`run n` generates a pattern representing a cycle of numbers from 0 to n-1 inclusive. Notably used to 'run' through a folder of samples in order:

~~~~haskell
d1 $ n (run 8) # sound "amencutup"
~~~~
{: .render }

~~~~haskell
d1 $ every 2 (slow 2) $ n (run 8) # sound "amencutup"
~~~~
{: .render }

The first parameter to `run` can be given as a pattern:

~~~~haskell
d1 $ n (run "<4 8 4 6>") # sound "amencutup"
~~~~
{: .render }
