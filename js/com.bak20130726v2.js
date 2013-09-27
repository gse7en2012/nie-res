nie.config.copyRight.setWhite();
$(function() {	
	var slidBox = $("#slide .slideBox ul");
	var num = $("#slide .NavOn li").index();
	var ran = Math.floor(Math.random() * num);
	var eq = $("#slide .NavOn li").eq(ran * num);
	$("#slide .NavOn li").eq(ran).addClass("current");
	$("#slide .NavOn li").eq(ran).find(".out").css("marginTop",-79);
	slidBox.css("left",-745*ran);
	for(var i=0;i<num+1;i++)$("ul .out .num").eq(i).text(i+1);
	var speed1 = 500;
	var speed2 = 250;
	$("#slide .NavOn li").each(function(index){
		$(this).mouseover(function(){
			$(this).find(".out").stop(true,true).animate({marginTop:-79},speed2);  
		})	
		$(this).mouseleave(function(){
			if(this.className != 'current')
			$(this).find(".out").stop(true,true).animate({marginTop:0},speed2);  
		})
		$(this).click(function(){
			$(this).find(".out").stop(true,true).animate({marginTop:-79},speed2);  
			slidBox.stop(true,true).animate({left:-745*index},speed1);
			$(this).addClass("current");
			$(this).siblings().removeClass("current");
			$(this).siblings().find(".out").stop(true,true).animate({marginTop:0},speed2);  
		})
	})
	$("#prev").click(function(){
		var a = $("#slide .NavOn .current").index();
		if(a == 0)a = num;
		else a = a-1;
		slidBox.stop(true,true).animate({left:-745*a},speed1);
		$("#slide .NavOn li").each(function(){	
			if($(this).index() == a){
				$(this).addClass("current"); 
				$(this).find(".out").stop(true,true).animate({marginTop:-79},speed2);	
			}else{
				$(this).removeClass("current");
				$(this).find(".out").stop(true,true).animate({marginTop:0},speed2); 
			}
		});	
	});
	$("#next").click(function(){
		var a = $("#slide .NavOn .current").index();
		if(a == num)a = 0;
		else a = a+1;
		slidBox.stop(true,true).animate({left:-745*a},speed1);
		$("#slide .NavOn li").each(function(){	
			if($(this).index() == a){
				$(this).addClass("current"); 
				$(this).find(".out").stop(true,true).animate({marginTop:-79},speed2);	
			}else{
				$(this).removeClass("current");
				$(this).find(".out").stop(true,true).animate({marginTop:0},speed2); 
			}
		});
	});
});