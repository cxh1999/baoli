<template>
  <div class="RepeatMall">
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
        label="直推团队数量">
      </el-table-column>
      <el-table-column
        prop="address"
        label="小区团队数量">
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
    <declaration-edit v-bind="post" ref="declarationEdit" />
  </div>
</template>

<script>

import DeclarationEdit from 'components/system/DeclarationEdit'

export default {
  name: 'RepeatMall',
  components: { DeclarationEdit },
  data () {
    return {
      post: {
        type: '',
        id: 2
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
      this.$refs.declarationEdit.showFlag = true
    },
  }
}
</script>

<style scoped lang="scss">

</style>
