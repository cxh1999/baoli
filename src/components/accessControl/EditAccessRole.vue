<template>
  <el-dialog class="big-dialog EditAccessRole" title="权限管理" :visible.sync="showFlag">
    <el-form ref="formData" class="demo-formData">
      <el-form-item label="" prop="name">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">提交</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
const cityOptions = ['商品模块', '订单模块', '系统设置', '会员管理', '商品模块', '订单模块', '系统设置', '会员管理', '商品模块', '订单模块', '系统设置', '会员管理']
export default {
  name: 'EditAccessRole',
  data () {
    return {
      showFlag: false,
      checkAll: false,
      checkedCities: ['商品模块', '订单模块'],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods: {
    submitForm () {
      console.log(this.checkedCities)
    },
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>

<style scoped lang="scss">
  .EditAccessRole {

  }
</style>
