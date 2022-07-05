<template>
  <div>
    <h1>图书</h1>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
          <th>操作</th>
          <th>书本信息</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id">
          <td>{{ index+1 }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publisher }}</td>
          <td><a href="#" @click="delFn(item.id)">删除</a></td>
          <td><a href="#" @click="detailsFn(item.id)">详情</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    delFn(id) {
      this.$emit("delFn", id);
    },
    detailsFn(id) {
      this.$emit("detailsFn", id);
    },
  },
};
</script>

<style>
</style>