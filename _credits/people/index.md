---
category: people
weight: -9
---

Thanks to everyone who has made music and other strange stuff with
Tidal over the years, contributing thoughts, ideas and questions which
have pushed it forward. You're all great.

TidalCycles and (Super)Dirt are created by <span class="people"><span class="person">[Alex McLean](http://yaxu.org), </span><span class="person">[Julian Rohrhuber](http://wertlos.org/~rohrhuber/), </span><span class="person">[Mike Hodnick](http://kindohm.com/), 
[Lennart Melzer](https://github.com/lennart), </span><span class="person">[David Ogborn](http://www.d0kt0r0.net/), </span><span class="person">[Ben Gold](https://github.com/bgold-cosmos), </span> <span><a href="http://notimportant.org/">Sean Lee</a>, </span></span> and [friends](https://github.com/tidalcycles/Tidal/graphs/contributors).

<script>
$.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};

$(".people").randomize(".person");
</script>

Its first proper free/open source release was supported by a
[L'ull Cec](https://lullcec.org/) residency at Hangar Barcelona.
