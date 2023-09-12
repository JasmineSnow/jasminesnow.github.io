// if support JS
document.querySelector('body').classList.remove('no-js');
// 
$(window).on('load resize', function () {
  
  if( $(window).width() >= 768 ) {
    // bg shift
    $('.slogan-deco-2').addClass('js-scroll');

    // aos
    $('.sloganBox:nth-child(odd)').attr('data-aos', 'fade-up-left');
    $('.sloganBox:nth-child(even)').attr('data-aos', 'fade-up-right');
    var bottomH = $('footer').height() + 130;
    AOS.init({
      anchorPlacement: 'bottom-bottom',
      duration: 1000,
      delay: 250,
      offset: bottomH,
    });
  } else {
    // bg shift
    $('.slogan-deco-2').removeClass('js-scroll');
    $('.slogan-deco-2').css('top', 0);

    // aos
    $('.sloganBox:nth-child(odd)').attr('data-aos', 'fade-up');
    $('.sloganBox:nth-child(even)').attr('data-aos', 'fade-up');
    AOS.init({
      anchorPlacement: 'bottom-bottom',
      duration: 800,
      delay: 0,
      offset: 300,
    });
  } 

});

$(function () {
  // mouse hide
  var frameH = $(window).height() - $('header').height() - $('.cautionBar').height() - $('footer').height();
  if ($('.slogan-inner .pagesize').outerHeight() < frameH) {
    $('.mouse').addClass('hide');
  }
  

  $('.sloganBox').each(function () {
    var boxDistance = $(this).offset().top + $(this).outerHeight() - $(window).scrollTop() - $(window).height();
  });


});

$(window).on('scroll', function () {
  // mouse
  if ($(document).scrollTop() > 20) {
    $('.mouse').fadeOut();
  } else {
    $('.mouse').fadeIn();
  }
  // bg shift
  yPos = window.pageYOffset;
  shift = yPos * -0.05 + 'px';
  $('.slogan-deco-2.js-scroll').css('top', shift);

});



