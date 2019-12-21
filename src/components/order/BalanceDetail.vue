<template>
  <el-dialog class="big-dialog" title="订单之前收益会员币额数据详情" :visible.sync="showFlag">
    <el-table :data="gridData">
      <el-table-column property="date" label="账号"></el-table-column>
      <el-table-column property="name" label="姓名"></el-table-column>
      <el-table-column property="name" label="余额"></el-table-column>
      <el-table-column property="name" label="宝励豆"></el-table-column>
      <el-table-column property="name" label="复消币"></el-table-column>
      <el-table-column property="name" label="复投币"></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
export default {
  name: 'balanceDetail',
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
