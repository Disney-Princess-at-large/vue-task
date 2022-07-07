<template>
  <div class="main">
    <button @click="comName = 'Phone'">手机注册</button>
    <button @click="comName = 'Email'">邮箱注册</button>

    <keep-alive>
      <component :is="comName">
        <template v-slot:phone>
          <el-input
            v-model="input"
            placeholder="请输入手机号码"
            class="box"
          ></el-input>
        </template>
        <template v-slot:email>
          <el-input
            v-model="input"
            placeholder="请输入邮箱号"
            class="box"
          ></el-input>
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Phone from '@/components/phone.vue'
import Email from '@/components/Email.vue'
export default {
  data() {
    return {
      activeName: 'second',
      comName: 'Phone',
    }
  },
  components: {
    Phone,
    Email,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
  },
}
</script>

<style>
body {
  background-color: #ccc;
}
.main {
  width: 400px;
  height: 600px;
  background-color: #fff;
  margin: 20px auto;
}
.left{
  position: relative;
  rigth:0px;
}
</style>
