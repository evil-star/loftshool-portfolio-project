import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

let parallaxScene = document.querySelector(".parallax");
let parallaxLayers = parallaxScene.querySelectorAll(".parallax__layer");
let scrollTop;
window.onscroll = function() {
  scrollTop = window.scrollY;
  console.log(scrollTop);
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
