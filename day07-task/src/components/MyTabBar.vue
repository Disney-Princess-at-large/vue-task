<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(item, index) in arr"
      :key="index"
      @click="change(item.componentName)"
      :class="{ current: item.componentName == active }"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'MyGoodsList',
    }
  },
  props: {
    arr: {
      type: Array,
      required: true,
      validator(value) {
        // value就是接到数组
        if (value.length >= 2 && value.length <= 5) {
          return true // 符合条件就return true
        } else {
          console.error('数据源必须在2-5项')
          return false
        }
      },
    },
  },

  methods: {
    change(val) {
      this.$parent.comName = val
      this.active = val
    },
  },
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
