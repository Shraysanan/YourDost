$(document).ready(function(){
    $(window).scroll(function(e){
        var scr = $(window).scrollTop();
        $('.navbar').css('background-position', '0px -'+ scr+'px');
    });    
});

$('.carousel').carousel({
  interval: 2000
});