---
category: repetition
layout: default
---

There are two short-hand symbols you can use inside patterns to speed things up
or slow things down: `*` and `/`. You could think of these like multiplication
and division.

Use the `*` symbol to make a pattern, or part of a pattern, repeat as many times
as you'd like:

```haskell
d1 $ sound "bd*2"
```

> This is the same as doing `d1 $ sound "bd bd"`

The code above uses `*2` to make a sample play twice.

You can use the `/` symbol to make a part of a pattern slow down, or occur
less often:

```haskell
d1 $ sound "bd/2"
```

The code above uses `/2` to make a sample play half as often, or once every
2nd cycle.

Using different numbers works as you'd expect:

```haskell
d1 $ sound "bd*3" -- plays the bd sample three times each cycle
d1 $ sound "bd/3" -- plays the bd samples only once each third cycle
```

### Using * and / on Groups

You can apply the `*` and `/` symbols on groups of patterns:

```haskell
d1 $ sound "[bd sd]*2 cp"
d1 $ sound "[bd sd] cp/2"
d1 $ sound "[[bd sd] cp]*2" -- speeds up the entire pattern by 2
d1 $ sound "[[bd sd] cp]/2" -- slows down the entire pattern by 2
```

You can also use the symbols on nested groups to create more complex
symbol logic:

```haskell
d1 $ sound "[bd sn sn*3]/2 [bd sn*3 bd*4]/3"
d1 $ sound "[bd [sn sn]*2]/2 [bd [sn bd]/2]*2"
```
