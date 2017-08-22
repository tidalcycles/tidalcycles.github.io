---
category: shorthand
layout: default
---

From version 0.9 of Tidal, there are some nice ways of saving on
keypresses when working with numerical patterns.

For example, when specifying patterns of single numbers, such as:

~~~haskell
d1 $ sound "arpy(3,8)" # n "2"
~~~
{: .render}

you can miss off the double quotes, so this works fine:

~~~haskell
d1 $ sound "arpy(3,8)" # n 2
~~~
{: .render}

However, if you wanted more than one value in that `n` pattern,
you'd have to put the quotes in:

~~~haskell
d1 $ sound "arpy(3,8)" # n "2 5"
~~~
{: .render}

You can also treat patterns of numbers as simple numbers in other
ways. For example doing algebra:

~~~haskell
d1 $ sound "arpy(3,8)" # n ("0 2" * 2)
~~~
{: .render}

~~~haskell
d1 $ sound "arpy(3,8)" # n (every 4 (* 2) "0 2")
~~~
{: .render}

~~~haskell
d1 $ n (off 0.125 (+12) $ off 0.25 (+7) $ slow 2 $ "0(3,8) [5 7]") # sound "supergong"
~~~
{: .render}

This is still quite new to everyone, so you will not see it used much
in the documentation yet.

You can also now specify increasing or decreasing numbers with a range, for example this:

~~~haskell
d1 $ n "0..7 3..1" # sound "supergong"
~~~
{: .render}

.. is shorthand for:

~~~haskell
d1 $ n "[0 1 2 3 4 5 6] [3 2 1]" # sound "supergong"
~~~

