---
title: foldEvery
category: conditional
---

~~~~ haskell
foldEvery :: [Int] -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
~~~~

`foldEvery` transforms a pattern with a function, but only for the given number of repetitions. 
It is similar to chaining multiple `every` functions together.

Example:

~~~~ haskell
d1 $ foldEvery [3, 4, 5] (density 2) $ sound "bd sn kurt"
~~~~
{: .render}

this is equal to:

~~~~haskell
d1 $ every 3 (density 2) $ every 4 (density 2) $ every 5 (density 2) $ sound "bd sn kurt"
~~~~
{: .render}
