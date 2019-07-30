import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import login from "./components/pages/login";
import about from "./components/pages/about";
import works from "./components/pages/works";
import reviews from "./components/pages/reviews";

const routes = [
  {
    path: "/login",
    component: login
  },
  {
    path: "/about",
    component: about
  },
  {
    path: "/works",
    component: works
  },
  {
    path: "/reviews",
    component: reviews
  }
];

export default new VueRouter({ routes });
