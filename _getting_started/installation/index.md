---
category: installation
layout: default
weight: -9
---

## Pre-requisites

To get TidalCycles working on Linux, MacOS or
Windows, you first need to download and install the following three
pieces of software:

* Haskell, for example via the Haskell Platform: https://www.haskell.org/platform/
* Atom - https://atom.io/ 
* SuperCollider (version 3.7 or later) - http://supercollider.github.io/download 

For the curious: Haskell is the programming language that TidalCycles
is written in, Atom is a programmers' editor that you will use to
write TidalCycles patterns in, and SuperCollider is a synthesiser that
will make all the noise, via the SuperDirt synth that was made for
TidalCycles.

Once you have the above three installed, you will need to set them up.

## Install the TidalCycles pattern engine

Open a Terminal window, and type in the following command, to install TidalCycles:

~~~~bash
cabal install tidal
~~~~

This command will take a little while to run, but you can go ahead
with the next steps while you’re waiting.

## Install the SuperDirt synth

Start SuperCollider, and in the editor window paste in the following line of code:

~~~~c
include("SuperDirt")
~~~~

Run the code by clicking on it, to make sure the cursor is on this
line, then hold down shift and press enter. This will install the
SuperDirt synthesiser, and a large pack of audio samples to start
with. It will take a while to run as well, but you can move on to
install the atom plugin while it’s running.

After it has completed, you will need to reset SuperCollider, either
by selecting `Language > recompile Class Library` in the menus, or
closing and restarting the whole app.

## Install the TidalCycles Atom plugin

Start Atom, and install the TidalCycles plugin. You can find it via
the menus under `edit > settings > install`, then typing “tidalcycles”
into the search box. Once that's installed, restart atom and you
should be ready to start TidalCycles and SuperDirt.
