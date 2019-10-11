var themeUtil = require('../../utils/theme.js')
const app = getApp();
const themeMapping = {
  '#6491CB': 'darkBlue',
  '#886aea': 'royal',
  '#33cd5f': 'balanced',
  '#ddd': 'light',
  '#11c1f3': 'calm',
  '#387ef5': 'positive',
}
const themeList = [{
  value: '#6491CB',
  label: 'darkBlue'
}, {
    value: '#886aea',
    label: 'royal',
}, {
    value: '#33cd5f',
    label: 'balanced'
}, {
    value: '#ddd',
    label: 'light'
}, {
    value: '#11c1f3',
    label: 'calm'
}, {
    value: '#387ef5',
    label: 'positive'
}];

Page({
  data: {
    themeValue: [],
    themeName: '',
    chooseColor: '',
    // themeList: ['darkBlue', 'royal', 'balanced', 'light', 'calm', 'positive'],
    themeOptions: themeList
  },
  onLoad: function () {
    //转发功能
    wx.showShareMenu({
      withShareTicket: true
    }); 
  },
  // 渲染
  onShow: function () {
    var that = this;
    var themeName = app.globalData.theme;
    that.setTheme(themeName);
    that.setPageData(themeName);
  },
  // 设置页面data
  setPageData: function (themeName) {
    var themeColor = themeUtil.themeList[themeName].color;
    this.setData({
      // 主题设置
      themeValue: [themeColor],
      themeName: themeName,
      chooseColor: themeColor
    });
  },
  // 设置导航背景色
  setTheme: function (themeName) {
    var currentTheme = themeUtil.theme(themeName);
    // 导航背景色和字体颜色
    wx.setNavigationBarColor({
      frontColor: currentTheme.frontColor,
      backgroundColor: currentTheme.color
    });
  },
  // 选择主题
  confirmTheme: function(e) {
    var themeName = themeMapping[e.detail.value];
    this.setTheme(themeName);
    this.setPageData(themeName);
    wx.setStorageSync("theme", themeName);
    app.globalData.theme = wx.getStorageSync("theme");
  },
  // 主题滚动事件
  themeChange: function(e) {
    this.setData({
      chooseColor: e.detail.value
    });
  }
})
