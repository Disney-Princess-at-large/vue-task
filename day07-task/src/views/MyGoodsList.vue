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
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputVisible"
            v-focus
            v-model="scope.row.inputValue"
            @blur="scope.row.inputVisible = false"
            @keyup.enter="enterFn(scope.row)"
            @keyup.esc="escFn(scope.row)"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>

          <span
            v-for="(item, index) in scope.row.tags"
            :key="index"
            class="badge badge-warning span"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            删除
          </button>
          <button
            class="btn btn-success btn-sm"
            v-display
            :data-show="scope.row.show"
          >
            编辑
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '@/components/MyTable.vue'
export default {
  data() {
    return {
      list: [],
      newArr: [0, 1, 0, 0, 1, 0, 0, 1, 1, 0], //0隐藏 1显示
    }
  },
  components: {
    MyTable,
  },
  created() {
    this.$axios({
      url: '/api/goods', //GET请求的url地址
      method: 'GET',
    }).then((res) => {
      // 遍历新数组
      this.newArr.forEach((item, index) => {
        // 按照索引给每个对象添加show属性  值为对应新数组的每一项
        res.data.data[index].show = item
      })
      this.list = res.data.data
    })
  },

  methods: {
    // 删除功能
    delFn(id) {
      let index = this.list.findIndex((item) => item.id == id)
      this.list.splice(index, 1)
    },
    enterFn(obj) {
      if (obj.inputValue.trim().length === 0)
        return alert('Please enter a value')
      obj.tags.push(obj.inputValue)
      obj.inputValue = ''
    },
    escFn(obj) {
      obj.inputValue = ''
    },
  },

  directives: {
    display: {
      inserted(el) {
        let n = el.getAttribute('data-show')
        if (n == 0) {
          el.classList.add('show')
          el.style.display = 'none'
        }
      },
    },
  },
}
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
.span {
  margin-right: 5px;
}
.show {
  display: none;
}
</style>
