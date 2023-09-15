/*------------------------------------*\
  popup
\*------------------------------------*/
// popup 開啟
function openPopup(popValue) {
  $.each($('div[data-popup=' + popValue + ']'), function () {
    $(this).addClass('popupopen');
  });
  return false;
};
// popup 收合
function closePopup(popValue) {
  $.each($('div[data-popup=' + popValue + ']'), function () {
    $(this).removeClass('popupopen');
  });
  return false;
};
function setBannerSwiper() {
  if ( $(window).width() >= 992 ) {
    var bannerSwiper = new Swiper('.bannerSwiper-main.swiper', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: bannerSwiperSwitch,
      },
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    });
  } else if ( $(window).width() < 992 ) {
    var bannerSwiper = new Swiper('.bannerSwiper-main.swiper', {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 8,
      effect: 'slide',
      loop: true,
      pagination: {
        el: ".bannerSwiper-main .swiper-pagination",
        clickable: false,
      },
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        376: {
          slidesPerView: 1.6,
        }
      }
    });
  }
}

// bannerSwiper
var bannerFlag = [false,false];
var bannerSwiper = undefined;
var bannerSwiperSwitch = undefined;

/*------------------------------------*/
$(function () {

  /*------------------------------------*\
    headerPC
  \*------------------------------------*/
  // 會員小卡
  $('.headMemberInfo-btn').on('click', function () {
    if ( $('.headMemberInfo').hasClass('open') == false ) {
      $('.headerPc-cover').addClass('open');
    } else {
      $('.headerPc-cover').removeClass('open');
    }
    $('.headMemberInfo').toggleClass('open');
  });
  $('.headerPc-cover').on('click', function () {
    $('.headMemberInfo').removeClass('open');
    $('.headerPc-cover').removeClass('open');
  });


  /*------------------------------------*\
    bannerSwiper
  \*------------------------------------*/
  bannerSwiperSwitch = new Swiper('.bannerSwiper-switch.swiper', {
    slidesPerView: 'auto',
    direction: "vertical",
    watchSlidesProgress: true,
    slideToClickedSlide: true,
  });
  if ( $(window).width() >= 992 ) {
    bannerSwiper = new Swiper('.bannerSwiper-main.swiper', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: bannerSwiperSwitch,
      },
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    });
    bannerFlag[1] = true;
  } else if ( $(window).width() < 992 ) {
    bannerSwiper = new Swiper('.bannerSwiper-main.swiper', {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 8,
      effect: 'slide',
      loop: true,
      pagination: {
        el: ".bannerSwiper-main .swiper-pagination",
        clickable: false,
      },
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        376: {
          slidesPerView: 1.6,
        }
      }
    });
    bannerFlag[0] = true;
  }

  /*------------------------------------*\
    持有點數
  \*------------------------------------*/
  $.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from: $(this).data('from'),
        to: $(this).data('to'),
        speed: $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals: $(this).data('decimals')
      }, options);

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};

      $self.data('countTo', data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof (settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;

          if (typeof (settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }

  // custom formatting example
  $('.JS_count-number').data('countToOptions', {
    formatter: function (value, options) {
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
  });

  // start all the timers
  $('.JS_timer').each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
  }

  

});

$(window).on('resize',function () {
  if ( $(window).width() >= 992 && !bannerFlag[1] ) {
    bannerFlag = [false,true];
    bannerSwiper.destroy(false);
    bannerSwiper = new Swiper('.bannerSwiper-main.swiper', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: bannerSwiperSwitch,
      },
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    });
  } else if ( $(window).width() < 992 && !bannerFlag[0] ) {
    bannerFlag = [true,false];
    bannerSwiper.destroy(false);
    bannerSwiper = new Swiper('.bannerSwiper-main.swiper', {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 8,
      effect: 'slide',
      loop: true,
      pagination: {
        el: ".bannerSwiper-main .swiper-pagination",
        clickable: false,
      },
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      breakpoints: {
        376: {
          slidesPerView: 1.6,
        }
      }
    });
  }

});

/*------------------------------------*/
$(window).scroll(function () {

  /*------------------------------------*/
  // content-右側選單
  var wH = $(window).height();
  if ($(window).scrollTop() > wH) {
    // headerPc scroll change
    $('.headerPc').addClass('openScroll');
    // content-右側選單
    $('.contentSide').fadeIn();
  } else {
    // headerPc scroll change
    $('.headerPc').removeClass('openScroll');
    // content-右側選單
    $('.contentSide').fadeOut();
  }

});

/*------------------------------------*\
  小網 設定container高度
\*------------------------------------*/
var winH = 0;
var headerMH = 0;
function containerSize() {
  winH = $(window).height();
  headerMH = $('.headerM').height() + $('.headerPc').height();
  if ($('.headerM').is(':visible')) {
    $('.container').css('min-height', winH - headerMH - 8);
  } else {
    $('.container').css('min-height', '');
  }
}
function containerFullSize() {
  winH = $(window).height();
  headerMH = $('.headerM').height() + $('.headerPc').height();
  if ($('.container-full').is(':visible')) {
    $('.container-full').css('min-height', winH - headerMH);
  } else {
    $('.container-full').css('min-height', '');
  }
  if ($('.container-finding').is(':visible')) {
    $('.container-finding').css('min-height', winH - headerMH);
  } else {
    $('.container-finding').css('min-height', '');
  }
}
$(window).on("load resize", function () {
  containerSize();
  containerFullSize();
});


/*------------------------------------*\
  content
\*------------------------------------*/
// 清除搜尋條件
function clearSearchTag(popValue) {
  $('.chip-box.searchTag-log').empty();
  $('.searchTag-area.searchTag-log').hide();
  closePopup(popValue);
}


// 顯示完整名稱 tooltip
$('.JS_tooltip').tooltip({
  show: {
    delay: 3000,
  }
});