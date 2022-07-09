import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
// Vue.directive('gfocus', {
//   inserted(ele) {
//     ele.focus()
//   }
// })
Vue.directive('focus', {
  inserted(ele) {
    ele.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
