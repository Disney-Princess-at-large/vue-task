<template>
  <div>
    <h1>一级路由</h1>
    <p>首页新闻</p>
    <p>首页活动</p>



    <router-link to="/home/recommend">点我二级路由recommend</router-link>
    
    <!-- 二级路由挂载点 -->
    <router-view></router-view>
    
    <router-link to="/home/recommend/info">点我三级路由显示Info</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>