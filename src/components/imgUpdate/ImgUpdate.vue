<template>
  <el-upload
    class="upload-demo"
    action="/manage/img/imgUpload"
    :on-remove="handleRemove"
    :limit="limit"
    :data="fd"
    :before-upload="beforeUpload"
    :file-list="fileList"
    :on-success="uploadSuccess"
    :on-exceed="handleExceed"
    :on-error="uploadError"
    list-type="picture">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
import { delImg } from 'api/index'

export default {
  name: 'ImgUpdate',
  props: {
    // fileList: Array,
    limit: Number
  },
  data () {
    return {
      fileList: [],
      fd: { 'img_type': 'add' },
    }
  },
  methods: {
    //删除图片
    async handleRemove (file, fileList) {
      await delImg(file.name)
    },
    beforeUpload (file) {
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png')
      const isLt1M = file.size / 1024 / 1024 < 1
      // console.log(file)
      if (!isJPG) {
        this.$message.error('图片只能是 JPG或png格式!')
      }
      if (!isLt1M) {
        this.$message.error('图片大小不能超过 1MB!')
      }
      return isJPG && isLt1M
    },
    handleExceed () {
      this.$message({
        message: '上传图片数量超过限制',
        type: 'error'
      })
    },
    //上传成功
    uploadSuccess (response, file, fileList) {
      this.$emit('getFile', response.data.key)
      // this.formData.goodscover = response.data.key
    },
    uploadError (err, file, fileList) {
      this.$message({
        message: '图片上传错误',
        type: 'error'
      })
    },
  }
}
</script>

<style scoped lang="scss">

</style>
