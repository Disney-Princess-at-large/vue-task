<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      :class="{ current: indexnum == item.componentName }"
      v-for="(item, index) in list"
      :key="index"
      @click="getindex(item.componentName)"
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
  props: {
    list: {
      type: Array,
      validator(val) {
        if (val.length >= 2 && val.length <= 5) {
          return true;
        }
        return false;
      },
    },
  },
  data() {
    return {
      indexnum: 'MyGoodsList',
    };
  },
  methods: {
    getindex(index) {
      this.indexnum = index;
      this.$emit("changeTab", index);
    },
  },
};
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