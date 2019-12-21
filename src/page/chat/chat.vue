<template>
  <el-dialog
    title=""
    class="chat"
    :visible.sync="showFlag"
    width="90%"
    :fullscreen="fullscreen"
    :show-close="false">
    <div class="left" :class="{isShow:!showLeftFlag}">
      <div class="left-head">
        <el-input
          placeholder="请输入名称搜索"
          v-model="keyword">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <span class="search" @click="sreach">搜索</span>
      </div>
      <div class="left-center wrapperS" ref="wrapperS">
        <ul class="content">
          <li class="item active" @click="handelChoice">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
            <div class="news-count">
              99
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
          <li class="item ">
            <div class="item-left">
              <div class="avatar">
                <img src="../../common/images/avatar.png" alt="">
              </div>
            </div>
            <div class="item-content">
              <div class="item-head">
                <span class="item-head-name">戴女士</span>
                <span class="item-head-time">2019-8-9</span>
              </div>
              <div class="item-bottom">
                vip代理
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="left-bottom" @click="handelShowSetting()">
        <i class="el-icon-setting"></i>
        设置
      </div>
    </div>
    <div class="center" :class="{isShow:showLeftFlag}">
      <div class="center-head">
        <div class="back-list hidden-sm-and-up" @click="showLeft">
          <i class="el-icon-arrow-left"></i>
          列表
        </div>
        <div class="close" @click="showFlag = !showFlag">
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="center-center chat-wrapper" v-show="!showSetting">
        <ul class="chat-list">
          <li class="list-item chat-self">
            <div class="message">消息测试</div>
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
          </li>
          <li class="list-item chat-other">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
            <div class="message">消息测试</div>
          </li>
          <li class="list-item chat-self">
            <div class="message">消息测试</div>
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
          </li>
          <li class="list-item chat-other">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
            <div class="message">消息测试</div>
          </li>
          <li class="list-item chat-self">
            <div class="message">消息测试</div>
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
          </li>
          <li class="list-item chat-other">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
            <div class="message">消息测试</div>
          </li>
          <li class="list-item chat-self">
            <div class="message">消息测试</div>
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
          </li>
          <li class="list-item chat-other">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
            <div class="message">消息测试</div>
          </li>
          <li class="list-item chat-self">
            <div class="message">消息测试</div>
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
          </li>
          <li class="list-item chat-other">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
            <div class="message">消息测试</div>
          </li>
          <li class="list-item chat-self">
            <div class="message">消息测试</div>
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
          </li>
          <li class="list-item chat-other">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
            <div class="message">消息测试</div>
          </li>
          <li class="list-item chat-self">
            <div class="message">消息测试</div>
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
          </li>
          <li class="list-item chat-other">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
            <div class="message">消息测试</div>
          </li>
          <li class="list-item chat-self">
            <div class="message">消息测试</div>
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
          </li>
          <li class="list-item chat-other">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
            <div class="message">消息测试</div>
          </li>
          <li class="list-item chat-self">
            <div class="message">消息测试</div>
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
          </li>
          <li class="list-item chat-other">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
            <div class="message">消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试消息测试</div>
          </li>
        </ul>
      </div>
      <div class="center-bottom" v-show="!showSetting">
        <div class="center-bottom-head">
          <el-popover
            placement="top-start"
            width="300"
            title="快速回复"
            trigger="click">
            <ul class="back-list">
              <li class="list-item">回复1111111111111111111111111111111111</li>
              <li class="list-item">回复1111111111111111111111111111111111</li>
              <li class="list-item">回复1111111111111111111111111111111111</li>
              <li class="list-item">回复1111111111111111111111111111111111</li>
              <li class="list-item">回复1111111111111111111111111111111111</li>
            </ul>
            <i slot="reference" class="iconfont icon-changyonghuifu"></i>
          </el-popover>
          <el-popover
            placement="top-start"
            width="300"
            title="快速回复"
            trigger="click">
            <ul class="back-list">
              <li class="list-item">回复1111111111111111111111111111111111</li>
              <li class="list-item">回复1111111111111111111111111111111111</li>
              <li class="list-item">回复1111111111111111111111111111111111</li>
              <li class="list-item">回复1111111111111111111111111111111111</li>
              <li class="list-item">回复1111111111111111111111111111111111</li>
            </ul>
            <i slot="reference" class="el-icon-circle-plus-outline"></i>
          </el-popover>
        </div>
        <div class="center-bottom-content">
          <el-input
            type="textarea"
            :rows="2"
            resize="none"
            placeholder="请输入内容"
            @keydown.native="listen($event)"
            v-model="textarea">
          </el-input>
        </div>
        <div class="center-bottom-bottom">
          <el-button class="btn-blue" :class="{dis:isDisabled}" round @click="send">发送</el-button>
        </div>
      </div>
      <div class="center-setting" v-show="showSetting">
        <div class="title">快捷回复设置</div>
        <ul class="call-back-list">
          <li class="list-item">
            <p class="left">回复语1:</p>
            <div class="content">
              您好测试是是是是是是是事实是事实事实是事实是事实四十是实施海上您好测试是是是是是是是事实是事实事实是事实是事实四十是实施海上您好测试是是是是是是是事实是事实事实是事实是事实四十是实施海上
            </div>
          </li>
          <li class="list-item">
            <span class="left">回复语1:</span>
            <div class="content">
              您好测试是是是是是是是事实是事实事实是事实是事实四十是实施海上
            </div>
          </li>
          <li class="list-item">
            <span class="left">回复语1:</span>
            <div class="content">
              您好测试是是是是是是是事实是事实事实是事实是事实四十是实施海上
            </div>
          </li>
          <li class="list-item">
            <p class="left">回复语1:</p>
            <div class="content">
              您好测试是是是是是是是事实是事实事实是事实是事实四十是实施海上您好测试是是是是是是是事实是事实事实是事实是事实四十是实施海上您好测试是是是是是是是事实是事实事实是事实是事实四十是实施海上
            </div>
          </li>
          <li class="list-item">
            <span class="left">回复语1:</span>
            <div class="content">
              您好测试是是是是是是是事实是事实事实是事实是事实四十是实施海上
            </div>
          </li>
        </ul>
        <el-button class="btn-yellow add-btn" @click="showAddCallBack=true">添加</el-button>
        <div class="add-back" v-show="showAddCallBack">
          <el-input
            type="textarea"
            rows="4"
            placeholder="请输入快捷回复"
            v-model="textarea"
            maxlength="100"
            show-word-limit
          >
          </el-input>
          <div class="edit">
            <el-button class="btn-red" @click="showAddCallBack=!showAddCallBack">取消</el-button>
            <el-button class="btn-green">确认</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="right hidden-sm-and-down">
      <div class="right-top">用户信息</div>
      <div class="right-content info-wrapper">
        <div class="container">
          <div class="info">
            <div class="avatar">
              <img src="../../common/images/avatar.png" alt="">
            </div>
            <div class="content">
              <div class="name">李先生</div>
              <div class="other">VIP代理 | 铜梁区代理</div>
            </div>
          </div>
          <div class="title">余额</div>
          <div class="balance">
            <span>余额:3434</span>
            <span>电子币:585</span>
            <span>奖金币:545</span>
          </div>
          <div class="title">消费记录</div>
          <div class="con">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>门店进货</h4>
                  <p>订单号：I821768006875853</p>
                  <p>交易时间：2019-08-21 16:40:00</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>门店进货</h4>
                  <p>订单号：I821768006875853</p>
                  <p>交易时间：2019-08-21 16:40:00</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>门店进货</h4>
                  <p>订单号：I821768006875853</p>
                  <p>交易时间：2019-08-21 16:40:00</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>门店进货</h4>
                  <p>订单号：I821768006875853</p>
                  <p>交易时间：2019-08-21 16:40:00</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'chat',
  data () {
    return {
      showFlag: false, //是否显示聊天框
      textarea: '',
      keyword: '', //搜索关键词
      fullscreen: true, //是否全屏
      showLeftFlag: true, //显示消息列表
      showSetting: false, //显示设置
      showAddCallBack: false, //显示添加快捷回复
      Listscroll: null,
      chatScroll: null,
      infoScroll: null,
      clientWidth: 0 //屏幕宽度
    }
  },
  computed: {
    isDisabled: function () {
      return !this.textarea
    }
  },
  methods: {
    handelShowSetting () {
      this.showSetting = !this.showSetting
      this.showLeftFlag = !this.showLeftFlag
    },
    handelChoice () {
      console.log('测试点击事件')
      this.showSetting = false
      this.showLeftFlag = false
      if (this.clientWidth <= 768) {
        this.Listscroll.destroy()
        this.$nextTick(() => {
          this.initChatScroll()
        })
      }
    },
    sreach () {
      this.showLeftFlag = false
      console.log('测试点击事件')
      this.$nextTick(() => {
        this.initChatScroll()
      })
    },
    showLeft () {
      this.showLeftFlag = true
      this.chatScroll.destroy()
      this.$nextTick(() => {
        this.initListscroll()
      })
    },
    listen (event) {
      if (event.keyCode === 13) {
        this.send() // 发送文本
        event.preventDefault() // 阻止浏览器默认换行操作
        return false
      }
    },
    send () {
      if (!this.isDisabled) {
        console.log('发送消息')
      } else {
        return false
      }
    },
    initListscroll () {
      this.Listscroll = new BScroll('.wrapperS', {
        click: true,
        scrollY: true,
        stopPropagation: true
      })
    },
    initChatScroll () {
      this.chatScroll = new BScroll('.chat-wrapper', {
        click: true,
        scrollY: true,
        // preventDefault: false,
        // stopPropagation: true
      })
    },
    initInfoScroll () {
      this.infoScroll = new BScroll('.info-wrapper', {
        click: true,
        scrollY: true,
      })
    },
    //初始化滚动条
    initScroll () {
      if (this.Listscroll) {
        this.Listscroll.destroy()
      }
      if (this.chatScroll) {
        this.chatScroll.destroy()
      }
      if (this.infoScroll) {
        this.infoScroll.destroy()
      }
      this.$nextTick(() => {
        if (document.documentElement.clientWidth <= 768) {
          this.initListscroll()
          this.initChatScroll()
        } else {
          this.initListscroll()
          this.initChatScroll()
          this.initInfoScroll()
        }
      })
    },
  },
  mounted () {
    this.clientWidth = document.documentElement.clientWidth
    this.$nextTick(() => {
      this.fullscreen = this.clientWidth <= 768
      // this.initScroll()
    })
  },
  created () {
  }
}
</script>
<!--<style scoped lang="scss" >-->
<!--  -->
<!--</style>-->
<style lang="scss" scoped>
  @import "chat";
</style>
