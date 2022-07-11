<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="tagname"
      @input="inputFn"
    />
    <!-- 热门搜索 -->
    <template v-if="searchList.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="#ccc"
          text-color="#000"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in tags"
          :key="index"
          style="margin-right: 6px"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>
    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in searchList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        />
      </van-list>
    </template>
  </div>
</template>
<script>
import { getSearchTagApi, getSearchListApi } from "@/apis";
export default {
  data() {
    return {
      tags: [], // 热搜关键字
      tagname: "",
      searchList: [], // 搜索结果
      finished: false, // 未加载全部 (如果设置为true, 底部就不会再次执行onload, 代表全部加载完成),
      loading: false, // 加载中 (状态) - 只有为false, 才能触底后自动触发onload方法
      page: 1, // 当前搜索结果的页码
    };
  },
  created() {
    this.getSearchTag();
  },
  methods: {
    async getSearchTag() {
      try {
        const res = await getSearchTagApi();
        this.tags = res.data.result.hots;
        console.log(this.tags);
      } catch (e) {
        console.log("e", e);
      }
    },
    async clickFn(val) {
      // 点击热搜关键词
      try {
        this.tagname = val;
        const res = await getSearchListApi({
          keywords: this.tagname,
        });
        this.searchList = res.data.result.songs;
        this.$toast("获取成功");
      } catch (e) {
        this.$toast("获取失败");
      }
    },
    async inputFn() {
      if (this.tagname.trim().length == 0) {
        this.searchList = [];
        return;
      }
      const res = await getSearchListApi({
        keywords: this.tagname,
      });
      console.log(res);
      if (res.data.result.songs === undefined) {
        this.searchList = [];
        return;
      }
      this.searchList = res.data.result.songs;
    },
    async onLoad() {
      // 触底事件(要加载下一页的数据咯), 内部会自动把loading改为true
      this.page++;
      const res = await getSearchListApi({
        keywords: this.tagname,
      });
      this.searchList=[...this.searchList,...res.data.result.songs]
      this.loading =false
    },
  },
};
</script>