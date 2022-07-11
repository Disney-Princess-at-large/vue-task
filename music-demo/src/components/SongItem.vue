<template>
  <van-cell :title="name" :label="author + ' - ' + name" center>
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <van-icon name="play-circle-o" size="0.5rem" @click="playBtn" />
    </template>
  </van-cell>
</template>
<!-- item.song.artists[0].name -->
<script>
import { getSongByIdAPI } from '@/api'
export default {
  props: {
    name: String, //歌名
    author: String, //作者
    id: Number, //id---铺垫播放音乐
  },
  methods: {
    playBtn() {
      this.$router.push({
        path:'/play',
        query:{
          id:this.id,
        }
      })
    },
  },
}
</script>

<style scoped>
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
