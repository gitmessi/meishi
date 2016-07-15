$(function(){
		$('.main .main-1 .a4').click(function(){
			if ($('.main .main-1 .a4').text()=='更多第三方登录方式') {
				$('.main .main-1 .yc').slideDown();
				$('.main .main-1 .a4').text('收起');
				
			}else if ($('.main .main-1 .a4').text()=='收起') {
				$('.main .main-1 .yc').slideUp();
				$('.main .main-1 .a4').text('更多第三方登录方式');
			}
	});
	
});