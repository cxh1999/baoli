<template>
  <div class="Main">
    <transition name="el-fade-in">
      <el-card class="tip" v-show="tipFlag">
        欢迎使用后台管理系统（v1.2），您本次登录时间为2019年9月10日13时34分，登录IP：1234568809
        <div class="close" @click="tipFlag = !tipFlag">
          <i class="el-icon-close"></i>
        </div>
      </el-card>
    </transition>
    <el-container class="panel">
      <el-row class="list">
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="left">
            <p class="title">会员数量</p>
            <p class="desc"></p>
          </div>
          <div class="center">
            8
          </div>
          <div class="right">
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="left">
            <p class="title">总利润</p>
            <p class="desc"></p>
          </div>
          <div class="center">
            8
          </div>
          <div class="right">
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="left">
            <p class="title">今日新增</p>
            <p class="desc">会员数</p>
          </div>
          <div class="center">
            8
          </div>
          <div class="right">
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="left">
            <p class="title">本月新增</p>
            <p class="desc">会员数</p>
          </div>
          <div class="center">
            8
          </div>
          <div class="right">
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="left">
            <p class="title">本月新增</p>
            <p class="desc">店铺数</p>
          </div>
          <div class="center">
            8
          </div>
          <div class="right">
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="left">
            <p class="title">本月新增</p>
            <p class="desc">专卖店数</p>
          </div>
          <div class="center">
            8
          </div>
          <div class="right">
          </div>
        </el-col>
      </el-row>
    </el-container>
    <el-container class="panel">
      <el-row class="list2">
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="wrapper">
            <div class="list2-head">
              <span>总收入</span>
              <span>3849384</span>
            </div>
            <div class="list2-content">
              <v-chart :options="incomeData" theme="echartTheme2" class="bsChar" ref="chart6"></v-chart>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="wrapper">
            <div class="list2-head">
              <span>总支出</span>
              <span>3849384</span>
            </div>
            <div class="list2-content">
              <v-chart :options="expenseData" theme="echartTheme2" class="bsChar" ref="chart7"></v-chart>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="wrapper">
            <div class="list2-head">
              <span>本月新增代理数</span>
              <span>3849384</span>
            </div>
            <div class="list2-content">
              <v-chart :options="agencyData" theme="echartTheme2" class="bsChar" ref="chart8"></v-chart>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="wrapper">
            <div class="list2-head">
              <span>今日新增订单数</span>
              <span>3849384</span>
            </div>
            <div class="list2-content">
              <v-chart :options="bsData" theme="ovilia-green" class="bsChar" ref="chart8"></v-chart>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="wrapper">
            <div class="list2-head">
              <span>今日新增订单业绩</span>
              <span>3849384</span>
            </div>
            <div class="list2-content">
              <v-chart :options="bsData" theme="ovilia-green" class="bsChar" ref="chart7"></v-chart>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="wrapper">
            <div class="list2-head">
              <span>本月新增订单数</span>
              <span>3849384</span>
            </div>
            <div class="list2-content">
              <v-chart :options="bsData" theme="ovilia-green" class="bsChar" ref="chart8"></v-chart>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="wrapper">
            <div class="list2-head">
              <span>本月新增订单业绩</span>
              <span>3849384</span>
            </div>
            <div class="list2-content">
              <v-chart :options="bsData" theme="ovilia-green" class="bsChar" ref="chart8"></v-chart>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="wrapper">
            <div class="list2-head">
              <span>本月新增股东数</span>
              <span>3849384</span>
            </div>
            <div class="list2-content">
              <v-chart :options="shareholderData" theme="ovilia-green" class="bsChar" ref="chart8"></v-chart>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" class="list-item">
          <div class="wrapper">
            <div class="list2-head">
              <span>订单数量</span>
              <span>3849384</span>
            </div>
            <div class="list2-content">
              <v-chart :options="bsData" theme="ovilia-green" class="bsChar" ref="chart5"></v-chart>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-container>
    <div class="chart-earning">
      <el-row class="row">
        <el-col :xs="24" :md="24" class="char-title">
          本月销售订单业绩走势图
        </el-col>
        <el-col :xs="24" :md="24" class="item">
          <v-chart :options="data1" ref="chart1" theme="ovilia-green"></v-chart>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :xs="24" :md="24" class="char-title">
          本年销售订单业绩走势图
        </el-col>
        <el-col :xs="24" :md="24" class="item">
          <v-chart :options="data2" ref="chart2" theme="ovilia-green"></v-chart>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :xs="24" :md="24" class="char-title">
          事业部
        </el-col>
        <el-col :xs="24" :md="12" class="item">
          <v-chart :options="bsData1" theme="ovilia-green" ref="chart3"></v-chart>
        </el-col>
        <el-col :xs="24" :md="12" class="item">
          <v-chart :options="bsData2" theme="ovilia-green" ref="chart4"></v-chart>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Main',
  data () {
    return {
      tipFlag: true
    }
  },
  computed: {
    ...mapState(['allorder', 'area', 'alluser', 'allusers']),
    data1 () {
      return {
        color: ['#ff907e'],
        title: {
          text: '',
          textStyle: {
            color: '#7acff7'
          }
        },
        legend: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',]
        },
        yAxis: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        series: [
          {
            name: '报单',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210, 500, 800, 100, 300, 100, 120, 132, 101, 134, 90, 230, 210, 500, 800, 100, 300, 100, 120, 132, 101, 134, 90, 120, 132, 101, 134],
            smooth: 0.3,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '复销',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230, 220, 182, 191, 234, 290, 330, 50],
            smooth: 0.3,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '复投',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410, 191, 234, 290, 330, 310, 150, 232, 201, 154, 190, 330, 410, 191, 234, 290, 330, 310, 150, 232, 201, 154, 190, 330, 410],
            smooth: 0.3,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '赠送商城:',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410, 191, 234, 290, 330, 310, 150, 232, 201, 154, 190, 330, 410, 191, 234, 290, 330, 310, 150, 232, 201, 154, 190, 330, 410],
            smooth: 0.3,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '商城下单',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410, 191, 234, 290, 330, 310, 150, 232, 201, 154, 190, 330, 410, 191, 234, 290, 330, 310, 150, 232, 201, 154, 190, 330, 410],
            smooth: 0.3,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
        ],
        animationDuration: 2000
      }
    },
    data2 () {
      return {
        color: ['#ff907e'],
        title: {
          text: '',
          textStyle: {
            color: '#7acff7'
          }
        },
        legend: {},
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        series: [
          {
            name: '报单',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210, 500, 800, 100, 300, 100],
            smooth: 0.3,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '复销',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310, 132, 101, 134, 90, 230],
            smooth: 0.3,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '复投',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410, 191, 234, 290, 330, 310],
            smooth: 0.3,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '赠送商城:',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410, 191, 234, 290, 330, 310],
            smooth: 0.3,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '商城下单',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410, 191, 234, 290, 330, 310],
            smooth: 0.3,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          }
        ],
        animationDuration: 2000
      }
    },
    incomeData () {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center',
          data: ['订单:4546', '充值:89544']
        },
        series: [
          {
            name: '总收入',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '订单:4546' },
              { value: 310, name: '充值:89544' }
            ]
          }
        ]
      }
    },
    expenseData () {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center',
          data: ['提现:4546', '奖励:89544']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '提现:4546' },
              { value: 310, name: '奖励:89544' }
            ]
          }
        ]
      }
    },
    shareholderData () {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center',
          data: ['DT:4546', '两性:89544', '本真:4546', '宝砺:89544']
        },
        series: [
          {
            name: '本月新增股东数',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: 'DT:4546' },
              { value: 310, name: '两性:89544' },
              { value: 310, name: '本真:89544' },
              { value: 310, name: '宝砺:89544' }
            ]
          }
        ]
      }
    },
    agencyData () {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center',
          data: ['省代理:4546', '市代理:89544', '县/区代理:4546']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '省代理:4546' },
              { value: 310, name: '市代理:89544' },
              { value: 310, name: '县/区代理:4546' }
            ]
          }
        ]
      }
    },
    bsData () {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center',
          data: ['报单:4546', '复销:89544', '复投:45852', '赠送商城:283', '商城下单23']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            center: ['20%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '报单:4546' },
              { value: 310, name: '复销:89544' },
              { value: 234, name: '复投:45852' },
              { value: 234, name: '赠送商城:283' },
              { value: 234, name: '商城下单23' },
            ]
          }
        ]
      }
    },
    bsData1 () {
      return {
        title: {
          text: '本月事业部订单业绩扇形图',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center',
          data: ['DT:3000', '两性:5000', '本真:4000']
        },
        series: [
          {
            name: '销售数量',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [
              { value: 335, name: 'DT:3000' },
              { value: 310, name: '两性:5000' },
              { value: 234, name: '本真:4000' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        animationDuration: 2000
      }
    },
    bsData2 () {
      return {
        title: {
          text: '本年事业部订单数扇形图',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          y: 'center',
          data: ['DT:3000', '两性:5000', '本真:4000']
        },
        series: [
          {
            name: '销售业绩',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: [
              { value: 335, name: 'DT:3000' },
              { value: 310, name: '两性:5000' },
              { value: 234, name: '本真:4000' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        animationDuration: 2000
      }
    },
  },
  methods: {},
  mounted () {
    window.addEventListener('resize', () => {
      if (this.$refs.chart1) {
        this.$refs.chart1.resize()
        this.$refs.chart2.resize()
        this.$refs.chart3.resize()
        this.$refs.chart4.resize()
        this.$refs.chart5.resize()
        this.$refs.chart6.resize()
        this.$refs.chart7.resize()
        this.$refs.chart8.resize()
      }
    })
  }
}
</script>

<style scoped lang="scss">
  @import 'main';
</style>
