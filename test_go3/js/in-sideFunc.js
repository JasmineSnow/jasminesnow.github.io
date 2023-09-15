/*------------------------------------*\
  搜尋側欄
\*------------------------------------*/
function func_open() {
  $('.JS_contentAreaBtn').addClass('open');
  $('.contentArea-row').addClass('open');
  $('.headerPc').addClass('hide');
  $('.headerM').addClass('openContentArea');
  if ($('.btn-listType-grid').hasClass('open')) {
    grid_reload();
    clearTimeout(grid_reload());
  }
}
function func_close() {
  $('.JS_contentAreaBtn').removeClass('open');
  $('.contentArea-row').removeClass('open');
  $('.headerPc').removeClass('hide');
  $('.headerM').removeClass('openContentArea');
  if ($('.btn-listType-grid').hasClass('open')) {
    grid_reload();
    clearTimeout(grid_reload());
  }
}

$(function () {
  
  // trigger
  var contentAreaH = 0;
  $('.JS_contentAreaBtn').on('click', function(){
    if( $(this).hasClass('open') ){
      func_close();
    }else {
      func_open();
      // 內容高度
      contentAreaH = $('.contentArea-row-nav').height();
      $('.filterNav').css('height', contentAreaH);
    }
  });
  $('.filterNav-close').on('click', function () {
    func_close();
  });

  // 搜尋側欄 分類摺疊
  var foldNow = $('.filterFold.open').attr('data-fold');
  $('.filterFold-inner[data-fold="'+ foldNow +'"]').show();
  // toggle 
  $('.filterFold').on('click', function(){
    foldNow = $(this).attr('data-fold');
    $(this).toggleClass('open');
    $('.filterFold-inner[data-fold="'+ foldNow +'"]').slideToggle(200);
    return false;
  });

});

$(window).on('load resize scroll',function () {
  // 搜尋側欄展開 位置
  var headerMH = 0;
  var contentAreaNav_right = $('.contentArea-row').offset().left;
  $('.contentArea-row-nav').css('right', contentAreaNav_right);
  contentAreaNav_top = $('.contentArea-func').offset().top - $(document).scrollTop() + $('.contentArea-func').height();
  // 內容高度
  contentAreaH = $('.contentArea-row-nav').height();
  $('.filterNav').css('height', contentAreaH);
  if( contentAreaNav_top > 0 && $(window).width() > 991 ) { // web
    $('.contentArea-row-nav').css('top', contentAreaNav_top);
  } else if ( contentAreaNav_top <= 0 && $(window).width() > 991 ) { // web scroll
    $('.contentArea-row-nav').css('top', $('.contentArea-func').height());
  } else if( $(window).width() <= 991 && $(window).width() > 767 ) { // mid
    headerMH = $('.headerM').height();
    $('.contentArea-row-nav').css('top', headerMH + 52);
  } else { // mobile
    $('.contentArea-row-nav').css('top', 0);
  }

});


