<template>
  <div>
    <h1>一级路由</h1>
    <p>首页新闻</p>
    <p>首页活动</p>



    <span @click="btn('/home/recommend')">点我二级路由recommend</span>
    <span @click="btn('/home/today')">点我二级路由Today</span>
    
    <!-- 二级路由挂载点 -->
    <router-view></router-view>
    
    <router-link to="/home/recommend/info">点我三级路由显示Info</router-link>
  </div>
</template>

<script>
export default {
  methods:{
    btn(fPath){
      this.$router.push({
        path: fPath,
      })
    }
  }
}
</script>

<style>

</style>