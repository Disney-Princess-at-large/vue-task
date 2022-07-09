<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-focus
            v-if="scope.row.inputVisible"
            @blur="scope.row.inputVisible = false"
            v-model="scope.row.inputValue"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            style="margin-right: 8px"
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            删除
          </button>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            编辑
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  components: {
    MyTable,
  },
  created() {
    this.$axios({ url: "/api/goods" }).then(
      (res) => (this.list = res.data.data)
    );
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(val) {
      if (val.inputValue.trim() == "") {
        return alert("Please enter a value");
      }
      val.tags.push(val.inputValue);
      val.inputValue = "";
    },
  },
};
</script>

<style>
</style>