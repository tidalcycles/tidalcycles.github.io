---
category: installation
layout: default
weight: -9
---

<style>
  .marker { margin-bottom: 40px;}
</style>

You can install TidalCycles on MacOS, Windows, and Linux. Locate the instructions
below for your specific operating system.

* [MacOS](#macos)
* [Windows](#windows)
* [Linux](#linux)

<a id="macos">&nbsp;</a>
<hr class="marker">

## Mac OS 

There are two ways to install Tidal on a Mac - tidal-bootstrap, which
automates as much as possible, and a step-by-step, manual process.

### Tidal-bootstrap - automated install on a mac

You can download <a
href="https://tidalcycles.github.io/tidal-bootstrap/">tidal-bootstrap here</a>.

***Please note:*** There are several reports that tidal-bootstrap currently only
works if you install the 'core' version of the haskell platform
first. You can <a
href="https://www.haskell.org/platform/mac.html#osx-none">download
that here</a>.

Here's a video demonstrating the tidal-bootstrap install process:

<iframe width="560" height="315" src="https://www.youtube.com/embed/dJTfGv2sT-w" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Once that's done, it's time to
  [start TidalCycles and SuperDirt for the first time](#running).


### Mac OS - manual install

If tidal-bootstrap doesn't work for you, or you prefer a hands-on
approach, you can install all the components of a tidalcycles system
manually. 

### 1. Prerequisites

You first need to install the following three pieces of
software, Haskell, Atom, and SuperCollider. You can download them from
their websites - click on each of the below:

* [Haskell](https://www.haskell.org/platform/)
* [Atom](https://atom.io/)
* [SuperCollider](http://supercollider.github.io/download) (version 3.7 or later)
* You may also need to install [Git](https://git-scm.com/)

You will need the SuperCollider sc3-plugins for using many of the synths included in 
SuperDirt. Most of the examples in the documentation will still work, so you could
skip this step and return to it later. You can install the latest version from
[github](https://github.com/supercollider/sc3-plugins) according to
the instructions there.

### 2. Install the TidalCycles pattern engine

Open a Terminal window and type in the following command, to install
TidalCycles:

~~~~bash
cabal install tidal
~~~~

> If you're unsure how to open a terminal window, in Mac OS it's 
> "Terminal" under Utilities.


### 3. Install the SuperDirt synth

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


### 4. Install the TidalCycles Atom plugin

Start Atom, and install the TidalCycles plugin. You can find it via
the menus under `edit > settings > install`, then typing “tidalcycles”
into the search box. Once that's installed, restart atom, and you should be ready to [start TidalCycles and
  SuperDirt for the first time](#running).

<a id="windows">&nbsp;</a>
<hr class="marker">

## Windows 

### 1. Prerequisites

You first need to install the following three pieces of software,
Haskell, Atom, and SuperCollider. You can download them from their
websites - click on each of the below:

* [Haskell](https://www.haskell.org/platform/)
* [Atom](https://atom.io/)
* [SuperCollider](http://supercollider.github.io/download) (version 3.7 or later)
* You may also need to install [Git](https://git-scm.com/)

**Important:** When installing SuperCollider, you must also download the `sc3-plugins`
zip file, or otherwise superdirt's built-in synths won't work. Run SuperCollider once in order to create user directories. Then open
the zip file and extract the `SC3plugins` directory to
`C:\Users\<username>\AppData\Local\SuperCollider\Extensions`. You may have to
manually create the `Extensions` directory. Restart SuperCollider so that it finds
the `SC3plugins` directory.

### 2. Install the TidalCycles pattern engine

Open a Terminal window and type in the following command, to install
TidalCycles:

~~~~bash
cabal install tidal
~~~~

> If you're unsure how to open a terminal window: in Windows it's
> "command prompt" under Accessories


### 3. Install the SuperDirt synth

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

### 4. Install the TidalCycles Atom plugin

Start Atom, and install the TidalCycles plugin. You can find it via
the menus under `edit > settings > install`, then typing “tidalcycles”
into the search box. Once that's installed, restart atom, and you should be ready to [start TidalCycles and
  SuperDirt for the first time](#running)

<a id="linux">&nbsp;</a>
<hr class="marker">

## Linux 

### 1. Prerequisites

You need to have four pieces of software,
[Haskell](https://www.haskell.org/),
[Atom](https://atom.io/),
[SuperCollider](http://supercollider.github.io/download) and
[Git](https://git-scm.com/).

Hopefully your Linux distribution makes these easily available to you
via a package manager. For example, if you are using recent version of
Ubuntu or similar, you can install supercollider and haskell with the
following command in a terminal window:

```
sudo apt-get install supercollider sc3-plugins cabal-install git
```

Make sure the supercollider version is 3.7 or later. If it isn't
available in your Linux distribution, then you may have to compile a
newer version yourself, or upgrade your distribution.

### 2. Install the TidalCycles pattern engine

Open a Terminal window and type in the following command, to install
TidalCycles:

~~~~bash
cabal install tidal
~~~~

> If you're unsure how to open a terminal window in Linux,
> it varies according to distribution but generally find
> "Terminal" in the menus).

### 3. Install the SuperDirt synth

Start SuperCollider (e.g. by typing `scide` in a terminal window, or
finding it in your menus), and in the editor window paste in the
following line of code:

~~~~c
include("SuperDirt")
~~~~

Run the code by clicking on it, to make sure the cursor is on this
line, then hold down shift and press enter.

It will download SuperDirt and a fairly large bank of default samples,
so might take quite a while. You will see it has completed when the
Post Window displays:

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

Then you will need install 'git', which you should be able to do via
your linux distribution's package manager.

### 4. Install the TidalCycles Atom plugin

Start Atom, and install the TidalCycles plugin. You can find it via
the menus under `edit > settings > install`, then typing “tidalcycles”
into the search box.

Once that's done, restart atom.

**That's it!** You're now ready to start TidalCycles and SuperDirt for
  the first time.
