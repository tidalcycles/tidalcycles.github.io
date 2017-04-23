---
title: Beat rotation
category: pattern_transformers

---
~~~~ haskell
(<~) :: Pattern Time -> Pattern a -> Pattern a
~~~~

or

~~~~ haskell
(~>) :: Pattern Time -> Pattern a -> Pattern a
~~~~

(The above means that `<~` and `~>` are functions that are given a
time pattern and a pattern of any type, and returns a pattern of the
same type.)

Shifts a pattern either forward or backward in time.

For example, to shift a pattern by a quarter of a cycle, every fourth cycle:

~~~haskell
d1 $ every 4 (0.25 <~) $ sound ("arpy arpy:1 arpy:2 arpy:3")
~~~
{: .render }

~~~haskell
d1 $ every 4 (0.25 ~>) $ sound ("bd ~ sn:1 [mt ht]")
~~~
{: .render }

Or to alternate between different shifts:

~~~haskell
d1 $ "<0 0.5 0.125>" <~ sound ("arpy arpy:1 arpy:2 arpy:3")
~~~
{: .render }
