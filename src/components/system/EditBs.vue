<template>
  <el-dialog class="big-dialog EditBs" :title="type==='add'?'添加管理员':'修改管理员'" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="120px" class="demo-formData"
             label-position="left">
      <el-form-item label="事业部名称" prop="business_name">
        <el-input v-model="formData.business_name"></el-input>
      </el-form-item>
      <el-form-item label="管理员姓名" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="formData.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码设置" prop="password">
        <el-input v-model="formData.password" type="password" placeholder="默认为手机号"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="role">
        <el-input v-model="formData.role"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio :label="1">正常</el-radio>
          <el-radio :label="0">禁止</el-radio>
        </el-radio-group>
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
import { editBS } from 'api/index'

export default {
  name: 'EditBs',
  props: {
    type: String
  },
  data () {
    return {
      showFlag: false,
      formData: {
        id: '',
        business_name: '',
        name: '',
        phone: '',
        password: '',
        role: '',
        status: 1,
      },
      rules: {
        business_name: [
          { required: true, message: '请输入事业部名称', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入管理员姓名', trigger: 'blur' },
          { max: 16, min: 6, message: '长度在6到16为字符', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
        ],
        role: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ]
      },
    }
  },
  watch: {
    'formData.status' (value) {
      if (!value) {
        this.$confirm('谨慎操作! 决定与该事业部有关的任何功能的状态是否正常, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        }).catch(() => {
          this.formData.status = 1
        })
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await editBS(this.formData)
        } else {
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
  .EditBs {

  }
</style>
