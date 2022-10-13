const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    autoWidth: true,

    responsive: {
        640: {
            edgePadding: 50,
            gutter: 0,
            items: 1
        },
        700: {
            gutter: 5
        },
        900: {
            items: 1
        }
    }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});