<template>
  <div>
      <button @click="comName = 'UserName'">账号密码填写</button>
      <button @click="comName = 'UserInfo'">个人信息填写</button>

      <p>下面显示注册组件-动态切换:</p>
      <div style="border: 1px solid black;">
          <component :is="comName"></component>
      </div>
  </div>
</template>

<script>

import UserName from './components/UserInfo.vue'
import UserInfo from './components/UserName.vue'
export default {
    data(){
        return {
            comName: "UserName"
        }
    },
    components: {
        UserName,
        UserInfo
    }
}
</script>