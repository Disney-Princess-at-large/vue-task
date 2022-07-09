import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/components/view/Index";
import My from "@/components/view/My.vue";
import Order from "@/components/view/Order.vue";
import Sort from "@/components/view/Sort.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/order",
    component: Order,
  },
  {
    path: "/sort",
    component: Sort,
  },
  {
    path: "/my",
    component: My,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
