---
category: running
weight: -9
---

There are two steps to starting TidalCycles each time, first starting SuperDirt inside SuperCollider, and then starting TidalCycles inside Atom.

To start SuperDirt, paste the following code into a SuperCollider window, click on the code, hold down ctrl and press enter.

~~~~c
(
// configure the sound server: here you could add hardware specific options
// see http://doc.sccode.org/Classes/ServerOptions.html
s.options.numBuffers = 1024 * 16; // increase this if you need to load more samples
s.options.memSize = 8192 * 16; // increase this if you get "alloc failed" messages
s.options.maxNodes = 1024 * 32; // increase this if you are getting drop outs and the message "too many nodes"
s.options.numOutputBusChannels = 2; // set this to your hardware output channel size, if necessary
s.options.numInputBusChannels = 2; // set this to your hardware input channel size, if necessary
// boot the server and start SuperDirt
s.waitForBoot {
    ~dirt = SuperDirt(2, s); // two output channels, increase if you want to pan across more channels
    ~dirt.loadSoundFiles;   // load samples (path containing a wildcard can be passed in)
    s.sync; // wait for samples to be read
    ~dirt.start(57120, [0, 0]);   // start listening on port 57120, create two orbits, each sending audio to channel 0. You can direct sounds to the orbits from tidal e.g. by: `# orbit "0 1 1"
}
)
~~~~

To start TidalCycles, open a new window, save it with a filename than ends in `.tidal`, e.g. `test.tidal`, then try running a simple pattern:

~~~~haskell
s1 $ sound “bd sn”
~~~~

n.b. If you see an example starting with `d1` to `d9` change it to be e.g. `s1` instead. This is because you are using the new `SuperDirt` synth.

If you hear sound, congratulations, time to move on to the tutorial!

If you get stuck feel free to ask questions and share problems on
[the forum](http://lurk.org/groups/tidal/), or on the `#tidal` channel
of the [TOPLAP slack](http://toplap.org/toplap-on-slack/).
