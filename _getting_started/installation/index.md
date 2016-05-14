---
category: installation
layout: default
weight: -9
---

## Pre-requisites

To get TidalCycles working on Linux, MacOS or Windows, you first need to download and install the following three pieces of software:

* Haskell, for example via the Haskell Platform: https://www.haskell.org/platform/
* SuperCollider (version 3.7 or later) - http://supercollider.github.io/download 
* Atom - https://atom.io/ 

Once you have the above three installed, you will need to set them up.

## Install the TidalCycles pattern engine

Open a Terminal window, and type in the following command, to install TidalCycles:

~~~~bash
cabal install tidal
~~~~

This command will take a while to run, but you can go ahead with the next steps while you’re waiting.

## Install the SuperDirt synth

Start SuperCollider, and in the editor window paste in the following line of code:

~~~~c
( include("SuperDirt"); include("Dirt-Samples"); )
~~~~

Click on the code to make sure the cursor is on this line, then hold down ctrl and press enter. This will include the SuperDirt synthesiser, and a default audio samples to play with. It will also take a while to run, but you can move on while it’s running.

## Install the Atom plugin

Start Atom, and install the Tidal plugin. You can find it via the menus under edit > settings > install, then typing “tidal” into the search box.
