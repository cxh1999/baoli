<template>
  <div class="menberList common-css">
    <div class="wrapper">
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="$refs.addMenber.showFlag = true">添加会员</el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>会员管理</el-breadcrumb-item>
          <el-breadcrumb-item>会员列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-container class="head row-bg table-short" type="flex">
        <el-container>
          <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
            <el-form-item prop="appTime" label="注册时间:">
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
              <el-select v-model="search.shareholderState" placeholder="报单商城等级" value="" size="mini" :span="6">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="shareholderState">
              <el-select v-model="search.shareholderState" placeholder="复销商城等级" value="" size="mini" :span="6">
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
          label="会员账号"
          prop="id">
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="id">
        </el-table-column>
        <el-table-column
          label="昵称"
          prop="id">
        </el-table-column>
        <el-table-column
          label="头像"
          prop="id">
        </el-table-column>
        <el-table-column
          label="openid"
          prop="id">
        </el-table-column>
        <el-table-column
          label="性别"
          prop="id">
        </el-table-column>
        <el-table-column
          label="报单商城等级"
          prop="id">
        </el-table-column>
        <el-table-column
          label="复销商城等级"
          prop="id">
        </el-table-column>
        <el-table-column
          label="分享人账号"
          prop="id">
        </el-table-column>
        <el-table-column
          label="分享人姓名"
          prop="id">
        </el-table-column>
        <el-table-column
          label="余额"
          prop="id">
        </el-table-column>
        <el-table-column
          label="宝砺豆"
          prop="id">
        </el-table-column>
        <el-table-column
          label="宝砺豆(冻结)"
          prop="id">
        </el-table-column>
        <el-table-column
          label="复销币"
          prop="id">
        </el-table-column>
        <el-table-column
          label="复投币"
          prop="id">
        </el-table-column>
        <el-table-column
          label="复销累计"
          prop="id">
        </el-table-column>
        <el-table-column
          label="终身绑定门店编号"
          prop="id">
        </el-table-column>
        <el-table-column
          label="终身绑定门店名称"
          prop="id">
        </el-table-column>
        <el-table-column
          label="绑定微信"
          prop="id">
        </el-table-column>
        <el-table-column
          label="激活时间"
          prop="id">
        </el-table-column>
        <el-table-column
          label="最近登录时间"
          prop="id">
        </el-table-column>
        <el-table-column
          label="注册时间"
          prop="id">
        </el-table-column>
        <el-table-column
          label="禁止登录"
          prop="id">
          <template slot-scope="scope">
            <el-button type="success" icon="el-icon-check" circle @click="handelToggleLogin(scope.id)"></el-button>
            <!--            <el-button type="danger" icon="el-icon-close" circle></el-button>-->
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="220"
          prop="name">
          <template slot-scope="scope">
            <el-button class="btn-yellow" icon="el-icon-edit" size="mini"
                       @click="handleEdit(scope.id)">
            </el-button>
            <el-button class="btn-green" size="mini"
                       @click="handelRecharge(scope.id)">充值
            </el-button>
            <el-button class="btn-purple" size="mini"
                       @click="handelPackage(scope.id)">会场礼包
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
    <add-menber ref="addMenber"/>
    <menber-recharge ref="menberRecharge"/>
    <edit-menber ref="editMenber"/>
    <menber-package ref="menberPackage"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddMenber from 'components/menber/AddMenber'
import MenberRecharge from 'components/menber/MenberRecharge'
import EditMenber from 'components/menber/EditMenber'
import MenberPackage from 'components/menber/MenberPackage'

export default {
  name: 'menberList',
  components: { EditMenber, AddMenber, MenberRecharge, MenberPackage },
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
    handelPackage () {
      this.$refs.menberPackage.showFlag = true
    },
    handelToggleLogin () {
      this.$confirm('确认禁止该用户登录?', '提示', {
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
    handelRecharge () {
      this.$refs.menberRecharge.showFlag = true
    },
    handleEdit () {
      this.$refs.editMenber.showFlag = true
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
  .menberList {
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
