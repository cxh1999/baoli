<template>
  <el-dialog class="big-dialog" title="补水面膜" :visible.sync="showFlag">
    <el-table :data="gridData">
      <el-table-column property="date" label="规格"></el-table-column>
      <el-table-column property="name" label="更改前数量"></el-table-column>
      <el-table-column property="name" label="更改后数量"></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
export default {
  name: 'ChangeDetail',
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
