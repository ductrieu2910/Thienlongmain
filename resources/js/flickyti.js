$('.main-carousel').flickity({
    cellAlign: 'left',
    freeScroll: true,
    draggable: false,
});

//
$('.carousel').flickity({
    cellAlign: 'center',
    freeScroll: true,
    prevNextButtons: false,
    draggable: false,
    pageDots: false,
});
var $carousel = $('.carousel').flickity();
$('.sect-button-group').on( 'click', '.sect-button', function() {
    var index = $(this).index();
    $carousel.flickity( 'select', index );
});

//
$('.carousel-main').flickity({
    cellAlign: 'center',
    freeScroll: true,
    prevNextButtons: false,
    draggable: false,
    pageDots: false,
});
var $carouselBtn = $('.carousel-main').flickity();
$('.board-btn-group').on( 'click', '.board-button', function() {
    var index = $(this).index();
    $carouselBtn.flickity( 'select', index );
});