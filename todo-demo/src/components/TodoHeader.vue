<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all" ></label> 
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keyup.enter="enter"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task:''
    }
  },
  methods:{
    enter(){
      if(this.task.length == 0)return alert("Please enter a task");
      this.$emit('add',this.task)
      // 清空输入框
      this.task = ''
    }
  },
  computed:{
    isAll:{
      get(){
        return this.$parent.list.every(item => item.isDone)
      },
      set(val){
        this.$parent.list.forEach(item => item.isDone = val)
      }
    }
  }
}
</script>