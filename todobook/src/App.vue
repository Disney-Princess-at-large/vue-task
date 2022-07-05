<template>
  <div>
    <h1>图书管理列表</h1>
    <div class="info">
     书名：<input type="text" v-model="book.bookname"/>
     作者：<input type="text" v-model="book.author"/>
     出版社：<input type="text" v-model="book.publisher"/>


      <button class="add" @click.prevent="addFn">新增</button>
    </div>
    <div class="info">
      搜索：<input type="text" @keydown.enter="searchFn" v-model="bookname">      
    </div>

    <h1>图书</h1>
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
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.bookname}}</td>
          <td>{{item.author}}</td>
          <td>{{item.publisher}}</td>
          <td><button style="background-color:#721c24" @click="del(item.id)">删除</button>
          <button @click="detail(item.id)">详情</button></td>
        </tr>
      </tbody>
      <tfoot v-if="list.length <= 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
    </table>
  </div>
</template>

<script>
    
    export default {
      data(){
        return{
          list:[],
          bookname:"",
          book:{
            bookname:"",
            author:"",
            publisher:"",
          }
        }
      },
      //创建VM方法
      created() {
        this.getList();
      },
      methods:{
        //获取数据，渲染列表
        getList(res = {}){
          this.$axios({
            url: "/api/getbooks",
            params:res,
          }).then((res) => {
            // console.log(res);
            this.list = res.data.data;
            // console.log(this.list);
          })
        },
        //搜索
        searchFn(){          
            const res = {}; //获取搜索框内容
            this.bookname ? res.bookname = this.bookname : "";
            this.getList(res) //传参重新渲染                  
        },
        //新增数据
        addFn(){
          if (
            !this.book.bookname.trim() ||
            !this.book.author.trim() ||
            !this.book.publisher.trim()
          ) {
            return alert("请输入内容");
          }
          this.$axios({ //发送数据
            url:"/api/addbook",
            method:"POST",
            data:{
              ...this.book,
              appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
            }
          }).then((res) => {
            alert(res.data.msg);
            this.book.bookname =""            
            this.book.author = "";
            this.book.publisher = "";
            if (res.data.status == 200 || res.data.status == 201) {
              this.getList();
            }            
          })
        },
        //删除
        del(id){
          this.$axios({
            url:"/api/delbook",
            params:{id}
          }).then((res) => {
            alert(res.data.msg);
            this.getList();
          })
        },
        //查看详情
        detail(id) {
          this.$axios({
            url: "/api/getbooks",
            params: { id },
          }).then((res) => {
            console.log(res.data.data);
            const info = res.data.data[0];
            alert(
              `作者：${info.author}; 出版社：${info.publisher}; 书名：${info.bookname}`
            );
          });
        }
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
.add{
  margin-left: 10px;
}
button{
  width: 60px;
  height: 25px;
  background-color: #004085;
  outline: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 10px;
}

</style>
