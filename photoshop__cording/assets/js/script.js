// WOW

new WOW().init();

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
  300);
});
