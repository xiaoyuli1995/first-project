var name = localStorage.getItem("name");
(name=="null")?name='牛奶':name=name;
function data(){$(".cplist ul").html("");
	for (var i = 1; i < 15; i++) {
		var hash = dex[name]["li"+i];
		$(".brand ul li").eq(i-1).find("img").attr("src",hash.pptit);
		var html = `<li>
						<a href="#" class="cpImg"><img src=${hash.img}></a>
						<p>${hash.Price}</p>
						<a href="#" class="title">${hash.title}</a>
						<a href="#" class="cpBtn">查看详情</a>
					</li>`
		$(".cplist ul").append(html);
	}
}
data();
$(".posi-btn").click(function(){
	localStorage.removeItem("name");
	var ssval = $("#ssval").val();
	localStorage.setItem("name",ssval);
	name = localStorage.getItem("name");
	data();
})

/*sanjiliandong*/
$(".city1 dl dd").click(function(){
	$(".loadPush ul li").eq(0).html($(this).html()).removeClass("eqthis").siblings().addClass("eqthis");
	$(".city1 dl dd").css("background","#fff");
	$(this).css("background","#ff966e");
	$(".city2 ul").html("");
	var Index = $(this).parent().index();
	var parIndex = $(this).index()-1;
	for (var k = 0; k < two_city[Index][parIndex].length; k++){
		$(".city2 ul").append("<li>"+two_city[Index][parIndex][k]+"</li>")
	}
	$(".city1").css("display","none");
	$(".city2").css("display","block");
	$(".city2 ul li").click(function(){
		var urban  = $(".city1 dl").eq(Index).find("dd").eq(parIndex).html();
		$(this).siblings().css("background","#fff");
		$(this).css("background","#ff966e");
		$(".menua").css({"font-size":"12px","color":"#333"});
		$(".menua span").html(urban+$(this).html());
		$(".menuCtiy").css("display","none");
		$(".loadPush ul li").eq(1).html($(this).html());
	})
})
$(".loadPush ul li").eq(0).click(function(){
	$(".city1").css("display","block");
	$(".city2").css("display","none");
	$(this).addClass("eqthis").siblings().removeClass("eqthis");
});
$(".loadPush ul li").eq(1).click(function(){
	$(".city1").css("display","none");
	$(".city2").css("display","block");
	$(this).addClass("eqthis").siblings().removeClass("eqthis");
});
$(".menua").hover(function(){
	$(".menuCtiy").css("display","block");
},function(){
	$(".menuCtiy").css("display","none");
})
