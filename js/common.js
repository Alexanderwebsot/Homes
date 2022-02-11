$(document).ready(function () {
  
  $('.projects-slider, .reviews-slider,.quiz-block-slider').on('init', function(event, slick){
    AOS.init();
  });

  $(".phone").mask("+7 (999) 999-9999");

  $('.projects-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $('.projects-slider-arrow_l'),
    nextArrow: $('.projects-slider-arrow_r'),
    adaptiveHeight: true
   });

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
    $('.modal-window').removeClass('modal-window-active');
    $('.dark-window').removeClass('dark-window-active');
  })
})