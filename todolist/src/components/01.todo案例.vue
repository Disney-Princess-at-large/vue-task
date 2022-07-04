<template>
  <div class='todoapp'>
    <TodoHeader @add="addFn" @setChecked="setFn"></TodoHeader>
    <TodoMain :arr='showlist' @del="deleteFn"></TodoMain>
    <TodoFooter :arr='list' @filterData="dataFn" @clear="clearFn">
    </TodoFooter>
  </div>
</template>

<script>

import TodoHeader from "./components/TodoHeader.vue"
import TodoMain from "./components/TodoMain.vue"
import TodoFooter from "./components/TodoFooter.vue"
export default {
 data() {
    return {
      // list: [
      //   { id: 100, name: "吃饭", isDone: true },
      //   { id: 101, name: "睡觉", isDone: false },
      //   { id: 103, name: "打豆豆", isDone: true },
      // ],
      list:JSON.parse(localStorage.getItem("list")) || [],
      getSel:"all"
    };
  },
 components:{
  TodoHeader, 
  TodoMain,
  TodoFooter
 },
 methods:{
  addFn(val){
  const id=this.list[this.list.length-1] ? this.list[this.list.length-1].id+1 :100
  this.list.push({
  name:val,
  isDone:false,
  id
 })
  },
  deleteFn(id){
  const index=this.list.findIndex(ele =>ele.id == id)
  this.list.splice(index,1)
  },
  dataFn(val){
    this.getSel=val
  },
  clearFn(){
    this.list = this.list.filter(ele => ele.isDone == false)
  },
  setFn(val){
  this.list.forEach(ele => ele.isDone = val)
  }
 },
 computed:{
  showlist(){
 if(this.getSel =="no"){
  return this.list.filter(ele => !ele.isDone)
 }else if(this.getSel =="yes"){
   return this.list.filter(ele => ele.isDone)
 }else{
  return this.list
 }
 }
 },
 watch:{
  list:{
    deep:true,
    handler(val){
      localStorage.setItem("list",JSON.stringify(val || []))
    }
  }
 }
}
</script>

<style>

</style>