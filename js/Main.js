// sroll color change

const tpNavMenu = document.querySelector(".hoolix-top-nav-container");
window.addEventListener("scroll", () => {
  window.scrollY > 1
    ? tpNavMenu.classList.add("top-nav-scroll-active")
    : tpNavMenu.classList.remove("top-nav-scroll-active");
});
