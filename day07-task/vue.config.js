const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true, //浏览器自动打开
  },
  lintOnSave: false, //关闭eslint检查
})
