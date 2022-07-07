import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";

Vue.config.productionTip = false;
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;

Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
