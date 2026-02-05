// footer trigger
function ftTgl() {
  var $wW = $(window).width();
  if ($wW <= 900){
    $('.trig').removeClass('open');
    if($(this).next('.info').is(':hidden')){
      $('.info').slideUp();
      $(this).addClass('open');
      $(this).next('.info').slideToggle();
    }else{
      $(this).removeClass('open');
      $(this).next('.info').slideToggle();
    }
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



// ready
$(function(){
  /*------------------------------------*\
    header_選單收合
  \*------------------------------------*/
  $('.headNav-list .hasSub-btn').mouseover(function(){
    // open
    let sibling = $(this).parent('.hasSub').siblings('.hasSub');
    sibling.removeClass('open');
    $('.headNav-list .hasSub-hide').stop().hide();
    $(this).siblings('.hasSub-hide').fadeIn(300);
    $(this).parent('.hasSub').addClass('open');
    return false;
  });
  // close
  $('.headNav-list .hasSub').mouseleave(function () {
    $('.hasSub-hide').fadeOut();
    $(this).children('li').removeClass('open');
  });


  // search
  // $('.header-search').on('click', function () {
  //   if($(window).width() <= 900 && $('.popup.ty-search').hasClass('open') == false){
  //     $('.popup.ty-search').addClass('open');
  //   } else if ($(window).width() <= 900 && $('.popup.ty-search').hasClass('open') == true) {
  //     $('.popup.ty-search').removeClass('open');
  //   }
  // });


  /*------------------------------------*/
  /*footer toogle*/
  $(".infoBox .trig").click(ftTgl);



  // 折疊區塊
  $(document).on('click', '.filterFloat .ty-trigger', function() {
    let folder = $(this).parents('.filterFloat'); // 父層li
    console.log('act');
    //未展開
    if( $(this).hasClass('open') == true ){
      folder.find('.fold-hide').slideUp();
      $(this).removeClass('open');
    }else {
      // folder.siblings('.open').find('.fold-hide').slideUp();
      // folder.siblings('.open').removeClass('open');
      // $(this).removeClass('open');
      folder.children('.fold-hide').slideDown();
      $(this).addClass('open');
    }
    return false;
  });
  $(document).on('click', '.filterFloat .btn-close', function() {
    $('.filterFloat .fold-hide').slideUp();
    $('.filterFloat .ty-trigger').removeClass('open');
    return false;
  });



  // datepicker
  $( function() {
    $( ".JS_datepicker" ).datepicker();
  } );



  /*------------------------------------*/
  try {
    // const
    const swiper_topBn = new Swiper('.topBn .swiper', {
      slidesPerView: 1.4,
      spaceBetween: 16,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        480: {
          slidesPerView: 1.8,
        },
        900: {
          slidesPerView: 3,
        }
      }
    });

    const swiper_qckNav = new Swiper('.qckNav .swiper', {
      slidesPerView: 1,
      spaceBetween: 12,
      centerInsufficientSlides: true,
      pagination: {
        el: '.qckNav .swiper-pagination',
      },
    });

    const swiper_articleHead = new Swiper('.articleHead-nav .swiper', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      centerInsufficientSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        900: {
          slidesPerView: 5,
        }
      }
    });
    const swiper_typeNav = new Swiper('.typeNav .swiper', {
      slidesPerView: 'auto',
      centerInsufficientSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    // const swiper_articleBot = new Swiper('.bot-container .swiper', {
    // 	loop: true,
    // 	slidesPerView: 1,
    // 	spaceBetween: 30,
    // 	// pagination: {
    // 	// 	el: '.bot-pagination', 
    // 	// 	clickable: true,
    // 	// },
    // 	navigation: {
    // 		nextEl: '.swiper-button-next',
    // 		prevEl: '.swiper-button-prev',
    // 	},
    // 	// autoplay: {
    // 	// 	delay: 8000
    // 	// },
    //   breakpoints: {
    //     768: {
    //       slidesPerView: 2,
    //     },
    //     // 1024: {
    //     //   slidesPerView: 3,
    //     // },
    //     // 1200: {
    //     //   slidesPerView: 4,
    //     // }

    //   }
    // });
    const swiper_articleBot = new Swiper('.atricleSlide .swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.atricleSlide-title .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // autoplay: {
      // 	delay: 8000
      // },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      }
    });

    // update 
    swiper_topBn.update();
  }
  catch(error) {
    return false;
  }



});



$(window).on("resize", function() {
  var $wW = $(window).width();
  /*footer toogle*/
  if($wW >900){
    $('.trig').removeClass('open');
    $('.info').css('display','block');
  }else{
    $('.info').css('display','none');
  }

});

