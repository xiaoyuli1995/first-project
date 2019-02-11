var index = 0;
$(".tnav a").hover(function(){
	index = $(this).index();
	$(this).addClass("tuanteshu").siblings().removeClass("tuanteshu");
	$(".coudanxia>div").eq(index).fadeIn(300).siblings().fadeOut(300);
})

var zdex = 0;
$(".dbdug a").hover(function(){
	zdex = $(this).index();
	$(this).addClass("dbred").siblings().removeClass("dbred");
	$(".tbcenter>ul>li").eq(zdex).fadeIn(300).siblings().fadeOut(300);
	zdex==0?$(".tbanner").css("background","#880201"):$(".tbanner").css("background","#dad9d7");
})