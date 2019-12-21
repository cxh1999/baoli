// // 直接更新state的多个方法的对象
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

export default {
  [RECEIVE_BSLIST] (state, { bsList }) {
    state.bsList = bsList
  },
  [GET_GOODSLIST] (state, { goodsList }) {
    state.goodsList = goodsList
  },
  [GET_GOODSCLASSIFY] (state, { goodsClassify }) {
    state.goodsClassify = goodsClassify
  },
  [GET_ALLARTICLE] (state, { articleList }) {
    state.articleList = articleList
  },
  [GET_ALLARTICLECLASSIFY] (state, { articleClassifyList }) {
    state.articleClassifyList = articleClassifyList
  },
  [GET_ALLPRESENTEDAPPLY] (state, { presentedApplyList }) {
    state.presentedApplyList = presentedApplyList
  },
  [GET_ALLORDER] (state, { orderList }) {
    state.orderList = orderList
  },
  [GET_ALLVISITORORDER] (state, { visitorOrderList }) {
    state.visitorOrderList = visitorOrderList
  },
  [GET_ALLPUBLICIMG] (state, { publicImgList }) {
    state.publicImgList = publicImgList
  },
}
