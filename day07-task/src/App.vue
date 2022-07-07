<template>
  <div>
    <MyHeader title="tabbar"></MyHeader>
    <div style="margin-top:45px">
    <!-- 动态组件切换 -->
      <component :is="comName"></component>
    </div>
    <MyTabBar :arr="tabList"></MyTabBar>
  </div>
</template>

<script>
// 组件
import MyHeader from './components/MyHeader.vue'
import MyTabBar from './components/MyTabBar.vue'

// 引入页面
import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'
export default {
   data() {
    return {
      // 动态组件切换
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
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },

}
</script>

<style></style>
