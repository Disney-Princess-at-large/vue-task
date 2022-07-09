import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Find from "@/views/Find.vue";
import My from "@/views/My.vue";
import NotFound from "@/views/NotFound.vue";
import Part from "@/views/Part.vue";

const routes = [
  {
    path: "/",
    redirect: "/find",
  },
  {
    path: "/find",
    component: Find,
  },
  {
    path: "/my",
    component: My,
  },
  {
    path: "/part",
    component: Part,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
