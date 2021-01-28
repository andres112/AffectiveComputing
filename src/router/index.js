import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  //   beforeEnter: (to, from, next) => {
  //     next("/end");
  //   },
  // },
  // {
  //   path: "/first",
  //   name: "First",
  //   component: () =>
  //     import(/* webpackChunkName: "first" */ "../views/FirstModule.vue"),
  //   beforeEnter: (to, from, next) => {
  //     next("/end");
  //   },
  // },
  // {
  //   path: "/second",
  //   name: "Second",
  //   component: () =>
  //     import(/* webpackChunkName: "second" */ "../views/SecondModule.vue"),
  //   beforeEnter: (to, from, next) => {
  //     next("/end");
  //   },
  // },
  // {
  //   path: "/third",
  //   name: "Third",
  //   component: () =>
  //     import(/* webpackChunkName: "third" */ "../views/ThirdModule.vue"),
  //   beforeEnter: (to, from, next) => {
  //     next("/end");
  //   },
  // },
  // {
  //   path: "/final",
  //   name: "Final",
  //   component: () =>
  //     import(/* webpackChunkName: "final" */ "../views/Final.vue"),
  //   beforeEnter: (to, from, next) => {
  //     next("/end");
  //   },
  // },
  {
    path: "/",
    name: "End",
    component: () =>
      import(/* webpackChunkName: "end" */ "../views/End.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
