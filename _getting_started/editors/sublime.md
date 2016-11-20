---
title: Sublime Text
category: editors
---

[Sublime Text](http://www.sublimetext.com/) is a popular
cross-platform text editor. It is closed source and costs 70 USD.

To do live coding in Sublime Text, install the package [Sublime
REPL](https://github.com/wuub/SublimeREPL) via Package Control.

To avoid fiddling with the existing Haskell REPL supplied by Sublime REPL simply clone this modified version of it:

~~~bash
cd ~/Library/Application Support/Sublime Text 3/Packages/SublimeREPL/config
git clone https://gist.github.com/lvm/e0943b0d42507af60eee174ed263adde Tidal
~~~

> If you are using classic Dirt rather than the new SuperDirt, an older version of the config can be used:

~~~bash
cd ~/Library/Application Support/Sublime Text 3/Packages/SublimeREPL/config
git clone https://gist.github.com/lennart/8b811cd4f568f7d7100e Tidal
~~~

This way, `cmd+shift+p` > "Sublime REPL: Tidal" will load up a ghci instance that loads Tidal, binds dirt channels and adds macros for `hush` and `cps`.

Splitting windows beforehand (e.g. `cmd+alt+shift+2` for two row layout) will load the REPL into _the other_ splitscreen, so you can code in _one_ and evaluate into _the other_.

Code by line evaluation is mapped to `ctrl+, l` by default but this can be customized to what you prefer:

~~~json
{ "keys": ["shift+enter"], "command": "repl_transfer_current", "args": {"scope": "lines"} }
~~~

If you get the error `Cannot find REPL for 'plain'`, try renaming your file to .hs instead of .tidal, since we are using a modified version of a Haskell REPL.

Of course you have to make sure dirt is already running when you can hear any sound.
