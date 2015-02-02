---
category: pattern_transformers
title: palindrome
---

`palindrome` applies `rev` to  a pattern every other cycle, so that
the pattern alternates between forwards and backwards. 

Example:

~~~~ {haskell}
d1 $ palindrome $ sound "hh*2 [sn cp] cp future*4"
~~~~
