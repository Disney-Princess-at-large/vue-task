<template>
<div class="main">
     <button @click="comName = 'Phone'">手机注册</button>
      <button @click="comName = 'Email'">邮箱注册</button>
  <div>
    <component :is="comName"></component>
  </div>
</div>
</template>
<script>
import Phone from "./components/Phone.vue"
import Email from "./components/Email.vue"
  export default {
    data() {
      return {
      comName:''  
      };
    },
    components:{
      Phone,
      Email
    }
  };
</script>

<style>
body{
 background-color:#ccc;
}
.main{
  width:400px;
  height:600px;
  margin: 20px auto;
  background-color: #fff;
}
</style>