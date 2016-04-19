---
category: multi_laptop
weight: -9
---

You can run Tidal across lots of laptops, and have them all run in
time.

## Step 1: sync computer clocks

Ensure that the system clocks of all the computers are already in
sync, via something like `ntpd`, or `ptpd`. If you're using `ntpd`
make sure all the computers are synced with the same network
server. `ptpd` just syncs across a local network, is much faster and
more accurate.

## Step 2: sync to tempo clock

Choose one of your computers to be the 'master clock', which the
others connect to, and start it up running Tidal. Find out and note
down its IP address.

On the other computers(s), use the master's tempo clock by setting an
environment variable when you start your editor, e.g.:

~~~bash
TIDAL_TEMPO_IP=<HOST IP ADDRESS> atom &
~~~

Replace `<HOST IP ADDRESS>` with the master's IP address. If you're
using emacs or some editor, this still works, just replace `atom` with
the command to start your editor.

## Step 3: evaluate crazy sound on all the computers

~~~haskell
d1 $ slow 16 $ striate 128 $ sound "bd*12 sn*8 [hh sn bd]*4 sn*4 bd*4"
~~~

Hopefully all the computers will be in time with each other, and
changes to the `cps` will take effect across all of them.

## Use a Dirt connection on another laptop

If you wish, you can use a dirt synth running on a different
laptop. To do this start up a Tidal process in your editor, then
evaluate this code:

~~~haskell
d1 <- stream "<IP ADDRESS OF HOST>" 7771 dirt
~~~

But instead replace `<IP ADDRESS OF HOST>` with the host's IP address.

