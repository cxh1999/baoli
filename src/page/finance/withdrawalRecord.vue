<template>
  <div class="withdrawalRecord common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <!--          <el-button size="mini" class="btn-purple btn" @click="$refs.add.showFlag=true">发布文章</el-button>-->
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>财务管理</el-breadcrumb-item>
          <el-breadcrumb-item>提现处理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-container class="head row-bg table-short" type="flex">
        <el-container>
          <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
            <el-form-item prop="appTime" label="申请时间:">
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
              <el-select v-model="search.shareholderState" placeholder="提现状态" value="" size="mini" :span="6">
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
          label="用户名"
          prop="name">
        </el-table-column>
        <el-table-column
          label="账号"
          prop="name">
        </el-table-column>
        <el-table-column
          label="银行预留手机号"
          prop="name">
        </el-table-column>
        <el-table-column
          label="银行名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="银行卡号"
          prop="name">
        </el-table-column>
        <el-table-column
          label="银行卡类型"
          prop="name">
        </el-table-column>
        <el-table-column
          label="开户行地址"
          prop="name">
        </el-table-column>
        <el-table-column
          label="提现金额"
          prop="name">
        </el-table-column>
        <el-table-column
          label="实际金额"
          prop="name">
        </el-table-column>
        <el-table-column
          label="手续费"
          prop="name">
        </el-table-column>
        <el-table-column
          label="申请日期"
          prop="name">
        </el-table-column>
        <el-table-column
          label="审核日期"
          prop="name">
        </el-table-column>
        <el-table-column
          label="备注"
          prop="name">
        </el-table-column>
        <el-table-column
          label="状态"
          prop="name">
        </el-table-column>
        <el-table-column
          label="审核人"
          prop="name">
        </el-table-column>
        <el-table-column
          label="IP"
          prop="name">
        </el-table-column>
        <el-table-column
          label="操作"
          width="210"
          prop="name">
          <template slot-scope="scope">
            <el-button class="btn-blue" @click="handlePass(scope.id)"
                       size="mini">确定
            </el-button>
            <el-button class="btn-red" @click="handleReject(scope.id)" size="mini">驳回</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          <div class="detail hidden-md-and-down">
            <span>提现:1000元</span>
            <span>实际提现:1000元</span>
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
  name: 'withdrawalRecord',
  components: {},
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
    handleReject () {
      this.$prompt('驳回说明', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^[\u4e00-\u9fa5A-Za-z0-9-_]+/,
        inputErrorMessage: '请输入驳回说明',
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '操作成功'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消操作'
        })
      })
    },
    handlePass () {
      this.$confirm('确认已打款?', '提示', {
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
  .withdrawalRecord {
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
</style>
