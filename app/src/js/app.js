import skipMenuHandler from "./lib/skipMenuHandler.js";
import isMobile from "./lib/isMobile.js";
import {countdownHandler} from "./lib/countdownHandler.js";
import {mapHandler} from "./lib/mapHandler.js";
import {twitterHandler} from "./lib/twitterHandler.js";
import {instagramHandler} from "./lib/instagramHandler.js";
import {showcaseHandler} from "./lib/showcaseHandler.js";

$(document).ready(function(){
  skipMenuHandler.init();
  countdownHandler.init();
  mapHandler.init();
  twitterHandler.init();
  instagramHandler.init();
  showcaseHandler.init();

  $('#searchForm').submit( (event) => {
    event.preventDefault();
    mapHandler.search($('#zipCode').val());
  });

  // Remove 'focus' styles when you click a link
  $('a, button').mouseup(function() { this.blur() });
});
