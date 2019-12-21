<template>
  <div class="persenCenter">
    <el-form class="form" :model="formData" label-width="0" size="big" readonly>
      <el-form-item>
        <el-upload
          class="avatar-uploader test"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <div class="edit" v-show="imageUrl"><i class="el-icon-edit"></i></div>
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-if="!imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="formData.id" readonly></el-input>
        <div class="show-info">
          用户名:
        </div>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="formData.password" type="password" readonly></el-input>
        <div class="change-password">
          <el-button type="danger" round size="mini" @click="$refs.userInfo.dialogVisible=true">修改密码</el-button>
        </div>
        <div class="show-info">
          密码:
        </div>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="formData.name"></el-input>
        <div class="show-info">
          姓名:
        </div>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="formData.phone"></el-input>
        <div class="show-info">
          电话:
        </div>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="formData.role" readonly></el-input>
        <div class="show-info">
          职位:
        </div>
      </el-form-item>
      <el-form-item label="">
        <el-button class="btn-blue btn-block" round>修改</el-button>
      </el-form-item>
    </el-form>
    <edit-user-info ref="userInfo"/>
  </div>
</template>

<script>
import EditUserInfo from 'components/system/EditUserInfo'

export default {
  name: 'persenCenter',
  components: { EditUserInfo },
  data () {
    return {
      formData: {
        id: '32444444',
        password: '***********',
        name: '张小霭',
        phone: '13101060040',
        role: 'DT管理员'
      },
      showEdit: false,
      // imageUrl: ''
      imageUrl: '/img/avatar.a56b8468.png'
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      // const isJPG = file.type === 'image/jpeg'
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png')
      const isLt2M = file.size / 1024 / 1024 < 1
      console.log(file)
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 1MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style lang="scss" scoped>
  .persenCenter {
    width: 100%;
    padding-top: 60px;
    background-color: #eeeeee;
    height: 100%;
    box-sizing: border-box;
    .form {
      margin: 0 auto;
      background-color: #fff;
      padding: 15px 15px 1px 15px;
      width: 30%;
      min-width: 280px;

      .show-info {
        position: absolute;
        left: 10px;
        top: 0;
        font-size: 14px;
        /*font-weight: 700;*/
      }

      /deep/ .el-input__inner {
        padding: 0 15px 0 75px;
      }

      .change-password {
        position: absolute;
        right: 10px;
        top: 0;
      }

      /deep/ .avatar-uploader {
        text-align: center;

        &.avatar-uploader:hover {
          .edit {
            display: block;
          }
        }

        .edit {
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #474f57;
          color: #ffffff;
          height: 20px;
          font-size: 16px;
          width: 25px;
          line-height: 20px;
        }

        .el-upload {
          /*border: 1px solid #d6d6d6;*/
          background-color: #dddddd;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .el-upload:hover {
          border-color: #409EFF;
        }

        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 100px;
          height: 100px;
          line-height: 100px;
          text-align: center;
        }

        .avatar {
          width: 100px;
          height: 100px;
          display: block;
        }
      }

    }
  }
</style>
