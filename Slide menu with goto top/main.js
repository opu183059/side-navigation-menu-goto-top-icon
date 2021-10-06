$(document).ready(function () {
    // nevigation menu open 
    $('.closebutton').click(function () {
        $('.navhome').animate({ left: "0px" }, 1000)
        $(this).hide();
        $(".openbutton").css('display', 'block');
    });
    
    // nevigation menu close
    $('.openbutton').click(function () {
        $('.navhome').animate({ left: "-300px" }, 1000)
        $(this).hide();
        $(".closebutton").css('display', 'block');
    });

    // goto top java code 
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $("#toTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
    // goto top java code end 

});