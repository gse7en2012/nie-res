nie.config.copyRight.setWhite();
var autoScroll;
/*
$(function() {
    function scroll(){
        var slidBox = $("#slide .slideBox ul");
        var slidLI = $("#slide .NavOn li");
        var num = $("#slide .NavOn li").index();
        var ran = Math.floor(Math.random() * num);
        var slidBoxWidth=$('.slideBox').width();
        var eq = slidLI.eq(ran * num);
        $('.slideBox ul').width(slidBoxWidth*slidLI.length);
       // alert(slidLI.width()*slidLI.length)
        slidLI.eq(ran).addClass("current");
        slidLI.eq(ran).find(".out").css("marginTop",-80);
        slidBox.css("left",-slidBoxWidth*ran);
        for(var i=0;i<num+1;i++)$("ul .out .num").eq(i).text(i+1);
        var speed1 = 500;
        var speed2 = 250;
        var au;
        $(slidLI).each(function(index){
            $(this).mouseover(function(){
                $(this).find(".out").stop(true,true).animate({marginTop:-80},speed2);
            });
            $(this).mouseleave(function(){
                if(this.className != 'current')
                    $(this).find(".out").stop(true,true).animate({marginTop:0},speed2);
            });
            $(this).click(function(){
                $(this).find(".out").stop(true,true).animate({marginTop:-80},speed2);
                slidBox.stop(true,true).animate({left:-slidBoxWidth*index},speed1);
                $(this).addClass("current");
                $(this).siblings().removeClass("current");
                $(this).siblings().find(".out").stop(true,true).animate({marginTop:0},speed2);
            });
        });
        $("#prev").click(function(){
            var a = $("#slide .NavOn .current").index();
            if(a == 0)a = num;
            else a = a-1;
            slidBox.stop(true,true).animate({left:-slidBoxWidth*a},speed1);
            $(slidLI).each(function(){
                if($(this).index() == a){
                    $(this).addClass("current");
                    $(this).find(".out").stop(true,true).animate({marginTop:-80},speed2);
                }else{
                    $(this).removeClass("current");
                    $(this).find(".out").stop(true,true).animate({marginTop:0},speed2);
                }
            });
        });
        $("#next").click(next);
        function next(){
            var a = $("#slide .NavOn .current").index();
            if(a == num)a = 0;
            else a = a+1;
            slidBox.stop(true,true).animate({left:-slidBoxWidth*a},speed1);
            $(slidLI).each(function(){
                if($(this).index() == a){
                    $(this).addClass("current");
                    $(this).find(".out").stop(true,true).animate({marginTop:-80},speed2);
                }else{
                    $(this).removeClass("current");
                    $(this).find(".out").stop(true,true).animate({marginTop:0},speed2);
                }
            });
        }
        $(".picBox").mouseover(function(){
            clearTimeout(au);
            $("#next").css("display","block");
            $("#prev").css("display","block");
        });
        $(".picBox").mouseout(function(){
            au = setTimeout(auto,3000);
            $("#next").css("display","none");
            $("#prev").css("display","none");
        });
        function auto(){
            next();
            au = setTimeout(auto,3000);
        }
        au = setTimeout(auto,3000);
        return au;
    }
    autoScroll=scroll();
    $(window).resize(function(){
        console.log(clearTimeout(autoScroll));
        autoScroll=scroll();
    })


	
});  */

var nieCarousel=(function($){
    var defaultOptions={
        children:'.slideBox',
        prevBtn:'.slideNext',
        nextBtn:'.slidePrev',
        navList:'.slideNav a',
        autoPlay:true
    }
    var current=0;
    var nieCarousel=function(box,options){

        this.options=$.extend({},defaultOptions,options);
        this._$children=$(this.options.children);
        this._$nav=$(this.options.navList);
        this._num=this._$children.length;
        this._current=(this._num-1)%this._num;
        console.log(this._num);
        console.log(this);
        this.init();
    }
    nieCarousel.prototype.initNext=function(){
        var self=this;
        var num=self._$children.length;
        console.log(this,num)
        var $ele=$(self.options.nextBtn);
        $ele.click(function(){
            self._$children.eq(current%num).animate({
                left:'-100%'
            })
            console.log(current++%num)
        })
    }
    nieCarousel.prototype.initNav=function(){
        var self=this;
        self._$nav.each(function(index){
            $(this).click(function(){
                self._$children.eq(index).show();
            })
        })
    }
    nieCarousel.prototype.autoPlay=function(){

    }
    nieCarousel.prototype.init=function(){
        var self=this;
        this._$children.each(function(){
             $(this).css({
                 'z-index':self._num--
             })
        })
         this.initNext();
        console.log('init');

    }
    return nieCarousel;
})(jQuery);

$(function(){

    var carousel=new nieCarousel('.slideBox',{
        children:'.slideBox a',
        nextBtn:'.nextBg'
    });

})

