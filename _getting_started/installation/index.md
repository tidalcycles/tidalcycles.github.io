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

### 1. Prerequisites

You first need to install the following three pieces of software,
Haskell, Atom, and SuperCollider. You can download them from their
websites - click on each of the below:

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

>**NOTE** As of September 26 2017, There appears to be an issue with Cabal that is 
>affecting installation on MacOS.  
>If you are unable to install TidalCycles with the directions below, please try 
>these alternate installation instructions. From a terminal window, run this:

>~~~~bash
>stack setup
>stack install tidal
>~~~~

>Once that's done, you'll also need to change a configuration setting
>in Atom. Find the package settings for TidalCycles (*preferences >
>tidalcycles > settings*). Change the ```'ghci path'``` option to this:

>```stack ghci```

>Restart Atom and it should be able to start TidalCycles.

>**Skip ahead to MacOS Step #3 (Install the SuperDirt synth) if you used this method**

#### Standard MacOS Instructions:

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
into the search box. Once that's installed, restart atom.


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

**Important:** Make sure you follow Step 2 of the Haskell 
installation [instructions](https://www.haskell.org/platform/#windows). 

**Important:** When installing SuperCollider, you must also download the `sc3-plugins`
zip file. Run SuperCollider once in order to create user directories. Then open
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
into the search box. Once that's installed, restart atom.

<a id="linux">&nbsp;</a>
<hr class="marker">

## Linux 

### 1. Prerequisites

You first need to install the following three pieces of software,
Haskell, Atom, and SuperCollider. You can download them from their
websites - click on each of the below:

* [Haskell](https://www.haskell.org/platform/)
* [Atom](https://atom.io/)
* [SuperCollider](http://supercollider.github.io/download) (version 3.7 or later)
* You may also need to install [Git](https://git-scm.com/)

You need the SuperCollider
sc3-plugins for using many of the synths included in SuperDirt. Most
of the examples in the documentation will still work, so you could
skip this step and return to it later. You can either install the
latest version from
[github](https://github.com/supercollider/sc3-plugins) according to
the instructions there, or you may find it
in your package manager. On Fedora the package is called
`supercollider-sc3-plugins`.

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
into the search box. Once that's installed, restart atom.


**That's it!** You're now ready to start TidalCycles and SuperDirt for
  the first time.
