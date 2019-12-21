<template>
  <div class="inventoryRecords common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <!--          <el-button size="mini" class="btn-purple btn" @click="$refs.add.showFlag=true">发布文章</el-button>-->
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>专卖店管理</el-breadcrumb-item>
          <el-breadcrumb-item>库存更改记录</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-container class="head row-bg table-short" type="flex">
        <el-container>
          <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
            <el-form-item prop="appTime" label="更改时间:">
              <el-date-picker
                v-model="search.appTime"
                size="mini"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
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
          label="商品名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="修改前商品库存"
          prop="name">
        </el-table-column>
        <el-table-column
          label="修改后商品库存"
          prop="name">
        </el-table-column>
        <el-table-column
          label="备注"
          prop="name">
        </el-table-column>
        <el-table-column
          label="进货规格"
          width="80"
          prop="name">
          <template slot-scope="">
            <el-button class="btn-yellow" icon="el-icon-search" size="mini"
                       @click="$refs.replenishChangeDetail.showFlag=true"></el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="补货规格"
          width="80"
          prop="name">
          <template slot-scope="">
            <el-button class="btn-yellow" icon="el-icon-search" size="mini"
                       @click="$refs.purchaseChangeDetail.showFlag=true"></el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="修改详情"
          width="80"
          prop="name">
          <template slot-scope="">
            <el-button class="btn-yellow" icon="el-icon-search" size="mini"
                       @click="$refs.changeDetail.showFlag=true"></el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="操作人"
          prop="name">
        </el-table-column>
        <el-table-column
          label="更改时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="IP"
          prop="name">
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
    <purchase-change-detail ref="purchaseChangeDetail"/>
    <replenish-change-detail ref="replenishChangeDetail"/>
    <change-detail ref="changeDetail"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PurchaseChangeDetail from 'components/store/ReplenishChangeDetail'
import ReplenishChangeDetail from 'components/store/PurchaseChangeDetail'
import ChangeDetail from 'components/store/ChangeDetail'

export default {
  name: 'inventoryRecords',
  components: { ChangeDetail, ReplenishChangeDetail, PurchaseChangeDetail },
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
  .inventoryRecords {
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
