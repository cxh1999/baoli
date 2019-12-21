<template>
  <div class="imageManager common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="handleShowEdit('add')">添加图片</el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>图片管理</el-breadcrumb-item>
          <el-breadcrumb-item>图片管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <!-- 头部搜索区-->
      <el-container class="head row-bg table-short" type="flex">
        <el-container>
          <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
            <el-form-item prop="appTime" label="添加时间:">
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
            <el-form-item prop="keywords">
              <el-input placeholder="请输入图片名称" size="mini" v-model="search.keywords"
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
                :data="publicImgList.data"
                :height="maxHeight"
                border
                stripe
                :header-cell-style="{background:'#f9f9f9',color:'#333333',fontWeight:'700'}"
                style="width: 100%">
        <el-table-column
          label="图片名称"
          prop="img_name">
        </el-table-column>
        <el-table-column
          label="缩略图"
          max-width=150px
          
          prop="name">
          <template slot-scope="scope">
            <table-img :url="scope.row.img_url"/>
          </template>
        </el-table-column>
        <el-table-column
          label="图片地址"
          prop="img_url">
          <template slot-scope="scope">
            <a style="height:30px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis" :href="scope.row.img_url">{{scope.row.img_url}}</a>
          </template>
        </el-table-column>
        <el-table-column
          label="更新时间"
          prop="updated_at">
        </el-table-column>
        <el-table-column
          label="添加时间"
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
          min-width="100"
          prop="name">
          <template slot-scope="scope">
            <el-button class="btn-yellow" @click="handleShowEdit('edit',scope.row.id)" icon="el-icon-edit"
                       size="mini"></el-button>
            <el-button class="btn-red" @click="handleDelete(scope.row.id)" icon="el-icon-delete"
                       size="mini"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          总条数:
          <span class="red1">{{publicImgList.total}}</span>
        </div>
        <div class="right">
          <el-pagination
            :layout=page
            background
            :page-size="publicImgList.per_page"
            @current-change="changeClick"
            :total="publicImgList.total">
          </el-pagination>
        </div>
      </el-row>
    </div>
    <image-manager-edit v-bind="post" ref="ImageManagerEdit"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { delByIdPublicImg,findByIdPublicImg } from 'api/index'
import TableImg from 'components/tableImg/TableImg'
import ImageManagerEdit from 'components/imageManager/ImageManagerEdit'

export default {
  name: 'imageManager',
  components: { ImageManagerEdit, TableImg },
  data () {
    return {
      post: {
        type: '',
      },
      maxHeight: 420,
      page: 'prev, pager, next',
      search: {
        keywords: '',
      },
    }
  },
  computed: {
    ...mapState(['publicImgList'])
  },
  methods: {
    handleDelete (id) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const result = await delByIdPublicImg(id)
        if (result.code === 200) {
          this.$store.dispatch('getAllPublicImg')
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        } else {
          this.$message({
            type: 'error',
            message: result.msg
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleShowEdit (type, id) {
      this.post.type = type
      this.$refs.ImageManagerEdit.formData = {}
      if (type === 'edit') {
        this.$refs.ImageManagerEdit._initLoad(id)
      }
      this.$refs.ImageManagerEdit.showFlag = true
    },
    //搜索
    handelSearch (data) {
      async ()=>{
        const result = await findByIdPublicImg(data)
        
      }
      
      console.log('搜索')
    },

    changeClick: function (e) {
      this.$store.dispatch('getAllPublicImg', e)
    },

  },
  mounted () {
    this.$store.dispatch('getAllPublicImg')
    this._initHeight()
  },
  created () {

  }
}
</script>
<style lang="scss">
  .imageManager {
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
