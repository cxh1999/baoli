<template>
  <el-dialog class="big-dialog AddShop" title="加入商城" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="70px" class="demo-formData">
      <el-form-item label="规格项目" prop="specifications">
        <el-checkbox-group v-model="formData.shops" size="mini" @change="optionChange">
          <el-checkbox label="shopA" border>报单商城</el-checkbox>
          <el-checkbox label="shopB" border>复销商城</el-checkbox>
          <el-checkbox label="shopC" border>复投商城</el-checkbox>
          <el-checkbox label="shopD" border>赠送商城</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item :label="vals.name" v-for="(vals,index) in checkShops" :key="vals.id" size="mini" class="item-form">
        <el-form :inline="true" class="sub-form">
          <el-form-item label="原价">
            <el-input v-model="vals.priceOld" placeholder="原价"></el-input>
          </el-form-item>
          <el-form-item label="现价">
            <el-input v-model="vals.priceNow" placeholder="现价"></el-input>
          </el-form-item>
          <el-form-item label="会员价">
            <el-input v-model="vals.priceMenber" placeholder="会员价"></el-input>
          </el-form-item>
          <el-form-item label="成本价">
            <el-input v-model="vals.price" placeholder="成本价"></el-input>
          </el-form-item>
          <el-form-item label="起购数量">
            <el-input v-model="vals.num" placeholder="起购数量"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">立即设置</el-button>
        <!--        <el-button @click="resetForm('formData')">重置</el-button>-->
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddShop',
  data () {
    return {
      showFlag: false,
      formData: {
        shops: [],
      },
      shops: [
        { id: 'shopA', name: '报单商城', priceOld: 100, priceNow: 100, priceMenber: 100, price: 100, num: 5 },
        { id: 'shopB', name: '复销商城', priceOld: 100, priceNow: 100, priceMenber: 100, price: 100, num: 5 },
        { id: 'shopC', name: '复投商城', priceOld: 100, priceNow: 100, priceMenber: 100, price: 100, num: 5 },
        { id: 'shopD', name: '赠送商城', priceOld: 100, priceNow: 100, priceMenber: 100, price: 100, num: 5 },
      ],
      checkShops: [],
      rules: {
        name: [
          { required: true, message: '请输入问题关键字', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    optionChange (value) {
      this.checkShops = this.shops.filter((v) => value.includes(v.id))
      // // { size: [], name: '', id: [] }
      // let arr = []
      // this.checkOptions.forEach(item => {
      //   let obj = { size: [], name: '', id: '' }
      //   obj.id = item.id
      //   let itemSize = []
      //   item.size.forEach(val => {
      //     itemSize.push(val.sizeid)
      //   })
      //   obj.size = itemSize
      //   arr.push(obj)
      // })
      // this.sendOption = arr
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
  .AddShop {
    .item-form {
      border-top: 1px solid #dddddd;
      padding-top: 10px;
    }

    .sub-form {
      /deep/ .el-form-item__content {
        width: 80px;
      }
    }
  }
</style>
