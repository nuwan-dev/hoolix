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

//Slick

$(".our-services-slider").slick({
  infinite: true,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 1250,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

$(".our-work-slider").slick({
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1250,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

$(".t-slider").slick({
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1250,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});

let menu = document.getElementById("mbTopNavMenu");
menu.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

function updateAos() {
  const screenWidth = screen.width;
  const heroImg = document.querySelector(".hero-img");
  if (screenWidth < 468) {
    heroImg.setAttribute("data-aos", "fade-up");
  } else {
    heroImg.setAttribute("data-aos", "fade-left");
  }
}

updateAos();
window.addEventListener("resize", updateAos);
