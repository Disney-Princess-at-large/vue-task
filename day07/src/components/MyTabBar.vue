<template>
  <div class="my-tab-bar">
  	<div class="tab-item" :class="{current : item.componentName == currentIndex}"
    v-for="item in list" :key="item.componentName" @click="changeBtn(item.componentName)">
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex:'MyGoodsList'
    }
  },
  props:{
    list:{
      type:Array,
      required:true,//必填
      validator(val){
      if(val.length>=2 &&  val.length<=5){
      return true
     }
      return false
      }
    }
  },
  methods: {
   changeBtn(val) {
   //val记录点击的组件名
   this.currentIndex =val
   this.$parent.comName=val
   }
  },
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}
    
.current {
  color: #1d7bff;
}
</style>