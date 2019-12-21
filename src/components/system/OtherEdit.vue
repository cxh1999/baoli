<template>
  <el-dialog class="big-dialog RepeatMallEdit" title="DT股东分红设置" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="140px" class="demo-formData"
             label-position="left">
      <el-form-item label="股东分红比例%" prop="bsName">
        <el-input v-model="formData.bsName" placeholder="股东分红比例%"></el-input>
      </el-form-item>
      <el-form-item label="股东分红回本率%" prop="name">
        <el-input v-model="formData.name" type="password" placeholder="股东分红回本率%"></el-input>
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
  name: 'RepeatMallEdit',
  props: {
    id: Number,
    type: String
  },
  data () {
    return {
      showFlag: false,
      formData: {
        bsName: '',
        name: '',
      },
      rules: {
        bsName: [
          { required: true, message: '请输入事业部名称', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入管理员姓名', trigger: 'blur' },
          { max: 16, min: 6, message: '长度在6到16为字符', trigger: 'blur' }
        ],
      },
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
  .RepeatMallEdit {

  }
</style>
