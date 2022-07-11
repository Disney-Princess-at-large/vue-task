<template>
  <div>
    <p class="title">推荐歌单</p>

    <div>
      <!-- layout布局 -->
      <van-row gutter="6">
        <van-col span="8" v-for="item in list" :key="item.id">
          <van-image
            width="100%"
            height="3rem"
            fit="cover"
            :src="item.picUrl"
          />
          <p class="music-name text">{{ item.name }}</p>
        </van-col>
      </van-row>
    </div>

    <p class="title">最新音乐</p>

    <!-- 单元格部分 -->
    <SongItem v-for="item in newArr" :key="item.id"
    :name="item.name" :author="item.song.artists[0].name"
    :id="item.id"></SongItem>
    
  </div>
</template>

<script>
// 调用封装的api
import { recommendMusicAPI, newMusicAPI } from '@/api' //推荐歌单
import SongItem from '@/components/SongItem.vue'
export default {
  data() {
    return {
      list: [], //推荐歌单信息
      newArr: [], //最新音乐数据
    }
  },
  components:{
    SongItem
  },
  async created() {
    const res = await recommendMusicAPI({
      limit: 6,
    })
    const newMusic = await newMusicAPI({
      limit: 20,
    })
    this.list = res.data.result
    this.newArr = newMusic.data.result
  },
}
</script>

<style>
.title {
  padding: 0.2666667rem 0 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}

.music-name {
  font-size: 12px;
  text-align: left;
  line-height: 20px;
  width: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  height: 37px;
}

.text {
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
}
</style>
