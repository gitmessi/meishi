$(function(){
	$('.ban2 .ban-center2 li .d').hover(function(){
    	var i=$(this).index();
    	$('.ban2 .ban-center2 li .d .c .c1').eq(i).slideUp('fast');
    },function(){
    	var i=$(this).index();
    	$('.ban2 .ban-center2 li .d .c .c1').eq(i).slideDown('fast');
    })
})