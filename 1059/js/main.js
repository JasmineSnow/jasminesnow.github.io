// header_選單位置
function headerNavSet () {
  $('.header-nav a').each(function () {
    let data = $(this).attr('data-nav');
    let width = $(this).width();
    let position = $(this).offset().left + ( $(this).width() / 2 );
    $('.headerHidden[data-nav="' + data + '"]').css('left', position);
    $('.headerHidden[data-nav="' + data + '"]').css('min-width', width);
  });
}

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
  $('body').addClass('body_noScroll');
  return false;
}
function close_innerContentNav() {
  $('.innerContent-switch').removeClass('open');
  $('.innerContent-nav').removeClass('open');
  $('body').removeClass('body_noScroll');
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
  // header_選單位置
  headerNavSet ();

  // 大網 open
  $('.header-nav a').mouseover(function(){
    // open
    let value = $(this).attr('data-nav');
    $('.headerHidden[data-nav!="' + value + '"]').slideUp();
    $('.headerHidden').filter(function() {
    	return $(this).data('nav') === value;
    }).slideDown(300);
  });

  // 登入後
  $('.loginNavBtn').mouseover(function(){
    if( $(window).width() >= 768 ){
      $('.loginNavHidden').slideDown();
    }
  });
  // 登入後 - mobile
  $('.loginNavBtn').click(function(){
    if( $(window).width() < 768 && $('.loginNavHidden').is(':visible') == true ){
      $('.loginNavHidden').slideUp();
    } else if( $(window).width() < 768 && $('.loginNavHidden').is(':visible') == false ){
      $('.loginNavHidden').slideDown();
    }
  });

  // close
  $('header').mouseleave(function () {
    $('.headerHidden').slideUp();
  });
  $('.headerArea .pagesize').mouseleave(function () {
    $('.header-nav a').removeClass('on');
    $('.loginNavHidden').slideUp();
  });
  $('.header-btnBox').mouseenter(function () {
    $('.headerHidden').slideUp();
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
  $('.popup-close').on('click', function(){
    $(this).parents('.popup').removeClass('open');
    return false;
  });



});

// resize
$(window).on('resize', function () {

  // header_選單位置
  headerNavSet ();
  
});


