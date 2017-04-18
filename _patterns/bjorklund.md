---
category: bjorklund
layout: default
---

If you give two numbers in parenthesis after an element in a pattern, then Tidal
will distribute the first number of sounds equally across the second number of
steps:

~~~haskell
d1 $ sound "bd(5,8)"
~~~
{: .render}

You can also use the `e` function to do this. `e` takes the same two arguments
as what is used in the parenthesis above:

~~~haskell
d1 $ e 5 8 $ sound "bd"
~~~
{: .render}

You can use the parenthesis notation within a single element of a pattern:

~~~haskell
d1 $ sound "bd(3,8) sn*2"
~~~
{: .render}

~~~haskell
d1 $ sound "bd(3,8) sn(5,8)"
~~~
{: .render}

You can also add a third parameter, which 'rotates' the pattern so it starts on 
a different step:

~~~haskell
d1 $ sound "bd(5,8,2)"
~~~
{: .render}

You can also use the `e` function to apply a Euclidean algorithm over a
complex pattern, although the structure of that pattern will be lost:

~~~haskell
d1 $ e 3 8 $ sound "bd*2 [sn cp]"
~~~
{: .render}

In the above, three sounds are picked from the pattern on the right according 
to the structure given by the `e 3 8`. It ends up picking two `bd` sounds, a 
`cp` and missing the `sn` entirely.

As a bonus, it is possible to pattern the parameters within the parenthesis, for example to alternate between 3 and 5 elements:

~~~haskell
d1 $ sound "bd([5 3]/2,8)"
~~~
{: .render}

These types of sequences use "Bjorklund's algorithm", which wasn't made for
music but for an application in nuclear physics, which is exciting. More
exciting still is that it is very similar in structure to the one of the first
known algorithms written in Euclid's book of elements in 300 BC. You can read
more about this in the paper
[The Euclidean Algorithm Generates Traditional Musical Rhythms](http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf)
by Toussaint. Some examples from this paper are included below,
including rotation in some cases.

- (2,5) : A thirteenth century Persian rhythm called Khafif-e-ramal.
- (3,4) : The archetypal pattern of the Cumbia from Colombia, as well as a Calypso rhythm from Trinidad.
- (3,5,2) : Another thirteenth century Persian rhythm by the name of Khafif-e-ramal, as well as a Rumanian folk-dance rhythm.
- (3,7) : A Ruchenitza rhythm used in a Bulgarian folk-dance.
- (3,8) : The Cuban tresillo pattern.
- (4,7) : Another Ruchenitza Bulgarian folk-dance rhythm.
- (4,9) : The Aksak rhythm of Turkey.
- (4,11) : The metric pattern used by Frank Zappa in his piece titled Outside Now.
- (5,6) : Yields the York-Samai pattern, a popular Arab rhythm.
- (5,7) : The Nawakhat pattern, another popular Arab rhythm.
- (5,8) : The Cuban cinquillo pattern.
- (5,9) : A popular Arab rhythm called Agsag-Samai.
- (5,11) : The metric pattern used by Moussorgsky in Pictures at an Exhibition.
- (5,12) : The Venda clapping pattern of a South African children’s song.
- (5,16) : The Bossa-Nova rhythm necklace of Brazil.
- (7,8) : A typical rhythm played on the Bendir (frame drum).
- (7,12) : A common West African bell pattern.  
- (7,16,14) : A Samba rhythm necklace from Brazil.
- (9,16) : A rhythm necklace used in the Central African Republic.  
- (11,24,14) : A rhythm necklace of the Aka Pygmies of Central Africa.
- (13,24,5) : Another rhythm necklace of the Aka Pygmies of the upper Sangha.
