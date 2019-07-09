import Vue from "vue";

const sliderThumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array,
    currentSlide: Object
  }
};

const sliderNav = {
  template: "#slider-nav",
  props: {
    currentSlideIndex: Number,
    works: Array
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    }
  }
};

const sliderTags = {
  template: "#slider-tags"
};

const sliderInfo = {
  template: "#slider-info",
  props: {
    currentSlide: Object
  },
  components: {
    sliderTags
  }
};

new Vue({
  el: "#slider-container",
  template: "#slider",
  components: {
    sliderThumbs,
    sliderNav,
    sliderInfo
  },
  data() {
    return {
      works: [],
      currentSlideIndex: 1
    };
  },
  computed: {
    currentSlide() {
      return this.works[this.currentSlideIndex - 1];
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/works/${item.photo}`);
        item.photo = requirePic;
        return item;
      });
    },
    handleSlide(direction) {
      if (direction === "next" && this.currentSlideIndex !== this.works.length)
        this.currentSlideIndex++;
      else if (direction === "prev" && this.currentSlideIndex !== 1)
        this.currentSlideIndex--;
    },
    handleSetSlide(index) {
      this.currentSlideIndex = index;
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});
