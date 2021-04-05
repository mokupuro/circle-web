// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', () => {

  // "navbar-burger" を取得
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if (navbarBurgers.length > 0) {

    // クリックイベントを追加
    navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // data-target属性から値を取得
        const target = el.dataset.target;
        const navMenu = document.getElementById(target);

        // ""navbar-burger"と"navbar-menu"にis-active" を追加
        el.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
      });
    });
  }

});
