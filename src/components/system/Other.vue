<template>
  <div class="Other">
    <header class="head">
      <div class="title" style="font-size: 15px;margin-bottom: 10px">奖金拨比设置:</div>
      <el-form :model="formData" ref="formData" :inline="true"  class="demo-formData"
               label-position="left">
        <el-form-item label="复投费%" prop="bsName">
          <el-input v-model="formData.bsName"></el-input>
        </el-form-item>
        <el-form-item label="平台费%" prop="bsName">
          <el-input v-model="formData.bsName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" size="mini">确认</el-button>
        </el-form-item>
      </el-form>
      <div class="title" style="font-size: 15px;margin-bottom: 10px">代理分润设置:</div>
      <el-form :model="formData" ref="formData" :inline="true"  class="demo-formData"
               label-position="left">
        <el-form-item label="省代理%" prop="bsName">
          <el-input v-model="formData.bsName"></el-input>
        </el-form-item>
        <el-form-item label="市代理%" prop="bsName">
          <el-input v-model="formData.bsName"></el-input>
        </el-form-item>
        <el-form-item label="县/区代理%" prop="bsName">
          <el-input v-model="formData.bsName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" size="mini">确认</el-button>
        </el-form-item>
      </el-form>
    </header>
    <div class="title" style="font-size: 15px;margin-bottom: 10px">股东分红设置:</div>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="股东类型">
      </el-table-column>
      <el-table-column
        prop="name"
        label="股东分红比例(%)">
      </el-table-column>
      <el-table-column
        prop="address"
        label="股东分红回本率%">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="hanldeEdit('edit',scope.id)" type="text" size="small">设置</el-button>
        </template>
      </el-table-column>
    </el-table>
    <other-edit v-bind="post" ref="otherEdit" />
  </div>
</template>

<script>
import OtherEdit from 'components/system/OtherEdit'

export default {
  name: 'Other',
  components: { OtherEdit },
  data () {
    return {
      post: {
        type: '',
        id: 2
      },
      formData: {
        bsName: 100,
      },
      tableData: [{
        date: '1',
        name: '1',
        address: '1'
      }, {
        date: '1',
        name: '1',
        address: '1'
      }, {
        date: '1',
        name: '1',
        address: '1'
      }, {
        date: '1',
        name: '1',
        address: '1'
      },
      ]
    }
  },
  methods: {
    hanldeEdit (type, id) {
      this.post.type = type
      this.post.id = 12
      this.$refs.otherEdit.showFlag = true
    },
  }
}
</script>

<style scoped lang="scss">

</style>
