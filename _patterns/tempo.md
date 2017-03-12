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

Tidal's timing is based on cycles, rather than beats, however it is more common
for people to think in terms of beats per minute (BPM). If you prefer
to think in this way, you have to decide how many beats you want to have per cycle,
and divide accordingly. For example if you wanted to play at 140 bpm, with four
beats per cycle, then you could do:

~~~haskell
cps (140/60/4)
~~~

