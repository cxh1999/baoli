<template>
  <el-dialog class="big-dialog AddMenber" title="添加收货地址" :visible.sync="showFlag" append-to-body>
    <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-formData" label-position="left">
      <el-form-item label="省份" prop="province">
        <el-select v-model="formData.topCategory" placeholder="请选择省份" value="">
          <el-option label="四川" value="shanghai"></el-option>
          <el-option label="重庆" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="市" prop="city">
        <el-input v-model="formData.city"></el-input>
      </el-form-item>
      <el-form-item label="区县" prop="district">
        <el-input v-model="formData.district"></el-input>
      </el-form-item>
      <el-form-item label="详细地址" prop="address">
        <el-input v-model="formData.address"></el-input>
      </el-form-item>
      <el-form-item label="收货姓名" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="formData.phone" type="phone"></el-input>
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
