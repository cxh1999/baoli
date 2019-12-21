<template>
  <el-dialog
    class="big-img-wrap"
    title=""
    :visible.sync="bigImg"
    width="40%"
    center>
    <el-image
      style="width: 100%; height: 100%"
      :src="url"
      fit="contain">
    </el-image>
  </el-dialog>
</template>

<script>
export default {
  name: 'big_img',
  props: {
    url: String,
  },
  data () {
    return {
      bigImg: false
    }
  }
}
</script>

<style scoped lang="scss" >
  .big-img-wrap {
    /deep/ .el-dialog {
      min-width: 300px;
    }
    /deep/ .el-dialog__header {
      padding: 0 10px;
    }

    /deep/ .el-dialog--center .el-dialog__body {
      padding: 10px;
    }
    /deep/ .el-dialog__headerbtn {
      z-index: 99;
    }
  }
</style>
