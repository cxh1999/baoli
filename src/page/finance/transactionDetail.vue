<template>
  <div class="transactionDetail common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <!--          <el-button size="mini" class="btn-purple btn" @click="$refs.add.showFlag=true">发布文章</el-button>-->
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>财务管理</el-breadcrumb-item>
          <el-breadcrumb-item>交易明细</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-container class="head row-bg table-short" type="flex">
        <el-container>
          <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
            <el-form-item prop="appTime" label="创建时间:">
              <el-date-picker
                v-model="search.appTime"
                size="mini"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="appTime" label="交易时间:">
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
              <el-select v-model="search.shareholderState" placeholder="交易类型" value="" size="mini" :span="6">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="shareholderState">
              <el-select v-model="search.shareholderState" placeholder="交易状态" value="" size="mini" :span="6">
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
          label="ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="订单编号"
          prop="name">
        </el-table-column>
        <el-table-column
          label="用户"
          prop="name">
        </el-table-column>
        <el-table-column
          label="账号"
          prop="name">
        </el-table-column>
        <el-table-column
          label="金额"
          prop="name">
        </el-table-column>
        <el-table-column
          label="交易类型"
          prop="name">
        </el-table-column>
        <el-table-column
          label="交易说明"
          prop="name">
        </el-table-column>
        <el-table-column
          label="备注"
          prop="name">
        </el-table-column>
        <el-table-column
          label="创建时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="交易时间"
          prop="name">
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          <div class="detail hidden-md-and-down">
            <span>订单:1000元</span>
            <span>转账:1000元</span>
            <span>提现:1000元</span>
            <span>充值:1000元</span>
            <span>奖励:1000元</span>
            <span>门店进货:1000元</span>
            <span>门店补货:1000元</span>
          </div>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'transactionDetail',
  components: {},
  data () {
    return {
      maxHeight: 420,
      page: 'prev, pager, next',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
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
  .transactionDetail {
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

  .transactionDetail {
    .footer {
      .left {
        .detail {
          span {
            font-size: 12px;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
