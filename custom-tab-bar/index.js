Component({
  data: {
    active: 0,
    list: [
      {
        icon: 'todo-list',
        text: 'task',
        url: '/pages/index/index'
      },
      {
        icon: 'manager',
        text: '个人中心',
        url: '/pages/setting/setting'
      }
    ]
  },

  methods: {
    onChange(event) {
      this.setData({ active: event.detail });
      wx.switchTab({
        url: this.data.list[event.detail].url
      });
    },

    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  }
});
