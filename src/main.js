import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css'
import './common/styles/index.scss'
import ElementUI from 'element-ui'
// 图标
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
import common from './common'
import commom from './common/commom'
import echartTheme1 from './common/echart/westeros.project'
import echartTheme2 from './common/echart/essos'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/graph'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legendScroll'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markPoint'
//富文本编辑器
ECharts.registerTheme('ovilia-green', echartTheme1)
ECharts.registerTheme('echartTheme2', echartTheme2)
// 手动引入 ECharts 各模块来减小打包体积
Vue.use(common)
Vue.prototype.global = commom
Vue.component('v-chart', ECharts)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
