---
category: fills
layout: default
---


You can think of a "fill" as a change to a regular pattern that happens
regularly. e.g. every 4 cycles do "xya", or every 8 cycles do "abc".

We've already been using `every` and `whenmod` to do pattern function fills:

~~~haskell
d1 $ every 8 (rev) $ every 4 (density 2) $ sound "bd hh sn cp"
d1 $ whenmod 16 14 (# speed "2") $ sound "bd arpy*2 cp bass2"
~~~

However, what if you wanted to conditionally replace the pattern with a new one?
You can use the `const` function to completely replace a playing pattern.

Let's start with a trivial example where we use `const` to replace an entire
pattern all the time:

~~~haskell
d1 $ const (sound "arpy*3") $ sound "bd sn cp hh"
~~~

In the code above, we've completely replaced the "bd sn cp hh" pattern with
an "arpy" pattern. `const` specifies the new pattern.

We can conditionally apply `const` using `every` or `whenmod`:

~~~haskell
d1 $ whenmod 8 6 (const $ sound "arpy(3,8) bd*4") $ sound "bd sn bass2 sn"
d1 $ every 12 (const $ sound "bd*4 sn*2") $ sound "bd sn bass2 sn"
~~~
