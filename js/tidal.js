(function($, window) {
  $(document).ready(function() {
     $(".tidal-video").fitVids();
  });
  var metas = document.getElementsByTagName('meta');
  var i;
  if (navigator.userAgent.match(/iPhone/i)) {
    for (i=0; i<metas.length; i++) {
      if (metas[i].name == "viewport") {
        metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      }
    }
    document.addEventListener("gesturestart", gestureStart, false);
  }
  function gestureStart() {
    for (i=0; i<metas.length; i++) {
      if (metas[i].name == "viewport") {
        metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
      }
    }
  }
}(jQuery, this, undefined));

function playWithWebDirt() {
     dirt.playScoreWhenReady([{sample_name: 'cp', sample_n:0}],0.05);
     // dirt.loadAndPlayScore(url,0.05);
     // both of these methods will only start when all necessary samples loaded
     // hence, the low latency setting of 50 milliseconds
}

$(document).ready(function() {
   $(".render").each(function() {
       // alert($(this).text());
       $(this).append("<button onclick=\"playWithWebDirt();\">play</button>");
   });
   dirt = new WebDirt("/WebDirt/sampleMap.json", "/samples");
   // note: for full compatibility with iOS, the first WebDirt function called to
   // make a sound (which will initialize the web audio context) must be called
   // from a user interaction with the page.
});
