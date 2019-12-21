<template>
  <el-dialog class="big-dialog FeedbackTypeEdit" :title="type==='add'?'添加':'编辑'" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="80px" class="demo-formData">
      <el-form-item label="类型名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')" v-if="type==='add'">立即添加</el-button>
        <el-button type="primary" @click="submitForm('formData')" v-else>立即修改</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'FeedbackTypeEdit',
  data () {
    return {
      showFlag: false,
      formData: {
        name: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入反馈类型', trigger: 'blur' }
        ],
      }
    }
  },
  props: {
    id: Number,
    type: String
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
  .FeedbackTypeEdit {

  }
</style>
