const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: './static',
  // path
  devServer: {
    proxy: {
      '/manage': {
        target: 'https://app.baoliy168.com/manage', // 代理目标的基础路径
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/manage': ''
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('components', resolve('src/components'))
      .set('styles', resolve('src/common/styles'))
      .set('home', resolve('src/page/Home'))
      .set('img', resolve('src/common/images'))
      .set('api', resolve('src/api'))
  },
  transpileDependencies: [ //echarts
    'vue-echarts',
    'resize-detector'
  ]
}
