<template>
  <div class="orderList common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <!--          <el-button size="mini" class="btn-purple btn" @click="$refs.add.showFlag=true">发布文章</el-button>-->
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>订单管理</el-breadcrumb-item>
          <el-breadcrumb-item>订单列表</el-breadcrumb-item>
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
              <el-select v-model="search.shareholderState" placeholder="订单来源" value="" size="mini" :span="6">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="shareholderState">
              <el-select v-model="search.shareholderState" placeholder="订单状态" value="" size="mini" :span="6">
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
                :data="orderList.data"
                :height="maxHeight"
                border
                stripe
                :header-cell-style="{background:'#f9f9f9',color:'#333333',fontWeight:'700'}"
                style="width: 100%">
        <el-table-column
          label="订单来源">
          <template slot-scope="scope">
            {{orderType[scope.row.ordertype]}}
          </template>
        </el-table-column>
        <el-table-column
          label="订单编号"
          prop="ordersn">
        </el-table-column>
        <el-table-column
          label="订单金额"
          prop="originalprice">
        </el-table-column>
        <el-table-column
          label="运费"
          prop="freight">
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="ordername">
        </el-table-column>
        <el-table-column
          label="订单状态"
          prop="status">
        </el-table-column>
        <el-table-column
          label="收货姓名"
          prop="receipt_name">
        </el-table-column>
        <el-table-column
          label="收货地址"
          prop="receipt_adr">
        </el-table-column>
        <el-table-column
          label="收货电话"
          prop="receipt_phone">
        </el-table-column>
        <el-table-column
          label="快递单号"
          prop="courier_number">
        </el-table-column>
        <el-table-column
          label="备注"
          prop="remark">
        </el-table-column>
        <el-table-column
          label="下单时间"
          prop="createtime">
        </el-table-column>
        <el-table-column
          label="支付时间"
          prop="paytime">
        </el-table-column>
        <el-table-column
          label="快递时间"
          prop="couriertime">
        </el-table-column>
        <el-table-column
          label="操作"
          width="210"
          prop="name">
          <template slot-scope="">
            <el-button class="btn-yellow" icon="el-icon-search" size="mini"
                       @click="showDetail">订单详情
            </el-button>
            <el-button class="btn-purple" size="mini" @click="$refs.balanceDetail.showFlag=true">币额查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          订单总金额:
          <span class="red1">{{orderList.total}}</span>
        </div>
        <div class="right">
          <el-pagination
            :layout=page
            background
            :page-size="orderList.per_page"
            @current-change="changeClick"
            :total="orderList.total">
          </el-pagination>
        </div>
      </el-row>
    </div>
    <order-detail ref="orderDetail"/>
    <balance-detail ref="balanceDetail"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OrderDetail from 'components/order/OrderDetail'
import BalanceDetail from 'components/order/BalanceDetail'

export default {
  name: 'orderList',
  components: { BalanceDetail, OrderDetail },
  data () {
    return {
      maxHeight: 420,
      page: 'prev, pager, next',
      search: {
        keywords: '',
      },
      orderType: {
        1: '复销商城',
        2: '复投商城',
        3: '保单商城',
        4: '主商城',
        5: '赠送商城'
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
    ...mapState(['orderList'])
  },
  methods: {
    showDetail () {
      console.log('测试显示')
      this.$refs.orderDetail.showFlag = true
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
    this.$store.dispatch('getAllOrder')
    this._initHeight()
  },
  created () {

  }
}
</script>
<style lang="scss">
  .orderList {
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
