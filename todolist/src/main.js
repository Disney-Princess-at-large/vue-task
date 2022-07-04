import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "./assets/styles/base.css";
import "./assets/styles/index.css";

//下载axios并引入axios
import axios from "axios";
// //全局配置基础地址
axios.defaults.baseURL = "http://www.liulongbin.top:3006";
Vue.prototype.$axios = axios;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
