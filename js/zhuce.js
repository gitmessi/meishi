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


	$('.main .form .for-1 #a2').click(function(){
		$('.main .form .for-2 .v').animate({left:'-320px'});
		$('.main .form .for-1 #a1').removeClass();
		$('.main .form .for-1 #a2').addClass('a1');

	})
	$('.main .form .for-1 #a1').click(function(){
		$('.main .form .for-2 .v').animate({left:'0px'});
		$('.main .form .for-1 #a2').removeClass();
		$('.main .form .for-1 #a1').addClass('a1');
	})

	
});