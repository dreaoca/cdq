$(window).scroll(function(){  
     if (window.location.hash == '' && $(window).scrollTop() == 0) {
         $('div.Nav').css({"opacity":"0.5"});
         $('div.Nav ul li a').css({"color":"#444"});
     }
});  
  
$(window).scroll(function(){  
     if (window.location.hash == '' && $(window).scrollTop() > 70) {
         $('div.Nav').css({"opacity":"0.99"});
         $('div.Nav').css({"background":"linear-gradient(141deg, #c3958a -17%, #ecede9 34%, #bad6e1 130%)"});
         $('div.Nav ul li a').css({"color":"#777"});
     }
});  



$(document).ready(function($) {

    $('.card__share > a').on('click', function(e){ 
        e.preventDefault() // prevent default action - hash doesn't appear in url
        $(this).parent().find( 'div' ).toggleClass( 'card__social--active' );
        $(this).toggleClass('share-expanded');
    });
  
});
 