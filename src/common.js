import ajax from './api/ajax'
export default {
  install (Vue, options) {
    //设置页面高度
    Vue.prototype._initHeight = function () {
      let tableList = document.querySelector('.table-list')
      let clientWidth = document.documentElement.offsetWidth
      let clientHeight = document.documentElement.offsetHeight
      // 高64
      this.$nextTick(() => {
        let height = tableList.getBoundingClientRect().top
        if (clientWidth < 640) {
          this.page = 'total,prev, next'
          this.maxHeight = 450
        } else {
          this.page = 'total,prev, pager, next'
          this.maxHeight = clientHeight - height - 60
        }
      })
    }
    //测试
    Vue.prototype._ajax = ajax
  }
}
