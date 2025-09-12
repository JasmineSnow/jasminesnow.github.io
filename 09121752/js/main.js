// 側邊按鈕
function showBtn() {
  var winH = $(window).scrollTop();
  var targetH = 100;
  // var bottomH = $('.wrapper').outerHeight() - $('.foot-main').outerHeight() - $(window).height();
  // winH > targetH && winH <= bottomH
  if (winH > targetH) {
    $('.floatNav').fadeIn();
  } else {
    $('.floatNav').fadeOut();
  }
}

// page height
function setPageHeight() {
  var wH = $(window).innerHeight();    
  var minH = wH - $("header").outerHeight() - $("footer").outerHeight();
  $(".container").css('min-height', minH );
  var containerH = $(".container").outerHeight();
  if (containerH > minH){
    $(".container").css('min-height', minH );
    containerH = minH;
  }
}
$(window).on("load resize", function() {
  setPageHeight();  
});


// 內頁 innerContentNav
function open_innerContentNav() {
  $('.innerContent-switch').addClass('open');
  $('.innerContent-nav').addClass('open');
  return false;
}
function close_innerContentNav() {
  $('.innerContent-switch').removeClass('open');
  $('.innerContent-nav').removeClass('open');
  return false;
}



// ready
$(function(){
  // 側邊按鈕
  try {
    showBtn();
  } catch (error) {
    return false;
  }
  $(window).scroll(function () {
    try {
      showBtn();
    } catch (error) {
      return false;
    }
  });
  
  /*------------------------------------*\
    header_選單收合
  \*------------------------------------*/
  // 大網 open
  $('.header-nav a').mouseover(function(){
    // open
    let value = $(this).attr('data-nav');
    $('.headerHidden').stop().hide();
    $('.headerHidden').filter(function() {
      return $(this).data('nav') === value;
    }).slideDown(300);
    $(this).addClass('focussed');
    return false;
  });
  // close
  $('.headerHidden-inner .headHidNav').mouseleave(function () {
    $('.headerHidden').slideUp();
    $(this).removeClass('focussed');
  });
  $('.header-btnBox').mouseover(function () {
    $('.headerHidden').slideUp();
    $(this).removeClass('focussed');
  });

  /*------------------------------------*\
    footer_nav
  \*------------------------------------*/
  $('.footNav-main .lv1').click(function(){
    let value = $(this).attr('data-foot');
    let second = $('.footNav-second[data-foot="' + value + '"]');
    if ( $(this).hasClass('open') == true ) {
      $(this).removeClass('open');
      second.slideUp();
    } else {
      $('.footNav-main .lv1').removeClass('open');
      second.siblings('.footNav-second').slideUp();
      $(this).addClass('open');
      second.slideDown();
    }
    return false;
  });

  
  // 折疊區塊
  $('.JS_folder .fold-hide').hide();
  $('.JS_folder .folder.open').children('.fold-hide').show();
  $('.JS_folder .fold-btn').click(function() {
    let folder = $(this).parent('.folder'); // 父層li
    //未展開
    if( folder.hasClass('open') == true ){
      folder.find('.fold-hide').slideUp();
      folder.removeClass('open');
      folder.find('.folder.open').removeClass('open');
    }else {
      folder.siblings('.open').find('.fold-hide').slideUp();
      folder.siblings('.open').find('.folder.open').removeClass('open');
      folder.siblings('.open').removeClass('open');
      folder.children('.fold-hide').slideDown();
      folder.addClass('open');
    }
    return false;
  });

  // close popup
  // $('.popup-close').on('click', function(){
  //   $(this).parents('.popup').removeClass('open');
  //   return false;
  // });

  

});


