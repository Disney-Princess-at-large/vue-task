import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Find from "@/views/Find.vue";
import My from "@/views/My.vue";
import NotFound from "@/views/NotFound.vue";
import Part from "@/views/Part.vue";
import Ranking from "@/views/Second/Ranking.vue";
import Recommend from "@/views/Second/Recommend.vue";
import SongList from "@/views/Second/SongList.vue";

const routes = [
  {
    path: "/",
    redirect: "/find",
  },
  {
    path: "/find",
    component: Find,
    children: [
      {
        path: "ranking",
        component: Ranking,
      },
      {
        path: "recommend",
        component: Recommend,
      },
      {
        path: "songList",
        component: SongList,
      },
    ],
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
    path: "/part/:username", // 有:的路径代表要接收具体的值
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
