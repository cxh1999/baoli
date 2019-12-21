<template>
  <el-dialog class="big-dialog" title="进货规格行情" :visible.sync="showFlag">
    <el-table :data="gridData">
      <el-table-column property="date" label="商品名称"></el-table-column>
      <el-table-column property="name" label="商品规格"></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
export default {
  name: 'ReplenishChangeDetail',
  data () {
    return {
      showFlag: false,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
    }
  }
}
</script>

<style scoped lang="scss" >
</style>
