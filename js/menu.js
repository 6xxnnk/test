// js/mobile-nav.js (또는 기존 main.js에 추가)
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const btn = document.querySelector(".menu-btn");
  const mnav = document.querySelector(".mnav");
  const body = document.body;

  if (!header || !btn || !mnav) return;

  const openMenu = () => {
    header.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "메뉴 닫기");
    mnav.setAttribute("aria-hidden", "false");
    body.classList.add("nav-lock");   // ✅ 스크롤 잠금
  };

  const closeMenu = () => {
    header.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "메뉴 열기");
    mnav.setAttribute("aria-hidden", "true");
    body.classList.remove("nav-lock"); // ✅ 스크롤 잠금 해제
  };

  btn.addEventListener("click", () => {
    header.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  // 메뉴 링크 클릭 시 닫기
  mnav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // 바깥 클릭 시 닫기 (원하면 삭제 가능)
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) && header.classList.contains("is-open")) {
      closeMenu();
    }
  });

  // ESC로 닫기 (PC 테스트용 + 접근성)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("is-open")) closeMenu();
  });
});
