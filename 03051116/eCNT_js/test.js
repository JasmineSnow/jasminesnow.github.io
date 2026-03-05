// popup open
function popOpen() {
  $('.JS_popOpen').addClass('open');
  return false;
}

// ready
$(function(){

  // popup
  $('.popup-close').click(function(){
    $(this).parents('.popup').removeClass('open');
    return false;
  });


});

