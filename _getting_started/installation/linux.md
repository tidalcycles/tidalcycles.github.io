---
title: Tidal on Linux
category: installation
layout: default
weight: 10
---

The following currently assumes a Debian, or Debian-derived Linux
distribution such as Ubuntu or Mint, although it should be quite easy
to adapt to another distribution.

A Linux installation script now exists, which should mostly work under
recent debian based distributions. It comes with no warranty,
though. It's available here, click 'raw' to download it:

  <https://github.com/yaxu/Tidal/blob/master/doc/install-linux.sh>

Once you have run that script, log out and then back in again (to ensure you have the right group settings), and if all is well, you should be good to go.

Alternatively, you can follow the step-by-step instructions
below. Unless otherwise specified, you will need to run the commands
in a terminal window.

## Installing Dirt

Tidal does not include a synthesiser, but instead communicates with an
external synthesiser using the Open Sound Control protocol. It has
been developed for use with a particular software sampler called
"dirt". You'll need to run it with "jack audio".

~~~~sh
sudo apt-get install build-essential libsndfile1-dev libsamplerate0-dev \
                     liblo-dev libjack-jackd2-dev qjackctl jackd git
git clone https://github.com/yaxu/Dirt.git
cd Dirt
make clean; make
~~~~

Then you'll have to start jack, using the 'qjackctl' app under Linux,
or otherwise from the commandline:

~~~~sh
jackd -d alsa &
~~~~

If that doesn't work, you might well have something called
"pulseaudio" in control of your sound. In that case, this should work:

~~~~sh
/usr/bin/pasuspender -- jackd -d alsa &
~~~~

And finally you should be able to start dirt with this:

~~~~sh
./dirt &
~~~~

If you have problems with jack, try enabling realtime audio, and
adjusting the settings by installing and using the "qjackctl"
software. Some more info can be found in the [Ubuntu Community page for JACK configuration](https://help.ubuntu.com/community/HowToJACKConfiguration)

You will have to start dirt every time you want to run Tidal,
otherwise there will be no sound.

Now you need to install and configure an editor, following the
instructions below. For beginners, the Atom editor is recommended.

## Tidal

Tidal is embedded in the Haskell language, so you'll have to install
the haskell interpreter and some libraries, including tidal
itself. Under debian, you'd install haskell like this:

~~~~sh
sudo apt-get install ghc6 zlib1g-dev cabal-install
~~~~

Or otherwise could grab the [haskell platform](http://www.haskell.org/platform/)

Once Haskell is installed, you can install tidal like this:

~~~~sh
cabal update
cabal install tidal
~~~~
