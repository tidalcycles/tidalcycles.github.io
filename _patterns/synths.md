---
category: synths
layout: default
---

SuperDirt is created with SuperCollider, a fantastic synthesis engine
and language with huge sonic possibilities. You can trigger custom
SuperCollider synths from TidalCycles in much the same way as you
trigger samples. For example:

~~~haskell
d1 $ n "60 62*2" # s "supersaw"
~~~

The above plays note 60 and 62 of the MIDI scale. You can alternative
specify notes by name:

~~~haskell
d1 $ n "60 62*2" # s "supersaw"
~~~

SuperDirt currently ships with six default synthesisers, four
analogue-style `supersquare`, `supersaw`, `superpwm`,
`supercomparator` and two digital `superchip` and `supernoise`. This
is all quite new and under ongoing development, but you can read about
modifying and adding your own synths to SuperDirt at
[its github repository](https://github.com/musikinformatik/SuperDirt).
