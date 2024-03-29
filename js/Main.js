// sroll color change
const tpNavMenu = document.querySelector(".hoolix-top-nav-container");
const mbNavMenu = document.querySelector(".hoolix-mb-nav-container");
window.addEventListener("scroll", () => {
  window.scrollY > 0
    ? (tpNavMenu.classList.add("top-nav-scroll-active"),
      mbNavMenu.classList.add("mb-nav-scroll-active"))
    : (tpNavMenu.classList.remove("top-nav-scroll-active"),
      mbNavMenu.classList.remove("mb-nav-scroll-active"));
});

// chat button
const chtBtn = document.querySelector(".chat-btn");
const chtHvr = document.querySelector(".chat-hover");
chtBtn.addEventListener("touchstart", () => {
  chtHvr.classList.add("chat-hover-active");
});
chtBtn.addEventListener("mouseenter", () => {
  chtHvr.classList.add("chat-hover-active");
});
chtBtn.addEventListener("touchend", () => {
  chtHvr.classList.remove("chat-hover-active");
});
chtBtn.addEventListener("mouseleave", () => {
  chtHvr.classList.remove("chat-hover-active");
});
