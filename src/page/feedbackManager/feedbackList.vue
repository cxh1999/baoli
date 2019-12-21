<template>
  <div class="feedbackList common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <!--          <el-button size="mini" class="btn-purple btn" @click="$refs.add.showFlag=true">发布文章</el-button>-->
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>反馈消息</el-breadcrumb-item>
          <el-breadcrumb-item>反馈处理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-container class="head row-bg table-short" type="flex">
        <el-container>
          <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
            <el-form-item prop="appTime" label="反馈时间:">
              <el-date-picker
                v-model="search.appTime"
                size="mini"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="checkTime" label="处理时间:">
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
              <el-select v-model="search.shareholderState" placeholder="反馈类型" value="" size="mini" :span="6">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="shareholderState">
              <el-select v-model="search.shareholderState" placeholder="反馈状态" value="" size="mini" :span="6">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="shareholderState">
              <el-select v-model="search.shareholderState" placeholder="回复状态" value="" size="mini" :span="6">
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
          label="反馈类型"
          prop="id">
        </el-table-column>
        <el-table-column
          label="反馈主题"
          prop="name">
        </el-table-column>
        <el-table-column
          label="反馈截图"
          width="120px"
          prop="name">
          <template slot-scope="">
            <table-img :url="url"/>
          </template>
        </el-table-column>
        <el-table-column
          label="反馈用户"
          prop="name">
        </el-table-column>
        <el-table-column
          label="反馈账号/手机"
          prop="name">
        </el-table-column>
        <el-table-column
          label="来源"
          prop="name">
        </el-table-column>
        <el-table-column
          label="反馈时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="回复状态"
          prop="name">
        </el-table-column>
        <el-table-column
          label="操作人"
          prop="name">
        </el-table-column>
        <el-table-column
          label="IP"
          prop="name">
        </el-table-column>
        <el-table-column
          label="处理时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="操作"
          width="260"
          prop="name">
          <template slot-scope="scope">
            <el-button class="btn-yellow" icon="el-icon-search" size="mini"
                       @click="$refs.FeedbackListDetail.showFlag=true"></el-button>
            <el-button class="btn-yellow" size="mini" @click="$refs.FeedbackListReply.showFlag=true">回复</el-button>
            <el-button class="btn-purple" size="mini">待处理</el-button>
            <el-button @click="handleDelete(scope.id)" class="btn-red" size="mini" icon="el-icon-delete"></el-button>
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
    <feedback-list-detail ref="FeedbackListDetail"/>
    <feedback-list-reply ref="FeedbackListReply"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TableImg from 'components/tableImg/TableImg'
import FeedbackListDetail from 'components/feedback/FeedbackListDetail'
import FeedbackListReply from 'components/feedback/FeedbackListReply'

export default {
  name: 'feedbackList',
  components: { TableImg, FeedbackListDetail, FeedbackListReply },
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
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleShowSize () {
      console.log('测试显示')
      this.$refs.edit.showFlag = true
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
  .feedbackList {
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
