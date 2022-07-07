<template>
  <div class="my-counter">
    <button
      type="button"
      class="btn btn-light"
      :disabled="obj.goods_count <= 1"
      @click="obj.goods_count > 1 && obj.goods_count--"
    >
      -
    </button>
    <input type="number" class="form-control inp" v-model="obj.goods_count" />
    <button type="button" class="btn btn-light" @click="obj.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    obj: {
      deep: true,
      handler(val) {
        if (val.goods_count < 1) {
          val.goods_count = 1;
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>