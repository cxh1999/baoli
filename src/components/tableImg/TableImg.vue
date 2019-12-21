<template>
  <div class="table-img-wrap">
    <el-image
      style="width: 80px"
      :src="url"
      fit="contain">
    </el-image>
    <div class="close" @click="$refs.bigimg.bigImg = !$refs.bigimg.bigImg">
      <i class="el-icon-zoom-in"></i>
    </div>
    <big-img :url="url" ref="bigimg"/>
  </div>
</template>

<script>
import BigImg from 'components/tableImg/BigImg'

export default {
  name: 'table_img',
  components: { BigImg },
  props: {
    url: String
  }
}
</script>

<style scoped lang="scss">
  .table-img-wrap {
    position: relative;
    /*width: 100px;*/
    /*padding: 10px;*/
    /*max-width: 80px;*/
    width: 100px;
    .close {
      position: absolute;
      bottom: 0;
      right: 5px;
    }
  }
</style>
