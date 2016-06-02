---
title: Atom
category: integration
---

Atom is a free, modern and cross-platform code editor, created by the
people behind github.

To install Atom, download it and follow the simple instructions from
here:
  [https://atom.io/](https://atom.io/)

To install the Tidal package in Atom, first open preferences via the
menus, or with the shortcut `ctrl-,`. Then, click on the `Install`
menu item, type in "tidal" and click `Install`.

If you're running Atom on OSX and using MacPorts then the default _Ghci Path_ will need to be changed. Menu `Atom` -> `Preferences`, then select `Packages` from the middle column. Find `tidal` in the `Community Packages` and choose `Settings`. Change the _Ghci Path_ to `/opt/local/bin/ghci`

Then you can run Tidal by creating a new file (via the `File` menu, or
with the shortcut `ctrl-n`), and then saving it (again via the `File`
menu or with `ctrl-s`), giving it a name that ends with `.tidal`, for
example `test.tidal`. You can then start Tidal via the `Packages` menu
and then `Tidal` -> `boot tidal`.

You can then run a Tidal pattern by putting the cursor on it and
pressing `command-enter` (the `command` key is the 'windows' key on a
pc, and `⌘` on a mac). You can run a single line with `shift-enter`.

To see error messages from Tidal, open the developer tools with the
shortcut `ctrl-shift-I`.
