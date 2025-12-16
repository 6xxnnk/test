// js/swiper.js
document.addEventListener("DOMContentLoaded", () => {
  // HERO (3 slides) - 화면에 1개씩만
  new Swiper(".hero-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    speed: 700,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".hero-pagination",
      clickable: true
    }
  });

  // 진료소개 - 화면에 1개씩만
  new Swiper(".treat-swiper", {
    slidesPerView: 1,
    spaceBetween: 22,
    slidesPerGroup: 1,
    loop: true,
    speed: 600,
    navigation: {
      nextEl: ".treat-next",
      prevEl: ".treat-prev"
    },
    pagination: {
      el: ".treat-pagination",
      clickable: true
    }
  });

  // 장비소개 - 화면에 1개씩만
  new Swiper(".equip-swiper", {
    slidesPerView: 1,
    spaceBetween: 22,
    slidesPerGroup: 1,
    loop: true,
    speed: 600,
    navigation: {
      nextEl: ".equip-next",
      prevEl: ".equip-prev"
    },
    pagination: {
      el: ".equip-pagination",
      clickable: true
    }
  });
});
