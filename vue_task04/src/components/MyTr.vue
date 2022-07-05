<template>
  <tbody>
    <tr v-for="item in arr" :key="item.id" v-show="!flag">
      <td>{{ item.id }}</td>
      <td>{{ item.bookname }}</td>
      <td>{{ item.author }}</td>
      <td>{{ item.publisher }}</td>
      <td>
        <el-button
          type="primary"
          icon="el-icon-delete"
          @click="delFn(item.id)"
          style="margin-right: 8px"
          size="mini"
        ></el-button>
        <el-button type="primary" primary size="mini" @click="findBook(item.id)"
          >详情</el-button
        >
        <el-dialog title="图书详情" :visible.sync="dialogTableVisible">
          <span>id：{{ show.id }}, </span>
          <span>书名：{{ show.bookname }}, </span>
          <span>作者：{{ show.author }}, </span>
          <span>出版社：{{ show.publisher }}, </span>
          <span slot="footer" class="dialog-footer"> </span>
        </el-dialog>
      </td>
    </tr>

    <tr v-for="(item, index) in list" :key="index" v-show="flag">
      <td>{{ item.id }}</td>
      <td>{{ item.bookname }}</td>
      <td>{{ item.author }}</td>
      <td>{{ item.publisher }}</td>
      <td>
        <el-button
          type="primary"
          icon="el-icon-delete"
          @click="delFn(item.id)"
          style="margin-right: 8px"
          size="mini"
        ></el-button>
        <el-button
          type="primary"
          primary
          size="mini"
          @click="dialogTableVisible = true"
          >详情</el-button
        >
        <el-dialog title="图书详情" :visible.sync="dialogTableVisible">
          <span>id：{{ item.id }}, </span>
          <span>书名：{{ item.bookname }}, </span>
          <span>作者：{{ item.author }}, </span>
          <span>出版社：{{ item.publisher }}, </span>
          <span slot="footer" class="dialog-footer"> </span>
        </el-dialog>
      </td>
    </tr>
  </tbody>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
export default {
  data() {
    return {
      arr: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      formLabelWidth: '120px',
      show:{
        id:'',
        bookname:'',
        author:'',
        publisher:''
      }
    }
  },
  props: {
    list: {
      type: Array,
    },
    flag: {
      type: Boolean,
    },
  },
  created() {},
  //   挂载后渲染图书
  mounted() {
    axios({
      url: '/api/getbooks', //GET请求的url地址
      params: {}, //针对GET请求的参数拼接
    }).then((res) => {
      if (this.flag) {
        // this.arr = this.list
        this.$parent.sFlag = true
        // console.log(this.list);
      }
      this.arr = res.data.data
      // console.log(res)
    })
  },

  methods: {
    // 删除图书
    delFn(id) {
      this.$confirm('此操作将永久删除该图书, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          })
          axios({
            url: '/api/delbook', //GET请求的url地址
            method: 'GET',
            params: { id }, //针对GET请求的参数拼接
            // 删除以后自动刷新页面
          }).then((res) => location.reload())
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    findBook(id) {
      this.dialogTableVisible = true
      let newArr = this.arr.filter(item => item.id == id)
      newArr.forEach(item => {
        this.show.id = item.id
        this.show.bookname = item.bookname
        this.show.author = item.author
        this.show.publisher = item.publisher
      })
    },
  },
}
</script>

<style scoped>
td,
th {
  border: 1px solid #b8daff;
}
td {
  padding: 10px;
  color: #666;
  text-align: center;
  font-size: 16px;
}
tbody tr {
  background: #fff;
}
tbody tr:hover {
  background: #e1ecf8;
}
tbody span {
  margin-right: 10px;
}
</style>
