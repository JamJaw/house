$(function(){

    /* slider ***************************************************************/
    $('.slider').slick({
        autoplay: true, //自動でスクロール
        autoplaySpeed: 1500, //自動再生のスライド切り替えまでの時間を設定
        speed: 2000, //スライドが流れる速度を設定
        fade:true,
        arrows: false,
    });
    /**modal *******************************************************************/ 
    $(function(){
        $('.menu-btn').click(function() {
            //パネルをアニメーションでトグル出来るようにする
            $(".modal").animate({width: 'toggle'}, 300);
        });
    });
    $(function(){
        $('.modalbtn').click(function() {
            //パネルをアニメーションでトグル出来るようにする
            $(".modal").animate({width: 'toggle'}, 300);
        });
    });
    $(function(){
        $('.menu-btn').on('click',function(){
            $('.modal-open-back').fadeIn();
            return false;
        });
    });
    $(function(){
        $('.modalbtn').on('click',function(){
            $('.modal-open-back').fadeOut();
            return false;
        });
    });
    
  
    

    

});