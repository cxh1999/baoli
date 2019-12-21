<template>
  <div class="Home">
    <div class="container">
      <header class="header">
        <div class="left">
          <a href="#" class="logo1 hidden-xs-only">
            <img src="../common/images/logo1.png" alt="">
          </a>
          <a href="#" class="logo2 hidden-md-and-up">
            <img src="../common/images/logo2.png" alt="">
          </a>
          <div class="switch-menu">
            <i class="iconfont" @click="switchMenu">&#xe61f;</i>
          </div>
          <div class="head-name hidden-md-and-down">
            <p class="cn">宝励尚善集团总后台管理系统</p>
            <p class="en">The General Management system of Baoli Shangshan Group</p>
          </div>
        </div>
        <div class="right">
          <div class="wl hidden-xs-only">欢迎您,系统管理员admin!</div>
          <div class="message" @click="showChat">
            <el-badge :value="100" :max="99">
              <i class="iconfont news">&#xe63b;</i>
            </el-badge>
          </div>
          <el-dropdown class="user" trigger="click" @command="handleCommand">
            <div class="el-dropdown-link">
              <div class="avatar">
                <img src="../common/images/avatar.png" alt="">
              </div>
              <p class="username ellipsis">用户3243434</p>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown" class="dr-w">
              <el-dropdown-item icon="iconfont icon-gerenzhongxin2" command="a">个人中心</el-dropdown-item>
              <el-dropdown-item icon="iconfont icon-tuichu2" command="b">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </header>
      <div class="container" :class="{on:isCollapse}">
        <aside class="aside wrapper" ref="wrapper">
          <div class="content" :class="{on:isOn}">
            <el-menu default-active="1" class="el-menu-vertical-demo"
                     :collapse="isCollapse" :router="true" :unique-opened="true"
                     background-color="#f6f5f5" menu-trigger="click" :mode="mode"
                     @select="handleSelect"
                     text-color="#333">
              <el-menu-item index="/home/main">
                <i class="iconfont ico">&#xe626;</i>
                <span>首页概况</span>
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title">
                  <i class="iconfont ico">&#xe651;</i>
                  <span slot="title">系统设置</span>
                </template>
                <el-menu-item-group class="test-class-hshahahaha">
                  <el-menu-item index="/home/persenCenter" @click="handelTest()">个人中心</el-menu-item>
                  <el-menu-item index="/home/baseSetting">APP基础设置</el-menu-item>
                  <el-menu-item index="/home/bsSetting">APP事业部设置</el-menu-item>
                  <el-menu-item index="/home/rewardsSetting">APP奖励设置</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="iconfont ico">&#xe6e1;</i>
                  <span slot="title">商品管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/goodsList">商品列表</el-menu-item>
                  <el-menu-item index="/home/goodsCategory">商品分类</el-menu-item>
                  <el-menu-item index="/home/goodsAdd">添加商品</el-menu-item>
                  <el-menu-item index="/home/goodsSpecification">商品规格</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="iconfont ico">&#xe665;</i>
                  <span slot="title">文章管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/articleCategory">文章分类</el-menu-item>
                  <el-menu-item index="/home/articleList">文章列表</el-menu-item>
                  <el-menu-item index="/home/articleAdd">发布文章</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="iconfont ico">&#xe661;</i>
                  <span slot="title">订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/orderList">订单列表</el-menu-item>
                  <el-menu-item index="/home/visitorOrder">游客订单</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="iconfont ico">&#xe664;</i>
                  <span slot="title">会员管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/menberList">会员列表</el-menu-item>
                  <el-menu-item index="/home/menberPartner">会员伙伴</el-menu-item>
                  <el-menu-item index="/home/orderRepair">修改错误订单</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="iconfont ico">&#xe63c;</i>
                  <span slot="title">股东管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/shareholderList">股东列表</el-menu-item>
                  <el-menu-item index="/home/shareholderEarnings">股东分红</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="iconfont ico">&#xe65b;</i>
                  <span slot="title">代理管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/agentList">代理列表</el-menu-item>
                  <el-menu-item index="/home/agentPerformance">代理业绩</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="iconfont ico">&#xe66c;</i>
                  <span slot="title">专卖店管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/storeList">门店列表</el-menu-item>
                  <el-menu-item index="/home/storeEarnings">门店收益</el-menu-item>
                  <el-menu-item index="/home/storeOrder">门店订单</el-menu-item>
                  <el-menu-item index="/home/replenishmentRecord">补货记录</el-menu-item>
                  <el-menu-item index="/home/purchaseRecords">进货记录</el-menu-item>
                  <el-menu-item index="/home/inventoryRecords">库存更改记录</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="9">
                <template slot="title">
                  <i class="iconfont ico">&#xe702;</i>
                  <span slot="title">财务管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/transactionDetail">交易明细</el-menu-item>
                  <el-menu-item index="/home/rechargeRecord">充值记录</el-menu-item>
                  <el-menu-item index="/home/transferRecord">转账记录</el-menu-item>
                  <el-menu-item index="/home/rewardsRecord">奖励记录</el-menu-item>
                  <el-menu-item index="/home/withdrawalRecord">提现处理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="iconfont ico">&#xe6b3;</i>
                  <span slot="title">赠送商城</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/PresentedMenberAudit">会员审核</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="11">
                <template slot="title">
                  <i class="iconfont ico">&#xe685;</i>
                  <span slot="title">公告管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/notice">公告列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="12">
                <template slot="title">
                  <i class="iconfont ico">&#xe676;</i>
                  <span slot="title">图片管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/imageManager">图片管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="13">
                <template slot="title">
                  <i class="iconfont ico">&#xe602;</i>
                  <span slot="title">反馈消息</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/feedbackCategory">类型设置</el-menu-item>
                  <el-menu-item index="/home/feedbackReply">快捷回复</el-menu-item>
                  <el-menu-item index="/home/feedbackList">反馈处理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="14">
                <template slot="title">
                  <i class="iconfont ico">&#xe679;</i>
                  <span slot="title">日志管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/log">日志列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="15">
                <template slot="title">
                  <i class="iconfont ico">&#xe657;</i>
                  <span slot="title">权限管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/accessModules">权限模块</el-menu-item>
                  <el-menu-item index="/home/roleManagement">角色管理</el-menu-item>
                  <el-menu-item index="/home/userManagement">用户管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
        </aside>
        <main class="home-main">
          <transition name="el-fade-in" mode="out-in">
