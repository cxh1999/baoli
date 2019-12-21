<template>
  <div class="goodsCategory common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="$refs.addTopGoods.showFlag=true">添加商品一级分类
          </el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>文章管理</el-breadcrumb-item>
          <el-breadcrumb-item>文章分类</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-table class="table-list"
                :data="tableData"
                :height="maxHeight"
                border
                stripe
                default-expand-all
                row-key="id"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                :header-cell-style="{background:'#f9f9f9',color:'#333333',fontWeight:'700'}"
                style="width: 100%">
        <el-table-column
          label="分类名称"
          min-width="120px"
          prop="date">
        </el-table-column>
        <el-table-column
          label="分类图标"
          prop="name">
          <el-image
            style="width: 80px"
            :src="url"
            fit="contain"></el-image>
        </el-table-column>
        <el-table-column
          label="分类简介"
          prop="name">
        </el-table-column>
        <el-table-column
          label="状态"
          prop="name">
        </el-table-column>
        <el-table-column
          label="操作"
          min-width="100"
          prop="name">
          <template slot-scope="scope">
            <el-button @click="handleShowSize('add',scope.id)" class="btn-blue" size="mini">添加子分类</el-button>
            <el-button @click="handleShowSize('edit',scope.id)" class="btn-yellow" size="mini"
                       icon="el-icon-edit"></el-button>
            <el-button @click="handleDelete(scope.row.id)" class="btn-red" size="mini" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          <!--          商品总数:-->
          <!--          <span class="red1">{{tableData.total}}</span>-->
        </div>
        <div class="right">
          <el-pagination
            :layout=page
            background
            :page-size="tableData.per_page"
            @current-change="changeClick"
            :total="tableData.total">
          </el-pagination>
        </div>
      </el-row>
    </div>
    <add-top-goods v-bind="post" ref="addTopGoods"/>
    <edit-goods-category ref="editGoodsCategory"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddTopGoods from 'components/goods/AddTopGoods'
import EditGoodsCategory from 'components/goods/EditGoodsCategory'
import {setClassIfy} from 'api/index'
export default {
  name: 'goodsCategory',
  components: { AddTopGoods, EditGoodsCategory },
  data () {
    return {
      maxHeight: 420,
      page: 'prev, pager, next',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      post: {
        type: '',
        id: 2
      },
      tableData: [{
        id: 1,
        date: '微商城',
        name: '测试',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '直商城',
        name: '测试',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '限时购',
        name: '测试',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
          id: 31,
          date: '美白系列',
          name: '测试',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 32,
          date: '美白系列',
          name: '测试',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: 4,
        date: '超级商城',
        name: '测试',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {
    ...mapState(['tableData'])
  },
  methods: {
    handleDelete (id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const result = await setClassIfy(id)
        if(result.data===200){
          this.$store.dispatch('getAllPublicImg')
        }
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
    handleShowSize (type, id) {
      this.post.type = type
      this.post.id = 12
      this.$refs.editGoodsCategory.showFlag = true
    },
    changeClick: function (e) {
      this.$store.dispatch('getAllGoodsClassify', e)
    },

  },
  mounted () {
    this._initHeight()
    this.$store.dispatch('getAllGoodsClassify')
  },
  created () {

  }
}
</script>
<style lang="scss">
  .goodsCategory {
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
