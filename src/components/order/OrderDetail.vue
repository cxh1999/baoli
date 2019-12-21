<template>
  <el-dialog class="big-dialog" title="订单详情" :visible.sync="showFlag">
    <el-table :data="gridData">
      <el-table-column property="date" label="商品名称"></el-table-column>
      <el-table-column property="name" label="商品规格"></el-table-column>
      <el-table-column property="name" label="商品单价"></el-table-column>
      <el-table-column property="name" label="数量"></el-table-column>
      <el-table-column property="name" label="购买时间"></el-table-column>
    </el-table>
    <div class="operation">
      <div class="title">
        填写快递信息:
      </div>
      <el-form :model="formData" :rules="rules" ref="formData" label-width="106px" class="demo-formData"
               label-position="left">
        <el-form-item label="快递名称" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="快递单号" prop="img">
          <el-input v-model="formData.img"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入备注"
            v-model="formData.desc">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">确认发货</el-button>
          <el-button @click="resetForm('formData')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'OrderDetail',
  data () {
    return {
      showFlag: false,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      formData: {
        name: '',
        img: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入快递名称', trigger: 'blur' }
        ],
        img: [
          { required: true, message: '请输入快递单号', trigger: 'blur' },
        ],
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .operation {
    margin-top: 20px;
    .title {
      font-size: 16px;
      margin: 15px 0;
    }
  }
</style>
