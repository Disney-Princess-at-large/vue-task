<template>
  <div>
      <div class="nav_main">
      <router-link to="/find/ranking/firstsing">妈妈的话</router-link>
      <router-link to="/find/ranking/secondsing">爱你</router-link>
      <router-link to="/find/ranking/thridsing">七里香</router-link>
      </div>
      <div style="1px solid red;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name:"RanKing"
}
</script>

<style scoped>
.nav_main {
  background-color: skyblue;
  color: white;
  padding: 10px 0;
}
.nav_main a {
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 12px;
  margin: 7px 17px 0;
  padding: 0px 15px 2px 15px;
  height: 20px;
  display: inline-block;
  line-height: 20px;
  border-radius: 20px;
}
.nav_main a:hover {
  background-color: brown;
}
.nav_main .router-link-active{
  background-color: brown;
}
</style>