<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>数量值{{count}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected: isSel =='all'}"  href="javascript:;"  @click="change('all')">全部</a>
      </li>
      <li>
        <a :class="{selected: isSel =='no'}" href="javascript:;"
        @click="change('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected: isSel =='yes'}" href="javascript:;" 
        @click="change('yes')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clear" >清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isSel:'all',
    }
  },
   props:{
    arr:{
      type:Array,
      default:()=>[]
    }
  },
  methods: {
    change(val){
    this.isSel=val
    this.$emit("filterData",val)
    },
    clear(){
      this.$emit("clear")
    }
  },
 computed:{
  count(){
 if(this.isSel =='no'){
   return this.arr.filter((ele) =>!ele.isDone).length
 }else if(this.isSel =='yes'){
     return this.arr.filter((ele) =>ele.isDone).length
 }else{
  return this.arr.length
 }
  // return this.arr.length
  }
}
}
</script>