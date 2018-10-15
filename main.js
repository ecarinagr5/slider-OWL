$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

var selector = $('.owl-carousel');

$('.my-next-button').click(function() {
    console.log("sis")
  selector.trigger('next.owl.carousel');
});

$('.my-prev-button').click(function() {
    console.log("no")
  selector.trigger('prev.owl.carousel');
});