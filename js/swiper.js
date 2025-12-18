// js/swiper.js
document.addEventListener("DOMContentLoaded", () => {
  // HERO (3 slides) - 화면에 1개씩만
  const heroSwiper = new Swiper(".hero-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    speed: 700,
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { el: ".hero-pagination", clickable: true },
    watchOverflow: true,
    observer: true,
    observeParents: true
  });

  // TREAT - 3.2개 보이게
  const treatSwiper = new Swiper(".treat-swiper", {
    slidesPerView: 3.2,
    spaceBetween: 22,
    slidesPerGroup: 1,
    loop: true,
    speed: 600,
    centeredSlides: false,
    navigation: { nextEl: ".treat-next", prevEl: ".treat-prev" },
    pagination: { el: ".treat-pagination", clickable: true },
    watchOverflow: true,
    observer: true,
    observeParents: true,
    // ✅ 이미지/폰트 로딩 영향 줄이기
    preloadImages: false,
    lazy: true,
     breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 14,
      centeredSlides: false
    },
    481: {
      slidesPerView: 2.5,
      spaceBetween: 18,
      centeredSlides: false
    },

     1025: {
      slidesPerView: 3.2,
      spaceBetween: 22
    }
  }
  });

  // EQUIP
// EQUIP - PC는 3개, 모바일(<=480)는 1개
const equipSwiper = new Swiper(".equip-swiper", {
  slidesPerView: 3,
  spaceBetween: 22,
  slidesPerGroup: 1,
  loop: true,
  speed: 600,
  navigation: { nextEl: ".equip-next", prevEl: ".equip-prev" },
  pagination: { el: ".equip-pagination", clickable: true },
  watchOverflow: true,
  observer: true,
  observeParents: true,
  preloadImages: false,
  lazy: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 14,
      centeredSlides: false
    },
    481: {
      slidesPerView: 3,
      spaceBetween: 22,
      centeredSlides: false
    }
  }
});


});
