import Vue from "vue";
import Flickity from "vue-flickity";

new Vue({
  el: "#reviews-slider-container",
  template: "#reviews-slider",

  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        cellAlign: "left",
        imagesLoaded: true
      }
    };
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  }
});
