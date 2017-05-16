import skipMenuHandler from "./lib/skipMenuHandler.js";
import isMobile from "./lib/isMobile.js";
import {countdownHandler} from "./lib/countdownHandler.js";
import {mapHandler} from "./lib/mapHandler.js";
import {twitterHandler} from "./lib/twitterHandler.js";
import {instagramHandler} from "./lib/instagramHandler.js";

$(document).ready(function(){
  skipMenuHandler.init();
  countdownHandler.init();
  mapHandler.init();
  twitterHandler.init();
  instagramHandler.init();

  // Remove 'focus' styles when you click a link
  $('a, button').mouseup(function() { this.blur() });
});
