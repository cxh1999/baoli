<template>
  <div class="roleManagement common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="$refs.add.showFlag=true">新增角色</el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>权限管理</el-breadcrumb-item>
          <el-breadcrumb-item>角色管理</el-breadcrumb-item>
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
          label="角色名称"
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
            <el-button @click="handleShowSize(scope.id)" class="btn-blue" size="mini">权限管理</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          商品总数:
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
    <add-access-role ref="add"/>
    <edit-access-role ref="edit"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddAccessRole from 'components/accessControl/AddAccessRole'
import EditAccessRole from 'components/accessControl/EditAccessRole'

export default {
  name: 'roleManagement',
  components: { EditAccessRole, AddAccessRole },
  data () {
    return {
      maxHeight: 420,
      page: 'prev, pager, next',
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
  .roleManagement {
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
