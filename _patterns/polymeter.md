---
category: polymeter
layout: default
---

We talked about _polyrhythms_ earlier, but Tidal can also produce
_polymeter_ sequences. A polymeter pattern is one where two patterns
have different sequence lengths, but share the same pulse or tempo.

You use curly brace syntax in Tidal to create a polymeter rhythm:

```haskell
d1 $ sound "{bd hh sn cp, arpy bass2 drum notes can}"
```

The code above results in a five-note rhythm being played at the pulse of
a four-note rhythm. If you switch the groups around, it results in a
four-note rhythm over a five-note rhythm:

```haskell
d1 $ sound "{arpy bass2 drum notes can, bd hh sn cp}"
```

Sometimes you might want to create an odd polymeter rhythm without having to
explicitly create a base rhythm. You _could_ do this with rests:

```haskell
d1 $ sound "{~ ~ ~ ~, arpy bass2 drum notes can}"
```

But a more efficient way is to use the `%` symbol after the closing curly
brace to specify the number of notes in the base pulse:

```haskell
d1 $ sound "{arpy bass2 drum notes can}%4"

-- the above is the same as this:
d1 $ sound "{~ ~ ~ ~, arpy bass2 drum notes can}"
```

If "polymeter" sounds a bit confusing, there's a good explanation here:
http://music.stackexchange.com/questions/10488/polymeter-vs-polyrhythm
