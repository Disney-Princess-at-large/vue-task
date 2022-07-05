<template>
  <button :class="`one-button-${type}`">{{ title }}</button>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'按钮组件'
        },
        type:{
            type:String,
            default:'primary',
            validator(val){
                return ['primary','success','warning','danger'].includes(val)
            }
        }
    }
}
</script>

<style scoped>
button {
  color: #000;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
  margin-right: 10px;
}
.one-button-primary {
  background-color: skyblue;
}
.one-button-success {
  background-color: hotpink;
}
.one-button-warning {
  background-color: yellow;
}
.one-button-danger {
  background-color: red;
}
</style>
