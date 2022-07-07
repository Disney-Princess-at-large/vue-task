<template>
  <div class="my-tab-bar">
  	<div class="tab-item">
      <!-- 图标 -->
      <span class="iconfont"></span>
      <!-- 文字 -->
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
    
.current {
  color: #1d7bff;
}
</style>