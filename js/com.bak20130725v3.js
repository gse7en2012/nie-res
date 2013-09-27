nie.config.copyRight.setWhite();
$(function() {
	var num = Math.random();
	var slideUL = $(".slideBox ul");
	 onLi =$(".NavOn li");
	var current;
	var Nav;
	var num;
	var au;
	var position;
	var out1 = $(onLi[0]).find("a");
	var out2 = $(onLi[1]).find("a");
	var out3 = $(onLi[2]).find("a");
	var out4 = $(onLi[3]).find("a");
	var out5 = $(onLi[4]).find("a");
	//alert(onLi[3].className)
	var speed1 = 500;
	var speed2 = 250;
	/* 打开随机显示大图 */
	if(num>0.8){
		$(onLi[4]).addClass("current");
	}else if(num>0.6){
		$(onLi[3]).addClass("current");
	}else if(num>0.4){
		$(onLi[2]).addClass("current");
	}else if(num>0.2){
		$(onLi[1]).addClass("current");
	}else{
		$(onLi[0]).addClass("current");
	}
	for(var i=0,_tmp = $("ul.NavOn"); i<5; i++){
		_tmp.find("span").text(i+1);
	}
	var onA = $(".current a");
	onA.get(1).css("marginTop"-79);
	onLi.get(1).css("left",149);
	onLi.get(2).css("left",298);
	onLi.get(3).css("left",447);
	onLi.get(2).css("left",596);
	position = $(".current").css("left");	
	if(position == '0px'){
		slideUL.css("left","0px");	
	}else if(position == '149px'){
		slideUL.css("left","-745px");		
	}else if(position == '298px'){
		slideUL.css("left","-1490px");		
	}else if(position == '447px'){
		slideUL.css("left","-2235px");		
	}else if(position == '596px'){
		slideUL.css("left","-2980px");		
	}
	
	current = $(".newsList").find("li");
	current[5].style.background = "#fff";
	
	
	$(".NavOn li").mouseover(function(){
		 Nav = $(this).find("a");
		 $(Nav[1]).stop(true,true).animate({marginTop:-79},speed2);  
	});
	$(".NavOn li").mouseleave(function(){
		 current = $(".current").find("a");
		 Nav = $(this).find("a");
		 if(current[1] != Nav[1])$(Nav[1]).animate({marginTop:0},speed2);
	});	
	$(".NavOn li").click(function(){
		$(this).addClass("current");
		$(this).siblings().removeClass("current");
		$(this).siblings().find("a").animate({marginTop:0},speed2);
		position = $(".current").css("left");
		switch(position)
		{
		case "0px":	
		  $(out1[1]).animate({marginTop:-79},speed2);
		  slideUL.animate({left:0},speed2);
		  break;
		case "149px":
		  $(out2[1]).animate({marginTop:-79},speed2);
		  slideUL.animate({left:-745},speed2);
		  break;
		 case "298px":
		  $(out3[1]).animate({marginTop:-79},speed2);
		  slideUL.animate({left:-1490},speed2);
		  break;
		 case "447px":
		  $(out4[1]).animate({marginTop:-79},speed2);
		  slideUL.animate({left:-2235},speed2);
		  break;
		 case "596px":
		  $(out5[1]).animate({marginTop:-79},speed2);
		  slideUL.animate({left:-2980},speed2);
		  break;
		default:break;
		}		
	});

	$(".next").click( next);	
	function next(){
		position = $(".current").css("left");
		if(position != "596px"){
		switch(position)
		{
		case "0px":
		  $(out1[1]).animate({marginTop:'+=' + 79},speed2);
		  $(out2[1]).animate({marginTop:'-=' + 79},speed2);
		  $(onLi[0]).removeClass("current");
		  $(onLi[1]).addClass("current");
		  slideUL.stop(true,true).animate({left:-745},speed2);
		  break;
		case "149px":
		  $(out2[1]).animate({marginTop:'+=' + 79},speed2);
		  $(out3[1]).animate({marginTop:'-=' + 79},speed2);
		  $(onLi[1]).removeClass("current");
		  $(onLi[2]).addClass("current");
		  slideUL.stop(true,true).animate({left:-1490},speed2);
		  break;
		 case "298px":
		  $(out3[1]).animate({marginTop:'+=' + 79},speed2);
		  $(out4[1]).animate({marginTop:'-=' + 79},speed2);
		  $(onLi[2]).removeClass("current");
		  $(onLi[3]).addClass("current");
		  slideUL.stop(true,true).animate({left:-2235},speed2);
		  break;
		 case "447px":
		  $(out4[1]).animate({marginTop:'+=' + 79},speed2);
		  $(out5[1]).animate({marginTop:'-=' + 79},speed2);
		  $(onLi[3]).removeClass("current");
		  $(onLi[4]).addClass("current");
		  slideUL.stop(true,true).animate({left:-2980},speed2);
		  break;
		default:break;
		}
		}else{
		  $(out5[1]).animate({marginTop:'+=' + 79},speed2);
		  $(out1[1]).animate({marginTop:'-=' + 79},speed2);
		  $(onLi[4]).removeClass("current");
		  $(onLi[0]).addClass("current");
		  slideUL.stop(true,true).animate({left:0},speed2);
			}
	}
	$(".prev").click(function prev(){
		position = $(".current").css("left");
		if(position != "0px"){
		switch(position)
		{
		case "149px":
		  $(out2[1]).animate({marginTop:'+=' + 79},speed2);
		  $(out1[1]).animate({marginTop:'-=' + 79},speed2);
		  $(onLi[1]).removeClass("current");
		  $(onLi[0]).addClass("current");
		  slideUL.stop(true,true).animate({left:0},speed2);
		  break;
		 case "298px":
		  $(out3[1]).animate({marginTop:'+=' + 79},speed2);
		  $(out2[1]).animate({marginTop:'-=' + 79},speed2);
		  $(onLi[2]).removeClass("current");
		  $(onLi[1]).addClass("current");
		  slideUL.stop(true,true).animate({left:-745},speed2);
		  break;
		 case "447px":
		  $(out4[1]).animate({marginTop:'+=' + 79},speed2);
		  $(out3[1]).animate({marginTop:'-=' + 79},speed2);
		  $(onLi[3]).removeClass("current");
		  $(onLi[2]).addClass("current");
		  slideUL.stop(true,true).animate({left:-1490},speed2);
		  break;
		 case "596px":
		  $(out5[1]).animate({marginTop:'+=' + 79},speed2);
		  $(out4[1]).animate({marginTop:'-=' + 79},speed2);
		  $(onLi[4]).removeClass("current");
		  $(onLi[3]).addClass("current");
		  slideUL.stop(true,true).animate({left:-2235},speed2);
		  break;
		default:break;
		}
		}else{
		  $(out1[1]).animate({marginTop:'+=' + 79},speed2);
		  $(out5[1]).animate({marginTop:'-=' + 79},speed2);
		  $(onLi[0]).removeClass("current");
		  $(onLi[4]).addClass("current");
		  slideUL.stop(true,true).animate({left:-2980},speed2);
			}
	});
	$(".picBox").mouseover(function(){
		  clearTimeout(au);						
	});
	$(".picBox").mouseout(function(){
		  au = setTimeout(auto,3000);					
	});
	function auto(){
		next();
		au = setTimeout(auto,3000);
		}
		
	au = setTimeout(auto,3000);
});