---
category: synths
layout: default
---

SuperDirt is created with SuperCollider, a fantastic synthesis engine
and language with huge sonic possibilities. You can trigger custom
SuperCollider synths from TidalCycles in much the same way as you
trigger samples. For example:

~~~haskell
d1 $ midinote "60 62*2" # s "supersaw"
~~~

The above plays note 60 and 62 of the MIDI scale, using the `midinote` parameter. You can alternatively specify notes by name, using `n`:

~~~haskell
d1 $ n "c5 d5*2" # s "supersaw"
~~~

You can also specify note numbers with `n`, but where `0` is middle c (rather than `60` with `midinote`).

~~~haskell
d1 $ n "0 5" # s "supersaw"
~~~

The default sustain length is a bit long so the sounds will overlap,
you can adjust this using the `sustain` parameter

~~~haskell
d1 $ n "c5 d5*2" # s "supersaw" # sustain "0.4 0.2"
~~~

Many example synths can be found in the `default-synths.scd` file
in the `SuperDirt/synths` folder. These include:

* a series of tutorials: `tutorial1`, `tutorial2`, `tutorial3`, `tutorial4`, `tutorial5`
* examples of modulating with the cursor or sound input: `pmsin`, `in`, `inr`
* physical modeling synths: `supermandolin`, `supergong`, `superpiano`, `superhex`
* a basic synth drumkit: `superkick`, `superhat`, `supersnare`, `superclap`, `super808`
* four analogue-style synths: `supersquare`, `supersaw`, `superpwm`, `supercomparator`
* two digital-style synths: `superchip`, `supernoise`

To find the SuperDirt folder, simply run `Quarks.folder` in supercollider. The full folder location should appear in the postwindow (which is usually in the bottom right).

Many of the above synths accept additional Tidal Parameters or interpret the usual parameters in a slightly
different way. For complete documentation, see `default-synths.scd`, but here are some
examples to try:

~~~haskell
d1 $ jux (# accelerate "-0.1") $ s "supermandolin*8" # midinote "[80!6 78]/8"
  # sustain "1 0.25 2 1"
~~~

~~~haskell
d1 $ midinote (slow 2 $ fmap ((+50) . (*7)) $ run 8) # s "supergong" # decay "[1 0.2]/4"
  # voice "[0.5 0]/8" # sustain (slow 16 $ scale 5 0.5 $ saw1)
~~~

~~~haskell
d1 $ sound "superhat:0*8" # sustain "0.125!6 1.2" # accelerate "[0.5 -0.5]/4"
~~~

~~~haskell
d1 $ s "super808 supersnare" # n (irand 5)
  # voice "0.2" # decay "[2 0.5]/4" # accelerate "-0.1" # sustain "0.5" # speed "[0.5 2]/4"
~~~

~~~haskell
d1 $ n (slow 8 "[[c5 e5 g5 c6]*4 [b4 e5 g5 b5]*4]") # s "superpiano"
  # velocity "[1.20 0.9 0.8 1]"

d2 $ n (slow 8 $ fmap (+24) "[[c4,e4,g4,c5]*4 [e4,g4,b5,e5]*4]") # s "superpiano"
  # velocity (slow 8 $ scale 0.8 1.1 sine1) # sustain "8"
~~~

~~~haskell
d1 $ n "[c2 e3 g4 c5 c4 c3]/3" # s "[superpwm supersaw supersquare]/24" # sustain "0.5"
  # voice "0.9" # semitone "7.9" # resonance "0.3" # lfo "3" # pitch1 "0.5" # speed "0.25 1"
~~~

~~~haskell
d1 $ every 16 (density 24 . (|+| midinote "24") . (# sustain "0.3") . (# attack "0.05"))
  $ s "supercomparator/4" # midinote (fmap (+24) $ irand 24)
  # sustain "8" # attack "0.5" # hold "4" # release "4"
  # voice "0.5" # resonance "0.9" # lfo "1" # speed "30" # pitch1 "4"
~~~

~~~haskell
d1 $ n "[c2 e3 g4 c5 c4 c3]*4/3" # s "superchip" # sustain "0.1"
  # pitch2 "[1.2 1.5 2 3]" # pitch3 "[1.44 2.25 4 9]"
  # voice (slow 4 "0 0.25 0.5 0.75") # slide "[0 0.1]/8" # speed "-4"

d2 $ every 4 (echo (negate 3/32)) $ n "c5*4" # s "supernoise"
  # accelerate "-2" # speed "1" # sustain "0.1 ! ! 1" # voice "0.0"
~~~

~~~haskell
d1 $ s "supernoise/8" # midinote (fmap (+30) $ irand 10) # sustain "8"
 # accelerate "0.5" # voice "0.5" # pitch1 "0.15" # slide "-0.5" # resonance "0.7"
 # attack "1" # release "20" # room "0.9" # size "0.9" # orbit "1"
~~~

This is all quite new and under ongoing development, but you can read about
modifying and adding your own synths to SuperDirt at
[its github repository](https://github.com/musikinformatik/SuperDirt).
