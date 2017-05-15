import skipMenuHandler from "./lib/skipMenuHandler.js";
import isMobile from "./lib/isMobile.js";
import {countdownHandler} from "./lib/countdownHandler.js";

$(document).ready(function(){
  skipMenuHandler.init();
  countdownHandler.init();

  // Remove 'focus' styles when you click a link
  $('a, button').mouseup(function() { this.blur() });
});
