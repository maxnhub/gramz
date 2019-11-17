$(document).ready(function() {
    $('#carousel-mobile').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 300, //Отступ от элемента справа в 50px
        nav: true, //Отключение навигации
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 2000, //Время смены слайда
        dots: true,
        dotsEach: true
    });

    $('#carousel-tablets').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 240, //Отступ от элемента справа в 50px
        nav: true, //Отключение навигации
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 2000, //Время смены слайда
        dots: true,
        dotsEach: true
    });
});