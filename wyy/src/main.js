import Vue from 'vue'
import App from './App.vue'
import '@/assets/mobile/flexible.js'
import '@/assets/style/reset.css'
import router from '@/router/index'
import { Tabbar, TabbarItem, NavBar, Grid, GridItem, Cell, CellGroup, Image as VanImage, Icon, Search, Tag, List, Toast } from 'vant';
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tag);
Vue.use(List);
Vue.use(Toast);

Vue.config.productionTip = false

// import {getRecommendListApi} from '@/apis'
// async function fn(){
//   try{
//     const res = await getRecommendListApi()
//     console.log(res);
//     console.log(aaaaa);
//   }catch(e){
//     console.log('error getting');
//   }
// }
// fn()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
