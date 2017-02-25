---
title: legato
category: synth_parameters
---

Controls the length of the sound relative to its "space" in the pattern - the time from the beginning of one
sound in the pattern to the beginning of the next - also known as the "inter-onset time"<sup>1</sup>.

`legato "1"` means the sound will play for the duration of its "space" and then stop playing.  For example

~~~haskell
d1 $ sound "[[rave rave] rave]" # legato "1"
~~~

will play the first two sounds for 1/4 of a cycle, and the third for 1/2 of a cycle.  Other values of `legato` will
multiply that duration, such that values greater than 1 will cause the sounds to overlap, and values less than one will
cause the sounds to end before the next one begins.

For softsynths, leaving `legato` unspecified causes SuperDirt to default to `legato "1"`.

For samples, when leaving `legato` unspecified SuperDirt will play the sample for its full duration, whatever that might be.

See also the [`sustain` parameter](sustain.md).

&nbsp;

[1]: SuperDirt normally receives messages from Tidal and calculates the inter-onset time automatically, but you can use the `delta` parameter to override this and control it directly.
