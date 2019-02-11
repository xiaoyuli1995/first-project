var index=0;
var time = null;
$(".dug ul li").hover(function(){
	index = $(this).index();
	$(this).addClass("jkteshu").siblings().removeClass("jkteshu");
	$(".jkbImg li").eq(index).fadeIn(300).siblings().fadeOut(300);
	switch(index){
		case 0:
			$(".jkbanner").css("background","#ecdad6");
			break;
		case 1:
			$(".jkbanner").css("background","#f2ddd5");
			break;
		case 2:
			$(".jkbanner").css("background","#dbdfea");
			break;
		case 3:
			$(".jkbanner").css("background","#d8dfea");
			break;
		default:
			$(".jkbanner").css("background","#f2ddd5");
	}
})
function move(){
	time = setInterval(function(){
		index++;
		index>4?index=0:index=index;
		$(".dug ul li").eq(index).addClass("jkteshu").siblings().removeClass("jkteshu");
		$(".jkbImg li").eq(index).fadeIn(300).siblings().fadeOut(300);
		switch(index){
		case 0:
			$(".jkbanner").css("background","#ecdad6");
			break;
		case 1:
			$(".jkbanner").css("background","#f2ddd5");
			break;
		case 2:
			$(".jkbanner").css("background","#dbdfea");
			break;
		case 3:
			$(".jkbanner").css("background","#d8dfea");
			break;
		default:
			$(".jkbanner").css("background","#f2ddd5");
	}
	},3000)
}
move();
$(".jkbanner").hover(function(){
	clearInterval(time);
},function(){
	move();
})