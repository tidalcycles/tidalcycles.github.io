tidalcycles.github.io
=====================

Website for Tidal

See the actual website here: [http://tidal.lurk.org](http://tidal.lurk.org).

Extending the documentation
---------------------------

To help adding more chapters or sections on the page a few steps are necessary.

The main configuration file for all chapters and sections is found in `_data/chapters.yml`

This file is a [YAML Collection](http://www.yaml.org/spec/1.2/spec.html#id2759963) of all chapters of the documentation.

For each entry there is:

- a corresponding markdown file with the same name (e.g. the first list entry is named `getting_started` and the folder is named `getting_started.md`)
- a corresponding folder with the same __name__ prefixed with an underscore (e.g. the first list entry is named `getting_started` and the folder is named `_getting_started`).

Each chapter also has a `title` that is displayed in the menu and another collection of `sections`.

The order of sections in the configuration file, determines the order in the sidebar menu. Each section has a `name` and a `title`. While the title determines the sidebar menu label, the `name` is used to make a separate markdown files that live in the corresponding chapter folder to appear in a certain section.

Example:

To add a new function description within the `functions` chapter in the `transitions` section. Place a file within `_functions/transitions/your_new_transition.md`.

Every new markdown file needs to start with a YAML prelude like this:

```markdown
---
title: Your transition name
category: transitions
---
```

after the prelude, you can write standard markdown for the contents. The `title` will be displayed as the title of your function description and the category is the name of the section, your description should be placed in.

The order of entries within a section of a chapter is always alphabetical. You can however use the `weight` key in your YAML prelude to have your content appear more likely on top or in the bottom of the chosen section. Weight is given in numeric values where negative values are _light_ and will move you content to the top, while positive values are _heavy_ and will let your content sink to the bottom. Note that weight is not an absolute position, but merely a relative way place content.

_Note that placing `your_new_transition.md` in the subdirectory `transitions` is not strictly necessary, setting the `category` however is! Using subdirectories just makes it easier to navigate through the separate files._
