// pages/glasses/details/details.js
var dataObj = require('../../../data/data.js');
let id = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModalStatus: false,
    isBuy: true,
    isCollect: false,
    list: [],
    num: 1,
    minusStatus: 'disabled',
    username: '',
    mobilePhone: 0,
    address: '',
    goods_img: '',
    goods_price: '',
    goods_title: ''
  },


  onLoad: function (options) {
    var item = dataObj.goodsList[options.id - 1];
    console.log(item)
    this.setData({
      goods_img: item.goods_img,
      goods_price: item.goods_price,
      goods_title: item.goods_title
    })
  },

  bindBlur: function (e) {
    if (this.data.num < 1) {
      wx.showToast({
        title: '该宝贝不能再减少了哦~',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        num: 1
      })
    } else {
      // console.log(this.data.num)
    }
  },
  bindMinus: function (e) { //减少数量
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  bindPlus: function (e) { //增加数量
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });

  },
  bindManual(event) { //获取输入框数值 
    this.setData({
      num: parseInt(event.detail.value)
    });
  },

  successAddToCart: function (e) {
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    })
    this.setData({
      showModalStatus: false
    })
  },

  addCart: function (e) { //添加到购物车

  },

  getAddressFun: function (e) {

  },

  bindBuyNow: function (e) { //立即购买
    var that = this
    wx.showModal({
      title: '模拟支付功能',
      content: '需要支付：' + (this.data.list.price * this.data.num),
      success: function (res) {
        if (res.confirm) { //这里是点击了确定以后
          console.log('用户点击确定')
        } else { //这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
  },

  hideModal: function () {
    this.setData({
      showModalStatus: false,
    })
  },

  addToCartFun: function (e) {
    this.setData({
      showModalStatus: true,
      isBuy: false,
    })
  },
  buyNow: function (e) {
    this.setData({
      showModalStatus: true,
      isBuy: true,
    })
  },
  collectFun: function (e) { //收藏

  },

  onShareAppMessage: function (res) {
    let id = this.data.list._id
    // console.log(id)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '[好友推介]' + this.data.list.title,
      path: '/pages/details/details?id=' + id
    }
  },
  onShareTimeline: function () {
    return {
      title: '[好友推介]' + this.data.list.title,
      query: {
        key: value
      },
      imageUrl: ''
    }
  },
})