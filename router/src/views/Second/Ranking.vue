<template>
  <div>
    <!-- <p>飙升排行榜</p>
      <p>新歌排行榜</p>
      <p>热歌排行榜</p> -->
    <router-link to="/find/ranking/soarlist">飙升排行榜</router-link>
    <router-link to="/find/ranking/newlist">新歌排行榜</router-link>
    <router-link to="/find/ranking/hotlist">热歌排行榜</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>