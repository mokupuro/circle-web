$(window).on('load scroll', function(){
  //animate__animatedのclassを持った要素をセレクタに指定
  const elem = $('.animate__animated');

  elem.each(function () {
    //data属性からアニメーション名を取得
    const isAnimate = $(this).data('animate');
    // animated要素に位置を取得
    const elemOffset = $(this).offset().top;
    // 現在のスクロールポジションを取得
    const scrollPosition = $(window).scrollTop();
    // ウィンドウの高さを取得
    const windowsHeight = window.innerHeight;

    //animated要素がウィンドウ内の指定位置にきたら処理
    if(scrollPosition > elemOffset - (windowsHeight+76)){
      $(this).addClass(isAnimate);
    } else{
      $(this).removeClass(isAnimate);
    }
  });

});