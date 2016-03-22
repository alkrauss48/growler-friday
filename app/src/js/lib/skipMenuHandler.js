export default {
  init: function(){
    $('.skipmenu').focusin(function(event){
      $(this).attr('aria-hidden', 'false');
    });

    $('.skipmenu').focusout(function(event){
      $(this).attr('aria-hidden', 'true');
    });
  }
}
