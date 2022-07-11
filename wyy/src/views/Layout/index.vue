<template>
  <div style="padding-bottom: 50px">
    <van-nav-bar :title="$route.meta.title" />
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "MyLayout",
  data() {
    return {
      // title:"",
    };
  },
  mounted() {
    // console.log(this.$route);
  },
  watch: {
    // $route(newval){
    //     console.log(newval);
    //     this.title = newval.meta.title;
    // }
  },
};
</script>

<style>
</style>