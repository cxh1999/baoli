<template>
  <div class="feedbackCategory common-css">
    <div class="wrapper">
      <!--导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
          <el-button size="mini" class="btn-purple btn" @click="handleShowEdit('add')">添加
          </el-button>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>反馈消息</el-breadcrumb-item>
          <el-breadcrumb-item>类型设置</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-table class="table-list"
                :data="tableData"
                :height="maxHeight"
                default-expand-all
                row-key="id"
                :header-cell-style="{background:'#f9f9f9',color:'#333333',fontWeight:'700'}"
                style="width: 100%">
        <el-table-column
          label="类型"
          prop="date">
        </el-table-column>
        <el-table-column
          label="操作"
          min-width="100"
          prop="name">
          <template slot-scope="scope">
            <el-button @click="handleShowEdit('edit',scope.id)" class="btn-yellow" size="mini" icon="el-icon-edit"></el-button>
            <el-button @click="handleDelete(scope.id)" class="btn-red" size="mini" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="footer" type="flex">
        <div class="left">
          <!--          商品总数:-->
          <!--          <span class="red1">{{bsList.total}}</span>-->
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
    <feedback-type-edit v-bind="post" ref="FeedbackTypeEdit"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FeedbackTypeEdit from 'components/feedback/FeedbackTypeEdit'

export default {
  name: 'feedbackCategory',
  components: { FeedbackTypeEdit },
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
        date: '功能异常',
        name: '测试',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '体验不佳',
        name: '测试',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: 3,
        date: '改进建议',
        name: '测试',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        id: 4,
        date: '其他',
        name: '测试',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
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
    handleShowEdit (type, id) {
      this.post.type = type
      this.post.id = 12
      this.$refs.FeedbackTypeEdit.showFlag = true
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
  .feedbackCategory {
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
