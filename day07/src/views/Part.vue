<template>
  <div>
      <p>关注明星</p>
      <p>发现精彩</p>
      <p>寻找伙伴</p>
      <p>加入我们</p>
      <p>人名: {{ $route.query.name }} 
         -- 
        {{$route.params.name}}
      </p>
  </div>
</template>

<script>
export default {
  name:'UserPart',
  
}
</script>

<style>

</style>