<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/sort">分类</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/my">我的</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
a{
  margin-right: 10px;
}
</style>