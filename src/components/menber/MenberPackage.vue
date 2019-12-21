<template>
  <el-dialog class="big-dialog AddMenber" title="会场礼包购买" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-formData"
             label-position="left">
      <el-form-item label="礼包信息">
        名称:XX礼包 价格:788元 运费:80元
      </el-form-item>
      <el-form-item label="是否自提" prop="pickSelf">
        <el-checkbox v-model="formData.pickSelf">是</el-checkbox>
      </el-form-item>
      <el-form-item label="地址选择" prop="address">
        <el-select v-model="formData.topCategory" placeholder="请选择收货地址" value="">
          <el-option label="地址一" value="shanghai"></el-option>
          <el-option label="地址二" value="beijing"></el-option>
        </el-select>
       <p>
         <el-button type="primary" @click="$refs.addAddress.showFlag = true">添加地址</el-button>
       </p>
      </el-form-item>
      <el-form-item label="支付方式" prop="payType">
        <el-checkbox-group v-model="formData.payType">
          <el-checkbox label="A">余额</el-checkbox>
          <el-checkbox label="B">宝励豆</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="支付余额" prop="balanceOut">
        100
      </el-form-item>
      <el-form-item label="可用余额" prop="balance">
        1000
      </el-form-item>
      <el-form-item label="可用宝励豆" prop="baoliBean">
        1000
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
        <el-button type="primary" @click="submitForm('formData')">立即购买</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
    <add-address ref="addAddress"/>
  </el-dialog>
</template>

<script>
import AddAddress from 'components/menber/AddAddress'

export default {
  name: 'AddMenber',
  components: { AddAddress },
  data () {
    return {
      showFlag: false,
      formData: {
        pickSelf: '',
        address: '',
        payType: 1,
        balanceOut: '',
        balance: '',
        baoliBean: '',
        desc: '',
      },
      rules: {
        address: [
          { required: true, message: '请选择收货地址', trigger: 'blur' },
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
