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

var dirt;

function playWithWebDirt() {
  if(dirt == null) dirt = new WebDirt("/WebDirt/sampleMap.json", "/samples");
  // for full compatibility with iOS, this function, which initializes WebDirt and the underlying
  // audio context, needs to be called flowing from a user interaction with the displayed page
  dirt.testPlaybackOfSimpleMessage();
}

$(document).ready(function() {
   $(".render").each(function() {
       // alert($(this).text());
       $(this).append("<button onclick=\"playWithWebDirt();\">play</button>");
   });
   WebDirt.prototype.testPlaybackOfSimpleMessage = function(){
      var msg = { sample_name: 'cp', sample_n:0, when:this.ac.currentTime+0.5 };
      this.queue(msg);
   }
});
