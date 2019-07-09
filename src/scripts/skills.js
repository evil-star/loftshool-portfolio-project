import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    drawCircleFill() {
      const circle = this.$refs["circleFill"];
      const strokeDashOffset = (251 / 100) * (100 - this.skillPercent);
      circle.style.strokeDashoffset = strokeDashOffset;
    }
  },
  mounted() {
    this.drawCircleFill();
  }
};

const skillsRow = {
  template: "#skills-row",
  props: {
    skill: Object
  },
  components: {
    skill
  }
};

new Vue({
  el: "#skills-container",
  template: "#skills-component",
  components: {
    skillsRow
  },
  data() {
    return {
      skills: []
    };
  },
  mounted() {
    const data = require("../data/skills.json");
    this.skills = data;
  }
});
