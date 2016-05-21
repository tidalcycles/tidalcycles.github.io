---
category: running
weight: -9
---

There are two steps to starting TidalCycles each time, first starting SuperDirt inside SuperCollider, and then starting TidalCycles inside Atom.

To start SuperDirt, paste the following code into a SuperCollider
window, click on the code, hold down shift and press enter.

~~~~c
SuperDirt.startup
~~~~

To start TidalCycles, open a new window, save it with a filename than ends in `.tidal`, e.g. `test.tidal`, then try running a simple pattern:

~~~~haskell
s1 $ sound “bd sn”
~~~~

n.b. If you see an example starting with `d1` to `d9` change it to be e.g. `s1` instead. This is because you are using the new `SuperDirt` synth.

If you hear sound, congratulations, time to move on to the tutorial!

If you get stuck feel free to ask questions and share problems on
[the forum](http://lurk.org/groups/tidal/), or on the `#tidal` channel
of the [TOPLAP slack](http://toplap.org/toplap-on-slack/).
