module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // postcss作用: 是对css代码做降级处理
      // postcss-pxtorem: 自动把所有代码里的css样式的px, 自动转rem
      // 能够把所有元素的px单位转成Rem
      // rootValue: 转换px的基准值。
      // 例如一个元素宽是75px，则换成rem之后就是2rem。
      rootValue: 37.5,
      propList: ['*'],
    },
  },
}
