<template>
  <el-dialog class="big-dialog MenberPackage.vue" title="会员货币充值" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="70px" class="demo-formData"
             label-position="left">
      <el-form-item label="账号" prop="name">
        <el-input v-model="formData.name" readonly></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="account">
        <el-input v-model="formData.account" readonly></el-input>
      </el-form-item>
      <el-form-item label="余额" prop="balance">
        <el-input v-model="formData.balance" type="number"></el-input>
        <p>充值金额: <span class="red1">{{nzhBalance}}</span></p>
        <p>余额:234334</p>
      </el-form-item>
      <el-form-item label="宝励豆" prop="baoliBean">
        <el-input v-model="formData.baoliBean" type="number"></el-input>
        <p>充值金额: <span class="red1">{{nzhBalance}}</span></p>
        <p>余额:234334</p>
      </el-form-item>
      <el-form-item label="备注" prop="desc">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="formData.desc">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('formData')">增加货币</el-button>
        <el-button type="warning" @click="submitForm('formData')">减少货币</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { cn } from 'nzh'

export default {
  name: 'MenberPackage.vue',
  components: {},
  data () {
    return {
      showFlag: false,
      formData: {
        name: '',
        account: '',
        balance: '',
        baoliBean: '',
        desc: ''
      },
      rules: {
        balance: [
          { required: true, message: '请输入分享人账号', trigger: 'blur' },
        ],
        baoliBean: [
          { required: true, message: '请输入分享人账号', trigger: 'blur' },
        ],
      }
    }
  },
  computed: {
    nzhBalance: function () {
      return cn.encodeB(this.formData.balance)
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
  .MenberPackage.vue {

  }
</style>
