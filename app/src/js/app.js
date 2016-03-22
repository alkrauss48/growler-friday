import skipMenuHandler from "./lib/skipMenuHandler.js";

$(document).ready(function(){
  skipMenuHandler.init();

  // Remove 'focus' styles when you click a link
  $('a, button').mouseup(function() { this.blur() });
});
