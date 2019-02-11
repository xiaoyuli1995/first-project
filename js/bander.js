
		function tihuan(){
			$(".guanggao").css('height','0px');
		}

      function GetRTime(){
       var EndTime= new Date('2018/10/1 00:00:00');
       var NowTime = new Date();
       var t =EndTime.getTime() - NowTime.getTime();
       var h=0;
       var m=0;
       var s=0;
       if(t>=0){
         h=Math.floor(t/1000/60/60%24);
         m=Math.floor(t/1000/60%60);
         s=Math.floor(t/1000%60);
       }
 
       if(h>=10){
       	document.getElementById("t_h").innerHTML = h ;
       }else{
       	document.getElementById("t_h").innerHTML =("0"+h) ;
       }
       if(m>=10){
       	document.getElementById("t_m").innerHTML = m ;
       }else{
       	document.getElementById("t_m").innerHTML =("0"+m) ;
       }
       if(s>=10){
       document.getElementById("t_s").innerHTML = s ;
       }else{
       document.getElementById("t_s").innerHTML =("0"+s) ;
       }
     }
  	setInterval(GetRTime,1000);
  	
function banner(){
    var _index = 0;
    var clearTime = null;

    function banderPlusReduce(){
        $(".banderDug li").css('background','#cff').css('border','none');
        $(".banderDug").find("li").eq(_index).css('background','#E0AC0B').css('border','#ffffff solid 2px');
        $(".banderImg li").eq(_index).show().siblings().hide();
    }
    function auto(){
        clearTime = setInterval(function(){
          _index++;(_index>8)?_index=0:_index=_index;
          banderPlusReduce();
        },2500);
    }
    auto();
    $(".banderDug li").hover(function(){
        _index =$(this).index();
        banderPlusReduce();
    });
    
    /*banner-left*/
    $(".left_jian").click(function(){
      _index--;(_index<0)?_index=8:_index=_index;
      banderPlusReduce();
    });
    /*banner-right*/
    $(".right_jian").click(function(){
      _index++;(_index>8)?_index=0:_index=_index;
      banderPlusReduce();
    })

    $("#bander").mouseover(function(){
      clearInterval(clearTime);
    });
    $("#bander").mouseout(function(){
      auto();
    });
}
banner();
  $("#bander").mousedown(function(){return false;});

   var lunbo=0;
    function lunright(){
    	lunbo++;
    	if(lunbo>0){
    		$(".lunboleft").css('display','block');
    	}
    	if(lunbo==4){
    		lunbo=3;
    	}
   	 $(".linkA").css('right',(-lunbo*1000+'px'));
   }
    function lunleft(){
    	lunbo--;
    	if(lunbo==0){
    		$(".lunboleft").css('display','none');
    	}
    	if(lunbo==0){
    		lunbo=0;
    	}
    	$(".linkA").css('right',(lunbo*-1000+'px'));
    }
    $("linkA").mousedown(function(){return flase;})

/*排行banner*/
function paih(){
  var index = 0;
  $(".pai_img_tow a").hover(function(){
    index = $(this).index();
    $(".pai_img_tow a").removeClass("paiBtm");
    $(".pai_img_tow").find("a").eq(index).addClass("paiBtm");
    $(".pai-bnr>ul>li").eq(index).show().siblings().hide();
  })
}
paih();


    
var hi=$(window).height();
		var box=$(document).height();
		$(window).scroll(function(){
			if($(window).scrollTop()>400){
				$(".buttone").show();
			}else{
				$(".buttone").hide();
			}
		})
		$(".buttone").click(function(){
		    $('body,html').animate({scrollTop:0},500)
		
		})
