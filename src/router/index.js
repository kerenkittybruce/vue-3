import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductView from "../views/ProductView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
