Component({
  data: {
    active: 0,
    list: [
      {
        icon: 'home-o',
        text: '示例1',
        url: '/pages/index/index'
      },
      {
        icon: 'search',
        text: '示例2',
        url: '/pages/setting/setting'
      },
      {
        icon: 'search',
        text: '示例3',
        url: '/pages/logs/logs'
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
