<template>
  <div class="bsSetting common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="hanldeEdit('add')">新增事业部</el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>系统设置</el-breadcrumb-item>
          <el-breadcrumb-item>APP事业部设置</el-breadcrumb-item>
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
          label="事业部名称"
          prop="id">
        </el-table-column>
        <el-table-column
          label="管理员姓名"
          prop="name">
        </el-table-column>
        <el-table-column
          label="手机账号"
          prop="name">
        </el-table-column>
        <el-table-column
          label="密码设置"
          prop="name">
        </el-table-column>
        <el-table-column
          label="角色"
          prop="name">
        </el-table-column>
        <el-table-column
          label="状态"
          prop="name">
        </el-table-column>
        <el-table-column
          label="操作"
          min-width="70"
          prop="name">
          <template slot-scope="scope">
            <el-button @click="hanldeEdit('edit',scope.row)" class="btn-blue" size="mini">编辑</el-button>
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
    <edit-bs v-bind="post" ref="editBs"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EditBs from 'components/system/EditBs'
import { getBSList, } from '../../api/index'

export default {
  name: 'bsSetting',
  components: { EditBs },
  data () {
    return {
      post: {
        type: '',
      },
      maxHeight: 420,
      page: 'prev, pager, next',
    }
  },
  computed: {
    ...mapState(['bsList'])
  },
  methods: {
    async init () {
      this.$store.dispatch('getBSList')
    },
    hanldeEdit (type, echoed) {
      this.post.type = type
      this.$refs.editBs.showFlag = true
      if (type === 'edit') {
        this.$refs.editBs.formData = JSON.parse(JSON.stringify(echoed))
      } else {
        this.$refs.editBs.formData = {
          status: 1,
        }
      }
    },
    changeClick: function (e) {
      this.$store.dispatch('getBSList', e)
    },

  },
  mounted () {
    this.init()
    this._initHeight()
  },
  created () {
  }
}
</script>
<style lang="scss">
  .bsSetting {
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
