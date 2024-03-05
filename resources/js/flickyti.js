$('.main-carousel').flickity({
    cellAlign: 'left',
    freeScroll: true,
    draggable: false,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 1500,
});

$('.news-carousel').flickity({
    cellAlign: 'left',
    freeScroll: true,
    prevNextButtons: false,
    draggable: false,
    wrapAround: true,
    autoPlay: 1500,
});

$('.carousel').flickity({
    cellAlign: 'center',
    freeScroll: true,
    prevNextButtons: true,
    draggable: false,
    pageDots: true,
    wrapAround: true,
    autoPlay: 1500,
});
var $carousel = $('.carousel').flickity();
$('.sect-button-group').on( 'click', '.sect-button', function() {
    var index = $(this).index();
    console.log(index);
    $carousel.flickity( 'select', index );
});

$('.carousel-main').flickity({
    cellAlign: 'center',
    freeScroll: false,
    prevNextButtons: false,
    draggable: false,
    pageDots: false,
    wrapAround: true,
    autoPlay:false,
});
var $carouselBtn = $('.carousel-main').flickity();
$('.news-button-group').on( 'click', '.board-button', function() {
    var index = $(this).index();
    console.log(index);
    $carouselBtn.flickity( 'select', index );
});


