<template>
  <div class="storeList common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <!--          <el-button size="mini" class="btn-purple btn" @click="$refs.add.showFlag=true">发布文章</el-button>-->
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>专卖店管理</el-breadcrumb-item>
          <el-breadcrumb-item>门店列表</el-breadcrumb-item>
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
              <el-select v-model="search.shareholderState" placeholder="门店状态" value="" size="mini" :span="6">
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
          label="门店名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="门店编号"
          prop="name">
        </el-table-column>
        <el-table-column
          label="申请人"
          prop="name">
        </el-table-column>
        <el-table-column
          label="联系电话"
          prop="name">
        </el-table-column>
        <el-table-column
          label="关联会员"
          prop="name">
        </el-table-column>
        <el-table-column
          label="关联账号"
          prop="name">
        </el-table-column>
        <el-table-column
          label="省"
          prop="name">
        </el-table-column>
        <el-table-column
          label="市"
          prop="name">
        </el-table-column>
        <el-table-column
          label="区/县"
          prop="name">
        </el-table-column>
        <el-table-column
          label="详细地址"
          prop="name">
        </el-table-column>
        <el-table-column
          label="经纬度"
          prop="name">
        </el-table-column>
        <el-table-column
          label="评分"
          prop="name">
        </el-table-column>
        <el-table-column
          label="门店定金"
          prop="name">
        </el-table-column>
        <el-table-column
          label="状态"
          prop="name">
        </el-table-column>
        <el-table-column
          label="申请时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="审核时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="驳回时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="回收时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="操作"
          width="210"
          prop="name">
          <template slot-scope="scope">
            <el-button class="btn-blue" @click="handlePass(scope.id)"
                       size="mini">通过
            </el-button>
            <el-button class="btn-red" @click="handleDelete(scope.id)" size="mini">驳回</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          门店总个数:
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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'storeList',
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
    handleDelete () {
      this.$confirm('确认驳回申请, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
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
    handlePass () {
      this.$confirm('确认通过申请, 是否继续?', '提示', {
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
  .storeList {
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
