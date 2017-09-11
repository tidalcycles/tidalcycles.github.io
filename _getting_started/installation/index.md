---
category: installation
layout: default
weight: -9
---

The following installation instructions work for Linux, MacOS and
Windows.

There is an <a
href="https://davidgranstrom.github.io/tidal-bootstrap/">automated
script for MacOS X users</a>, along with a <a
href="https://www.youtube.com/watch?v=dJTfGv2sT-w&t=2s">helpful
walkthrough video</a>, as an alternative to the below.

## If you have install issues

There appears to be an issue with Cabal that is affecting installation.  If you are unable to install TidalCycles with the directions below, please try these alternate installation instructions.

From a terminal window, run this:

~~~~bash
stack setup
stack install tidal
~~~~

Once that's done, you'll also need to change a configuration setting
in Atom. Find the package settings for TidalCycles (```preferences >
tidalcycles > settings```). Change the ```'ghci path'``` option to this:

```stack ghc -- --interactive -XOverloadedStrings```

Restart Atom and it should be able to start TidalCycles.

### Pre-requisites

You first need to install the following three pieces of software,
Haskell, Atom, and SuperCollider. You can download them from their
websites - click on each of the below:

* [Haskell](https://www.haskell.org/platform/)
* [Atom](https://atom.io/)
* [SuperCollider](http://supercollider.github.io/download) (version 3.7 or later)
* You may also need to install [Git](https://git-scm.com/)

For the curious: Haskell is the programming language that TidalCycles
is written in, Atom is a programmers' editor that you will use to
write TidalCycles patterns in, and SuperCollider will make all the
noise, by hosting the SuperDirt synth that was made for TidalCycles.  Git is a
program that lets your computer retrieve the source code for SuperDirt for use
in SuperCollider.

> If you are installing on Windows, make sure you follow Step 3 of the Haskell
> installation [instructions](https://www.haskell.org/platform/#windows). Also on
> Windows, when installing SuperCollider, you must also download the `sc3-plugins`
> zip file. Run SuperCollider once in order to create user directories. Then open
> the zip file and extract the `SC3plugins` directory to
> `C:\Users\<username>\AppData\Local\SuperCollider\Extensions`. You may have to
> manually create the `Extensions` directory. Restart SuperCollider so that it finds
> the `SC3plugins` directory.

> If you are installing on Linux or Mac you need the SuperCollider
> sc3-plugins for using many of the synths included in SuperDirt. Most
> of the examples in the documentation will still work, so you could
> skip this step and return to it later. You can either install the
> latest version from
> [github](https://github.com/supercollider/sc3-plugins) according to
> the instructions there, or if you are using Linux, you may find it
> in your package manager. On Fedora the package is called
> `supercollider-sc3-plugins`.

Once you have the above applications downloaded and installed, you
will need to follow the following three steps to complete the
installation:

### 1. Install the TidalCycles pattern engine

Open a Terminal window and type in the following command, to install
TidalCycles:

~~~~bash
cabal install tidal
~~~~

> If you're unsure how to open a terminal window: in Windows it's
> "command prompt" under accessories, in Mac OS it's "Terminal" under
> Utilities, Linux varies according to distribution but generally find
> "Terminal" in the menus).

### 2. Install the SuperDirt synth

Start SuperCollider, and in the editor window paste in the following line of code:

~~~~c
include("SuperDirt")
~~~~

Run the code by clicking on it, to make sure the cursor is on this
line, then hold down shift and press enter.

It will download SuperDirt and
you will see it has completed when the Post Window displays:

~~~~c
... the class library may have to be recompiled.
-> SuperDirt
~~~~

After it has completed, you will need to restart SuperCollider (or
alternatively, recompile the class library via the "Language" menu).

If you instead see a message like this:

~~~~c
  "ERROR: Quarks requires git to be installed"
~~~~

Then you will need install git from
[https://git-scm.com/downloads](https://git-scm.com/downloads), and
return to SuperCollider to run `include("SuperDirt")` again.

### 3. Install the TidalCycles Atom plugin

Start Atom, and install the TidalCycles plugin. You can find it via
the menus under `edit > settings > install`, then typing “tidalcycles”
into the search box. Once that's installed, restart atom.

**That's it!** You're now ready to start TidalCycles and SuperDirt for
  the first time.
