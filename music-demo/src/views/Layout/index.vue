<template>
  <div class="main">
    <!-- 头部navbar -->
    <van-nav-bar :title="activeTitle" :fixed="true" />
    <!-- 二级路由 -->
    <router-view></router-view>
    <!--  route 是否开启路由模式   -->
    <van-tabbar route>
      <!-- 点击后跳转的目标路由对象，同 vue-router 的 to 属性 -->
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title, //顶部导航要获取的title  （默认获取当前路由meta中的title属性
    }
  },
  // 监视路由切换 ---切换时更改标题
  watch: {
    $route() {
      this.activeTitle = this.$route.meta.title //提取切换后的路由title赋值给title
    },
  },
}
</script>

<style>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
