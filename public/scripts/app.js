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




