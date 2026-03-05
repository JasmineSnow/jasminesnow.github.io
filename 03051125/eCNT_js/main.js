// func

// header_選單位置
function mainNavSet () {
  $('.mainArea-nav .nav-link.hasSub').each(function () {
    let data = $(this).attr('data-nav');
    let width = $(this).outerWidth();
    // let position = $(this).offset().left + ( $(this).width() / 2 );
    let position = $(this).offset().left;
    $('.mainArea-navSub[data-nav="' + data + '"]').css('left', position);
    // $('.mainArea-navSub[data-nav="' + data + '"]').css('min-width', width);
  });
}

// page height
function setPageHeight() {
  var wH = $(window).innerHeight();    
  var minH = wH - $(".eCNT_area .header").outerHeight() - $(".eCNT_area .footer").outerHeight();
  $(".eCNT_area .container").css('min-height', minH );
  var containerH = $(".eCNT_area .container").outerHeight();
  if (containerH > minH){
    $(".eCNT_area .container").css('min-height', minH );
    containerH = minH;
  }
}
$(window).on("load resize", function() {
  setPageHeight();  
});

// 側邊按鈕
function showBtn() {
  var winH = $(window).scrollTop();
  var targetH = 50;
  if (winH >= targetH) {
    $('.floatNav').fadeIn();
  } else {
    $('.floatNav').fadeOut();
  }
}


// ready
$(function(){
  
  /*------------------------------------*/
  try {
    // 側邊按鈕
    showBtn();

    // mainArea-nav swiper
    const swiper_typeNav_num = $('.eCNT_area .mainArea-nav .pagesize .swiper').attr('data-slide');
    const swiper_typeNav = new Swiper('.eCNT_area .mainArea-nav .pagesize .swiper', {
      slidesPerView: 'auto',
      spaceBetween: 8,
      breakpoints: {
        768: {
          spaceBetween: 24,
        },
      }
    });
    
    // nav sub position
    mainNavSet();

    // sub
    $('.eCNT_area .mainArea-navSub .swiper').each(function (index) {
      $(this).addClass('JS_swiper_' + index);
      const swiper_typeNavSub = new Swiper('.JS_swiper_' + index, {
        slidesPerView: 'auto',
        spaceBetween: 24,
        breakpoints: {
          768: {
            allowSlidePrev: false,
            allowSlideNext: false,
            allowTouchMove: false,
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }
      });
    });

    if( swiper_typeNav_num.length ){
      swiper_typeNav.slideTo(swiper_typeNav_num);
    }

  }
  catch(error) {}

  // scroll
  $(window).scroll(function () {
    
    try {
      showBtn();
    } catch (error) {}
  });

  
  // web
  $('.mainArea-nav .nav-link.hasSub').click(function(){
    let value = $(this).attr('data-nav');
    if ($(this).hasClass('openSub') == true) {
      $('.mainArea-navSub[data-nav="' + value + '"]').slideUp();
      $(this).removeClass('openSub');
    } else {
      // open
      $(this).addClass('openSub');
      $('.mainArea-nav .nav-link[data-nav!="' + value + '"]').removeClass('openSub');
      $('.mainArea-navSub[data-nav!="' + value + '"]').slideUp();
      $('.mainArea-navSub').filter(function() {
        return $(this).data('nav') === value;
      }).slideDown();
    }
    return false;
  });
  // mobile
  $('.mainArea-nav .btn-mAll').click(function(){
    $('.popup.ty-mainAreaNav').addClass('open');
    return false;
  });
  $('.JS_botNav_btn').click(function(){
    $('.popup.JS_botNav').addClass('open');
    return false;
  });


  // go top
  $('.floatNav-top').click(function(){
    $('html,body').animate({
          scrollTop: $(".wrapper").offset().top
      }, 300, 'linear');
    return false;
  });


  // 折疊區塊
  $('.JS_folder .fold-hide').hide();
  $('.JS_folder .folder.open').find('.fold-hide').show();
  $('.JS_folder .fold-btn').click(function() {
    let folder = $(this).parents('.folder'); // 父層li
    //未展開
    if( folder.hasClass('open') == true ){
      folder.find('.fold-hide').slideUp();
      folder.removeClass('open');
      folder.find('.folder.open').removeClass('open');
    }else {
      folder.siblings('.open').find('.fold-hide').slideUp();
      folder.siblings('.open').find('.folder.open').removeClass('open');
      folder.siblings('.open').removeClass('open');
      folder.find('.fold-hide').slideDown();
      folder.addClass('open');
    }
    return false;
  });


});








$(window).on("resize", function() {
  if ($(window).width() >= 768) {
    $('.popup.m-only').removeClass('open');
  }
});

