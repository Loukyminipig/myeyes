// pages/healthy/healthy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qlist:[
      '你是否出现眼睛干涩的症状？',
      '你是否出现眼睛充血的症状？',
      '你是否出现泪流满面的症状？',
      '你是否出现眼屎异常的症状？',
      '你是否出现眼睛发白的症状？',
      '你是否出现视野遮挡的症状？',
      '你是否出现红血丝的症状？'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  gotoHealthyResult:function(){
    wx.navigateTo({
      url: '/pages/healthy/result/result',
    })
  }
})