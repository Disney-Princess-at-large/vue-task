<template>
  <div>
  <MyTable :arr='list'>
    <template #header>
       <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
    </template>
    <template #body="scope">
      <td>{{scope.row.id}}</td>
        <td>{{scope.row.goods_name}}</td>
        <td>{{scope.row.goods_price}}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-focus
            v-model="scope.row.inputValue"
            v-if="scope.row.inputVisible"
             @blur="scope.row.inputVisible = false"
             @keydown.enter="enterFn(scope.row)"
             @keydown.esc="scope.row.inputValue = ''"
          />
          <button class="btn btn-primary btn-sm add-tag" v-else   
          @click="scope.row.inputVisible = true">+Tag</button>
       <span v-for="(str, ind) in scope.row.tags" :key="ind"
       class="badge badge-warning result" >
        {{ str }}</span></td>
        <td>
             <button class="btn btn-danger btn-sm main" @click="delFn(scope.row.id)">删除</button>
              <button class="btn btn-success btn-sm">编辑</button>
        </td>
    </template>
  </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue"
export default {
 data() {
    return {
     list:[], 
     }
 },
 created(){
  this.$axios({
    url:"/api/goods"
  }).then((res)=>{
    console.log(res);
    this.list=res.data.data
  })
},
components:{
  MyTable  
},
methods:{
   delFn(id) {
  const index=this.list.findIndex(ele => ele.id==id)
  this.list.splice(index,1)
 },
 enterFn(obj){
  if(obj.inputValue.trim().length ==0){
    return ("请输入数据")
  }
  obj.tags.push(obj.inputValue)
  obj.inputValue=''
 }
}
}
</script>

<style>
.result{
  margin-right: 5px;
}
.main{
margin-right: 5px;
}
</style>