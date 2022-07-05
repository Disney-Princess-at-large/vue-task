<template>
  <div>
    <h1>图书管理列表</h1>
    <div class="info">
    <input type="text"  placeholder="按书名检索" @keydown.enter="enter" v-model='bName'/>
     书名：<input type="text" placeholder="请输入书名" v-model="bookObj.bookname"/>
     作者：<input type="text" placeholder="请输入作者"  v-model="bookObj.author" />
     出版社：<input type="text" placeholder="请输入出版社" v-model="bookObj.publisher"/>
      <button class="add" id="add" @click="addFn">新增</button>
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
        <MyTr :list='list'></MyTr>
    </table>
  </div>
</template>

<script>
import MyTr from "./components/MyTr.vue"
export default {
 data(){
        return{
        // list:[],
        bName:"",
        bookObj:{
        bookname:"",
        author:"",
        publisher:"",
        },
        list:{}
        } 
    },
  components: {
    MyTr
  },
  mounted() {
  //渲染列表
 this.$axios({
    url:"/api/getbooks",
    method:"GET",
    params:{}
   }).then(res =>{
    // console.log(res);
    this.list=res.data.data
   })
},
  methods:{
    //添加图书功能
    addFn(){
    if(this.bookObj.bookname.trim().length == 0 || this.bookObj.author.trim().length == 0 ||this.bookObj.publisher.trim().length == 0) {
    return  alert('请填写完整的图书信息！');
   } 
   document.getElementById('add').disabled='true'
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
    location.reload(true)
    if (res.status !== 201) return alert(res.data.msg)
    // console.log(111);
   })
    },
    enter() {
       if (this.bName.trim().length === 0)
        return alert('请输入书名')
     this.$axios({
        url: "/api/getbooks",
        // method: "GET",
        params: { // 都会axios最终拼接到url?后面
            bookname: this.bName
        }
      }).then(res => {
          // console.log(res.data.data);
          if(res.data.data.length==0) return('不存在此图书')
          this.list=res.data.data
          // console.log(this.list);
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