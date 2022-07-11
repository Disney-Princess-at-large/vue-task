<template>
  <div id="app">
    <h1>模拟hash路由实现</h1>
    <div>
      <a href="#/home">首页</a>&nbsp; 
      <a href="#/movie">电影</a>&nbsp;
      <a href="#/about">关于</a>&nbsp;
    </div>
    <div>
      <component :is="comName"></component>
    </div>
  </div>
</template>

<script>
import MyHome from "@/components/MyHome.vue";
import MyAbout from "@/components/MyAbout.vue";
import MyMovie from "@/components/MyMovie.vue";
export default {
  name: "App",
  data() {
    return {
      comName: "MyHome",
    };
  },
  components: {
    MyHome,
    MyAbout,
    MyMovie,
  },
  created() {
    window.onhashchange = () => {
      // console.log(val);
      // 根据不同的hash 值 改 comName 值
      // console.log(location.hash);
      switch (location.hash) {
        case "#/movie":
          this.comName = "MyMovie";
          break;
        case "#/home":
          this.comName = "MyHome";
          break;
        case "#/about":
          this.comName = "MyAbout";
          break;
      }
    };
  },
};
</script>
