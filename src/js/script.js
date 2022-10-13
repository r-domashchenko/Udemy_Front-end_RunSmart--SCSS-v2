// ADD Jquery library
$(document).ready(function () {
    // work only after document (HTML page) loaded
    // method to load SlickSlider
    $('.carousel__inner').slick({
        speed: 1000,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
        adaptiveHeight: false,

        prevArrow: '<button type="button" class="slick-prev"><img src="icons/4-slider/chevron-left-solid.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/4-slider/chevron-right-solid.svg"></img></button>',

        responsive: [{
            breakpoint: 993,
            settings: {
                arrows: false
            }
        }]
    });
});