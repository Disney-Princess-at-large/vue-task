import Vue from 'vue'
import App from './App.vue'
import '@/mobile/flexible'
// import { createApp } from 'vue'
// 初始化样式
import '@/styles/reset.css'
import router from '@/router'
import { Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage ,Cell, CellGroup,Icon,Search,List } from 'vant'

// 引入api方法
import { recommendMusicAPI } from '@/api'

async function fn() {
  const res = await recommendMusicAPI() //关键字 await 让 JavaScript 引擎等待直到 promise 完成（settle）并返回结果。
}
fn()

Vue.use(VanImage)
Vue.use(Tabbar)
Vue.use(NavBar)
Vue.use(TabbarItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(Search)
Vue.use(List)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
