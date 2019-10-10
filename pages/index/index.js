var themeUtil = require('../../utils/theme.js')

//获取应用实例1
const app = getApp()
const buttons = [
  // 这一相必须放在第一个，修改了源码
  {
    label: '添加一个事项',
    iconType: 'ios-add',
  },
  {
    label: '设置',
    iconType: 'ios-settings',
  }
]

Page({
  // 页面初始化数据
  data: {
    // 主题
    theme : {

    },
    searchplaceholder: "",
    buttons,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 搜索框固定在顶部，任务列表具体顶部的距离，在onload方法中设置
    marginTop: '',
    // 任务列表数据
    taskList: [
      { text: "11111", date: "2019/09/29", icon: "md-checkbox-outline"},
      { text: "22222", date: "2019/09/30", icon: "md-square-outline" },
      { text: "11111", date: "2019/09/29", icon: "md-checkbox-outline" },
      { text: "22222", date: "2019/09/30", icon: "md-square-outline" },
      { text: "11111", date: "2019/09/29", icon: "md-checkbox-outline" },
      { text: "22222", date: "2019/09/30", icon: "md-square-outline" },
      { text: "11111", date: "2019/09/29", icon: "md-checkbox-outline" },
      { text: "22222", date: "2019/09/30", icon: "md-square-outline" }
    ],
    // taskBgColor: '#6491CB',
    inputBottom: 0,
    inputDisplay: "none",
    inputShowed: false,
    TodayList:[],
    input:""
  },

  addTask: function() {
    this.setData({
      // taskBgColor: '#234678',
      inputDisplay: 'block',
      inputShowed: true
    })
  },
  
  // moveTask: function () {
  //   this.setData({
  //     taskBgColor: '#6491CB'
  //   })
  // },
  // 输入框聚焦
  inputFocus: function (e) {
    var that = this;
    if (that.data.inputBottom == 0) {
      that.setData({
        inputBottom: e.detail.height
        // inputBottom:100
      })
    }
  },

  inputblur: function() {
    var that = this;
    that.setData({
      inputDisplay: 'none',
      // inputBottom: 60
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    });    //转发功能

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
        });
        // // 用户登录
        // app.wxRequest("POST", "/User/onLine", res.userInfo, 
        // function(data){
        //   if (data.resultCode == '200') {
        //     app.globalData.userId = data.data
        //   }
        // }, function(res) {

        // })
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

    var that = this;
    var date1 = new Date;
    var date2 = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var Today;
    Today = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate() + '   ' + (date2[date1.getDay()]);

    var currentTheme = themeUtil.theme();
    that.setData({
      // 当前日期
      searchplaceholder: Today,
      // 主题设置
      theme: currentTheme
    });

    // 导航背景色和字体颜色
    wx.setNavigationBarColor({
      frontColor: currentTheme.frontColor,
      backgroundColor: currentTheme.color
    })

    var query = wx.createSelectorQuery();
    var that = this;
    query.select('.topFixedView').boundingClientRect(function (rect) {
      // console.log(rect.height)
      that.setData({
        marginTop: (rect.height + 5) + 'px'
      })
    }).exec();

    that.loadData();
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // 点击搜索框后，显示文字变为搜索指定事项
  onFocus: function(){
    var that = this;
    that.setData({
      searchplaceholder: "搜索指定事项"
    });  
  },

  // 离开搜索框后，显示文字变为时间
  onBlur:function(){
    var that = this;
    var date1 = new Date;
    var date2 = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var Today;
    Today = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate() + '   ' + (date2[date1.getDay()]);
    that.setData({
      searchplaceholder: Today
    });
  },


  // 新增
  save: function () {
    wx.setStorageSync('TodayList', this.data.TodayList);
  },

  loadData: function () {
    var todo = wx.getStorageSync('TodayList');
    if (todo) {
      this.setData({
        TodayList: todo
      });
    }
  },

  AddInput: function (e) {
    this.setData({
      input: e.detail.value
    });
  },

  //更改任务状态
  toggleTodoHandle: function (e) {
    var todo = this.data.TodayList;
    //获取e传输的id
    var index = e.currentTarget.id;
    //改变complete状态
    todo[index].completed = !todo[index].completed;
    //更改数据
    this.setData({
      TodayList:todo
    });
    this.save();
  },

// 增加一条记录

  AddConfirm: function (e) {
    var that = this;
    var todo = this.data.TodayList;
    todo.push({ description: e.detail.value, completed: false })
    //更新数据
    that.setData({ TodayList: todo, input: '' });
    //输出日志信息
    console.log(this.data.TodayList)
    //保存记录到本地
    that.save();
  },
  // 清除一条记录
  removeTodoHandle: function (e) {
    var todo = this.data.TodayList;
    var index = e.currentTarget.id;
    //删除数据
    todo.splice(index, 1);
    console.log(todo);
    //设置数据
    this.setData({
      TodayList: todo
    });
    this.save();
  },

})
