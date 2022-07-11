<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      shape="round"
      @input="inputFn"
    />
    <div class="search_wrap" v-if="mate_list.length === 0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span
          class="hot_item"
          v-for="(item, index) in hot_list"
          :key="index"
          @click="valFn(item.first)"
          >{{ item.first }}</span
        >
      </div>
    </div>

    <!-- 匹配结果 -->
    <div class="search_wrap" v-else>
      <p class="hot_title">匹配结果</p>
      <div class="hot_name_wrap">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- 匹配列表 -->
          <SongItem
            v-for="item in mate_list"
            :key="item.id"
            :name="item.name"
            :author="item.ar[0].name"
            :id="item.id"
          ></SongItem>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultListAPI } from '@/api'
import SongItem from '@/components/SongItem.vue'
export default {
  data() {
    return {
      value: '',
      hot_list: [], //热搜关键词
      mate_list: [], //匹配列表
      loading: false,
      finished: false,
      page: 1,
      timeId: null,
    }
  },
  components: {
    SongItem,
  },
  async created() {
    const res = await hotSearchAPI()
    this.hot_list = res.data.result.hots
  },
  methods: {
    async valFn(val) {
      this.page = 1
      this.value = val //选中的关键词显示到搜索框
      const res = await this.getList()
      this.mate_list = res.data.result.songs
    },
    async inputFn() {
      // 防抖---
      if (this.timeId) {
        clearTimeout(this.timeId)
      }
      this.timeId = setTimeout(async () => {
        this.page = 1
        this.finished = false
        // 若输入框中没有值  则清空mate_list的值 阻止网络请求
        if (this.value.length === 0) {
          this.mate_list = []
          return
        }
        const res = await this.getList()
        // 判断有没有数据返回----没有则置空数组
        if (res.data.result.songs === undefined) {
          return (this.mate_list = [])
        }
        this.mate_list = res.data.result.songs
      }, 600)
    },

    async onLoad() {
      this.page++
      const res = await this.getList()
      if (res.data.result.songs === undefined) {
        // 判断是否还有“更多”数据----若没有了则把finished置位true 则触底也不会继续执行onLoad
        return (this.finished = true)
      }

      // 拼接数据赋值给原数组
      this.mate_list = [...this.mate_list, ...res.data.result.songs]
      // loading值为false时才会触发onload事件
      this.loading = false
    },
    async getList() {
      return await searchResultListAPI({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1) * 20,
      })
    },
  },
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
