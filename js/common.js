$(document).ready(function () {
  
  
  if ($(window).width() <= '450'){
    $('.reviews-mobile-slider, .reviews-mobile-slider-nav, .projects-slider, .reviews-slider,.quiz-block-slider,.home-modal-slider').on('init', function(event, slick){
      AOS.init();
    });
  }
  else{
    $('.projects-slider, .reviews-slider,.quiz-block-slider,.home-modal-slider').on('init', function(event, slick){
      AOS.init();
    });
  }

  $(".phone").mask("+7 (999) 999-9999");

  $('.projects-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $('.projects-slider-arrow_l'),
    nextArrow: $('.projects-slider-arrow_r'),
    adaptiveHeight: true
   });

  $('.home-modal-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    //autoplay: false,
    //autoplaySpeed: 2000,
    //prevArrow: $('.projects-slider-arrow_l'),
    //nextArrow: $('.projects-slider-arrow_r'),
    //adaptiveHeight: true
   });

  

  if ($(window).width() <= '450'){
    for (let i = $('.reviews-mobile-slider').length - 1; i >= 0; i--) {
      let element = $('.reviews-mobile-slider')[i];
      let parent = $(element).parent('.reviews-slide-top');
      parent = $(parent).children('.reviews-mobile-slider-nav');
      
      $(element).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        autoplay: false,
        autoplaySpeed: 2000,
        asNavFor: parent,
        arrows: false,
        //prevArrow: $('.reviews-slider-arrow_l'),
        //nextArrow: $('.reviews-slider-arrow_r'),
        //adaptiveHeight: true
       });

      $(parent).slick({
        asNavFor: element,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        autoplay: false,
        autoplaySpeed: 2000,
        variableWidth: true,
        focusOnSelect: true
        //prevArrow: $('.projects-slider-arrow_l'),
        //nextArrow: $('.projects-slider-arrow_r'),
        //adaptiveHeight: true
       });

    }
  } 


  

  $('.modal-menu-close').on('click', function() {
    $('.modal-menu').removeClass('modal-menu-active');
    return false;
  })
  $('.header-menu-mobile').on('click', function() {
    $('.modal-menu').addClass('modal-menu-active');
    return false;
  })


  $('.quiz-block-variant').on('click', function() {
    let parent = $(this).parent('.quiz-block-slider-row');
    parent = $(parent).children('.quiz-block-variant');
    parent.removeClass('quiz-block-variant-active');
    $(this).addClass('quiz-block-variant-active');

    $('.quiz-block-wrp').addClass('quiz-block-wrp-active');
  })

  

  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $('.reviews-slider-arrow_l'),
    nextArrow: $('.reviews-slider-arrow_r'),
   });

  $(".scrol-to").on("click", function (event) {
    $('.modal-menu').removeClass('modal-menu-active');
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.quiz-block-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $(),
    nextArrow: $(),
   });

  $('.quiz-block-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.quiz-block-wrp').removeClass('quiz-block-wrp-active');
  });
  $('.quiz-block-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if (currentSlide == 10) {
      $('.quiz-block-wrp').addClass('quiz-block-wrp-active');
      $('.quiz-btn span').text('ОСТАВИТЬ ЗАЯВКУ');
      $('.quiz-btn span img').remove();
      $('.quiz-btn').addClass('quiz-btn-form');
      //$('.quiz-btn').removeClass('slick-arrow');
      //$('.quiz-btn').removeClass('slick-disabled');

      $('.quiz-btn-form').on('click', function() {
        let form = $(this).closest('.quiz-block-wrp').find('.form-subm');
        $(form).click()
        return false;
      })
    }
  });

  $('.quiz-btn').on('click', function() {
    $('.quiz-block-slider').slick('slickNext');
    return false;
  })

  $('.header-btn').on('click', function() {
    $('.modal-window-2').addClass('modal-window-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.contacts-btn').on('click', function() {
    $('.modal-window-1').addClass('modal-window-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.dark-window').on('click', function() {
    $('.form-modal').removeClass('form-modal-active');
    $('.dark-window').removeClass('dark-window-active');
    $('.home-modal').removeClass('home-modal-active');
  })

  $('.header-btn').on('click', function() {
    $('.form-modal').addClass('form-modal-active');
    $('.dark-window').addClass('dark-window-active');
    $('.presentation-form__title').text('Записаться на просмотр')
    $('.presentation-form-button span').text('Записаться на просмотр')
    return false;
  })

  $('.consultation-btn').on('click', function() {
    $('.form-modal').addClass('form-modal-active');
    $('.dark-window').addClass('dark-window-active');
    $('.presentation-form__title').text('Получить консультацию')
    $('.presentation-form-button span').text('Получить консультацию')
    return false;
  })

  $('.header-nav-call').on('click', function() {
    $('.form-modal').addClass('form-modal-active');
    $('.dark-window').addClass('dark-window-active');
    $('.presentation-form__title').text('Обратный звонок')
    $('.presentation-form-button span').text('Перезвоните мне')
    return false;
  })

  $('.projects-slider-arrow_r').on('click', function() {
    $('.projects-slider').slick('slickNext');
  })
  $('.projects-slider-arrow_l').on('click', function() {
    $('.projects-slider').slick('slickPrev');
  })

  $('.reviews-slider-arrow_r').on('click', function() {
    $('.reviews-slider').slick('slickNext');
  })
  $('.reviews-slider-arrow_l').on('click', function() {
    $('.reviews-slider').slick('slickPrev');
  })

  $('.home-modal-arrow_r').on('click', function() {
    $('.home-modal-slider').slick('slickNext');
    return false;
  })
  $('.home-modal-arrow_l').on('click', function() {
    $('.home-modal-slider').slick('slickPrev');
    return false;
  })


  $('.projects-block__btn').on('click', function() {
    let parent = $(this).parent('.projects-block-inner');
    parent = $(parent).parent('.projects-block');

    let index = $('.projects-block').index(parent);
    let modal = $('.home-modal')[index]
    console.log(index)
    $(modal).addClass('home-modal-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })

  $('.home-modal__btn').on('click', function() {
    $('.form-modal').addClass('form-modal-active');
    $('.home-modal').removeClass('home-modal-active');
    $('.presentation-form__title').text('Получить смету')
    $('.presentation-form-button span').text('Получить смету')
    return false;
  })


  if ($(window).width() <= '450'){
       $('.projects-slider.pc-true').remove();
  } 
  else {
       $('.projects-slider.mob-true').remove();
  }

  
})