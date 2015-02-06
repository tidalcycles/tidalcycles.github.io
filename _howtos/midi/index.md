---
category: midi
weight: -9
---
A special Haskell module named `tidal-midi` allows you to send MIDI pattern messages to external devices.

# Install

Just run this at a console:

~~~~
cabal update
cabal install tidal-midi
~~~~

# Modify tidal.el

The `tidal.el` file is what loads Tidal-specific modules into Emacs. You will need to edit this file to enable any synth modules defined in the `tidal-midi` package.
If you don't know where this file is located, it should be located in the folder you designated in your `.emacs` config file in this section:

~~~~
(add-to-list 'load-path "~/projects/tidal")
(require 'haskell-mode)
(require 'tidal)
~~~~

In the example above, `tidal.el` should be located under `~/projects/tidal`.

Edit tidal.el file, locate this line:

~~~~
(tidal-send-string "import Sound.Tidal.Context")
~~~~

To enable the Volca Keys synth module, add this line below it:

~~~~
(tidal-send-string "import Sound.Tidal.VolcaKeys")
~~~~

_Please note_ that at the time of this writing, the Volca Keys module is the _only_ module available.

# Talk MIDI from Tidal

Next, assuming you have a MIDI device attached, you need to get its device id. From the console run:

~~~~
aconnect -o
~~~~

You should see output like the following:

~~~~
hods@ubuntu:~$ aconnect -o
client 14: 'Midi Through' [type=kernel]
    0 'Midi Through Port-0'
client 16: 'Ensoniq AudioPCI' [type=kernel]
    0 'ES1371    
~~~~

Make note of the device ID and number (e.g. "14:0" or "16:0" from above).

Next, open a .tidal file in Emacs and start a Tidal process (`Ctrl-C` then `Ctrl-S`). At this point Tidal is running normally.

To get MIDI to work, type this in Emacs and evaluate it:

`keyproxy 100000 "16:0"`

But replace `16:0` with the specific device ID and number that you noted earlier.

The value "100000" is a latency value will need to be adjusted for your specific environment. Change it as you need, although you will need to restart 
Emacs and Tidal to do this.

Next, type and evaluate:

`k <- keyStream`

Now you are ready to play some MIDI notes. Type and evaluate the following to play MIDI note #40:

`k $ note "40"`

# Making MIDI patterns

You can create patterns of MIDI notes just like with Dirt:

~~~~
k $ note "40 [32 34] 36*2 42*3"
k $ note "[[32 34], [36 38]]"
k $ every 3 (density 2) $ every 4 (palindrome) $ note "{50 52 54}%8"
~~~~

