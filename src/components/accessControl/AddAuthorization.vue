<template>
  <el-dialog class="big-dialog AddAuthorization" title="授权" :visible.sync="showFlag">
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
const cityOptions = ['分公司', '运营', '财务']
export default {
  name: 'AddAuthorization',
  data () {
    return {
      showFlag: false,
      checkAll: false,
      checkedCities: ['分公司'],
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
  .AddAuthorization {

  }
</style>
