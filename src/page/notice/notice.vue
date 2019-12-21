<template>
  <div class="notice common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="$refs.addNotice.showFlag = true">发布公告</el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>公告管理</el-breadcrumb-item>
          <el-breadcrumb-item>公告列表</el-breadcrumb-item>
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
            <el-form-item prop="shareholderState">
              <el-select v-model="search.shareholderState" placeholder="发布对象" value="" size="mini" :span="6">
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
          label="公告标题"
          prop="id">
        </el-table-column>
        <el-table-column
          label="发布对象"
          prop="id">
        </el-table-column>
        <el-table-column
          label="发布时间"
          prop="id">
        </el-table-column>
        <el-table-column
          label="操作"
          width="140"
          prop="name">
          <template slot-scope="">
            <el-button class="btn-yellow" size="mini"
                       @click="showDetail">公告内容
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
    <add-notice ref="addNotice"/>
    <notice-detail ref="noticeDetail"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddNotice from 'components/notice/AddNotice'
import NoticeDetail from 'components/notice/NoticeDetail'

export default {
  name: 'notice',
  components: { NoticeDetail, AddNotice },
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
      this.$refs.noticeDetail.showFlag = true
    },
    //搜索
    handelSearch () {
      console.log('搜索')
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
  .notice {
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
