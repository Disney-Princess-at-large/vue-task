<template>
  <div>
    <h1>图书管理列表</h1>
    <div class="info">
      <input
        type="text"
        placeholder="输入您要查找的图书"
        class="input"
        @keyup.enter="enter"
        v-model="sName"
      />

      书名：<input type="text" placeholder="请输入书名" v-model="bookname" />
      作者：<input type="text" placeholder="请输入作者" v-model="author" />
      出版社：<input
        type="text"
        placeholder="请输入出版社"
        v-model="publisher"
      />

      <el-button class="add" @click="addFn" ref="addBtn" :disabled="flag"
        >新增</el-button
      >
    </div>

    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
          <th>操作</th>
        </tr>
      </thead>

      <MyTr :list="list" :flag="sFlag"></MyTr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
import MyTr from '@/components/MyTr.vue'
export default {
  components: {
    MyTr,
  },
  data() {
    return {
      bookname: '',
      author: '',
      publisher: '',
      flag: false,
      sName: '',
      list: [],
      sFlag: false,
    }
  },
  methods: {
    // 添加图书
    addFn() {
      if (
        this.bookname.trim().length === 0 ||
        this.author.trim().length === 0 ||
        this.publisher.trim().length === 0
      )
        return alert('Please enter a book name')
      this.sFlag = false
      // 禁用按钮
      // this.$refs.addBtn.style.disabled = true
      this.flag = true
      axios({
        url: '/api/addbook', //POST请求的url地址
        method: 'POST',
        data: {
          bookname: this.bookname,
          author: this.author,
          publisher: this.publisher,
        }, //针对POST请求的参数拼接
      })
        .then((res) => {
          // 添加成功后弹框
          this.$message({
            message: '图书添加成功',
            type: 'success',
          })
          // 请求成功后关闭按钮禁用
          ;(this.flag = false),
            (this.bookname = ''),
            (this.author = ''),
            (this.publisher = '')
        })
        .catch((err) => {
          this.flag = false
          alert(err)
        })
    },

    enter() {
      if (this.sName.trim().length === 0)
        return alert('Please enter a book name')
      // console.log(this.sName)
      axios({
        url: '/api/getbooks', //GET请求的url地址
        method: 'GET',
        params: {
          bookname: this.sName,
        }, //针对GET请求的参数拼接
      }).then((res) => {
        // 判断是否有改图书
        if (res.data.data.length == 0) {
          this.$message({
            message: '搜索不到该图书',
            type: 'warning',
          })
        }
        //
        this.sFlag = true
        this.list = res.data.data
        // eventBus.$emit('list', this.list)
        this.sName = ''
      })
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #721c24;
}
h1 {
  text-align: center;
  color: #333;
  margin: 20px 0;
}
table {
  margin: 0 auto;
  width: 800px;
  border-collapse: collapse;
  color: #004085;
}
th {
  padding: 10px;
  background: #cfe5ff;

  font-size: 20px;
  font-weight: 400;
}
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
.info {
  width: 900px;
  margin: 50px auto;
  text-align: center;
}
.info input {
  width: 80px;
  height: 25px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #b8daff;
  padding-left: 5px;
}
.info button {
  width: 60px;
  height: 25px;
  background-color: #004085;
  outline: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}
.add {
  position: absolute;
  top: 113px;
  margin-left: 10px;
  text-align: center;
  line-height: 25px;
  color: #000;
  padding: 2px 9px !important;
}
.input {
  width: 150px !important;
  height: 25px !important;
}
</style>
