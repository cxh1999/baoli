<template>
  <div class="agentList common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="$refs.agentAdd.showFlag = true">添加代理</el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>代理管理</el-breadcrumb-item>
          <el-breadcrumb-item>代理列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-container class="head row-bg table-short" type="flex">
        <el-container>
          <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
            <el-form-item label="申请时间:" prop="appTime">
              <el-date-picker
                v-model="search.appTime"
                size="mini"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="审核时间:" prop="checkTime">
              <el-date-picker
                v-model="search.checkTime"
                type="daterange"
                size="mini"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="shareholderState">
              <el-select v-model="search.shareholderState" placeholder="代理类型" value="" size="mini" :span="6">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="shareholderState">
              <el-select v-model="search.shareholderState" placeholder="代理状态" value="" size="mini" :span="6">
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
          label="账号"
          prop="id">
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="id">
        </el-table-column>
        <el-table-column
          label="代理类型"
          prop="id">
        </el-table-column>
        <el-table-column
          label="省"
          prop="id">
        </el-table-column>
        <el-table-column
          label="市"
          prop="id">
        </el-table-column>
        <el-table-column
          label="代理 区/县"
          prop="id">
        </el-table-column>
        <el-table-column
          label="证件资料"
          width="120px"
          prop="name">
          <template slot-scope="">
            <table-img :url="url"/>
          </template>
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
          label="审核人"
          prop="name">
        </el-table-column>
        <el-table-column
          label="审核时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="IP"
          prop="name">
        </el-table-column>
        <el-table-column
          label="操作"
          width="140"
          prop="name">
          <template slot-scope="scope">
            <el-button class="btn-blue" @click="handlePass(scope.id)"
                       size="mini">通过
            </el-button>
            <el-button class="btn-red" @click="handleDelete(scope.id)" size="mini">拒绝</el-button>
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
    <agent-add ref="agentAdd"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TableImg from 'components/tableImg/TableImg'
import AgentAdd from 'components/agentManager/AgentAdd'

export default {
  name: 'agentList',
  components: { TableImg, AgentAdd },
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
    handleDelete () {
      this.$confirm('确认拒绝该代理申请, 是否继续?', '提示', {
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
      this.$confirm('确认通过该代理申请, 是否继续?', '提示', {
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

    changeClick: function (e) {
      this.$store.dispatch('getBSList', e)
    },
    handelExport () {
      console.log('导出')
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
  .agentList {
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
