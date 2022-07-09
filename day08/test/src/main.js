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
import Music from "@/views/Third/Music.vue";

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
        children: [
          {
            path: "music",
            component: Music,
          },
        ],
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

// 目标: 路由守卫
// 场景: 当你要对路由权限判断时
// 语法: router.beforeEach((to, from, next)=>{//路由跳转"之前"先执行这里, 决定是否跳转})
// 参数1: 要跳转到的路由 (路由对象信息)    目标
// 参数2: 从哪里跳转的路由 (路由对象信息)  来源
// 参数3: 函数体 - next()才会让路由正常的跳转切换, next(false)在原地停留, next("强制修改到另一个路由路径上"),强制转换路径的时候注意加判断，否则容易出现死循环
// 注意: 如果不调用next, 页面留在原地
const isLogin = false; //判断是否登录
router.beforeEach((to, from, next) => {
  if (to.path === "/my" && !isLogin) {
    alert("请先登录");
    next(false);
  } else {
    next();
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
