<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="listshow" @delList="delFn"></TodoMain>
    <TodoFooter
      :count="count"
      @showSel="showSelFn"
      @clear="delChenckFn"
    ></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      // list: [
      //   { id: 100, name: "吃饭", isDone: true },
      //   { id: 201, name: "睡觉", isDone: false },
      //   { id: 103, name: "打豆豆", isDone: true },
      // ],
      list: JSON.parse(localStorage.getItem("list")) || [],
      getSel: "all",
    };
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        id,
        name: val,
        isDone: false,
      });
    },
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    showSelFn(val) {
      this.getSel = val;
    },
    delChenckFn() {
      this.list = this.list.filter((ele) => ele.isDone == false);
    },
  },
  computed: {
    count() {
      return this.list.filter((ele) => ele.isDone == false).length;
    },
    listshow() {
      if (this.getSel == "no") {
        return this.list.filter((ele) => ele.isDone == false);
      } else if (this.getSel == "yes") {
        return this.list.filter((ele) => ele.isDone == true);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler(val) {
        localStorage.setItem("list", JSON.stringify(val || []));
      },
    },
  },
};
</script>