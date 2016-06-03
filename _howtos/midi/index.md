---
category: midi
weight: -9
---

A special Haskell module named `tidal-midi` allows you to send MIDI
pattern messages to external devices and software synths.

You can use it using standard general MIDI, or use a synth-specific
library - there currently exist libraries for the Volca Keys, Bass and
Beats.

# Install

To install TidalCycles MIDI support, just run this in a terminal window:

~~~~bash
cabal update
cabal install tidal-midi
~~~~

# Load the MIDI modules

Start up TidalCycles in your favourite editor, then the following line
of code (with e.g. shift-enter):

~~~~haskell
import Sound.Tidal.MIDI.Context
~~~~

# Talk MIDI from TidalCycles

Next, assuming you have a MIDI device attached, you need to get its
device id. Run the following command (again in the editor, with
shift-enter):

~~~~haskell
displayOutputDevices >>= putStrLn
~~~~

You should see output like the following:

~~~~
ID:	Name
0:	Midi Through Port-0
1:  USB Midi Cable MIDI
~~~~

In this case we have a synth attached to the second device, a USB Midi
cable, so we can connect to it with the following:

~~~~haskell
devices <- midiDevices

m1 <- midiStream devices "USB Midi Cable MIDI" 1 synthController
~~~~

The number `1` there specifies the MIDI channel your synth is
listening to. Now you are ready to play some MIDI notes. Type and
evaluate the following to play MIDI note #40 and #52:

~~~~haskell
m1 $ midinote "40 52"
~~~~

With MIDI notes, `60` stands for middle C note. If you use `n` rather
than `midinote`, then you'll find that `0` is middle C. 

~~~~haskell
m1 $ n "0 4 -8"
~~~~

Using `n`, you can also specify notes via their names, e.g. c sharp
in the fifth octave followed by a in the fourth octave:

~~~~haskell
m1 $ n "cs5 a4"
~~~~

# Making MIDI patterns

You can create patterns of MIDI notes just like with Dirt:

~~~~haskell
m1 $ midinote "40 [32 34] 36*2 42*3"
m1 $ midinote "[[32 34], [36 38]]"
m1 $ every 3 (density 2) $ every 4 (palindrome) $ n "{c a4 f3}%8"
m1 $ n "c a" # dur (scale 0.1 0.4 sine1)
~~~~

If you find your note names aren't coming out right, it's probably because you're 
trying to use them with `midinote`, instead of `n`.

# Using synth-specific libraries

You can find a list of
[available synths libraries here](https://hackage.haskell.org/package/tidal-midi). For example to use the Volca Keys library you first import it, then make its MIDI stream:

~~~~haskell
import Sound.Tidal.VolcaKeys

m2 <- midiStream devices "USB Midi Cable MIDI 1" 1 keysController
~~~~

You can then access the Volca Keys-specific MIDI controller
parameters, for example `lfo` and `cutoff`:

~~~~haskell
m1 $ every 4 (slow 1.5) $ slow 2 $ n (offadd 0.25 (7) "f3(3,8) g5*3")
  # lfo "0.1"
  # cutoff (slow 4 sine1)
~~~~
