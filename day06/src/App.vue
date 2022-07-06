<template>
<div class="main">
     <button @click="comName = 'Phone'">手机注册</button>
      <button @click="comName = 'Email'">邮箱注册</button>
  <div>
    <keep-alive>
    <component :is="comName">
      <template v-slot:phone>
         <el-input type="text" v-model="ruleForm.phone" placeholder="手机号码"></el-input>
      </template>
       <template v-slot:email>
       <el-input type="text" v-model="ruleForm.emil" placeholder="电子邮箱"></el-input>
      </template>
    </component>
    </keep-alive>
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
 /* body{
 background-color:#ccc;
} */
 .main{
  margin: 20px auto;
}  
</style>