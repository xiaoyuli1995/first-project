/*母婴玩具*/
		function db_banner(i){
			var index=0;
			var time = null;
			function bb(i){
				$(".rdg"+i+" li").hover(function(){
					clearInterval(time);
					index = $(this).index();
					$(this).addClass("rxdug").siblings().removeClass("rxdug");
					$(this).prevAll().find("li").eq(index).fadeIn(400).siblings().fadeOut(400);
				},function(){
					move();
				})
				function move(){
					time = setInterval(function(){
						index++;
						(index>2)?index=0:index=index;
						$(".rdg"+i).find("li").eq(index).addClass("rxdug").siblings().removeClass("rxdug");
						$(".bnr"+i+" li").eq(index).fadeIn(200).siblings().fadeOut(200);
						
					},2500+i*200)
				}
				move();
			}bb(i);
			
		}
		for (var i = 0; i < 2; i++) {
			db_banner(i);
		}

/*家居生活*/
	function onebanner(){
		var index = 0;
		var ladderTime = null;
		function prepar(j){
			oneTime = setInterval(function(){
				(index>2)?index=0:index=index;
				$(".raldown"+j+" ul li").eq(index).fadeIn(200).siblings().fadeOut(200);
				index++;
			},2000)
		}
		for (var j = 0; j < 2; j++) {
			prepar(j);
		}
		/*little_banner*/
		function littBanner(h,jtLeft,jtRight,ralbnrQuer){
				var r = ".ralbanner"+h+" ul li"
				var zIndex = 0;
				function ladder(){
					(zIndex>2)?zIndex=0:zIndex=zIndex;
					if(zIndex==0){
						$(r).removeClass("rabnr01 rabnr02");
						$(r).eq(0).addClass("rabnr02");
						$(r).eq(2).addClass("rabnr01");
						$(".ral-innerP"+h).html("1/3")
					}else if(zIndex==1){
						$(r).removeClass("rabnr01 rabnr02");
						$(r).eq(0).addClass("rabnr01");
						$(r).eq(1).addClass("rabnr02");
						$(".ral-innerP"+h).html("2/3")
					}else if(zIndex==2){
						$(r).removeClass("rabnr01 rabnr02");
						$(r).eq(1).addClass("rabnr01");
						$(r).eq(2).addClass("rabnr02");
						$(".ral-innerP"+h).html("3/3")
					}
					zIndex++;
				};
				ladderTime = setInterval(ladder,(2000+h*200));
			/*left-btn*/
			$(".ral-sLeft"+h).click(function(){
				ladder();
			})
			/*right-btn*/
			$(".ral-sRight"+h).click(function(){
				ladder();
			})

		}

		for (var h = 0; h < 3; h++) {
			littBanner(h);
		}
	}
	onebanner();

/*shopping*/
	function shoped(){
		$(".shop-nav ul li").hover(function(){
			$(this).find("p").stop().animate({left:"-58px"},500);
		},function(){
			$(this).find("p").stop().animate({left:"0"},500);
		})
		var shop_tf = true;
		$(".shop-font").click(function(){
			if(shop_tf==true){	
				$(".body-shopNav").css("width","385px");
				$(".shop-font").addClass("shop-bont");
				$(".shop-list").css("width","350px");
				shop_tf = false;
			}else{
				$(".body-shopNav").css("width","35px");
				$(".shop-font").removeClass("shop-bont");
				$(".shop-list").css("width","0px");
				shop_tf = true;
			}
		})
	}
	shoped();

/*我的专属活动*/
	function myActivity(){
		$(".cpzs ul").mousedown(function(){return false;})
		var jlq = 0;
		$(".cp-zjt").click(function(){
			jlq++;
			(jlq>2)?jlq=2:jlq=jlq;
			$(".cpzz ul").css("margin-left",(-jlq*1118)+"px");
		})
		$(".cp-yjt").click(function(){
			jlq--;
			(jlq<0)?jlq=0:jlq=jlq;
			$(".cpzz ul").css("margin-left",(-jlq*1118)+"px")
			
		})
	}
	myActivity();

/*fixed-nav-html */

	var click_dex = 0;
	var click_sum = 0;
	var propor = 0;
	$(window).scroll(function(event){
	 var winPos = $(window).scrollTop();
	 (winPos>1320)?$("#position-nav").css("display","block"):$("#position-nav").css("display","none");
	 (winPos>650)?$(".fixedTop").css("height","60px"):$(".fixedTop").css("height","0px");
	 if(winPos>1400){
	 	propor = parseInt((winPos-1400)/400);
	 	(winPos>4600)?propor=8:propor=propor;
		$("#position-nav ul").find("li").eq(propor).addClass("cur").siblings().removeClass("cur");

	 }
	});
	$("#position-nav ul li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		click_dex = $(this).index();
		click_sum = click_dex*400+1400;
		$(document).scrollTop(click_sum);
		})

/*田浩-banner-left-icon*/
var posia_bg = ["#645144","#f78b4b","#0bcd96","#ff87d0","#fe8282","#925740","#5c98f1","#6d62da",
					"#ff4040","#5c98f1","#ff87d0","#f78b4b"]
	$(".banner_left a").hover(function(){
		banner_dex = $(this).index();
		$(".banner_left").find("a").eq(banner_dex).find("span").css("color",posia_bg[banner_dex]);
	},function(){
		ban_dexLoad();
	})
	function ban_dexLoad(){
		$(".banner_left a span").css("color","#fff");
	}
/*end*/