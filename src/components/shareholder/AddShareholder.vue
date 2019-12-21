<template>
  <el-dialog class="big-dialog AddShareholder" title="添加股东" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="115px" class="demo-formData"
             label-position="left">
      <el-form-item label="会员账号" prop="name">
        <el-input v-model="formData.name" placeholder="会员账号"></el-input>
      </el-form-item>
      <el-form-item label="代理类型" prop="category">
        <el-select v-model="formData.category" placeholder="请选择代理类型" value="">
          <el-option label="省代理" value="shanghai"></el-option>
          <el-option label="市代理" value="beijing"></el-option>
          <el-option label="现代里" value="beijing1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入股金额" prop="name">
        <el-input v-model="formData.name" placeholder="入股金额" ></el-input>
      </el-form-item>
      <el-form-item label="身份证(正/反)面" prop="img">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :limit="1"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="支付方式" >
        线下支付
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">确认</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddShareholder',
  data () {
    return {
      showFlag: false,
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }],
      formData: {
        name: '',
        img: '',
        category: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入会员账号', trigger: 'blur' }
        ],
        category: [
          { required: true, message: '请输入代理类型', trigger: 'blur' }
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
  .AddShareholder {

  }
</style>
