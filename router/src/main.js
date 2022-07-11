import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Find from './views/Find.vue'
import My from './views/My.vue'
import Part from './views/Part.vue'
import Recommend from './views/Second/Recommend.vue'
import Ranking from './views/Second/Ranking.vue'
import SongList from './views/Second/SongList.vue'
import HotList from './views/Second/HotList.vue'
import NewList from './views/Second/NewList.vue'
import SoarList from './views/Second/SoarList.vue'
import NotFound from './views/NotFound.vue'


Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    redirect: '/find'
  },
  {
    path: "/find",
    name: "Find",
    component: Find,
    children: [
      {
        path: "recommend",
        component: Recommend,

      },
      {
        path: "ranking",
        component: Ranking,
        children: [
          {
            path: 'soarlist',
            component: SoarList,
          },
          {
            path: 'hotlist',
            component: HotList,
          },
          {
            path: 'newlist',
            component: NewList,
          },

        ]
      },
      {
        path: "songlist",
        component: SongList
      },
    ]
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "/part/:name",
    component: Part
  },
  {
    path: "*",
    component: NotFound
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
const isLogin = true; // 登录状态(未登录)
router.beforeEach((to, from, next) => {
  if (to.path === "/my" && isLogin === false) {
    alert("请登录")
    next(false) // 阻止路由跳转
  } else {
    next() // 正常放行
  }
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
