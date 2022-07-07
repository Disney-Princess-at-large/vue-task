import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

// 全局注册自定义命令
Vue.directive('focus', {
  inserted(el) {
    el.focus()
  },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
