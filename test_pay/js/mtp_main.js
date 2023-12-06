//header捲動
$(window).scroll(function(){
  if($(window).scrollTop() > 50){
    $(".mtp_header").addClass('mtp_scroll');
  }else {
    $(".mtp_header").removeClass('mtp_scroll');
  }
});

$(function(){
  $('.mtp_mobileNavBtn').click(function () {
    $('.mtp_page').addClass('mtp_openmenu');
    return false;
  });
  $('.mtp_page_cover').click(function () {
    $('.mtp_page').removeClass('mtp_openmenu');
  });
});