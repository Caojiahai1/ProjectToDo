// pages/index2/index2.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonTop: 0,
    buttonLeft: 0,
    windowHeight: '',
    windowWidth: '',
    startPoint:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 屏幕宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 高度,宽度 单位为px
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
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

  buttonStart: function (e) {
    // var startPoint = e.touches[0]
    this.setData({
      startPoint:e.touches[0]
    });
  },

  buttonMove: function (e) {
    var endPoint = e.touches[e.touches.length - 1]
    var translateX = endPoint.clientX - this.data.startPoint.clientX
    var translateY = endPoint.clientY - this.data.startPoint.clientY
    this.data.startPoint = endPoint
    var buttonTop = this.data.buttonTop + translateY
    var buttonLeft = this.data.buttonLeft + translateX
    //判断是移动否超出屏幕
    if (buttonLeft + 50 >= this.data.windowWidth) {
      buttonLeft = this.data.windowWidth - 50;
    }
    if (buttonLeft <= 0) {
      buttonLeft = 0;
    }
    if (buttonTop <= 50) {
      buttonTop = 50
    }
    if (buttonTop + 50 >= this.data.windowHeight) {
      buttonTop = this.data.windowHeight - 50;
    }
    this.setData({
      buttonTop: buttonTop,
      buttonLeft: buttonLeft
    })
  },

  buttonEnd: function (e) {
    //拖动结束
    // wx.showToast({
    //   title: '走你',
    // })
  },
  clicks: function () {
    wx.showToast({
      title: '走你',
    })
  }

})