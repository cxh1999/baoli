<template>
  <div class="baseSetting common-css">
    <div class="wrapper">
      <!--    导航栏-->
      <el-row class="nav" type="flex">
        <div class="test">
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/home/main' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>系统设置</el-breadcrumb-item>
          <el-breadcrumb-item>APP奖励设置</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="复销商城">
        <repeat-mall/>
      </el-tab-pane>
      <el-tab-pane label="复投商城">
        <redelivery/>
      </el-tab-pane>
      <el-tab-pane label="报单商城">
        <declaration/>
      </el-tab-pane>
      <el-tab-pane label="赠送商城">
        <presented-mall/>
      </el-tab-pane>
      <el-tab-pane label="其他设置">
        <other/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import redelivery from 'components/system/redelivery'
import Declaration from 'components/system/Declaration'
import PresentedMall from 'components/system/PresentedMall'
import RepeatMall from 'components/system/RepeatMall'
import other from 'components/system/Other'

export default {
  name: 'baseSetting',
  components: { RepeatMall, PresentedMall, Declaration, redelivery, other },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style scoped lang="scss">
  @import "~styles/mixins.scss";
</style>
