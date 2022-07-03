<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label> 
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keydown.enter="enter"
    />
  </header>
</template>

<script>
export default {
 data() {
  return {
    task:""
  }
 },
 methods:{
  enter(){
    if(this.task.length ==0){
      return alert('请输入任务')
    }
    this.$emit('add',this.task)
    this.task=''
  }
 },
 computed: {
  isAll:{
    get(){
    return this.$parent.list.every(ele => ele.isDone)
    },
    set(checked){
     this.$emit("setChecked",checked)
    }
  }
 }
}
</script>