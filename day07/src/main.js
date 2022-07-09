import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import NotFound from '@/views/NotFound'
import Recommend from '@/views/Second/Recommend'
import Ranking from '@/views/Second/Ranking'
import SongList from '@/views/Second/SongList'
import FirstSing from '@/views/Three/FirstSing'
import SecondSing from '@/views/Three/SecondSing'
import ThridSing from '@/views/Three/ThridSing'


import VueRouter from 'vue-router'
// 在vue中，使用使用vue的插件，都需要调用Vue.use()
Vue.use(VueRouter)

Vue.config.productionTip = false
//创建路由规则数组
const routes = [
  {
    path: '/',
    redirect:"/find",
  },
  {
    path: "/find",
    name: "Find",
    component: Find,
    children:[
      {
        path: "recommend",
        component: Recommend,
      },
      {
        path: "ranking",
        component: Ranking,
        children:[
          {
            path: "firstsing",
            component: FirstSing,
          },
          {
            path: "secondsing",
            component: SecondSing,
          },
          {
            path: "thridsing",
            component: ThridSing,
          }
        ]
      },
      {
        path: "songlist",
        component: SongList
      }
    ]
  },
  {
      path: "/my",
      name: "My",
      component: My
  },
  {
      path: "/part",
      name: "Part",
      component: Part
  },
  {
    path: "/part/:name",
    component: Part
  },
  {
    path: "*",
    component:NotFound,
  }
]
//创建路由对象 -  传入规则
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
