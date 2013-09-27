$(function() {	
	nie.use(["nie.art.disclaimer","nie.util.share"],function(){
		nie.art.disclaimer.appendTo($(".artDisclaimer"),2);
		var content=$("#NIE-art .artText");
		nie.util.share({
				type:4,
				imgs:content.find("img")
			});
		nie.util.share({
				type:5,
				txt:content
			});
	});
	
	$("#NIE-art table th").each(function(){
			if($(this).index()%2 == 0)$(this).addClass("odd");	
	});
	$("#NIE-art table td").each(function(){
			if($(this).index()%2 == 0)$(this).addClass("odd");	
	});
	$("#honor .honorBlock").each(function(){
			if($(this).index()%2 == 0)$(this).addClass("odd");	
	});
	$("#honor .honorBlock .honorMain").each(function(){
			$(this).mouseover(function(){			
				$(this).parent().siblings().find(".BgImg").css("background-position","0px -111px")	;
			});
			$(this).mouseout(function(){			
				$(this).parent().siblings().find(".BgImg").css("background-position","0px -73px")	;
			});
	});
	/*
	var height;
	$("#honor .honorBlock").each(function(){
		height = Number($(this).find(".honorMain").css("height")) + 100;								  
		$(this).css("height",height);
	});
	*/
});