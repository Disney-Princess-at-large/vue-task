<template>
  <div>
    <div class="footer_wrap">
      <p @click="btn('/find')">发现音乐</p>
    <p @click="btn1('my')">我的音乐</p>
      <router-link to="/part">朋友</router-link>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    btn(fPath){
      this.$router.push({
        path: fPath,
        query:{id:1}
      })
    },
    btn1(fName){
      this.$router.push({
        name:fName,
        params:{age:20}
      })
    }
  }
};
</script>

<style scoped>
/* 省略了 其他样式 */
.footer_wrap .router-link-active{
  color: white;
  background: black;
}
</style>