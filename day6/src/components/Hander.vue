<template>
  <div>
    <button @click="comName = 'Phone'">手机注册</button>
    <button @click="comName = 'Email'">邮箱注册</button>
    <p>选择所在地区(实名认证主体所在地)</p>
    <input type="radio" name="area" />中国大陆
    <input type="radio" name="area" />中国香港
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import Phone from "./Phone.vue";
import Email from "./Email.vue";
export default {
  components: {
    Phone,
    Email,
  },
  data() {
    return {
      comName: "Phone",
    };
  },
};
</script>

<style>
</style>