import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/first",
    name: "First",
    component: () =>
      import(/* webpackChunkName: "first" */ "../views/FirstModule.vue"),
  },
  {
    path: "/second",
    name: "Second",
    component: () =>
      import(/* webpackChunkName: "second" */ "../views/SecondModule.vue"),
  },
  {
    path: "/third",
    name: "Third",
    component: () =>
      import(/* webpackChunkName: "third" */ "../views/ThirdModule.vue"),
  },
  {
    path: "/final",
    name: "Final",
    component: () =>
      import(/* webpackChunkName: "final" */ "../views/Final.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
