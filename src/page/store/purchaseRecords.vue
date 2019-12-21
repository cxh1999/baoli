<template>
  <div class="purchaseRecords common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <!--          <el-button size="mini" class="btn-purple btn" @click="$refs.add.showFlag=true">发布文章</el-button>-->
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>专卖店管理</el-breadcrumb-item>
          <el-breadcrumb-item>进货记录</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-container class="head row-bg table-short" type="flex">
        <el-container>
          <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
            <el-form-item prop="appTime" label="下单时间:">
              <el-date-picker
                v-model="search.appTime"
                size="mini"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="shareholderState">
              <el-select v-model="search.shareholderState" placeholder="进货状态" value="" size="mini" :span="6">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="keywords">
              <el-input placeholder="关键词搜索" size="mini" v-model="search.keywords"
                        @keyup.enter.native="handelSearch"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="btn-blue" @click="handelSearch" size="mini">搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button class="btn-green" @click="$refs.search.resetFields()" size="mini">重置</el-button>
            </el-form-item>
            <el-form-item>
              <el-button class="btn-yellow" @click="handelExport" size="mini">导出</el-button>
            </el-form-item>
          </el-form>
        </el-container>
      </el-container>
      <el-table class="table-list"
                :data="bsList.data"
                :height="maxHeight"
                border
                stripe
                :header-cell-style="{background:'#f9f9f9',color:'#333333',fontWeight:'700'}"
                style="width: 100%">
        <el-table-column
          label="门店编号"
          prop="id">
        </el-table-column>
        <el-table-column
          label="门店名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="进货人"
          prop="name">
        </el-table-column>
        <el-table-column
          label="进货编号"
          prop="name">
        </el-table-column>
        <el-table-column
          label="商品名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="商品总价"
          prop="name">
        </el-table-column>
        <el-table-column
          label="邮费"
          prop="name">
        </el-table-column>
        <el-table-column
          label="总金额"
          prop="name">
        </el-table-column>
        <el-table-column
          label="总数量"
          prop="name">
        </el-table-column>
        <el-table-column
          label="进货状态"
          prop="name">
        </el-table-column>
        <el-table-column
          label="收货姓名"
          prop="name">
        </el-table-column>
        <el-table-column
          label="收货地址"
          prop="name">
        </el-table-column>
        <el-table-column
          label="收货电话"
          prop="name">
        </el-table-column>
        <el-table-column
          label="下单时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="支付时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="快递时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="操作"
          width="210"
          prop="name">
          <template slot-scope="">
            <el-button class="btn-yellow" icon="el-icon-search" size="mini"
                       @click="showDetail">查看
            </el-button>
            <el-button class="btn-blue" @click="handlePass(scope.id)"
                       size="mini">确认发货
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          总条数:
          <span class="red1">{{bsList.total}}</span>
        </div>
        <div class="right">
          <el-pagination
            :layout=page
            background
            :page-size="bsList.per_page"
            @current-change="changeClick"
            :total="bsList.total">
          </el-pagination>
        </div>
      </el-row>
    </div>
    <purchase-detail ref="purchaseDetail"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PurchaseDetail from 'components/store/PurchaseDetail'

export default {
  name: 'purchaseRecords',
  components: { PurchaseDetail },
  data () {
    return {
      maxHeight: 420,
      page: 'prev, pager, next',
      search: {
        keywords: '',
      },
      options: [{
        value: '选项1',
        label: '上架'
      }, {
        value: '选项2',
        label: '下架'
      }],
    }
  },
  computed: {
    ...mapState(['bsList'])
  },
  methods: {
    showDetail () {
      this.$refs.purchaseDetail.showFlag = true
    },
    handlePass () {
      this.$confirm('确认发货, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消操作'
        })
      })
    },
    //搜索
    handelSearch () {
      console.log('搜索')
    },

    handelExport () {
      console.log('导出')
    },
    changeClick: function (e) {
      this.$store.dispatch('getBSList', e)
    },

  },
  mounted () {
    this._initHeight()
  },
  created () {

  }
}
</script>
<style lang="scss">
  .purchaseRecords {
    .el-table th, .el-table td {
      padding: 6px 0;
    }

    .el-autocomplete-suggestion__wrap {
      padding: 0;
    }

    .fetchitem {
      font-size: 12px;
    }

  }

</style>
<style scoped lang="scss">
  @import "~styles/mixins.scss";
</style>
