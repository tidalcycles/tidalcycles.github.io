---
title: Tidal on Windows
category: installation
layout: default
weight: 100
---

This is a rough set of instructions based on information from the Tidal
mailing list.


## Cygwin
First, install [Cygwin](https://www.cygwin.com). In Cygwin, make sure the
following packages are installed:

~~~~
git
gcc-core
make
gcc-g++
libsndfile
libsndfile-devel
libsamplerate
libsamplerate-devel
~~~~

## Portaudio

Download Portaudio from http://www.portaudio.com. In Cygwin, Unpack
the download with `tar fxvz`. After unpacking, from Cygwin, go to the directory
where you unpacked Portaudio and then run:

~~~~bash
./configure && make && make install
~~~~

## Liblo

Download [Liblo](http://liblo.sourceforge.net).
In Cygwin, unpack Liblo with `tar fxvz`, then in Cygwin go to the directory where you
unpacked Liblo and then run:

~~~~bash
./configure && make && make install
~~~~

## Dirt

In Cygwin:

~~~~bash
git clone http://github.com/tidalcycles/Dirt.git
~~~~

Then:

~~~~bash
cd Dirt
make dirt-pa
~~~~

Then you get a `dirt-pa.exe` that works. Maybe this even works on any
windows system without having to compile. You'd need `cygwin1.dll` at
least though.

## Haskell

[Download and install the haskell platform](https://www.haskell.org/platform/).

*You will then either need to restart Cygwin or reload your Cygwin profile to re-load `cabal` on your path.*

Then back in Cygwin:

~~~~bash
cabal update
~~~~

At this point, you may be notified to update `cabal-install`. You can do so by typing:

~~~~bash
cabal install cabal-install
~~~~

Then finally, install the Tidal package:

~~~~bash
cabal install tidal
~~~~
