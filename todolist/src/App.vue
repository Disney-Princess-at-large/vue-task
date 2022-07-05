<template>
  <div>
    <h1>图书管理列表</h1>
    <div class="info">
    <input type="text"  placeholder="按书名检索" @keydown.enter="enter" v-model='bName'/>
     书名：<input type="text" placeholder="请输入书名" v-model="bookObj.bookname"/>
     作者：<input type="text" placeholder="请输入作者"  v-model="bookObj.author" />
     出版社：<input type="text" placeholder="请输入出版社" v-model="bookObj.publisher"/>
      <button class="add" @click="addFn">新增</button>
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
        <MyTr></MyTr>
    </table>
  </div>
</template>

<script>
import MyTr from "./components/MyTr.vue"
export default {
 data(){
        return{
        bName:"",
        bookObj:{
        bookname:"",
        author:"",
        publisher:""
        }
        } 
    },
  components: {
    MyTr
  },
  methods:{
    addFn(){
    if(this.bookObj.bookname.length == 0 || this.bookObj.author.length == 0 ||this.bookObj.publisher.length == 0) {
    return  alert('请填写完整的图书信息！');
   } 
    this.$axios({
    url:"/api/addbook",
    method:"POST",
    params:{},
     data: {
            bookname: this.bookObj.bookname,
            author: this.bookObj.author,
            publisher: this.bookObj.publisher
           }
     }).then(res =>{
    console.log(res);
    if (res.status !== 201) return alert(res.data.msg)
     location.reload()
    this.bookObj.bookname=''
    this.bookObj.author=''
    this.bookObj.publisher=''
   })
    },
    enter() {
     this.$axios({
        url: "/api/getbooks",
        method: "GET",
        params: { // 都会axios最终拼接到url?后面
            bookname: this.bName
        }
      }).then(res => {
          console.log(res);
          if(res.data.data.length=0) return('不存在此图书')
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #721c24;
}
h1 {
  position: relative;
  top:0px;
  left:272px;
  color: #333;
  margin: 20px 0;
}
table {
  position: relative;
  top:-8px;
  left:-51px;
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
  position: relative;
  top:-2px;
  left:-100px;
  width: 900px;
  font-size: 18px;
  margin: 50px auto;
  text-align: center;
}
.info input {
  width: 100px;
  height: 30px;
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
.add{
  margin-left: 10px;
}
</style>