// WOW
new WOW().init();

// to-top

jQuery(window).on('scroll', function(){
    if( 100 <  jQuery(this).scrollTop()){
      jQuery('.to-top').addClass('is-show');
    }else{
      jQuery('.to-top').removeClass('is-show');
    }
  });

// クリックイベント
jQuery('.header__nav__item a').on('click' , function(){
    jQuery('.header__nav__item a').removeClass('is-active');
    jQuery(this).addClass('is-active');
  });
  

// スムーススクロール
jQuery(' a[href^="#"] ').on('click' , function(){

    var header=jQuery('.header').innerHeight();
    var id=jQuery(this).attr('href');
    var position=0;
    
    if( id != '#'){
    var position=jQuery(id).offset().top - header;
    };
    
      jQuery('html,body').animate({
        scrollTop: position
      },
      500);
    });

// ハンバーガーメニュー
$('.drawer-icon').on('click',function(e){
    e.preventDefault();
  
    $('.drawer-icon').toggleClass('is-active');
    $('.drawer-content').toggleClass('is-active');
    $('.drawer-background').toggleClass('is-active');
  
    return false;
  });

$('.drawer-background').on('click',function(e){
    e.preventDefault();
  
    $('.drawer-icon').removeClass('is-active');
    $('.drawer-content').removeClass('is-active');
    $('.drawer-background').removeClass('is-active');
  
    return false;
  });

$('.drawer-content a').on('click',function(e){
    e.preventDefault();
  
    $('.drawer-icon').removeClass('is-active');
    $('.drawer-content').removeClass('is-active');
    $('.drawer-background').removeClass('is-active');
  
    return false;
  });
  

// loading
$(window).on('load', function(){
  $('#splash-logo').delay(1200).fadeOut('slow');
  $('#splash').delay(1500).fadeOut('slow',function(){
    $('body').addClass('appear');
  });
});
    
  