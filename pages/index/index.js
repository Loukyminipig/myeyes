//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navHeight: '',
    menuButtonInfo: {},
    searchMarginTop: 0,
    searchWidth: 0,
    searchHeight: 0,
    infolist1: [
      {
        content: '情绪也会影响眼睛',
        bgcolor: 'cyan'
      },
      {
        content: '买眼药水时要注意是否含有防腐剂',
        bgcolor: 'blue'
      },
      {
        content: '点眼药水前记得一定要洗手，最好是躺着点用',
        bgcolor: 'purple'
      },
      {
        content: '电脑显示屏顶端和眼睛处在同一或者稍低水平',
        bgcolor: 'mauve'
      }, {
        content: '外出需要避免眼睛长时间暴露于强日光照射环境',
        bgcolor: 'pink'
      }
    ],
    infolist2: [
      {
        content: '富含维生素和叶黄素的新鲜蔬菜、水果、动物肝脏',
        bgcolor: 'cyan'
      },
      {
        content: '水果：猕猴桃、黄瓜、芒果、葡萄、橙子',
        bgcolor: 'blue'
      },
      {
        content: '蔬菜：菠菜、芦笋、芥蓝、花椰菜、胡萝卜',
        bgcolor: 'purple'
      },
      {
        content: '其他：核桃、黑芝麻、黑木耳、海带、蛋黄',
        bgcolor: 'mauve'
      }, {
        content: '花茶类：金盏花、万寿菊等',
        bgcolor: 'pink'
      }
    ]
  },
  onLoad: function () {
    this.setData({
      menuButtonInfo: wx.getMenuButtonBoundingClientRect()
    })
    console.log(this.data.menuButtonInfo)
    const { top, width, height, right } = this.data.menuButtonInfo
    wx.getSystemInfo({
      success: (res) => {
        const { statusBarHeight } = res
        const margin = top - statusBarHeight
        this.setData({
          navHeight: (height + statusBarHeight + (margin * 2)),
          searchMarginTop: statusBarHeight + margin,
          searchHeight: height,
          searchWidth: right - width
        })
      },
    })
  }
})
