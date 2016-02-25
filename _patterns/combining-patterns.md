---
category: combining_patterns
layout: default
---


Ok, remember when we started adding effects:

```haskell
d1 $ sound "bd sn drum arpy" |=| pan "0 1 0.25 0.75"
```

What we're actually doing in the code above is
_combining two patterns together_: the `sound` pattern, and the `pan` pattern.
The special pipe operators (`|=|, |+|, |-|, |*|, |/|`), allow us to combine
two patterns.

Using the code above, we can actually swap sides and it sounds the same:

```haskell
d1 $ pan "0 1 0.25 0.75" |=| sound "bd sn drum arpy"
```

The main thing to know when combining patterns like this is that the left-most
pattern determines the rhythm. Removing one of the elements from the `pan`
pattern on the left results in a cycle with three samples played:

```haskell
d1 $ pan "0 1 0.25" |=| sound "bd sn drum arpy"
```

In the code above, the `pan` pattern determines the rhythm because it is the
left-most pattern. The `sound` pattern now only determines what samples are
played at what time. The sound pattern gets _mapped_ onto the pan pattern.

This allows us to do some unique things:

```haskell
d1 $ up "0 0*2 0*4 1" |=| sound "[arpy, bass2, bd]"
```

Above, `sound` is merely just specifying three samples to play on each note.
The note rhythm is defined by `up`, while also specifying pitches.
