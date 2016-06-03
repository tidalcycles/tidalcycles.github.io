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

function playWithWebDirt(button) {
     $(button).text('loading');
     $(button).prop('disabled',true);
     var pattern = button.parentElement.firstChild.textContent;
     // super crude way of eliminating unnecessary d1 $ at beginning of example code:
     pattern = pattern.substring(4);
     // console.log(pattern);
     // all of these methods will only start when all necessary samples loaded
     // hence, the low latency setting of 50 milliseconds:
     // dirt.playScoreWhenReady([{sample_name: 'cp', sample_n:0, when:0}],0.05,
     // dirt.loadAndPlayScore("testScore.json",0.05,
     dirt.renderAndPlayScore("ws://www.d0kt0r0.net:9162",pattern,0.5,8,0.05,
       function() { // readyCallback
         $(button).text('playing');
         $(button).prop('disabled',true);
       },
       function() { // finishedCallback
         $(button).text('play');
         $(button).prop('disabled',false);
       }
     );
}

/*
$(document).ready(function() {
  $(".render").each(function() {
    var button = $('<button/>', { text: "loading", class: "renderButton" });
    button.prop('disabled',true);
    $(this).append(button);
  });
  dirt = new WebDirt("/WebDirt/sampleMap.json", "/samples", null, function() {
    $(".renderButton").each(function() {
      $(this).text('play');
      $(this).prop('disabled',false);
      var button = this;
      $(this).on('click',function() {
        playWithWebDirt(button);
      });
    });
  });
  // note: for full compatibility with iOS, the first WebDirt function called to
  // make a sound (which will initialize the web audio context) must be called
  // from a user interaction with the page.
});
*/
