---
category: combining_parameters
weight: -9
---

Most often, parameters are composed together into synth messages using
the `#` operator. Using `#`, if you specify the same parameter more
than once, you will replace previous values. For example, in the
following the rightmost speed value of `2` is what gets used, and the
value of `3` is ignored:

~~~haskell
d1 $ sound "bd sn:2" # speed "3" # speed "2"
~~~
{: .render}

Actually, `#` is shorthand for the `|=|` operator, and there are a few
others which behave a bit differently. For example instead of
replacing values, the `|+|` operator adds them together. For example
the following ends up with a value of `5`.

~~~haskell
d1 $ sound "bd sn:2" # speed "3" |+| speed "2"
~~~
{: .render}

There also exists `|*|`, `|/|` and `|-|` operators which multiply,
divide and subtract the values, as you might expect. Here's a pattern
which adds values taken from a sine fucntion to a speed pattern:

~~~haskell
d1 $ every 2 (|+| speed sine1) $ sound "bd*2" # speed "1 2"
~~~
{: .render}

The `|+|` `|-|` `|/|` and `|*|` operators only exhibit this behaviour
with numerical pattern parameters.
