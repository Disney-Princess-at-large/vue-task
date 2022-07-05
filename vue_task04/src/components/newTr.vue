<template>
  <tr>
    <td><input type="checkbox" v-model="obj.checked" /></td>
    <td>{{ obj.name }}</td>
    <td>{{ obj.price }}</td>
    <td>
      <button @click="obj.num <= 1 ? (obj.num = 1) : obj.num--">-</button
      >{{ obj.num }}<button @click="obj.num++">+</button>
    </td>
    <td>{{ obj.price * obj.num }}</td>
    <td><button @click="delFn(obj.name)">删除</button></td>
  </tr>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    // 删除功能
    delFn(val) {
      let index = this.$parent.goodList.findIndex((item) => item.name == val)
      this.$parent.goodList.splice(index, 1)
    },
  },
}
</script>

<style></style>
