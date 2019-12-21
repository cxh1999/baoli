<template>
  <el-dialog class="big-dialog EditMenber" title="编辑会员资料" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-formData"
             label-position="left">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="账号" prop="account">
        <el-input v-model="formData.account"></el-input>
        <p class="red1">注:修改前请确定该会员下无伙伴</p>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="formData.phone"></el-input>
      </el-form-item>
      <el-form-item label="报单商城等级" prop="baodanLevel">
        <el-select v-model="formData.baodanLevel" placeholder="请选择报单商城等级" value="">
          <el-option label="V1" value="shanghai"></el-option>
          <el-option label="V2" value="beijing"></el-option>
          <el-option label="V3" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="复销商城等级" prop="fuxiaoLevel">
        <el-select v-model="formData.fuxiaoLevel" placeholder="请选择复销商城等级" value="">
          <el-option label="微客" value="shanghai"></el-option>
          <el-option label="创客" value="beijing"></el-option>
          <el-option label="品牌创客" value="beijing2"></el-option>
          <el-option label="股东创客" value="beijing3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="提现开关" prop="switchWithdraw">
        <el-switch
          v-model="formData.switchWithdraw"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item label="转账开关" prop="switchTransfer">
        <el-switch
          v-model="formData.switchTransfer"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item label="复投状态" >
        正常
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('formData')">立即修改</el-button>
        <el-button type="warning" @click="submitForm('formData')">重置登录密码</el-button>
        <el-button type="warning" @click="submitForm('formData')">重置支付密码</el-button>
        <el-button type="warning" @click="submitForm('formData')">重置门店编号</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>

export default {
  name: 'EditMenber',
  components: {},
  data () {
    return {
      showFlag: false,
      formData: {
        name: '',
        account: '',
        phone: '',
        baodanLevel: '',
        fuxiaoLevel: '',
        switchWithdraw: '',
        switchTransfer: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' },
        ],
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
        ],
        baodanLevel: [
          { required: true, message: '请输入报单等级', trigger: 'blur' },
        ],
        fuxiaoLevel: [
          { required: true, message: '请输入复销等级', trigger: 'blur' },
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
  .EditMenber {

  }
</style>
