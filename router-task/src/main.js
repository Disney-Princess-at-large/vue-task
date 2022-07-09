import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
// 1.引入vue-router
import VueRouter from 'vue-router'
import NotFound from '@/views/NotFound'

import Ranking from '@/views/Second/Ranking.vue'
import Recommend from '@/views/Second/Recommend.vue'
import SongList from '@/views/Second/SongList.vue'

// 三级路由
import Music from '@/views/Third/music.vue'
// 2.use配置---注册全局组件
Vue.use(VueRouter)
// 3.规则数组
const routes = [
  {
    path: '/', // 默认hash值路径
    redirect: '/find', // 重定向到/find
    // 浏览器url中#后的路径被改变成/find-重新匹配数组规则
  },
  {
    path: '/find',
    component: Find,
    name: 'find',
    children: [
      {
        path: 'ranking',
        component: Ranking,
        children: [
          {
            path: 'Music',
            component: Music,
          },
        ],
      },
      {
        path: 'recommend',
        component: Recommend,
      },
      {
        path: 'songList',
        component: SongList,
      },
    ],
  },
  {
    path: '/my',
    component: My,
    name: 'my',
  },
  {
    path: '/part',
    component: Part,
    name: 'part',
  },
  {
    path: '*',
    component: NotFound,
  },
]

// 生成路由对象
const router = new VueRouter({
  // routes是固定的key
  routes,
  mode: 'history', //不写默认hash
})
Vue.config.productionTip = false

// 目标: 路由守卫
// 场景: 当你要对路由权限判断时
// 语法: router.beforeEach((to, from, next)=>{//路由跳转"之前"先执行这里, 决定是否跳转})
// 参数1: 要跳转到的路由 (路由对象信息)    目标
// 参数2: 从哪里跳转的路由 (路由对象信息)  来源
// 参数3: 函数体 - next()才会让路由正常的跳转切换, next(false)在原地停留, next("强制修改到另一个路由路径上")

let flag = false
router.beforeEach((to, from, next) => {
  if(to.path === '/part' && !flag){
    alert('请登录')
    next(false)//阻止跳转
  }
  next()//继续执行
})

// 路由对象注入到vue实例中
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
