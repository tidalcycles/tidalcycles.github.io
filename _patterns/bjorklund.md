---
category: bjorklund 
layout: default
---

If you give two numbers in parenthesis after an element in a pattern, then Tidal will
distribute the first number of sounds equally across the second number of steps:

```haskell
d1 $ sound "can(5,8)"
```

But then, it isn't possible to distrute three elements equally across eight discrete steps, but the
algorithm does the best it can. The result is a slightly funky bell pattern. Try this one:

```haskell
d1 $ sound "can(5,8)"
```

This uses "Bjorklund's algorithm", which wasn't made for music but for an application in nuclear physics, which is exciting. More exciting still is that it is very similar in structure to the one of the first known algorithms written in Euclid's book of elements in 300 BC. You can read more about this in the paper [The Euclidean Algorithm Generates Traditional Musical Rhythms](http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf) by Toussaint. Examples from this paper are included below, although some require rotation to start on a particular beat - see the paper for full details and references.

- (2,5) : A thirteenth century Persian rhythm called Khafif-e-ramal.
- (3,4) : The archetypal pattern of the Cumbia from Colombia, as well as a Calypso rhythm from Trinidad.
- (3,5) : When started on the second onset, is another thirteenth century Persian rhythm by the name of Khafif-e-ramal, as well as a Rumanian folk-dance rhythm. 
- (3,7) : A Ruchenitza rhythm used in a Bulgarian folk-dance. 
- (3,8) : The Cuban tresillo pattern. 
- (4,7) : Another Ruchenitza Bulgarian folk-dance rhythm. 
- (4,9) : The Aksak rhythm of Turkey. 
- (4,11) : The metric pattern used by Frank Zappa in his piece titled Outside Now. 
- (5,6) : Yields the York-Samai pattern, a popular Arab rhythm, when started on the second onset. 
- (5,7) : The Nawakhat pattern, another popular Arab rhythm. 
- (5,8) : The Cuban cinquillo pattern. 
- (5,9) : A popular Arab rhythm called Agsag-Samai. 
- (5,11) : The metric pattern used by Moussorgsky in Pictures at an Exhibition. 
- (5,12) : The Venda clapping pattern of a South African children’s song. 
- (5,16) : The Bossa-Nova rhythm necklace of Brazil. 
- (7,8) : A typical rhythm played on the Bendir (frame drum). 
- (7,12) : A common West African bell pattern.  
- (7,16) : A Samba rhythm necklace from Brazil.  
- (9,16) : A rhythm necklace used in the Central African Republic.  
- (11,24) : A rhythm necklace of the Aka Pygmies of Central Africa. 
- (13,24) : Another rhythm necklace of the Aka Pygmies of the upper Sangha. 
