<template>
  <div class="login-warpper">
    <div class="wrapper">
      <div class="title">
        <div class="logo-xs hidden-lg-and-up">
          <img src="../../common/images/logo.png" alt="">
        </div>
        <div class="en">宝励尚善集团总后台管理系统</div>
        <div class="ln">The General background Management system of Baoli Shangshan Group</div>
      </div>
      <div class="Login">

        <el-form :model="formData" ref="formData" class="demo-ruleForm" label-position="left"
                 size="big">
          <h1 class="login-title">管理员登录</h1>
          <el-form-item
            v-if="phoneLoing"
            label=""
            prop="username"
            :rules="[
      { required: true, message: '用户名不能为空'},
    ]"
          >
            <el-input type="text" v-model="formData.username" autocomplete="off" placeholder="请输入用户名"
                      prefix-icon="iconfont icon-yonghu1"></el-input>
          </el-form-item>
          <el-form-item
            v-if="phoneLoing"
            label=""
            prop="password"
            :rules="[
      { required: true, message: '密码不能为空'},
    ]"
          >
            <el-input type="password" v-model="formData.password" autocomplete="off"
                      prefix-icon="iconfont icon-mima1" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item
            v-if="phoneLoing"
            class="last"
            label=""
            prop="captcha"
            :rules="[
      { required: true, message: '验证码不能为空'},
    ]"
          >
            <div class="captcha" @click="getImgCaptcha">
              <img src="manage/loginCaptcha" alt="" ref="imgCaptcha">
            </div>
            <el-input type="text" v-model="formData.captcha" autocomplete="off" placeholder="验证码"
                      prefix-icon="iconfont icon-unie604 ico"></el-input>
          </el-form-item>
          <el-form-item
            v-if="!phoneLoing"
            label=""
            prop="phone"
            :rules="[
      { required: true, message: '手机号不能为空'},
      { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号' }
    ]"
          >
            <el-input type="text" v-model="formData.phone" autocomplete="off" placeholder="请输入手机号"
                      prefix-icon="iconfont icon-yonghu1"></el-input>
          </el-form-item>
          <el-form-item
            v-if="!phoneLoing"
            label=""
            prop="sms"
            :rules="[
      { required: true, message: '验证码不能为空'},
    ]"
          >
            <el-input type="text" v-model="formData.sms" autocomplete="off"
                      placeholder="请输入验证码"
                      prefix-icon="iconfont icon-yonghu1"></el-input>
            <div class="get-captcha" :class="sendCaptcha?'':'is-disable'" @click="getCaptcha">
              {{sendCaptcha?'获取短信验证码':'重新获取'+'('+captchaNum+')'}}
            </div>
          </el-form-item>
          <div class="login-type">
            <span @click="phoneLoing=!phoneLoing">{{phoneLoing?'手机验证码登录':' 用户名登录'}}</span>
          </div>
          <el-form-item class="submit-item">
            <el-button type="primary" @click="submitForm('formData')" class="submit" round size="medium">登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="logo hidden-md-and-down">
        <img src="../../common/images/logo.png" alt="">
      </div>
      <div class="center-bg">
        <img src="../../common/images/center-bg.png" alt="">
      </div>
      <div class="buttom-bg">
        <img src="../../common/images/buttom-bg.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { Ilogin, IgetSms, IgetCaptcha } from '../../api/index'
import { set as setCookie, getCookie } from 'tiny-cookie'

export default {
  name: 'Login',
  data () {
    return {
      phoneLoing: true,
      sendCaptcha: true,
      captchaNum: 60,
      formData: {
        username: '',
        password: '',
        captcha: '',
        phone: '',
        sms: ''
      },
      codeImg: ''
    }
  },
  methods: {
    //获取图片验证码
    async getImgCaptcha () {
      this.$refs.imgCaptcha.src = 'manage/loginCaptcha?' + Date.now()
    },
    async getCaptcha () {
      const reg = /^1[3|4|5|7|8][0-9]{9}$/ //验证规则
      if (!reg.test(this.formData.phone)) {
        this.$message.error('请输入正确的手机号')
        return false
      }
      if (!this.sendCaptcha) {
        return false
      }
      this.sendCaptcha = false
      await IgetSms(this.formData.phone)
      this.timer = setInterval(() => {
        if (this.captchaNum > 0) {
          this.captchaNum--
        } else {
          this.sendCaptcha = true
          this.captchaNum = 60
        }
      }, 1000)
    },
    submitForm (formName) {
      let sendData = {}
      if (this.phoneLoing) {
        //账号密码登录
        sendData = {
          type: 'account',
          ...this.formData
        }
      } else {
        sendData = {
          type: 'sms',
          ...this.formData
        }
      }
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await Ilogin(sendData)
          if (this.phoneLoing) {
            this.$refs.imgCaptcha.src = 'manage/loginCaptcha?' + Date.now()
          }
          if (result.code === 200) {
            // const expires = 1000 * 60 * 60 * 24 * 7
            setCookie('token', result.data.token, { expires: 7 })
            this.$router.push('/home')
          } else {
            this.$router.push('/home')
            this.$message.error(result.message)
          }
        } else {
          if (this.phoneLoing) {
            this.$refs.imgCaptcha.src = 'manage/loginCaptcha?' + Date.now()
          }
          this.$message.error('请填写正确的信息')
          return false
        }
      })
    },
  },
  mounted () {
    if (getCookie('token')) {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss">
  /*text-align: center;*/
  .msg {
    /* color: $color-black-1;*/
    .el-form-item__content {
      font-size: 12px;
    }
  }
</style>
<style scoped lang="scss">
  @import "login";
</style>
