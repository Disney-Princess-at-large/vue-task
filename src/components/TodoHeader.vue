<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="name"
      @keydown.enter="enter"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    enter() {
      if (this.name.length == 0) {
        return alert("请输入内容");
      }
      this.$emit("add", this.name);
      this.name = "";
    },
  },
  computed: {
    isAll: {
      set(val) {
        return this.$parent.list.forEach((ele) => (ele.isDone = val));
      },
      get() {
        return this.$parent.list.every((ele) => ele.isDone == true);
      },
    },
  },
};
</script>