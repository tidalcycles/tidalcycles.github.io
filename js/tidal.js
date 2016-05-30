var dirt;

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

$(document).ready(function() {
   dirt = new WebDirt("/WebDirt/sampleMap.json", "/samples");
   WebDirt.prototype.testPlaybackOfSimpleMessage = function(){
      var msg = { sample_name: 'cp', sample_n:0, when:this.ac.currentTime+0.5 };
      this.queue(msg);
   }
   
   $(".render").each(function() {
       // alert($(this).text());
       $(this).append("<button onclick=\"dirt.testPlaybackOfSimpleMessage();\">play</button>");
   });
});
