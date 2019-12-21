import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/login/login'
import Home from '../page/Home'
import HomeMain from '../page/main/Main'
import { getCookie } from 'tiny-cookie'
Vue.use(Router)

function loadRouter (path, router) {
  return () => import(`../page/${path}/${router}`)
}

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'Login', component: Login },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/main',
      meta: { requireAuth: true },
      children: [
        { path: 'main', name: 'HomeMain', meta: { requireAuth: true }, component: HomeMain },
        {
          path: 'shareholderList',
          name: 'shareholderList',
          meta: { requireAuth: true },
          component: loadRouter('shareholder', 'shareholderList')
        },
        {
          path: 'shareholderEarnings',
          name: 'shareholderEarnings',
          meta: { requireAuth: true },
          component: loadRouter('shareholder', 'shareholderEarnings')
        },
        //系统设置
        {
          path: 'baseSetting',
          name: 'baseSetting',
          meta: { requireAuth: true },
          component: loadRouter('system', 'baseSetting')
        },
        {
          path: 'bsSetting',
          name: 'bsSetting',
          meta: { requireAuth: true },
          component: loadRouter('system', 'bsSetting')
        },
        {
          path: 'rewardsSetting',
          name: 'rewardsSetting',
          meta: { requireAuth: true },
          component: loadRouter('system', 'rewardsSetting')
        },
        {
          path: 'persenCenter',
          name: 'persenCenter',
          meta: { requireAuth: true },
          component: loadRouter('system', 'persenCenter')
        },
        //商品管理
        {
          path: 'goodsList',
          name: 'goodsList',
          meta: { requireAuth: true },
          component: loadRouter('goods', 'goodsList')
        },
        {
          path: 'goodsSpecification',
          name: 'goodsSpecification',
          meta: { requireAuth: true },
          component: loadRouter('goods', 'goodsSpecification')
        },
        {
          path: 'goodsCategory',
          name: 'goodsCategory',
          meta: { requireAuth: true },
          component: loadRouter('goods', 'goodsCategory')
        },
        {
          path: 'goodsAdd',
          name: 'goodsAdd',
          meta: { requireAuth: true },
          component: loadRouter('goods', 'goodsAdd')
        },
        //权限模块
        {
          path: 'accessModules',
          name: 'accessModules',
          meta: { requireAuth: true },
          component: loadRouter('accessControl', 'accessModules')
        },
        {
          path: 'roleManagement',
          name: 'roleManagement',
          meta: { requireAuth: true },
          component: loadRouter('accessControl', 'roleManagement')
        },
        {
          path: 'userManagement',
          name: 'userManagement',
          meta: { requireAuth: true },
          component: loadRouter('accessControl', 'userManagement')
        },
        //文章模块
        {
          path: 'articleAdd',
          name: 'articleAdd',
          meta: { requireAuth: true },
          component: loadRouter('article', 'articleAdd')
        },
        {
          path: 'articleList',
          name: 'articleList',
          meta: { requireAuth: true },
          component: loadRouter('article', 'articleList')
        },
        {
          path: 'articleCategory',
          name: 'articleCategory',
          meta: { requireAuth: true },
          component: loadRouter('article', 'articleCategory')
        },
        //公共图片
        {
          path: 'imageManager',
          name: 'imageManager',
          meta: { requireAuth: true },
          component: loadRouter('imageManager', 'imageManager')
        },
        //反馈管理
        {
          path: 'feedbackCategory',
          name: 'feedbackCategory',
          meta: { requireAuth: true },
          component: loadRouter('feedbackManager', 'feedbackCategory')
        },
        {
          path: 'feedbackList',
          name: 'feedbackList',
          meta: { requireAuth: true },
          component: loadRouter('feedbackManager', 'feedbackList')
        },
        {
          path: 'feedbackReply',
          name: 'feedbackReply',
          meta: { requireAuth: true },
          component: loadRouter('feedbackManager', 'feedbackReply')
        },
        //代理管理
        {
          path: 'agentList',
          name: 'agentList',
          meta: { requireAuth: true },
          component: loadRouter('agentManager', 'agentList')
        },
        {
          path: 'agentPerformance',
          name: 'agentPerformance',
          meta: { requireAuth: true },
          component: loadRouter('agentManager', 'agentPerformance')
        },
        //订单管理
        {
          path: 'orderList',
          name: 'orderList',
          meta: { requireAuth: true },
          component: loadRouter('order', 'orderList')
        },
        {
          path: 'visitorOrder',
          name: 'visitorOrder',
          meta: { requireAuth: true },
          component: loadRouter('order', 'visitorOrder')
        },
        //门店管理管理
        {
          path: 'storeList',
          name: 'storeList',
          meta: { requireAuth: true },
          component: loadRouter('store', 'storeList')
        },
        {
          path: 'inventoryRecords',
          name: 'inventoryRecords',
          meta: { requireAuth: true },
          component: loadRouter('store', 'inventoryRecords')
        },
        {
          path: 'purchaseRecords',
          name: 'purchaseRecords',
          meta: { requireAuth: true },
          component: loadRouter('store', 'purchaseRecords')
        },
        {
          path: 'replenishmentRecord',
          name: 'replenishmentRecord',
          meta: { requireAuth: true },
          component: loadRouter('store', 'replenishmentRecord')
        },
        {
          path: 'storeEarnings',
          name: 'storeEarnings',
          meta: { requireAuth: true },
          component: loadRouter('store', 'storeEarnings')
        },
        {
          path: 'storeOrder',
          name: 'storeOrder',
          meta: { requireAuth: true },
          component: loadRouter('store', 'storeOrder')
        },
        // 财务管理
        {
          path: 'rechargeRecord',
          name: 'rechargeRecord',
          meta: { requireAuth: true },
          component: loadRouter('finance', 'rechargeRecord')
        },
        {
          path: 'rewardsRecord',
          name: 'rewardsRecord',
          meta: { requireAuth: true },
          component: loadRouter('finance', 'rewardsRecord')
        },
        {
          path: 'transactionDetail',
          name: 'transactionDetail',
          meta: { requireAuth: true },
          component: loadRouter('finance', 'transactionDetail')
        },
        {
          path: 'transferRecord',
          name: 'transferRecord',
          meta: { requireAuth: true },
          component: loadRouter('finance', 'transferRecord')
        },
        {
          path: 'withdrawalRecord',
          name: 'withdrawalRecord',
          meta: { requireAuth: true },
          component: loadRouter('finance', 'withdrawalRecord')
        },
        // 公告
        {
          path: 'notice',
          name: 'notice',
          meta: { requireAuth: true },
          component: loadRouter('notice', 'notice')
        },
        //日志管理
        {
          path: 'log',
          name: 'log',
          meta: { requireAuth: true },
          component: loadRouter('logManager', 'log')
        },
        //会员管理
        {
          path: 'menberList',
          name: 'menberList',
          meta: { requireAuth: true },
          component: loadRouter('menber', 'menberList')
        },
        {
          path: 'menberPartner',
          name: 'menberPartner',
          meta: { requireAuth: true },
          component: loadRouter('menber', 'menberPartner')
        },
        {
          path: 'orderRepair',
          name: 'orderRepair',
          meta: { requireAuth: true },
          component: loadRouter('menber', 'orderRepair')
        },
        //赠送商城
        {
          path: 'PresentedMenberAudit',
          name: 'PresentedMenberAudit',
          meta: { requireAuth: true },
          component: loadRouter('presentedMall', 'PresentedMenberAudit')
        },
      ]
    }
  ]
})


// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (getCookie('token')) { // 判断本地是否存在access_token
//       next()
//     } else {
//       // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
//       next({
//         path: '/',
//         query: { referrer: to.fullPath }
//       })
//     }
//   } else {
//     next()
//   }
// })
export default router
