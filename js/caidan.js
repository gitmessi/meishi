$(function(){

    function startMove(obj, att, add) {
	    clearInterval(obj.timer)
	    obj.timer = setInterval(function() {
	        var cutt = Math.round(parseFloat(obj.css(att)));
	        // alert(cutt);
	        var speed = (add - cutt) / 8;
	        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	        if (cutt == add) {
	            clearInterval(obj.timer)
	        } else {
	             obj.css(att,cutt+speed+'px');
	        }
	    }, 30)
	}


	var oUlBig2 =$('.main .main-y .ban .ban-center ul');
    var aBigLi2 =$('.ban-center ul li');
    var oDivSmall2 =$('.main .main-y .ban .ban-bottom');
    var aLiSmall2 = $('.ban .ban-bottom span');

    var now2 = 0;
    aLiSmall2.each(function(e){
     	$(this).click(function(){
     		now2=e;
	     	tab2();

    	});
    });

    $('.ban-right').click(function(){
    	if(now2<2){
			now2++;
			tab2();
    	}else{
    		now2=0;
    		tab2();
    	}
    });

    $('.ban-left').click(function(){
    	if(now2>0){
			now2--;
			tab2();
    	}else{
    		now2=2;
    		tab2();
    	}
    });

    function tab2(){
    	aLiSmall2.each(function(){
     		aLiSmall2.removeClass();
     	});
     	// $('.time-center .timex:eq('+now+')').addClass('thistital');
     	$('.ban .ban-bottom span:eq('+now2+')').addClass('thistital-2');
     	startMove(oUlBig2, 'left', -(now2 * aBigLi2[0].offsetWidth));
    }

    var timer = setInterval(function() {
        
        if (now2< 2) {
        	now2++;
            tab2();
        } else {
           now2 = 0;
           tab2();
        }
    }, 2000);

    $(".ban-center").mouseout(function() {
        timer = setInterval(function() {
             if (now2< 2) {
		        	now2++;
		            tab2();
		        } else {
		           now2 = 0;
		           tab2();
		        }
		    }, 2000);
    })
    $(".ban-center").mouseover(function() {
        clearInterval(timer);
    });


    $('.main .lb ul li').hover(function(){
        var i=$(this).index();
        $('.main .lb ul li h4').eq(i).show();
    },function(){
         var i=$(this).index();
        $('.main .lb ul li h4').eq(i).hide();
    });

    $('.main .lb2 ul li').hover(function(){
        var i=$(this).index();
        $('.main .lb2 ul li h4').eq(i).show();
    },function(){
         var i=$(this).index();
        $('.main .lb2 ul li h4').eq(i).hide();
    });

    $('.main .lb3 ul li').hover(function(){
        var i=$(this).index();
        $('.main .lb3 ul li h4').eq(i).show();
    },function(){
         var i=$(this).index();
        $('.main .lb3 ul li h4').eq(i).hide();
    });

    $('.main .lb4 ul li').hover(function(){
        var i=$(this).index();
        $('.main .lb4 ul li h4').eq(i).show();
    },function(){
         var i=$(this).index();
        $('.main .lb4 ul li h4').eq(i).hide();
    });
});