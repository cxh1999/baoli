<template>
  <el-dialog class="big-dialog AddTopGoods" title="添加一级分类" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="106px" class="demo-formData"
             label-position="left">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="分类图标" prop="img">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :limit="1"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary" >点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="分类简介" prop="desc">
        <el-input type="textarea" v-model="formData.desc"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio label="上架"></el-radio>
          <el-radio label="下架"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">立即添加</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import { addGoods } from 'api/index'
export default {
  name: 'AddTopGoods',
  data () {
    return {
      showFlag: false,
      fileList: [ {
          name: '',
          url: ''
        }],
      formData: {
        name: '',
        img: '',
        desc: '',
        status: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ],
        img: [
          { required: true, message: '请上传图片', trigger: 'blur' },
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
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await addGoods(this.formData)
          if(result.data===2000){
            this.$store.dispatch('getAllPublicImg')
            this.$message({
              type: 'success',
              message: '添加修改成功!'
            })
          }
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
  .AddTopGoods {

  }
</style>
