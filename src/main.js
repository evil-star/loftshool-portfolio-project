import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

let parallaxScene = document.querySelector(".parallax");
let parallaxLayers = parallaxScene.querySelectorAll(".parallax__layer");
let scrollTop;
let speed;
window.onscroll = function() {
  scrollTop = window.scrollY;
  parallaxLayers.forEach(el => {
    speed = scrollTop * el.dataset.speed;
    el.style.transform = `translateY(${speed}px) translateZ(0)`;
  });
};

const menuToggleEl = document.querySelectorAll(
  ".menu-btn, .menu-mobile__close, .menu-mobile__list"
);
const menuMobile = document.querySelector(".menu-mobile");

menuToggleEl.forEach(function(el) {
  el.addEventListener("click", function() {
    menuMobile.classList.toggle("menu-mobile_active");
  });
});

import "./scripts/skills";
import "./scripts/works";
import "./scripts/reviews";
