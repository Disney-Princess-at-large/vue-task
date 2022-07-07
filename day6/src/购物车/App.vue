<template>
  <div>
    <MyHeader />
    <MyGoods v-for="item in list" :key="item.id" :obj="item" />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyGoods from "./components/MyGoods.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios({
      url: "/api/cart",
    }).then((res) => {
      console.log(res.data.list);
      this.list = res.data.list;
    });
  },
  methods: {},
};
</script>

<style>
</style>
