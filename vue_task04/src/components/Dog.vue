<template>
  <div class="box">
    <img :src="src" alt="">
    <p>这是一条Dog</p>
  </div>
</template>

<script>
import imgSrc from '@/123.jpg'
export default {
    data() {
        return {
            src: imgSrc
        }
    },
}
</script>

<style scoped>
.box{
    width: 300px;
    height: 350px;
    border: 1px solid #000;
    display: inline-block;
}
p{
    text-align: center;
}
img{
    width: 300px;
}
</style>