// sroll color change
const tpNavMenu = document.querySelector(".hoolix-top-nav-container");
const mbNavMenu = document.querySelector(".hoolix-mb-nav-container");
window.addEventListener("scroll", () => {
  window.scrollY > 1
    ? (tpNavMenu.classList.add("top-nav-scroll-active"),
      mbNavMenu.classList.add("mb-nav-scroll-active"))
    : (tpNavMenu.classList.remove("top-nav-scroll-active"),
      mbNavMenu.classList.remove("mb-nav-scroll-active"));
});
