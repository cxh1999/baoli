<template>
  <div class="accessModules common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="$refs.add.showFlag=true">添加权限</el-button>
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
            <el-form-item>
              <el-input placeholder="关键词搜索" size="mini" v-model="search.keywords"
                        @keyup.enter.native="handelSearch"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="btn-blue" @click="handelSearch" size="mini">搜索</el-button>
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
          label="权限名称"
          prop="id">
        </el-table-column>
        <el-table-column
          label="描述"
          prop="name">
        </el-table-column>
        <el-table-column
          label="操作"
          min-width="70"
          prop="name">
          <template slot-scope="scope">
            <el-button @click="handleShowSize(scope.row)" class="btn-blue" size="mini">修改权限</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
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
    <add-access-control ref="add"/>
    <edit-access-control ref="edit"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddAccessControl from 'components/accessControl/AddAccessControl'
import EditAccessControl from 'components/accessControl/EditAccessControl'

export default {
  name: 'accessModules',
  components: { EditAccessControl, AddAccessControl },
  data () {
    return {
      maxHeight: 420,
      page: 'prev, pager, next',
      search: {
        keywords: '',
      },
    }
  },
  computed: {
    ...mapState(['bsList'])
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
  .accessModules {
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
