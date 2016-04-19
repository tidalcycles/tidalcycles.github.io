---
category: rests
layout: default
---

So far we have produced patterns that keep producing more and more sound. What
if you want a rest, or gap of silence, in your pattern? You can use the
"tilde" `~` character to do so:

~~~haskell
d1 $ sound "bd bd ~ bd"
~~~

Think of the `~` as a special sample name that produces silence.
