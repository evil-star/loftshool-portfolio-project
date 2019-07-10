import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper);

new Vue({
  el: "#reviews-slider-container",
  template: "#reviews-slider",
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        navigation: {
          nextEl: ".reviews__slider-controls-next",
          prevEl: ".reviews__slider-controls-prev"
        },
        breakpoints: {
          768: {
            slidesPerView: 1
          }
        }
      }
    };
  }
});