<!--            <keep-alive exclude="goodsAdd,articleAdd">-->
              <router-view/>
<!--            </keep-alive>-->
          </transition>
        </main>
      </div>
    </div>
    <chat ref="chat"/>
  </div>
</template>

<script>
import Chat from '@/page/chat/chat'
import { removeCookie } from 'tiny-cookie'

export default {
  name: 'Home',
  components: { Chat },
  data () {
    return {
      isCollapse: false,
      isOn: false,
      restaurants: [], //搜索返回的数组
      keywords: '',
      mode: 'vertical',
    }
  },
  methods: {
    switchMenu () {
      if (document.documentElement.clientWidth > 768) {
        this.isCollapse = this.isOn = !this.isCollapse
      } else {
        this.isOn = !this.isOn
      }
    },
    handelTest () {
      console.log('测试')
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    showChat () {
      this.$refs.chat.showFlag = true
      this.$refs.chat.initScroll()
    },
    querySearch (queryString, cb) {
      let restaurants = this.restaurants
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    handleSelect (item) {
      if (document.documentElement.clientWidth <= 768) {
        this.isOn = false
      }
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    async handleCommand (command) {
      if (command === 'a') {
        this.$router.push('/home/persenCenter')
      }
      if (command === 'b') {
        removeCookie('token')
        this.$router.replace('/login')
      }
    },
  },
  computed: {
    // ...mapState(['userinfo'])
  },
  mounted () {
    window.onresize = () => {
      if (document.documentElement.clientWidth < 768) {
        this.isOn = false
        this.isCollapse = false
      }
    }
  },
  activated () {
  },
  created () {
    if (document.documentElement.clientWidth > 768) {
      // this.mode = 'vertical'
      // this.isCollapse = false
    }
  }
}
</script>
<style lang="scss">
  .el-dropdown-menu {
    width: 135px;
  }

  .el-menu--collapse {
    width: 40px !important;
  }

  /*@media (max-width: 768px) {*/
  /*  .el-menu--collapse {*/
  /*    width: 0 !important;*/
  /*  }*/
  /*}*/

  .el-submenu__title {
    padding: 0 10px !important;
  }

  .el-menu-item {
    padding: 0 10px !important;
  }
  
</style>
<style scoped lang="scss">
  @import "home";
</style>
