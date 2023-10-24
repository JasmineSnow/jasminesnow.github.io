/*-------------------- 頁面最小高度 --------------------*/
var smartH = 0;
$(window).on("load resize", function() {
  //抓高度
  var wH = $(window).innerHeight();
  var minH = wH - $("header").outerHeight() - $("footer").outerHeight();
  var maxH = wH - $("header").outerHeight() - $("footer").outerHeight();
  if ( $(".smartbanner").is(':visible') == true ) {
    smartH = $(".smartbanner").outerHeight();
  }

  $(".container").css('min-height', minH );
  var containerH = $(".container").outerHeight();
  //如果目前內容高度大於最小高 內容高 = 最小高
  if (containerH > minH){
    $(".container").css('min-height', minH );
    containerH = minH;
  }
  //占整頁區塊
  var fullpageOut = $(".fullpage-out").outerHeight();
  $(".fullpage-inner").css('min-height', containerH - fullpageOut - 40 ); 

 //小網側選單扣掉首頁下載告示
 // $("#pageMenu").css('height', wH - smartH);
 $("#pageMenu").attr('style', 'height: calc(100dvh - ' + smartH + 'px);');
 

 //popupBx 的 popupCon 高度扣掉標題與按鈕
 var popT = $(".popupBx .title").outerHeight();
 var popB = $(".popupBx .btnBx").outerHeight();
 $(".popupBx .popupCon").css('max-height', wH - popT - 220);
 $(".popupBx .h-addbtn").css('max-height', wH - popT - popB- 220);
 $(".popupBx .popupCon.h-addbtn").css('max-height', wH - popT - popB- 220);
 $(".popupBx .printBx").css('max-height', wH - popT - popB- 220);

});

/*-------------------- 側邊選單 --------------------*/
$(function(){
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
    $('.page').addClass('openmenu');
  });
  $('.page_cover').click(function () {
    // 關閉摺疊
    $('#pageMenu .hasSub').find('ul').slideUp(200);
    $('#pageMenu').find('.open').removeClass('open');
    $('.page').removeClass('openmenu');
  });
  /* 側邊選單_resize關閉 */
 /* $(window).on('resize', function () {
    $('.page').removeClass('openmenu');
  });*/

  // 折疊的選單
  $('#pageMenu .hasSub').children('ul').slideUp();
  $('#pageMenu .hasSub').append('<button></button>');
  $('#pageMenu .hasSub button').click(function() {
    var folder = $(this).parent('li.hasSub');// 父層li
    //未展開
    if( folder.hasClass('open') == false ){
      // 選單展開
      folder.children('ul').slideDown(200);
      folder.addClass('open');
      // 隔壁有展開選單要收合
      // 隔壁有展開選單的子層要收合
      folder.siblings('.open').find('ul').slideUp(200);
      folder.siblings('.open').find('.open').removeClass('open');
      folder.siblings('.open').removeClass('open');
    }else { //已展開
      // 選單收合
      folder.find('ul').slideUp(200);
      folder.removeClass('open');
      // 這個li 子層內有展開選單要收合
      folder.find('.hasSub.open').removeClass('open');
    }
  });  
  
  //內頁-左側選單開闔
	$('.sideMenu ul li a').click(function(){
    if($(this).parent().hasClass('on')){
      $(this).next('.sideMenu ol').slideToggle();      
      $(this).parent().removeClass('on');
    } else {
      $(this).next('.sideMenu ol').slideToggle();
      $(this).parent().siblings().children('.sideMenu ol').slideUp();    
      $(this).parent().addClass('on').siblings('.on').removeClass('on');      
    }
    });
  //內頁-左側選單第三層存在判斷
  if ( $('.sideMenu ol').length > 0 ) { 
    $('.sideMenu ol').parent().addClass('menuThi');
  } 	
});

//內頁-活動紀錄
var swiperAll = new Swiper('.swiperAll', {
  spaceBetween:10,
  slidesPerView:2,
  breakpoints: {
    768: {
      slidesPerView:4,
    }
  },
  freeMode:true,
  watchSlidesProgress:true,  
  });
var swiperOn = new Swiper('.swiperOn', {
  spaceBetween:0,
  slidesPerView:1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiperAll,
  },
});

//內頁-QA開闔
$('.qaTxt .q').click(function(){
	if($(this).parent().hasClass('on')){
		$(this).siblings('.a').slideToggle();
		$(this).parent().removeClass('on');
	} else {
		$(this).siblings('.a').slideToggle();
    $(this).parent().siblings().children('.a').slideUp(); 
		$(this).parent().addClass('on').siblings('.on').removeClass('on');   
	}
	event.preventDefault();
});

//內頁-網站導覽開闔
$('.siteTxt .site-tit').click(function(){
	if($(this).parent().hasClass('on')){
		$(this).siblings('.site-con').slideToggle();
		$(this).parent().removeClass('on');
	} else {
		$(this).siblings('.site-con').slideToggle();
    $(this).parent().siblings().children('.site-con').slideUp(); 
		$(this).parent().addClass('on').siblings('.on').removeClass('on');   
	}
	event.preventDefault();
});

//footer收合
$("a.sitemap-toggle").click(function() {
  $("#ft-map").toggleClass("open");
  return false;
});

//gotop
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    if ($(".goTop").hasClass("hide")) {
      $(".goTop").toggleClass("hide");
    }
  } else {
    $(".goTop").addClass("hide");
  }
});

$(".jq-goTop").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});


//小網時 左側副選單收合
$(".sideMenu .main").click(function() {
  $(this).toggleClass("menu-open");
  return false;
});

