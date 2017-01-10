---
category: operators
weight: -8
---

### specific to Tidal

The general rule for things that combine patterns is that they use the structure of the pattern on the *left*.

#### `|+|`, `|*|`, `-`, `/` 
Operate on *ParamPatterns*, and perform the arithmetic operation if the two parameters are the same (such as `speed` and `speed`), or simply merge the parameters just as `#` would if the parameters are different.
~~~haskell
speed "1 2 3 4" |+| speed "2" 
~~~
is the same as
~~~haskell
speed "3 4 5 6"
~~~  

#### `#`, `|=|`
They mean the same thing: they merge *ParamPatterns* together

#### `###`, `***`, `+++`, `///`
These take a **list** of *ParamPatterns* as their second argument, and merge them all together with the relevant arithmetic operator.  Can simplify long expressions.
~~~haskell
s "bd sn" # "speed "1.2" *** [speed "2", crush "4"]
~~~

#### `<~`, `~>`
These time-shift the pattern on the RHS by the number of cycles on the LHS.
~~~haskell
0.25 ~> "a b c d"
~~~
is the same as
~~~haskell
"d a b c"
~~~

#### `<~>`
Pattern replacement: takes the elements of the second pattern and makes a new pattern using the structure of the first
~~~haskell
"x x x" <~> "bd sn"
~~~
~~~haskell
"bd sn bd"
~~~
one cycle and
~~~haskell
"sn bd sn"
~~~
the next

#### `<<~`, `~>>`
Pattern rotation, these move the elements of the pattern without changing the structure of the pattern
~~~haskell
1 ~>> "a ~ b c"
~~~
is the same as
~~~haskell
"c ~ a b"
~~~

#### `!!!`
List indexing with built-in modulo so you can't go past the end of the list
~~~haskell
[1 2 3 4]!!!5
~~~
returns `2`

### useful Haskell operators

#### `<$>`
A synonym for `fmap`, useful for mapping numerical functions so they work on patterns.

#### `<*>`
A synonym for `ap`, useful for promoting functions to work with patterns.
~~~haskell
(+2) <$> "1 2 3 4"
~~~
is the same as `"3 4 5 6"`
~~~haskell
(+) <$> "1 2 3 4" <*> "2"
~~~
is also the same

#### `!!`
Haskell's way of doing list indexing

#### `$`
An alternative to parentheses, means "evaluate everything on the right first"

#### `.`
Function composition, needs functions that return the same type as their argument
