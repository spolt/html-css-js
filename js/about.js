$(document).ready(function(){
   
    //fixed header
    $(".header").addClass("fixed");

    $(window).scroll(function(){
        if($(this).scrollTop() < 100){
            $(".header").addClass("fixed");
        }   
    });
})