$(function() {
    // Put any custom JS here
    console.log( "Scanning for viruses..." );
});

function genRandString(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < 15; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

$(document).ready(function(){
  cycleHints();
});

function cycleHints(){
  window.setInterval(function(){
    $("textarea").attr("placeholder", genRandString());
  }, 100);
}
