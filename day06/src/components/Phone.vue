<template>
 <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
 <el-form-item label="手机号码">
 <!-- <el-input type="text" v-model="ruleForm.phone" placeholder="手机号码"></el-input> -->
 <slot name="phone"></slot>
</el-form-item>
 <el-form-item label="密码">
 <el-input type="password" v-model="ruleForm.pass" placeholder="密码"></el-input>
</el-form-item>
 <el-form-item label="确认密码">
 <el-input type="password" v-model="ruleForm.checkPass" placeholder="确认密码"></el-input>
</el-form-item>
 <slot name="phone"></slot>
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
 phone: ''
 },
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