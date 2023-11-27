/*-------------------- 頁面最小高度 --------------------*/
$(window).on("load resize", function() {
    var wH = $(window).height();
    //抓高度
    var headerH = $(".header").outerHeight();
    var footerH = $(".footer").outerHeight();
    //console.log(headerH);
    //console.log(footerH);
    $(".container").css('min-height', wH - headerH - footerH );
});

/*-------------------- 小網MMENU --------------------*/
//MMENU
$(document).ready(function() {
    $("#menu").mmenu({
        "slidingSubmenus": false,
        "classNames": {
          selected: "active"
        },
        "extensions": [
          "pagedim-black"
        ], 
        navbar: {
            add: false //移除標題
        }
    });
});
$('.mm-btn_next').click(function() {
    console.log('01');
    var myMenu = $(this).closest('.mm-listitem_vertical');
    console.log('02');
    myMenu.parent().children('.mm-listitem_vertical').not(myMenu).removeClass('mm-listitem_opened');
});

//MMENU_大網關閉
$(window).on("resize", function() {
    var wW = $(window).width();
    if( wW > 767 ){
        $("#menu").data("mmenu").close();
    }
});

/*mobile header*/
$(window).scroll(function(){
     if($(window).scrollTop() > 50){
        $(".header").addClass('fixed');
     }else {
        $(".header").removeClass('fixed');
     }
})


/*-------------------- page --------------------*/
/*區塊切換*/
function js_switcher_change(group,value){
  //console.log(select_group);
  //console.log(select_value);
  try{
    $('.js_switcherBtn[data-switchGroup='+group+']').children('a').removeClass('on');
    $('.js_switcherBtn[data-switchGroup='+group+']').children('a[data-switchIn='+value+']').addClass('on');
    $('.js_switcher[data-switchGroup='+group+']').hide();
    $('.js_switcher[data-switchIn='+value+']').show();
    mySwiper.update();
  }
  catch(error){}
}
/*區塊切換_按鈕*/
$('.js_switcherBtn a').click(function(){
    var group = $(this).parents('.js_switcherBtn').attr('data-switchGroup');
    var value = $(this).attr('data-switchIn');
    js_switcher_change(group,value);
    return false;
});
/*區塊切換_select*/
$('.js_switcherSelect').change(function(){
    var group = $(this).attr('data-switchGroup');
    var value = $(this).find(':selected').attr('data-switchIn');
    js_switcher_change(group,value);
});

/*-------------------- btn_浮動 --------------------*/
$(window).scroll(function() {
    //頁面寬度
    var wW = $(window).width();
    var footerH = $('.footer_inner').outerHeight();
    //頁面高度-footer高度
    var bottomH = $(".wrapper").outerHeight() - footerH;// - $('.footer').outerHeight() 
    if( wW > 768 ) {
        if ( ($(window).scrollTop() + $(window).height()) >= ( bottomH + 20 ) ) {
            $(".pageBtn").css('bottom', footerH + 25);
        }else {
            $(".pageBtn").css('bottom', 10);
        }
    }
    if( wW < 768 ) {
        if ( ($(window).scrollTop() + $(window).height()) >= ( bottomH + 50 ) ) {
            $(".pageBtn").css('bottom', footerH + 40 );
        }else {
            $(".pageBtn").css('bottom', 10);
        }
    }   
});

/* 基金 */
var mySwiper = new Swiper('.fundsArea .swiper-container', {
    slidesPerView :1,
    spaceBetween : 20,
    loop : true,
    navigation: {
        nextEl: '.fundsArea .swiper-button-next',
        prevEl: '.fundsArea .swiper-button-prev',
    },
	pagination: {
				el: '.fundsArea .swiper-pagination',
				type: 'fraction',
	},
    breakpoints: {//当屏幕宽度大于等于
        1440: {
          slidesPerView: 3
        },
        1280: {
            slidesPerView: 2
        },
        1023: {
            slidesPerView: 2
        },
        767: {
            slidesPerView: 1,
			
        },
        640: {
            slidesPerView :1
        }
    }
});

/*  ADS*/
var mySwiper = new Swiper('.adsArea .swiper-container', {
    slidesPerView :1,
    spaceBetween :0,
    loop : true,
    navigation: {
        nextEl: '.adsArea .swiper-button-next',
        prevEl: '.adsArea .swiper-button-prev',
    },
});


/* 篩選_ulSelect */
var ulSelectTrigger = $('.ulSelect_btn');
var ulSelectList = $('.ulSelect ul');
ulSelectTrigger.click(function() {
    ulSelectTrigger.toggleClass('open');
    //顯示/隱藏li
    if ( ulSelectList.is(":visible") === true ) {
      ulSelectList.children('li').hide(30);
    } else if ( ulSelectList.is(":visible") === false ) {
      ulSelectList.children('li').show();
    }
    //開合ul
    ulSelectList.slideToggle(250);
});
// ulSelectList.click(function() {
//     ulSelectTrigger.click();
// });

