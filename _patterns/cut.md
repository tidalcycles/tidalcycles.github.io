---
category: cut
layout: default
---


So far, all of our examples have used short samples. However, maybe you've
experimented with some long samples. Maybe you've noticed that really long
samples can cause a lot of bleed and unwanted sound.

With Tidal's `cut` effect, you can "choke" a sound and stop it from playing
when a new sample is triggered.

Consider the following example where we have a pattern of "arpy" sounds,
played at a low speed, so there is a lot of bleed into each sample:

`d1 $ sound $ samples "arpy*8" (run 8) # speed "0.25"`

We can stop this bleed by using `cut` and assigning the pattern a cut group of
"1":

```haskell
d1 $ sound $ samples "arpy*8" (run 8) # speed "0.25" # cut "1"
```

No more bleed!

You can use any number for the cut group.

Cut groups are global, to the Tidal process, so if you have two Dirt connections,
use two different cut group values to make sure the patterns don't choke
each other:

```haskell
d1 $ sound $ samples "arpy*8" (run 8) # speed "0.25" # cut "1"
d2 $ sound $ samples "bass2*6" (run 6) # speed "0.5" # cut "2"
```

This also works in a `stack`:

```haskell
d1 $ stack [
   sound $ samples "arpy*8" (run 8) # speed "0.25" # cut "1",
   sound $ samples "bass2*6" (run 6) # speed "0.5" # cut "2" ]
```
