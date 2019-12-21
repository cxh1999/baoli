<template>
  <div class="orderRepair common-css">
    <div class="wrapper">
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>会员管理</el-breadcrumb-item>
          <el-breadcrumb-item>修改错误订单</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-formData"
               label-position="left">
        <el-form-item label="订单编号" prop="orderID">
          <el-input v-model="formData.orderID"></el-input>
        </el-form-item>
        <el-form-item label="会员账号" prop="account">
          <el-input v-model="formData.account"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">修改</el-button>
          <el-button @click="resetForm('formData')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'orderRepair',
  components: {},
  data () {
    return {
      formData: {
        orderID: '',
        account: '',
      },
      rules: {
        orderID: [
          { required: true, message: '请输入订单编号', trigger: 'blur' },
        ],
        account: [
          { required: true, message: '请输入会员账号', trigger: 'blur' },
        ],
      }
    }
  },
  computed: {},
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
  },
  mounted () {
  },
  created () {

  }
}
</script>
<style scoped lang="scss">
  @import "~styles/mixins.scss";

  .orderRepair {
    .demo-formData {
      margin-top: 15px;
      padding: 15px;
    }
  }
</style>
