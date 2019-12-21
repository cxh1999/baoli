<template>
  <div class="baseSetting common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>系统设置</el-breadcrumb-item>
          <el-breadcrumb-item>APP基础设置</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
    </div>
    <el-form :model="formData" :rules="rules" ref="formData" label-width="150px" class="form"
             label-position="left">
      <el-form-item label="提现手续费" prop="title">
        <el-input v-model="formData.title" placeholder="提现手续费%"></el-input>
      </el-form-item>
      <el-form-item label="提现日期" prop="title">
        <el-checkbox-group v-model="formData.title">
          <el-checkbox label="复选框 A">星期一</el-checkbox>
          <el-checkbox label="复选框 B">星期二</el-checkbox>
          <el-checkbox label="复选框 C">星期三</el-checkbox>
          <el-checkbox label="复选框 d">星期四</el-checkbox>
          <el-checkbox label="复选框 E">星期五</el-checkbox>
          <el-checkbox label="复选框 F">星期六</el-checkbox>
          <el-checkbox label="复选框 G">星期日</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="最低提现金额" prop="title">
        <el-input v-model="formData.title" placeholder="最低提现金额"></el-input>
      </el-form-item>
      <el-form-item label="最低转账金额" prop="title">
        <el-input v-model="formData.title" placeholder="最低转账金额"></el-input>
      </el-form-item>
      <el-form-item label="包邮设置" prop="title">
        <el-switch
          v-model="formData.postage"
          active-color="#13ce66">
        </el-switch>
      </el-form-item>
      <el-form-item label="包邮设置" prop="title" v-if="formData.postage">
        <el-input v-model="formData.title" placeholder="订单总价大于多少包邮"></el-input>
      </el-form-item>
      <el-form-item label="上传图片大小" prop="title">
        <el-form>
          <el-form-item label="APP客户端(MB)" prop="title">
            <el-input v-model="formData.title" placeholder="APP客户端(MB)"></el-input>
          </el-form-item>
          <el-form-item label="后台管理端(MB)" prop="title">
            <el-input v-model="formData.title" placeholder="后台管理端(MB)"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="使用微信支付" prop="title">
        <el-switch
          v-model="formData.title"
          active-color="#13ce66">
        </el-switch>
      </el-form-item>
      <el-form-item label="使用支付宝" prop="title">
        <el-switch
          v-model="formData.title"
          active-color="#13ce66">
        </el-switch>
      </el-form-item>
      <el-form-item label="僵尸粉清理" prop="title">
        <el-switch
          v-model="formData.postage"
          active-color="#13ce66">
        </el-switch>
      </el-form-item>
      <el-form-item label="僵尸粉清理条件" prop="title" v-if="formData.postage">
        <el-form>
          <el-form-item label="未登录时间(天)" prop="title">
            <el-input v-model="formData.title" placeholder="未登录时间(天)"></el-input>
          </el-form-item>
          <el-form-item label="复销业绩小于" prop="title">
            <el-input v-model="formData.title" placeholder="复销业绩小于"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="会员管理奖业绩考核" prop="title">
        <el-switch
          v-model="formData.postage"
          active-color="#13ce66">
        </el-switch>
      </el-form-item>
      <el-form-item label="会员管理奖业绩考核" prop="title" v-if="formData.postage">
        管理奖业绩考核标准设置(元):
        <el-form :inline="true">
          <el-form-item label="V1" prop="title">
            <el-input v-model="formData.title" placeholder="V1管理奖获得标准"></el-input>
          </el-form-item>
          <el-form-item label="V2" prop="title">
            <el-input v-model="formData.title" placeholder="V2管理奖获得标准"></el-input>
          </el-form-item>
          <el-form-item label="V3" prop="title">
            <el-input v-model="formData.title" placeholder="V3管理奖获得标准"></el-input>
          </el-form-item>
        </el-form>
        管理奖持续有效期设置(天):
        <el-form :inline="true">
          <el-form-item label="V1" prop="title">
            <el-input v-model="formData.title" placeholder="V1管理奖持续有效期"></el-input>
          </el-form-item>
          <el-form-item label="V2" prop="title">
            <el-input v-model="formData.title" placeholder="V2管理奖持续有效期"></el-input>
          </el-form-item>
          <el-form-item label="V3" prop="title">
            <el-input v-model="formData.title" placeholder="V3管理奖持续有效期"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="开启冻结模式" prop="title">
        <el-switch
          v-model="formData.title"
          active-color="#13ce66">
        </el-switch>
      </el-form-item>
      <el-form-item label="物流配置" prop="category">
        <el-select v-model="formData.category" placeholder="请选择物流模板" value="">
          <el-option label="中国邮政" value="shanghai"></el-option>
          <el-option label="EMS" value="beijing"></el-option>
          <el-option label="顺丰" value="beijing"></el-option>
          <el-option label="中通" value="beijing"></el-option>
          <el-option label="圆通" value="beijing"></el-option>
          <el-option label="申通" value="beijing"></el-option>
          <el-option label="韵达" value="beijing"></el-option>
          <el-option label="汇通" value="beijing"></el-option>
          <el-option label="天天" value="beijing"></el-option>
          <el-option label="宅急送" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'baseSetting',
  components: {},
  data () {
    return {
      msg: '',
      disabled: false,
      fileList: [],
      formData: {
        title: '',
        postage: false,
        category: '',
        desc: '',
        status: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        img: [
          { required: true, message: '请上传图片', trigger: 'blur' },
        ],
        category: [
          { required: true, message: '请输入上级分类', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入描述', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请输入状态', trigger: 'blur' }
        ]
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
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>
<style scoped lang="scss">
  @import "~styles/mixins.scss";

  .baseSetting {
    .form {
      background: #fff;
      padding: 15px;
      margin-top: 15px;
    }

  }
</style>
