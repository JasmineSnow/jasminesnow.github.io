function navLV1_open() {
  if ($(window).width() >= 768) {
    $('.headerMenu .menuLv2').fadeIn();
    $(this).addClass('open');
  }
}
function navLV1_close() {
  if ($(window).width() >= 768) {
    $('.headerMenu .foldLv1.open').removeClass('open');
    $('.headerMenu .menuLv2').fadeOut();
  }
}

$(function(){
  /*------------------------------------*\
    header_選單收合
  \*------------------------------------*/
  // 大網 open
  $('.headerMenu .lv1').on('mouseenter focus', function(){
    if ( $(this).hasClass('foldLv1') == true ) {
      navLV1_open();
    } else {
      navLV1_close();
    }
  });
  $('header .pagesize').on('mouseleave', function(){
    navLV1_close();
  });
  $('.headerMenu .foldLv1 ').on('click', function(){
    navLV1_open();
    return false;
  });

  /*------------------------------------*\
    置頂標語
  \*------------------------------------*/
  var cautionSwiper = new Swiper('.cautionBar .swiper',{
    direction: 'vertical',
    autoHeight: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    a11y: {
      enabled: true,
      prevSlideMessage: '上一則標語',
      nextSlideMessage: '下一則標語',
    },
  });

  /*------------------------------------*\
    主視覺輪播
  \*------------------------------------*/
  var kvSwiper = new Swiper('.kvArea .swiper',{
    effect: 'fade',
    rewind: true,
    autoplay: {
      delay: 5000,
    },
    preloadImages: false,
    lazy: true,
    lazy: {
      loadPrevNext: true,
    },
    a11y: {
      enabled: true,
      prevSlideMessage: '上一則影片',
      nextSlideMessage: '下一則影片',
    },
  });

});




