// sticky
$(window).on('scroll', function(){
  if( $(window).scrollTop() > 60 ){
    $('.headArea').addClass('js_sticky');
  }else {
    $('.headArea').removeClass('js_sticky');
  }
});


