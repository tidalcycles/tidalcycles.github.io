---
title: Tidal on Mac OS X
layout: default
category: installation
weight: 20
---

Installing Tidal's dependencies on Mac OS X can be done via homebrew or MacPorts, but choose only one to avoid conflicts with duplicate system libraries.

Unless otherwise specified, the below commands should be typed or pasted into a terminal window.

## Dirt

### Installing dependencies via Homebrew
[Homebrew](http://brew.sh) is a package manager for OS X. It lives side by side with the native libraries and tools that ship with the operating system.

To install homebrew:

~~~bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
~~~

Initialise homebrew:

~~~bash
brew doctor
~~~

Install Dirt, a synth (well, more of a sampler) made to work with
Tidal. A homebrew 'recipe' for dirt does exist, but that doesn't come
with any sounds to play with, so for now it's probably easiest just
download it all from github and compile it as follows.

Install some libraries which the Dirt synth needs to compile:

~~~bash
brew install liblo libsndfile libsamplerate
~~~

Install the 'jack audio connection kit' which Dirt also needs:

~~~bash
brew install jack
~~~

{% capture jackosx %}
__Note:__ If Homebrew's installation of Jack fails with a `make` error, you can use the [JackOSX Installer](http://www.jackosx.com/download.html) instead. This will, however, add an additional step when installing Dirt (see below).
{% endcapture %}
{% include alert.html content=jackosx %}


### Alternative: Installing dependencies via Mac Ports
[MacPorts](https://www.macports.org/) is another package manager for OS X.
If you already installed dependencies via homebrew, skip ahead to build Dirt.  
Otherwise if you happen to already use MacPorts, here's a list of steps in order to get all dependencies:

~~~bash
sudo port install liblo libsndfile libsamplerate
~~~

Download and install jack2 [Jack Download Page](http://jackaudio.org/downloads/). Jack 2 has better OS X integration [Jack Comparison](https://github.com/jackaudio/jackaudio.github.com/wiki/Q_difference_jack1_jack2).

### Building Dirt from source

Get the source code for the Dirt synth:

~~~bash
cd ~
git clone --recursive https://github.com/tidalcycles/Dirt.git
~~~

Compile dirt:

~~~bash
cd ~/Dirt
make clean; make
~~~

{% capture dirtcompile %}
If Dirt fails to compile after using the JackOSX installer as above, you may need to add flags to the Makefile to specify the appropriate paths:

~~~make
CFLAGS += -g -I/usr/local/include -Wall -O3 -std=gnu99 -DCHANNELS=2
LDFLAGS += -lm -L/usr/local/lib -llo -lsndfile -lsamplerate -ljack
~~~
{% endcapture %}
{% include alert.html content=dirtcompile caption="Homebrew users" %}

{% capture dirtcompileport %}
As MacPorts installs all libs on `/opt/local/`
edit the Makefile to point the right direction of `libsndfile` and `libsamplerate`

~~~make
CFLAGS += -g -I/opt/local/include -Wall -O3 -std=gnu99
LDFLAGS += -lm -L/opt/local/lib  -llo -lsndfile -lsamplerate
~~~
{% endcapture %}
{% include alert.html content=dirtcompileport caption="MacPorts users" %}


## Haskell

get the binary installer for [GHC](https://www.haskell.org/ghc/).  
Or you might get it from homebrew:

~~~bash
brew install ghc
~~~

Or, if using MacPorts:

~~~bash
sudo port install ghc
~~~

Install Cabal:

~~~bash
brew install cabal-install
~~~

Install Tidal itself:

~~~bash
cabal update
cabal install cabal-install
cabal install tidal
~~~


{% capture portmidiosx %} On OS X with GHC 7.10 it is necessary to reinstall PortMidi again with frameworks correctly linked:

~~~bash
cabal install portmidi --ghc-options="-optl-Wl,-framework,CoreMIDI,-framework,CoreAudio" --reinstall --jobs=1 --force-reinstalls
~~~
{% endcapture %} {% include alert.html content=portmidiosx caption="OS X users" %}

Now you have to start dirt, the synthesizer/sampler, before getting a
code editor going. So back in a terminal window, start jack:

~~~bash
jackd -d coreaudio &
~~~

Or, if you downloaded Jack 2, then start the JackPilot at:
/Applications/Jack/JackPilot.app
Click __start__ button.

Then start dirt:

~~~bash
cd ~/Dirt
./dirt &
~~~

You will have to start dirt every time you want to run Tidal,
otherwise there will be no sound.

Now you need to install and configure an editor, following the
instructions below. For beginners, the Atom editor is recommended.
