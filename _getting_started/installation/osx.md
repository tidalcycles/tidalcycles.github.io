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

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Initialise homebrew:

```bash
brew doctor
```

Install Dirt, a synth (well, more of a sampler) made to work with
Tidal. A homebrew 'recipe' for dirt does exist, but that doesn't come
with any sounds to play with, so for now it's probably easiest just
download it all from github and compile it as follows.

Install some libraries which the Dirt synth needs to compile:

```bash
brew install liblo libsndfile libsamplerate
```

Install the 'jack audio connection kit' which Dirt also needs:

```bash
brew install jack
```

{% capture jackosx %}
__Note:__ If Homebrew's installation of Jack fails with a `make` error, you can use the [JackOSX Installer](http://www.jackosx.com/download.html) instead. This will, however, add an additional step when installing Dirt (see below).
{% endcapture %}
{% include alert.html content=jackosx %}


### Alternative: Installing dependencies via Mac Ports
[MacPorts](https://www.macports.org/) is another package manager for OS X.
If you already installed dependencies via homebrew, skip ahead to build Dirt.  
Otherwise if you happen to already use MacPorts, here's a list of steps in order to get all dependencies:

```bash
sudo port install libsndfile libsamplerate
```

also for jack

```bash
sudo port install jack
```

### Building Dirt from source

Get the source code for the Dirt synth:

```bash
cd ~
git clone https://github.com/yaxu/Dirt.git
```

Compile dirt:

```bash
cd ~/Dirt
make clean; make
```

{% capture dirtcompile %}
If Dirt fails to compile after using the JackOSX installer as above, you may need to add flags to the Makefile to specify the appropriate paths:

```make
CFLAGS += -g -I/usr/local/include -Wall -O3 -std=gnu99 -DCHANNELS=2
LDFLAGS += -lm -L/usr/local/lib -llo -lsndfile -lsamplerate -ljack
```
{% endcapture %}
{% include alert.html content=dirtcompile caption="Homebrew users" %}

{% capture dirtcompileport %}
As MacPorts installs all libs on `/opt/local/`
edit the Makefile to point the right direction of `libsndfile` and `libsamplerate`

```make
CFLAGS += -g -I/opt/local/include -Wall -O3 -std=gnu99
LDFLAGS += -lm -L/opt/local/lib  -llo -lsndfile -lsamplerate
```
{% endcapture %}
{% include alert.html content=dirtcompileport caption="MacPorts users" %}


## Haskell

get the binary installer for [the haskell platform](https://www.haskell.org/platform/mac.html).  
Or you might get it from homebrew (this takes a while)

```bash
brew install haskell-platform
```

Install Tidal itself:

```bash
cabal update
cabal install tidal
```

Now you have to start dirt, the synthesiser/sampler, before getting a
code editor going. So back in a terminal window, start jack:

```bash
jackd -d coreaudio &
```

Then start dirt:

```bash
cd ~/Dirt
./dirt &
```

You will have to start dirt every time you want to run Tidal,
otherwise there will be no sound.

Now you need to install and configure an editor, following the
instructions below. For beginners, the Atom editor is recommended.
