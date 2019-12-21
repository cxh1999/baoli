<template>
  <el-dialog class="big-dialog RepeatMallEdit" :title="type==='add'?'添加等级':'复销商城修改'" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-formData"
             label-position="left">
      <el-form-item label="等级名称" prop="bsName">
        <el-input v-model="formData.bsName" placeholder="等级名称"></el-input>
      </el-form-item>
      <el-form-item label="奖励拨比" prop="name">
        <el-input v-model="formData.name" type="password" placeholder="奖励拨比"></el-input>
      </el-form-item>
      <el-form-item label="管理奖拨比" prop="phone">
        <el-input v-model="formData.phone" placeholder="管理奖拨比"></el-input>
      </el-form-item>
      <el-form-item label="复销累计" prop="password">
        <el-input v-model="formData.password" placeholder="复销累计"></el-input>
      </el-form-item>
      <el-form-item label="所需团队" prop="role">
        <el-input v-model="formData.role" placeholder="所需团队"></el-input>
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
        phone: '',
        role: '',
        status: true,
      },
      rules: {
        bsName: [
          { required: true, message: '请输入事业部名称', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入管理员姓名', trigger: 'blur' },
          { max: 16, min: 6, message: '长度在6到16为字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        role: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
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
