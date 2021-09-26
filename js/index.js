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
     * works 横から出てくる
     ***********************************************************************************/
     var slideConts = document.querySelectorAll('.slideConts'); // スライドで表示させる要素の取得
     var slideContsRect = []; // 要素の位置を入れるための配列
     var slideContsTop = []; // 要素の位置を入れるための配列
     var windowY = window.pageYOffset; // ウィンドウのスクロール位置を取得
     var windowH = window.innerHeight; // ウィンドウの高さを取得
     var remainder = 100; // ちょっとはみ出させる部分
     // 要素の位置を取得
     for (var i = 0; i < slideConts.length; i++) {
       slideContsRect.push(slideConts[i].getBoundingClientRect());
     }
     for (var i = 0; i < slideContsRect.length; i++) {
       slideContsTop.push(slideContsRect[i].top + windowY);
     }
     // ウィンドウがリサイズされたら、ウィンドウの高さを再取得
     window.addEventListener('resize', function () {
       windowH = window.innerHeight;
     });
     // スクロールされたら
     window.addEventListener('scroll', function () {
       // スクロール位置を取得
       windowY = window.pageYOffset;
       
       for (var i = 0; i < slideConts.length; i++) {
         // 要素が画面の下端にかかったら
         if(windowY > slideContsTop[i] - windowH + remainder) {
           // .showを付与
           slideConts[i].classList.add('show');
         } else {
           // 逆に.showを削除
           slideConts[i].classList.remove('show');
         }
       }
     });
    
  
    

    

});