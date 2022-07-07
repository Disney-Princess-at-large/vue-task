<template>
  <div>
      <!-- <input type="text" v-gfocus> -->
      <input type="text" v-focus>
      <br><br>
      <input type="text"  v-model='qwe' v-number="qwe">
      <p v-color="colorStr" @click="colorStr='red'">改变文字颜色</p>
      
  </div>
</template>

<script>
// inserted方法 - 指令所在标签, 被插入到网页上触发(一次)
// update方法 - 指令对应数据/标签更新时, 此方法执行
export default {
    data(){
        return {
          qwe:'',
           colorStr:'green'
        }
    },
    directives: {
    focus: {
            inserted(el){
                el.focus()
            }
    },
    color:{
       inserted(el,binding){
        el.style.color=binding.value
      },
      update(el,binding) {
         el.style.color=binding.value
      }
    },
    number:{
    inserted(el,binding,vnode){
       el.value=el.value.replace(/[^\d.]/g,"")
       vnode.context[binding.expression]= el.value
      },
    update(el,binding,vnode) {
      el.value=el.value.replace(/[^\d.]/g,"")  
      vnode.context[binding.expression]= el.value
      }
    }
    }
}
</script>

<style>

</style>
