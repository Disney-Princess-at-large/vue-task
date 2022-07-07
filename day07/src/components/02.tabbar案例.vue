<template>
  <div>
     <MyHeader :background="'blue'" :color="'white'" title="TabBar案例"></MyHeader>
     <!-- 主体部分动态组件的切换 -->
      <div style="margin-top:45px">
      <component :is="comName"></component>
    </div>
     <MyTabBar :list="tabList"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyTabBar from './components/MyTabBar.vue'
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue' 
import MyUserInfo from './views/MyUserInfo.vue'
export default {
  data () {
    return {
      comName:'MyGoodsList',
      tabList: [
    {
        iconText: "icon-shangpinliebiao",
        text: "商品列表",
        componentName: "MyGoodsList"
    },
    {
        iconText: "icon-sousuo",
        text: "商品搜索",
        componentName: "MyGoodsSearch"
    },
    {
        iconText: "icon-user",
        text: "我的信息",
        componentName: "MyUserInfo"
    }
] 
    }
  },
components:{
  MyHeader,
  MyTabBar,
  MyGoodsList,
  MyGoodsSearch,
  MyUserInfo
}
}
</script>

<style>

</style>