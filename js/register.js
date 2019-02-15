$("body").mousedown(function(){return false;})
// background
var a = 1;
var index = 0;
setInterval(function(){
	(a>6)?a=1:a=a;
	for (var i = 1; i < 6; i++) {
		$(".b-icon"+i).css("opacity","0");
	}
	$(".b-icon"+a).css("opacity","1");
	a++;
},2000)

// userTitle and ipnutFouse
$(".regi ul li").click(function(){
	index = $(this).index();
	$(".regi ul li").eq(index).find("span").addClass("span-title");
	$(".regi ul li").eq(index).find("input").focus();
	$(".regular"+index).css("display","block")
})


/*验证码*/
function vecli(codeZ){
	var code_arr =[];
	for (var i = 0; i < 4; i++) {
		var ranNum = Math.ceil(Math.random()*74)+48;
		(57<ranNum&&ranNum<65)?ranNum -= 9:(90<ranNum&&ranNum<97)?ranNum -= 9:ranNum=ranNum;
		var transNum = String.fromCharCode(ranNum);
		code_arr.push(transNum);
	}
	codeZ = code_arr.join("");
	return codeZ;
}

/*正则验证*/
	var regExp = /^\w{8,10}$/;
	var UserName;
	var Pwd;
	var Cpwd;
	$(".user input").bind('input propertychange',function (ev){
		UserName = ev.target.value;
/*(regExp.test(UserName))?$(".regular p").html("用户名合法，可用"):$(".regular").css("display","block");*/
        if(regExp.test(UserName)){
        	$(".userNull").css("width","45px");
        	$(".regular0 p").css({"margin-top":"15px","color":"#0f0","font-size":"18px"}).addClass("iconfont icon-dui").html("");
        }else{
        	$(".regular0").css("display","block");
        	$(".userNull").css("width","180px");
        	$(".regular0 p").html("8-10位字符,可由英文、数字、或符号“_”组成")
        	.removeClass("iconfont icon-dui").css({"margin-top":"5px","color":"#ff3c3c","font-size":"14px"});
        }
       
    });
	$(".pwd input").bind('input propertychange',function (ev){
        Pwd = ev.target.value;
        if(regExp.test(Pwd)){
        	$(".pwdNull").css("width","45px");
        	$(".regular1 p").css({"margin-top":"15px","color":"#0f0","font-size":"18px"}).addClass("iconfont icon-dui").html("");
        }else{
        	$(".regular1").css("display","block");
        	$(".pwdNull").css("width","180px");
        	$(".regular1 p").html("8-10位字符,可由英文、数字、或符号“_”组成")
        	.removeClass("iconfont icon-dui").css({"margin-top":"5px","color":"#ff3c3c","font-size":"14px"});
        }
    });
    $(".con-pwd input").bind('input propertychange',function (ev){
        Cpwd = ev.target.value;
        if(Cpwd==Pwd){
        	$(".cPwdNull").css("width","45px");
        	$(".regular2 p").css({"margin-top":"15px","color":"#0f0","font-size":"18px"}).addClass("iconfont icon-dui").html("");
        }else{
        	$(".regular2").css("display","block");
        	$(".cPwdNull").css("width","180px");
        	$(".regular2 p").html("请再次输入密码")
        	.removeClass("iconfont icon-dui").css({"margin-top":"5px","color":"#ff3c3c","font-size":"14px"});
        }
    });
    /*
	while(true){
	  var input=prompt("邮箱");
	  if(regExp.test(input)){
	  alert("成功");
	  break;
	  
	  }else{
		alert("失败");
	  }
	
	}*/
