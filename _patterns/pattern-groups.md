---
category: pattern_groups
layout: default
---

You can use Tidal's _square brackets_ syntax to create a pattern grouping:

~~~haskell
d1 $ sound "[bd sd sd] cp"
~~~
{: .render}

Square brackets allow several events to be played inside of a single
step. You can think of the above pattern as having two steps, with the
first step broken down into a subpattern, which has three
steps. Practically, this means you can create denser sub-divisions of
cycles:

~~~haskell
d1 $ sound "bd [sd sd]"
d1 $ sound "bd [sd sd sd]"
d1 $ sound "bd [sd sd sd sd]"
d1 $ sound "[bd bd] [sd sd sd sd]"
d1 $ sound "[bd bd bd] [sd sd]"
d1 $ sound "[bd bd bd bd] [sd]"
~~~

You can even nest groups inside groups to create increasingly dense
and complex patterns:

~~~haskell
d1 $ sound "[bd bd] [bd [sd [sd sd] sd] sd]"
~~~
{: .render}

A shorthand for this kind of grouping is to place a period `.` between
groups, rather than surrounding them in square brackets. We call this
technique 'marking out feet'. For example these two patterns are equivalent:

~~~haskell
d1 $ sound "bd bd . sd sd sd . bd sd"
~~~
{: .render}

~~~haskell
d1 $ sound "[bd bd] [sd sd sd] [bd sd]"
~~~
{: .render}

The former approach is often easier to type, but is a relatively new
addition to TidalCycles, and so many examples will use the square brackets.

### Layering (Polyrhythms) Instead of Grouping

You can also layer up several loops, by using commas to separate the
different parts:

~~~haskell
d1 $ sound "[bd bd bd, sd cp sd cp]"
~~~
{: .render}

This would play the sequence `bd bd bd` at the same time as `sd cp sd
cp`.  Note that the first sequence only has three events, and the
second one has four.  Because tidal ensures both loops fit inside the
same cyclic duration, you end up with a polyrhythm.

You can layer any number of these subpatterns to create many
polyrhythms:

~~~haskell
d1 $ sound "[bd bd bd, sd cp sd cp, arpy arpy, odx]"
~~~
{: .render}

And of course you can use groupings inside of the layers:

~~~haskell
d1 $ sound "[bd bd bd, [sd sd] cp, arpy [arpy [arpy arpy] arpy arpy], odx]"
~~~
{: .render}

## Playing one step per cycle

To specify a group where only one step is played per cycle, use angle
brackets. For example:

~~~haskell
d1 $ sound "bd <arpy:1 arpy:2 arpy:3>"
~~~
{: .render}

The above will result in the sequence `bd arpy:1 bd arpy:2 bd arpy:3`,
over three cycles.
