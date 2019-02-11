var left=document.getElementById("left");
var lil=left.getElementsByTagName("li");
var right=document.getElementById("right");
var rli=right.getElementsByTagName("li");
var see=document.getElementById("see");
var showlist=document.getElementById("showlist");
var lis=showlist.getElementsByTagName("li");    
    
    for(var i=0;i<lis.length;i++){
    	lis[i].index=i;	
    	lis[i].onmouseenter=function(){
    		for(x=0;x<lis.length;x++){
    			lis[x].setAttribute("class","");
    			lil[x].style.display="none"
    			rli[x].style.display="none";
    		}    
    	        this.setAttribute("class","active"); 
    	        lil[this.index].style.display="block";
    	        rli[this.index].style.display="block";
    	}
    }
    	left.onmousemove=function(event){
    	var event=event||window.event;
    	var leftX=event.pageX;
    	var leftY=event.pageY;
    	var imgX=leftX-left.offsetLeft-see.offsetWidth/2;
    	var imgY=leftY-left.offsetTop-see.offsetHeight/2;
    	if(imgX>left.offsetWidth-see.offsetWidth){
    		imgX=left.offsetWidth-see.offsetWidth;
    	}else if(imgX<0){
    		imgX=0;
    	}
    	if(imgY>=left.offsetHeight-see.offsetHeight){
    		imgY=left.offsetHeight-see.offsetHeight;
    	}else if(imgY<=0){
    		imgY=0;
    	}
    	see.style.left=imgX+"px";
    	see.style.top=imgY+"px";
    	 for(var f=0;f<lil.length-1;f++){
    	 	rli[f].style.backgroundPositionX=(-imgX*0.65)+"px";
            rli[f].style.backgroundPositionY=(-imgY*0.65)+"px";
    	 }
        
       }
    	left.onmouseover=function(){
    	right.style.display="block";
    	see.style.display="block";
       }
        left.onmouseout=function(){
    	right.style.display="none";
    	see.style.display="none";
       }
            
var jia=document.getElementById("jia");
var jian=document.getElementById("jian");
var sss=document.getElementById("sss");

   jia.innerHTML="^";
   jian.innerHTML="^";
   function Mathh(){
   	  var theMath=1;
   	  sss.innerHTML=theMath;
   	  jia.onclick=function(){
   	    theMath++;
   	    sss.innerHTML=theMath;
   }
   	  jian.onclick=function(){
   	  	theMath--;
   	  	(theMath<=1)?theMath=1:theMath=theMath;
   	    sss.innerHTML=theMath;
   	  }
     
   }
   Mathh();
   
	 function xuan(){
		var r=0;
    	$(".toper li").mouseenter(function(){
    		r=$(this).index();
    		$(".toper li").eq(r).css("background","red");
    		$(".bottomer li").eq(r).css("display","block").siblings().css("display","none");
    	}).siblings().css("background","white");
    	
    	$(".toper li").mouseleave(function(){
    		$(".toper li").css("background","white");
    	});
    	
    }
	 
     xuan();
    
$(function(){
	
	var city=["北京","上海","广州"];
	var qu=[["朝阳区","通州区","海淀区","丰台区","大兴区","西城区","房山区","门头沟区","平谷区","昌平区","怀柔区","顺义区","石景山区","东城区","延庆区","密云县"],
	["松江区","黄浦区","浦东新区","长宁区","杨浦区","闸北区","徐汇区","普陀区","青浦区","嘉定区","金山区","奉贤区","宝山区","崇明区","虹口区","静安区","闵行区"],
	["白云区","从化区","黄埔区","花都区","南沙区","嘉湾区","越秀区","天河区","海珠区","番禺区","增城区"]];
	
	$(".sele").click(function(){
		$(".sele>ul").css("display","block");
	}).mouseleave(function(){
		$(".sele>ul").css("display","none");
	})
	
	/*$(".sele").mouseenter(function(){
		$(".sele>ul>li>ul").append(<li>);
	})*/
	for(var i=0;i<city.length;i++){
		$(".sele>ul>li").eq(i).find("span").append(city[i]);
		console.log(city[i]);
			$(".sele>ul>li").eq(i).find("ul").eq(i).find("li").eq(i).append(qu[i]);
	}
})
