// pages/glasses/glasses.js
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
    goodsList:[
      {
        goods_id:1,
        goods_title:'【微月新色】Miacare美若康绽美硅水凝胶彩色隐形...',
        goods_img:'/images/美瞳_隐形眼镜/u298.JPG',
        goods_sellnum:'2610',
        goods_price:'33.6',
        content: '同城配送',
        op:'30分钟 1.3Km',
        tip:'活动中'
      },{
        goods_id:2,
        goods_title:'【立抢！预售省40元】海俪恩美瞳女罗小黑日抛30片...',
        goods_img:'/images/美瞳_隐形眼镜/u315.JPG',
        goods_sellnum:'7261',
        goods_price:'55',
        content: '同城配送',
        op:'39分钟 3Km',
        tip:'活动中'
      }, {
        goods_id: 3,
        goods_title: '超轻近视眼镜女防辐射抗蓝光疲劳素颜平光变色平面...',
        goods_img:'/images/美瞳_隐形眼镜/u325.JPG',
        goods_sellnum: '2610',
        goods_price: '179',
        content: '同城配送',
        op:'30分钟 918m',
        tip:'折扣'
      }, {
        goods_id: 4,
        goods_title: '海俪恩隐形眼镜护理液水次方500+120ml官方正品...',
        goods_img:'/images/美瞳_隐形眼镜/u335.JPG',
        goods_sellnum: '2610',
        goods_price: '49',
        content: '同城配送',
        op:'40分钟 3.5km',
        tip:'折扣'
      }, {
        goods_id: 5,
        goods_title: '墨镜男士2021新款潮流gm太阳镜偏光驾驶开车专用...',
        goods_img:'/images/美瞳_隐形眼镜/u345.JPG',
        goods_sellnum: '4364',
        goods_price: '312.9',
        content: '同城配送',
        op:'55分钟 6.5km',
        tip:'折扣'
      },{
        goods_id: 6,
        goods_title: 'moody美瞳日抛10片装小直径美瞳彩色隐形眼镜正品...',
        goods_img:'/images/美瞳_隐形眼镜/u355.JPG',
        goods_sellnum: '1343',
        goods_price: '79.9',
        content: '同城配送',
        op:'20分钟 1.5km',
        tip:'预售'
      },{
        goods_id: 7,
        goods_title: '可啦啦美瞳半年抛女隐形近视眼镜男非月抛年抛日抛...',
        goods_img:'/images/美瞳_隐形眼镜/u365.JPG',
        goods_sellnum: '1022',
        goods_price: '75.9',
        content: '同城配送',
        op:'20分钟 1km',
        tip:'活动中'
      }
    ],
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