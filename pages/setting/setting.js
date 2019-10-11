var themeUtil = require('../../utils/theme.js')
const app = getApp()

Page({
  data: {
    theme: 'royal',
    themeList: ['darkBlue', 'royal', 'balanced', 'light', 'calm', 'positive']
  },
  onLoad: function () {
    
  },
  onShow: function () {
    var that = this;
    var themeName = app.globalData.theme;
    var currentTheme = themeUtil.theme(themeName);

    // 导航背景色和字体颜色
    wx.setNavigationBarColor({
      frontColor: currentTheme.frontColor,
      backgroundColor: currentTheme.color
    });

    that.setData({
      // 主题设置
      theme: themeName
    });
  },
  changeTheme: function(e) {
    this.setData({
      // 主题设置
      theme: e.detail.value
    });
    wx.setStorageSync("theme", e.detail.value);
    app.globalData.theme = wx.getStorageSync("theme");
  }
})
