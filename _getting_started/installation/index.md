---
category: installation
layout: default
weight: -9
---

The following installation instructions work for Linux, MacOS and
Windows.

### Pre-requisites

You first need to install the following three pieces of software,
Haskell, Atom and SuperCollider. You can download them from their
websites - click on each of the below:

* [Haskell](https://www.haskell.org/platform/)
* [Atom](https://atom.io/)
* [SuperCollider](http://supercollider.github.io/download) (version 3.7 or later)

For the curious: Haskell is the programming language that TidalCycles
is written in, Atom is a programmers' editor that you will use to
write TidalCycles patterns in, and SuperCollider will make all the
noise, by hosting the SuperDirt synth that was made for TidalCycles.

Once you have the above three downloaded and installed, you will need
to set them up.

### Install the TidalCycles pattern engine

Open a Terminal window, and type in the following command, to install TidalCycles:

~~~~bash
cabal install tidal
~~~~

### Install the SuperDirt synth

Start SuperCollider, and in the editor window paste in the following line of code:

~~~~c
include("SuperDirt")
~~~~

Run the code by clicking on it, to make sure the cursor is on this
line, then hold down shift and press enter.

After it has completed, you will need to restart SuperCollider (or
alternatively, recompile the class library via the "Language" menu).

### Install the TidalCycles Atom plugin

Start Atom, and install the TidalCycles plugin. You can find it via
the menus under `edit > settings > install`, then typing “tidalcycles”
into the search box. Once that's installed, restart atom.

**That's it!** You're now ready to start TidalCycles and SuperDirt for
  the first time.
