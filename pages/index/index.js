//index.js
//获取应用实例1
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    marginTop: '',
    array: [
      {text: "11111",date: "2019/09/29"},
      { text: "22222", date: "2019/09/30" },
      { text: "11111", date: "2019/09/29" },
      { text: "22222", date: "2019/09/30" },
      { text: "11111", date: "2019/09/29" },
      { text: "22222", date: "2019/09/30" },
      { text: "11111", date: "2019/09/29" },
      { text: "22222", date: "2019/09/30" },
      { text: "11111", date: "2019/09/29" },
      { text: "22222", date: "2019/09/30" },
      { text: "11111", date: "2019/09/29" },
      { text: "22222", date: "2019/09/30" },
    ],
    taskBgColor: '#6491CB',
  },
  addTask: function() {
    this.setData({
      taskBgColor: '#234678'
    })
  },
  moveTask: function () {
    this.setData({
      taskBgColor: '#6491CB'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.select('.topFixedView').boundingClientRect(function (rect) {
      // console.log(rect.height)
      that.setData({
        marginTop: rect.height + 'px'
      })
    }).exec();


    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        active: 0
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
