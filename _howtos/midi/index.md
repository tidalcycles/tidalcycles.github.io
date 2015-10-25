---
category: midi
weight: -9
---
A special Haskell module named `tidal-midi` allows you to send MIDI pattern messages to external devices and software synths.

It is in its infancy and there is just one module for the [Volca Keys](http://www.korg.com/us/products/dj/volca_keys/), however it will trigger notes on other synths and more experienced programmers can use it as an example for making a module for another synth (please contribute it back!).

This is all a little experimental and things may well change in the future.

# Install

Just run this at a console:

~~~~bash
cabal update
cabal install tidal-midi
~~~~

# Modify tidal.el

The `tidal.el` file is what loads Tidal-specific modules into Emacs. You will need to edit this file to enable any synth modules defined in the `tidal-midi` package.
If you don't know where this file is located, it should be located in the folder you designated in your `.emacs` config file in this section:

~~~~emacs
(add-to-list 'load-path "~/projects/tidal")
(require 'haskell-mode)
(require 'tidal)
~~~~

In the example above, `tidal.el` should be located under `~/projects/tidal`.

Edit tidal.el file, locate this line:

~~~~emacs
(tidal-send-string "import Sound.Tidal.Context")
~~~~

To enable the Volca Keys synth module, add this line below it:

~~~~emacs
(tidal-send-string "import Sound.Tidal.VolcaKeys")
~~~~

_Please note_ that at the time of this writing, the Volca Keys module is the _only_ module available.

# Talk MIDI from Tidal

Next, assuming you have a MIDI device attached, you need to get its device id. From the console run:

~~~~{bash}
aconnect -o
~~~~

You should see output like the following:

~~~~{bash}
hods@ubuntu:~$ aconnect -o
client 14: 'Midi Through' [type=kernel]
    0 'Midi Through Port-0'
client 16: 'Ensoniq AudioPCI' [type=kernel]
    0 'ES1371
~~~~

Make note of the device ID and number (e.g. "14:0" or "16:0" from above).

Next, open a .tidal file in Emacs and start a Tidal process (`Ctrl-C` then `Ctrl-S`). At this point Tidal is running normally.

To get MIDI to work, type this in Emacs and evaluate it:

```haskell
keyproxy 100000 "16:0"
```

But replace `16:0` with the specific device ID and number that you noted earlier.

The value "100000" is a latency value will need to be adjusted for your specific environment. Change it as you need, although you will currently need to reboot Tidal each time (in emacs you do this with `ctrl-c ctrl-q` to quit tidal, and `ctrl-c ctrl-s` to start it again).

Next, type and evaluate:

```haskell
k <- keyStream
```

Now you are ready to play some MIDI notes. Type and evaluate the following to play MIDI note #40:

`k $ note "40"`

# Talk MIDI to GarageBand, SimpleSynth, etc

## OS X
Open JackPilot from 
/Applications/Jack/JackPilot.app
Click _Stop_ if it's running. Then open the menu option JackPilot->Preferences. Check the Activate MIDI box. Save. Click _Start_ button. 

Open Audio MIDI Setup from menu options in JackPilot. JackPilot->Open Audio MIDI Setup. Double-click the IAC Driver to open it's settings. Check the Device is on-line box. Close. Quit Audio MIDI Setup.  

You won't need Dirt running to talk MIDI to Jack. 

Open a MIDI software synth endpoint. I found [SimpleSynth](http://notahat.com/simplesynth) to be especially lightweight and easy to use. Once it's open, set MIDI Source to _IAC Driver Bus 1_

For GarageBand, open an empty project. 

From Tidal, this is the minimum needed to hear the MIDI synth. Note that location in quotes matches that of the SimpleSynth and Audio MIDI Setup. 

```haskell
import Sound.Tidal.MIDI.Output
import Sound.Tidal.SimpleSynth

keyStreams <- midiproxy 1 "IAC Driver Bus 1" [(keys, 1)]

[k1] <- sequence keyStreams
k1 $ note "50"
```

# Making MIDI patterns

You can create patterns of MIDI notes just like with Dirt:

~~~~{haskell}
k $ note "40 [32 34] 36*2 42*3" # detune (slow 4 sine1)
k $ note "[[32 34], [36 38]]"
k $ every 3 (density 2) $ every 4 (palindrome) $ note "{50 52 54}%8"
~~~~

Here is the full list of parameters available for the volca keys:

~~~~{haskell}
note
dur
portamento
expression
octave
voice
detune
vcoegint
kcutoff
vcfegint
lforate
lfopitchint
lfocutoffint
attack
decay
sustain
dtime
dfeedback
~~~~
