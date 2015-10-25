---
title: begin
category: synth_parameters
---
a pattern of numbers from 0 to 1. Skips the beginning of each sample, e.g. `0.25` to cut off the first quarter from each sample.

Using `begin "-1"` combined with `cut "-1"` allows you to apply different synth params across a sample longer than one cycle:

```haskell
cps 0.5

d1 $ sound "breaks125" |+| unit "c" |+| begin "-1" |+| coarse (slow 8 $ "1 2 4 8 16 32 64 128")
```

This will play the `breaks125` sample and apply