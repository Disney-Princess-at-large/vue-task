<template>
  <div>
    <p>关注歌手</p>
    <p>发现精彩</p>
    <p>123</p>
    <p>加入我们</p>
    <p>id:{{$route.query.name}} --- {{$route.params.username}}</p>
    <p>{{$route.params}}</p>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$route);
  }
}
</script>

<style>

</style>