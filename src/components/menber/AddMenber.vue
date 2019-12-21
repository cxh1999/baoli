<template>
  <el-dialog class="big-dialog AddMenber" title="添加600会员" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-formData" label-position="left">
      <el-form-item label="会员账号" prop="account">
        <el-input v-model="formData.account"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="分享人账号" prop="tAccount">
        <el-input v-model="formData.tAccount"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">立即添加</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>

export default {
  name: 'AddMenber',
  components: { },
  data () {
    return {
      showFlag: false,
      formData: {
        name: '',
        account: '',
        tAccount: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        tAccount: [
          { required: true, message: '请输入分享人账号', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
  .AddMenber {

  }
</style>
