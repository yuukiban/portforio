$(function(){
    // drawer.js
    $('.drawer').drawer()

    // スムーススクロール
    $(' a[href^="#"] ').on('click' , function(){

        var header=$('.header').innerHeight();
        var id=$(this).attr('href');
        var position=0;
    
        if( id != '#'){
        var position=$(id).offset().top - header;
        };
    
        $('html,body').animate({
            scrollTop: position
        },
        300);
        return false;
    });

    // wow.js
    new WOW().init();

    // googleform
    let $form = $('#js-form')
    $form.submit(function(e) { 
        $.ajax({ 
         url: $form.attr('action'), 
         data: $form.serialize(), 
         type: "POST", 
         dataType: "xml", 
         statusCode: { 
            0: function() { 
              //送信に成功したときの処理 
              $form.slideUp()
              $('#js-success').slideDown()
            }, 
            200: function() { 
              //送信に失敗したときの処理 
              $form.slideUp()
              $('#js-error').slideDown()
            }
          } 
        });
        return false; 
      }); 

    //   formの入力確認
    let $submit=('#js-submit')
    $('#js-form input, #js-form textarea').on('change' , function(){
        if(
            $('#js-form input[type="text"]').val() !== ""&&
            $('#js-form input[type="email"]').val() !== ""&&
            $('#js-form input[name="entry.438502979"]').prop('checked') === true
        ){
            // すべて入力されたとき
            $submit.prop('disabled' , false)
            $submit.addClass('-active')
        }else{
            // 入力されていないとき
            $submit.prop('disabled' , true)
            $submit.removeClass('-active')  
        }
    })






});
