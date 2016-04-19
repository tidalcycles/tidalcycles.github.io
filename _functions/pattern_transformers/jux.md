---
title: jux (and juxBy)
category: pattern_transformers
---

The `jux` function creates strange stereo effects, by applying a
function to a pattern, but only in the right-hand channel. For
example, the following reverses the pattern on the righthand side:

~~~~ haskell
d1 $ slow 32 $ jux (rev) $ striate' 32 (1/16) $ sound "bev"
~~~~

When passing pattern transforms to functions like `jux` and `every`,
it's possible to chain multiple transforms together with `.`, for
example this both reverses and halves the playback speed of the
pattern in the righthand channel:

~~~~ haskell
d1 $ slow 32 $ jux ((# speed "0.5") . rev) $ striate' 32 (1/16) $ sound "bev"
~~~~

With `jux`, the original and effected versions of the pattern are
panned hard left and right (i.e., panned at 0 and 1). This can be a
bit much, especially when listening on headphones. The variant `juxBy`
has an additional parameter, which brings the channel closer to the
centre. For example:

~~~~ haskell
d1 $ juxBy 0.5 (density 2) $ sound "bd sn:1"
~~~~

In the above, the two versions of the pattern would be panned at 0.25
and 0.75, rather than 0 and 1.
