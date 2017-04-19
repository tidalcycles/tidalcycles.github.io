---
category: pattern_transformers
title: palindrome
---

`palindrome` applies `rev` to  a pattern every other cycle, so that
the pattern alternates between forwards and backwards. 

Example:

~~~~ haskell
d1 $ palindrome $ sound "arpy:0 arpy:1 arpy:2 arpy:3"
~~~~
{: .render }
