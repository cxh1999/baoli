import ajax from './ajax'

const BASE_URL = '/manage'

/*
登录模块
 */
//登录
export const Ilogin = (data) => ajax(BASE_URL + '/login', data, 'post')
//获取短信验证码
export const IgetSms = (data) => ajax(BASE_URL + '/loginSms', { phone: data, })
export const IgetCaptcha = (data) => ajax(BASE_URL + '/loginCaptcha')

/*
事业部
 */
export const getBSList = (data) => ajax(BASE_URL + '/business/business', { 'class': 'select', page: data, })
export const editBS = (data) => ajax(BASE_URL + '/business/business', { 'class': 'add', ...data, }, 'post')
export const findBsById = (data) => ajax(BASE_URL + '/business/business?class=echoed', data, 'post')

/*
商品管理
 */
// 商品
export const getAllGoods = (data) => ajax(BASE_URL + '/goods/goods', { 'class': 'select', page: data, })
//根据id查询商品信息
export const findByIdGoods = (data) => ajax(BASE_URL + '/goods/goods', { 'class': 'find', id: data, })
//新增商品
export const addGoods = (data) => ajax(BASE_URL + '/goods/goods', { 'class': 'add', ...data, }, 'post')
//修改商品
export const editGoods = (data) => ajax(BASE_URL + '/goods/goods', { 'class': 'edit', ...data, }, 'post')
//商品分类
export const getAllGoodsClassify = (data) => ajax(BASE_URL + '/goods/setClassify', {
  'class': 'select',
  page: data,
})
// 删除商品
export const setClassIfy = (data) => ajax(BUSE_URL + '/goods/setClassify' , {'class': 'delete',id : data})

//文章
//获取文章列表
export const getAllArticle = (data) => ajax(BASE_URL + '/article/article', { 'class': 'select', page: data, })

//文章分类
//获取文章分类列表
export const getAllArticleClassify = (data) => ajax(BASE_URL + '/article/articleClassify', {
  'class': 'select',
  page: data,
})
export const deleteAllArticleClassify = (data) => ajax(BASE_URL + '/article/articleClassify', {
  'class': 'delete',
  id: data,
})

//赠送商城
//获取审核列表
export const getAllPresentedApply = (data) => ajax(BASE_URL + '/members/applyTime', {
  'class': 'select',
  page: data,
})

//订单
//获取订单列表
export const getAllOrder = (data) => ajax(BASE_URL + '/order/order', { 'class': 'select', page: data, })

//游客订单
//获取游客订单列表
export const getAllVisitorOrder = (data) => ajax(BASE_URL + '/order/tourisOrder', {
  'class': 'select',
  page: data,
})

//公共图片
//获取公共图片列表
export const getAllPublicImg = (data) => ajax(BASE_URL + '/journal/Publicimg', {
  'class': 'select',
  page: data,
})
//根据id查找图片信息
export const findByIdPublicImg = (data) => ajax(BASE_URL + '/journal/Publicimg', {
  'class': 'find',
  id: data,
})
//添加/编辑图片
export const addPublicImg = (data) => ajax(BASE_URL + '/journal/Publicimg', { 'class': 'add', ...data, }, 'post')
//根据id删除图片
export const delByIdPublicImg = (data) => ajax(BASE_URL + '/journal/Publicimg', {
  'class': 'delete',
  id: data,
})


//日志管理
//日志列表
// export const getAllLog = (data) => ajax(BASE_URL + '/journal/logget', { 'class': 'select', page: data, })

//图片管理
//删除图片
export const delImg = (data) => ajax(BASE_URL + '/img/imgUpload', { 'img_type': 'del', key: data, })
export const addImg = (data) => ajax(BASE_URL + '/img/imgUpload', { 'img_type': 'add', file: data, })
