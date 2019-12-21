<template>
  <div class="RepeatMall">
    <header class="head">
      <div class="title" style="font-size: 15px;margin-bottom: 10px">复销币使用设置:</div>
      <el-form :model="formData" ref="formData" :inline="true"  class="demo-formData"
               label-position="left">
        <el-form-item label="复销币使用%" prop="bsName">
          <el-input v-model="formData.bsName"></el-input>
        </el-form-item>
        <el-form-item label="现金%" prop="bsName">
          <el-input v-model="formData.bsName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" size="mini">确认</el-button>
        </el-form-item>
      </el-form>
    </header>
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="等级名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="奖励拨比"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="管理奖拨比">
      </el-table-column>
      <el-table-column
        prop="address"
        label="复销累计">
      </el-table-column>
      <el-table-column
        prop="address"
        label="所需团队">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="hanldeEdit('edit',scope.id)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <footer class="foot" style="margin-top: 10px">
      <el-button type="success" size="mini" @click="hanldeEdit('add')">添加</el-button>
    </footer>
    <repeat-mall-edit v-bind="post" ref="repeatMallEdit"/>
  </div>
</template>

<script>

import RepeatMallEdit from 'components/system/RepeatMallEdit'

export default {
  name: 'RepeatMall',
  components: { RepeatMallEdit },
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
      this.$refs.repeatMallEdit.showFlag = true
    },
  }
}
</script>

<style scoped lang="scss">

</style>
