document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const mnav = document.querySelector(".mnav");

  if (!btn || !mnav) return;

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    btn.setAttribute("aria-expanded", "false");
    mnav.setAttribute("aria-hidden", "true");
  };

  btn.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    btn.setAttribute("aria-expanded", String(isOpen));
    mnav.setAttribute("aria-hidden", String(!isOpen));
  });

  // 메뉴 클릭하면 닫기
  mnav.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  // ESC로 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // 화면 커지면 자동 닫기
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) closeMenu();
  });
});
