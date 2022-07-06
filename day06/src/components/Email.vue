<template>
<el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
 <el-form-item label="电子邮箱">
 <!-- <el-input type="text" v-model="ruleForm.emil" placeholder="电子邮箱"></el-input> -->
  <slot name="email"></slot>
 </el-form-item>
 <el-form-item label="密码">
<el-input type="password" v-model="ruleForm.pass" placeholder="密码"></el-input>
</el-form-item>
 <el-form-item label="确认密码">
 <el-input type="password" v-model="ruleForm.checkPass" placeholder="确认密码"></el-input>
 </el-form-item>
 <slot name="emil"></slot>
 <el-form-item>
 <el-button>提交</el-button>
 <el-button>重置</el-button>
 </el-form-item>
 </el-form>
</template>
<script>
export default {
 data() {
 return {
 ruleForm: {
 pass: '',
 checkPass: '',
 emil: ''
 }
};
 },
}
</script>

<style scoped>
.demo-ruleForm {
margin: 100px auto;
width: 500px;
}
</style>