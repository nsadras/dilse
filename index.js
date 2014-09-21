$(document).ready(function() { 
    $("body").width(($(window).width() + 1040)*4);
    $(".panel").width($(window).width()); 
    $(".panel").height($(window).height() - $("#cssmenu").height());
    $("#cssmenu a").bind("click",function(event){ 
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({ scrollLeft: $(target).offset().left, scrollTop: $(target).offset().top }, 1200); 
    }); 
});

$(window).resize(function() {
    $("body").width((screen.width + 1040)*4);
    $(".panel").width(screen.width); 
    $(".panel").height($("window").height - $("#cssmenu").height());
});
