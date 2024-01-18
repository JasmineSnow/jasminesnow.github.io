
$(window).on('load resize', function(){
  // container height
  var headH = $('header').outerHeight();
  var footH = $('footer').outerHeight();
  var containerMin = $(window).height() - headH - footH;
  $('.container').css('min-height', containerMin);
});

$(function(){
  $('.container').addClass('js_containerAnimated');
});