// js/swiper.js

document.addEventListener("DOMContentLoaded", () => {
  // HERO (3 slides)
  new Swiper(".hero-swiper", {
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

  // 진료소개
  new Swiper(".treat-swiper", {
    loop: true,
    speed: 600,
    slidesPerView: 3,
    spaceBetween: 22,
    navigation: {
      nextEl: ".treat-next",
      prevEl: ".treat-prev"
    },
    pagination: {
      el: ".treat-pagination",
      clickable: true
    },
    breakpoints: {
      0:   { slidesPerView: 1.15 },
      834: { slidesPerView: 2.2 },
      1200:{ slidesPerView: 3 }
    }
  });

  // 장비소개
  new Swiper(".equip-swiper", {
    loop: true,
    speed: 600,
    slidesPerView: 3,
    spaceBetween: 22,
    navigation: {
      nextEl: ".equip-next",
      prevEl: ".equip-prev"
    },
    pagination: {
      el: ".equip-pagination",
      clickable: true
    },
    breakpoints: {
      0:   { slidesPerView: 1.2 },
      834: { slidesPerView: 2.3 },
      1200:{ slidesPerView: 3 }
    }
  });
});
