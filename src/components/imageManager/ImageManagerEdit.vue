<template>
  <el-dialog class="big-dialog ImageManagerEdit" :title="type==='add'?'添加图片':'编辑图片'" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="106px" class="demo-formData"
             label-position="left">
      <el-form-item label="图片名称" prop="img_name">
        <el-input v-model="formData.img_name"></el-input>
      </el-form-item>
      <el-form-item label="上传图片" prop="img_url">
        <img-update :fileList="fileList" :limit="1" v-on:getFile="getFile" ref="imgUpdate"/>
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
import { addPublicImg, findByIdPublicImg } from 'api/index'
import ImgUpdate from 'components/imgUpdate/ImgUpdate'

export default {
  name: 'ImageManagerEdit',
  components: { ImgUpdate },
  props: {
    type: String
  },
  data () {
    return {
      showFlag: false,
      time:'',
      fileList: [
        {
          name: '',
          url: ''
        }
      ],
      formData: {
        img_name: '',
        img_url: '',
      },
      rules: {
        img_name: [
          { required: true, message: '请输入图片名称', trigger: 'blur' }
        ],
        img_url: [
          { required: true, message: '请上传图片', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    async _initLoad (id) {
      let result = await findByIdPublicImg(id)
      if (result.code === 200) {
        this.formData = result.data
        this.$refs.imgUpdate.fileList = this.$refs.imgUpdate.$children[0].$children[1].fileList = [{
          name: result.data.img_url.replace(this.global.imgUrl, ''),
          url: result.data.img_url
        }]
      } else {
        this.$message({
          message: result.msg,
          type: 'error'
        })
      }
    },
    getFile (value) {
      this.formData.img_url = this.global.imgUrl + value
    },
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await addPublicImg(this.formData)
          if (result.code === 200) {
            this.$store.dispatch('getAllPublicImg')
            this.$message({
              type: 'success',
              message: '添加修改成功!'
            })
            this.showFlag = false
          } else {
            this.$message({
              message: result.msg,
              type: 'error'
            })
          }
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
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
 
</style>
