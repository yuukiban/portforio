$(function () {

  // flickity
  $('selector').flickity()

  $('.main-carousel').flickity({
    // options
    draggable: true,
    cellAlign: 'left',
    contain: true,
    freeScroll: true,
    contain: true,
    autoPlay: 3500,
    // disable previous & next buttons and dots
    prevNextButtons: false,
  });


  // wow
  new WOW().init();

  // drawer
  $('.drawer-icon').on('click', function (e) {
    e.preventDefault();

    $('.drawer-icon').toggleClass('is-active');
    $('.drawer-content').toggleClass('is-active');
    $('.drawer-background').toggleClass('is-active');
    $('.drawer__logo').toggleClass('is-active');

    return false;
  });


  // スムーススクロール 
  jQuery(' a[href^="#"] ').on('click', function () {

    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;

    if (id != '#') {
      var position = jQuery(id).offset().top - header;
    };

    jQuery('html,body').animate({
      scrollTop: position
    },
      300);
  });

  $(' a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    $('.drawer-icon').removeClass('is-active');
    $('.drawer-content').removeClass('is-active');
    $('.drawer-background').removeClass('is-active');
    $('.drawer__logo').removeClass('is-active');

    return false;
  });


  // スクロールに応じて表示

  jQuery(window).on('scroll', function () {
    if (100 < jQuery(this).scrollTop()) {
      jQuery('.to-top').addClass('is-show');
    } else {
      jQuery('.to-top').removeClass('is-show');
    }
  });

  // クリックイベント
  jQuery('.header__nav li a').on('click', function () {
    jQuery('.header__nav li a').removeClass('is-active');
    jQuery(this).addClass('is-active');
  });

  // Q and A アコーディオン
  jQuery('.qa-box__q').on('click', function () {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa-box__icon').toggleClass('is-open');
  });


})