// ADD jQuery library
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

    //jQuerry tabs 
    $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function () {
        $(this)
            .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
            .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
    });

    // // Свій скрипт для карток товару (кнопка "подробнее")
    // $('.catalogue-item__link').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
    //         $('.catalogue-item__more').eq(i).toggleClass('catalogue-item__more_active');
    //     })
    // });
    // // Свій скрипт для карток товару (кнопка "назад")
    // $('.catalogue-item__back').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
    //         $('.catalogue-item__more').eq(i).toggleClass('catalogue-item__more_active');
    //     })
    // });

    // Оптимізований скрипт (своя функція, яка визиває додаткову інформацію на карточках товару)
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
                $('.catalogue-item__more').eq(i).toggleClass('catalogue-item__more_active');
            })
        });
    };

    // Визиваємо функцію для кнопки "подробнее" та "назад"
    toggleSlide('.catalogue-item__link');
    toggleSlide('.catalogue-item__back');

    // Прописуємо модальні вікна

    $('[data-modal="consultation"]').on('click', function () {
        $('.overlay, #consultation-form').fadeIn();
    });

    // Скрипт для модальних вікон в каталозі
    // Скрипт, який підставить назву товару в модальну форму замовлення #buy-form
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#buy-form .modal__descr').text($('.catalogue-item__subtitle').eq(i).text());
            $('.overlay, #buy-form').fadeIn();
        })
    });

    // Скрипт для закриття модальних вікон (усі Х)
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation-form, #buy-form, #thankyou').fadeOut();
    });

    // Закриває оверлей при натисканні Escape
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            $('.overlay, #consultation-form, #buy-form, #thankyou').fadeOut();
        }
    });
    // Закриває оверлей при кліку будь де
    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            $('.overlay, #consultation-form, #buy-form, #thankyou').fadeOut();
        }
    });

    // Налаштовуємо скрипт на валідацію (jQuerry)

    function validateForm(form) { //декларація своєї функції з налаштуваннями
        // Налаштування з jQuery Validation Plugin (https://jqueryvalidation.org/)
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: 'Пожалуйста, укажите Ваше имя',
                phone: 'Введите номер телефона',
                email: {
                    required: 'Нужно указать адрес електронной почты',
                    email: 'Введите действующую почту формата email@domain.com'
                }
            }
        });
    };

    validateForm('#consultation-form-1'); //форма в блоці Консультації
    validateForm('#consultation-form form'); //модальна форма по кнопці
    validateForm('#buy-form form'); //модальна форма по кнопці придбати
});