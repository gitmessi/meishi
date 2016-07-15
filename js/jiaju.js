$(function(){
	
		$('.main .main-cent .main_1 .main_1_left .item').mouseover(function(){
			var i=$(this).index();
			// $(this).css('backgroundColor','#FF3232');
			$('.main .main-cent .main_1 .main_1_left .item .yc').hide();
			$('.main .main-cent .main_1 .main_1_left .item .yc').eq(i).show();
		})
		$('.main .main-cent .main_1 .main_1_left .item').mouseout(function(){
			$('.main .main-cent .main_1 .main_1_left .item .yc').hide();
		})


		$('.main .main-cent .gg_cont .cont_left ul li').mouseover(function(){
			var i=$(this).index();
			$('.main .main-cent .gg_cont .cont_left ul li a').removeClass();
			$('.main .main-cent .gg_cont .cont_left ul li a').eq(i).addClass('a');
			$('.main .main-cent .gg_cont .cont_right .show').hide();
			$('.main .main-cent .gg_cont .cont_right .show').eq(i).show();
		})

		$('.main .main-cent .gg_cont2 .cont_left ul li').mouseover(function(){
			var i=$(this).index();
			$('.main .main-cent .gg_cont2 .cont_left ul li a').removeClass();
			$('.main .main-cent .gg_cont2 .cont_left ul li a').eq(i).addClass('a');
			$('.main .main-cent .gg_cont2 .cont_right .show').hide();
			$('.main .main-cent .gg_cont2 .cont_right .show').eq(i).show();
		})

		$('.main .main-cent .gg_cont3 .cont_left ul li').mouseover(function(){
			var i=$(this).index();
			$('.main .main-cent .gg_cont3 .cont_left ul li a').removeClass();
			$('.main .main-cent .gg_cont3 .cont_left ul li a').eq(i).addClass('a');
			$('.main .main-cent .gg_cont3 .cont_right .show').hide();
			$('.main .main-cent .gg_cont3 .cont_right .show').eq(i).show();
		})
	
});