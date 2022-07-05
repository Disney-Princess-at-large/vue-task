<template>
  <div>
    <h1>图书管理列表</h1>
    <div class="info">
      书名：<input type="text" v-model="obj.bookname" /> 作者：<input
        type="text"
        v-model="obj.author"
      />
      出版社：<input type="text" v-model="obj.publisher" />

      <button class="add" @click="addFn">新增</button>
      <br /><br /><br />
      <input
        type="text"
        placeholder="请输入书名查询"
        v-model="bookname"
        @keydown.enter="findFn"
      />
      <button class="add" @click="findFn">查询</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookname: "",
      obj: {
        bookname: "",
        author: "",
        publisher: "",
      },
    };
  },
  methods: {
    findFn() {
      this.$emit("findFn", this.bookname);
      this.bookname = "";
    },
    addFn() {
      if (
        !this.obj.bookname.trim() ||
        !this.obj.author.trim() ||
        !this.obj.publisher.trim()
      ) {
        return alert("内容不能为空");
      }
      this.$emit("addFn", this.obj);
      this.obj.bookname = "";
      this.obj.author = "";
      this.obj.publisher = "";
    },
  },
};
</script>

<style>
</style>