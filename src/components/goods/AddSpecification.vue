<template>
  <el-dialog class="big-dialog AddSpecification" title="规格设置" :visible.sync="showFlag">
    <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-formData">
      <el-form-item label="规格项目" prop="specifications">
        <el-checkbox-group v-model="formData.specifications" size="mini" @change="optionChange">
          <el-checkbox label="sizeA" border>颜色</el-checkbox>
          <el-checkbox label="sizeB" border>尺寸</el-checkbox>
          <el-button size="mini" class="btn-yellow" style="margin-left: 25px;" @click="AddSize()">添加
          </el-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item :label="vals.name" v-for="(vals,index) in checkOptions" :key="vals.id">
        <el-checkbox-group v-model="sendOption[index].size">
          <el-checkbox v-for="(val,index) in vals.size" :label="val.sizeid" :key="index">{{val.sizeName}}</el-checkbox>
          <el-button size="mini" class="btn-green" style="margin-left: 25px;" @click="AddSubSize(vals)">添加
          </el-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">立即设置</el-button>
        <!--        <el-button @click="resetForm('formData')">重置</el-button>-->
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddSpecification',
  data () {
    return {
      showFlag: false,
      formData: {
        specifications: [],
      },
      rules: {
        name: [
          { required: true, message: '请输入问题关键字', trigger: 'blur' },
        ],
      },
      checkAll: false,
      sendOption: [
        { size: [], name: '', id: [] }
      ],
      options: [
        {
          size: [{ sizeName: '白色', sizeid: 'siz1' }, { sizeName: '蓝色', sizeid: 'siz2' }, {
            sizeName: '红色',
            sizeid: 'siz3'
          }],
          name: '颜色',
          id: 'sizeA'
        },
        {
          size: [{ sizeName: 'S', sizeid: 'siz1' }, { sizeName: 'M', sizeid: 'siz2' }, {
            sizeName: 'L',
            sizeid: 'siz3'
          }],
          name: '尺寸',
          id: 'sizeB'
        },
      ],
      checkOptions: [],
      checkedCities: ['上海', '北京'],
      isIndeterminate: true,
    }
  },
  methods: {
    optionChange (value) {
      this.checkOptions = this.options.filter((v) => value.includes(v.id))
      // { size: [], name: '', id: [] }
      let arr = []
      this.checkOptions.forEach(item => {
        let obj = { size: [], name: '', id: '' }
        obj.id = item.id
        let itemSize = []
        item.size.forEach(val => {
          itemSize.push(val.sizeid)
        })
        obj.size = itemSize
        arr.push(obj)
      })
      this.sendOption = arr
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    //添加顶级规格
    AddSize () {
      this.$prompt('请输入规格名称', '添加规格', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        //发送添加子规格请求
        this.$message({
          type: 'success',
          message: '添加成功' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    //添加子规格
    AddSubSize (size) {
      this.$prompt('请输入规格名称', size.name, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        // inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        //发送添加子规格请求
        this.$message({
          type: 'success',
          message: '添加成功' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .NoticeDetail {

  }
</style>
