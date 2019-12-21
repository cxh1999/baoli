<template>
  <el-dialog
    class="EditUserInfo-warp"
    title=""
    :visible.sync="dialogVisible"
    width="25%">
    <el-form class="form" :model="form" label-width="0" size="big">
      <el-form-item label="">
        <el-input v-model="form.id" placeholder="请输入原密码"></el-input>
        <div class="show-info">
          原密码:
        </div>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="form.password" placeholder="请输入新密码"></el-input>
        <div class="show-info">
          新密码:
        </div>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="form.name" placeholder="请再次确认密码"></el-input>
        <div class="show-info">
          确认密码:
        </div>
      </el-form-item>
      <el-form-item label="">
        <el-button class="btn-block btn-blue">确认</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'EditUserInfo',
  data () {
    return {
      dialogVisible: false,
      form: {
        id: '',
        password: '',
        name: '',
      },
    }
  }
}
</script>

<style scoped lang="scss">
  .EditUserInfo-warp {
    /deep/ .el-dialog {
      min-width: 300px;
    }

    .form {
      .show-info {
        position: absolute;
        left: 10px;
        top: 0;
        font-weight: 700;
      }

      /deep/ .el-input__inner {
        padding: 0 15px 0 75px;
      }
    }
  }
</style>
