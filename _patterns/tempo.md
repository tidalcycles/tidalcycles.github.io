---
category: tempo
layout: default
---

If you've made it this far without changing the tempo in all these examples,
then you're probably ready to change it up.

Tidal's core unit of time is cycles per second. It can be set with the
`cps` function:

~~~haskell
cps 1
~~~

You can execute `cps` just like a pattern (using Shift+Enter in your editor).

`cps` accepts a positive numeric value that can include a decimal:

~~~haskell
cps 1.5
cps 0.75
cps 10
~~~

### Setting BPM

Tidal also includes a helper function called `bps` to set "beats per second".
To set beats-per-minute, call `bps` with your bpm value, divided by 60:

~~~haskell
-- sets a tempo of 170 BPM:
bps (120/60)

Or you might want to divide it by 120 instead, to create a pattern twice as
long (or half the speed, depending on how you think about it:

-- sets a tempo of 100 BPM:
bps (100/120)
~~~
