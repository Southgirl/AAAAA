$(function(){  
      
    var $banner = $("#banner");  
    var $picList = $("#picList");  
    var $picLis = $("#picList li");  
    var $pointList = $("#pointList");  
    var $pointLis = $("#pointList li");  
    var len = $pointLis.length;  
    var $prevBtn = $("#prevBtn");  
    var $nextBtn = $("#nextBtn");  
      
    var activeIndex = 0;  
    var timer = "";  
    /** 
     * 先设置层级关xi，改变图片的上下顺序 
     */  
    for (var i = 0;i < len;i++) {  
        /** 
         * eq表示当前是di几个图片所在的li 
         * z-index表示我们设置每一个图片所在li的层级关xi(谁在谁的上面) 
         */  
        $picLis.eq(i).css("z-index",len-i);  
    }  
      
    /** 
     * 点击控制点切换图片 
     */  
    $pointLis.mouseenter(function(){  
        var $index = $(this).index();  
        activeIndex = $index;  
        fadeFn($index);  
    })  
      
    /** 
     * 点击左右按钮切换图片 
     */  
    $nextBtn.click(function(){  
        activeIndex++;  
        if(activeIndex >= len){  
            activeIndex = 0;  
        }  
        fadeFn(activeIndex);  
    })  
    $prevBtn.click(function(){  
        activeIndex--;  
        if(activeIndex == 0 ){  
            activeIndex = len-1;  
        }  
        fadeFn(activeIndex);  
    })  
      
    /** 
     *  
     * @param {Number} num 
     */  
      
    function fadeFn(num){  
        $pointLis.eq(num).addClass("active").siblings().removeClass("active");  
        $picLis.eq(num).fadeIn(1000).siblings().fadeOut(1000);  
    }  
    autoPlay()  
    /** 
     * 定时器 
     */  
    function autoPlay(){  
        timer = setInterval(function(){  
            $nextBtn.click();  
        },2500);  
    }  
      
    $banner.mouseenter(function(){  
        clearInterval(timer);  
        $prevBtn.fadeIn();  
        $nextBtn.fadeIn();  
    })  
    $banner.mouseleave(function(){  
        autoPlay();  
        $prevBtn.fadeOut();  
        $nextBtn.fadeOut();  
    })  
      });  