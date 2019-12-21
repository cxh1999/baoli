<template>
  <div class="goodsAdd common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>商品管理</el-breadcrumb-item>
          <el-breadcrumb-item>添加商品</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
    </div>
    <el-form :model="formData" :rules="rules" ref="formData" label-width="106px" class="form"
             label-position="left">
      <el-form-item label="商品名称" prop="goodsname">
        <el-input v-model="formData.goodsname"></el-input>
      </el-form-item>
      <el-form-item label="商品编号" prop="number">
        <el-input v-model="formData.number"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" prop="category">
        <el-select v-model="formData.cid" placeholder="请选择分类" value="">
          <el-option label="分类一" value="shanghai"></el-option>
          <el-option label="分类二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="原价" prop="originalprice">
        <el-input v-model="formData.originalprice"></el-input>
      </el-form-item>
      <el-form-item label="现价" prop="rulingprice">
        <el-input v-model="formData.rulingprice"></el-input>
      </el-form-item>
      <el-form-item label="会员价" prop="memberprice">
        <el-input v-model="formData.memberprice"></el-input>
      </el-form-item>
      <el-form-item label="成本价" prop="costprice">
        <el-input v-model="formData.costprice"></el-input>
      </el-form-item>
      <el-form-item label="起购数量" prop="purchase_num">
        <el-input v-model="formData.purchase_num"></el-input>
      </el-form-item>
      <el-form-item label="重量(公斤)" prop="weight">
        <el-input v-model="formData.weight"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="total">
        <el-input v-model="formData.total"></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="sorting">
        <el-input v-model="formData.sorting"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="formData.status" placeholder="请选择状态" value="">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="封面图" prop="goodscover">
        <img-update :fileList="fileList" :limit="1" v-on:getFile="getFile"/>
      </el-form-item>
      <el-form-item label="商品图片" prop="goodspic">
        <img-update :file-list="fileList" :limit="5" v-on:getFile="getFile2"/>
      </el-form-item>
      <el-form-item label="库存设置" prop="totalcnf">
        <el-radio v-model="formData.totalcnf" label="1">拍下减库存</el-radio>
        <el-radio v-model="formData.totalcnf" label="2">付款减库存</el-radio>
        <el-radio v-model="formData.totalcnf" label="2">永久不减</el-radio>
      </el-form-item>
      <el-form-item label="所属事业部" prop="bid">
        <el-radio v-model="formData.bid" label="1">选项一</el-radio>
        <el-radio v-model="formData.bid" label="2">选项二</el-radio>
      </el-form-item>
      <el-form-item label="商品详情" prop="spec">
        <tinymce v-model="formData.spec"/>
        <!--        <el-input type="textarea" v-model="formData.desc"></el-input>-->
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">确定</el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Tinymce from 'components/tinymce/tinymce'
import { addGoods, editGoods, findByIdGoods, delImg } from 'api/index'
import ImgUpdate from 'components/imgUpdate/ImgUpdate'

export default {
  name: 'goodsAdd',
  components: { ImgUpdate, Tinymce },
  data () {
    return {
      msg: '',
      disabled: false,
      fileList: [{
        name: 'a7c7945d2c4e9eaeda94d9f47bae01f9.png',
        url: 'http://app.qiniu.baoliy168.com/a7c7945d2c4e9eaeda94d9f47bae01f9.png'
      }],
      fileList2: [],
      statusOptions: [
        { value: 0, label: '下架' },
        { value: 1, label: '上架' },
      ],
      formData: {
        id: '', //商品id
        goodsname: '', //商品名称
        number: '', //商品编号
        cid: '', //商品分类
        originalprice: '', //原价
        rulingprice: '', //现价
        memberprice: '', //会员价
        costprice: '', //成本价
        purchase_num: '', //起购数量
        weight: '', //重量
        total: '', //库存
        sorting: '', //排序
        status: '', //状态
        goodscover: '', //封面图
        goodspic: [], //商品图片
        totalcnf: '1', //库存设置
        bid: '', //所属事业部
        spec: '', //商品详情
      },
      rules: {
        goodsname: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入商品编号', trigger: 'blur' }
        ],
        cid: [
          { required: true, message: '请选择商品分类', trigger: 'blur' }
        ],
        originalprice: [
          { required: true, message: '请输入原价', trigger: 'blur' }
        ],
        rulingprice: [
          { required: true, message: '请输入现价', trigger: 'blur' }
        ],
        memberprice: [
          { required: true, message: '请输入会员价', trigger: 'blur' }
        ],
        costprice: [
          { required: true, message: '请输入成本价', trigger: 'blur' }
        ],
        purchase_num: [
          { required: true, message: '请输入起购数量', trigger: 'blur' }
        ],
        weight: [
          { required: true, message: '请输入重量', trigger: 'blur' }
        ],
        total: [
          { required: true, message: '请输入库存', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ],
        // goodscover: [
        //   { required: true, message: '请选择封面图', trigger: 'blur' }
        // ],
        // goodspic: [
        //   { required: true, message: '请选择商品图片', trigger: 'blur' }
        // ],
        bid: [
          { required: true, message: '请选择所属事业部', trigger: 'blur' }
        ],
        spec: [
          { required: true, message: '请输入商品详情', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    getFile2 (value) {
      // this.formData.goodscover =
    },
    getFile (value) {
      console.log(value)
    },
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          //提交表单
          if (!this.$route.query.id) {
            //增加商品
            let result = await addGoods(this.formData)
            if (result.code === 200) {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
              this.$router.push({ path: '/home/goodsList' })
            } else {
              this.$message({
                message: result.message,
                type: 'error'
              })
              this.$router.push({ path: '/home/goodsList' })
            }
          } else {
            let result = await editGoods(this.formData)
            if (result.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              })
            } else {
              this.$message({
                message: result.message,
                type: 'error'
              })
            }
            //修改商品
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
  },
  async mounted () {
    if (!this.$route.query.id) {
    } else {
      const result = await findByIdGoods(this.$route.query.id)
      if (result.code === 200) {
        this.formData = result.data
      }
    }
  }
}
</script>
<style scoped lang="scss">
  @import "~styles/mixins.scss";

  .goodsAdd {
    .form {
      background: #fff;
      padding: 15px;
      margin-top: 15px;
    }

  }
</style>
