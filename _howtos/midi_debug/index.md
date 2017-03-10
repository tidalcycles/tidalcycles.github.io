---
category: midi_debug
weight: -9
---

# How to monitor input of a MIDI controller

A really simple method to know if your `tidal-midi` installation is working properly is, besides playing a pattern, to *listen* the messages sent from TidalCycles to the MIDI device (a similar approach of *IGMP snooping*) 

## Windows

For Windows, there's [midi-ox](http://www.midiox.com/).
Go to `Options`, select `MIDI Devices` and choose your devices accordingly.  
Here's an example  

![](http://i.imgur.com/PTOVhnG.png)

Go back to your `$EDITOR` and play a pattern, add params to it, turn a knob, etc. If everything is OK there should be data displayed on the main window.  
Something like this  

![](http://i.imgur.com/Cq4fK6A.png)


## OS/X

For OS/X, there's [MIDI Monitor](http://www.snoize.com/MIDIMonitor/).  
Go to `MIDI Sources` and check the devices in the `Sources` area.  
Here's an example:  

![](http://i.imgur.com/b2i4ZKo.png)

Go back to your `$EDITOR` and play a pattern, add params to it, turn a knob, etc. If everything is OK there should be data displayed on the main window.  
Something like this  

![](http://i.imgur.com/yCMdJ5j.png)

## GNU/Linux


For GNU/Linux, there's [midisnoop](http://libremusicproduction.com/tools/midisnoop).  
Click on the `Configure` button and select the devices in the `MIDI Driver` area.  
Here's an example:  

![](http://i.imgur.com/s33UEyU.png)

Go back to your `$EDITOR` and play a pattern, add params to it, turn a knob, etc. If everything is OK there should be data displayed on the main window.  
Something like this  

![](https://i.imgur.com/ctX00lh.png)


Images for Windows and OS/X taken from the [Native Instruments website](http://www.native-instruments.com/en/support/knowledge-base/show/998/how-to-monitor-the-input-of-a-midi-controller/)


