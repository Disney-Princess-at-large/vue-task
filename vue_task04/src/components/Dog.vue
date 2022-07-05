<template>
  <div class="my_div">
    <img :src="obj.dogImgUrl" alt="" />
    <p @click="color(obj.dogName)" :style="{background:bgcolor}">{{ obj.dogName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
        bgcolor:''
    }
  },
  props: {
    obj: {
      type: Object,
    },
  },
  methods:{
    color(name){
        this.bgcolor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
        this.$emit('name',name)
    }
  }
}
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>
