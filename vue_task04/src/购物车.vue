<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isAll" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <MyTr v-for="(item, index) in goodList" :key="index" :obj="item"></MyTr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">总件数 ： {{ count }} 总价格：{{ allPrice }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import MyTr from '@/components/MyTr.vue'
export default {
  data() {
    return {
      goodList: [
        {
          name: '诸葛亮',
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: '蔡文姬',
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: '妲己',
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: '鲁班',
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    }
  },
  components: {
    MyTr,
  },
  computed: {
    isAll: {
      get() {
        return this.goodList.every((item) => item.checked)
      },
      set(val) {
        this.goodList.forEach((item) => (item.checked = val))
      },
    },
    count() {
      return this.goodList.reduce((sum, item) => {
        if (item.checked) {
          // console.log(item.num);
          sum += +item.num
        }
        return sum
      }, 0)
    },
    allPrice() {
      return this.goodList.reduce((sum, item) => {
        if (item.checked) {
          // console.log(item);
          sum += item.num*item.price
        }
        return sum
      }, 0)
    },
  },
}
</script>

<style></style>
