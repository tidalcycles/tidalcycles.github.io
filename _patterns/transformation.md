---
category: transformation
layout: default
---

Tidal comes into its own when you start building things up with functions which
transform the patterns in various ways.

For example, `rev` reverses a pattern:

~~~haskell
d1 $ rev (sound "bd*2 [bd [sn sn*2 sn] sn]")
~~~
{: .render}

That's not so exciting, but things get more interesting when this is
used in combination with another function. For example `every` takes
two parameters: a number, a function and a pattern to apply the
function to. The number specifies how often the function is applied to
the pattern. For example, the following reverses the pattern every
fourth repetition:

~~~haskell
d1 $ every 4 (rev) (sound "bd*2 [bd [sn sn*2 sn] sn]")
~~~
{: .render}

> It takes a while to get used to how we're using parenthesis here. In
> the previous example, `rev` takes one parameter, a pattern, and we
> had to 'wrap up' the pattern `sound "[bd bd] [bd [sn [sn sn] sn] sn]"`
> in brackets to pass it to `rev`. In the above example `every` takes
> three parameters: a number, a function and a pattern. We had to wrap
> up the pattern as before, but also `rev` in order to give it to
> `every`. This should become clearer with practice.

You can also slow down or speed up the playback of a pattern, this makes it a
quarter of the speed:

~~~haskell
d1 $ slow 4 $ sound "bd*2 [bd [sn sn*2 sn] sn]"
~~~
{: .render}

And this four times the speed:

~~~haskell
d1 $ fast 4 $ sound "bd*2 [bd [sn sn*2 sn] sn]"
~~~
{: .render}

> Note that `slow 0.25` would do exactly the same as `fast 4`.

Again, this can be applied selectively:

~~~haskell
d1 $ every 4 (fast 4) $ sound "bd*2 [bd [sn sn*2 sn] sn]"
~~~
{: .render}

> Note again the use of parenthesis, around `fast 4`. This is
> needed, to group together the function `fast` with its parameter
> 4, before being passed as a parameter to the function `every`.

In the examples above, the `sound` function takes a pattern of sample
names, and turns it into a pattern of synthesiser triggers. This might
take a while to fully understand, but the important thing to remember
is that "it's patterns all the way down". In this case, this means
that you can operate on the inner pattern of sample names, instead of
the outer pattern of synthesiser triggers that `sound` gives you:

~~~haskell
d1 $ sound (every 4 (fast 4) "bd*2 [bd [sn sn*2 sn] sn]")
~~~
{: .render}

The `fast` function is also known as `density`, which is actually the older name, so a lot of examples will use it instead of the (slightly quicker to type) `fast`. They do exactly the same thing.

### Where are all the functions?

There are many types of functions that help you change patterns. Some of them
re-order sequences, some alter time, some provide conditional logic, and some
can help compose more complex patterns.

We'll introduce many of the core functions in this introduction, and a
more complete list of functions available in Tidal can be found on the
[Reference page](/functions.html).
