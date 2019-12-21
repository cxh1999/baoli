// // 通过mutation间接更新state的多个方法的对象
import {
  RECEIVE_BSLIST,
  GET_GOODSLIST,
  GET_GOODSCLASSIFY,
  GET_ALLARTICLE,
  GET_ALLARTICLECLASSIFY,
  GET_ALLPRESENTEDAPPLY,
  GET_ALLORDER,
  GET_ALLVISITORORDER,
  GET_ALLPUBLICIMG,
} from './mutations-type'
import {
  getBSList,
  getAllGoods,
  getAllGoodsClassify,
  getAllArticle,
  getAllArticleClassify,
  getAllPresentedApply,
  getAllOrder,
  getAllVisitorOrder,
  getAllPublicImg
} from '../api/index'
//
export default {
  //事业部
  //事业部列表
  async getBSList ({ commit }, page) {
    const result = await getBSList(page)
    if (result.code === 200) {
      const bsList = result.data
      commit(RECEIVE_BSLIST, { bsList })
    }
  },

  //商品管理

  //商品列表
  async getAllGoods ({ commit }, page) {
    const result = await getAllGoods(page)
    if (result.code === 200) {
      const goodsList = result.data
      commit(GET_GOODSLIST, { goodsList })
    }
  },

  //商品分类列表
  async getAllGoodsClassify ({ commit }, page) {
    const result = await getAllGoodsClassify(page)
    console.log('测试')
    console.log(result)
    if (result.code === 200) {
      const goodsClassify = result.data
      commit(GET_GOODSCLASSIFY, { goodsClassify })
    }
  },
  //文章
  //文章列表
  async getAllArticle ({ commit }, page) {
    const result = await getAllArticle(page)
    if (result.code === 200) {
      const articleList = result.data
      commit(GET_ALLARTICLE, { articleList })
    }
  },
  //文章分类列表
  async getAllArticleClassify ({ commit }, page) {
    const result = await getAllArticleClassify(page)
    if (result.code === 200) {
      const articleClassifyList = result.data
      commit(GET_ALLARTICLECLASSIFY, { articleClassifyList })
    }
  },

  //赠送商城
  //赠送商城审核列表
  async getAllPresentedApply ({ commit }, page) {
    const result = await getAllPresentedApply(page)
    if (result.code === 200) {
      const presentedApplyList = result.data
      commit(GET_ALLPRESENTEDAPPLY, { presentedApplyList })
    }
  },


  //订单
  //订单列表
  async getAllOrder ({ commit }, page) {
    const result = await getAllOrder(page)
    console.log(result)
    if (result.code === 200) {
      const orderList = result.data
      commit(GET_ALLORDER, { orderList })
    }
  },

  //游客订单
  //游客订单列表
  async getAllVisitorOrder ({ commit }, page) {
    const result = await getAllVisitorOrder(page)
    if (result.code === 200) {
      const visitorOrderList = result.data
      commit(GET_ALLVISITORORDER, { visitorOrderList })
    }
  },

  //公共图片
  //公共图片列表
  async getAllPublicImg ({ commit }, page) {
    const result = await getAllPublicImg(page)
    if (result.code === 200) {
      const publicImgList = result.data
      commit(GET_ALLPUBLICIMG, { publicImgList })
    }
  },
}
