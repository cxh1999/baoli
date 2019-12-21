<template>
  <div class="menberPartner">
    <el-container class="head row-bg table-short" type="flex">
      <el-container>
        <el-form :inline="true" :model="search" class="demo-form-inline" ref="search">
          <el-form-item prop="keywords">
            <el-input placeholder="请输入会员账号" size="mini" v-model="search.keywords"
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
    <div class="chart">
      <v-chart :options="data1" id="chart" ref="chart1" class="char-content"></v-chart>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'

export default {
  name: 'menberPartner',
  data () {
    return {
      search: {
        keywords: ''
      },
      size: 60, //节点大小
      listdata: [], //节点数组
      links: [], //链接数组
      legendes: ['v1', 'v2', 'v3', 'self'],
      legendes_json: {
        v1: 'v1',
        v2: 'v2',
        v3: 'v3',
        self: 'self',
      },
      data_json: [
        { name: '张三', parent: false, level: 'v1' },
        { name: '张四', parent: false, level: 'v2' },
        { name: '张五', parent: false, level: 'v1' },
        { name: '张六', parent: false, level: 'v2' },
        { name: '张七', parent: false, level: 'v1' },
        { name: '张八', parent: false, level: 'v3' },
        { name: '张九', parent: false, level: 'v1' },
        { name: '张十', parent: true, level: 'v3' },
      ],
      data_json2: [
        { name: '王三', parent: false, level: 'v1' },
        { name: '王四', parent: false, level: 'v2' },
        { name: '王五', parent: false, level: 'v1' },
        { name: '王六', parent: false, level: 'v2' },
        { name: '王七', parent: false, level: 'v1' },
        { name: '王八', parent: false, level: 'v3' },
        { name: '王九', parent: false, level: 'v1' },
        { name: '王十', parent: true, level: 'v3' },
      ],
      self_json: [{
        name: '老王', level: 'v3', parent: false
      }]
    }
  },
  computed: {
    //链接数组
    texts () {
      const list = []
      for (var i = 0; i < this.legendes.length; i++) {
        list.push({
          'name': this.legendes[i]
        })
      }
      return list
    },
    data1 () {
      return {
        title: {
          text: '会员伙伴关系图',
          top: 'top',
          left: 'center',
          textStyle: {
            color: '#000000'
          }
        },
        tooltip: {
          formatter: '{b}'
        },
        toolbox: {
          show: true,
          feature: {
            restore: {
              show: true
            },
            magicType: {
              show: true,
              type: ['force', 'chord']
            },
            saveAsImage: {
              show: true
            }
          }
        },
        backgroundColor: '#f7f7f7',
        legend: {
          data: this.legendes,
          textStyle: {
            color: '#000000'
          },
          icon: 'circle',
          type: 'scroll',
          orient: 'vertical',
          left: 10,
          top: 20,
          bottom: 20,
          itemWidth: 10,
          itemHeight: 10
        },
        animationDuration: 1000,
        animationEasingUpdate: 'quinticInOut',
        series: [{
          name: '知识图谱',
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 200,
            gravity: 0.02,
            edgeLength: 90,
            layoutAnimation: true,
          },
          data: this.listdata,
          links: this.links,
          categories: this.texts,
          roam: true,
          nodeScaleRatio: 0, //鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
          focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
          lineStyle: {
            normal: {
              opacity: 0.5,
              width: 1.5,
              curveness: 0
            }
          },
          label: {
            normal: {
              show: true,
              position: 'inside',
              textStyle: { //标签的字体样式
                color: '#000000', //字体颜色
                fontWeight: 'normal', //'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                fontSize: '12' //字体大小
              },
              formatter: function (params) {
                return params.data.showName //此处为label转换 并转换颜色
              },
              fontSize: 18,
              fontStyle: '600',
            }
          },
          edgeLabel: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 12
              },
              formatter: '{c}'
            }
          }
        }],
        color: ['#ff7f50', '#6dadd1', '#9765a8', '#91c7ae', '#772cdc',
          '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
          '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
          '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
        ] //自定义调色板
      }
    },
  },
  mounted () {
    this.setData(this.data_json, false)
    this.setData(this.self_json, true)
    this.setLinkData(this.data_json)
    console.log(this.listdata)
    console.log(this.links)
    this.$refs.chart1.chart.on('click', param => {
      this.listdata = []
      this.links = []
      this.self_json = [{
        name: param.name, level: 'v3'
      }]
      this.setData(this.data_json2, false)
      this.setData(this.self_json, true)
      this.setLinkData(this.data_json2)
      console.log(this.listdata)
      console.log(this.links)
    })
  },
  methods: {
    handelSearch () {
      console.log('搜索')
    },
    setData (json, isSelf) {
      let i = 0
      json.forEach(p => {
        this.listdata.push({
          x: i * 50,
          y: this.size + i * 10,
          'name': p.name,
          'showName': p.name,
          'symbolSize': p.parent ? 70 : this.size,
          'category': isSelf ? 'self' : this.legendes_json[p.level],
          'draggable': 'true',
          formatter: function (params) {
            return params.data.showName
          }
        })
        i++
      })
    },
    setLinkData (json) {
      json.forEach(p2 => {
        this.links.push({
          'source': p2.name,
          'target': this.self_json[0].name,
          'value': '',
          lineStyle: {
            normal: {
              color: 'source'
            }
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .menberPartner {
    height: 100%;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    background-color: #f7f7f7;

    /deep/ .table-short .el-input__inner {
      width: 250px !important;
    }

    /deep/ .el-form-item--small.el-form-item {
      margin-bottom: 0;
    }

    .head {
      position: absolute;
      left: 50%;
      top: 10px;
      transform: translateX(-50%);
    }

    .chart {
      width: 100%;
      height: 100%;
      padding-top: 50px;
      box-sizing: border-box;

      .char-content {
        width: 80%;
        height: 100%;
        box-sizing: border-box;
      }
    }

  }
</style>
