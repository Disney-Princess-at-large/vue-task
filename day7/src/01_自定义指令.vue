<template>
  <div>
    <input type="text" v-gfocus v-number="val" v-model="val" />
    <!-- <input type="text" v-focus /> -->
    <p @click="color" v-color="colorStr">点我改变颜色</p>
  </div>
</template>

<script>
// 目标: 创建 "自定义指令", 让输入框自动聚焦
// 1. 创建自定义指令
// 全局 / 局部
// 2. 在标签上使用自定义指令  v-指令名
// 注意:
// inserted方法 - 指令所在标签, 被插入到网页上触发(一次)
// update方法 - 指令对应数据/标签更新时, 此方法执行
export default {
  data() {
    return {
      colorStr: "yellow",
      val: "",
    };
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    color: {
      inserted(el, binding) {
        el.style.color = binding.value;
      },
      update(el, binding) {
        console.log(el);
        console.log(binding);
        el.style.color = binding.value;
      },
    },
    number: {
      update(el, binding, vnode) {
        console.log(el);
        console.log("@", binding.expression);
        console.log(vnode);
        el.value = el.value.replace(/[^\d.]/g, "");
        // el.context[binding.]
        vnode.context.val = el.value;
      },
    },
  },
  methods: {
    color() {
      this.colorStr = "green";
    },
  },
};
</script>

<style>
</style>
