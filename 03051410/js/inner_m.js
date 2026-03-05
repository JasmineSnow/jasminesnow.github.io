// when crolling
$(window).on("scroll", function() {
  // header
  if ( $(window).scrollTop() > 10 ) {
    $('header').addClass('ty-scroll');
  } else {
    $('header').removeClass('ty-scroll');
  }

  if ( $(window).scrollTop() > 40 ) {
    $('.headLogo-link.title').fadeOut(200);
    $('.headLogo-link.pointNum').fadeIn(200);
  } else {
    $('.headLogo-link.title').fadeIn(200);
    $('.headLogo-link.pointNum').fadeOut(200);
  }
});

