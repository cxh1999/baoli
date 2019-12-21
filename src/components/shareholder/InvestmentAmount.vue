<template>
  <el-dialog class="big-dialog AddAccessControl" title="编辑 XX会员名称   XX股东入股金额" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="80px" class="demo-formData">
      <el-form-item label="入股金额" prop="money">
        <el-input v-model="formData.money"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">确认</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddAccessControl',
  data () {
    return {
      showFlag: false,
      formData: {
        money: 50000,
      },
      rules: {
        money: [
          { required: true, message: '请输入入股金额', trigger: 'blur' }
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
  .AddAccessControl {

  }
</style>
