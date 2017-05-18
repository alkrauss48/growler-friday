export const showcaseHandler = {
  init
};

function init() {
  $('#showcaseContainer').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
  });

}
