// pages/glasses/glasses.js
var dataObj = require('../../data/data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    filterList_list1: [
      '尼康',
      '豪雅',
      '精工',
      '苏拿',
      '楷模'
    ],
    filterList_list2: [
      '近视镜',
      '平光镜',
      '太阳镜',
      '隐形眼镜'
    ],
    filterList_list3: [
      '半小时内',
      '1小时内',
      '2小时内',
      '半天内'
    ],
    capacity_list: [
      '综合',
      '销量',
      '好评',
      '性价比'
    ],
    states: -1,
    goodsList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goodsList: dataObj.goodsList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  changeBoxBtn: function (e) {
    // console.log(e.target.dataset.num)
    var states = e.target.dataset.num;
    this.setData({
      states: states
    })
  },

  filterDone: function (e) {
    // console.log('filterDone', this.data.states);
    this.setData({
      states: -1
    })
  },

  tapsort: function () {
    this.setData({
      states: -1
    })
  }
})