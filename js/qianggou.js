var index;
$(".jicon a").click(function(){
	index = $(this).index();
	$(this).addClass("teshu").siblings().removeClass("teshu");
	$(".qg-list>div").eq(index).css("display","block").siblings().css("display","none");
})