$(".one").click(function () {
    $('html, body').animate({
        scrollTop: $(".page_header").offset().top
    }, 1000);
});

$(".two").click(function () {
    $('html, body').animate({
        scrollTop: $(".page_gallery").offset().top
    }, 1000);
});

$(".tree").click(function () {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop(),
        where = $(this).scrollTop();

    if(wScroll > $('.contact').offset().top - ($(window).height() / 1.2)) {
       $('.contact .contact-form').each(function () {
           setTimeout(function () {
               $('.contact .contact-form').addClass('is-showing');
           }, 300);
       });
     }

     if(where > 0 && where < $('.page_gallery').offset().top - ($(window).height() / 1.2)) {
       $('.global .global_navigation').each(function(){
         $('.global .global_navigation').addClass('page-one');
         $('.global .global_navigation').removeClass('page-two');
         $('.global .global_navigation').removeClass('page-tree');
       });
     }
     if(where > $('.page_gallery').offset().top - ($(window).height() / 3) && where <  $('.contact').offset().top - ($(window).height() / 1.2)) {
       $('.global .global_navigation').each(function(){
         $('.global .global_navigation').addClass('page-two');
         $('.global .global_navigation').removeClass('page-tree');
         $('.global .global_navigation').removeClass('page-one');
       });
     }
     if(where > $('.contact').offset().top - ($(window).height() / 3)) {
       $('.global .global_navigation').each(function(){
         $('.global .global_navigation').addClass('page-tree');
         $('.global .global_navigation').removeClass('page-one');
         $('.global .global_navigation').removeClass('page-two');
       });
     }
});
