/*-------------------- 側邊選單 --------------------*/
function closeMenu() {
  $('#pageMenu .hasSub').find('ul').slideUp(200);
  $('#pageMenu').find('.open').removeClass('open');
  $('.page').removeClass('openmenu');
  $('#pageMenu').find('[data-initial="'+ '1' +'"]').addClass('open');
}

$(function(){
  // 展開選單
  // $('.page').addClass('openmenu');

  // set initial
  try {
    $('#pageMenu a.open').attr('data-initial', '1');
  } catch(err) {
    return false;
  }

  // 選單按鈕
  $('.pageMenu-btn').append('<span class="line line01"></span><span class="line line02"></span><span class="line line03"></span>'); //插入line

  // 判斷展開方向
  var menu_deriction = $('#pageMenu').attr('data-from');
  if (menu_deriction == '') {
    $('.page').addClass('show-left');
  }
  if (menu_deriction == 'right') {
    $('.page').addClass('show-right');
  }
  if (menu_deriction == 'up') {
    $('.page').addClass('show-up');
  }

  // 側邊選單展開收合
  $('.pageMenu-btn').click(function () {
    if ( $('.page').hasClass('openmenu') == true ) {
      closeMenu();
    } else {
      $('.page').addClass('openmenu');
    }
  });
  $('.pageMenu-close').click(function () {
    // 關閉摺疊
    closeMenu();
    return false;
  });

  // 折疊的選單
  $('#pageMenu .hasSub').children('ul').slideUp();
  // $('#pageMenu .hasSub').append('<button></button>'); //插入button
  $('#pageMenu .hasSub .hasSub-btn').click(function() {
    var folder = $(this).parent('li.hasSub');// 父層li
    //未展開
    if( folder.hasClass('open') == false ){
      // 選單展開
      folder.children('ul').slideDown();
      folder.addClass('open');
      // 隔壁有展開選單要收合
      // 隔壁有展開選單的子層要收合
      folder.siblings('.open').find('ul').slideUp();
      folder.siblings('.open').find('.open').removeClass('open');
      folder.siblings('.open').removeClass('open');
    }else { //已展開
      // 選單收合
      folder.find('ul').slideUp();
      folder.removeClass('open');
      // 這個li 子層內有展開選單要收合
      folder.find('.hasSub.open').removeClass('open');
    }
    return false;
  });

});

// resize
$(window).on('resize', function () {
  if( $(window).width() >= 768 ) {
    try {
      closeMenu();
    } catch(err) {
      return false;
    }
  }
});


