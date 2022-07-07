<template>
  <div >
    <header>
      <span><h1 @click="comname ='PhoneRegister'">手机注册</h1></span>
      <span><h1 @click="comname ='EmailRegister'">邮箱注册</h1></span>
    </header>
    <div>
      <keep-alive>
        <component :is="comname"></component>
      </keep-alive>
    </div>    
  </div>
</template>

<script>
import PhoneRegister from '../components/PhoneRegister.vue'
import EmailRegister from '../components/EmailRegister.vue'
export default { 
  name:"UserRegister", 
  data(){    
    return{
      comname:"PhoneRegister"
    }
  },
  components: {
    PhoneRegister,EmailRegister
  }
}
</script>

<style scoped>

header {
  display: flex;
  justify-content: space-around;
}
h1{
  color: royalblue;
}

</style>
