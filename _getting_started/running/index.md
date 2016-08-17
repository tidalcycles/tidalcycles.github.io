---
category: running
weight: -9
---

There are two steps to starting TidalCycles each time, first starting SuperDirt inside SuperCollider, and then starting TidalCycles inside Atom.

To start SuperDirt, paste the following code into a SuperCollider
window, click on the code, hold down shift and press enter.

~~~~c
SuperDirt.start
~~~~

To start TidalCycles in Atom, first create a new document and save it with a filename
that ends in `.tidal`, e.g. `test.tidal`. Then open the Packages menu and select TidalCycles -> Boot TidalCycles.
A small window will open at the bottom of the window and display some text to tell you that the
GHCi interpreter is running. Try running a simple pattern by typing in the code
below and holding down shift and pressing enter to evaluate it (Holding
  down control and pressing enter will also work, this evaluates multiple lines).

~~~~haskell
d1 $ sound "bd sn"
~~~~

**If you hear sound, congratulations!** Time to move on to [the tutorial](/patterns.html).

If you get stuck, you are very welcome to ask questions and share
problems on [the forum](http://lurk.org/groups/tidal/), or on the
`#tidal` channel of the
[TOPLAP slack](http://toplap.org/toplap-on-slack/).

As is common with free software, you have alternative choices for the
different components that make up a TidalCycles system. Atom and
SuperDirt might be all you ever need, but read on if you want to learn
what other editors and synths you can use.
