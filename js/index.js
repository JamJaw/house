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
    /************************************************************************************
     *  first-titleの文字が流れるように出てくる
     ***********************************************************************************/
     function slideAnime(){
        //====左に動くアニメーションここから===
          $('.leftAnime').each(function(){ 
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
              //左から右へ表示するクラスを付与
              //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
              $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
              $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
            }else{
              //左から右へ表示するクラスを取り除く
              $(this).removeClass("slideAnimeLeftRight");
              $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft"); 
            }
          });
        }      
        // 画面が読み込まれたらすぐに動かしたい場合の記述
        $(window).on('load', function(){
          slideAnime();/* アニメーション用の関数を呼ぶ*/
        });
    /***********************************************************************************
     * works ふわっと出現
     ***********************************************************************************/
     function fadeAnime(){      
        $('.fadeInBox').each(function(){ //fadeInというクラス名が
          var elemPos = $(this).offset().top-10;//要素より、50px上の
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll >= elemPos - windowHeight){
          $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
          }else{
          $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
          }
          });
        }
        $(window).scroll(function (){
            fadeAnime();/* アニメーション用の関数を呼ぶ*/
          });
  
    

    

});