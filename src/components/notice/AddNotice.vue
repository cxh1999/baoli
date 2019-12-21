<template>
  <el-dialog class="big-dialog addNotice" title="添加公告" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-formData" label-position="left">
      <el-form-item label="主题" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="发布对象" prop="check">
        <el-checkbox-group v-model="formData.check">
          <el-checkbox label="会员"></el-checkbox>
          <el-checkbox label="事业部"></el-checkbox>
          <el-checkbox label="专卖店"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="公告内容" prop="content">
        <tinymce v-model="formData.content"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">立即添加</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import Tinymce from 'components/tinymce/tinymce'

export default {
  name: 'addNotice',
  components: { Tinymce },
  data () {
    return {
      showFlag: false,
      formData: {
        name: '',
        content: '',
        check: []
      },
      rules: {
        name: [
          { required: true, message: '请输入主题', trigger: 'blur' },
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' },
        ],
        check: [
          { required: true, message: '请选择发布对象', trigger: 'blur' },
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
  .addNotice {

  }
</style>
