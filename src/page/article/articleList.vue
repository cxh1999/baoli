<template>
  <div class="articleList common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="$router.push('/home/articleAdd')">发布文章</el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>权限管理</el-breadcrumb-item>
          <el-breadcrumb-item>权限模块</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-container class="head row-bg table-short" type="flex">
        <el-container>
          <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
            <el-form-item prop="appTime" label="发布时间:">
              <el-date-picker
                v-model="search.appTime"
                size="mini"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="checkTime" label="更新时间:">
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
              <el-select v-model="search.shareholderState" placeholder="状态" value="" size="mini" :span="6">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="keywords">
              <el-input placeholder="请输入文章标题搜索" size="mini" v-model="search.keywords"
                        @keyup.enter.native="handelSearch"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="btn-blue" @click="handelSearch" size="mini">搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button class="btn-green" @click="$refs.search.resetFields()" size="mini">重置</el-button>
            </el-form-item>
          </el-form>
        </el-container>
      </el-container>
      <el-table class="table-list"
                :data="articleList.data"
                :height="maxHeight"
                border
                stripe
                :header-cell-style="{background:'#f9f9f9',color:'#333333',fontWeight:'700'}"
                style="width: 100%">
        <el-table-column
          label="分类">
          <template slot-scope="">
            <div class="classify">超级商城
              <i class="iconfont">&#xe649;</i>
              美白系列
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="标题"
          prop="title">
        </el-table-column>
        <el-table-column
          label="封面图"
          width="120px">
          <template slot-scope="">
            <table-img :url="url"/>
          </template>
        </el-table-column>
        <el-table-column
          label="阅读量"
          prop="browse_number">
        </el-table-column>
        <el-table-column
          label="状态">
          <template slot-scope="scope">
            {{status[scope.row.status]}}
          </template>
        </el-table-column>
        <el-table-column
          label="更新时间"
          prop="updated_at">
        </el-table-column>
        <el-table-column
          label="发布时间"
          prop="created_at">
        </el-table-column>
        <el-table-column
          label="操作人"
          prop="operator">
        </el-table-column>
        <el-table-column
          label="IP"
          prop="ip">
        </el-table-column>
        <el-table-column
          label="操作"
          min-width="70"
          prop="name">
          <template slot-scope="">
            <el-button class="btn-yellow" icon="el-icon-edit" size="mini"
                       @click="$router.push({path:'/home/articleAdd',params:{id:'3'}})"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          商品总数:
          <span class="red1">{{articleList.total}}</span>
        </div>
        <div class="right">
          <el-pagination
            :layout=page
            background
            :page-size="articleList.per_page"
            @current-change="changeClick"
            :total="articleList.total">
          </el-pagination>
        </div>
      </el-row>
    </div>
    <add-access-control ref="add"/>
    <edit-access-control ref="edit"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddAccessControl from 'components/accessControl/AddAccessControl'
import EditAccessControl from 'components/accessControl/EditAccessControl'
import TableImg from 'components/tableImg/TableImg'

export default {
  name: 'articleList',
  components: { TableImg, EditAccessControl, AddAccessControl },
  data () {
    return {
      maxHeight: 420,
      page: 'prev, pager, next',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      search: {
        keywords: '',
      },
      status: {
        0: '下架',
        1: '上架'
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
    ...mapState(['articleList'])
  },
  methods: {
    handleShowSize () {
      console.log('测试显示')
      this.$refs.edit.showFlag = true
    },
    //搜索
    handelSearch () {
      console.log('搜索')
    },

    changeClick: function (e) {
      this.$store.dispatch('getAllArticle', e)
    },

  },
  mounted () {
    this._initHeight()
    this.$store.dispatch('getAllArticle')
  },
  created () {

  }
}
</script>
<style lang="scss">
  .articleList {
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
