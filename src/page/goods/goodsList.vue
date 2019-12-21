<template>
  <div class="goodsList common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="$router.push('/home/goodsAdd')">添加商品</el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>商品管理</el-breadcrumb-item>
          <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-container class="head row-bg table-short" type="flex">
        <el-container>
          <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
            <el-form-item label="创建时间:" prop="appTime">
              <el-date-picker
                v-model="search.appTime"
                size="mini"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="更新时间:" prop="checkTime">
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
              <el-select v-model="search.shareholderState" placeholder="所属事业部" value="" size="mini" :span="6">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="shareholderState">
              <el-select v-model="search.shareholderState" placeholder="分类筛选" value="" size="mini" :span="6">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
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
              <el-input placeholder="关键字搜索" size="mini" v-model="search.keywords"
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
                :data="goodsList.data"
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
          label="事业部"
          prop="bid">
        </el-table-column>
        <el-table-column
          label="分类"
          prop="cid">
        </el-table-column>
        <el-table-column
          label="商品名称"
          prop="goodsname">
        </el-table-column>
        <el-table-column
          label="商品编号"
          prop="number">
        </el-table-column>
        <el-table-column
          label="重量(公斤)"
          prop="weight">
        </el-table-column>
        <el-table-column
          label="原价"
          prop="originalprice">
        </el-table-column>
        <el-table-column
          label="现价"
          prop="rulingprice">
        </el-table-column>
        <el-table-column
          label="会员价"
          prop="memberprice">
        </el-table-column>
        <el-table-column
          label="成本价"
          prop="costprice">
        </el-table-column>
        <el-table-column
          label="起购数量"
          prop="purchase_num">
        </el-table-column>
        <el-table-column
          label="库存"
          prop="total">
        </el-table-column>
        <el-table-column
          label="已售"
          prop="sold">
        </el-table-column>
        <el-table-column
          label="状态">
          <template slot-scope="scope">
            {{scope.row.status===1?'上架':'下架'}}
          </template>
        </el-table-column>
        <el-table-column
          label="排序"
          prop="sorting">
        </el-table-column>
        <el-table-column
          label="更新时间"
          prop="updated_at">
        </el-table-column>
        <el-table-column
          label="创建时间"
          prop="created_at">
        </el-table-column>
        <el-table-column
          label="操作"
          width="300"
          prop="name">
          <template slot-scope="scope">
            <el-button class="btn-yellow" icon="el-icon-edit" size="mini"
                       @click="$router.push({path:'/home/goodsAdd',query:{id:scope.row.id}})"></el-button>
            <el-button class="btn-red" @click="handleDelete(scope.row)" icon="el-icon-delete" size="mini"></el-button>
            <el-button class="btn-red" @click="handleSpecification(scope.row)" size="mini">规格设置</el-button>
            <el-button class="btn-red" @click="handleShop(scope.row)" size="mini">加入商城</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          总条数:
          <span class="red1">{{goodsList.total}}</span>
        </div>
        <div class="right">
          <el-pagination
            :layout=page
            background
            :page-size="goodsList.per_page"
            @current-change="changeClick"
            :total="goodsList.total">
          </el-pagination>
        </div>
      </el-row>
    </div>
    <add-specification ref="addSpecification"/>
    <add-shop ref="addShop"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddSpecification from 'components/goods/AddSpecification'
import AddShop from 'components/goods/AddShop'

export default {
  name: 'goodsList',
  components: { AddShop, AddSpecification },
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
      test: 34
    }
  },
  computed: {
    ...mapState(['goodsList'])
  },
  methods: {
    handleSpecification (id) {
      this.$refs.addSpecification.showFlag = true
    },
    handleShop (id) {
      this.$refs.addShop.showFlag = true
    },
    handleDelete () {
      this.$confirm('是否删除该商品?', '提示', {
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
      this.$store.dispatch('getAllGoods', e)
    },

  },
  mounted () {
    this.$store.dispatch('getAllGoods')
    this._initHeight()
  },
  created () {

  }
}
</script>
<style lang="scss">
  .goodsList {
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
