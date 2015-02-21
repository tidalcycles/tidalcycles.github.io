---
title: Tidal on Mac OS X
layout: default
category: installation
weight: 20
---

Unless otherwise specified, the below commands should be typed or pasted into a terminal window.

Install homebrew:

```bash
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"
```

Initialise homebrew:

```bash
brew doctor
```

Install Dirt, a synth (well, more of a sampler) made to work with
Tidal. A homebrew 'recipe' for dirt does exist, but that doesn't come
with any sounds to play with, so for now it's probably easiest just
download it all from github and compile it as follows.

Install the liblo library, which the Dirt synth needs to compile:

```bash
brew install liblo
```

Install the "jack audio connection kit", Dirt needs it too:

```bash
brew install jack
```

{% capture jackosx %}
__Note:__ If Homebrew's installation of Jack fails with a `make` error, you can use the [JackOSX Installer](http://www.jackosx.com/download.html) instead. This will, however, add an additional step when installing Dirt (see below).
{% endcapture %}
{% include alert.html content=jackosx %}


Get the sourcecode for the Dirt synth:

```bash
cd ~
git clone https://github.com/yaxu/Dirt.git
```

Compile dirt:

```bash
cd ~/Dirt
make clean; make
```

If you get errors for sndfile.h and samplerate.h, install libsndfile and libsamplerate via homebrew.

```bash
brew install libsndfile
```

then,

```bash
brew install libsamplerate
```

{% capture dirtcompile %}
**Note:** If Dirt fails to compile after using the JackOSX installer as above, you may need to add flags to the Makefile to specify the appropriate paths:

```make
CFLAGS += -g -I/usr/local/include -Wall -O3 -std=gnu99 -DCHANNELS=2
LDFLAGS += -lm -L/usr/local/lib -llo -lsndfile -lsamplerate -ljack
```
{% endcapture %}
{% include alert.html content=dirtcompile %}

Install Haskell from the binaries served at:

[https://www.haskell.org/platform/mac.html](https://www.haskell.org/platform/mac.html)

Or you might get it from homebrew (this takes a while)

```bash
brew install haskell-platform
```

Install Tidal (yeah!)

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
