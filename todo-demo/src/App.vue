<template>
  <div class="todoapp">
    <!-- 自定义事件 -->
    <Header @add="addFn"></Header>
    <!-- 父传子 -->
    <Main :arr="showList" @del="delFn"></Main>
    <Footer :arr="list"
    @del="dataFn" @clear="clearFn"></Footer>
  </div>
</template>

<script>
// 引入组件
import Header from './components/TodoHeader.vue'
import Main from './components/TodoMain.vue'
import Footer from './components/TodoFooter.vue'
export default {
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      list:JSON.parse(localStorage.getItem('list') || []),
      getSel:'all'
    }
  },

  methods: {
    // 添加功能
    addFn(val) {
      let id =
        this.list.length <= 0 ? 100 : this.list[this.list.length - 1].id + 1
      this.list.push({
        id,
        name: val,
        isDone: false,
      })
    },

    // 删除功能
    delFn(id){
     let index = this.list.findIndex(item => item.id == id)
     this.list.splice(index, 1)
    },
    dataFn(val){
      this.getSel = val
    },
    clearFn(arr){
      this.list = arr
    }
  },
  computed: {
            showList(){
              if (this.getSel === 'yes') { // 显示已完成
                return this.list.filter(obj => obj.isDone === true)
              } else if (this.getSel === 'no') { // 显示未完成
                return this.list.filter(obj => obj.isDone === false)
              } else {
                return this.list // 全部显示
              }
            }
  },

  watch:{
    list:{
      deep: true,
      handler(val){
        localStorage.setItem('list',JSON.stringify(val || []))
      }
    }
  }
  
}
</script>

<style></style>
