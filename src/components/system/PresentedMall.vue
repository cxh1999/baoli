<template>
  <div class="PresentedMall">
    <el-form :model="formData" ref="formData" class="demo-formData"
             label-position="left">
      <el-form-item label="市代理分润设置%" prop="bsName">
        <el-input v-model="formData.bsName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" size="mini">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'PresentedMall',
  data () {
    return {
      formData: {
        bsName: 100,
      },
    }
  }
}
</script>

<style scoped lang="scss">

</style>
