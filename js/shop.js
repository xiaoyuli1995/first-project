
var arrindex=[];
var tandf = true;
$(function(){
	function addhtml(deg){
		var Obtain= $(deg).parent().parent().prevAll().html();
		var money= $(deg).parent().text();
			money = money.replace("不感兴趣加入购物车","")
			money = money.replace("￥","")
		var addText = "<div class='shopFeng'>"+Obtain+"<u class='danjia'>单价：￥</u><span>"+money+
				"</span><div class='shopFeng03'>"+
					"<a class='del' href='javascript:;'></a>"+
					"<input type='number' class='spnum' value='1'></input>"+
					"<a class='add' href='javascript:;'>+</a>"+
				"</div>"+
				"<div class='shopFengdl'>小计：￥</div>"+
				"<div class='shopFeng04'>"+money+"</div>"+
			  "</div>"
		$(".shop-list").append(addText);
	}
	function suan(){
		var totla = $('.shopFeng04');
		var price = 0;
		for(var i=0;i<totla.length;i++){
			price = price+parseFloat(totla.eq(i).text());
		}
		var totlas = $('input[type="submit"]').val(price);
		}
	suan();
	$(".Fengfu2").click(function(event){
		$(".shop-list>p").css("display","none");
		$(".shop-list>i a").css("background","#f33");
		var isindex = $(this).parent().parent().parent().index();
		var thisdex = arrindex.indexOf(isindex);
		var isImg = $(this).parent().parent().prevAll().find('img').attr('src');
		var deg = $(this);
		addProduct(isImg)
		if (tandf==true){
			arrindex.push(isindex);
			$(".shopNum").css("display","block").text(arrindex.length);
			$(".shop-font").css("height","120px");
			addhtml(deg);
			tandf=false;
			return suan();
		}else{
			if(thisdex!=-1){
				var zhidaole = $(".shop-list>div").eq(thisdex).find(".spnum").val();
				zhidaole = Number(zhidaole)+1;
				var unPrice = Number($(".shop-list>div").eq(thisdex).find("span").text());
				$(".shop-list>div").eq(thisdex).find(".spnum").val(zhidaole);
				$(".shop-list>div").eq(thisdex).find(".shopFeng04").text(parseInt(zhidaole*unPrice));
				$(".shop-list>div").eq(thisdex).find(".del").text("-").css("cursor","pointer");
				return suan();
			}else{
				arrindex.push(isindex);
				$(".shopNum").css("display","block").text(arrindex.length);
				$(".shop-font").css("height","120px");
				addhtml(deg);
				return suan();
			}
		}
	})
	$(".shop-list").on('click','.del',function(){
		var input = $(this).siblings('input');
		var price = $(this).parent().parent().find('span').text();
		if(input.val()<2){
			input.val(1);
			$(this).css("cursor","not-allowed").text("");
		}else{
			input.val(~~input.val() - 1);
		}
		$(this).parent().parent().find('.shopFeng04').text(parseInt(input.val())*parseInt(price));
		return suan();
	})
	$(".shop-list").on('click','.add',function(){
		$(this).parent().find(".del").css("cursor","pointer").text("-");
		var price = parseInt($(this).parent().parent().find('span').text());
		var input = $(this).siblings('input');
		input.val(~~input.val() + 1);
		$(this).parent().parent().find('.shopFeng04').text(parseInt(input.val())*parseInt(price));
		return suan();
	})
	$(".shop-list").on('keyup','.spnum',function(){
		var price = $(this).parent().parent().find('span').text();
		$(this).val(~~$(this).val());
		$(this).parent().parent().find('.shopFeng04').text(parseInt($(this).val())*parseInt(price));
		return suan();
	})
})


function addProduct(isImg) {
	var offset = $('.shop-font').offset(),flyer = $('<img class="u-flyer" src='+isImg+'>');
	flyer.fly({
		start: {
			left:event.clientX-200,
			top: event.clientY-200
		},
		end: {
			left: offset.left,
			top:350,
			width: 0,
			height: 0
		}
	});
}




$(".box").mousemove(function(ev){
 		var offset = $('.box').offset();
 		$(".left").css("width",(ev.clientX-offset.left+145)+"px");
 	})


 