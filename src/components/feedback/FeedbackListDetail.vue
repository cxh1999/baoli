<template>
  <el-dialog class="big-dialog AddAccessControl" title="反馈详情" :visible.sync="showFlag">
    反馈详情
  </el-dialog>
</template>

<script>
export default {
  name: 'AddAccessControl',
  data () {
    return {
      showFlag: false,
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .AddAccessControl {

  }
</style>
