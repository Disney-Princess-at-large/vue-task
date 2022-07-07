<template>
<!-- ----------------------动态样式 -->
  <div class="my-header" :style="{ backgroundColor: background, color }">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    background: String,//必须传入字符串
    color: {
      type: String,//必须传入字符串
      default: '#fff',//默认颜色白色
    },
    title: {
      type: String,
      required: true,//必须传入---否则报错
    },
  },
}
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
