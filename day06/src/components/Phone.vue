<template>
<div>
 <h4>选择所在地区（实名认证主体所在地）</h4>
 <el-radio v-model="radio" label="1">中国大陆</el-radio>
<el-radio v-model="radio" label="2">中国香港</el-radio>
</div>
</template>

<script>
export default {
data() {
 return {
radio: '1',
 }
 },
}
</script>

<style></style>

<style>

</style>