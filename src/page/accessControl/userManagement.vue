<template>
  <div class="userManagement common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="handelShowEdit('add')">添加管理员</el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>权限管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-table class="table-list"
                :data="bsList.data"
                :height="maxHeight"
                border
                stripe
                :header-cell-style="{background:'#f9f9f9',color:'#333333',fontWeight:'700'}"
                style="width: 100%">
        <el-table-column
          label="用户名"
          prop="id">
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="name">
        </el-table-column>
        <el-table-column
          label="电话"
          prop="name">
        </el-table-column>
        <el-table-column
          label="职位"
          prop="name">
        </el-table-column>
        <el-table-column
          label="最近登录时间"
          prop="name">
        </el-table-column>
        <el-table-column
          label="操作"
          min-width="70"
          prop="name">
          <template slot-scope="scope">
            <el-button @click="handelShowEdit('edit',scope.id)" class="btn-blue" size="mini">修改</el-button>
            <el-button @click="handelAuthorization(scope.id)" class="btn-yellow" size="mini">授权</el-button>
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
    <access-user v-bind="post" ref="refUser"/>
    <add-authorization ref="addAuthorization"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AccessUser from 'components/accessControl/AccessUser'
import AddAuthorization from 'components/accessControl/AddAuthorization'

export default {
  name: 'userManagement',
  components: { AddAuthorization, AccessUser },
  data () {
    return {
      post: {
        type: '',
        id: 2
      },
      maxHeight: 420,
      page: 'prev, pager, next',
    }
  },
  computed: {
    ...mapState(['bsList'])
  },
  methods: {
    handelShowEdit (type, id) {
      this.post.type = type
      this.post.id = 12
      this.$refs.refUser.showFlag = true
    },
    handelAuthorization () {
      this.$refs.addAuthorization.showFlag = true
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
  .userManagement {
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
