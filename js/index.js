$(function(){

    // $.ajax({
    //         url:'../data.txt',
    //         type:'get',
    //         success:function(data){      
    //             var arrData=eval(data);
    //             fen1(arrData);
    //             fen2(arrData);
    //             fen3(arrData);
    //             fen4(arrData);
    //             fen5(arrData);
    //             feng();
    //         },

    // })

    // function fen1(arrData){
    //     var div=$('<div class="item it-1"></div>');
    //             var h3=$('<h3>'+arrData.index.h+'</h3>');
    //             var ul=$('<ul></ul>');
    //             $.each(arrData.index.a1,function(i,v){
    //                 var li=$('<li></li>');
    //                 var a=$('<a href="" class="img"></a>');
    //                 var img=$('<img src='+arrData.index.a1[i].img+'>');
    //                 var div1=$('<div class="c"></div>');
    //                 var h2=$('<h2></h2>');
    //                 var a1=$('<a href="">'+arrData.index.a1[i].a+'</a>');
    //                 var strong=$('<strong>'+arrData.index.a1[i].strong+'</strong>');
    //                 var span=$('<span>'+arrData.index.a1[i].span+'</span>');
    //                 h2.append(a1);
    //                 div1.append(h2).append(strong).append(span);
    //                 a.append(img);
    //                 li.append(a).append(div1);
    //                 ul.append(li);
    //             });
    //             div.append(h3).append(ul);
    //             $('.main .main-y .index .index-main').append(div);
    // }
    // function fen2(arrData){
    //     var div=$('<div class="item it-2"></div>');
    //             var h3=$('<h3>'+arrData.index2.h+'</h3>');
    //             var ul=$('<ul></ul>');
    //             $.each(arrData.index2.a1,function(i,v){
    //                 var li=$('<li></li>');
    //                 var a=$('<a href="" class="img"></a>');
    //                 var img=$('<img src='+arrData.index2.a1[i].img+'>');
    //                 var div1=$('<div class="c"></div>');
    //                 var h2=$('<h2></h2>');
    //                 var a1=$('<a href="">'+arrData.index2.a1[i].a+'</a>');
    //                 var strong=$('<strong>'+arrData.index2.a1[i].strong+'</strong>');
    //                 var span=$('<span>'+arrData.index2.a1[i].span+'</span>');
    //                 h2.append(a1);
    //                 div1.append(h2).append(strong).append(span);
    //                 a.append(img);
    //                 li.append(a).append(div1);
    //                 ul.append(li);
    //             });
    //             div.append(h3).append(ul);
    //             $('.main .main-y .index .index-main').append(div);
    // }
    // function fen3(arrData){
    //     var div=$('<div class="item it-3"></div>');
    //             var h3=$('<h3>'+arrData.index3.h+'</h3>');
    //             var ul=$('<ul></ul>');
    //             $.each(arrData.index3.a1,function(i,v){
    //                 var li=$('<li></li>');
    //                 var a=$('<a href="" class="img"></a>');
    //                 var img=$('<img src='+arrData.index3.a1[i].img+'>');
    //                 var div1=$('<div class="c"></div>');
    //                 var h2=$('<h2></h2>');
    //                 var a1=$('<a href="">'+arrData.index3.a1[i].a+'</a>');
    //                 var strong=$('<strong>'+arrData.index3.a1[i].strong+'</strong>');
    //                 var span=$('<span>'+arrData.index3.a1[i].span+'</span>');
    //                 h2.append(a1);
    //                 div1.append(h2).append(strong).append(span);
    //                 a.append(img);
    //                 li.append(a).append(div1);
    //                 ul.append(li);
    //             });
    //             div.append(h3).append(ul);
    //             $('.main .main-y .index .index-main').append(div);
    // }
    // function fen4(arrData){
    //     var div=$('<div class="item it-4"></div>');
    //             var h3=$('<h3>'+arrData.index4.h+'</h3>');
    //             var ul=$('<ul></ul>');
    //             $.each(arrData.index4.a1,function(i,v){
    //                 var li=$('<li></li>');
    //                 var a=$('<a href="" class="img"></a>');
    //                 var img=$('<img src='+arrData.index4.a1[i].img+'>');
    //                 var div1=$('<div class="c"></div>');
    //                 var h2=$('<h2></h2>');
    //                 var a1=$('<a href="">'+arrData.index4.a1[i].a+'</a>');
    //                 var strong=$('<strong>'+arrData.index4.a1[i].strong+'</strong>');
    //                 var span=$('<span>'+arrData.index4.a1[i].span+'</span>');
    //                 h2.append(a1);
    //                 div1.append(h2).append(strong).append(span);
    //                 a.append(img);
    //                 li.append(a).append(div1);
    //                 ul.append(li);
    //             });
    //             div.append(h3).append(ul);
    //             $('.main .main-y .index .index-main').append(div);
    // }
    // function fen5(arrData){
    //     var div=$('<div class="item it-5"></div>');
    //             var h3=$('<h3>'+arrData.index5.h+'</h3>');
    //             var ul=$('<ul></ul>');
    //             $.each(arrData.index5.a1,function(i,v){
    //                 var li=$('<li></li>');
    //                 var a=$('<a href="" class="img"></a>');
    //                 var img=$('<img src='+arrData.index5.a1[i].img+'>');
    //                 var div1=$('<div class="c"></div>');
    //                 var h2=$('<h2></h2>');
    //                 var a1=$('<a href="">'+arrData.index5.a1[i].a+'</a>');
    //                 var strong=$('<strong>'+arrData.index5.a1[i].strong+'</strong>');
    //                 var span=$('<span>'+arrData.index5.a1[i].span+'</span>');
    //                 h2.append(a1);
    //                 div1.append(h2).append(strong).append(span);
    //                 a.append(img);
    //                 li.append(a).append(div1);
    //                 ul.append(li);
    //             });
    //             div.append(h3).append(ul);
    //             $('.main .main-y .index .index-main').append(div);
    // }
	function feng(){
        var oDiv = $('.main')
        var oUlBig =$('.main .main-y .index .index-main');
        var aBigLi =$('.index-main .item');
        var oDivSmall =$('.main .timeline .time-center');
        var aLiSmall = $('.time-center .timex');
        var hehe=$('.time-center .timex span');
        var now = 0;
        aLiSmall.each(function(e){
            $(this).mouseover(function(){
                now=e;
                tab();

            });
        });
        aBigLi.each(function(e){
            $(this).mouseover(function(){
                if (e==0) {
                    $('.next').css({'backgroundPosition':'-174px -142px'});
                    $('.prev').css({'backgroundPosition':'0px -364px'});
                };
                if (e==1) {
                    $('.next').css({'backgroundPosition':'-174px -216px'});
                    $('.prev').css({'backgroundPosition':'0px -68px'});
                };
                if (e==2) {
                    $('.next').css({'backgroundPosition':'-174px -290px'});
                    $('.prev').css({'backgroundPosition':'0px -142px'});
                };
                if (e==3) {
                    $('.next').css({'backgroundPosition':'-174px -364px'});
                    $('.prev').css({'backgroundPosition':'0px -216px'});
                };
                if (e==4) {
                    $('.next').css({'backgroundPosition':'-174px -68px'});
                    $('.prev').css({'backgroundPosition':'0px -290px'});
                };
            });
            // $('.main').mouseout(function(){
            //  $('.next').css({'backgroundPosition':'-174px 6px'});
            // })
            
        })
           $('.next').click(function() {
                if (now==0) {
                    $('.next').css({'backgroundPosition':'-174px -216px'});
                };
                if (now==1) {
                    $('.next').css({'backgroundPosition':'-174px -290px'});
                };
                if (now==2) {
                    $('.next').css({'backgroundPosition':'-174px -364px'});
                };
                if (now==3) {
                    $('.next').css({'backgroundPosition':'-174px -68px'});
                };
                if (now==4) {
                    $('.next').css({'backgroundPosition':'-174px -142px'});
                };

                if (now==0) {
                    $('.prev').css({'backgroundPosition':'0px -68px'});
                };
                if (now==1) {
                    $('.prev').css({'backgroundPosition':'0px -142px'});
                };
                if (now==2) {
                    $('.prev').css({'backgroundPosition':'0px -216px'});
                };
                if (now==3) {
                    $('.prev').css({'backgroundPosition':'0px -290px'});
                };
                if (now==4) {
                    $('.prev').css({'backgroundPosition':'0px -364px'});
                };

            if (now < 4) {
              now++;
                tab();
                
            } else {
                now = 0;
                tab();
            }
        });
        $('.prev').click(function() {
            if (now==0) {
                    $('.prev').css({'backgroundPosition':'0px -290px'});
                };
                if (now==1) {
                    $('.prev').css({'backgroundPosition':'0px -364px'});
                };
                if (now==2) {
                    $('.prev').css({'backgroundPosition':'0px -68px'});
                };
                if (now==3) {
                    $('.prev').css({'backgroundPosition':'0px -142px'});
                };
                if (now==4) {
                    $('.prev').css({'backgroundPosition':'0px -216px'});
                };

                if (now==0) {
                    $('.next').css({'backgroundPosition':'-174px -68px'});
                };
                if (now==1) {
                    $('.next').css({'backgroundPosition':'-174px -142px'});
                };
                if (now==2) {
                    $('.next').css({'backgroundPosition':'-174px -216px'});
                };
                if (now==3) {
                    $('.next').css({'backgroundPosition':'-174px -290px'});
                };
                if (now==4) {
                    $('.next').css({'backgroundPosition':'-174px -364px'});
                };

            if (now > 0) {
              now--;
                tab();
            } else {
                now = 4;
                tab();
            }
        });
        function tab(){
            hehe.each(function(){
                hehe.removeClass();
            });
            // $('.time-center .timex:eq('+now+')').addClass('thistital');
            $('.time-center .timex span:eq('+now+')').addClass('thistital');
            startMove(oUlBig, 'left', -(now * aBigLi[0].offsetWidth));
        }
    }
    feng();

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


    var oUlBig3 =$('.main .main-y .ban2 .ban-center2 .ul');
    var aBigLi3 =$('.ban2 .ban-center2 .ul .li');
    var oDivSmall3 =$('.main .main-y .ban2 .ban-bottom');
    var aLiSmall3 = $('.ban2 .ban-bottom span');

    var now3 = 0;
    aLiSmall3.each(function(e){
     	$(this).click(function(){
     		now3=e;
	     	tab3();

    	});
    });


     function tab3(){
    	aLiSmall3.each(function(){
     		aLiSmall3.removeClass();
     	});
     	// $('.time-center .timex:eq('+now+')').addClass('thistital');
     	$('.ban2 .ban-bottom span:eq('+now3+')').addClass('thistital-2');
     	startMove(oUlBig3, 'left', -(now3 * aBigLi3[0].offsetWidth));
    }

    $('.ban-right2').click(function(){
    	if(now3<2){
			now3++;
			tab3();
    	}else{
    		now3=0;
    		tab3();
    	}
    });

    $('.ban-left2').click(function(){
    	if(now2>0){
			now3--;
			tab3();
    	}else{
    		now3=2;
    		tab3();
    	}
    });

    var timer1 = setInterval(function() {
        
        if (now3< 2) {
        	now3++;
            tab3();
        } else {
           now3 = 0;
           tab3();
        }
    }, 3000);

    $(".ban-center2").mouseout(function() {
        timer1 = setInterval(function() {
             if (now3< 2) {
		        	now3++;
		            tab3();
		        } else {
		           now3 = 0;
		           tab3();
		        }
		    }, 3000);
    })
    $(".ban-center2").mouseover(function() {
        clearInterval(timer1);
    });










    $('.ban2 .ban-center2 .li1 .d').hover(function(){
    	var i=$(this).index();
    	$('.ban2 .ban-center2 .li1 .d .c .c1').eq(i).slideUp('fast');
    },function(){
    	var i=$(this).index();
    	$('.ban2 .ban-center2 .li1 .d .c .c1').eq(i).slideDown('fast');
    })

    $('.ban2 .ban-center2 .li2 .d').hover(function(){
        var i=$(this).index();
        $('.ban2 .ban-center2 .li2 .d .c .c1').eq(i).slideUp('fast');
    },function(){
        var i=$(this).index();
        $('.ban2 .ban-center2 .li2 .d .c .c1').eq(i).slideDown('fast');
    })

    $('.ban2 .ban-center2 .li3 .d').hover(function(){
        var i=$(this).index();
        $('.ban2 .ban-center2 .li3 .d .c .c1').eq(i).slideUp('fast');
    },function(){
        var i=$(this).index();
        $('.ban2 .ban-center2 .li3 .d .c .c1').eq(i).slideDown('fast');
    })





    $('.qx dd').mouseover(function(){
    	var i=$(this).index();
    	$('.qx dd').removeClass();
    	$('.qx dd').eq(i).addClass('dd');
    	$('.qx dd .yc').hide();
    	$('.qx dd .yc').eq(i).show();
    });


    $('.jk .b1 ul li').mouseover(function(){
    	var i=$(this).index();
    	$('.jk .b1 ul li h3').removeClass();
    	$('.jk .b1 ul li h3').eq(i).addClass('hh');
    	$('.jk .b1 ul li .a').hide();
    	$('.jk .b1 ul li .a').eq(i).show();
    });

    $('.jk .b2 ul li').mouseover(function(){
    	var i=$(this).index();
    	$('.jk .b2 ul li h3').removeClass();
    	$('.jk .b2 ul li h3').eq(i).addClass('hh');
    	$('.jk .b2 ul li .a').hide();
    	$('.jk .b2 ul li .a').eq(i).show();
    });

    $('.jk .b3 ul li').mouseover(function(){
    	var i=$(this).index();
    	$('.jk .b3 ul li h3').removeClass();
    	$('.jk .b3 ul li h3').eq(i).addClass('hh');
    	$('.jk .b3 ul li .a').hide();
    	$('.jk .b3 ul li .a').eq(i).show();
    });

    $('.jk .b4 ul li').mouseover(function(){
    	var i=$(this).index();
    	$('.jk .b4 ul li h3').removeClass();
    	$('.jk .b4 ul li h3').eq(i).addClass('hh');
    	$('.jk .b4 ul li .a').hide();
    	$('.jk .b4 ul li .a').eq(i).show();
    });


    $('.foot .fixed').click(function(){
        $('html,body').animate({scrollTop:'0px'},500);
    });
});