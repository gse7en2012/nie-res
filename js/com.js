nie.config.copyRight.setWhite();
var autoScroll;
 /*
$(function () {
    function scroll() {
        var slidBox = $("#slide .slideBox ul");
        var slidLI = $("#slide .NavOn li");
        var num = $("#slide .NavOn li").index();
        var ran = Math.floor(Math.random() * num);
        var slidBoxWidth = $('.slideBox').width();
        var eq = slidLI.eq(ran * num);
        $('.slideBox ul').width(slidBoxWidth * slidLI.length);
        // alert(slidLI.width()*slidLI.length)
        slidLI.eq(ran).addClass("current");
        slidLI.eq(ran).find(".out").css("marginTop", -80);
        slidBox.css("left", -slidBoxWidth * ran);
        for (var i = 0; i < num + 1; i++)$("ul .out .num").eq(i).text(i + 1);
        var speed1 = 500;
        var speed2 = 250;
        var au;
        $(slidLI).each(function (index) {
            $(this).mouseover(function () {
                $(this).find(".out").stop(true, true).animate({marginTop: -80}, speed2);
            });
            $(this).mouseleave(function () {
                if (this.className != 'current')
                    $(this).find(".out").stop(true, true).animate({marginTop: 0}, speed2);
            });
            $(this).click(function () {
                $(this).find(".out").stop(true, true).animate({marginTop: -80}, speed2);
                slidBox.stop(true, true).animate({left: -slidBoxWidth * index}, speed1);
                $(this).addClass("current");
                $(this).siblings().removeClass("current");
                $(this).siblings().find(".out").stop(true, true).animate({marginTop: 0}, speed2);
            });
        });
        $("#prev").click(function () {
            var a = $("#slide .NavOn .current").index();
            if (a == 0)a = num;
            else a = a - 1;
            slidBox.stop(true, true).animate({left: -slidBoxWidth * a}, speed1);
            $(slidLI).each(function () {
                if ($(this).index() == a) {
                    $(this).addClass("current");
                    $(this).find(".out").stop(true, true).animate({marginTop: -80}, speed2);
                } else {
                    $(this).removeClass("current");
                    $(this).find(".out").stop(true, true).animate({marginTop: 0}, speed2);
                }
            });
        });
        $("#next").click(next);
        function next() {
            var a = $("#slide .NavOn .current").index();
            if (a == num)a = 0;
            else a = a + 1;
            slidBox.stop(true, true).animate({left: -slidBoxWidth * a}, speed1);
            $(slidLI).each(function () {
                if ($(this).index() == a) {
                    $(this).addClass("current");
                    $(this).find(".out").stop(true, true).animate({marginTop: -80}, speed2);
                } else {
                    $(this).removeClass("current");
                    $(this).find(".out").stop(true, true).animate({marginTop: 0}, speed2);
                }
            });
        }

        $(".picBox").mouseover(function () {
            clearTimeout(au);
            $("#next").css("display", "block");
            $("#prev").css("display", "block");
        });
        $(".picBox").mouseout(function () {
            au = setTimeout(auto, 3000);
            $("#next").css("display", "none");
            $("#prev").css("display", "none");
        });
        function auto() {
            next();
            au = setTimeout(auto, 3000);
        }

        au = setTimeout(auto, 3000);
        return au;
    }

    autoScroll = scroll();
    $(window).resize(function () {
        console.log(clearTimeout(autoScroll));
        autoScroll = scroll();
    })


});
*/

/**
 * nieCarousel
 * @param box 轮播容器
 * @param options
 * @returns nieCarousel对象
 */
var nieCarousel = (function ($) {
    var defaultOptions = {
        children: '.slideBox',
        prevBtn: '.slideNext',
        nextBtn: '.slidePrev',
        navList: '.slideNav a',
        autoPlay: true
    }
    var current = 0;
    var transfer = false;
    var nieCarousel = function (box, options) {
        this.options = $.extend({}, defaultOptions, options);
        this._$children = $(this.options.children);
        this._$nav = $(this.options.navList);
        this._num = this._$children.length;
        this.init();
    }
    nieCarousel.prototype.initNext = function () {
        var self = this;
        var num = self._num;
        var $ele = $(self.options.nextBtn);
        //展示下一图片
        function showNext() {

            if (!transfer) {
                transfer = true;
                self._$children.eq(current % num).animate({
                    left: '-100%'
                }, 300);
                self._$children.eq(++current % num).animate({
                    left: '0%'
                }, 300, function () {
                    transfer = false;
                    /*
                    if ((current + 1) % num == 0) {
                        self._$children.css({'left': '100%'});
                        self._$children.eq(current % num).css({'left': '0%'});
                    } else {
                        self._$children.eq(num - 1).css({'left': '100%'});
                    }
                    */
                    self._$children.eq((current-1)%num).css({'left':'-100%'});
                    self._$children.eq((current+1)%num).css({'left':'100%'})
                    console.log('next-click-done',current%num);
                });
            }
        }

        $ele.click(showNext);
    }
    nieCarousel.prototype.initPrev = function () {
        var self = this;
        var num = self._num;

        var $ele = $(self.options.prevBtn);
        //展示下一图片
        function showPrev() {
            if (!transfer) {
                transfer = true;
                console.log(current);
                self._$children.eq(current % num).animate({
                    left: '100%'
                }, 300);
                self._$children.eq(--current % num).animate({
                    left: '0%'
                }, 300,function(){
                    transfer=false;
                    self._$children.eq((current-1)%num).css({'left':'-100%'});
                    self._$children.eq((current+1)%num).css({'left':'100%'})
                    console.log('click-prev-done',current);
                });
            }
        }
        $ele.click(showPrev);
    }
    nieCarousel.prototype.initNav = function () {
        var self = this;

        self._$nav.each(function (index) {
            $(this).click(function () {
                self._$children.eq(index).show();
            })
        })
    }
    nieCarousel.prototype.autoPlay = function () {

    }
    nieCarousel.prototype.init = function () {
        var self = this;
        var isFirst = false;
        this._$children.each(function (index) {
            index == 0 ? isFirst = true : isFirst = false;
            (!isFirst) && $(this).css({
                left: '100%'
            })
        }).eq(-1).css('left','-100%');
        this.initNext();
        this.initPrev();

    }
    return nieCarousel;
})(jQuery);

$(function () {

    var carousel = new nieCarousel('.slideBox', {
        children: '.slideBox a',
        nextBtn: '#next',
        prevBtn: '#prev'
    });

    /**
     * window resize set height
     */
    $(window).resize(function(){
       // if(!$.browser.msie){
            if($(window).width()<1000){

                //  $('.news,.picBox,#slide').height($(this).width()*0.406);
                //   $('.slideBox').height($(this).width()*0.325)

                //   $('.newsList').height($(this).width()*0.4);
                $('.news').height($('.picBox').height());
                $('.NavOn li,.on').each(function(){
                    $(this).height($(this).width()*0.5333)
                })
            }else{
                //   $('.newsList').height(359)
                $('.slideBox').height(325);
                $('.news').height(407);
            }
       // }

    })


})

