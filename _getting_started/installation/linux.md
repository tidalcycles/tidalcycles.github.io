---
title: Tidal on Linux
category: installation
layout: default
weight: 10
---

## Linux installation script - Debian and Ubuntu users

If you use Debian, or a related distribution such as Ubuntu, the
following script should install tidal, dirt and its dependencies for
you. Follow the link, then click 'raw' to download the file:

  <https://github.com/yaxu/Tidal/blob/master/doc/install-linux.sh>

Then open a terminal window, and type the following

~~~~sh
cd ~/Downloads
bash install-linux.sh
~~~~

You'll need to change `~/Downloads` to the location that your web
browser saved the `install-linux.sh` file.

Once you have run the script, log out and then back in again (to
ensure you have the right group settings), and if all is well, you
should be good to skip ahead to "Starting dirt".

## Linux installation by hand

Unless otherwise specified, you will need to run the commands in a
terminal window.

### Installing Dirt by hand

Tidal does not include a synthesiser, but instead communicates with an
external synthesiser using the Open Sound Control protocol. It has
been developed for use with a particular software sampler called
"dirt". You'll need to run it with "jack audio".

Here's how to install dirt under Debian, Ubuntu or a similar distribution:

~~~~sh
sudo apt-get install build-essential libsndfile1-dev libsamplerate0-dev \
                     liblo-dev libjack-jackd2-dev qjackctl jackd git
git clone --recursive https://github.com/tidalcycles/Dirt.git
cd Dirt
make clean; make
~~~~

### Installing Tidal by hand

Tidal is embedded in the Haskell language, so you'll have to install
the haskell interpreter and some libraries, including tidal
itself. Under debian, you'd install haskell like this:

~~~~sh
sudo apt-get install ghc zlib1g-dev cabal-install
~~~~

Or otherwise could grab the [haskell platform](http://www.haskell.org/platform/)

Once Haskell is installed, you can install tidal like this:

~~~~sh
cabal update
cabal install tidal
~~~~

You will have to start dirt every time you want to run Tidal,
otherwise there will be no sound. 

Now you need to install and configure an editor, following the
instructions below. For beginners, the Atom editor is recommended.

### Starting Dirt

Before you use Tidal, you'll need to start the Dirt synth.

First of all, start the "jack" audio layer. The easier way to do this
is with the "qjackctl" app, which you should find in your program
menus under "Sound & Video" or similar. If you have trouble with
qjackctl, you can also try starting jack directly from the
commandline:

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
cd ~/Dirt
./dirt &
~~~~

If you have problems with jack, try enabling realtime audio, and
adjusting the settings by installing and using the "qjackctl"
software. Some more info can be found in the [Ubuntu Community page for JACK configuration](https://help.ubuntu.com/community/HowToJACKConfiguration)

**You will have to start dirt every time you want to run Tidal,
otherwise there will be no sound.**

Now you need to install and configure an editor, following the
instructions below. For beginners, the Atom editor is recommended.
