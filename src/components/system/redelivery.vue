<template>
  <div class="redelivery">
    <el-form :model="formData" ref="formData"   class="demo-formData"
             label-position="left">
      <el-form-item label="复投标准设置" prop="bsName">
        <el-input v-model="formData.bsName"></el-input>
      </el-form-item>
      <el-form-item label="复投提醒次数设置" prop="bsName">
        <el-input v-model="formData.bsName"></el-input>
      </el-form-item>
      <el-form-item label="复投提示语设置" prop="bsName">
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
  name: 'redelivery',
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
