---
category: run
layout: default
---

There is a special utility function called `run` which will return a pattern of
integers up to a specified maximum. You can use `run` with effects to aid in
automatically generating a linear pattern:

~~~haskell
d1 $ sound "arpy*8" # up (run 8)
~~~
{: .render}
~~~haskell
d1 $ sound "arpy*8" # speed (run 8)
~~~
{: .render}

In the above we're specifying the number of sounds twice - in the `sound` pattern as well as the `up` or `speed` pattern. There's actually a neat way of only having to specify this once, simply by switching them round, so the effect parameter is on the left:

~~~haskell
d1 $ up (run 8) # sound "arpy"
~~~
{: .render}

This works because TidalCycles always takes the structure of a pattern from the parameter that's on the left. We usually want the structure to come from the `sound` parameter, but not always.

Because `run` returns a pattern, you can apply functions to its result:

~~~haskell
d1 $ sound "arpy*8" # up (every 2 (rev) $ run 8)
~~~
{: .render}

For a more practical example of using `run`, read below about
selecting samples from folders.
