<template>
  <div>
    <p>关注明星</p>
    <p>发现精彩</p>
    <p>寻找伙伴</p>
    <p>加入我们</p>
    <p>
      人名: {{ $route.params.name }}
      --
      {{ $route.params }}
    </p>
    <p>id:{{ $route.query.id }}{{$route.query}}</p>

    <!-- <p>id:{{ $route.query.id }}</p> -->
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>