//頁面高度
$(window).on("load resize", function() {
	//頁面寬度
	var $wW = $(window).width();
	//頁面高度
	var $wH = $(window).height();
	var $footerH = $(".footer").outerHeight();
	var $index_headerH = $(".index_header").outerHeight();
	if ($wW < 800){
		//小網
		$(".wrapper").css('min-height', $wH - $footerH - 20 );
		$(".indexArea").css('min-height', $wH - $footerH );
	} else {
		//大網
		$(".indexArea").css('min-height', $wH - $index_headerH - $footerH );
	}
});

/*-----------------------header------------------------*/
//收合NAV
function close_Nav() {
	if ($('.vertical_nav').hasClass('vertical_nav__opened') === true ) {
		$('.vertical_nav').removeClass('vertical_nav__opened');
		$('.wrapper').removeClass('toggle-content');
	}
}
//大小網更正NAV顯示
$(window).on("resize", function() {
	var $wW = $(window).width();
	if ($wW > 800){ 
		$('.vertical_nav').removeClass('vertical_nav__opened');
	}
	if ($wW < 800){ 
		$('.vertical_nav').removeClass('vertical_nav__minify');
		$('.wrapper').removeClass('wrapper__minify');
	}
});
//NAV_卷軸
$(window).on("load resize", function() {
	$(".menu").mCustomScrollbar();
});

//收合所有header下拉
function close_headerBox() {
	$('.user_spotSelect').css('display','none');
	$('.msgBox.type_notice').css('display','none');
	$('.msgBox.type_msg').css('display','none');
}
$("#toggleMenu").click(function(){
	close_headerBox();
});
//切換場域開合
function open_spotSelect() {
	if ($('.msgBox.type_notice').css('display') == 'block' || 
		$('.msgBox.type_msg').css('display') == 'block') {
		close_headerBox();
	}
    close_Nav();
    $('.user_spotSelect').slideToggle(300);
}
//大網
$(".header_user .user_spot").click(function(){
	open_spotSelect();
});
//小網
$(".header_nav .header_person").click(function(){
	open_spotSelect();
});
//通知開合_事件
$(".header_nav .header_msg").click(function(){
	if ($('.msgBox.type_notice').css('display') == 'block' || 
		$('.user_spotSelect').css('display') == 'block') {
		close_headerBox();
	}
	close_Nav();
    $('.msgBox.type_msg').slideToggle(300);
});
//通知開合_系統
$(".header_nav .header_notice").click(function(){
	if ($('.msgBox.type_msg').css('display') == 'block' || 
		$('.user_spotSelect').css('display') == 'block') {
		close_headerBox();
	}
	close_Nav();
    $('.msgBox.type_notice').slideToggle(300);
});

/*_mainBlock_主選單開合*/
$('.subTitle_hiddenBtn').click(function(){
	var value = $(this).attr('data-hidden');
	$(this).toggleClass('open');
	$.each($('.hiddenInner[data-hidden='+value+']'), function() {
		$(this).slideToggle();
	});
	return false;
});

//SelectLi 選單開合
$(".SelectLi .SelectTitle").click(function(){
    $(this).siblings('.hiddenSelect').slideToggle(250);
    $(this).toggleClass("open");
});
