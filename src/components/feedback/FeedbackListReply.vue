<template>
  <el-dialog class="big-dialog AddAccessControl" title="回复" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="80px" class="demo-formData">
      <el-form-item label="回复内容" prop="name">
        <tinymce v-model="formData.content"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">立即创建</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import Tinymce from 'components/tinymce/tinymce'
export default {
  name: 'AddAccessControl',
  components: { Tinymce },
  data () {
    return {
      showFlag: false,
      formData: {
        content: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入回复内容', trigger: 'blur' }
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
