import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "@/views/AboutView.vue";
import ReservationView from "@/views/ReservationView.vue";
import ServicesVue from "@/views/ServicesVue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesVue,
  },
  {
    path: "/reservation",
    name: "reservatio",
    component: ReservationView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
