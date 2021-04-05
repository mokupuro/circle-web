// Swiperの初期化・設定
const carouselModule = (() => {
  return {
    configure: () => {
      const mySwiper = new Swiper('.swiper-container', {
        // 最終スライドの次が先頭スライドに戻る
        loop: true,
        // エフェクト
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        // スライド間の余白
        spaceBetween: 10,
        // スライド時の動く速さ
        speed: 1000,
        // 自動スライド
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination'
        },
        // 1023px以下のときに適用
        breakporint: {
          1023: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
              delay: 3000,
            }
          }
        }
      })
    }
  }
})()

carouselModule.configure()