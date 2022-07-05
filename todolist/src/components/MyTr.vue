<template>
<tbody>
   <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.bookname}}</td>
          <td>{{item.author}}</td>
          <td>{{item.publisher}}</td>
          <td>
            <a href="#" @click.prevent='del(item.id)'>删除</a>
          <span>  |  </span>
           <a href="#" @click.prevent='findFn(item.id)'>详情</a>
          <!-- <a href="#" @click.prevent="findFn(item.id)>详情</a> -->
          </td>
        </tr>
</tbody>
</template>

<script>
export default {
data() {
    return {
     arr:[],
    }
},
props:['list'],
// mounted() {
//   //渲染列表
//  this.$axios({
//     url:"/api/getbooks",
//     method:"GET",
//     params:{}
//    }).then(res =>{
//     // console.log(res);
//     this.arr=res.data.data
//    })
// },
methods:{
  //删除功能
  del(id){
    this.$axios({
    url:"/api/delbook",
    method:"GET",
    params:{
      id
    }
   }).then(res =>{
    const index=this.arr.findIndex(ele =>ele.id == id);
    this.arr.splice(index,1);
    console.log(res);
     if (res.status == 200) return alert(res.data.msg)
   })
 },
 //详情
 findFn(id){
  this.$axios({
        url: "/api/getbooks",
        params: { id },
      }).then((res) => {
        const info = res.data.data && res.data.data[0];
        alert(
          `作者：${info.author}; 出版社：${info.publisher}; 书名：${info.bookname}`
        );
      });
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