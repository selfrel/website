$(function(){
    $(window).resize(function(){
        $(".close1").css({
            top:($(window).height() - $('#dialog').outerHeight())/2 + $(document).scrollTop()+20+'px',
            right:($(window).width() - $('#dialog').outerWidth())/2+15+'px'
        });
        $(".close2").css({
            top:($(window).height() - $('#dialog1').outerHeight())/2 + $(document).scrollTop()+20+'px',
            right:($(window).width() - $('#dialog1').outerWidth())/2+15+'px'
        });
    });
    $(window).resize(); 
})