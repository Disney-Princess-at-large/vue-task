<template>
  <div>
    <h4>选择所在地区（实名认证主体所在地）</h4>
    <el-radio v-model="radio" label="1">中国大陆</el-radio>
    <el-radio v-model="radio" label="2">中国香港</el-radio>
    <p>手机号码</p>
    <slot name="phone"></slot>
    <br /><br />
    <el-input
      v-model="input"
      placeholder="请输入验证码"
      class="short"
    ></el-input>
    <el-button type="primary">发送验证码</el-button>
    <br />

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm "
    >
      <el-form-item  prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="请输入密码"
          class="left"
        ></el-input>
      </el-form-item>
      <el-form-item  prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="请确认密码"
          class="left"
        ></el-input>
      </el-form-item>
    </el-form>

    <p>验证码</p>
    <input type="text" />
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      radio: '1',
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style>
.box {
  width: 250px !important;
}
.short {
  width: 150px !important;
}
</style>