//

/* 單張卡片滑動 */
var mySwiper = new Swiper('.slideArea .swiper-container', {
  slidesPerView :1,
  spaceBetween : 20,
  loop : true,
  pagination: {
        el: '.slideArea .swiper-pagination',
        type: 'fraction',
  },
  navigation: {
      nextEl: '.slideArea .swiper-button-next',
      prevEl: '.slideArea .swiper-button-prev',
  }
});
var mySwiper = new Swiper('.fundDetailArea .swiper-container', {
  loop : true,
  pagination: {
        el: '.fundDetailArea .swiper-pagination',
        type: 'fraction',
  },
  navigation: {
      nextEl: '.fundDetailArea .swiper-button-next',
      prevEl: '.fundDetailArea .swiper-button-prev',
  }
});
//卷軸Box
try {
  /* 捲動box */
  $('.scrollBox').mCustomScrollbar({
      theme:"dark"
  });
}
catch (error) {
}

//頁尾區域
$(window).on("load resize", function() {
    try {
      var bottomH = $('.JS_Bottom_area').outerHeight();
      if( bottomH !== 0 ){
        $('.content').css('padding-bottom',bottomH);
      }
    }
    catch (error) {
  }
  //multiple_choice-點選狀態
  $(".multiple_choice a").click(function(){
    if($(this).hasClass("select")){
      $(this).removeClass("select");
    } else {
      $(this).addClass("select");
    }
  });
  //multiple_dayNum-點選狀態
  $(".multiple_dayNum a").click(function(){
    if($(this).hasClass("on")){
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  });
  //btn_expand:開闔
  $(".listSet .btn_expand").click(function () {
    $(this).toggleClass("show");
    $(this).siblings(".formboxList_mid").slideToggle();
    return false;
  });
  $(".btn_expand").click(function(){
    // 凍結表格收合
    if ($(this).parent('td').parent('tr').siblings('tr').hasClass('table_fix-tr') == true) {
      $(this).parent('td').parent('tr').siblings('.expand_box').hide();
      $(this).parents('.table_fix').find('.expand_box').removeClass('show');
      $(this).parents('.table_fix').find('.btn_expand').removeClass('show');
      $(this).parents('.table_fix').find('.table_fix-tr').removeClass('table_fix-tr');
    }
    if ($(this).parents('.tableBox').hasClass('table_fix') == true) {
      $(this).parent('td').parent('tr').toggleClass('table_fix-tr');
    }
    // 開關動作
    $(this).toggleClass("show");
    $(this).siblings(".formboxList_mid").toggle();
    $(this).parents().next(".expand_box").toggle();
    $(this).parents().next(".expand_box").toggleClass("show");
    
    return false;
  });
  //btn_keyboard:開闔
  $(".btn_keyboard").click(function(){ 
    $(this).next(".keyboardBox").slideToggle();
  });
  //input:開闔
  $("input[name='check']").click(function() {
    if($("input[name='check']").prop("checked")) {
    $(this).parents().next(".formboxList_mid").slideToggle();
    $(this).parents().next(".fund_input").slideToggle();
    } 
    else {
    $(this).parents().next(".formboxList_mid").slideToggle();
    $(this).parents().next(".fund_input").slideToggle();
    }
  });
  //table_add表格:增加項目開闔
  $(".table_add_tit").click(function(){
  if($(this).hasClass("show")){
    $('.table_add_list').slideToggle();
    $(this).removeClass("show");
  } else {
    $('.table_add_list').slideToggle();
    $(this).addClass("show");
  }
  });

  if($(window).width() > 1024){
    //chartTable li:當為四個項目時則改變寬度成兩列排列
    $(".chartTable").each(function () {
      var $ul = $(this); 
      var $li = $ul.find("li"); 
      if ($li.length == 4) {
        $li.css({ "width": "48%" });
      }
    });
  }
  if($(window).width() < 767){
    $("input[name='check']").click(function() {
      if($("input[name='check']").prop("checked")) {
      $(this).parents().next(".fund_info").slideToggle();
      } 
      else {
      $(this).parents().next(".fund_info").slideToggle();
      }
    });
  }
});

// for caption_toggle
$(document).ready(function() {
  $(document).on('click', function (e) {
    if ($(window).width() < 767) {
      $(this).trigger('hover');
    }
  });
  $(document).on('click', function (e) {
    if ($(window).width() < 767 && $(e.target).closest(".caption_toggle").length === 0) {
      $(this).trigger('mouseleave');
    }
  });
});